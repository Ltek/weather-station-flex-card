/* weather-station-flex-card 2026.11.01.102 editor — https://github.com/Ltek/weather-station-flex-card */
var O2=Object.defineProperty;var D3=Object.getOwnPropertyDescriptor;var W3=(M,C,H)=>C in M?O2(M,C,{enumerable:!0,configurable:!0,writable:!0,value:H}):M[C]=H;var y1=(M,C,H,e)=>{for(var L=e>1?void 0:e?D3(C,H):C,i=M.length-1,a;i>=0;i--)(a=M[i])&&(L=(e?a(C,H,L):a(L))||L);return e&&L&&O2(C,H,L),L};var R=(M,C,H)=>W3(M,typeof C!="symbol"?C+"":C,H);var y2=globalThis.__wsfcHost?.lit;if(!y2)throw new Error("wsfc-editor.js: the card did not provide lit; update every file of the card together");var{CSSResult:A7,LitElement:N,ReactiveElement:l7,_$LE:d7,_$LH:s7,adoptStyles:p7,css:D,defaultConverter:m7,getCompatibleStyle:c7,html:o,isServer:v7,mathml:u7,noChange:x7,notEqual:Z7,nothing:u,render:f7,supportsAdoptingStyleSheets:h7,svg:S7,unsafeCSS:g7}=y2;var k2,T2;(function(M){M.language="language",M.system="system",M.comma_decimal="comma_decimal",M.decimal_comma="decimal_comma",M.space_comma="space_comma",M.none="none"})(k2||(k2={})),(function(M){M.language="language",M.system="system",M.am_pm="12",M.twenty_four="24"})(T2||(T2={}));var U=function(M,C,H,e){e=e||{},H=H??{};var L=new Event(C,{bubbles:e.bubbles===void 0||e.bubbles,cancelable:!!e.cancelable,composed:e.composed===void 0||e.composed});return L.detail=H,M.dispatchEvent(L),L};var F2=globalThis.__wsfcHost?.["vendor/weather-forecast-card/src/weather-forecast-card.ts"];if(!F2)throw new Error("wsfc-editor.js: the card did not provide vendor/weather-forecast-card/src/weather-forecast-card.ts; update every file of the card together");var{WeatherForecastCard:r2}=F2;var B2=globalThis.__wsfcHost?.["lit/decorators"];if(!B2)throw new Error("wsfc-editor.js: the card did not provide lit/decorators; update every file of the card together");var{customElement:P2,eventOptions:O7,property:$2,query:y7,queryAll:k7,queryAssignedElements:T7,queryAssignedNodes:F7,queryAsync:B7,standardProperty:P7,state:R2}=B2;var E2="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var D2="M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z";var W2=Number.isNaN||function(C){return typeof C=="number"&&C!==C};function N3(M,C){return!!(M===C||W2(M)&&W2(C))}function z3(M,C){if(M.length!==C.length)return!1;for(var H=0;H<M.length;H++)if(!N3(M[H],C[H]))return!1;return!0}function N2(M,C){C===void 0&&(C=z3);var H=null;function e(){for(var L=[],i=0;i<arguments.length;i++)L[i]=arguments[i];if(H&&H.lastThis===this&&C(L,H.lastArgs))return H.lastResult;var a=M.apply(this,L);return H={lastResult:a,lastArgs:L,lastThis:this},a}return e.clear=function(){H=null},e}var I3=typeof global=="object"&&global&&global.Object===Object&&global,z2=I3;var G3=typeof self=="object"&&self&&self.Object===Object&&self,U3=z2||G3||Function("return this")(),I2=U3;var Q3=I2.Symbol,J=Q3;var G2=Object.prototype,j3=G2.hasOwnProperty,q3=G2.toString,v1=J?J.toStringTag:void 0;function K3(M){var C=j3.call(M,v1),H=M[v1];try{M[v1]=void 0;var e=!0}catch{}var L=q3.call(M);return e&&(C?M[v1]=H:delete M[v1]),L}var U2=K3;var Y3=Object.prototype,X3=Y3.toString;function J3(M){return X3.call(M)}var Q2=J3;var C0="[object Null]",H0="[object Undefined]",j2=J?J.toStringTag:void 0;function V0(M){return M==null?M===void 0?H0:C0:j2&&j2 in Object(M)?U2(M):Q2(M)}var q2=V0;function L0(M){return M!=null&&typeof M=="object"}var K2=L0;var e0="[object Symbol]";function r0(M){return typeof M=="symbol"||K2(M)&&q2(M)==e0}var Y2=r0;function t0(M,C){for(var H=-1,e=M==null?0:M.length,L=Array(e);++H<e;)L[H]=C(M[H],H,M);return L}var X2=t0;var M0=Array.isArray,J2=M0;var i0=1/0,C5=J?J.prototype:void 0,H5=C5?C5.toString:void 0;function V5(M){if(typeof M=="string")return M;if(J2(M))return X2(M,V5)+"";if(Y2(M))return H5?H5.call(M):"";var C=M+"";return C=="0"&&1/M==-i0?"-0":C}var L5=V5;function o0(M){return M==null?"":L5(M)}var k1=o0;function a0(M,C,H){var e=-1,L=M.length;C<0&&(C=-C>L?0:L+C),H=H>L?L:H,H<0&&(H+=L),L=C>H?0:H-C>>>0,C>>>=0;for(var i=Array(L);++e<L;)i[e]=M[e+C];return i}var e5=a0;function n0(M,C,H){var e=M.length;return H=H===void 0?e:H,!C&&H>=e?M:e5(M,C,H)}var r5=n0;var A0="\\ud800-\\udfff",l0="\\u0300-\\u036f",d0="\\ufe20-\\ufe2f",s0="\\u20d0-\\u20ff",p0=l0+d0+s0,m0="\\ufe0e\\ufe0f",c0="\\u200d",v0=RegExp("["+c0+A0+p0+m0+"]");function u0(M){return v0.test(M)}var T1=u0;function x0(M){return M.split("")}var t5=x0;var M5="\\ud800-\\udfff",Z0="\\u0300-\\u036f",f0="\\ufe20-\\ufe2f",h0="\\u20d0-\\u20ff",S0=Z0+f0+h0,g0="\\ufe0e\\ufe0f",w0="["+M5+"]",t2="["+S0+"]",M2="\\ud83c[\\udffb-\\udfff]",b0="(?:"+t2+"|"+M2+")",i5="[^"+M5+"]",o5="(?:\\ud83c[\\udde6-\\uddff]){2}",a5="[\\ud800-\\udbff][\\udc00-\\udfff]",_0="\\u200d",n5=b0+"?",A5="["+g0+"]?",O0="(?:"+_0+"(?:"+[i5,o5,a5].join("|")+")"+A5+n5+")*",y0=A5+n5+O0,k0="(?:"+[i5+t2+"?",t2,o5,a5,w0].join("|")+")",T0=RegExp(M2+"(?="+M2+")|"+k0+y0,"g");function F0(M){return M.match(T0)||[]}var l5=F0;function B0(M){return T1(M)?l5(M):t5(M)}var d5=B0;function P0(M){return function(C){C=k1(C);var H=T1(C)?d5(C):void 0,e=H?H[0]:C.charAt(0),L=H?r5(H,1).join(""):C.slice(1);return e[M]()+L}}var s5=P0;var $0=s5("toUpperCase"),p5=$0;function R0(M){return p5(k1(M).toLowerCase())}var C1=R0;var m5=globalThis.__wsfcHost?.["vendor/weather-forecast-card/src/types.ts"];if(!m5)throw new Error("wsfc-editor.js: the card did not provide vendor/weather-forecast-card/src/types.ts; update every file of the card together");var{CHART_ATTRIBUTES:c5,CURRENT_WEATHER_ATTRIBUTES:K,DEFAULT_CHART_ATTRIBUTE:T4,ForecastMode:F4,MAX_TEMPERATURE_PRECISION:i2,WEATHER_EFFECTS:F1}=m5;var E0={humidity:"humidity",pressure:["pressure","atmospheric_pressure"],wind_speed:"wind_speed",wind_gust_speed:"wind_speed",visibility:"distance",dew_point:"temperature",apparent_temperature:"temperature",uv_index:void 0,ozone:void 0,cloud_coverage:void 0},j=class extends N{constructor(){super(...arguments);this._schema=N2((H,e,L)=>[...this._genericSchema(H),...this._currentWeatherSchema(H),...this._forecastSchema(H),...this._interactionsSchema(L),...this._attributeEntitiesSchema(e),...this._advancedSchema()]);this._genericSchema=H=>[{name:"entity",required:!0,selector:{entity:{domain:"weather"}},optional:!1},{name:"name",selector:{text:{}},optional:!0},{name:"forecast_mode",default:"show_both",selector:{select:{options:[{value:"show_both",label:H("ui.panel.lovelace.editor.card.weather-forecast.show_both")},{value:"show_current",label:H("ui.panel.lovelace.editor.card.weather-forecast.show_only_current")},{value:"show_forecast",label:H("ui.panel.lovelace.editor.card.weather-forecast.show_only_forecast")}]}}},{name:"default_forecast",default:"daily",optional:!0,selector:{select:{options:[{value:"hourly",label:H("ui.panel.lovelace.editor.card.weather-forecast.hourly")},{value:"daily",label:H("ui.panel.lovelace.editor.card.weather-forecast.daily")}]}}},{name:"show_condition_effects",default:!1,optional:!0,selector:{select:{multiple:!0,options:F1.map(e=>({value:e,label:C1(e)}))}}},{name:"show_moon_phase",selector:{boolean:{}},default:!0,optional:!0}];this._currentWeatherSchema=H=>[{name:"current.temperature_entity",selector:{entity:{domain:"sensor",device_class:"temperature"}},optional:!0},{name:"current.show_attributes",default:!1,optional:!0,selector:{select:{multiple:!0,options:K.map(e=>({value:e,label:H(`ui.card.weather.attributes.${e}`)||C1(e).replace(/_/g," ")}))}}},{name:"current.secondary_info_attribute",default:"none",optional:!0,selector:{select:{options:K.map(e=>({value:e,label:H(`ui.card.weather.attributes.${e}`)||C1(e).replace(/_/g," ")}))}}}];this._forecastSchema=H=>[{name:"forecast.mode",default:"simple",selector:{select:{options:[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}]}},optional:!0},{name:"forecast.default_chart_attribute",selector:{select:{mode:"dropdown",options:c5.map(e=>({value:e,label:e==="temperature_and_precipitation"?`${H("ui.card.weather.attributes.temperature")||"Temperature"}, ${H("ui.card.weather.attributes.precipitation")||"Precipitation"}`:H(`ui.card.weather.attributes.${e}`)||C1(e).replace(/_/g," ")}))}},optional:!0},{name:"forecast.extra_attribute",optional:!0,selector:{select:{mode:"dropdown",options:[{value:"none",label:H("ui.panel.lovelace.editor.card.weather-forecast.none")||"(no attribute)"},{value:"wind_bearing",label:H("ui.card.weather.attributes.wind_bearing")||"Wind bearing"},{value:"wind_direction",label:H("ui.card.weather.attributes.wind_direction")||"Wind direction"},{value:"precipitation_probability",label:H("ui.card.weather.attributes.precipitation_probability")||"Precipitation probability"},{value:"uv_index",label:H("ui.card.weather.attributes.uv_index")||"UV index"}]}}},{name:"forecast.scroll_to_selected",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_sun_times",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.use_color_thresholds",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_attribute_selector",selector:{boolean:{}},default:!1,optional:!0},{name:"forecast.hourly_group_size",optional:!0,selector:{number:{min:1,max:4}},default:1},{name:"forecast.hourly_slots",optional:!0,selector:{number:{min:1}}},{name:"forecast.daily_slots",optional:!0,selector:{number:{min:1}}}];this._interactionsSchema=H=>{let e=[],L=[{name:"forecast_action.tap_action",selector:{ui_action:{default_action:"toggle-forecast"}}}];return H==="chart"?(e.push("double_tap_action"),L.push({name:"forecast_action.hold_action",selector:{ui_action:{default_action:"select-forecast-attribute"}}})):e.push("hold_action","double_tap_action"),L.push({name:"",type:"optional_actions",flatten:!0,schema:e.map(i=>({name:`forecast_action.${i}`,selector:{ui_action:{default_action:"none"}}}))}),[{name:"forecast_interactions",type:"expandable",flatten:!0,schema:L},{name:"interactions",type:"expandable",flatten:!0,schema:[{name:"tap_action",selector:{ui_action:{default_action:"more-info"}}},{name:"",type:"optional_actions",flatten:!0,schema:["hold_action","double_tap_action"].map(i=>({name:i,selector:{ui_action:{default_action:"none"}}}))}]}]};this._attributeEntitiesSchema=H=>H.length===0?[]:[{name:"attribute_entities",type:"expandable",flatten:!0,schema:H.flatMap(L=>{let i=E0[L];return[{name:`current.attribute_entity_${L}`,optional:!0,selector:i?{entity:{domain:"sensor",device_class:i}}:{entity:{domain:"sensor"}}},{name:`current.attribute_label_${L}`,optional:!0,selector:{text:{}}},{name:`current.attribute_icon_${L}`,optional:!0,selector:{icon:{}}}]})}];this._advancedSchema=()=>[{name:"advanced_settings",type:"expandable",flatten:!0,schema:[{name:"forecast_types",default:"both",optional:!0,selector:{select:{options:[{value:"both",label:"Hourly and daily"},{value:"daily",label:"Daily only"},{value:"hourly",label:"Hourly only"}]}}},{name:"icons_path",selector:{text:{}},optional:!0},{name:"current.temperature_precision",optional:!0,selector:{number:{min:0,max:i2}}},{name:"forecast.temperature_precision",optional:!0,selector:{number:{min:0,max:i2}}}]}];this._computeCustomAttributeLabel=H=>{switch(H.name){case"entity":return this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"Entity";case"label":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name")||"Name";case"icon":return this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")||"Icon";default:return H.name}};this._addCustomAttribute=()=>{let H=e1(this._config.current?.show_attributes);this._commitCustomAttributes([...H,{}])};this._removeCustomAttribute=H=>{let e=e1(this._config.current?.show_attributes);e.splice(H,1),this._commitCustomAttributes(e)};this._customAttributeChanged=(H,e)=>{e.stopPropagation();let L=e1(this._config.current?.show_attributes);L[H]=e.detail.value,this._commitCustomAttributes(L)};this._computeLabel=H=>{if(H.name.startsWith("current.attribute_label_")){let L=H.name.replace("current.attribute_label_","");return`${this.localize(`ui.card.weather.attributes.${L}`)||C1(L).replace(/_/g," ")} label`}if(H.name.startsWith("current.attribute_icon_")){let L=H.name.replace("current.attribute_icon_","");return`${this.localize(`ui.card.weather.attributes.${L}`)||C1(L).replace(/_/g," ")} icon`}if(H.name.startsWith("current.attribute_entity_")){let L=H.name.replace("current.attribute_entity_",""),i=this.localize(`ui.card.weather.attributes.${L}`)||C1(L).replace(/_/g," "),a=(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase();return`${i} ${a}`}let e=H.name.startsWith("forecast_action.")?H.name.split(".")[1]:H.name;switch(e){case"entity":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${(this.hass.localize("ui.panel.lovelace.editor.card.config.required")||"required").toLocaleLowerCase()})`;case"name":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name");case"current.temperature_entity":return`${this.hass.localize("ui.card.weather.attributes.temperature")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase()}`;case"forecast_mode":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.weather_to_show");case"default_forecast":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.forecast_type");case"forecast_types":return"Forecast types to load";case"icons_path":return"Path to custom icons";case"current.show_attributes":return this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute";case"current.secondary_info_attribute":return this.hass.localize("ui.panel.lovelace.editor.card.generic.secondary_info_attribute")||"Secondary info attribute";case"forecast.extra_attribute":return`Extra ${(this.hass.localize("ui.card.weather.forecast")||"forecast").toLocaleLowerCase()} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute").toLocaleLowerCase()}`;case"forecast.mode":return"Forecast display mode";case"current.temperature_precision":return"Current temperature precision";case"forecast.temperature_precision":return"Forecast temperature precision";case"forecast.scroll_to_selected":return"Scroll to selected forecast";case"forecast.show_sun_times":return"Show sunrise and sunset times";case"forecast.use_color_thresholds":return"Use color thresholds";case"forecast.show_attribute_selector":return"Show forecast attribute selector";case"forecast.default_chart_attribute":return"Default chart forecast attribute";case"forecast.hourly_group_size":return"Hourly forecast group size";case"forecast.hourly_slots":return"Hourly forecast slots";case"forecast.daily_slots":return"Daily forecast slots";case"forecast_interactions":return`${this.hass.localize("ui.card.weather.forecast")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.interactions")||"interactions").toLocaleLowerCase()}`;case"advanced_settings":return this.hass.localize("ui.dialogs.helper_settings.generic.advanced_settings");case"show_condition_effects":return"Show condition effects";case"show_moon_phase":return"Show moon phase";case"attribute_entities":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute"} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")||"entities").toLocaleLowerCase()}`;default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e}`)}};this._computeHelper=H=>{switch(H.name){case"current.temperature_entity":return"Optional temperature sensor entity to override the weather entity's temperature.";case"default_forecast":return"Select the default forecast type to show when forecasts are enabled. Users can still toggle between hourly and daily forecasts if both are available.";case"forecast_types":return"Limit which forecast types the card subscribes to. Loading only the forecast you display reduces websocket load, which can prevent dashboard slowdowns on resource-constrained devices.";case"current.show_attributes":return"Select which weather attributes to display in the current weather section.";case"current.secondary_info_attribute":return"Select a weather attribute to display as secondary information in the current weather section.";case"forecast.extra_attribute":return"Select an extra attribute to display below each forecast.";case"forecast_interactions":return"Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.";case"interactions":return"Action to perform when the non-forecast area of the card is interacted with.";case"icons_path":return"Path to custom weather condition icons (e.g., /local/img/weather).";case"forecast.scroll_to_selected":return"Automatically scrolls to the first hourly forecast of the selected date when switching to hourly view, and returns to the first daily entry when switching back.";case"forecast.show_sun_times":return"Displays sunrise and sunset times in the hourly forecast, and uses specific icons to visualize clear night conditions.";case"forecast.use_color_thresholds":return"Replaces solid temperature lines with a gradient based on actual values when using forecast chart mode.";case"forecast.show_attribute_selector":return"When enabled and using chart mode, shows a selector above the forecast to choose which weather attribute to display.";case"forecast.default_chart_attribute":return"The forecast attribute to visualize by default in chart mode.";case"forecast.hourly_group_size":return"Aggregate hourly forecast data into groups to reduce the number of forecast entries shown.";case"forecast.hourly_slots":return"Limit the number of hourly forecast entries to show.";case"forecast.daily_slots":return"Limit the number of daily forecast entries to show.";case"current.temperature_precision":return"The number of decimal places to show for current temperature values.";case"forecast.temperature_precision":return"The number of decimal places to show for forecast temperature values.";case"name":return"Overrides the friendly name of the entity.";case"show_condition_effects":return"Select which weather conditions initiate visual effects and animations on the card.";case"show_moon_phase":return"Shades the night-time moon to match the current lunar phase based on your Home Assistant location. Disable to always show a full moon.";case"attribute_entities":return"Override weather attribute values with custom sensor entities.";default:return}};this.localize=H=>{let e;if(this._config?.entity&&H!=="ui.card.weather.attributes.precipitation"&&H.startsWith("ui.card.weather.attributes")){let L=this.hass.states[this._config.entity];L&&(e=this.hass.formatEntityAttributeName(L,H.replace("ui.card.weather.attributes.","")))}return e||(e=this.hass.localize(H)),e}}setConfig(H){this._config=H}render(){if(!this.hass||!this._config)return u;let H=B1(this._config),e=this._getSelectedAttributes(H),L=this._schema(this.localize.bind(this),e,H["forecast.mode"]);return o`
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
    `}_renderCustomAttributes(){let H=e1(this._config.current?.show_attributes);return o`
      <ha-expansion-panel outlined>
        <div slot="header" role="heading" aria-level="3">
          Custom entity attributes
        </div>
        <div class="custom-attributes">
          <p>
            Display any entity's state as an attribute. Pick an entity and
            optionally override its label and icon.
          </p>
          ${H.map((e,L)=>this._renderCustomAttributeRow(e,L))}
          <ha-button
            size="small"
            appearance="filled"
            variant="brand"
            @click=${this._addCustomAttribute}
          >
            <ha-svg-icon slot="start" .path=${D2}></ha-svg-icon>
            ${this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `}_renderCustomAttributeRow(H,e){return o`
      <div class="custom-attribute-row">
        <ha-form
          .hass=${this.hass}
          .data=${H}
          .schema=${D0}
          .computeLabel=${this._computeCustomAttributeLabel}
          @value-changed=${L=>this._customAttributeChanged(e,L)}
        ></ha-form>
        <ha-icon-button
          .path=${E2}
          .label=${this.hass.localize("ui.common.remove")||"Remove"}
          @click=${()=>this._removeCustomAttribute(e)}
        ></ha-icon-button>
      </div>
    `}_commitCustomAttributes(H){let e={...this._config,current:{...this._config.current,show_attributes:N0(this._config.current?.show_attributes,H)}};U(this,"config-changed",{config:e})}_getSelectedAttributes(H){let e=H["current.show_attributes"];return e?Array.isArray(e)?e.map(L=>typeof L=="string"?L:L.name):[]:[]}_valueChanged(H){H.stopPropagation();let e=H.detail.value;e.forecast_mode==="show_both"?(e.show_current=!0,e.show_forecast=!0):e.forecast_mode==="show_current"?(e.show_current=!0,e.show_forecast=!1):(e.show_current=!1,e.show_forecast=!0),delete e.forecast_mode;let L=z0(e);if(delete L.temperature_entity,L?.forecast?.extra_attribute==="none"&&delete L.forecast.extra_attribute,Array.isArray(L.show_condition_effects)&&F1.every(a=>L.show_condition_effects.includes(a))&&(L.show_condition_effects=!0),L?.current){let i={},a={},s={};for(let l of Object.keys(L.current))if(l.startsWith("attribute_entity_")){let A=l.replace("attribute_entity_",""),c=L.current[l];c&&(i[A]=c),delete L.current[l]}else if(l.startsWith("attribute_label_")){let A=l.replace("attribute_label_",""),c=L.current[l];c&&(a[A]=c),delete L.current[l]}else if(l.startsWith("attribute_icon_")){let A=l.replace("attribute_icon_",""),c=L.current[l];c&&(s[A]=c),delete L.current[l]}if(Array.isArray(L.current.show_attributes)){let l=e1(this._config?.current?.show_attributes);L.current.show_attributes=v5(L.current.show_attributes,{entity:i,label:a,icon:s},l)}}U(this,"config-changed",{config:L})}};j.styles=D`
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
  `,y1([$2({attribute:!1})],j.prototype,"hass",2),y1([R2()],j.prototype,"_config",2),j=y1([P2("wsfc-flex-core-editor")],j);var r1=M=>typeof M=="string"&&K.includes(M),e1=M=>{if(!Array.isArray(M))return[];let C=[];for(let H of M)if(H!=null){if(typeof H=="string")r1(H)||C.push({name:H});else if(typeof H=="object"){let e=H;r1(e.name)||C.push(e)}}return C},v5=(M,C,H)=>{let e=K.every(a=>M.includes(a)),L=Object.keys(C.entity).length>0||Object.keys(C.label).length>0||Object.keys(C.icon).length>0;return H.length===0&&!L&&e?!0:[...M.map(a=>{let s=C.entity[a],l=C.label[a],A=C.icon[a];return s||l||A?{name:a,...s?{entity:s}:{},...l?{label:l}:{},...A?{icon:A}:{}}:a}),...H]},D0=[{name:"entity",selector:{entity:{}}},{name:"label",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],W0=M=>{if(M===!0)return[...K];if(typeof M=="string")return r1(M)?[M]:[];if(!Array.isArray(M))return[];let C=[];for(let H of M)if(H!=null){if(typeof H=="string")r1(H)&&C.push(H);else if(typeof H=="object"){let e=H;r1(e.name)&&C.push(e)}}return C},N0=(M,C)=>{let H=W0(M),e=[],L={entity:{},label:{},icon:{}};for(let i of H)typeof i=="string"?e.push(i):i.name&&(e.push(i.name),i.entity&&(L.entity[i.name]=i.entity),i.label&&(L.label[i.name]=i.label),i.icon&&(L.icon[i.name]=i.icon));return v5(e,L,C)},z0=M=>{let C={...M};for(let H of Object.keys(M)){if(!H.startsWith("forecast.")&&!H.startsWith("forecast_action.")&&!H.startsWith("current."))continue;let e=H.split(".");if(e.length<2)continue;let[L,i]=e;!L||!i||((!C[L]||typeof C[L]!="object")&&(C[L]={}),C[L][i]=M[H],delete C[H])}return C},B1=M=>{let C=I0(M);C.forecast_mode=C.show_current&&C.show_forecast?"show_both":C.show_current?"show_current":"show_forecast",C.temperature_entity&&!C["current.temperature_entity"]&&(C["current.temperature_entity"]=C.temperature_entity),delete C.temperature_entity,C.show_condition_effects===!0&&(C.show_condition_effects=[...F1]),C["current.show_attributes"]===!0&&(C["current.show_attributes"]=[...K]);let H=C["current.show_attributes"];if(Array.isArray(H)){let e=[];for(let L of H)if(typeof L=="string")r1(L)&&e.push(L);else if(typeof L=="object"&&L!==null){let i=L;r1(i.name)&&(e.push(i.name),i.entity&&(C[`current.attribute_entity_${i.name}`]=i.entity),i.label&&(C[`current.attribute_label_${i.name}`]=i.label),i.icon&&(C[`current.attribute_icon_${i.name}`]=i.icon))}C["current.show_attributes"]=e}return C},I0=M=>{let C={};for(let H in M){let e=M[H];if(H==="forecast"&&e&&typeof e=="object"&&!Array.isArray(e)){for(let L in e)C[`forecast.${L}`]=e[L];continue}if(H==="current"&&e&&typeof e=="object"&&!Array.isArray(e)){for(let L in e)C[`current.${L}`]=e[L];continue}if(H==="forecast_action"&&e&&typeof e=="object"&&!Array.isArray(e)){for(let L in e)C[`forecast_action.${L}`]=e[L];continue}C[H]=e}return C};(()=>{let{WFC_BUILD:M,WFC_DATE_FORMATS:C,WFC_DETAILS:H,WFC_DEVICE_PREFIX:e,WFC_LABEL:L,WFC_METRIC_CATALOG:i,WFC_METRIC_LABELS:a,WFC_METRIC_POSITIONS:s,WFC_SKY_EXTRA_KEYS:l,clamp:A,wfcAutoMapDevice:c,wfcDefaultConfig:p,wfcDeviceEntities:x,wfcDeviceIdOf:h,wfcExtraKeys:b,wfcIsDeviceRef:k,wfcLabelsPosNum:T,wfcMetrics:F,wfcNormalizeSources:B,wfcResolve:g,wfcResolveDeviceMap:$,wfcToYaml:E}=globalThis.__wsfcSectionsScope||{};if(!g)throw new Error("Weather Flex sections: load the card before its editor");let Z=j.prototype,X=new Set(["forecast_mode","default_forecast","forecast_types","forecast.mode","forecast.extra_attribute","entity","current.temperature_entity","forecast.hourly_group_size","current.temperature_precision","forecast.temperature_precision","name","current.secondary_info_attribute","show_moon_phase","icons_path"]),i1={card_appearance:"mdi:palette-outline",current_settings:"mdi:weather-partly-cloudy",forecast_settings:"mdi:chart-line",forecast_interactions:"mdi:gesture-tap",interactions:"mdi:gesture-tap-button",advanced_settings:"mdi:tune",attribute_entities:"mdi:database-outline"},o1=null;function w3(){return o1||(o1=new Set,Object.values(Z2).forEach(V=>V.forEach(t=>o1.add(t)))),o1}function x2(V,t){let r=[];return V.forEach(n=>{if(!t.has(n.name))if(n.schema){let d=x2(n.schema,t);d.length&&r.push({...n,schema:d})}else r.push(n)}),r}function b3(V){let t=w3(),r=new Set([...t,...X]);V=x2(V,r);let n=new Map,d=[];V.forEach(w=>{X.has(w.name)||(w.type==="expandable"?d.push(w):n.set(w.name,w))});let v=w=>w.map(_=>n.get(_)).filter(Boolean),m=(w,_,P)=>{let y=v(P);return y.length?[{name:w,type:"expandable",flatten:!0,icon:_,schema:y}]:[]},S=w=>d.find(_=>_.name===w),O=[];{let w=S("attribute_entities");w&&O.push(i1.attribute_entities?{...w,icon:i1.attribute_entities}:w)}return O}let a7=["forecast.scroll_to_selected","forecast.show_sun_times","forecast.use_color_thresholds","forecast.show_attribute_selector"],_3=["forecast_action.tap_action","forecast_action.hold_action","forecast_action.double_tap_action"],O3=["tap_action","hold_action","double_tap_action"],y3=["show_condition_effects"],k3=[],Z2={current:["current.show_attributes"],hourly:[],daily:[]},f2={card_appearance:"Card Appearance",current_settings:"Current Weather",forecast_settings:"Forecast Settings",interactions:"Card actions",forecast_interactions:"Forecast actions",advanced_settings:"Advanced settings",attribute_entities:"Metric entities",tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double tap action",entity:"Primary Weather Source (required)",name:"Custom Friendly Name","current.temperature_entity":"Custom Temperature Entity (optional)","current.show_attributes":"Built-in metrics","current.secondary_info_attribute":"Secondary info metric","forecast.show_attribute_selector":"Show forecast metric selector"},T3="Weather Flex sections";Z.render=function(){if(!this.hass||!this._config)return u;let V=B1(this._config),t=this._getSelectedAttributes(V),r=this._schema(this.localize.bind(this),t,V["forecast.mode"]),n=b3(r),d=m=>f2[m.name]||this._computeLabel(m)||m.name,v=this._wfcAccordionEnabled();return o`
      ${this._wfcEditorStyle()}
      ${this.wsfcMode==="sections"?u:o`<div class="wsfc-ed-header">
        <div class="wsfc-ed-title">
          <span class="wsfc-ed-name">${T3}</span>
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
      ${n.length?o`<ha-form
            .hass=${this.hass}
            .data=${V}
            .schema=${n}
            .computeLabel=${d}
            .computeHelper=${m=>this._wfcHelper(m)}
            @value-changed=${this._valueChanged}
          ></ha-form>`:u}
      ${this._wfcCardAppearancePanel()}
      ${this._wfcWeatherSourcesPanel()}
      ${this._wfcEditor()}
      ${this._wfcUserActionsPanel()}
      ${this._wfcAdvancedPanel()}
      ${this._wfcYamlPanel()}
    `},Z._wfcCardAppearancePanel=function(){let V=g(this._config).card||{},t="card";return o`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${i1.card_appearance}></ha-icon><span class="wsfc-panel-title">Card Appearance</span></summary>
        <div class="wsfc-ed-panel">
          ${this.wsfcHide&&this.wsfcHide.includes("show_condition_effects")?o`<p class="wsfc-hint">The weather animation is drawn behind the whole card (Appearance → Background), so its effects and moon phase are set there.</p>`:o`${this._wfcConfigCheckbox("show_moon_phase","Show moon phase",this._config.show_moon_phase,!0)}
          <p class="wsfc-hint">Shades the night-time moon to match the current lunar phase. Disable to always show a full moon.</p>
          ${this._wfcStockFormFor(y3)}
          <p class="wsfc-hint">Which weather conditions trigger visual effects/animations on the card.</p>`}
          ${this._wfcConfigText("icons_path","Custom icons path",this._config.icons_path,"/local/img/weather")}
          <p class="wsfc-hint">Path to custom weather condition icons (e.g. /local/img/weather).</p>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Border</div>
            ${this._wfcCheckbox("Card border",!!V.border_enabled,r=>this._wfcToggleSecField(t,"border_enabled",r))}
            ${V.border_enabled?o`
                  ${this._wfcColorField("Border color",V.border_color,r=>this._wfcSetSecField(t,"border_color",r.target.value))}
                  ${this._wfcNumField(t,"border_width","Border width","px",V.border_width,1)}
                  ${this._wfcNumField(t,"border_radius","Corner radius","px",V.border_radius,12)}
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top",V.border_top!==!1,r=>this._wfcToggleSecField(t,"border_top",r))}
                    ${this._wfcCheckbox("Bottom",V.border_bottom!==!1,r=>this._wfcToggleSecField(t,"border_bottom",r))}
                    ${this._wfcCheckbox("Left",V.border_left!==!1,r=>this._wfcToggleSecField(t,"border_left",r))}
                    ${this._wfcCheckbox("Right",V.border_right!==!1,r=>this._wfcToggleSecField(t,"border_right",r))}
                  </div>
                  <p class="wsfc-hint">Rounded corners (uncheck to square a corner):</p>
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top-left",V.corner_tl!==!1,r=>this._wfcToggleSecField(t,"corner_tl",r))}
                    ${this._wfcCheckbox("Top-right",V.corner_tr!==!1,r=>this._wfcToggleSecField(t,"corner_tr",r))}
                    ${this._wfcCheckbox("Bottom-right",V.corner_br!==!1,r=>this._wfcToggleSecField(t,"corner_br",r))}
                    ${this._wfcCheckbox("Bottom-left",V.corner_bl!==!1,r=>this._wfcToggleSecField(t,"corner_bl",r))}
                  </div>`:u}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Background</div>
            ${this._wfcColorField("Card background",V.bg_color,r=>this._wfcSetSecField(t,"bg_color",r.target.value))}
            <p class="wsfc-hint">Blank = theme card background.</p>
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Glow</div>
            ${this._wfcCheckbox("Card glow",!!V.glow_enabled,r=>this._wfcToggleSecField(t,"glow_enabled",r))}
            ${V.glow_enabled?o`
                  ${this._wfcColorField("Glow color",V.glow_color,r=>this._wfcSetSecField(t,"glow_color",r.target.value))}
                  ${this._wfcPlainSlider("Glow intensity","%",Math.round((V.glow_intensity==null?1:V.glow_intensity)*100),100,"glow_intensity",r=>this._wfcSetSecField(t,"glow_intensity",A((parseInt(r.target.value,10)||100)/100,.2,3)))}
                  ${this._wfcCheckbox("Glow only the enabled border sides",V.glow_borders_only!==!1,r=>this._wfcToggleSecField(t,"glow_borders_only",r))}`:u}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Drop shadow</div>
            ${this._wfcCheckbox("Card shadow",!!V.shadow_enabled,r=>this._wfcToggleSecField(t,"shadow_enabled",r))}
            ${V.shadow_enabled?o`
                  ${this._wfcColorField("Shadow color",V.shadow_color,r=>this._wfcSetSecField(t,"shadow_color",r.target.value))}
                  ${this._wfcNumField(t,"shadow_x","Offset X","px",V.shadow_x,0)}
                  ${this._wfcNumField(t,"shadow_y","Offset Y","px",V.shadow_y,4)}
                  ${this._wfcNumField(t,"shadow_blur","Blur","px",V.shadow_blur,16)}
                  ${this._wfcNumField(t,"shadow_spread","Spread","px",V.shadow_spread,0)}
                  ${this._wfcNumField(t,"shadow_opacity","Opacity","%",V.shadow_opacity,35)}`:u}
          </div>
        </div>
      </details>
    `};let C2=4;Z._wfcEdSources=function(){return B(this._config,this.hass)},Z._wfcCommitSources=function(V){let t=V.filter(w=>w&&w.ref).map(w=>{let _={};for(let y in w.overrides||{})w.overrides[y]&&(_[y]=w.overrides[y]);let P={ref:w.ref};return Object.keys(_).length&&(P.overrides=_),w.disabled&&(P.disabled=!0),P}),r={...this._config.metric_sources||{}};delete r.primary,delete r.fallback,delete r.custom,delete r.device_map,t.length?r.sources=t:delete r.sources;let n={...this._config,metric_sources:r},d=w=>{let _=this.hass&&this.hass.states[w],P=_&&_.attributes&&_.attributes.supported_features;return typeof P=="number"&&(P&7)!==0},v=w=>w.map(_=>_.ref).filter(_=>typeof _=="string"&&_.startsWith("weather.")),m=v(t.filter(w=>!w.disabled)),S=v(t),O=m.find(d)||m[0]||S.find(d)||S[0];O&&(n.entity=O),Object.keys(r).length===0&&delete n.metric_sources,U(this,"config-changed",{config:n})},Z._wfcSetSourceRef=function(V,t){let r=this._wfcEdSources();r[V]&&(t?r[V]={ref:t,overrides:r[V].overrides||{}}:r.splice(V,1),this._wfcCommitSources(r))},Z._wfcAddSource=function(V){if(!V)return;let t=this._wfcEdSources();t.length>=C2||(t.push({ref:V,overrides:{}}),this._wfcCommitSources(t))},Z._wfcMoveSource=function(V,t){let r=this._wfcEdSources(),n=V+t;if(V<0||n<0||n>=r.length)return;let d=r[V];r[V]=r[n],r[n]=d,this._wfcCommitSources(r)},Z._wfcRemoveSource=function(V){let t=this._wfcEdSources();V<0||V>=t.length||(t.splice(V,1),this._wfcCommitSources(t))},Z._wfcToggleSourceDisabled=function(V){let t=this._wfcEdSources();t[V]&&(t[V].disabled=!t[V].disabled,this._wfcCommitSources(t))},Z._wfcSetSourceOverride=function(V,t,r){let n=this._wfcEdSources();if(!n[V])return;let d={...n[V].overrides||{}};r?d[t]=r:delete d[t],n[V].overrides=d,this._wfcCommitSources(n)},Z._wfcLiveValue=function(V,t){let r=this.hass&&this.hass.states[V];if(!r)return"";let n,d;return V.startsWith("weather.")?(n=r.attributes?r.attributes[t]:null,d=r.attributes&&r.attributes[t+"_unit"]):(n=r.state,d=r.attributes&&r.attributes.unit_of_measurement),n==null||n===""||n==="unknown"||n==="unavailable"?"":d?`${n} ${d}`:`${n}`},Z._wfcAvailableMetrics=function(){let V=new Set;if(!this.hass)return V;let t=new Set;this._config.entity&&t.add(this._config.entity);for(let n of this._wfcEdSources())if(!n.disabled)if(n.overrides&&Object.keys(n.overrides).forEach(d=>{V.add(d),t.add(n.overrides[d])}),k(n.ref)){let d=$(this._config,this.hass,h(n.ref));Object.keys(d).forEach(v=>{V.add(v),t.add(d[v])})}else n.ref&&t.add(n.ref);t.forEach(n=>{let d=this.hass.states[n];d&&d.attributes&&Object.keys(d.attributes).forEach(v=>V.add(v))});let r=n=>{if(Array.isArray(n))for(let d of n)d&&Object.keys(d).forEach(v=>V.add(v))};if(r(this._hourlyForecastData),r(this._dailyForecastData),this.__wfcSrc&&Object.values(this.__wfcSrc).forEach(n=>{n&&(r(n.hourly),r(n.daily))}),typeof r2.__wsfcExtraEntity=="function")for(let n of["ozone"])try{r2.__wsfcExtraEntity(n,this.hass,this._config)&&V.add(n)}catch{}return V};function F3(V){return String(V).split(/[_\s]+/).filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}let B3={uv_index:"UV Index",apparent_temperature:"Apparent Temp / Feels Like",dew_point:"Dew Point",wind_gust_speed:"Wind Gust"};function P3(V){return B3[V]||F3(V)}Z._wfcMetricOptions=function(V,t){let r=this._wfcAvailableMetrics(),n=t?[{value:"",label:"High / Low Temperature"},{value:"__wfc_none__",label:"None (show nothing)"}]:[];return(V||[]).forEach(d=>{let v=P3(d);n.push({value:d,label:r.has(d)?v:`${v} (unavailable)`})}),n},Z._wfcSourceMappingEditor=function(V,t){let r=t.ref,n=t.overrides||{},d=k(r),v=d?h(r):null,m=d?c(this.hass,v):{},S=_=>{if(d)return m[_]||"";if(!r)return"";if(r.startsWith("weather.")){let P=this.hass&&this.hass.states[r];return P&&P.attributes&&P.attributes[_]!=null?r:""}return""},O=d?{include_entities:x(this.hass,v)}:{},w=_=>{let P=_.key,y=n[P]||S(P),f=!!n[P],c1=y?this._wfcLiveValue(y,P):"",L2=[{name:"e",selector:{entity:O}}],e2=f?" (override)":y?"":" \u2014 none";return o`
        <div class="wsfc-srcmap-row">
          <ha-form
            .hass=${this.hass}
            .data=${{e:y}}
            .schema=${L2}
            .computeLabel=${()=>_.label+e2}
            @value-changed=${Q=>this._wfcSetSourceOverride(V,P,Q.detail&&Q.detail.value&&Q.detail.value.e||"")}
          ></ha-form>
          <span class="wsfc-srcmap-live">${c1||"\u2014"}</span>
        </div>
      `};return o`
      <details class="wsfc-detail-row2 wsfc-src-devicemap">
        <summary class="wsfc-detail-summary">
          <ha-icon class="wsfc-detail-glyph" icon="mdi:map-marker-path"></ha-icon>
          <span class="wsfc-order-name">Value mapping${d?" (auto-detected)":""}</span>
        </summary>
        <div class="wsfc-detail-fields">
          <p class="wsfc-hint wsfc-grow">${d?"How this device's sensors map to each value. Auto-detected from device class and name; pick a different entity to override. Blank = this source doesn't provide it.":"Which value this source provides. By default a weather entity provides every attribute it exposes; override any value to a different entity (e.g. your own sensor)."}</p>
          ${i.map(w)}
        </div>
      </details>
    `},Z._wfcSourceSummaryList=function(V){let t=V.ref,r=V.overrides||{},n=k(t),d=n?c(this.hass,h(t)):{},v=S=>{if(r[S])return r[S];if(n)return d[S]||"";if(t&&t.startsWith("weather.")){let O=this.hass&&this.hass.states[t];return O&&O.attributes&&O.attributes[S]!=null?t:""}return""},m=[];return i.forEach(S=>{let O=v(S.key);if(!O)return;let w=this._wfcLiveValue(O,S.key);m.push(o`
        <div class="wsfc-cond-row">
          <span class="wsfc-cond-prop">${S.label}</span>
          <span class="wsfc-cond-ent" title=${O}>${O}</span>
          <span class="wsfc-cond-val">${w||"\u2014"}</span>
        </div>
      `)}),m.length?o`<div class="wsfc-cond-list">${m}</div>`:u},Z._wfcSrcMapOpen=function(){return this.__wfcSrcMapOpen||(this.__wfcSrcMapOpen=new Set),this.__wfcSrcMapOpen},Z._wfcToggleSrcMap=function(V){let t=this._wfcSrcMapOpen();t.has(V)?t.delete(V):t.add(V),this.requestUpdate&&this.requestUpdate()},Z._wfcToggleAddSource=function(){this.__wfcAddSourceOpen=!this.__wfcAddSourceOpen,this.requestUpdate&&this.requestUpdate()},Z._wfcSourceMetricCount=function(V){let t=V.ref,r=V.overrides||{},n=new Set(Object.keys(r).filter(d=>r[d]));if(k(t))Object.keys($(this._config,this.hass,h(t))).forEach(d=>n.add(d));else if(t&&t.startsWith("weather.")){let d=this.hass&&this.hass.states[t];d&&d.attributes&&i.forEach(v=>{d.attributes[v.key]!=null&&n.add(v.key)})}return n.size},Z._wfcSourceRow=function(V,t,r){let n=V.ref,d=k(n),v=this._config.entity,m=d&&this.hass&&this.hass.devices&&this.hass.devices[h(n)],S=d?m&&(m.name_by_user||m.name)||h(n):n,O=d?"Device":n&&n.startsWith("weather.")?"Weather":"Sensor",w=d?"mdi:access-point":n&&n.startsWith("weather.")?"mdi:weather-partly-cloudy":"mdi:gauge",_=!d&&n&&n.startsWith("weather."),P=_&&n===v,y=this._wfcSrcMapOpen().has(n),f=!!V.disabled,c1=this._wfcSourceMetricCount(V),L2=`${c1} value${c1===1?"":"s"} mapped`,e2=P?o`<span class="wsfc-src-pill" title="Supplies the forecast and weather condition">📡 forecast + condition</span>`:_?o`<span class="wsfc-src-pill" title="Supplies current + forecast metrics (not the card's condition)">current + forecast</span>`:o`<span class="wsfc-src-pill" title="Supplies current conditions only">current conditions</span>`,Q="",a1=n&&!d?this.hass&&this.hass.states[n]:null;if(d)Q=c1?"Local station \u2014 no forecast or weather condition. Keep a weather entity in the list for those.":"No entities matched known weather metrics \u2014 map them with the edit (\u270E) button.";else if(!a1)Q=`\u26A0 Entity not found: ${n}`;else if(a1.state==="unavailable"||a1.state==="unknown")Q=`\u26A0 Currently ${a1.state}.`;else if(_&&!P){let _2=a1.attributes&&a1.attributes.supported_features;Q=typeof _2=="number"&&(_2&7)===0?"Provides no forecast \u2014 current-state values only.":"Fills values the higher-priority sources don't provide."}else _||(Q="Single sensor \u2014 supplies one value (set it with the edit (\u270E) button).");return o`
      <div class="wsfc-src-row ${f?"wsfc-src-off":""}">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon=${w}></ha-icon>
          <span class="wsfc-src-name">${S} <span class="wsfc-src-type">${O}</span></span>
          <ha-icon class="wsfc-ico-btn ${t===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Higher priority" @click=${()=>this._wfcMoveSource(t,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${t===r-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Lower priority" @click=${()=>this._wfcMoveSource(t,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${f?"mdi:eye-off":"mdi:eye"} title=${f?"Hidden \u2014 click to use this source":"In use \u2014 click to hide"} @click=${()=>this._wfcToggleSourceDisabled(t)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${y?"active":""}" icon="mdi:pencil" title="Edit value mapping" @click=${()=>this._wfcToggleSrcMap(n)}></ha-icon>
          <ha-icon class="wsfc-ico-btn wsfc-ico-del" icon="mdi:trash-can-outline" title="Remove source" @click=${()=>this._wfcRemoveSource(t)}></ha-icon>
        </div>
        <div class="wsfc-src-info">${e2}<span class="wsfc-src-count">${L2}</span>${f?o`<span class="wsfc-src-count">· hidden</span>`:u}</div>
        ${Q?o`<div class="wsfc-src-detail">${Q}</div>`:u}
        ${this._wfcSourceSummaryList(V)}
        ${y?this._wfcSourceMappingEditor(t,V):u}
      </div>
    `},Z._wfcWeatherSourcesPanel=function(){let V=this._wfcEdSources(),t=V.some(m=>m.ref&&!k(m.ref)&&m.ref.startsWith("weather.")),r=V.length>=C2,n=!!this.__wfcAddSourceOpen&&!r,d=o`
      <ha-form
        .hass=${this.hass}
        .data=${{e:""}}
        .schema=${[{name:"e",selector:{entity:{}}}]}
        .computeLabel=${()=>"Add a weather entity or sensor"}
        @value-changed=${m=>{let S=m.detail&&m.detail.value&&m.detail.value.e;S&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(S))}}
      ></ha-form>`,v=o`
      <ha-form
        .hass=${this.hass}
        .data=${{d:""}}
        .schema=${[{name:"d",selector:{device:{}}}]}
        .computeLabel=${()=>"\u2026or add a local-station device"}
        @value-changed=${m=>{let S=m.detail&&m.detail.value&&m.detail.value.d;S&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(e+S))}}
      ></ha-form>`;return o`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:database-marker-outline"></ha-icon><span class="wsfc-panel-title">Weather Sources</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">An ordered list of where weather data comes from — <b>top = highest priority</b>. For each value, the card walks the list top-down and uses the first source that has it. A source can be a weather entity, a local-station <b>device</b> (e.g. Ecowitt), or any single sensor. Devices/sensors give current conditions only; the forecast and weather condition always come from the highest weather entity in the list (marked 📡). Units are shown as each source reports them (no conversion).</p>
          ${r?o`<p class="wsfc-hint">Maximum of ${C2} sources reached. Remove one to add another.</p>`:o`
              <div class="wsfc-add-btn" role="button" tabindex="0" @click=${()=>this._wfcToggleAddSource()}>
                <ha-icon icon=${n?"mdi:close":"mdi:plus"}></ha-icon>${n?"Cancel":"Add Source"}
              </div>
              ${n?o`<div class="wsfc-add-pickers">${d}${v}</div>`:u}
            `}
          ${V.length?V.map((m,S)=>this._wfcSourceRow(m,S,V.length)):o`<p class="wsfc-hint">No sources yet — add one above.</p>`}
          ${!t&&V.length?o`<p class="wsfc-src-warn">⚠ No weather entity in the list — the card needs one for the forecast and weather condition. Add a <code>weather.*</code> entity.</p>`:u}
          ${this._wfcGroup("Headline temperature")}
          ${this._wfcHeadlineTempRow()}
        </div>
      </details>
    `},Z._wfcToggleHeadlineEdit=function(){this.__wfcHeadlineEdit=!this.__wfcHeadlineEdit,this.requestUpdate&&this.requestUpdate()},Z._wfcHeadlineTempRow=function(){let V=this._config.current&&this._config.current.temperature_entity,t=V||"",r="";if(!t)for(let v of this._wfcEdSources()){if(v.disabled)continue;let m=this._wfcSlotEntityForKeyEd(v,"temperature");if(m&&this.hass&&this.hass.states[m]){t=m;break}}t?r=this.hass&&this.hass.states[t]&&this.hass.states[t].attributes&&this.hass.states[t].attributes.friendly_name||t:r="\u2014 none available \u2014";let n=t?this._wfcLiveValue(t,"temperature"):"",d=!!this.__wfcHeadlineEdit;return o`
      <div class="wsfc-src-row">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon="mdi:thermometer"></ha-icon>
          <span class="wsfc-src-name">${r}${V?o` <span class="wsfc-src-type">override</span>`:u}</span>
          ${n?o`<span class="wsfc-srcmap-live">${n}</span>`:u}
          <ha-icon class="wsfc-ico-btn ${d?"active":""}" icon="mdi:pencil" title="Change headline temperature source" @click=${()=>this._wfcToggleHeadlineEdit()}></ha-icon>
        </div>
        ${d?o`
            <p class="wsfc-hint">Pick an entity to force the headline temperature, or clear it to let the source list decide (recommended).</p>
            ${this._wfcStockFormFor(["current.temperature_entity"])}
          `:u}
      </div>
    `},Z._wfcSlotEntityForKeyEd=function(V,t){if(V.overrides&&V.overrides[t])return V.overrides[t];let r=V.ref;if(!r)return null;if(k(r))return $(this._config,this.hass,h(r))[t]||null;if(r.startsWith("weather.")){let n=this.hass&&this.hass.states[r];return n&&n.attributes&&n.attributes[t]!=null?r:null}return null},Z._wfcSetForecastTypes=function(V,t){let r=V&&t?"both":V?"hourly":t?"daily":"both",n={...this._config,forecast_types:r};U(this,"config-changed",{config:n})},Z._wfcAdvancedPanel=function(){let V=this._config.forecast_types||"both",t=V==="both"||V==="hourly",r=V==="both"||V==="daily";return o`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:tune"></ha-icon><span class="wsfc-panel-title">Advanced</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast data to load</div>
          <p class="wsfc-hint">Which forecast the card subscribes to. Loading only what you display reduces websocket load.</p>
          ${this._wfcCheckbox("Hourly",t,n=>this._wfcSetForecastTypes(n.target.checked,r))}
          ${this._wfcCheckbox("Daily",r,n=>this._wfcSetForecastTypes(t,n.target.checked))}
          ${this._wfcGroup("Temperature precision")}
          ${this._wfcConfigSlider("current.temperature_precision","Current temperature precision","",(this._config.current||{}).temperature_precision,0)}
          ${this._wfcConfigSlider("forecast.temperature_precision","Forecast temperature precision","",(this._config.forecast||{}).temperature_precision,0)}
          ${this._wfcGroup("Other")}
          ${this._wfcStockFormFor(k3)}
        </div>
      </details>
    `},Z._wfcUserActionsPanel=function(){let V=this._wfcStockFormFor(_3),t=this._wfcStockFormFor(O3),r=this._config.forecast||{};return o`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:gesture-tap"></ha-icon><span class="wsfc-panel-title">User Actions</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast actions</div>
          <p class="wsfc-hint">Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.</p>
          ${V}
          ${this._wfcConfigCheckbox("forecast.scroll_to_selected","Scroll to selected forecast",r.scroll_to_selected,!0)}
          <p class="wsfc-hint">When you tap a day to switch to the hourly view, scroll the hourly strip to that day's first hour (and back to the start when switching to daily).</p>
          ${this._wfcGroup("Card actions")}
          <p class="wsfc-hint">Action to perform when the non-forecast area of the card is interacted with.</p>
          ${t}
        </div>
      </details>
    `};let $3=[{value:"temperature_and_precipitation",label:"Temperature & precipitation"},{value:"apparent_temperature",label:"Apparent temperature"},{value:"humidity",label:"Humidity"},{value:"pressure",label:"Pressure"},{value:"uv_index",label:"UV index"}];Z._wfcForecastTypeControls=function(V){let t=this._config.forecast||{},r=[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}],n=[{value:"none",label:"(no metric)"},{value:"wind_bearing",label:"Wind bearing"},{value:"wind_direction",label:"Wind direction"},{value:"precipitation_probability",label:"Precipitation probability"},{value:"uv_index",label:"UV index"}],d=w=>t[`${w}_mode`]||t.mode||"simple",v=w=>(t[`${w}_extra_attribute`]!=null?t[`${w}_extra_attribute`]:t.extra_attribute)||"none",m=w=>(t[`${w}_chart_attribute`]!=null?t[`${w}_chart_attribute`]:t.default_chart_attribute)||"temperature_and_precipitation",S=(w,_,P)=>{let y=t[`${w}_${_}`];if(y!=null)return!!y;let f=t[_];return f!=null?!!f:P},O=d(V)==="chart";return o`
      ${this._wfcGroup("Forecast display")}
      <div class="wsfc-row">
        ${this._wfcForecastSelect(`${V}_mode`,"Display mode",r,d(V),"simple")}
        ${this._wfcForecastSelect(`${V}_extra_attribute`,"Extra metric",n,v(V),"none")}
      </div>
      ${O?o`<div class="wsfc-row">
            ${this._wfcForecastSelect(`${V}_chart_attribute`,"Chart metric",$3,m(V),"temperature_and_precipitation")}
          </div>`:u}
      ${this._wfcConfigCheckbox(`forecast.${V}_show_sun_times`,"Show sunrise & sunset times",S(V,"show_sun_times",!0),!0)}
      ${O?o`
            ${this._wfcConfigCheckbox(`forecast.${V}_use_color_thresholds`,"Use color thresholds",S(V,"use_color_thresholds",!0),!0)}
            ${this._wfcConfigCheckbox(`forecast.${V}_show_attribute_selector`,"Show metric selector",S(V,"show_attribute_selector",!1),!1)}`:u}
    `},Z._wfcHelper=function(V){let t=this._computeHelper?this._computeHelper(V):void 0;return typeof t=="string"&&(t=t.replace(/attributes/g,"metrics").replace(/attribute/g,"metric").replace(/Attributes/g,"Metrics").replace(/Attribute/g,"Metric")),t},Z._wfcAccordionEnabled=function(){return(this._config&&this._config.wfc||{}).editor_accordion!==!1},Z._wfcSetAccordion=function(V){let t=this._wfcState();t.editor_accordion=!!V,this._wfcCommit(t),this._wfcApplyAccordion()},Z._wfcApplyAccordion=function(){let V=this.renderRoot||this.shadowRoot||this;!V||!V.addEventListener||this.__wfcAccordionHooked||(this.__wfcAccordionHooked=!0,V.addEventListener("toggle",t=>{let r=t.target;if(!r||!r.classList||!r.classList.contains("wsfc-panel")||(this._wfcRememberOpen(r),!r.open)||!this._wfcAccordionEnabled())return;(V.querySelectorAll?V.querySelectorAll("details.wsfc-panel"):[]).forEach(d=>{d!==r&&d.open&&(d.open=!1)})},!0))},Z._wfcRememberOpen=function(V){this.__wfcOpenPanels||(this.__wfcOpenPanels=new Set);let t=this._wfcPanelKey(V);t&&(V.open?this.__wfcOpenPanels.add(t):this.__wfcOpenPanels.delete(t))},Z._wfcPanelKey=function(V){let t=V.querySelector&&V.querySelector(".wsfc-panel-title");return t?(t.textContent||"").trim():""},Z._wfcRestoreOpen=function(){let V=this.renderRoot||this.shadowRoot||this;!V||!V.querySelectorAll||!this.__wfcOpenPanels||V.querySelectorAll("details.wsfc-panel").forEach(t=>{let r=this._wfcPanelKey(t);r&&this.__wfcOpenPanels.has(r)&&(t.open=!0)})},Z.updated=function(V){try{let t=Object.getPrototypeOf(Z);t&&typeof t.updated=="function"&&t.updated.call(this,V)}catch{}this._wfcApplyAccordion(),this._wfcRestoreOpen()},Z._wfcEditorStyle=function(){return o`<style>
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
    </style>`};let R3="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";Z._wfcCustomMetricsBody=function(){let V=e1(this._config.current&&this._config.current.show_attributes);return o`
      <div class="custom-attributes">
        <p class="wsfc-hint">Custom metrics: display any entity's state as a metric — pick an entity and optionally override its label and icon.</p>
        ${V.map((t,r)=>this._renderCustomAttributeRow(t,r))}
        <ha-button size="small" appearance="filled" variant="brand" @click=${this._addCustomAttribute}>
          <ha-svg-icon slot="start" .path=${R3}></ha-svg-icon>
          ${this.hass.localize&&this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
        </ha-button>
      </div>
    `},Z._renderCustomAttributes=function(){return this._wfcCustomMetricsBody()};let H2={order:"mdi:view-dashboard-variant-outline",details:"mdi:format-list-bulleted",dividers:"mdi:minus",options:"mdi:cog-outline"};function p1(V){if(V&&V.detail&&V.detail.value!==void 0)return V.detail.value;let t=V&&V.target;if(t)return(t.type==="checkbox"||typeof t.checked=="boolean")&&(t.tagName==="HA-SWITCH"||t.type==="checkbox")?t.checked:t.value}function V2(V){let t=V&&V.target;return t&&typeof t.checked=="boolean"?t.checked:!!(V&&V.detail&&V.detail.value)}Z._wfcState=function(){return JSON.parse(JSON.stringify(g(this._config)))},Z._wfcCommit=function(V){let t={...this._config,wfc:V};U(this,"config-changed",{config:t})},Z._wfcResetSection=function(V){let r=p(this._config)[V];if(!r)return;let n=this._wfcState(),d=!!(n[V]&&n[V].show);n[V]={...JSON.parse(JSON.stringify(r)),show:d},this._wfcCommit(n)},Z._wfcMoveSection=function(V,t){let r=this._wfcState(),n=r.order.indexOf(V),d=n+t;if(n<0||d<0||d>=r.order.length)return;let v=r.order[n];r.order[n]=r.order[d],r.order[d]=v,this._wfcCommit(r)},Z._wfcCommitMetrics=function(V,t){let r=this._wfcState();r[V]||(r[V]={});let n=F(r[V]),d=n.map(m=>m.key),v={};n.forEach(m=>v[m.key]=m.pos),t(d,v),r[V].forecast_metric_order=d,r[V].forecast_metric_pos=v,delete r[V].forecast_temps,delete r[V].forecast_icons,delete r[V].forecast_extra,delete r[V].forecast_row_order,delete r[V].forecast_stack,this._wfcCommit(r)},Z._wfcMoveMetric=function(V,t,r){let n=this._wfcState(),v=F(n[V]||{}).find(m=>m.key===t);v&&v.pos==="below"&&(r=-r),this._wfcCommitMetrics(V,(m,S)=>{let O=m.indexOf(t),w=O+r;for(;w>=0&&w<m.length&&S[m[w]]!==S[t];)w+=r;if(O<0||w<0||w>=m.length)return;let _=m[O];m[O]=m[w],m[w]=_})},Z._wfcSetMetricPos=function(V,t,r){this._wfcCommitMetrics(V,(n,d)=>{d[t]=r})},Z._wfcSetMetricStyle=function(V,t,r,n){let d=this._wfcState();d[V]||(d[V]={});let v={...d[V].forecast_metric_style||{}},m={...v[t]||{}};n==null||n===""?delete m[r]:m[r]=n,Object.keys(m).length?v[t]=m:delete v[t],d[V].forecast_metric_style=v,this._wfcCommit(d)},Z._wfcMetricsOrder=function(V,t){let r=F(t),n=m=>r.filter(S=>S.pos===m),d=[...n("above"),...n("overlay"),...n("below").reverse(),...r.filter(m=>!["above","overlay","below"].includes(m.pos))],v=t.forecast_metric_style||{};return d.map((m,S,O)=>{let w=v[m.key]||{},_=m.key==="icons",P=m.key!=="temps";return o`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <span class="wsfc-order-name">${a[m.key]||m.key}</span>
            <select
              class="wsfc-native-select wsfc-metric-pos"
              @click=${y=>y.stopPropagation()}
              @change=${y=>this._wfcSetMetricPos(V,m.key,y.target.value)}
            >
              ${s.map(y=>o`<option value=${y.value} ?selected=${y.value===m.pos}>${y.label}</option>`)}
            </select>
            <ha-icon class="wsfc-ico-btn ${S===0||O[S-1].pos!==m.pos?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${y=>{y.preventDefault(),y.stopPropagation(),this._wfcMoveMetric(V,m.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${S===O.length-1||O[S+1].pos!==m.pos?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${y=>{y.preventDefault(),y.stopPropagation(),this._wfcMoveMetric(V,m.key,1)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <p class="wsfc-hint wsfc-grow">Leave a field at its default to fall back to the section styling below.</p>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Show every (overrides default)</span>
              <select class="wsfc-native-select" @change=${y=>this._wfcSetMetricStyle(V,m.key,"every",y.target.value)}>
                ${[{value:"",label:"Use default"},{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(y=>({value:String(y),label:y+(y>1?" hours":" hour")}))].map(y=>o`<option value=${y.value} ?selected=${y.value===(w.every!=null?String(w.every):"")}>${y.label}</option>`)}
              </select>
            </label>
            ${P?o`
                  ${this._wfcColorField("Icon color",w.icon_color,y=>this._wfcSetMetricStyle(V,m.key,"icon_color",y.target.value))}
                  ${this._wfcPlainNum("Icon size (px)",w.icon_size,y=>this._wfcSetMetricStyle(V,m.key,"icon_size",parseFloat(p1(y))||""))}`:u}
            ${_?u:o`
                  ${this._wfcColorField("Text color",w.text_color,y=>this._wfcSetMetricStyle(V,m.key,"text_color",y.target.value))}
                  ${this._wfcPlainNum("Font size (px)",w.text_size,y=>this._wfcSetMetricStyle(V,m.key,"text_size",parseFloat(p1(y))||""))}`}
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Legibility (busy backgrounds)</span>
              <select class="wsfc-native-select" @change=${y=>this._wfcSetMetricStyle(V,m.key,"contrast",y.target.value)}>
                ${[{value:"",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}].map(y=>o`<option value=${y.value} ?selected=${y.value===(w.contrast||"")}>${y.label}</option>`)}
              </select>
            </label>
          </div>
        </details>
      `})},Z._wfcToggleSection=function(V,t){let r=this._wfcState();r[V]||(r[V]={}),r[V].show=V2(t),this._wfcCommit(r)},Z._wfcToggleSectionShow=function(V){let t=this._wfcState();t[V]||(t[V]={}),t[V].show=!t[V].show,this._wfcCommit(t)},Z._wfcSetSecNum=function(V,t,r){let n=this._wfcState(),d=parseFloat(p1(r));n[V][t]=isNaN(d)?void 0:d,this._wfcCommit(n)},Z._wfcSetSecField=function(V,t,r){let n=this._wfcState();n[V]||(n[V]={}),n[V][t]=r,this._wfcCommit(n)},Z._wfcToggleSecField=function(V,t,r){this._wfcSetSecField(V,t,V2(r))},Z._wfcSetForecastNum=function(V,t){let r={...this._config.forecast||{}};t==null||t<=0?delete r[V]:r[V]=t,U(this,"config-changed",{config:{...this._config,forecast:r}})},Z._wfcSetConfigNum=function(V,t,r){let[n,d]=V.split("."),v={...this._config},m={...v[n]||{}},S=t==null||t===""||isNaN(Number(t))?null:Number(t);S==null?delete m[d]:m[d]=S,v[n]=m,U(this,"config-changed",{config:v})},Z._wfcConfigSlider=function(V,t,r,n,d){let v=m1(V,r||""),m=n!=null?A(Number(n),v.min,v.max):Number(d);return this._wfcSliderTpl(t,r,v,m,S=>this._wfcSetConfigNum(V,S.target.value,d))},Z._wfcSetConfigStr=function(V,t,r){let n={...this._config};if(V.indexOf(".")===-1)r&&(t==null||t==="")?delete n[V]:n[V]=t;else{let[d,v]=V.split("."),m={...n[d]||{}};r&&(t==null||t==="")?delete m[v]:m[v]=t,n[d]=m}U(this,"config-changed",{config:n})},Z._wfcConfigSelect=function(V,t,r,n,d,v){let m=String(n??d);return o`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${t}</span>
        <select class="wsfc-native-select" @change=${S=>this._wfcSetConfigStr(V,S.target.value,v)}>
          ${r.map(S=>o`<option value=${String(S.value)} ?selected=${String(S.value)===m}>${S.label}</option>`)}
        </select>
      </label>
    `},Z._wfcSetConfigBool=function(V,t,r){let n={...this._config},d=(v,m)=>{t===!!r?delete v[m]:v[m]=t};if(V.indexOf(".")===-1)d(n,V);else{let[v,m]=V.split("."),S={...n[v]||{}};d(S,m),n[v]=S}U(this,"config-changed",{config:n})},Z._wfcConfigCheckbox=function(V,t,r,n){let d=r==null?!!n:!!r;return this._wfcCheckbox(t,d,v=>this._wfcSetConfigBool(V,v.target.checked,n))},Z._wfcConfigText=function(V,t,r,n){return o`
      <label class="wsfc-field">
        <span class="wsfc-field-label">${t}</span>
        <input
          type="text"
          class="wsfc-input"
          .value=${r||""}
          placeholder=${n||""}
          @change=${d=>this._wfcSetConfigStr(V,d.target.value)}
        />
      </label>
    `},Z._wfcSetForecastField=function(V,t){let r={...this._config.forecast||{}};t==null||t===""?delete r[V]:r[V]=t,U(this,"config-changed",{config:{...this._config,forecast:r}})},Z._wfcForecastSelect=function(V,t,r,n,d){let v=String(n??d);return o`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${t}</span>
        <select class="wsfc-native-select" @change=${m=>this._wfcSetForecastField(V,m.target.value)}>
          ${r.map(m=>o`<option value=${String(m.value)} ?selected=${String(m.value)===v}>${m.label}</option>`)}
        </select>
      </label>
    `},Z._wfcNumSecField=function(V,t,r,n){let d=parseFloat(p1(r));this._wfcSetSecField(V,t,isNaN(d)?n:d)},Z._wfcMoveDetail=function(V,t){let r=this._wfcState(),n=r.details.items,d=n.findIndex(S=>S.key===V),v=d+t;if(d<0||v<0||v>=n.length)return;let m=n[d];n[d]=n[v],n[v]=m,this._wfcCommit(r)},Z._wfcToggleDetail=function(V,t){let r=this._wfcState(),n=r.details.items.find(d=>d.key===V);n&&(n.show=V2(t)),this._wfcCommit(r)},Z._wfcToggleDetailShow=function(V){let t=this._wfcState(),r=t.details.items.find(n=>n.key===V);r&&(r.show=!r.show,this._wfcCommit(t))},Z._wfcSetDetailValue=function(V,t,r){let n=this._wfcState(),d=n.details.items.find(v=>v.key===V);d&&(d[t]=r),this._wfcCommit(n)},Z._wfcSetDetail=function(V,t,r){let n=this._wfcState(),d=n.details.items.find(m=>m.key===V);if(!d)return;let v=p1(r);if(t==="icon_size"||t==="text_size"){let m=parseFloat(v);v=isNaN(m)?void 0:m}else(v===""||v==null)&&(v=void 0);d[t]=v,this._wfcCommit(n)},Z._wfcColorField=function(V,t,r){if(this.wsfcHide&&this.wsfcHide.includes("color:"+V))return u;if(/^(Day|Night) color$/.test(V))return this._wfcColorFieldHex(V,t,r);let n=[["var(--primary-color)","Primary"],["var(--accent-color)","Accent"],["var(--primary-text-color)","Primary text"],["var(--secondary-text-color)","Secondary text"],["var(--disabled-text-color)","Disabled text"],["var(--state-active-color)","State active"],["var(--error-color)","Error"],["var(--warning-color)","Warning"],["var(--success-color)","Success"],["var(--info-color)","Info"]],d=t==null?"":String(t),v=/background|bg$|^Chip background/i.test(V),m=d===""?"default":d==="transparent"?"transparent":/^#[0-9a-fA-F]{3,8}$/.test(d)?"custom":/^var\(/.test(d)&&n.some(([_])=>_===d)?"theme":"css",S=/^#[0-9a-fA-F]{6}$/.test(d)?d:"#4fc3f7",O=_=>r({target:{value:_}}),w=_=>O(_==="default"?"":_==="transparent"?"transparent":_==="theme"?n.some(([P])=>P===d)?d:n[0][0]:_==="custom"?S:d||S);return o`
      <div class="wsfc-color-field wsfc-color4">
        <span class="wsfc-field-label wsfc-color-label">${V}</span>
        <select class="wsfc-native-select" style="flex:0 0 auto;width:auto" @change=${_=>w(_.target.value)}>
          ${[["default","Not set"],...v||m==="transparent"?[["transparent","Transparent"]]:[],["theme","Theme color"],["custom","Custom"],["css","CSS"]].map(([_,P])=>o`<option value=${_} ?selected=${_===m}>${P}</option>`)}
        </select>
        ${m==="theme"?o`<select class="wsfc-native-select" style="flex:1 1 120px;width:auto" @change=${_=>O(_.target.value)}>${n.map(([_,P])=>o`<option value=${_} ?selected=${_===d}>${P}</option>`)}</select>`:m==="custom"?o`<input type="color" class="wsfc-color-input" .value=${S} @change=${_=>O(_.target.value)} />`:m==="css"?o`<input type="text" class="wsfc-native-select" style="flex:1 1 120px;width:auto" .value=${d} @change=${_=>O(_.target.value)} />`:u}
        ${m!=="default"&&m!=="transparent"?o`<span style="width:16px;height:16px;border-radius:50%;flex:0 0 auto;border:1px solid var(--divider-color);background:${d}"></span>`:u}
      </div>
    `},Z._wfcColorFieldHex=function(V,t,r){return o`
      <div class="wsfc-color-field">
        <span class="wsfc-field-label wsfc-color-label">${V}</span>
        <input
          type="color"
          class="wsfc-color-input"
          .value=${t||"#888888"}
          @change=${r}
          @input=${r}
        />
        <span class="wsfc-color-hex">${t||"theme default"}</span>
        <button
          type="button"
          class="wsfc-color-reset"
          title="Reset to theme default"
          ?disabled=${!!!t}
          @click=${()=>r({target:{value:""}})}
        >Reset</button>
      </div>
    `},Z._wfcSelect=function(V,t,r,n,d,v){if(this.wsfcHide&&this.wsfcHide.includes(t))return u;let m=String(d??v);return o`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${r}</span>
        <select
          class="wsfc-native-select"
          @change=${S=>this._wfcSetSecField(V,t,S.target.value)}
        >
          ${n.map(S=>o`<option value=${String(S.value)} ?selected=${String(S.value)===m}>${S.label}</option>`)}
        </select>
      </label>
    `};let h2={px:{min:0,max:60,step:1},"%":{min:0,max:100,step:1},"":{min:1,max:72,step:1}};function m1(V,t){return/chip_scale/.test(V)?{min:50,max:250,step:5}:/chip_columns/.test(V)?{min:1,max:6,step:1}:/^columns$|\.columns$/.test(V)?{min:1,max:4,step:1}:/chip_text_size|chip_icon_size/.test(V)?{min:0,max:48,step:1}:/clock_font_size|clock_date_font_size/.test(V)?{min:0,max:100,step:1}:/header_icon_size/.test(V)?{min:0,max:140,step:2}:/header_secondary_size/.test(V)?{min:0,max:48,step:1}:/header_state_size|header_temp_size/.test(V)?{min:0,max:64,step:1}:/global_icon_size|global_text_size/.test(V)?{min:0,max:48,step:1}:/shadow_x|shadow_y|shadow_spread/.test(V)?{min:-40,max:40,step:1}:/shadow_blur/.test(V)?{min:0,max:80,step:1}:/border_radius/.test(V)?{min:0,max:48,step:1}:/border_width/.test(V)?{min:0,max:12,step:1}:/hourly_slots/.test(V)?{min:0,max:48,step:1}:/daily_slots/.test(V)?{min:0,max:14,step:1}:/labels_position|opacity/.test(V)?{min:0,max:100,step:1}:/indent/.test(V)?{min:0,max:120,step:2}:/height/.test(V)?{min:10,max:200,step:2}:/^clock_(font_size|date_font_size)$/.test(V)?{min:8,max:100,step:1}:/font_size|_size$/.test(V)?{min:8,max:48,step:1}:/_width$/.test(V)?{min:1,max:12,step:1}:/_length$/.test(V)?{min:5,max:100,step:5}:/hourly_group_size/.test(V)?{min:1,max:4,step:1}:/temperature_precision/.test(V)?{min:0,max:2,step:1}:/hours/.test(V)?{min:1,max:48,step:1}:h2[t]||h2.px}Z._wfcNumField=function(V,t,r,n,d,v){if(this.wsfcHide&&this.wsfcHide.includes(t))return u;let m=m1(t,n||""),S=d!=null?Number(d):Number(v);return this._wfcSliderTpl(r,n,m,S,O=>this._wfcNumSecField(V,t,O,v))},Z._wfcPlainSlider=function(V,t,r,n,d,v){let m=m1(d||"",t||""),S=r!=null?Number(r):Number(n);return this._wfcSliderTpl(V,t,m,S,v)},Z._wfcSlotSlider=function(V,t,r){let n=m1(t,""),d=r!=null?A(Number(r),n.min,n.max):0,v=m=>Number(m)<=0?"All":String(m);return o`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${V}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${n.min}
          max=${n.max}
          step=${n.step}
          .value=${String(d)}
          @input=${m=>{let S=m.target.closest(".wsfc-slider-row"),O=S&&S.querySelector(".wsfc-slider-num");O&&(O.textContent=v(m.target.value))}}
          @change=${m=>this._wfcSetForecastNum(t,parseInt(m.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${v(d)}></span></span>
      </div>
    `},Z._wfcAutoSizeField=function(V,t,r){if(this.wsfcHide&&this.wsfcHide.includes(t))return u;let n=m1(t,""),d=this._wfcState()[V]||{},v=A(parseInt(d[t],10)||0,n.min,n.max),m=S=>Number(S)<=0?"Auto":`${S}px`;return o`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${r}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${n.min}
          max=${n.max}
          step=${n.step}
          .value=${String(v)}
          @input=${S=>{let O=S.target.closest(".wsfc-slider-row"),w=O&&O.querySelector(".wsfc-slider-num");w&&(w.textContent=m(S.target.value))}}
          @change=${S=>this._wfcSetSecField(V,t,parseInt(S.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${m(v)}></span></span>
      </div>
    `},Z._wfcSliderTpl=function(V,t,r,n,d){let v=t||"";return o`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${V}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${r.min}
          max=${r.max}
          step=${r.step}
          .value=${String(n)}
          @input=${m=>{let S=m.target.closest(".wsfc-slider-row"),O=S&&S.querySelector(".wsfc-slider-num");O&&(O.textContent=m.target.value)}}
          @change=${d}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${String(n)}></span>${v}</span>
      </div>
    `},Z._wfcCheckbox=function(V,t,r){return this.wsfcHide&&this.wsfcHide.includes("check:"+V)?u:o`
      <label class="wsfc-check-row">
        <input type="checkbox" class="wsfc-checkbox" .checked=${!!t} @change=${r} />
        <span>${V}</span>
      </label>
    `},Z._wfcGroup=function(V){return V&&this.wsfcHide&&this.wsfcHide.includes("group:"+V)?u:V?o`<div class="wsfc-group-div"><span class="wsfc-group-label">${V}</span></div>`:o`<div class="wsfc-group-div"></div>`},Z._wfcSubPanel=function(V,t){return o`
      <details class="wsfc-detail-row2 wsfc-subpanel">
        <summary><span class="wsfc-subpanel-title">${V}</span></summary>
        <div class="wsfc-subpanel-body">${t}</div>
      </details>
    `},Z._wfcFlushControls=function(V,t){return o`
      ${this._wfcCheckbox("Flush to card edges (no left/right padding)",t.flush_edges,r=>this._wfcToggleSecField(V,"flush_edges",r))}
      ${this._wfcCheckbox("Flush to card top (no upper padding)",t.flush_top,r=>this._wfcToggleSecField(V,"flush_top",r))}
      ${this._wfcCheckbox("Flush to card bottom (no lower padding)",t.flush_bottom,r=>this._wfcToggleSecField(V,"flush_bottom",r))}
    `},Z._wfcTextControls=function(V,t,r,n){if(this.wsfcHide&&this.wsfcHide.includes(`${t}_font_size`))return u;let d=this._wfcState()[V]||{};return o`
      <div class="wsfc-sub-title">${r}</div>
      <div class="wsfc-row">
        ${this._wfcNumField(V,`${t}_font_size`,"Size","px",d[`${t}_font_size`],n)}
        ${this._wfcSelect(V,`${t}_font_weight`,"Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],d[`${t}_font_weight`],"400")}
      </div>
      ${this._wfcColorField("Color",d[`${t}_color`],v=>this._wfcSetSecField(V,`${t}_color`,v.target.value))}
    `};let S2=[{value:"solid",label:"Solid"},{value:"dashed",label:"Dashed"},{value:"dotted",label:"Dotted"},{value:"double",label:"Double"}];Z._wfcDividerControls=function(V,t){return o`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section Divider Above",t.divider_above,r=>this._wfcToggleSecField(V,"divider_above",r))}
      ${t.divider_above?o`
            <div class="wsfc-row">
              ${this._wfcNumField(V,"divider_above_width","Thickness","px",t.divider_above_width,1)}
              ${this._wfcNumField(V,"divider_above_length","Length","%",t.divider_above_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(V,"divider_above_style","Line style",S2,t.divider_above_style,"solid")}
            </div>`:u}

      ${this._wfcCheckbox("Section Divider Below",t.divider_below,r=>this._wfcToggleSecField(V,"divider_below",r))}
      ${t.divider_below?o`
            <div class="wsfc-row">
              ${this._wfcNumField(V,"divider_below_width","Thickness","px",t.divider_below_width,1)}
              ${this._wfcNumField(V,"divider_below_length","Length","%",t.divider_below_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(V,"divider_below_style","Line style",S2,t.divider_below_style,"solid")}
            </div>`:u}

      ${t.divider_above||t.divider_below?this._wfcColorField("Divider color",t.divider_color,r=>this._wfcSetSecField(V,"divider_color",r.target.value)):u}
    `},Z._wfcBackgroundControls=function(V,t){let r=!!t.background_enabled;return o`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section background",r,n=>this._wfcToggleSecField(V,"background_enabled",n))}
      ${r?o`
            ${this._wfcColorField("Background color",t.background_color,n=>this._wfcSetSecField(V,"background_color",n.target.value))}
            ${this._wfcPlainSlider("Transparency (0 = solid, 100 = invisible)","%",t.background_opacity==null?80:t.background_opacity,80,"opacity",n=>this._wfcSetSecField(V,"background_opacity",A(parseInt(n.target.value,10)||0,0,100)))}`:u}
    `},Z._wfcSectionStyles=function(V,t){return this.wsfcHide&&this.wsfcHide.includes("group:Section Styles")?u:this._wfcSubPanel("Section Styles",o`
        ${this._wfcFlushControls(V,t)}
        ${this._wfcDividerControls(V,t)}
        ${this._wfcBackgroundControls(V,t)}`)},Z._wfcStockForm=function(V){return this._wfcStockFormFor(Z2[V])},Z._wfcStockFormFor=function(V){if(!V||!V.length)return u;let t=B1(this._config),r=this._getSelectedAttributes(t),n=this._schema(this.localize.bind(this),r,"chart"),d=new Map,v=O=>O.forEach(w=>{w.schema?v(w.schema):d.set(w.name,w)});v(n);let m=V.map(O=>d.get(O)).filter(Boolean);if(!m.length)return u;let S=O=>f2[O.name]||this._computeLabel(O)||O.name;return o`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${m}
        .computeLabel=${S}
        .computeHelper=${O=>this._wfcHelper(O)}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `},Z._wfcTitleControls=function(V,t){return o`
      ${this._wfcCheckbox("Show Title Row",t.title_show,r=>this._wfcToggleSecField(V,"title_show",r))}
      ${t.title_show?o`
            <label class="wsfc-field">
              <span class="wsfc-field-label">Title text</span>
              <input
                type="text"
                class="wsfc-input"
                .value=${t.title_text||""}
                @change=${r=>this._wfcSetSecField(V,"title_text",r.target.value)}
              />
            </label>
            <ha-icon-picker
              label="Title icon"
              .value=${t.title_icon||""}
              @value-changed=${r=>this._wfcSetSecField(V,"title_icon",r.detail&&r.detail.value||"")}
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
              ${this._wfcColorField("Text color",t.title_color,r=>this._wfcSetSecField(V,"title_color",r.target.value))}
              ${this._wfcColorField("Icon color",t.title_icon_color,r=>this._wfcSetSecField(V,"title_icon_color",r.target.value))}
            </div>
          `:u}
    `},Z._wfcSectionOptionsBody=function(V,t){let r=t[V]||{},n=V==="details",d=V==="current",v=V==="sun_position",m=V==="sun_arc",S=V==="hourly",O=V==="daily",w=this._config.forecast||{},_=this._config.current||{},P=A(parseInt(r.columns,10)||2,1,4),y=this._wfcMetricOptions(typeof K<"u"?K:[],!0);return o`
        <div class="wsfc-sub-body">
          <div class="wsfc-sec-reset-row">
            <button
              type="button"
              class="wsfc-sec-reset"
              title="Reset this section's settings to defaults (keeps show/hide)"
              @click=${()=>this._wfcResetSection(V)}
            >↺ Reset section</button>
          </div>
          ${this._wfcTitleControls(V,r)}
          ${d?o`
                ${this._wfcConfigText("name","Custom Friendly Name",this._config.name,"")}
                <p class="wsfc-hint">Friendly name shown under the Current Weather value. Enter a single space to hide it.</p>`:u}
          ${d?o`
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
          ${S?o`
                ${this._wfcForecastTypeControls("hourly")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Hourly forecast slots (0 = All)","hourly_slots",w.hourly_slots)}
                ${this._wfcConfigSlider("forecast.hourly_group_size","Hourly forecast group size","",w.hourly_group_size,1)}`:u}
          ${O?o`
                ${this._wfcForecastTypeControls("daily")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Daily forecast slots (0 = All)","daily_slots",w.daily_slots)}`:u}
          ${n?o`
                ${this._wfcGroup("Layout")}
                ${r.chips?o`
                      ${this._wfcSelect(V,"chip_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],r.chip_layout==="column"?"wrap":r.chip_layout||"wrap","wrap")}
                      ${(r.chip_layout||"wrap")==="grid"?o`
                            ${this._wfcCheckbox("Set a fixed number of columns",parseInt(r.chip_columns,10)>0,f=>this._wfcSetSecField(V,"chip_columns",f.target.checked?A(parseInt(r.chip_columns,10)||2,1,6):0))}
                            ${parseInt(r.chip_columns,10)>0?this._wfcNumField(V,"chip_columns","Columns","",parseInt(r.chip_columns,10)||2,2):u}`:u}`:o`
                      ${this._wfcSelect(V,"details_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],r.details_layout||"grid","grid")}
                      ${(r.details_layout||"grid")==="grid"?this._wfcNumField(V,"columns","Columns","",P,2):u}`}

                ${this._wfcGroup("Chips")}
                ${this._wfcCheckbox("Display metrics as chips",!!r.chips,f=>this._wfcToggleSecField(V,"chips",f))}
                ${r.chips?o`
                      ${this._wfcCheckbox("Pill (fully rounded ends)",r.chip_pill!=null?!!r.chip_pill:r.chip_shape!=="rounded"&&r.chip_shape!=="square",f=>this._wfcSetSecField(V,"chip_pill",f.target.checked))}
                      ${(r.chip_pill!=null?r.chip_pill:r.chip_shape!=="rounded"&&r.chip_shape!=="square")?u:this._wfcNumField(V,"chip_radius","Corner radius (0 = square)","px",r.chip_radius,8)}
                      ${this._wfcPlainSlider("Chip scale","%",Math.round((r.chip_scale==null?1:r.chip_scale)*100),100,"chip_scale",f=>this._wfcSetSecField(V,"chip_scale",A((parseInt(f.target.value,10)||100)/100,.5,2.5)))}
                      ${this._wfcAutoSizeField(V,"chip_text_size","Text size")}
                      ${this._wfcColorField("Chip text",r.chip_text_color,f=>this._wfcSetSecField(V,"chip_text_color",f.target.value))}
                      ${this._wfcColorField("Chip background",r.chip_bg,f=>this._wfcSetSecField(V,"chip_bg",f.target.value))}
                      ${this._wfcColorField("Chip border",r.chip_border_color,f=>this._wfcSetSecField(V,"chip_border_color",f.target.value))}
                      ${this._wfcCheckbox("Show icon on chip",r.chip_show_icon!==!1,f=>this._wfcToggleSecField(V,"chip_show_icon",f))}
                      ${r.chip_show_icon!==!1?o`
                            ${this._wfcSelect(V,"chip_icon_source","Chip icon",[{value:"auto",label:"Metric's default icon"},{value:"entity",label:"Value's custom icon"},{value:"none",label:"None"}],r.chip_icon_source,"auto")}
                            ${this._wfcAutoSizeField(V,"chip_icon_size","Icon size")}
                            ${this._wfcColorField("Icon color",r.chip_icon_color,f=>this._wfcSetSecField(V,"chip_icon_color",f.target.value))}`:u}
                      ${this._wfcCheckbox("Show metric name in chip",!!r.chip_show_name,f=>this._wfcToggleSecField(V,"chip_show_name",f))}
                      ${this._wfcCheckbox("Hide chip when value is off / unknown",!!r.chip_hide_when_off,f=>this._wfcToggleSecField(V,"chip_hide_when_off",f))}`:u}

                ${r.chips?o`
                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">Enable and reorder which metrics appear as chips.</p>
                      ${this._wfcDetailRows(t)}`:o`
                      ${this._wfcGroup("Global value styling")}
                      <p class="wsfc-hint">Defaults for every value. Individual values can override these by switching to “Custom”.</p>
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(V,"global_icon_size","Icon size")}
                        ${this._wfcAutoSizeField(V,"global_text_size","Text size")}
                      </div>
                      <div class="wsfc-row">
                        ${this._wfcColorField("Icon color",r.global_icon_color,f=>this._wfcSetSecField(V,"global_icon_color",f.target.value))}
                        ${this._wfcColorField("Text color",r.global_text_color,f=>this._wfcSetSecField(V,"global_text_color",f.target.value))}
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
                      ${this._wfcSelect(V,"timeframe_mode","Time Frame",[{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"},{value:"match_arc",label:"Match Sun Position arc"}],r.timeframe_mode,"hours")}
                      ${r.timeframe_mode==="hours"||r.timeframe_mode==null?o`
                            ${this._wfcNumField(V,"timeframe_hours","Hours","",r.timeframe_hours,24)}
                            ${this._wfcSelect(V,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],r.timeframe_anchor,"now_left")}
                          `:u}
                    </div>
                    ${this._wfcGroup("Time labels & tick marks")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(V,"times_position","Time Labels",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],r.times_position==="center"?"overlay":r.times_position,"below")}
                      ${this._wfcSelect(V,"ticks_position","Time tick marks",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],r.ticks_position,"hidden")}
                    </div>
                    ${this._wfcSelect(V,"ticks_every","Show a label / tick every",[{value:0,label:"Auto (fit ~8 across)"},...[1,2,3,4,6,8,12].map(f=>({value:f,label:f+(f>1?" hours":" hour")}))],r.ticks_every==null?0:r.ticks_every,0)}
                    <p class="wsfc-hint">Controls the spacing of both the time labels and the tick marks.</p>
                    ${this._wfcTextControls(V,"times","Time labels",11)}`)}

                ${this._wfcSubPanel("Current-time marker",o`
                    <div class="wsfc-row">
                      ${this._wfcColorField("Marker color",r.marker_color,f=>this._wfcSetSecField(V,"marker_color",f.target.value))}
                      ${this._wfcNumField(V,"marker_opacity","Marker opacity","%",r.marker_opacity==null?100:r.marker_opacity,100)}
                    </div>`)}

                ${this._wfcSubPanel("Sunrise & sunset markers",o`
                    <div class="wsfc-row">
                      ${this._wfcSelect(V,"ss_markers_position","Position",[{value:"hidden",label:"Hide"},{value:"overlay",label:"On the bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],r.ss_markers_position,"hidden")}
                    </div>
                    ${r.ss_markers_position&&r.ss_markers_position!=="hidden"?o`<div class="wsfc-row">
                          ${this._wfcColorField("Marker color",r.ss_markers_color,f=>this._wfcSetSecField(V,"ss_markers_color",f.target.value))}
                          ${this._wfcNumField(V,"ss_markers_opacity","Marker opacity","%",r.ss_markers_opacity==null?100:r.ss_markers_opacity,100)}
                        </div>`:u}`)}

                ${this._wfcSubPanel("Forecast Weather Metrics",o`
                    ${this._wfcSubPanel("Metrics Defaults",o`
                        ${this._wfcCheckbox("Use Current Weather Metrics icons",!!r.forecast_metric_detail_icons,f=>this._wfcToggleSecField(V,"forecast_metric_detail_icons",f))}
                        ${this._wfcCheckbox("Temperature text beside the condition icon",!!r.forecast_temp_with_icon,f=>this._wfcToggleSecField(V,"forecast_temp_with_icon",f))}
                        <div class="wsfc-row">
                          ${this._wfcSelect(V,"forecast_every","Show every",[{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(f=>({value:f,label:f+(f>1?" hours":" hour")}))],r.forecast_every,3)}
                          ${this._wfcNumField(V,"forecast_font_size","Text size","px",r.forecast_font_size,11)}
                          ${this._wfcNumField(V,"forecast_icon_size","Icon size","px",r.forecast_icon_size,22)}
                        </div>
                        ${this._wfcColorField("Temperature color",r.forecast_temp_color,f=>this._wfcSetSecField(V,"forecast_temp_color",f.target.value))}
                        ${this._wfcColorField("Icon color",r.forecast_icon_color,f=>this._wfcSetSecField(V,"forecast_icon_color",f.target.value))}
                        ${l.some(f=>r.forecast_metric_pos&&r.forecast_metric_pos[f]&&r.forecast_metric_pos[f]!=="hidden"||b(r).includes(f))?this._wfcColorField("Metric Text Color",r.forecast_extra_color,f=>this._wfcSetSecField(V,"forecast_extra_color",f.target.value)):u}`)}
                    <p class="wsfc-hint">Show/hide and place each metric, and drag the order to control exactly where each sits on the bar. Listed top to bottom as they appear on the bar; the arrows move a metric up or down among those in the same place (change its place with the drop-down). Expand a metric to override the defaults (including its own "Show every").</p>
                    ${this._wfcMetricsOrder(V,r)}`)}

                ${this._wfcSubPanel("Bar Size & Colors",o`
                    ${this._wfcNumField(V,"height","Bar height","px",r.height,44)}
                    <p class="wsfc-hint">Gradient colors — blank = built-in palette.</p>
                    ${this._wfcCheckbox("Adjust colors for forecast (clouds)",r.weather_adjust!==!1,f=>this._wfcToggleSecField(V,"weather_adjust",f))}
                    <div class="wsfc-row">
                      ${this._wfcColorField("Day color",r.day_color,f=>this._wfcSetSecField(V,"day_color",f.target.value))}
                      ${this._wfcColorField("Night color",r.night_color,f=>this._wfcSetSecField(V,"night_color",f.target.value))}
                    </div>`)}

                ${this._wfcSectionStyles(V,r)}
              `:u}

          ${m?o`
                <div class="wsfc-row">
                  ${this._wfcNumField(V,"height","Arc height","px",r.height,90)}
                  ${this._wfcSelect(V,"time_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],r.time_format,"auto")}
                </div>

                ${this.wsfcHide&&this.wsfcHide.includes("timeframe_mode")?u:this._wfcGroup("Timeframe")}
                <div class="wsfc-row">
                  ${this._wfcSelect(V,"timeframe_mode","Time Frame",[{value:"sunrise_sunset",label:"Sunrise \u2192 sunset (fill width)"},{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"}],r.timeframe_mode,"sunrise_sunset")}
                  ${r.timeframe_mode==="hours"?o`
                        ${this._wfcNumField(V,"timeframe_hours","Hours","",r.timeframe_hours,24)}
                        ${this._wfcSelect(V,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],r.timeframe_anchor,"now_left")}
                      `:u}
                </div>
                <div class="wsfc-hint">When the baseline is the Sky Bar, the arc matches that bar's timeframe automatically.</div>

                <div class="wsfc-hint">Labels vertical position: 0 = below the arc, 50 = mid, 100 = above.</div>
                ${this._wfcPlainSlider("Labels position","",T(r.labels_position),0,"labels_position",f=>this._wfcSetSecField(V,"labels_position",A(parseInt(f.target.value,10)||0,0,100)))}
                ${this._wfcGroup("Sun marker")}
                <ha-icon-picker
                  label="Sun icon (blank = filled dot)"
                  .value=${r.sun_icon||""}
                  @value-changed=${f=>this._wfcSetSecField(V,"sun_icon",f.detail&&f.detail.value||"")}
                ></ha-icon-picker>
                ${this.wsfcHide&&this.wsfcHide.includes("night_moon")?u:this._wfcCheckbox("Use a moon icon at night (between sunset & sunrise)",!!r.night_moon,f=>this._wfcToggleSecField(V,"night_moon",f))}
                ${r.night_moon&&!(this.wsfcHide&&this.wsfcHide.includes("night_moon"))?o`<ha-icon-picker
                      label="Moon icon"
                      .value=${r.moon_icon||"mdi:weather-night"}
                      @value-changed=${f=>this._wfcSetSecField(V,"moon_icon",f.detail&&f.detail.value||"mdi:weather-night")}
                    ></ha-icon-picker>`:u}

                ${this._wfcGroup("Baseline")}
                <div class="wsfc-row">
                  ${this._wfcSelect(V,"baseline_mode","Baseline",[{value:"line",label:"Horizon line"},{value:"sky",label:"Sky Bar"}],r.baseline_mode,"line")}
                </div>
                <div class="wsfc-hint">“Sky Bar” reuses the settings from the Sky Bar panel.</div>

                ${this._wfcGroup("Tick marks")}
                ${this._wfcCheckbox("Show tick marks on the arc",r.show_arc_ticks,f=>this._wfcToggleSecField(V,"show_arc_ticks",f))}
                ${this._wfcCheckbox("Show tick marks on the baseline",r.show_base_ticks!==!1,f=>this._wfcToggleSecField(V,"show_base_ticks",f))}
                <div class="wsfc-row">
                  ${this._wfcSelect(V,"sunrise_sunset_ticks","Sunrise & sunset ticks",[{value:"none",label:"None"},{value:"arc",label:"On the arc"},{value:"base",label:"On the baseline"},{value:"both",label:"Arc and baseline"}],r.sunrise_sunset_ticks,"none")}
                </div>
                ${this._wfcColorField("Tick color",r.tick_color,f=>this._wfcSetSecField(V,"tick_color",f.target.value))}

                ${this._wfcGroup("Sunrise / sunset labels")}
                ${this._wfcCheckbox("Show times",r.show_times!==!1,f=>this._wfcToggleSecField(V,"show_times",f))}
                ${this._wfcCheckbox("Show captions (sunrise / sunset)",r.show_captions!==!1,f=>this._wfcToggleSecField(V,"show_captions",f))}

                ${this._wfcGroup("Sunrise / sunset icons")}
                ${this._wfcCheckbox("Show sunrise & sunset icons",r.show_ss_icons,f=>this._wfcToggleSecField(V,"show_ss_icons",f))}
                ${r.show_ss_icons?o`
                      <ha-icon-picker
                        label="Sunrise icon"
                        .value=${r.sunrise_icon||"mdi:weather-sunset-up"}
                        @value-changed=${f=>this._wfcSetSecField(V,"sunrise_icon",f.detail&&f.detail.value||"")}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Sunset icon"
                        .value=${r.sunset_icon||"mdi:weather-sunset-down"}
                        @value-changed=${f=>this._wfcSetSecField(V,"sunset_icon",f.detail&&f.detail.value||"")}
                      ></ha-icon-picker>
                      <div class="wsfc-row">
                        ${this._wfcSelect(V,"ss_icon_position","Icon placement",[{value:"left",label:"Left of text"},{value:"right",label:"Right of text"},{value:"above",label:"Above text"},{value:"below",label:"Below text"}],r.ss_icon_position,"left")}
                        ${this._wfcNumField(V,"ss_icon_size","Icon size","px",r.ss_icon_size,20)}
                      </div>
                      ${this._wfcColorField("Icon color",r.ss_icon_color,f=>this._wfcSetSecField(V,"ss_icon_color",f.target.value))}
                    `:u}

                ${this._wfcTextControls(V,"time","Time text",13)}
                ${this._wfcTextControls(V,"caption","Sunrise / sunset caption",11)}
              `:u}

          ${v?u:this._wfcSectionStyles(V,r)}
        </div>
    `};let g2={current:"mdi:weather-partly-cloudy",details:"mdi:format-list-bulleted",hourly:"mdi:clock-outline",daily:"mdi:calendar-week",sun_position:"mdi:white-balance-sunny",sun_arc:"mdi:sine-wave"};Z._wfcPlainNum=function(V,t,r){return this._wfcPlainSlider(V,"px",t,16,"_size",r)},Z._wfcDetailRows=function(V){return V.details.items.map((r,n,d)=>{let v=H[r.key]||{};return o`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <ha-icon class="wsfc-detail-glyph wsfc-glyph-accent" icon=${r.icon||v.icon||"mdi:tag-outline"}></ha-icon>
            <span class="wsfc-order-name">${v.label||r.key}</span>
            <ha-icon class="wsfc-ico-btn ${n===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${m=>{m.preventDefault(),m.stopPropagation(),this._wfcMoveDetail(r.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${n===d.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${m=>{m.preventDefault(),m.stopPropagation(),this._wfcMoveDetail(r.key,1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn" icon=${r.show?"mdi:eye":"mdi:eye-off"} title=${r.show?"Shown \u2014 click to hide":"Hidden \u2014 click to show"}
              @click=${m=>{m.preventDefault(),m.stopPropagation(),this._wfcToggleDetailShow(r.key)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <ha-icon-picker
              class="wsfc-grow"
              label="Icon (blank = default)"
              .placeholder=${v.icon||""}
              .value=${r.icon||""}
              @value-changed=${m=>this._wfcSetDetail(r.key,"icon",m)}
            ></ha-icon-picker>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Styling</span>
              <select class="wsfc-native-select" @change=${m=>this._wfcSetDetailValue(r.key,"mode",m.target.value)}>
                <option value="global" ?selected=${r.mode!=="custom"}>Global (use section defaults)</option>
                <option value="custom" ?selected=${r.mode==="custom"}>Custom</option>
              </select>
            </label>
            ${r.mode==="custom"?o`
                  ${this._wfcPlainNum("Icon size (px)",r.icon_size,m=>this._wfcSetDetail(r.key,"icon_size",m))}
                  ${this._wfcPlainNum("Text size (px)",r.text_size,m=>this._wfcSetDetail(r.key,"text_size",m))}
                  ${this._wfcColorField("Icon color",r.icon_color,m=>this._wfcSetDetail(r.key,"icon_color",m))}
                  ${this._wfcColorField("Text color",r.text_color,m=>this._wfcSetDetail(r.key,"text_color",m))}
                `:u}
          </div>
        </details>
      `})};let w2=["current","details","hourly","daily","sun_arc","sun_position"];function E3(V){let t=w2.filter(n=>V.includes(n)),r=V.filter(n=>!w2.includes(n));return[...t,...r]}Z._wfcEditor=function(){let V=g(this._config),t=E3(V.order),r=V.order.map((d,v,m)=>{let S=!!(V[d]&&V[d].show);return o`
        <div class="wsfc-order-row">
          <ha-icon class="wsfc-order-lead" icon=${g2[d]||H2.options}></ha-icon>
          <span class="wsfc-order-name">${L[d]||d}</span>
          <ha-icon class="wsfc-ico-btn ${v===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up" @click=${()=>this._wfcMoveSection(d,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${v===m.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down" @click=${()=>this._wfcMoveSection(d,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${S?"mdi:eye":"mdi:eye-off"} title=${S?"Shown \u2014 click to hide":"Hidden \u2014 click to show"} @click=${()=>this._wfcToggleSectionShow(d)}></ha-icon>
        </div>
      `}),n=t.map(d=>o`
        <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${g2[d]||H2.options}></ha-icon><span class="wsfc-panel-title">${L[d]||d}</span></summary>
          <div class="wsfc-ed-panel">
            ${this._wfcSectionOptionsBody(d,V)}
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
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${H2.order}></ha-icon><span class="wsfc-panel-title">Section order &amp; visibility</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">
            Toggle each section on/off and use the arrows to reorder them (top → bottom).
            Each section's own settings panel is below.
          </p>
          ${r}
        </div>
      </details>
      ${n}
      ${this._wfcClockPanel(V)}
    `};let b2=[{value:"left",label:"Left of weather"},{value:"center",label:"Center of row"},{value:"right",label:"Right of weather"},{value:"above-left",label:"Above weather \u2014 left"},{value:"above-center",label:"Above weather \u2014 middle"},{value:"above-right",label:"Above weather \u2014 right"},{value:"below-left",label:"Below weather \u2014 left"},{value:"below-center",label:"Below weather \u2014 middle"},{value:"below-right",label:"Below weather \u2014 right"}];Z._wfcClockPanel=function(V){let t="current",r=V.current||{},n=v=>v==="above"?"above-center":v==="below"?"below-center":v,d=r.clock_show_time!==!1;return o`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:clock-outline"></ha-icon><span class="wsfc-panel-title">Clock &amp; Date</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Digital clock &amp; date rendered in the Current Weather row. Enable Current Weather to show it.</p>
          ${this._wfcGroup("Clock (time)")}
                ${this._wfcCheckbox("Show Time",d,v=>this._wfcToggleSecField(t,"clock_show_time",v))}
                ${d?o`
                      <div class="wsfc-row">
                        ${this._wfcSelect(t,"clock_placement","Clock placement",b2,n(r.clock_placement),"right")}
                        ${this._wfcSelect(t,"clock_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],r.clock_format,"auto")}
                      </div>
                      ${this._wfcCheckbox("Show Seconds",r.clock_show_seconds,v=>this._wfcToggleSecField(t,"clock_show_seconds",v))}
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(t,"clock_font_size","Time size")}
                        ${this._wfcSelect(t,"clock_font_weight","Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],r.clock_font_weight,"500")}
                      </div>
                      ${this._wfcColorField("Time color",r.clock_color,v=>this._wfcSetSecField(t,"clock_color",v.target.value))}
                      <label class="wsfc-field">
                        <span class="wsfc-field-label">Font family (blank = card default)</span>
                        <input
                          type="text"
                          class="wsfc-input"
                          placeholder="e.g. Roboto Mono, monospace"
                          .value=${r.clock_font_family||""}
                          @change=${v=>this._wfcSetSecField(t,"clock_font_family",v.target.value)}
                        />
                      </label>
                      ${this._wfcSelect(t,"clock_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],r.clock_contrast,"none")}`:u}

                ${this._wfcGroup("Date")}
                ${this._wfcCheckbox("Show Date",r.clock_show_date,v=>this._wfcToggleSecField(t,"clock_show_date",v))}
                ${r.clock_show_date?o`
                      ${this._wfcSelect(t,"clock_date_format","Date format",C.map(v=>({value:v.value,label:v.label})),r.clock_date_format,"auto")}
                      <div class="wsfc-row">
                        ${this._wfcSelect(t,"clock_date_placement","Date placement",[{value:"with_time",label:"With clock"},...b2],r.clock_date_placement==="above"||r.clock_date_placement==="below"?n(r.clock_date_placement):r.clock_date_placement,"with_time")}
                        ${this._wfcAutoSizeField(t,"clock_date_font_size","Date size")}
                        ${this._wfcColorField("Date color",r.clock_date_color,v=>this._wfcSetSecField(t,"clock_date_color",v.target.value))}
                      </div>
                      ${r.clock_show_time&&(r.clock_date_placement==="with_time"||!r.clock_date_placement)?this._wfcSelect(t,"clock_align","Time & date alignment",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}],r.clock_align||"center","center"):u}
                      ${this._wfcSelect(t,"clock_date_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],r.clock_date_contrast!=null?r.clock_date_contrast:r.clock_contrast,"none")}`:u}
        </div>
      </details>
    `},Z._wfcYamlPanel=function(){let V;try{V=E(this._config)}catch{V="# (unable to render YAML)"}return o`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:code-braces"></ha-icon><span class="wsfc-panel-title">YAML configuration</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Read-only view of this card's current configuration.</p>
          <pre class="wsfc-yaml">${V}</pre>
        </div>
      </details>
    `}})();{let M=j.prototype,C=M._wfcWeatherSourcesPanel,H=M.render,e=M.updated;M._wfcWeatherSourcesPanel=function(){return this.wsfcMode==="sections"?"":C.call(this)},M.render=function(){return this.wsfcMode!=="sources"?H.call(this):!this.hass||!this._config?"":o`${this._wfcEditorStyle()}${C.call(this)}`};let L=new CSSStyleSheet;L.replaceSync(`
    details.wsfc-panel { border: 1px solid transparent; border-top-color: var(--ltek-c-border-soft, rgba(127,127,127,.25)); border-radius: 0; background: none; margin: 0; }
    details.wsfc-panel[open] { border-color: var(--accent-color, var(--ltek-c-accent, #03a9f4)); border-radius: var(--ltek-r-ctrl, 8px); margin: 6px 0; }
    details.wsfc-panel[open] + details.wsfc-panel { border-top-color: transparent; }
    details.wsfc-panel > summary.wsfc-panel-summary { padding: var(--ltek-sp-3, 10px); gap: 8px; }
    details.wsfc-panel > summary .wsfc-panel-icon { display: none; }
    details.wsfc-panel > summary .wsfc-panel-title { font-size: var(--ltek-fs-label, 13px); font-weight: var(--ltek-fw-semibold, 600); text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); }
    details.wsfc-panel > summary::after { width: 8px; height: 8px; border-right-color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); border-bottom-color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); }
    .wsfc-ed-header { display: none; }
  `),M.updated=function(i){e?.call(this,i),this.wsfcMode==="sections"&&this.renderRoot&&(this.renderRoot.adoptedStyleSheets.includes(L)||(this.renderRoot.adoptedStyleSheets=[...this.renderRoot.adoptedStyleSheets,L]),this.renderRoot.querySelectorAll("details.wsfc-panel").forEach(s=>{s.__wsfcFlat||(s.__wsfcFlat=!0,s.addEventListener("toggle",()=>{s.open&&this.dispatchEvent(new CustomEvent("wsfc-flat-open",{detail:{type:this.wsfcType},bubbles:!0,composed:!0}))}))}));let a=this.wsfcPanels;if(a&&this.wsfcMode!=="sources"&&this.renderRoot?.querySelectorAll("details.wfc-panel, details.wsfc-panel").forEach(s=>{let l=s.querySelector(":scope > summary .wfc-panel-title, :scope > summary .wsfc-panel-title")?.textContent?.trim();s.hidden=!!l&&!a.includes(l)}),this.wsfcMode==="sources"&&!this.__wsfcOpened){let s=this.renderRoot?.querySelector("details.wfc-panel, details.wsfc-panel");s&&(s.open=!0,this.__wsfcOpened=!0)}}}var u5=globalThis.__wsfcHost?.["src/card/constants.js"];if(!u5)throw new Error("wsfc-editor.js: the card did not provide src/card/constants.js; update every file of the card together");var{CARD_NAME:x5,CARD_TYPE:o2,CARD_VERSION:Z5}=u5;var f5=globalThis.__wsfcHost?.["src/card/panels.js"];if(!f5)throw new Error("wsfc-editor.js: the card did not provide src/card/panels.js; update every file of the card together");var{COLLAPSE_COLORS:h5,COLLAPSE_FIELDS:a9,COMMON_SCHEMA:P1,DEFAULT_PANELS:n9,HERO_TEXT_ICONS:A9,NO_TITLE:S5,PANEL_TYPES:a2,SKY_TEXT_ICONS:l9,STACK_CHILD_SCHEMA:$1,TITLE_COLORS:g5,TITLE_WHEN_SET:n2,inBarOf:R1,layoutOf:d9,migrateSky:s9,normalizePanels:w5,opensPopup:p9,panelMeta:I,rowsOf:W,spanOf:G}=f5;var b5=globalThis.__wsfcHost?.["src/card/core.js"];if(!b5)throw new Error("wsfc-editor.js: the card did not provide src/card/core.js; update every file of the card together");var{CORE_EDITOR_TAG:_5,CORE_TAG:c9,CoreSlot:v9,FLEX_SECTIONS_BUILD:u9,deepMerge:O5,flexBaseline:x9,flexOverride:y5,resolveWfc:Z9}=b5;var k5=globalThis.__wsfcHost?.["src/panels/flex.js"];if(!k5)throw new Error("wsfc-editor.js: the card did not provide src/panels/flex.js; update every file of the card together");var{FLEX_BASES:h9,WsfcFlexPanel:S9,adoptContrast:g9,flexBase:T5,heroAutoSizes:w9,scaleTracker:b9,scaledSizes:_9,trackerConfig:F5}=k5;var B5=globalThis.__wsfcHost?.["src/card/config.js"];if(!B5)throw new Error("wsfc-editor.js: the card did not provide src/card/config.js; update every file of the card together");var{clone:n1,deepDiff:y9,deepMerge:k9,fitMode:V1,prune:q}=B5;var P5=globalThis.__wsfcHost?.["src/card/metrics.js"];if(!P5)throw new Error("wsfc-editor.js: the card did not provide src/card/metrics.js; update every file of the card together");var{CARDINALS:F9,METRICS:z,cardinal:B9,digitsFor:P9,metricEntity:E1,pressureThreshold:$9,uvLevel:R9}=P5;var $5=globalThis.__wsfcHost?.["src/card/layout.js"];if(!$5)throw new Error("wsfc-editor.js: the card did not provide src/card/layout.js; update every file of the card together");var{COLS:D9,Q:H1,arrange:A1,pushDown:l1,readingOrder:A2,toRows:t1,toTracks:L1}=$5;var D1=30,W1=4,R5=10,u1=M=>M.title?M.title:M.type==="metric"?z[M.metric]?.label||M.label||"Metric":M.type==="stack"?`Stack \xB7 ${(M.panels||[]).length}`:M.type==="day"?["Today","Tomorrow"][Number(M.day_offset??1)]||`Day +${M.day_offset}`:(I(M)?.label||M.type).replace(/ \(.*\)$/,""),l2=M=>M.icon||M.type==="metric"&&z[M.metric]?.icon||I(M)?.icon||"mdi:square-outline",x1=class extends N{connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(()=>{let C=this.renderRoot.querySelector(".grid");if(!C)return;let H=C.clientWidth-12;Math.abs(H-(this._mapW||0))>1&&(this._mapW=H)}),this.updateComplete.then(()=>{let C=this.renderRoot.querySelector(".grid");C&&this._ro.observe(C)})}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect()}_scale(){let C=this.guide;if(!C?.w||!C?.h||!this._mapW)return{row:D1,gap:W1,line:null};let H=this._mapW/C.w,e=Math.max(100,C.h-(C.chrome||0)),L=C.row||110,i=!1;if(C.fit&&this._tracks){let s=this._tracks/H1,l=(e+(C.gap??12))/s-(C.gap??12);L=Math.max(60,Math.min(400,l)),i=l>=60}let a=Math.max(2,(C.gap??12)*H);return{row:Math.max(8,L*H),gap:a,line:e*H,rowPx:Math.round(L),fits:i}}updated(C){if(C.has("panels")&&this._focusNext!=null){let a=this._focusNext;this._focusNext=null,this.renderRoot.querySelector(`.blk[data-i="${a}"]`)?.focus()}let H=this.renderRoot.querySelector(".grid.measure");if(!H||!this.guide?.fit)return;let{row:e,gap:L}=this._scale(),i=Math.max(H1,Math.round((H.clientHeight-12+L)/((e-3*L)/H1+L)));i!==this._tracks&&(this._tracks=i)}_inMap(C){return C.display!=="popup"&&C.show!==!1}_gridIdx(){return(this.panels||[]).map((C,H)=>H).filter(C=>this._inMap(this.panels[C]))}_items(C=this.panels||[]){return this._gridIdx().map(H=>{let e=C[H];return{key:H,w:G(e),h:L1(W(e)),x:e.x??null,y:e.y==null?null:Number(e.y)*H1}})}_positions(){return this._preview||A1(this._items(),{gravity:this.gravity!==!1})}render(){let C=this.panels||[];this._pos=this._positions();let H=A2(this._pos),e=C.map((s,l)=>l).filter(s=>C[s].display==="popup"),L=C.map((s,l)=>l).filter(s=>C[s].display!=="popup"&&C[s].show===!1),i=this._scale();this._mr=i.row,this._mg=i.gap;let a=this.guide?.mode||"line";return o`
      <div class="wrap">
        <div class="grid ${this._drag?.moved||this._size?"editing":""}" style=${`--row:${i.row}px;--gap:${i.gap}px`}>
          ${H.map(s=>this._block(C[s],s))}
        </div>
        ${this.guide?.fit?o`<div class="grid measure" aria-hidden="true" style=${`--row:${i.row}px;--gap:${i.gap}px`}>
          ${this._measureBlocks(C)}</div>`:u}
        ${this.measured?.w&&this._mapW?this.measured.gridH>this.measured.visibleH+1?o`<div class="guide frame" style=${`top:${6+this.measured.visibleH*(this._mapW/this.measured.w)}px`} aria-hidden="true"><span>${this.guide.w}×${this.guide.h} screen edge</span></div>`:o`<div class="guide fitbox" aria-hidden="true"><span>Fits ${this.guide.w}×${this.guide.h}</span></div>`:i.line==null?u:i.fits?o`<div class="guide fitbox" aria-hidden="true"><span>Fits ${this.guide.w}×${this.guide.h} · rows ${i.rowPx}px</span></div>`:o`<div class="guide ${a}" style=${`top:${6+i.line}px`} aria-hidden="true">
                <span>${this.guide.w}×${this.guide.h} screen edge${this.guide.fit?` \xB7 rows at the ${i.rowPx}px minimum`:""}</span></div>`}
      </div>
      ${this._screen()}
      ${L.length?o`<div class="pops"><span>Hidden on load (not on the map):</span>${L.map(s=>o`<span class="pop"><ha-icon icon=${l2(C[s])}></ha-icon>${u1(C[s])}</span>`)}</div>`:u}
      ${e.length?o`<div class="pops"><span>Pop-ups:</span>${e.map(s=>o`<span class="pop"><ha-icon icon=${l2(C[s])}></ha-icon>${u1(C[s])}</span>`)}</div>`:u}
    `}_screen(){let C=this.measured,H=this.guide;if(!C||!H||!this._mapW||!C.w)return u;let e=C.tiles.filter(a=>a.where==="off"),L=C.tiles.filter(a=>a.where==="partial"),i=a=>a.map(s=>u1(this.panels[s.i]||{})).join(", ");return o`<div class="shot-head">On the ${H.w}×${H.h} screen at load${C.gridH<=C.visibleH+1?o` — <span class="okc">everything fits</span>`:""}</div>
      ${e.length||L.length?o`<div class="shot-note">${L.length?o`<b>Partly off screen:</b> ${i(L)}. `:""}${e.length?o`<b>Off screen:</b> ${i(e)}.`:""}
            ${H.fit&&!H.strict?" Content makes some panels taller than their rows (dashed in the map); try Exact heights, Fill the panel, or more rows for them.":""}</div>`:u}`}_place(C){return`grid-column: ${C.x+1} / span ${C.w}; grid-row: ${C.y+1} / span ${C.h};`}_measureBlocks(C){let H=this._items().filter(L=>C[L.key].show!==!1);return[...A1(H,{gravity:this.gravity!==!1}).values()].map(L=>o`<div style=${this._place(L)}></div>`)}_block(C,H){let e=this._size?.index===H?this._size:null,L=this._pos.get(H),i=L.w,a=e?e.rows:W(C),s=this._place(L),l=!e&&this.measured?.tiles?.find(x=>x.i===H),A=l&&!l.collapsed?Math.round((l.h+this.measured.gap)/(this.measured.row+this.measured.gap)*H1)/H1:null,c=A!=null&&a>0&&A>a+.25;c&&(s+=`--extra:${Math.round((A-a)*((this._mr||D1)+(this._mg||W1)))}px;`);let p=["blk",C.show===!1?"hidden":"",this._drag?.index===H?"dragging":"",e?"sizing":"",C.type,l?`at-${l.where}`:"",c?"grows":"",l?.collapsed?"folded":""].join(" ");return o`<div class=${p} style=${s} data-i=${H} tabindex="0" role="button"
        aria-label=${`${u1(C)}, column ${L.x+1}, row ${t1(L.y)+1}, width ${i} of 12, height ${a||"auto"}. Arrow keys move; Shift+arrows resize.`}
        @pointerdown=${x=>this._startMove(x,H)} @keydown=${x=>this._key(x,H)}>
      <ha-icon icon=${l2(C)}></ha-icon>
      <span class="nm">${u1(C)}</span>
      <span class="dim">${i}×${a||"a"}${c?o` <b class="need" title="Its content makes it taller on that screen">→ ${A}</b>`:u}${l?.collapsed?" \xB7 collapsed":""}</span>
      <span class="rz x" @pointerdown=${x=>this._startSize(x,H,"x")}></span>
      <span class="rz y" @pointerdown=${x=>this._startSize(x,H,"y")}></span>
      <span class="rz xy" @pointerdown=${x=>this._startSize(x,H,"xy")}></span>
    </div>`}_cell(C){let H=this.renderRoot.querySelector(".grid"),e=H.getBoundingClientRect(),L=this._mg||W1,i=(H.clientWidth-12-11*L)/12,a=((this._mr||D1)-3*L)/H1;return{x:Math.floor((C.clientX-e.left-6)/(i+L)),y:Math.floor((C.clientY-e.top-6)/(a+L))}}_startMove(C,H){if(C.button!==0||C.target.classList.contains("rz"))return;C.preventDefault();let e=C.currentTarget;e.setPointerCapture(C.pointerId);let L=this._pos.get(H),i=this._cell(C);this._drag={index:H,x0:C.clientX,y0:C.clientY,moved:!1,dx:i.x-L.x,dy:i.y-L.y,at:{x:L.x,y:L.y}};let a=l=>this._onMove(l),s=()=>{e.removeEventListener("pointermove",a),e.removeEventListener("pointerup",s),e.removeEventListener("pointercancel",s);let l=this._drag,A=this._preview;this._drag=null,this._preview=null,l?.moved&&A&&(l.to.x!==l.at.x||l.to.y!==l.at.y)&&this._commit(A)};e.addEventListener("pointermove",a),e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s)}_onMove(C){let H=this._drag;if(!H||!H.moved&&Math.hypot(C.clientX-H.x0,C.clientY-H.y0)<4)return;H.moved=!0;let e=this._cell(C),L=A1(this._items(),{gravity:this.gravity!==!1}).get(H.index),i={x:Math.max(0,Math.min(12-L.w,e.x-H.dx)),y:Math.max(0,e.y-H.dy)};H.to&&H.to.x===i.x&&H.to.y===i.y||(H.to=i,this._preview=l1(this._items(),H.index,i,{gravity:this.gravity!==!1}))}_commit(C,H={}){let e=this.panels,L=A2(C),i=L.map(l=>{let A=C.get(l),c={...e[l],x:A.x,y:t1(A.y)};return H[l]&&Object.assign(c,H[l]),this._tidy(c)}),a=e.map(l=>this._inMap(l)?i.shift():l),s=e.map((l,A)=>A).filter(l=>this._inMap(e[l]));this._moved=new Map(L.map((l,A)=>[l,s[A]])),this._emit(a)}_tidy(C){let H=I(C)||{};return C.span===H.span&&delete C.span,C.rows!=null&&C.rows===(H.rows??0)&&delete C.rows,C}_commitOrder(C){let H=this.panels,e=C.map(i=>H[i]),L=H.map(i=>this._inMap(i)?e.shift():i);this._emit(L)}_startSize(C,H,e){if(C.button!==0)return;C.preventDefault(),C.stopPropagation();let L=C.currentTarget;L.setPointerCapture(C.pointerId);let i=this.renderRoot.querySelector(".grid"),a=this._mg||W1,s=(i.clientWidth-12-11*a)/12+a,l=((this._mr||D1)-3*a)/H1+a,A=this.panels[H],c=this._pos.get(H),p=G(A),x=W(A);this._size={index:H,span:p,rows:x};let h=C.clientX,b=C.clientY,k=F=>{let B=e==="y"?p:Math.max(1,Math.min(12-c.x,p+Math.round((F.clientX-h)/s))),$=e==="x"?x:Math.max(.25,Math.min(R5,t1(L1(x||1)+Math.round((F.clientY-b)/l))));e!=="x"&&x===0&&$===1&&Math.abs(F.clientY-b)<l/2&&($=0),!(B===this._size.span&&$===this._size.rows)&&(this._size={index:H,span:B,rows:$},this._preview=l1(this._items(),H,{x:c.x,y:c.y,w:B,h:L1($)},{gravity:this.gravity!==!1}))},T=()=>{L.removeEventListener("pointermove",k),L.removeEventListener("pointerup",T),L.removeEventListener("pointercancel",T);let{span:F,rows:B}=this._size,g=this._preview;this._size=null,this._preview=null,(F!==p||B!==x)&&g&&this._commit(g,{[H]:{span:F,rows:B}})};L.addEventListener("pointermove",k),L.addEventListener("pointerup",T),L.addEventListener("pointercancel",T)}_commitSize(C,H,e){let L=this._pos.get(C),i=l1(this._items(),C,{x:L.x,y:L.y,w:H,h:L1(e)},{gravity:this.gravity!==!1});this._commit(i,{[C]:{span:H,rows:e}})}_key(C,H){let e={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[C.key];if(!e)return;C.preventDefault();let L=this.panels[H];if(C.shiftKey){let i=Math.max(0,Math.min(R5,t1(L1(W(L)||1)+e[1])));this._commitSize(H,Math.max(1,Math.min(12-this._pos.get(H).x,G(L)+e[0])),W(L)===0&&e[1]<0?.75:i)}else{let i=this._pos.get(H),a={x:Math.max(0,Math.min(12-i.w,i.x+e[0])),y:Math.max(0,i.y+e[1])},s=l1(this._items(),H,a,{gravity:this.gravity!==!1});if(e[1]<0&&s.get(H).y>=i.y){let l=[...this._pos.values()].filter(A=>A.key!==H&&A.y+A.h<=i.y&&A.x<i.x+i.w&&i.x<A.x+A.w).sort((A,c)=>c.y+c.h-(A.y+A.h))[0];l&&(s=l1(this._items(),H,{x:i.x,y:l.y},{gravity:this.gravity!==!1}))}this._commit(s)}this._focusNext=this._moved?.get(H)??H}_emit(C){this.dispatchEvent(new CustomEvent("layout-changed",{detail:{panels:C}}))}};R(x1,"properties",{panels:{attribute:!1},_preview:{state:!0},gravity:{attribute:!1},_size:{state:!0},_drag:{state:!0},guide:{attribute:!1},measured:{attribute:!1},_mapW:{state:!0},_tracks:{state:!0}}),R(x1,"styles",D`
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
    .blk.grows { border-color: var(--warning-color, #ffa600); overflow: visible; }
    .blk.grows::after { content: ""; position: absolute; left: -1px; right: -1px; top: 100%; height: var(--extra, 0); z-index: 1; pointer-events: none;
      border: 1px dashed var(--warning-color, #ffa600); border-top: 0; border-radius: 0 0 6px 6px;
      background: repeating-linear-gradient(135deg, rgba(255, 166, 0, 0.18) 0 4px, transparent 4px 8px); }
    .blk.at-partial { border-color: var(--warning-color, #ffa600); }
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
  `);customElements.get("wsfc-layout-map")||customElements.define("wsfc-layout-map",x1);var E5=56,D5=16,Z1=class extends N{render(){let C=this.guide;return!C?.w||!C?.h?o``:o`<div class="screen" style=${`width:${Math.max(200,C.w-D5)}px;height:${Math.max(200,C.h-E5)}px`}></div>`}updated(C){let H=`${this.guide?.w}x${this.guide?.h}`;!(C.has("config")&&C.get("config")!==this.config)&&H===this._key&&this._card||this.hass&&(this._key=H,clearTimeout(this._t),this._t=setTimeout(()=>this._build(),400))}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._t),clearTimeout(this._m)}_build(){let C=this.renderRoot.querySelector(".screen"),H=this.guide;if(!(!C||!H||!this.hass||!this.config?.entity)&&customElements.get("weather-station-flex-card")){this._card||(this._card=document.createElement("weather-station-flex-card"),this._card.editMode=!0,C.append(this._card));try{this._card.setConfig({...this.config,remember:!1})}catch{return}this._card.screenHeight=Math.max(200,H.h-E5-D5),this._card.screenWidth=H.w,this._card.hass=this.hass,clearTimeout(this._m),this._m=setTimeout(()=>{try{this._card._fit?.(),this._card._autoFitPanels?.()}catch{}requestAnimationFrame(()=>this._measure())},900)}}_measure(){let C=this._card?.shadowRoot,H=C?.querySelector(".scroller"),e=C?.querySelector(".grid");if(!H||!e)return;let L=e.getBoundingClientRect(),i=H.getBoundingClientRect(),a=this.renderRoot.querySelector(".screen").getBoundingClientRect(),s=Math.min(i.top+H.clientHeight,a.bottom)-L.top,l=getComputedStyle(e),A=[...e.querySelectorAll(":scope > section.tile[data-i]")].map(c=>{let p=c.getBoundingClientRect(),x=p.top-L.top,h=p.height;return{i:Number(c.dataset.i),x:p.left-L.left,y:x,w:p.width,h,collapsed:c.classList.contains("collapsed"),where:x>=s-1?"off":x+h>s+1?"partial":"on"}});this.dispatchEvent(new CustomEvent("probe-measured",{detail:{w:L.width,visibleH:s,gridH:L.height,row:parseFloat(e.style.getPropertyValue("--wsfc-row")||l.getPropertyValue("--wsfc-row"))||110,gap:parseFloat(l.rowGap)||12,tiles:A}}))}};R(Z1,"properties",{hass:{attribute:!1},config:{attribute:!1},guide:{attribute:!1}}),R(Z1,"styles",D`
    :host { position: fixed; left: -20000px; top: 0; visibility: hidden; pointer-events: none; contain: layout; }
    .screen { position: relative; overflow: hidden; }
  `);customElements.get("wsfc-layout-probe")||customElements.define("wsfc-layout-probe",Z1);var N1=[["var(--primary-color)","Primary"],["var(--accent-color)","Accent"],["var(--primary-text-color)","Primary text"],["var(--secondary-text-color)","Secondary text"],["var(--disabled-text-color)","Disabled text"],["var(--disabled-color)","Disabled"],["var(--state-icon-color)","State icon"],["var(--state-active-color)","State active"],["var(--error-color)","Error"],["var(--warning-color)","Warning"],["var(--success-color)","Success"],["var(--info-color)","Info"]];function G0(M){return M=M==null?"":String(M),M===""?"default":M==="transparent"?"transparent":/^#[0-9a-fA-F]{3,8}$/.test(M)?"custom":/^var\(/.test(M)&&N1.some(([C])=>C===M)?"theme":"css"}var z5=M=>!!M.selector?.ltek_color||!!M.selector?.text&&/(^|_|\.)color$/.test(M.name),U0=M=>/px|%/.test(M?.unit_of_measurement||"");function Q0(M){let C=M.selector||{};return!!(C.boolean||C.select&&!C.select.custom_value||C.number||z5(M)||C.text&&!C.text.multiple)}var W5=M=>/^#[0-9a-fA-F]{6}$/.test(M||"")?M:null;function I5({data:M,schema:C,onChange:H,label:e,helper:L,haForm:i,auto:a,whenData:s,isSet:l,action:A}){let c=[],p=[],x=()=>{if(!p.length)return;let h=p;c.push(i(Object.fromEntries(h.map(b=>[b.name,M[b.name]])),h,b=>H({...M,...b}))),p=[]};for(let h of C){if(typeof h.when=="function"&&!h.when(s?{...s,...M}:M))continue;if(h.kind==="action"){x(),A&&c.push(A(h));continue}if(!Q0(h)){p.push(h);continue}x();let b=T=>H({...M,[h.name]:T}),k=!!h.selector?.number&&h.default===void 0;c.push(l?.(h)&&!k?o`<div class="fwrap" data-name=${h.name}>${N5(h,M[h.name],b,e(h),L(h),a?.(h))}<button type="button" class="fdefault" title="Back to the default value"
          @click=${()=>b(void 0)}><ha-icon icon="mdi:restore"></ha-icon>Reset to default</button></div>`:N5(h,M[h.name],b,e(h),L(h),a?.(h)))}return x(),c}function N5(M,C,H,e,L,i){let a=M.selector||{},s=`f-${M.name.replace(/\W/g,"_")}`,l=L?o`<div class="fhelp">${L}</div>`:u;if(a.boolean){let A=M.invert?C===!1:!!C;return o`<div class="fld"><label class="fchk"><input type="checkbox" .checked=${A} @change=${c=>H(M.invert?!c.target.checked:c.target.checked)} />${e}</label>${l}</div>`}if(a.select&&!a.select.multiple){let A=(a.select.options||[]).map(p=>typeof p=="string"?{value:p,label:p}:p),c=C==null?"":String(C);return o`<div class="fld"><div class="frow"><label for=${s}>${e}</label>
      <select id=${s} class="sel" @change=${p=>H(p.target.value===""?void 0:p.target.value)}>
        ${A.some(p=>String(p.value)===c)?u:o`<option value="" ?selected=${c===""}>—</option>`}
        ${A.map(p=>o`<option value=${p.value} ?selected=${String(p.value)===c}>${p.label}</option>`)}
      </select></div>${l}</div>`}if(a.select&&a.select.multiple){let A=(a.select.options||[]).map(x=>typeof x=="string"?{value:x,label:x}:x),c=Array.isArray(C)?C:[],p=(x,h)=>{let b=A.map(k=>k.value).filter(k=>k===x?h:c.includes(k));H(b.length?b:void 0)};return o`<div class="fld"><div class="flab">${e}</div><div class="fmulti">
      ${A.map(x=>o`<label class="fchk"><input type="checkbox" .checked=${c.includes(x.value)} @change=${h=>p(x.value,h.target.checked)} />${x.label}</label>`)}
    </div>${l}</div>`}if(a.number){let A=a.number,c=A.unit_of_measurement||"";if(A.mode==="slider"||U0(A)){let p=A.min??0,x=A.max??100,h=A.step??1,b=C??M.default,k=parseFloat(i),T=b??(Number.isFinite(k)?Math.max(p,Math.min(x,k)):p),F=B=>B==null||B===""?"Auto":`${B}${c}`;return o`<div class="fld"><div class="frow nowrap"><label for=${s}>${e}</label>
        <input id=${s} type="range" class="frange" min=${p} max=${x} step=${h} .value=${String(T)}
          @input=${B=>{let g=B.target.parentElement.querySelector(".fval");g&&(g.textContent=F(B.target.value))}}
          @change=${B=>H(Number(B.target.value))} />
        <span class="fval">${F(b)}</span>
        ${C!=null&&M.default===void 0?o`<button class="freset" title="Back to Auto" @click=${()=>H(void 0)}>×</button>`:u}
      </div>${i&&b==null?o`<div class="fauto">Auto: ${i}</div>`:u}${l}</div>`}return o`<div class="fld"><div class="frow"><label for=${s}>${e}</label>
      <input id=${s} type="number" class="ftext num" min=${A.min??u} max=${A.max??u} step=${A.step??"any"} .value=${C??""}
        @change=${p=>H(p.target.value===""?void 0:Number(p.target.value))} />${c?o`<span class="funit">${c}</span>`:u}
    </div>${l}</div>`}return z5(M)?j0(s,C,H,e,l,/background|(^|_)bg(_|$)/i.test(`${M.name} ${e}`)):o`<div class="fld"><div class="frow"><label for=${s}>${e}</label>
    <input id=${s} type=${a.text?.type||"text"} class="ftext" .value=${C??""} @change=${A=>H(A.target.value===""?void 0:A.target.value)} />
  </div>${l}</div>`}function j0(M,C,H,e,L,i=!1){let a=G0(C),s=C==null?"":String(C),l=A=>H(A==="default"?void 0:A==="transparent"?"transparent":A==="theme"?N1.some(([c])=>c===s)?s:N1[0][0]:A==="custom"?W5(s)||"#4fc3f7":s||"#4fc3f7");return o`<div class="fld"><div class="frow"><label for=${M}>${e}</label>
    <span class="fcolor">
      <select id=${M} class="sel mode" @change=${A=>l(A.target.value)}>
        ${[["default","Not set"],...i||a==="transparent"?[["transparent","Transparent"]]:[],["theme","Theme color"],["custom","Custom"],["css","CSS"]].map(([A,c])=>o`<option value=${A} ?selected=${A===a}>${c}</option>`)}
      </select>
      ${a==="theme"?o`<select class="sel" aria-label="Theme color" @change=${A=>H(A.target.value)}>${N1.map(([A,c])=>o`<option value=${A} ?selected=${A===s}>${c}</option>`)}</select>`:a==="custom"?o`<input type="color" class="fswatch" aria-label="Color" .value=${W5(s)||"#4fc3f7"} @change=${A=>H(A.target.value)} />`:a==="css"?o`<input type="text" class="ftext" aria-label="CSS color" .value=${s} @change=${A=>H(A.target.value||void 0)} />`:u}
      ${a!=="default"&&a!=="transparent"?o`<span class="fdot" style="background:${s}"></span>`:u}
    </span>
  </div>${L}</div>`}var G5=D`
  .fld { padding: var(--ltek-sp-1, 4px) 0; }
  .fwrap { position: relative; }
  .fdefault { display: inline-flex; align-items: center; gap: 4px; margin: 0 0 4px; padding: 2px 8px; border: 0; border-radius: 999px; cursor: pointer;
    background: transparent; color: var(--ltek-c-accent, var(--primary-color)); font: inherit; font-size: var(--ltek-fs-small, 12px); }
  .fdefault ha-icon { --mdc-icon-size: 14px; }
  .fdefault:hover { background: color-mix(in srgb, var(--ltek-c-accent, var(--primary-color)) 12%, transparent); }
  .fact-btn { display: flex; align-items: center; gap: var(--ltek-sp-3, 8px); flex-wrap: wrap; padding: var(--ltek-sp-1, 4px) 0 var(--ltek-sp-2, 6px); }
  .fact-btn button { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 999px; cursor: pointer; font: inherit; font-size: var(--ltek-fs-small, 13px);
    border: 1px solid var(--ltek-c-accent, var(--primary-color)); background: transparent; color: var(--ltek-c-accent, var(--primary-color)); }
  .fact-btn button ha-icon { --mdc-icon-size: 16px; }
  .fact-btn button:disabled { opacity: 0.45; cursor: default; border-color: var(--ltek-c-muted, var(--divider-color)); color: var(--ltek-c-muted, var(--secondary-text-color)); }
  .fact-btn button:not(:disabled):hover { background: color-mix(in srgb, var(--ltek-c-accent, var(--primary-color)) 12%, transparent); }
  .fact-btn button:focus-visible { outline: 2px solid var(--ltek-c-accent, var(--primary-color)); outline-offset: 2px; }
  .fact-btn .fhelp { flex: 1 1 200px; margin: 0; }
  .fdefault:focus-visible { outline: 2px solid var(--ltek-c-accent, var(--primary-color)); outline-offset: 1px; }
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
`;var U5=globalThis.__wsfcHost?.["src/card/lazy.js"];if(!U5)throw new Error("wsfc-editor.js: the card did not provide src/card/lazy.js; update every file of the card together");var{lazyLib:Q5}=U5;var z1,q0=async()=>z1||(z1=await Q5("wsfc-yaml.js")),K0=`
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
`,Y0=M=>z1.dump(M,{lineWidth:-1,noRefs:!0});function X0(M,C){let H;try{H=z1.load(String(M||""))}catch(e){throw new Error(`Not valid YAML or JSON: ${e.reason||e.message}`)}if(!H||typeof H!="object"||Array.isArray(H))throw new Error("Expected the card's settings (a YAML mapping).");if(H.type&&C&&H.type!==C)throw new Error(`This is a ${H.type} config, not ${C}.`);if(!H.entity)throw new Error("Missing entity: the weather entity (e.g. weather.openweathermap).");return{...H,type:C||H.type}}async function d2(M){try{await q0()}catch(C){alert(String(C?.message||C));return}return J0(M)}function J0({mode:M,config:C,cardType:H,onImport:e}){let L=document.createElement("dialog");L.className="wsfc-io";let i=document.createElement("style");i.textContent=K0;let a=M==="export";L.innerHTML=`<div class="in">
    <h2>${a?"Export settings":"Import settings"}</h2>
    <p>${a?"The whole card's settings as YAML. Copy them to keep a backup or to use them on another dashboard.":"Paste settings exported from this card (YAML or JSON). They replace the current settings in the editor; press Save in Home Assistant to keep them."}</p>
    <textarea spellcheck="false" aria-label="${a?"Exported settings":"Settings to import"}"></textarea>
    <div class="err" role="alert"></div>
    <div class="bar">
      ${a?'<button class="copy">Copy to clipboard</button><button class="dl">Download file</button>':'<button class="paste">Paste from clipboard</button>'}
      <span class="grow"></span>
      <button class="close">${a?"Close":"Cancel"}</button>
      ${a?"":'<button class="pri apply">Import</button>'}
    </div>
  </div>`,L.prepend(i);let s=L.querySelector("textarea"),l=L.querySelector(".err");a&&(s.value=Y0(C));let A=()=>{L.close(),L.remove()};L.querySelector(".close").addEventListener("click",A),L.addEventListener("cancel",c=>{c.preventDefault(),A()}),L.addEventListener("click",c=>{c.target===L&&A()}),L.querySelector(".copy")?.addEventListener("click",async c=>{let p=c.currentTarget;s.focus(),s.select();let x=!1;try{x=document.execCommand("copy")}catch{x=!1}if(!x)try{await navigator.clipboard.writeText(s.value),x=!0}catch{x=!1}p.textContent=x?"Copied \u2713":"Press Ctrl/Cmd+C"}),L.querySelector(".dl")?.addEventListener("click",()=>{let c=document.createElement("a");c.href=URL.createObjectURL(new Blob([s.value],{type:"text/yaml"})),c.download="weather-station-flex-card.yaml",c.click(),setTimeout(()=>URL.revokeObjectURL(c.href),1e3)}),L.querySelector(".paste")?.addEventListener("click",async c=>{try{s.value=await navigator.clipboard.readText(),l.textContent=""}catch{c.currentTarget.textContent="Paste with Ctrl/Cmd+V",s.focus()}}),L.querySelector(".apply")?.addEventListener("click",()=>{try{let c=X0(s.value,H);e?.(c),A()}catch(c){l.textContent=c.message}}),document.body.appendChild(L);try{L.showModal()}catch{L.setAttribute("open","")}return a?(s.focus(),s.select()):s.focus(),L}var j5=globalThis.__wsfcHost?.["src/card/unsaved.js"];if(!j5)throw new Error("wsfc-editor.js: the card did not provide src/card/unsaved.js; update every file of the card together");var{isLive:s2,isUnsaved:C6,setLive:p2,setUnsaved:I1}=j5;var q5=globalThis.__wsfcHost?.["src/card/detected.js"];if(!q5)throw new Error("wsfc-editor.js: the card did not provide src/card/detected.js; update every file of the card together");var{detected:K5,setDetected:V6}=q5;var Y5=globalThis.__wsfcHost?.["src/card/animation-speed.js"];if(!Y5)throw new Error("wsfc-editor.js: the card did not provide src/card/animation-speed.js; update every file of the card together");var{ANIM_SPEEDS:X5,LOW_POWER_VARS:J5,SPEED_MAX:e6,SPEED_MIN:r6,animSpeedVars:C3}=Y5;var H3=globalThis.__wsfcHost?.["src/card/weather-station-flex-card.js"];if(!H3)throw new Error("wsfc-editor.js: the card did not provide src/card/weather-station-flex-card.js; update every file of the card together");var{baseSizes:M6,canCollapseType:V3,contrastVars:i6,panelStyleVars:o6,tileFx:a6}=H3;var L3=globalThis.__wsfcHost?.["src/card/icons.js"];if(!L3)throw new Error("wsfc-editor.js: the card did not provide src/card/icons.js; update every file of the card together");var{OPEN_ICONS_FULL:e3,OPEN_ICONS_SMALL:r3,openIcon:A6}=L3;var t3=globalThis.__wsfcHost?.["src/card/compact.js"];if(!t3)throw new Error("wsfc-editor.js: the card did not provide src/card/compact.js; update every file of the card together");var{COMPACT_TYPES:M3,NEEDS_PANEL:d6,compactRow:s6,compactStyles:p6,compactTiles:m6}=t3;var i3=globalThis.__wsfcHost?.["src/card/resolve.js"];if(!i3)throw new Error("wsfc-editor.js: the card did not provide src/card/resolve.js; update every file of the card together");var{deviceEntities:m2,entityValue:G1,findHealthEntity:v6,findStationEntity:u6,healthDevices:x6,integrationOf:d1,metricChain:Z6,metricSensor:o3,metricValue:f6,pick:h6,sourceDefault:a3,stationDeviceEntities:n3,stationDevices:S6,stationStatus:g6}=i3;var A3="__other__",f1=class extends N{_name(C){let H=this.hass?.states?.[C],e=H?.attributes?.friendly_name||C,L=H&&!["unknown","unavailable"].includes(H.state)&&!C.startsWith("weather.")?` \xB7 ${H.state}${H.attributes?.unit_of_measurement?` ${H.attributes.unit_of_measurement}`:""}`:"";return`${e}${L}`}_emit(C){this._other=!1,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:C},bubbles:!1}))}render(){let C=this.value||"",H=[...new Set([...this.candidates||[],...C?[C]:[]])].filter(L=>L!==this.defaultEntity||C===L),e=this.defaultLabel||(this.defaultEntity?`Default \u2014 ${this._name(this.defaultEntity)}`:"Default \u2014 none found");return o`
      <div class="row">
        <select class=${C?"":"def"} aria-label=${this.label||"Entity"} @change=${L=>{let i=L.target.value;if(i===A3){this._other=!0,L.target.value=C;return}this._emit(i)}}>
          <option value="" ?selected=${!C}>${e}</option>
          ${H.map(L=>o`<option value=${L} ?selected=${L===C}>${this._name(L)}</option>`)}
          <option value=${A3}>Other entity…</option>
        </select>
        ${C?o`<button type="button" title="Use the default sensor" @click=${()=>this._emit("")}>Default</button>`:u}
      </div>
      ${this._other?o`<div class="picker"><ha-form .hass=${this.hass} .data=${{e:C}} .schema=${[{name:"e",selector:{entity:this.domain?{domain:this.domain}:{}}}]}
            .computeLabel=${()=>"Choose an entity"} @value-changed=${L=>{L.stopPropagation();let i=L.detail.value?.e;i&&this._emit(i)}}></ha-form></div>`:u}
    `}};R(f1,"properties",{hass:{attribute:!1},value:{},defaultEntity:{attribute:!1},defaultLabel:{attribute:!1},candidates:{attribute:!1},domain:{},label:{},_other:{state:!0}}),R(f1,"styles",D`
    :host { display: block; min-width: 0; }
    .row { display: flex; gap: 6px; align-items: center; min-width: 0; }
    select { flex: 1; min-width: 0; font: inherit; font-size: 12px; padding: 5px 8px; border-radius: 6px; border: 1px solid var(--ltek-c-border, #444); background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color); }
    select.def { color: var(--secondary-text-color); }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; padding: 2px 4px; font: inherit; font-size: 11px; white-space: nowrap; }
    button:hover { color: var(--primary-color); }
    .picker { margin-top: 4px; }
  `);customElements.get("wsfc-entity-select")||customElements.define("wsfc-entity-select",f1);var C7=[["temperature","Temperature"],["apparent_temperature","Feels like"],["dew_point","Dew point"],["humidity","Humidity"],["pressure","Pressure"],["wind_speed","Wind speed"],["wind_gust_speed","Wind gust"],["wind_bearing","Wind direction"],["uv_index","UV index"],["solar_radiation","Solar radiation"],["illuminance","Illuminance"],["precipitation","Rain rate"],["visibility","Visibility"],["cloud_coverage","Cloud cover"],["ozone","Ozone"]],U1=M=>typeof M=="string"&&M.startsWith("device:"),h1=class extends N{constructor(){super(),this._open=new Set}get _sources(){let C=this.config?.metric_sources||{};return Array.isArray(C.sources)?C.sources.filter(H=>H?.ref).map(H=>({ref:H.ref,overrides:{...H.overrides||{}},disabled:!!H.disabled})):this.config?.entity?[{ref:this.config.entity,overrides:{}}]:[]}_station(C){return{entity:this.config?.entity,metric_sources:{...this.config?.metric_sources||{},sources:C}}}_commit(C){let H=C.filter(A=>A?.ref).map(A=>{let c=Object.fromEntries(Object.entries(A.overrides||{}).filter(([,p])=>p));return{ref:A.ref,...Object.keys(c).length?{overrides:c}:{},...A.disabled?{disabled:!0}:{}}}),e={...this.config?.metric_sources||{}};delete e.primary,delete e.fallback,delete e.custom,delete e.device_map,H.length?e.sources=H:delete e.sources;let L=A=>(this.hass?.states?.[A]?.attributes?.supported_features&7)!==0,i=A=>A.map(c=>c.ref).filter(c=>typeof c=="string"&&c.startsWith("weather.")),a=i(H.filter(A=>!A.disabled)),s=i(H),l=a.find(L)||a[0]||s.find(L)||s[0]||this.config?.entity;this.dispatchEvent(new CustomEvent("sources-changed",{detail:{entity:l,metric_sources:Object.keys(e).length?e:void 0}}))}_info(C){let H=this.hass;if(U1(C)){let L=H?.devices?.[C.slice(7)],i=m2(H,C.slice(7))[0];return{icon:"mdi:access-point",name:L?.name_by_user||L?.name||C.slice(7),kind:"Station device",sub:[L?.manufacturer,L?.model].filter(Boolean).join(" "),integ:d1(H,i)}}let e=H?.states?.[C];return C.startsWith("weather.")?{icon:"mdi:weather-partly-cloudy",name:e?.attributes?.friendly_name||C,kind:"Weather entity",sub:"forecast + condition",integ:d1(H,C)}:{icon:"mdi:eye-outline",name:e?.attributes?.friendly_name||C,kind:"Sensor",sub:C,integ:d1(H,C)}}_candidates(C,H){let e=this.hass;if(!U1(C))return[];let L=H&&e.states[H]?.attributes?.unit_of_measurement,i=C.slice(7),a=e.devices?.[i]?.config_entries||[];return[...new Set([i,...Object.entries(e.devices||{}).filter(([,l])=>(l.config_entries||[]).some(A=>a.includes(A))).map(([l])=>l)])].flatMap(l=>m2(e,l)).filter(l=>l.startsWith("sensor.")&&e.states[l]?.attributes?.unit_of_measurement&&(!L||e.states[l].attributes.unit_of_measurement===L)).sort()}render(){if(!this.hass)return u;let C=this._sources,H=this._station(C),e=C.some(L=>L.ref.startsWith("weather.")&&!L.disabled);return o`
      <div class="list">
        ${C.map((L,i)=>this._source(L,i,C,H))}
      </div>
      ${e?u:o`<p class="warn">Add a weather entity (e.g. OpenWeatherMap) — it supplies the forecast and condition.</p>`}
      ${this._adding?this._addForm(C):o`<button class="add" type="button" @click=${()=>this._adding=!0}><ha-icon icon="mdi:plus"></ha-icon>Add source</button>`}
    `}_source(C,H,e,L){let i=this._info(C.ref),a=this._open.has(C.ref),s=C7.map(([p,x])=>{let h=a3(L,this.hass,C.ref,p),b=C.ref.startsWith("weather.")?this.hass.states[C.ref]?.attributes?.[p]!=null:!!h;return{k:p,label:x,def:C.ref.startsWith("weather.")?b?C.ref:null:h,ov:C.overrides[p]||"",has:b||!!C.overrides[p]}}),l=s.filter(p=>p.has).length,A=p=>{let x=e.map(h=>({...h,overrides:{...h.overrides}}));p(x),this._commit(x)},c=()=>{let p=new Set(this._open);p.has(C.ref)?p.delete(C.ref):p.add(C.ref),this._open=p};return o`<div class="src ${a?"open":""} ${C.disabled?"off":""}">
      <div class="hd" @click=${c} role="button" tabindex="0" aria-expanded=${String(a)} @keydown=${p=>(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),c())}>
        <span class="rank">${H+1}</span>
        <ha-icon class="lead" icon=${i.icon}></ha-icon>
        <div class="tt">
          <div class="nm">${i.name}${C.disabled?o` <span class="tag">hidden</span>`:u}</div>
          <div class="sb"><span class="pill">${i.kind}</span>${i.integ?o`<span class="pill integ">${i.integ}</span>`:u}<span>${l} value${l===1?"":"s"}</span></div>
        </div>
        <span class="acts" @click=${p=>p.stopPropagation()}>
          <button class="ib" title="Higher priority" ?disabled=${H===0} @click=${()=>A(p=>[p[H-1],p[H]]=[p[H],p[H-1]])}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
          <button class="ib" title="Lower priority" ?disabled=${H===e.length-1} @click=${()=>A(p=>[p[H+1],p[H]]=[p[H],p[H+1]])}><ha-icon icon="mdi:arrow-down"></ha-icon></button>
          <button class="ib" title=${C.disabled?"Use this source":"Skip this source"} @click=${()=>A(p=>p[H].disabled=!p[H].disabled)}><ha-icon icon=${C.disabled?"mdi:eye-off":"mdi:eye"}></ha-icon></button>
          <button class="ib del" title="Remove source" @click=${()=>A(p=>p.splice(H,1))}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
        </span>
        <ha-icon class="chev" icon=${a?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${a?o`<div class="bd">
            ${i.sub?o`<div class="meta">${i.sub}</div>`:u}
            <div class="tbl">
              ${s.filter(p=>p.has||U1(C.ref)).map(p=>{let x=p.ov||p.def,h=x&&!x.startsWith("weather.")?G1(this.hass,x):null,b=x?.startsWith("weather.")?this.hass.states[x]?.attributes?.[p.k]:null;return o`<span class="k">${p.label}</span>
                  <wsfc-entity-select .hass=${this.hass} .value=${p.ov} .defaultEntity=${p.def}
                    .defaultLabel=${C.ref.startsWith("weather.")&&!p.ov?p.def?"Default \u2014 attribute":"Default \u2014 none":void 0}
                    .candidates=${this._candidates(C.ref,p.def)} label=${p.label}
                    @value-changed=${k=>A(T=>T[H].overrides[p.k]=k.detail.value||void 0)}></wsfc-entity-select>
                  <span class="v">${h?`${h.value} ${h.unit}`:b!=null?String(b):""}</span>`})}
            </div>
            ${C.ref.startsWith("weather.")?o`<p class="hint">Only values this entity has are listed. Forecasts always come from the highest weather entity.</p>`:u}
          </div>`:u}
    </div>`}_addForm(C){let H=e=>{if(!e||C.some(a=>a.ref===e)){this._adding=!1;return}this._adding=!1;let L=C.slice(),i=L.findIndex(a=>a.ref.startsWith("weather."));U1(e)&&i>=0?L.splice(i,0,{ref:e,overrides:{}}):L.push({ref:e,overrides:{}}),this._commit(L)};return o`<div class="addbox">
      <ha-form .hass=${this.hass} .data=${{d:""}} .schema=${[{name:"d",selector:{device:{}}}]} .computeLabel=${()=>"Station device (e.g. your Ecowitt gateway or sensor)"}
        @value-changed=${e=>{e.stopPropagation(),H(e.detail.value?.d&&`device:${e.detail.value.d}`)}}></ha-form>
      <ha-form .hass=${this.hass} .data=${{e:""}} .schema=${[{name:"e",selector:{entity:{}}}]} .computeLabel=${()=>"\u2026or a weather entity or single sensor"}
        @value-changed=${e=>{e.stopPropagation(),H(e.detail.value?.e)}}></ha-form>
      <button class="add ghost" type="button" @click=${()=>this._adding=!1}>Cancel</button>
    </div>`}};R(h1,"properties",{hass:{attribute:!1},config:{attribute:!1},_open:{state:!0},_adding:{state:!0}}),R(h1,"styles",D`
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
  `);customElements.get("wsfc-sources-editor")||customElements.define("wsfc-sources-editor",h1);var l3=globalThis.__wsfcHost?.["src/panels/graph.js"];if(!l3)throw new Error("wsfc-editor.js: the card did not provide src/panels/graph.js; update every file of the card together");var{PRESET_SERIES:c2,WsfcGraph:B6}=l3;var d3=globalThis.__wsfcHost?.["src/panels/statistics.js"];if(!d3)throw new Error("wsfc-editor.js: the card did not provide src/panels/statistics.js; update every file of the card together");var{SGCC_PRESETS:s3,STAT_PRESETS:p3,statisticsCard:$6,statisticsEngine:m3}=d3;var s1=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],H7=M=>/^#[0-9a-f]{6}$/i.test(M||"")?M:/^#[0-9a-f]{3}$/i.test(M||"")?"#"+M.slice(1).split("").map(C=>C+C).join(""):"#888888";function V7(M){if(M.type==="statistics"){let C=M.preset||"temps",H=s3[C]||{};return((Array.isArray(M.metrics)&&M.metrics.length?M.metrics:H.metrics||p3[C]?.metrics)||[]).map((L,i)=>({metric:L,color:M.colors?.[L],defColor:H.series?.[L]?.color||z[L]?.color||s1[i%s1.length],entity:M.entity_overrides?.[L]||"",key:"map"}))}return Array.isArray(M.series)&&M.series.length?M.series.map((C,H)=>({metric:C.metric,idx:H,color:C.color,defColor:z[C.metric]?.color||s1[H%s1.length],entity:C.entity||"",label:C.label,key:"list"})):(c2[M.type]||c2.graph).map((C,H)=>({metric:C.metric,color:M.colors?.[C.metric],defColor:C.color||z[C.metric]?.color||s1[H%s1.length],entity:M.entities?.[C.metric]||"",key:"map"}))}var S1=class extends N{_set(C,H,e){let L=n1(this.panel);if(C.key==="list")L.series[C.idx]=q({...L.series[C.idx],[H]:e||void 0});else{let i=H==="color"?"colors":L.type==="statistics"?"entity_overrides":"entities";L[i]=q({...L[i]||{},[C.metric]:e||void 0}),Object.keys(L[i]).length||delete L[i]}this.dispatchEvent(new CustomEvent("panel-changed",{detail:{panel:L}}))}_candidates(C){let H=C&&this.hass.states[C]?.attributes?.unit_of_measurement;return n3(this.station,this.hass).filter(e=>e.startsWith("sensor.")&&(!H||this.hass.states[e]?.attributes?.unit_of_measurement===H))}render(){if(!this.hass||!this.panel)return u;let C=V7(this.panel),H=this.panel.type!=="statistics"||m3(this.panel)==="sgcc";return o`<div class="tbl">
      <span class="h">Series</span><span class="h">Color</span><span class="h">Sensor</span>
      ${C.map(e=>{let L=E1(e.metric,this.station,this.hass),i=e.color||e.defColor;return o`<span class="k">${e.label||z[e.metric]?.label||e.metric||"Series"}</span>
          <span class="c">
            ${H?o`<input type="color" .value=${H7(i)} title="Line color" aria-label="Line color" @change=${a=>this._set(e,"color",a.target.value)} />
                ${e.color?o`<button type="button" title="Default color" @click=${()=>this._set(e,"color","")}>↺</button>`:u}`:o`<span class="na" title="Home Assistant's Statistics graph picks its own colors">auto</span>`}
          </span>
          <wsfc-entity-select .hass=${this.hass} .value=${e.entity} .defaultEntity=${L} .candidates=${this._candidates(L)} label=${`${e.metric} sensor`}
            @value-changed=${a=>this._set(e,"entity",a.detail.value)}></wsfc-entity-select>`})}
    </div>`}};R(S1,"properties",{hass:{attribute:!1},panel:{attribute:!1},station:{attribute:!1}}),R(S1,"styles",D`
    .tbl { display: grid; grid-template-columns: minmax(80px, auto) auto minmax(0, 1fr); gap: 6px 10px; align-items: center; font-size: 12px; }
    .h { font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-muted, #888); }
    .k { color: var(--ltek-c-label, #ccc); }
    .c { display: flex; align-items: center; gap: 2px; }
    input[type="color"] { width: 30px; height: 24px; padding: 0; border: 1px solid var(--ltek-c-border, #444); border-radius: 6px; background: transparent; cursor: pointer; }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; font-size: 14px; padding: 0 2px; }
    .na { font-size: 11px; color: var(--ltek-c-muted, #888); }
  `);customElements.get("wsfc-series-editor")||customElements.define("wsfc-series-editor",S1);var Q1=[["sunny","Sunny"],["clear-night","Clear night"],["partlycloudy","Partly cloudy"],["cloudy","Cloudy"],["fog","Fog"],["rainy","Rainy"],["pouring","Pouring"],["lightning","Lightning"],["lightning-rainy","Lightning and rain"],["hail","Hail"],["snowy","Snowy"],["snowy-rainy","Sleet (snow and rain)"],["windy","Windy"],["windy-variant","Windy with clouds"],["exceptional","Exceptional"]],g1=class extends N{render(){let C=this.config||{},H=this.hass,e=H?.states?.[C.entity],L=this.condition||e?.state||"partlycloudy",i=this.time==="night"||this.time!=="day"&&L==="clear-night",a=e?.attributes||{},s=[C.anim_low_power?J5:"",...C3(C)].filter(Boolean).join(";"),l=(Q1.find(([A])=>A===L)||[,L])[1];return o`<div class="box" style=${s}>
      <wsfc-animation-provider .hass=${H} .wsfcNight=${i}
        .weatherEntity=${{...e||{entity_id:C.entity,attributes:{}},state:L}}
        .config=${{entity:C.entity,show_condition_effects:C.background_effects??!0,show_moon_phase:C.background_moon_phase??!0,fog_density:C.fog_density,wind_density:C.wind_density,lightning_interval:C.lightning_interval,lightning_intensity:C.lightning_intensity,lightning_bolts:C.lightning_bolts}}
        .currentForecast=${{wind_speed:a.wind_speed,wind_bearing:a.wind_bearing}}></wsfc-animation-provider>
      <span class="tag">${l} · ${i?"Night":"Day"}</span>
    </div>`}};R(g1,"properties",{hass:{attribute:!1},config:{attribute:!1},condition:{},time:{}}),R(g1,"styles",D`
    :host { display: block; }
    .box { position: relative; height: 200px; border-radius: var(--ltek-radius, 12px); overflow: hidden;
      background: var(--ha-card-background, var(--card-background-color, #1c1c1c)); border: 1px solid var(--divider-color, rgba(127,127,127,.25)); }
    .tag { position: absolute; left: 10px; bottom: 8px; z-index: 2; font-size: var(--ltek-fs-small, 12px); font-weight: 600; padding: 3px 9px; border-radius: 999px;
      background: rgba(0, 0, 0, 0.45); color: #fff; }
  `);customElements.get("wsfc-bg-preview")||customElements.define("wsfc-bg-preview",g1);var c3=globalThis.__wsfcHost?.["src/card/condition.js"];if(!c3)throw new Error("wsfc-editor.js: the card did not provide src/card/condition.js; update every file of the card together");var{clearSkyRadiation:X6,conditionSummary:v3,deriveHass:J6,ensureSolarScale:C8,lightDetails:H8,resetSolarScale:V8,skyClearness:L8,solarScale:e8,stationCondition:r8,sunElevation:t8}=c3;var L7=["temperature","apparent_temperature","dew_point","humidity","pressure","wind_speed","wind_gust_speed","wind_bearing","uv_index","solar_radiation","illuminance","precipitation"],e7={wind_bearing:"Wind direction",precipitation:"Rain rate"},K1=[{name:"condition_source",label:"Current condition from",selector:{select:{options:[{value:"entity",label:"The weather entity"},{value:"station",label:"Your station's readings (the entity fills in the rest)"}]}},default:"entity",helper:"With the station: rain rate, solar radiation (or light), humidity, wind, temperature and the lightning sensor decide sunny, partly cloudy, cloudy, rain, snow, fog, windy and lightning. The hero, bulletin and background follow it. At night, and when the sun is low, the entity's view of the sky is used."},{name:"station_solar_scale",label:"Clear-sky calibration",when:M=>M.condition_source==="station",selector:{number:{min:20,max:160,step:5,mode:"slider",unit_of_measurement:"%"}},helper:"Auto (not set): learned from the sensor's last 10 days against the clear-sky model, so it's judged against its own clear days. Set it to force a value: lower if clear days read as cloudy, higher if cloudy days read as sunny."},{name:"station_windy_mph",label:"Windy from",when:M=>M.condition_source==="station",selector:{number:{min:10,max:60,step:1,mode:"slider",unit_of_measurement:"mph"}},default:25},{name:"station_pouring_inh",label:"Pouring from",when:M=>M.condition_source==="station",selector:{number:{min:.1,max:1,step:.05,mode:"slider",unit_of_measurement:"in/h"}},default:.3}],_1=[["Background",[{name:"background",selector:{select:{options:[{value:"none",label:"None (theme)"},{value:"animated",label:"Animated weather \u2014 the hero's animation behind the whole card"},{value:"image",label:"Image \u2014 upload one or use a URL"}]}},helper:"With an animated or image background, panels become see-through and the hero stops drawing its own."}]],["Animation",[{name:"background_effects",label:"Animation effects",when:M=>M.background==="animated",selector:{select:{multiple:!0,options:[["rain","Rain"],["snow","Snow"],["lightning","Lightning"],["sky","Sky"],["moon","Moon"],["sun","Sun"],["cloud","Clouds"],["fog","Fog"],["hail","Hail"],["wind","Wind gusts"],["exceptional","Unusual weather glow"]].map(([M,C])=>({value:M,label:C}))}},default:["rain","snow","lightning","sky","moon","sun","cloud","fog","hail","wind","exceptional"],helper:"Which effects the weather animation draws. At night it shows the dark sky and the moon instead of the sun. Rain, snow and storms get an overcast sky and cloud deck (Sky, Clouds)."},{name:"background_moon_phase",label:"Show moon phase",when:M=>M.background==="animated",selector:{boolean:{}},default:!0,helper:"Shade the night-time moon to the current lunar phase (off: a full moon)."},{name:"anim_low_power",label:"Low-power animation",when:M=>M.background!=="image",selector:{boolean:{}},default:!1,helper:"For tablets and other low-powered screens: no panel blur while the background animates, each cloud drawn once on its own, and simpler cloud edges. Smoother drift; clouds look a little softer."},{name:"anim_speed",label:"Overall speed",when:M=>M.background!=="image",selector:{number:{min:10,max:150,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Every animation at once (100% = normal, 50% = half as fast), for the card background and the hero's own animation. Per-effect speeds below multiply it."},...X5.map(([M,,C])=>({name:M,label:C,sub:"Per-effect speeds",subIcon:"mdi:speedometer",when:H=>H.background!=="image",selector:{number:{min:10,max:150,step:5,mode:"slider",unit_of_measurement:"%"}},default:100})),{name:"fog_density",label:"Fog density",when:M=>M.background==="animated"&&(M.background_effects??["fog"]).includes("fog"),selector:{number:{min:30,max:200,step:10,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"How thick the fog is: the number of mist banks and how much they hide."},{name:"lightning_interval",label:"Time between strikes",when:M=>M.background==="animated"&&(M.background_effects??["lightning"]).includes("lightning"),selector:{number:{min:2,max:90,step:1,mode:"slider",unit_of_measurement:"s"}},default:12,helper:"In storms: roughly how often the clouds light up (each strike comes at its own irregular time around this)."},{name:"lightning_bolts",label:"Lightning bolts",when:M=>M.background==="animated"&&(M.background_effects??["lightning"]).includes("lightning"),selector:{number:{min:0,max:100,step:5,mode:"slider",unit_of_measurement:"%"}},default:20,helper:"How many of the flashes drop a visible bolt from the cloud (the others light the clouds from inside)."},{name:"lightning_intensity",label:"Lightning intensity",when:M=>M.background==="animated"&&(M.background_effects??["lightning"]).includes("lightning"),selector:{number:{min:10,max:200,step:10,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"How brightly the clouds and the sky light up."},{name:"wind_density",label:"Wind density",when:M=>M.background==="animated"&&(M.background_effects??["wind"]).includes("wind"),selector:{number:{min:30,max:200,step:10,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"How many wisps of air blow across in windy weather."}]],["Image",[{name:"background_image",when:M=>M.background==="image",selector:{media:{accept:["image/*"],image_upload:!0}},helper:"Image background: upload a PNG, JPG, WEBP\u2026 or pick one from your media."},{name:"background_image_url",when:M=>M.background==="image",selector:{text:{type:"url"}},helper:"Image background: or an image URL (wins over the upload), e.g. /local/images/sky.jpg."},{name:"background_image_fit",when:M=>M.background==="image",selector:{select:{options:[{value:"cover",label:"Fill (crop to fit)"},{value:"contain",label:"Fit (whole image)"},{value:"tile",label:"Tile"}]}},default:"cover"},{name:"background_dim",when:M=>M.background==="image",selector:{number:{min:0,max:.9,step:.05,mode:"slider"}},default:.25,helper:"Image background: darken it so text stays readable (0 = off)."}]]],O1=[["Card",[{name:"title",selector:{text:{}},helper:"Optional title row above the panels."},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]],["Text & icons",[{name:"text_size",label:"Text size",selector:{number:{min:8,max:32,step:1,mode:"slider",unit_of_measurement:"px"}},default:14,helper:"Base text size for every panel (designed at 14 px): all their text grows or shrinks with it. A panel's own Text size (%) scales this."},{name:"icon_size",label:"Icon size",selector:{number:{min:12,max:64,step:1,mode:"slider",unit_of_measurement:"px"}},default:24,helper:"Base icon size for every panel (designed at 24 px). A panel's own Icon size (%) scales this."},{name:"_reset_sizes",kind:"action",label:"Every panel uses these sizes",helper:"Clears the Text size and Icon size set on single panels."}]],["Panel titles",[{name:"title_size",label:"Title text size",selector:{number:{min:8,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Not set: follows Text size (15 px at the default)."},{name:"title_icon_size",label:"Title icon size",selector:{number:{min:10,max:64,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Not set: follows Icon size (20 px at the default)."},...g5,{name:"_reset_titles",kind:"action",label:"Every panel uses these title colours",helper:"Clears the title colours set on single panels."}]],["Panels",[{name:"text_contrast",label:"Text contrast",selector:{select:{options:[{value:"off",label:"Off"},{value:"auto",label:"Auto \u2014 a soft halo behind text and icons"},{value:"strong",label:"Strong \u2014 an outline around text and icons"}]}},default:"off",helper:"Makes text and icons readable on any background (the animated sky, see-through panels): the halo is dark in a dark theme and light in a light one. Each panel can override it (Default Overrides)."},{name:"_reset_contrast",kind:"action",label:"Every panel uses this setting",helper:"Clears Text contrast set on single panels."},{name:"panel_opacity",selector:{number:{min:0,max:1,step:.05,mode:"slider"}},helper:"With a card background: panel opacity (0 = fully transparent, 1 = solid). Default 0.55."},{name:"panel_blur",selector:{number:{min:0,max:30,step:1,mode:"slider",unit_of_measurement:"px"}},when:M=>!M.anim_low_power,helper:"With a card background: blur behind panels. Default 6 (off with Low-power animation)."},{name:"panel_radius",selector:{number:{min:0,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Auto: your theme's card corner radius (shown above). Move the slider to set your own; \xD7 goes back to Auto."},{name:"panel_shadow",selector:{select:{options:[{value:"none",label:"None"},{value:"soft",label:"Soft"},{value:"medium",label:"Medium"},{value:"strong",label:"Strong"}]}},default:"none"},{name:"panel_border_width",selector:{number:{min:0,max:6,step:.5,mode:"slider",unit_of_measurement:"px"}},helper:"Border (default none)."},{name:"panel_border_color",selector:{text:{}},helper:"Not set: the theme's divider color."},{name:"panel_glow",selector:{boolean:{}},default:!1,helper:"A soft glow around each panel."},{name:"panel_glow_color",when:M=>!!M.panel_glow,selector:{text:{}},helper:"Not set: the border color, else the theme's primary color."},{name:"panel_glow_size",when:M=>!!M.panel_glow,selector:{number:{min:2,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},default:10}]]],Y1=[["Alerts bar",[{name:"alerts_bar",label:"Alerts bar",selector:{boolean:{}},default:!1,helper:"A thin row at the top that appears only while something needs attention: heat or frost (the Frost & heat watch rules), lightning within 10 miles in the last 30 minutes, and weather alerts. Tap one to open its panel."},{name:"alerts_watch",label:"Heat and frost",when:M=>!!M.alerts_bar,selector:{boolean:{}},default:!0},{name:"alerts_lightning",label:"Lightning nearby",when:M=>!!M.alerts_bar,selector:{boolean:{}},default:!0},{name:"alerts_entity",label:"Weather alerts sensor",when:M=>!!M.alerts_bar,selector:{entity:{domain:"sensor"}},helper:"Optional, e.g. the NWS Alerts integration's sensor (its Alerts attribute)."}]]],Z3={_reset_contrast:["text_contrast"],_reset_sizes:["text_scale","icon_scale","icon_scale_all"],_reset_titles:["expanded_icon_color","expanded_text_color"]};function u3(M,C,H,e){return[{name:M,label:C,selector:{select:{options:[...H.map((L,i)=>({value:L,label:`mdi:${L}${i?"":" (default)"}`})),{value:"custom",label:"Custom icon\u2026"}]}},default:H[0],helper:e},{name:`${M}_custom`,label:"Custom icon",when:L=>L[M]==="custom",selector:{icon:{}},helper:"Any Home Assistant icon, e.g. mdi:arrow-expand-down."}]}var X1=[["Screen fit & sizing",[{name:"layout",selector:{select:{options:[{value:"auto",label:"Size to content"},{value:"fullscreen",label:"Full screen (fills the view below the header)"}]}}},{name:"screen_fit",label:"Screen fit",selector:{select:{options:[{value:"none",label:"Off \u2014 panels are their set heights; the page scrolls"},{value:"rows",label:"Share the screen height \u2014 panels grow to fit their content"},{value:"strict",label:"Exact heights \u2014 content scrolls inside its panel"},{value:"scale",label:"Auto-fit \u2014 exact heights, and the contents scale to the screen"}]}},default:"rows",helper:"Share and Exact apply in Full screen. Auto-fit takes the layout and sizes you set as the design for the Screen guide's size (Layout Map \u2192 Screen guide) and scales each panel's contents to every other screen, smaller where they'd still overflow."},{name:"panel_fill",label:"Panels fill their space",selector:{boolean:{}},default:!1,helper:"Each panel with a set height scales its contents up or down to the largest size that fits the panel, between Smallest and Largest content scale. Text size, Icon size and the other size sliders then change the proportions, and the panel still fits. Each panel can turn it on or off (Size and Scaling \u2192 Fill the panel). The hero and Wind fit themselves; maps aren't scaled."},{name:"auto_fit_min",label:"Smallest content scale",when:M=>M.screen_fit==="scale"||!!M.panel_fill,selector:{number:{min:30,max:100,step:5,mode:"slider",unit_of_measurement:"%"}},default:60,helper:"Below this a panel scrolls instead, so text stays readable."},{name:"auto_fit_max",label:"Largest content scale",when:M=>M.screen_fit==="scale"||!!M.panel_fill,selector:{number:{min:100,max:250,step:5,mode:"slider",unit_of_measurement:"%"}},default:150,helper:"On screens bigger than the design."},{name:"panel_overflow",label:"When a panel's content doesn't fit",when:M=>!(M.layout==="fullscreen"&&["strict","scale"].includes(M.screen_fit)),selector:{select:{options:[{value:"grow",label:"Grow \u2014 the panel gets taller (and its row with it)"},{value:"scroll",label:"Scroll \u2014 the panel keeps its height, with a scroll bar inside"}]}},default:"grow",helper:"For panels with a set height (Height above 0); each panel can override this. Scroll locks every panel to its size in any layout; Strict fit does the same in full screen."},{name:"layout_gaps",label:"Gaps between panels",selector:{select:{options:[{value:"close",label:"Close up \u2014 panels move up into empty space"},{value:"keep",label:"Keep \u2014 panels stay where they're placed"}]}},default:"close",helper:"After you move a panel in the Layout Map, or when one is hidden (by its button, or when it has nothing to show)."},{name:"layout_size",selector:{select:{options:[{value:"auto",label:"Automatic (from the card's width)"},{value:"wide",label:"Wide \u2014 desktop layout"},{value:"medium",label:"Medium \u2014 tablet layout"},{value:"narrow",label:"Narrow \u2014 phone layout (stacked)"}]}},helper:"In a Sections view the card is only as wide as its section; widen the section or use a Panel view for the desktop layout."},{name:"row_height",selector:{number:{min:40,max:300,mode:"box",unit_of_measurement:"px"}},helper:"Height of one row unit (default 110)."},{name:"gap",selector:{number:{min:0,max:32,mode:"box",unit_of_measurement:"px"}},helper:"Space between panels (default 12)."}]]],J1=[["Every collapsible panel",[{name:"collapsed_view",label:"Default view when collapsed",selector:{select:{options:[{value:"minimal",label:"Minimal \u2014 the title and a line of info (e.g. 7 strikes today)"},{value:"compact",label:"Compact \u2014 one row of tiles with all the data"}]}},default:"minimal",helper:"For panels with Collapse button on; panels without a tiles view use Minimal. Each panel can override it \u2014 Convert all now clears those overrides."},{name:"collapsed_open",label:"A collapsed panel opens",selector:{select:{options:[{value:"auto",label:"Automatic \u2014 over the other panels in full screen or Auto-fit, else in place"},{value:"inplace",label:"In place \u2014 the panel grows, the others move"},{value:"overlay",label:"Over the other panels \u2014 nothing moves; tap outside or Esc to close"},{value:"popup",label:"As a pop-up"}]}},default:"auto",helper:"Each panel can override this (Collapse \u2192 Opens)."},...u3("open_icon_small","Small pop-over icon",r3,"On a collapsed panel that opens over the others."),...u3("open_icon_full","Full-size icon",e3,"Expand to the whole card, tap-to-open tiles and panels that open as a pop-up."),{name:"collapse_title_tap",label:"Tap the title to collapse / expand",selector:{boolean:{}},default:!0,helper:"For panels with Collapse button on (each panel can override this)."},{name:"show_collapse_hint",label:"Hint under the title while collapsed",selector:{boolean:{}},default:!1,helper:'e.g. "Tap title to show" (off by default: the open button already says it).'},{name:"collapse_hint",label:"Hint text",when:M=>!!M.show_collapse_hint,selector:{text:{}},helper:'Default "Tap title to show".'},{name:"collapsed_info",label:"Info in the header while collapsed",selector:{select:{options:[{value:"summary",label:"The panel's summary (e.g. strikes today, rain today)"},{value:"off",label:"None"}]}},default:"summary"},...h5]]],w1=[{name:"remember",selector:{boolean:{}},default:!0,helper:"Keep which panels were shown or hidden with the panel buttons after a refresh, in each browser. Off: every load starts from the panels' Shown setting (the eye icon)."}],r7=[...K1,...[..._1,...O1,...Y1,...X1,...J1].flatMap(([,M])=>M)].filter(M=>M.kind!=="action"),Y={layout:"auto",panel_bar:!0,remember:!0,screen_fit:"rows",layout_size:"auto",background:"none",panel_opacity:.55,panel_blur:6},q1={entity:"Weather entity",title:"Title",subtitle:"Subtitle",icon:"Icon",layout:"Layout",panel_bar:"Panel buttons",remember:"Remember Panel Button States",station_device:"Weather station device",layout_size:"Layout size",fit_strict:"Strict fit to screen dimensions",row_height:"Row height",gap:"Gap",span:"Width",rows:"Height",display:"Display",in_bar:"Panel button",tile_background:"Panel background",show:"Shown",metric:"Metric",label:"Label",color:"Color",digits:"Decimals",chart:"Sparkline",hours:"Sparkline hours",show_minmax:"Show today's min/max",series:"Series",ranges:"Range buttons",range:"Default range",show_readings:"Show current readings",left_min:"Left axis min",left_max:"Left axis max",right_min:"Right axis min",right_max:"Right axis max","entities.temperature":"Temperature sensor","entities.dew_point":"Dew point sensor","entities.humidity":"Humidity sensor","entities.wind_speed":"Wind speed sensor","entities.wind_gust_speed":"Gust sensor","entities.wind_bearing":"Wind direction sensor",view:"Default view",show_chart:"Show speed/gust chart",rose_bins:"Rose speed bins",radar:"Radar loop",base_map:"Base map",zoom:"Zoom",latitude:"Latitude",longitude:"Longitude",radar_opacity:"Radar opacity",owm_api_key:"OpenWeatherMap API key",owm_layers:"OpenWeatherMap layers",owm_default:"Layer shown first",owm_opacity:"Layer opacity",base_map_url:"Custom tile URL",base_map_attribution:"Custom tile attribution",day_offset:"Day",icon_size:"Icon size",show_moon:"Show moon",show_sun:"Show sun",attribute:"Text attribute",alerts_entity:"Alerts sensor",card:"Card configuration",show_status:"Show station status",show_devices:"Show device names",overlay:"Layer",model:"Forecast model",level:"Altitude",wind_unit:"Wind unit",marker:"Location pin",preset:"Graph",engine:"Graph card",days_to_show:"Days",period:"Resolution",chart_type:"Chart type",stat_types:"Values",show_arc:"Sun arc",show_sky:"Sky gradient & forecast row",timeframe:"Time window",anchor:"Now is",moon:"Moon at night",moon_phase:"Draw the moon phase",background:"Card background",panel_opacity:"Panel opacity",panel_blur:"Panel blur",sky_bar:"Sky Bar in the hero",show_facts:"Show sun times",moon_size:"Moon size",direction:"Direction",min_width:"Minimum width",grow:"Grow",show_bar:"Panel buttons here",background_image:"Background image",background_image_url:"Background image URL",background_image_fit:"Image fit",background_dim:"Darken image",panel_radius:"Corner radius",panel_shadow:"Shadow",panel_border_width:"Border width",panel_border_color:"Border color",panel_glow:"Glow",panel_glow_color:"Glow color",panel_glow_size:"Glow size",rose_engine:"Wind rose",fit:"Fit to the panel",show_view_buttons:"View buttons",readings_position:"Readings",chart_position:"Chart position",show_legend:"Rose legend",wr_bars:"Speed bars",wr_corners:"Corner info",wr_stats:"Min / avg / max",wr_buttons:"Buttons",wr_buttons_position:"Button position",wr_period:"Default period",wr_beaufort:"Bar scale",wr_arrow:"Direction arrow",windrose_chart:"Chart with the Wind Rose Card",compass_arrow_size:"Pointer size",compass_arrow_color:"Pointer color",wr_arrow_size:"Arrow size",wr_arrow_color:"Arrow color",wr_speed_arrows:"Speed arrows",wr_speed_arrow_size:"Speed arrow size",stats_items:"Show",stats_align:"Alignment",chart_legend:"Chart legend",dial_scale:"Size",wr_scale:"Size",corner_speed:"Speed",corner_direction:"Direction",corner_gust:"Gust",corner_label_size:"Label size",corner_value_size:"Value size",corner_color:"Text color",stats_size:"Text size",stats_weight:"Text weight",stats_color:"Text color",windrose_preset:"Wind Rose Card preset",windrose:"Wind Rose Card options",auto_scale:"Set scale to Auto",show_time:"Show the time",show_seconds:"Seconds",time_format:"Time format",show_date:"Show the date",date_format:"Date format",align:"Alignment",auto_size:"Auto size",time_size:"Time size",date_size:"Date size",time_weight:"Time weight",date_color:"Date color",scale:"Auto scaling",device:"Pollen location",hide_off_season:"Hide out-of-season species",hide_when_off_season:"Hide the panel out of season",hide_when_none:"Hide the panel when all are None",species:"Species",max_rows:"Rows",show_tomorrow:"Tomorrow's trend",show_season:"Season strip",location:"Town / area text",seasons:"Season months",entities:"Sensors",pollutants:"Pollutants",show_scale:"AQI scale",show_aqi:"Show the AQI",extra:"More readings",bar_height:"Bar height",source:"Source text",show_source:"Show the source",show_location:"Show the town / area",hide_none:"Hide species at None",show_nothing:'Show the "nothing in the air" text',nothing_text:'"Nothing in the air" text',"entities.aqi":"AQI sensor","entities.pm2_5":"PM2.5 sensor","entities.pm10":"PM10 sensor","entities.ozone":"Ozone sensor","entities.co2":"CO\u2082 sensor"},f3=(M,C)=>C.split(".").reduce((H,e)=>H==null?H:H[e],M);function t7(M,C,H){let e=C.split("."),L=M;e.slice(0,-1).forEach(a=>L=L[a]=L[a]&&typeof L[a]=="object"?{...L[a]}:{});let i=e[e.length-1];H===void 0||H===""||H===null||Array.isArray(H)&&!H.length?delete L[i]:L[i]=H}function j1(M,C,H={}){let e={};for(let L of C){let i=f3(M,L.name);e[L.name]=i!==void 0?i:H[L.name]!==void 0?H[L.name]:L.default}return e}function v2(M,C,H,e={}){let L=n1(M);for(let i of C){let a=H[i.name],s=e[i.name]!==void 0?e[i.name]:i.default;s!==void 0&&JSON.stringify(a)===JSON.stringify(s)&&(a=void 0),t7(L,i.name,a)}return q(L)}var x3={air_quality:[["Tablet compact",{layout:"tiles",show_scale:!1,show_location:!1,show_source:!1,content_scale:85,content_width:70,content_height:60,compact:null}],["Tiles row",{compact:!0}],["Full detail",{layout:"scale",show_scale:null,show_location:null,show_source:null,content_scale:null,content_width:null,content_height:null,compact:null}]],pollen:[["Tablet compact",{hide_when_off_season:!0,hide_when_none:!0,show_season:!1,show_source:!1,show_location:!1,content_height:60,compact:null}],["Tiles row",{compact:!0}],["Full detail",{show_season:null,show_source:null,show_location:null,content_height:null,compact:null}]],rain:[["Essentials",{show_rows:["rain_rate","rain_today","rain_24h","rain_event"],show_normal:!1,compact:null}],["Everything",{show_rows:["rain_rate","rain_hour","rain_today","rain_24h","rain_event","rain_week","rain_month","rain_year","last_rain"],show_normal:null,compact:null}],["Tiles row",{compact:!0}]],garden:[["Frost only",{show_soil:!1,show_water:!1,show_gdd:!1}],["Everything",{show_outlook:null,show_season:null,show_gdd:null,show_soil:null,show_water:null}]],records:[["Area only",{show_station:!1}],["Today only",{show_month:!1,show_all_time:!1}],["Everything",{show_station:null,show_today:null,show_month:null,show_all_time:null}]],lightning:[["Quiet",{hide_when_zero:!0,show_battery:!1,show_note:!1}],["Everything",{hide_when_zero:null,show_battery:null,show_note:null}]],wind:[["Rose, chart on demand",{view:"rose",chart_mode:"popover"}],["Compass and chart",{view:"compass",chart_mode:null}]],radar:[["Light on tablets",{start_paused:!0,collapsible:!0,collapsed:!0}],["Live",{start_paused:null,collapsed:null}]],wind_map:[["Light on tablets",{start_paused:!0,collapsible:!0,collapsed:!0}],["Live",{start_paused:null,collapsed:null}]],frost_watch:[["Tiles row",{compact:!0}],["Full",{compact:null}]],vpd:[["Number only",{show_plant:!1,show_scale:!1,show_note:!1}],["Full",{show_plant:null,show_scale:null,show_note:null,show_advice:null}]]},M7=M=>M.type==="metric"?z[M.metric]?.label||"Metric":(I(M)?.label||M.type).replace(/ \(.*\)$/,"");function M1(M,C,H={}){let e=f3(M,C.name);if(e===void 0)return!1;let L=H[C.name]!==void 0?H[C.name]:C.default;return L===void 0||JSON.stringify(e)!==JSON.stringify(L)}var h3=["span","rows","display","span_medium","span_narrow","rows_compact"];function i7(M,C){let H=M[C],e=M[C+1],L=s=>{let l={...s};for(let A of h3)delete l[A];return l},i=M.slice();if(e.type==="stack"&&e.direction==="vertical"){let s=W(H)+W(e);return i.splice(C,2,q({...e,span:Math.max(G(H),G(e)),rows:s||void 0,panels:[L(H),...e.panels||[]]})),i}let a=W(H)+W(e);return i.splice(C,2,q({type:"stack",direction:"vertical",span:Math.max(G(H),G(e)),rows:a||void 0,panels:[L(H),L(e)]})),i}function S3(M,C,H){let e={...M[H]};for(let i of h3)delete e[i];let L=M.slice();return L[C]={...L[C],panels:[...L[C].panels||[],e]},L.splice(H,1),L}function g3(M,C,H){let e=M[C],L=(e.panels||[]).slice(),[i]=L.splice(H,1),a=M.slice(),s=q({...i,span:G(e),rows:void 0});return L.length?a.splice(C,1,{...e,panels:L},s):a.splice(C,1,s),a}function o7(M){let C=I(M);return{span:C.span,rows:C.rows,display:"grid",in_bar:R1({...M,in_bar:void 0}),show_title:n2.has(M.type)?!!M.title:!0}}function u2(M){let C=I(M);return M.title?M.title:M.type==="metric"?z[M.metric]?.label||M.label||"Metric tile":M.type==="day"?["Today","Tomorrow"][Number(M.day_offset??1)]||`Day +${M.day_offset}`:C.label}var b1=class extends N{constructor(){super(),this._open=null,this._openPanel=null,this._addType="metric",this._flexEds=new Map}setConfig(C){this._config=C,this._savedJson==null&&(this._savedJson=JSON.stringify(C)),I1(JSON.stringify(C)!==this._savedJson)}shouldUpdate(C){if(C.size===1&&C.has("hass")){let H=C.get("hass"),e=this.hass;if(H&&e&&H.entities===e.entities&&H.devices===e.devices&&H.areas===e.areas&&H.themes===e.themes&&H.locale===e.locale&&H.language===e.language&&Date.now()-(this._renderedAt||0)<15e3)return this._hassTimer||(this._hassTimer=setTimeout(()=>{this._hassTimer=null,this.requestUpdate()},15e3)),!1}return!0}updated(){this._renderedAt=Date.now()}connectedCallback(){super.connectedCallback(),this._onDetected||(this._onDetected=()=>(this._open==="general"||this._open==="behavior")&&this.requestUpdate()),window.addEventListener("wsfc-detected",this._onDetected)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("wsfc-detected",this._onDetected),clearTimeout(this._hassTimer),this._hassTimer=null,this._savedJson=null,I1(!1),p2(!1)}get _panels(){return w5(this._config)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}_emit(C){this._config=C,I1(JSON.stringify(C)!==this._savedJson),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:C},bubbles:!0,composed:!0}))}_setPanels(C,H){let e={...this._withoutLegacyHero(),panels:C};for(let[L,i]of Object.entries(H||{}))i===void 0?delete e[L]:e[L]=i;this._emit(e)}_withoutLegacyHero(){let{hero:C,...H}=this._config;return C===!1?{...H,hero:C}:H}render(){return!this.hass||!this._config?u:o`
      <div class="ed">
        <div class="hdr"><span class="name">${x5}</span><span class="ver">v${Z5}</span>
          <span class="io">
            <button class="btn sm ghost" title="Copy the whole card's settings as YAML" @click=${()=>d2({mode:"export",config:this._config,cardType:`custom:${o2}`})}><ha-icon icon="mdi:export"></ha-icon>Export</button>
            <button class="btn sm ghost" title="Replace the settings with pasted YAML or JSON" @click=${()=>d2({mode:"import",cardType:`custom:${o2}`,onImport:C=>{this._flexEds.clear(),this._openPanel=null,this._emit(C),this.requestUpdate()}})}><ha-icon icon="mdi:import"></ha-icon>Import</button>
          </span></div>
        <label class="live" title="While editing, the animated background, blur and the radar and Windy maps are paused to keep the editor fast. Tick to see them running (not saved).">
          <input type="checkbox" .checked=${s2()} @change=${C=>{p2(C.target.checked),this.requestUpdate()}} />
          <ha-icon icon="mdi:play-circle-outline"></ha-icon><span>Live preview</span>
          <span class="live-hint">${s2()?"animations and maps running":"animations and maps paused while editing"}</span>
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
        ${this._section("alerts","mdi:alert-outline","Alerts Bar",()=>this._general(Y1))}
        ${this._section("behavior","mdi:fit-to-screen-outline","Screen fit & layout",()=>this._general(X1))}
        ${this._section("buttons","mdi:gesture-tap-button","Button Menu",()=>this._buttonsEditor())}
        ${this._section("collapse","mdi:arrow-collapse-vertical","Collapsible Panel Defaults",()=>o`${this._general(J1)}${this._convertBar()}`)}
        ${this._section("layout","mdi:view-dashboard-edit-outline","Layout Map",()=>this._layoutEditor())}
        ${this._section("panels","mdi:view-list-outline",`Panels (${this._panels.length})`,()=>this._panelList())}
      </div>
    `}_searchIndex(){let C=[],H=L=>L.label||q1[L.name]||L.name.replace(/[._]/g," ");for(let[L,i,a]of[["station","Weather station",[["Current condition",K1]]],["background","Background",_1],["general","Appearance",O1],["alerts","Alerts Bar",Y1],["behavior","Screen fit & layout",X1],["collapse","Collapsible Panel Defaults",J1]])for(let[s,l]of a)for(let A of l.filter(c=>c.kind!=="action"))C.push({label:H(A),help:A.helper||"",where:`${i} \u203A ${s}`,go:{open:L},f:A});for(let L of w1)C.push({label:H(L),help:L.helper||"",where:"Button Menu",go:{open:"buttons"},f:L});let e=(L,i,a)=>{let s=I(L);if(!s)return;let l=L.title||M7(L),A=(a?$1:P1).map(p=>({f:p,sec:p.section||"Size and Scaling"})),c=s.groups?s.groups.flatMap(([p,x],h)=>x.map(b=>({f:b,sec:`${s.label} options`,sub:h?p:null}))):(s.schema||[]).map(p=>({f:p,sec:p.section||(["content_width","content_height"].includes(p.name)?"Size and Scaling":`${s.label} options`)}));for(let{f:p,sec:x,sub:h}of[...A,...c])C.push({label:H(p),help:p.helper||"",where:`Panels \u203A ${l} \u203A ${x}${h?` \u203A ${h}`:""}`,go:{open:"panels",panel:i,type:L.type,sec:x,sub:h},f:p})};return this._panels.forEach((L,i)=>{e(L,`${i}`,!1),L.type==="stack"&&(L.panels||[]).forEach((a,s)=>a&&e(a,`${i}.${s}`,!0))}),C}_searchResults(C){let H=C.toLowerCase().split(/\s+/).filter(Boolean),e=this._searchIndex().filter(L=>{let i=`${L.label} ${L.help} ${L.where} ${L.f.name}`.toLowerCase();return H.every(a=>i.includes(a))});return e.sort((L,i)=>(i.label.toLowerCase().includes(H[0])?1:0)-(L.label.toLowerCase().includes(H[0])?1:0)),o`<div class="finds" role="listbox" aria-label="Matching settings">
      ${e.length?e.slice(0,40).map(L=>o`<button class="find-hit" role="option" @click=${()=>this._goTo(L)}><b>${L.label}</b><span>${L.where}</span></button>`):o`<div class="fhelp">No setting matches "${C}".</div>`}
      ${e.length>40?o`<div class="fhelp">${e.length-40} more — type more of the name.</div>`:u}
    </div>`}async _goTo(C){let H=C.go;if(this._q="",this._open=H.open,H.panel!=null){this._openPanel=H.panel,this._flatOpen||(this._flatOpen=new Map);for(let L of this._flatOpen.keys())L.startsWith(`${H.type}|`)&&this._flatOpen.set(L,!1);this._flatOpen.set(`${H.type}|${H.sec}`,!0),H.sub&&(this._subOpen||(this._subOpen=new Set),this._subOpen.add(`${H.type}:${H.sub}`))}this.requestUpdate(),await this.updateComplete,await new Promise(L=>requestAnimationFrame(L));let e=[...this.renderRoot.querySelectorAll(".fld, .frow, .fchk, label")].find(L=>L.textContent.trim().startsWith(C.label));e&&(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add("flash"),setTimeout(()=>e.classList.remove("flash"),1600))}_section(C,H,e,L,i=u){let a=this._open===C;return o`<details class="panel" ?open=${a} @toggle=${s=>{s.target.open?this._open=C:this._open===C&&(this._open=null)}}>
      <summary><ha-icon icon=${H}></ha-icon><span>${e}</span>${i}</summary>
      ${a?o`<div class="body">${L()}</div>`:u}
    </details>`}_form(C,H,e,L,i){return I5({data:C,schema:H,onChange:e,whenData:L,isSet:i,action:a=>this._resetAction(a),label:a=>a.label||q1[a.name]||a.name,helper:a=>a.helper,haForm:(a,s,l)=>this._haForm(a,s,l),auto:a=>this._autoText(a)})}_autoText(C){let H={panel_radius:"radius",row_height:"row",gap:"gap"}[C.name];if(!H)return null;let{preview:e,dashboard:L}=K5(),i=e?.[H],a=L?.[H],s=H==="radius"?" (from the theme's card corner radius)":H==="row"&&this._config.layout==="fullscreen"&&V1(this._config)!=="none"?" (calculated to fit the screen)":"";return i&&a&&i!==a?`${i} in this preview, ${a} on the dashboard${s}`:i||a?`${i||a}${s}`:null}_haForm(C,H,e){return o`<ha-form
      .hass=${this.hass}
      .data=${C}
      .schema=${H}
      .computeLabel=${L=>L.label||q1[L.name]||L.name}
      .computeHelper=${L=>L.helper}
      @value-changed=${L=>{L.stopPropagation(),e(L.detail.value)}}
    ></ha-form>`}_convertBar(){let C=this._config.collapsed_view||"minimal",e=this._panels.flatMap(i=>[i,...i.type==="stack"?i.panels||[]:[]]).filter(i=>i.collapsed_view&&i.collapsed_view!=="default").length;return o`<div class="convert">
      <button class="btn sm" ?disabled=${!e} @click=${()=>{let i=a=>{if(!a)return a;let{collapsed_view:s,...l}=a;return l};this._flexEds.clear(),this._setPanels(this._panels.map(a=>a.type==="stack"?{...i(a),panels:(a.panels||[]).map(i)}:i(a)))}} title="Clears every panel's own View when collapsed">
        <ha-icon icon="mdi:swap-horizontal"></ha-icon>Convert all now</button>
      <span class="fhelp">${e?`${e===1?"1 panel sets its own view":`${e} panels set their own view`}; Convert all now makes every collapsible panel ${C==="compact"?"Compact":"Minimal"}.`:`Every collapsible panel follows the default (${C==="compact"?"Compact":"Minimal"}).`}</span>
    </div>`}_general(C=O1){let H={...this._config,screen_fit:V1(this._config)},e=j1(H,r7,Y),L=this._config.background||"none";return C.map(([i,a])=>{let s=this._onlyChanged?a.filter(b=>M1(this._config,b,Y)):a;if(!s.length||!s.some(b=>typeof b.when!="function"||b.when(e)))return u;let l=a.some(b=>M1(this._config,b,Y)),A=C===_1&&i==="Background"&&L==="animated"&&this._bgPrev?.open,c=b=>this._form(j1(H,b,Y),b,k=>{let{panels:T,...F}=this._config,B=v2(F,b,k,Y);b.some(g=>g.name==="screen_fit")&&(delete B.fit_height,delete B.fit_strict,delete B.auto_fit),this._config.panels&&(B.panels=this._config.panels),this._emit(B)},e,k=>M1(this._config,k,Y)),p=s.filter(b=>!b.sub),x=[...new Set(s.filter(b=>b.sub).map(b=>b.sub))],h=b=>{let k=s.filter(g=>g.sub===b);if(!k.some(g=>typeof g.when!="function"||g.when(e)))return u;let T=`card:${b}`,F=(this._subOpen||(this._subOpen=new Set)).has(T),B=k.some(g=>M1(this._config,g,Y));return o`<details class="sub psub" ?open=${F} @toggle=${g=>{g.target!==g.currentTarget||g.target.open===this._subOpen.has(T)||(g.target.open?this._subOpen.add(T):this._subOpen.delete(T),this.requestUpdate())}}><summary><ha-icon icon=${k[0].subIcon||"mdi:tune"}></ha-icon><span>${b}</span>${B?o`<i class="chg" title="Has changed settings"></i>`:u}</summary>
          ${F?o`<div class="psub-body">${c(k)}</div>`:u}</details>`};return o`${A?this._bgPreview():u}<div class="agrp"><div class="agrp-t">${i}${l?o`<i class="chg" title="Has changed settings"></i>`:u}</div>${c(p)}${x.map(h)}</div>`})}_overrideCount(C){let H=0,e=L=>{for(let i of L||[])C.some(a=>i?.[a]!==void 0)&&H++,Array.isArray(i?.panels)&&e(i.panels)};return e(this._config.panels),H}_resetAction(C){let H=Z3[C.name]||[],e=this._overrideCount(H),L=()=>{let i=a=>a.map(s=>{let l={...s};for(let A of H)delete l[A];return Array.isArray(l.panels)&&(l.panels=i(l.panels)),l});this._emit({...this._config,panels:i(this._config.panels||[])})};return o`<div class="fact-btn" data-action=${C.name}><button type="button" ?disabled=${!e} @click=${L}><ha-icon icon="mdi:format-paint"></ha-icon>${C.label}</button>
      <span class="fhelp">${e?`${C.helper} ${e===1?"1 panel sets its own.":`${e} panels set their own.`}`:"No panel sets its own."}</span></div>`}_bgPreviewButton(){let C=!!this._bgPrev?.open;return o`<button class="bgprev-btn ${C?"on":""}" type="button" aria-pressed=${String(C)}
      title=${C?"Hide the background preview":"Preview the background"} aria-label="Preview the background"
      @click=${H=>{H.preventDefault(),H.stopPropagation(),this._bgPrev={...this._bgPrev||{},open:!C},C||(this._open="background"),this.requestUpdate()}}><ha-icon icon="mdi:magnify"></ha-icon></button>`}_bgPreview(){let C=this._bgPrev||{},H=this.hass?.states?.[this._config.entity]?.state,e=(Q1.find(([i])=>i===H)||[,H])[1],L=[{name:"condition",label:"Condition",selector:{select:{options:[{value:"",label:H?`Now \u2014 ${e}`:"Now"},...Q1.map(([i,a])=>({value:i,label:a}))]}}},{name:"time",label:"Time of day",selector:{select:{options:[{value:"",label:"Day (night for Clear night)"},{value:"day",label:"Day"},{value:"night",label:"Night"}]}}}];return o`<div class="bgprev">
      <wsfc-bg-preview .hass=${this.hass} .config=${this._config} .condition=${C.condition||""} .time=${C.time||""}></wsfc-bg-preview>
      ${this._form({condition:C.condition||"",time:C.time||""},L,i=>{this._bgPrev={...C,open:!0,condition:i.condition||"",time:i.time||""},this.requestUpdate()})}
    </div>`}_breakStack(C){let H=this._panels,e=Number(C);if(!H[e]||H[e].type!=="stack")return;if(H[e].x==null||H[e].y==null){let F=H.map((g,$)=>$).filter(g=>H[g].display!=="popup"),B=A1(F.map(g=>({key:g,w:G(H[g]),h:L1(W(H[g]))})),{gravity:this._config.layout_gaps!=="keep"});H=H.map((g,$)=>B.has($)?{...g,x:B.get($).x,y:t1(B.get($).y)}:g)}let L=H[e],i=(L.panels||[]).filter(Boolean).map(F=>({...F}));if(!i.length)return;let a=G(L),s=W(L)||i.length*.5,l=L.direction==="vertical",A=F=>Math.max(.25,Math.round(F*4)/4),c=F=>Math.max(0,Math.round(F*4)/4),p=F=>Number(F.grow??1)||1,x=i.reduce((F,B)=>F+p(B),0),h=0,b=0,k=i.map((F,B)=>{let{grow:g,min_width:$,...E}=F;if(l){let i1=B===i.length-1?A(s-b):A(s*p(F)/x),o1={...E,span:a,rows:Math.max(.25,i1),...L.x!=null?{x:L.x,y:c(Number(L.y)+b)}:{}};return b+=i1,o1}let Z=B===i.length-1?a-h:Math.max(1,Math.round(a*p(F)/x)),X={...E,span:Math.max(1,Z),rows:E.rows??s,...L.x!=null?{x:Number(L.x)+h,y:L.y}:{}};return h+=Z,X}),T=H.slice();T.splice(e,1,...k),this._openPanel=null,this._setPanels(T)}_stationDevice(){let C=(this._config.metric_sources?.sources||[]).find(H=>!H.disabled&&String(H.ref).startsWith("device:"));return C?C.ref.slice(7):void 0}_stationEditor(){let C=this._station,H=[...L7,"rain_today","battery","battery_voltage","capacitor","signal","signal_quality","rssi","online","hardware_id","aqi","pm2_5","pm10","ozone"].map(L=>{let i=z[L]?.find||z[L]?.aq?E1(L,C,this.hass):o3(C,this.hass,L)||(this.hass.states[C.entity]?.attributes?.[L]!=null?C.entity:null),a=i&&!i.startsWith("weather.")?G1(this.hass,i):null,s=i?.startsWith("weather.")?this.hass.states[i]?.attributes?.[L]:null;return{k:L,e:i,v:a?`${a.value} ${a.unit}`:s!=null?String(s):"",label:e7[L]||z[L]?.label||L.replace(/_/g," "),integ:i?d1(this.hass,i):""}}),e=H.filter(L=>L.e).length;return o`
      <p class="hint">Sources are used top to bottom: for each value the first source that has it wins, and they apply to every panel. Add your station's <b>device</b> (sensors are mapped automatically, outdoor first) and a <b>weather entity</b> for the forecast and condition. Open a source to see or change what it supplies.</p>
      <wsfc-sources-editor .hass=${this.hass} .config=${{entity:this._config.entity,metric_sources:this._config.metric_sources}}
        @sources-changed=${L=>{let i={...this._config};L.detail.entity&&(i.entity=L.detail.entity),L.detail.metric_sources?i.metric_sources=L.detail.metric_sources:delete i.metric_sources,this._emit(i)}}></wsfc-sources-editor>
      ${this._general([["Current condition",K1]])}
      ${this._config.condition_source==="station"?o`<p class="hint cond-now"><b>Now:</b> ${v3(this.hass,this._station,this._config)}</p>`:u}
      <details class="sub">
        <summary><ha-icon icon="mdi:format-list-checks"></ha-icon><span>Values used</span><span class="cnt">${e} of ${H.length} found</span></summary>
        <div class="map">
          <span class="h">Value</span><span class="h">Entity</span><span class="h">Integration</span><span class="h">Now</span>
          ${H.map(L=>o`<span class="k">${L.label}</span><span class="e ${L.e?"":"none"}" title=${L.e||""}>${L.e||"not found"}</span><span class="i">${L.integ}</span><span class="v">${L.v}</span>`)}
        </div>
      </details>
      <details class="sub">
        <summary><ha-icon icon="mdi:information-outline"></ha-icon><span>Which Ecowitt integration?</span></summary>
        <p class="hint">Any of them works — Home Assistant's <b>Ecowitt</b>, <b>Ecowitt Local</b> or the <b>Ecowitt Official Integration</b> — and you can add more than one: e.g. the core integration for readings plus Ecowitt Local for battery, signal and RSSI (Station health panel). Home Assistant's own integration has no signal or RSSI sensors. With Ecowitt Local, add either its sensor or its gateway device; the other is found automatically.</p>
      </details>
    `}_flexEditor(C,H,e){let L=`${C}:${H.type}`,i=this._flexEds.get(L);i||(i=document.createElement(_5),i.wsfcMode="sections",i.wsfcType=H.type,i.addEventListener("wsfc-flat-open",p=>{for(let x of[...(this._flatOpen||new Map).keys()])x.startsWith(`${p.detail.type}|`)&&this._flatOpen.set(x,!1);this.requestUpdate()}),i.addEventListener("config-changed",p=>{p.stopPropagation(),i._wsfcOnChange?.(p.detail.config)}),this._flexEds.set(L,i));let a=p=>p.type==="sky_tracker"?F5(p,this._station):O5(T5(p.type,this._station),p.flex||{});i.wsfcPanels=I(H)?.flexPanels||null;let s=this._config.background==="animated"||this._config.background==="image"&&!!(this._config.background_image||this._config.background_image_url),l=[...I(H)?.flexHide||[],...H.type==="hero"&&s?["show_condition_effects"]:[],...H.type==="hero"&&H.auto_scale?["header_temp_size","header_state_size","header_icon_size","header_secondary_size","clock_font_size","clock_date_font_size","chip_text_size","chip_icon_size","global_icon_size","global_text_size"]:[]];JSON.stringify(l)!==JSON.stringify(i.wsfcHide||[])&&(i.wsfcHide=l,i.requestUpdate?.()),i._wsfcOnChange=p=>{let x=n1(H),h=y5(p,a({...H,flex:void 0}));Object.keys(h).length?x.flex=h:delete x.flex,e(x)};let A=a(H),c=JSON.stringify(A);return i._wsfcJson!==c&&(i._wsfcJson=c,i.setConfig(A)),i.hass=this.hass,o`<div class="flexed">${i}</div>`}_guideSpec(){let C=this._config,H=C.layout_screen;if(!H||(C.layout_guide||"line")==="off")return null;let[e,L]=H==="window"?[window.innerWidth,window.innerHeight]:String(H).split(/[x×]/).map(Number);if(!e||!L)return null;let i=C.gap??12,a=C.layout==="fullscreen",s=C.panel_bar!==!1&&!this._panels.some(A=>A.type==="heading"&&A.show_bar),l=56+(a?16:8)+2*i+(s?40+i:0)+(C.title?44+i:0);return{w:e,h:L,chrome:l,gap:i,row:C.row_height||110,fit:a&&V1(C)!=="none",strict:a&&["strict","scale"].includes(V1(C)),mode:C.layout_guide||"line"}}_screenGuide(){let C=this._config,H=[["","Off"],["window",`This browser window (${window.innerWidth}\xD7${window.innerHeight})`],["1920x1080","1920\xD71080 (16:9 desktop)"],["2560x1440","2560\xD71440 (16:9)"],["3440x1440","3440\xD71440 (21:9)"],["1366x768","1366\xD7768 (laptop)"],["1280x800","1280\xD7800 (16:10 tablet)"],["1180x820","1180\xD7820 (iPad landscape)"],["820x1180","820\xD71180 (iPad portrait)"],["1080x1920","1080\xD71920 (portrait panel)"]],e=C.layout_screen||"",L=e&&!H.some(([a])=>a===e),i=a=>{let s={...this._config,...a};for(let l of Object.keys(a))(a[l]==null||a[l]==="")&&delete s[l];this._emit(s)};return o`<div class="guidebar">
      <div class="frow"><label for="lg-s">Screen guide</label>
        <select id="lg-s" class="sel" @change=${a=>i({layout_screen:a.target.value==="custom"?"1600x900":a.target.value||void 0})}>
          ${H.map(([a,s])=>o`<option value=${a} ?selected=${a===e}>${s}</option>`)}
          <option value="custom" ?selected=${L}>Custom size…</option>
        </select><button class="btn sm ghost" title="Set the Screen guide to this device's browser window (open the editor on the tablet and press this)" @click=${()=>i({layout_screen:`${window.innerWidth}x${window.innerHeight}`})}><ha-icon icon="mdi:tablet"></ha-icon>This device</button></div>
      ${L?o`<div class="frow"><label for="lg-c">Width × height</label>
        <input id="lg-c" class="ftext" .value=${e} placeholder="1600x900" @change=${a=>i({layout_screen:/^\d{3,5}\s*[x×]\s*\d{3,5}$/.test(a.target.value.trim())?a.target.value.trim().replace(/\s+/g,"").replace("\xD7","x"):e})} /></div>`:u}
      ${e?o`<div class="frow"><label for="lg-m">Show as</label>
        <select id="lg-m" class="sel" @change=${a=>i({layout_guide:a.target.value==="line"?void 0:a.target.value})}>
          ${[["line","Dotted line at the screen edge"],["frame","Frame \u2014 shade what's off screen"]].map(([a,s])=>o`<option value=${a} ?selected=${(C.layout_guide||"line")===a}>${s}</option>`)}
        </select></div>
        <div class="fhelp">The map is drawn to that screen's scale (window size inside the browser, below the dashboard header).${C.layout==="fullscreen"&&V1(C)!=="none"?" Full screen with fit: rows share the screen height, as on the dashboard.":" Panels below the line need scrolling."}</div>`:u}
    </div>`}_layoutEditor(){let C=this._config,H=this._mapFor==="phone",e=Array.isArray(C.phone_layout)?C.phone_layout:null,L=l=>{let A={...this._config};l&&l.length?A.phone_layout=l:delete A.phone_layout,this._emit(A)},i=this._panels.map((l,A)=>({p:l,i:A})).filter(({p:l})=>l.display!=="popup"),a=()=>{let l=new Map((e||[]).map((A,c)=>[Number(A.i),A]));return i.map(({p:A,i:c})=>({...A,__i:c,span:l.get(c)?.span??12,rows:l.get(c)?.rows??A.rows??0,x:l.get(c)?.x,y:l.get(c)?.y,show:l.has(c)?l.get(c).show!==!1:A.show})).sort((A,c)=>((e||[]).findIndex(p=>Number(p.i)===A.__i)+1||1e3+A.__i)-((e||[]).findIndex(p=>Number(p.i)===c.__i)+1||1e3+c.__i))},s=l=>l.filter(A=>A.__i!=null).map(A=>({i:A.__i,span:G(A),...W(A)?{rows:W(A)}:{},...A.x!=null&&A.y!=null?{x:A.x,y:A.y}:{},...A.show===!1?{show:!1}:{}}));return o`
      <div class="frow"><label for="lm-for">Layout for</label>
        <select id="lm-for" class="sel" @change=${l=>{this._mapFor=l.target.value,this.requestUpdate()}}>
          <option value="main" ?selected=${!H}>Main layout (tablets and larger)</option>
          <option value="phone" ?selected=${H}>Phone layout (narrow screens)${e?"":" \u2014 not set"}</option>
        </select></div>
      ${H?o`<p class="hint">On screens narrower than ${C.narrow_width||720} px the card uses this layout: its own order, widths and heights for the same panels. Without one, panels stack full width automatically.</p>
            <div class="presets">${e?o`<button class="btn sm ghost" @click=${()=>L(null)}><ha-icon icon="mdi:delete-outline"></ha-icon>Remove the phone layout</button>`:o`<button class="btn sm" @click=${()=>L(i.map(({p:l,i:A})=>({i:A,span:12,...l.rows?{rows:l.rows}:{}})))}><ha-icon icon="mdi:cellphone"></ha-icon>Create a phone layout</button>`}</div>
            ${e?o`<wsfc-layout-map .panels=${a()} .gravity=${this._config.layout_gaps!=="keep"} @layout-changed=${l=>L(s(l.detail.panels))}></wsfc-layout-map>`:u}`:o`<p class="hint"><b>Drag</b> a panel to any place on the grid: panels in its way move down, nothing else moves. Drag its <b>right or bottom edge</b> (or the corner) to resize, in quarter rows. Keyboard: arrows move one cell, Shift+arrows resize. This is the main layout${e?"; phones use the Phone layout":" \u2014 phones stack the panels automatically (or set a Phone layout above)"}. Dashed = hidden on load.</p>
            ${this._screenGuide()}
            ${this._guideSpec()?o`<wsfc-layout-probe .hass=${this.hass} .config=${this._config} .guide=${this._guideSpec()}
              @probe-measured=${l=>{this._measured=l.detail,this.requestUpdate()}}></wsfc-layout-probe>`:u}
            <wsfc-layout-map .panels=${this._panels} .gravity=${this._config.layout_gaps!=="keep"} .guide=${this._guideSpec()} .measured=${this._guideSpec()?this._measured:null} @layout-changed=${l=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(l.detail.panels)}}></wsfc-layout-map>`}
    `}_panelList(){return o`
      <p class="hint">Edit, show/hide, duplicate, delete and add panels. Arrange them under <b>Layout</b>. To keep panels together (side by side, or one above the other filling in for hidden ones), add a <b>Stack</b> panel, then use <b>Move into stack</b> under it.</p>
      ${this._list(this._panels,(C,H)=>this._setPanels(C,H),"")}
    `}_buttonsEditor(){let C=this._config,H=this._panels,e=H.findIndex(c=>c.type==="heading"),L=e>=0&&!!H[e].show_bar,i=C.panel_bar===!1?"hidden":L?"heading":"top",a=c=>{let p=H.map((x,h)=>h===e?q({...x,show_bar:c==="heading"?!0:void 0}):x);c==="heading"&&e<0&&p.splice(1,0,{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0}),this._setPanels(p,{panel_bar:c==="hidden"?!1:void 0})},s=(c,p)=>{let x=b=>q({...b,in_bar:p===R1({...b,in_bar:void 0})?void 0:p}),h=H.map((b,k)=>{let T=c.includes(`${k}`)?x(b):b;if(T.type==="stack"&&Array.isArray(T.panels)){let F=T.panels.map((B,g)=>B&&c.includes(`${k}.${g}`)?x(B):B);F.some((B,g)=>B!==T.panels[g])&&(T={...T,panels:F})}return T});this._setPanels(h)},l=[];H.forEach((c,p)=>{l.push([c,`${p}`,!1]),c.type==="stack"&&(c.panels||[]).forEach((x,h)=>x&&l.push([x,`${p}.${h}`,!0]))});let A=l.map(([,c])=>c);return o`
      <div class="row-inline">
        <label for="bp">Buttons</label>
        <select id="bp" class="sel" @change=${c=>a(c.target.value)}>
          <option value="top" ?selected=${i==="top"}>Above the panels</option>
          <option value="heading" ?selected=${i==="heading"}>In the Button Menu panel</option>
          <option value="hidden" ?selected=${i==="hidden"}>Hidden</option>
        </select>
      </div>
      <p class="hint">A button toggles its panel (pop-up panels open instead). Panels without a button stay as they are.</p>
      ${this._form(j1(C,w1,Y),w1,c=>{let{panels:p,...x}=this._config,h=v2(x,w1,c,Y);this._config.panels&&(h.panels=this._config.panels),this._emit(h)})}
      <div class="btnbar">
        <button class="btn sm" @click=${()=>s(A,!0)}>All</button>
        <button class="btn sm ghost" @click=${()=>s(A,!1)}>None</button>
      </div>
      <div class="checks">
        ${l.map(([c,p,x])=>o`<label class="chk ${x?"nested":""}">
          <input type="checkbox" .checked=${R1(c)} @change=${h=>s([p],h.target.checked)} />
          <ha-icon icon=${c.icon||c.type==="metric"&&z[c.metric]?.icon||I(c).icon}></ha-icon>
          <span>${u2(c)}</span>${c.display==="popup"?o`<span class="tag">pop-up</span>`:c.show===!1?o`<span class="tag">hidden on load</span>`:u}
        </label>`)}
      </div>
    `}_list(C,H,e){let L=!!e,i=Object.entries(a2).filter(([l])=>!(L&&l==="hero")).sort(([l,A],[c,p])=>l==="hero"?-1:c==="hero"?1:A.label.localeCompare(p.label)),a=e||"top",s=(this._addTypes||(this._addTypes={}))[a]||(L?"metric":this._addType);return o`
      <div class="rows">${C.map((l,A)=>this._panelRow(l,A,C,H,e?`${e}.${A}`:`${A}`,L))}</div>
      <div class="add">
        <select class="sel" @change=${l=>{this._addTypes[a]=l.target.value,this.requestUpdate()}} aria-label="Panel type to add">
          ${i.map(([l,A])=>o`<option value=${l} ?selected=${l===s}>${A.label}</option>`)}
        </select>
        <button class="btn" @click=${()=>{let l={type:s};l.type==="metric"&&(l.metric="temperature"),l.type==="stack"&&(l.panels=[{type:"metric",metric:"temperature"},{type:"metric",metric:"humidity"}]),H([...C,l]),this._openPanel=e?`${e}.${C.length}`:`${C.length}`}}><ha-icon icon="mdi:plus"></ha-icon>${L?"Add new to stack":"Add panel"}</button>
      </div>
    `}_panelRow(C,H,e,L,i,a){let s=I(C),l=this._openPanel===i||C.type!=="stack"&&String(this._openPanel||"").startsWith(`${i}.`),A=C.show===!1,c=()=>this._flexEds.clear(),p=k=>{let T=e.slice(),F=H+k;F<0||F>=T.length||([T[H],T[F]]=[T[F],T[H]],c(),this._openPanel=null,L(T))},x=(k,T)=>{let F=e.slice();F[H]=k,L(F,T)},h=a?`${C.grow!=null?`grow ${C.grow}`:""}${C.rows?` \xB7 ${C.rows} rows`:""}`:`${G(C)}/12${W(C)?` \xD7 ${W(C)}`:""}${C.display==="popup"?" \xB7 pop-up":""}`,b=C.type==="stack"?`${C.direction==="vertical"?"Vertical":"Horizontal"} stack \xB7 ${(C.panels||[]).length} panels`:s.label;return o`<div class="row ${l?"open":""} ${A?"dim":""}">
      <div class="line">
        <ha-icon class="lead" icon=${C.icon||C.type==="metric"&&z[C.metric]?.icon||(C.type==="stack"&&C.direction==="vertical"?"mdi:view-agenda-outline":s.icon)}></ha-icon>
        <div class="txt"><div class="n">${u2(C)}</div><div class="s">${b}${h?` \xB7 ${h}`:""}</div></div>
        ${a?o`<button class="ib" title="Move up" ?disabled=${H===0} @click=${()=>p(-1)}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
              <button class="ib" title="Move down" ?disabled=${H===e.length-1} @click=${()=>p(1)}><ha-icon icon="mdi:arrow-down"></ha-icon></button>`:u}
        ${a?u:o`<button class="ib" title=${A?"Show when the dashboard loads":"Hide when the dashboard loads"} @click=${()=>x(q({...C,show:A?void 0:!1}))}>
              <ha-icon icon=${A?"mdi:eye-off":"mdi:eye"}></ha-icon></button>`}
        ${a&&/^\d+\.\d+$/.test(i)?o`<button class="ib" title="Move out of the stack (back into the grid, after the stack)" @click=${()=>{c(),this._openPanel=null,this._setPanels(g3(this._panels,Number(i.split(".")[0]),H))}}><ha-icon icon="mdi:view-split-horizontal"></ha-icon></button>`:u}
        <button class="ib" title="Edit" @click=${()=>this._openPanel=this._openPanel===i?null:i}><ha-icon icon=${l?"mdi:chevron-up":"mdi:pencil"}></ha-icon></button>
        <button class="ib" title="Duplicate" @click=${()=>{let k=e.slice();k.splice(H+1,0,n1(C)),c(),L(k)}}><ha-icon icon="mdi:content-copy"></ha-icon></button>
        <button class="ib del" title="Delete" @click=${()=>{let k=e.slice();k.splice(H,1),c(),this._openPanel=null,L(k)}}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
      </div>
      ${l?this._panelBody(C,i,x,a):u}
      ${C.type==="stack"?this._stackKids(C,H,i,x,a):u}
    </div>`}_stackKids(C,H,e,L,i){let s=!i?this._panels.map((A,c)=>[A,c]).filter(([A,c])=>c!==H&&A.type!=="hero"&&A.type!=="stack"):[],l=(this._moveIn||(this._moveIn={}))[e]??s[0]?.[1]??"";return o`<div class="kids">
      ${this._list(C.panels||[],(A,c)=>L({...C,panels:A},c),e)}
      ${s.length?o`<div class="add">
            <select class="sel" aria-label="Panel to move into this stack" @change=${A=>{this._moveIn[e]=Number(A.target.value),this.requestUpdate()}}>
              ${s.map(([A,c])=>o`<option value=${c} ?selected=${c===l}>${u2(A)}</option>`)}
            </select>
            <button class="btn" @click=${()=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(S3(this._panels,H,Number(l)))}}><ha-icon icon="mdi:view-split-horizontal"></ha-icon>Move into stack</button>
          </div>`:u}
    </div>`}_flat(C,H,e,L=!1){let i=`${C.type}|${H}`;this._flatOpen||(this._flatOpen=new Map);let a=!!this._flatOpen.get(i);return o`<details class="flat" ?open=${a} @toggle=${s=>{if(!(s.target!==s.currentTarget||s.target.open===!!this._flatOpen.get(i))){if(s.target.open){for(let l of this._flatOpen.keys())l.startsWith(`${C.type}|`)&&this._flatOpen.set(l,!1);for(let[l,A]of this._flexEds||[])l.endsWith(`:${C.type}`)&&A.renderRoot?.querySelectorAll?.("details.wsfc-panel[open]").forEach(c=>c.open=!1)}this._flatOpen.set(i,s.target.open),this.requestUpdate()}}}>
      <summary>${H}${L?o`<i class="chg" title="Has changed settings"></i>`:u}</summary>
      <div class="flat-body">${e}</div>
    </details>`}_sections(C,H,e,L,i,a=!0,s=null){let l=[];for(let p of H){let x=p.sub?`sub:${p.sub}`:p.section?`sec:${p.section}`:`sec:${i}`,h=l.find(b=>b.k===x);h||l.push(h={k:x,f:[]}),h.f.push(p)}let A=p=>this._form(j1(C,p,e),p,x=>L({...v2(C,p,x,e),type:C.type}),C,x=>M1(C,x,e)),c=this._onlyChanged;return l.map(({k:p,f:x})=>{let h=c?x.filter(T=>M1(C,T,e)):x;if(!h.length)return u;let b=x.some(T=>M1(C,T,e)),k=p.slice(4);if(p.startsWith("sub:")){let T=`${C.type}:${k}`,F=(this._subOpen||(this._subOpen=new Set)).has(T);return o`<details class="sub psub" ?open=${F} @toggle=${B=>{if(!(B.target!==B.currentTarget||B.target.open===this._subOpen.has(T))){if(B.target.open){for(let g of[...this._subOpen])g.startsWith(`${C.type}:`)&&this._subOpen.delete(g);this._subOpen.add(T)}else this._subOpen.delete(T);this.requestUpdate()}}}>
          <summary><ha-icon icon=${h[0]?.subIcon||"mdi:weather-sunset"}></ha-icon><span>${k}</span>${b?o`<i class="chg" title="Has changed settings"></i>`:u}</summary>
          ${F?o`<div class="psub-body">${A(h)}</div>`:u}
        </details>`}return a?this._flat(C,k,A(h),b):o`<div class="grp">${k}${b?o`<i class="chg" title="Has changed settings"></i>`:u}</div>${A(h)}`})}_panelBody(C,H,e,L){let i=I(C),a=(g,$)=>(g?.overflow==="scroll"&&!L&&!(Number(g.rows??i?.rows??0)>=1)&&(g={...g,rows:1}),e(g,$)),s=["content_width","content_height",...["daily","hourly","forecast","sky_tracker"].includes(C.type)?["text_scale","icon_scale","chart_scale","bar_scale","arc_scale"]:[],...C.type==="hero"?["text_scale","icon_scale_all"]:[]],l=(i.schema||[]).filter(g=>s.includes(g.name)).map(g=>({...g,section:"Size and Scaling"})),A=l.length?{...i,schema:i.schema.filter(g=>!s.includes(g.name))}:i,c=L?{show_title:n2.has(C.type)?!!C.title:!0}:o7(C),p=L?$1:P1;C.type==="hero"&&(p=p.filter(g=>!["icon","display","in_bar"].includes(g.name))),V3(C.type)||(p=p.filter(g=>g.section!=="Collapse"));let x=this._config,h=x.layout==="fullscreen"&&["strict","scale"].includes(V1(x)),b={collapsed_view:()=>x.collapsed_view==="compact"?"Compact":"Minimal",collapsed_open:()=>({inplace:"In place",overlay:"Over the other panels",popup:"As a pop-up"})[x.collapsed_open]||(x.layout==="fullscreen"||V1(x)==="scale"?"Automatic: over the other panels":"Automatic: in place"),collapse_title_tap:()=>x.collapse_title_tap===!1?"Off":"On",show_collapse_hint:()=>x.show_collapse_hint?"Show":"Hide",collapsed_info:()=>x.collapsed_info==="off"?"None":"The panel's summary",overflow:()=>h||x.panel_overflow==="scroll"?"Scroll":"Grow"};p=p.map(g=>{let $=g.selector?.select?.options;return!b[g.name]||!$?.some(E=>E.value==="default")?g:{...g,selector:{select:{...g.selector.select,options:$.map(E=>E.value==="default"?{...E,label:`Card default \u2014 ${b[g.name]()}`}:E)}}}}),M3.has(C.type)||(p=p.filter(g=>!["collapsed_view","compact_expand","compact_title","compact"].includes(g.name))),S5.has(C.type)&&(p=p.filter(g=>!["show_title","title","show_icon","icon"].includes(g.name)||C.type!=="clock"&&g.name==="title"));let k=["graph","temp_humidity","uv_solar","statistics"].includes(C.type),T=["type","span","rows","display","in_bar","tile_background","tile_shadow","tile_border","tile_glow","show","id","span_medium","span_narrow","rows_compact","grow","min_width",...C.type==="metric"?["metric"]:[],...C.type==="statistics"?["preset"]:[],...C.type==="stack"?["panels","direction"]:[]],F=Object.keys(C).some(g=>!T.includes(g)),B=()=>a(Object.fromEntries(Object.entries(C).filter(([g])=>T.includes(g))));return o`<div class="pbody">
      <div class="resetbar">
        ${C.type==="stack"&&!L&&(C.panels||[]).length?o`<button class="btn sm ghost" title="Put this stack's panels straight on the grid, in the stack's place, and remove the stack"
          @click=${()=>this._breakStack(H)}><ha-icon icon="mdi:arrow-split-horizontal"></ha-icon>Break apart</button>`:u}
        <button class="btn sm ghost" ?disabled=${!F} title="Keeps the panel's type, position and size" @click=${()=>{this._flexEds.clear(),B()}}>
          <ha-icon icon="mdi:restore"></ha-icon>Reset to default</button>
      </div>
      ${x3[C.type]&&!L?o`<div class="presets"><span class="fhelp">Presets</span>${x3[C.type].map(([g,$])=>o`<button class="btn sm ghost" @click=${()=>{let E={...C};for(let[Z,X]of Object.entries($))X===null?delete E[Z]:E[Z]=X;this._flexEds.clear(),a(E)}}>${g}</button>`)}</div>`:u}
      ${k?o`<div class="grp first">Series</div>
            <wsfc-series-editor .hass=${this.hass} .panel=${C} .station=${this._station} @panel-changed=${g=>a(g.detail.panel)}></wsfc-series-editor>`:u}
      ${this._sections(C,l.length?(()=>{let g=p.findIndex(E=>E.name==="content_scale"),$=p.slice();return $.splice(g<0?$.length:g+1,0,...l),$})():p,c,a,"Size and Scaling")}
      ${A.groups?this._flat(C,`${A.label} options`,A.groups.map(([g,$,E],Z)=>this._sections(C,Z===0?$:$.map(X=>({...X,sub:g,subIcon:E})),{},a,g,!1))):A.schema.length?this._sections(C,A.schema,{},a,`${A.label} options`,!0,`${A.label} options`):u}
      ${A.flex?o`${C.type==="sky_tracker"?o`<div class="grp">Arc & sky details</div>`:u}
            ${C.type==="sky_tracker"?o`<p class="hint">Fine-tune the arc (Sun Position) and the sky (Sky Bar): heights, colors, labels, ticks and the forecast row. Layers, time window and moon are set above and override the same options here.</p>`:u}
            ${this._flexEditor(H,C,a)}`:u}
    </div>`}};R(b1,"properties",{hass:{attribute:!1},_config:{state:!0},_open:{state:!0},_openPanel:{state:!0},_addType:{state:!0}}),R(b1,"styles",[G5,D`
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
  `]);customElements.get("weather-station-flex-card-editor")||customElements.define("weather-station-flex-card-editor",b1);globalThis.__wsfcEditorHelpers={stackWithNext:i7,unstack:g3,moveIntoStack:S3};globalThis.__wsfcSchemas={STATION_FIELDS:K1,BACKGROUND_GROUPS:_1,APPEARANCE_GROUPS:O1,ALERTS_GROUPS:Y1,RESET_ACTIONS:Z3,LAYOUT_GROUPS:X1,PANEL_GROUPS:J1,GENERAL_DEFAULTS:Y,REMEMBER:w1,LABELS:q1,PANEL_TYPES:a2,COMMON_SCHEMA:P1,STACK_CHILD_SCHEMA:$1};export{S3 as moveIntoStack,i7 as stackWithNext,g3 as unstack};
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
