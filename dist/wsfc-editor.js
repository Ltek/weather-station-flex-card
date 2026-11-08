/* weather-station-flex-card 2026.11.04.111 editor — https://github.com/Ltek/weather-station-flex-card */
var R2=Object.defineProperty;var H0=Object.getOwnPropertyDescriptor;var V0=(t,C,H)=>C in t?R2(t,C,{enumerable:!0,configurable:!0,writable:!0,value:H}):t[C]=H;var B1=(t,C,H,L)=>{for(var e=L>1?void 0:L?H0(C,H):C,o=t.length-1,i;o>=0;o--)(i=t[o])&&(e=(L?i(C,H,e):i(e))||e);return L&&e&&R2(C,H,e),e};var E=(t,C,H)=>V0(t,typeof C!="symbol"?C+"":C,H);var E2=globalThis.__wsfcHost?.lit;if(!E2)throw new Error("wsfc-editor.js: the card did not provide lit; update every file of the card together");var{CSSResult:b7,LitElement:I,ReactiveElement:_7,_$LE:O7,_$LH:y7,adoptStyles:k7,css:D,defaultConverter:T7,getCompatibleStyle:F7,html:a,isServer:P7,mathml:B7,noChange:$7,notEqual:R7,nothing:u,render:E7,supportsAdoptingStyleSheets:D7,svg:W7,unsafeCSS:N7}=E2;var D2,W2;(function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"})(D2||(D2={})),(function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"})(W2||(W2={}));var Q=function(t,C,H,L){L=L||{},H=H??{};var e=new Event(C,{bubbles:L.bubbles===void 0||L.bubbles,cancelable:!!L.cancelable,composed:L.composed===void 0||L.composed});return e.detail=H,t.dispatchEvent(e),e};var N2=globalThis.__wsfcHost?.["vendor/weather-forecast-card/src/weather-forecast-card.ts"];if(!N2)throw new Error("wsfc-editor.js: the card did not provide vendor/weather-forecast-card/src/weather-forecast-card.ts; update every file of the card together");var{WeatherForecastCard:l2}=N2;var z2=globalThis.__wsfcHost?.["lit/decorators"];if(!z2)throw new Error("wsfc-editor.js: the card did not provide lit/decorators; update every file of the card together");var{customElement:I2,eventOptions:U7,property:G2,query:Q7,queryAll:j7,queryAssignedElements:q7,queryAssignedNodes:K7,queryAsync:Y7,standardProperty:X7,state:U2}=z2;var Q2="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var j2="M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z";var q2=Number.isNaN||function(C){return typeof C=="number"&&C!==C};function L0(t,C){return!!(t===C||q2(t)&&q2(C))}function e0(t,C){if(t.length!==C.length)return!1;for(var H=0;H<t.length;H++)if(!L0(t[H],C[H]))return!1;return!0}function K2(t,C){C===void 0&&(C=e0);var H=null;function L(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];if(H&&H.lastThis===this&&C(e,H.lastArgs))return H.lastResult;var i=t.apply(this,e);return H={lastResult:i,lastArgs:e,lastThis:this},i}return L.clear=function(){H=null},L}var r0=typeof global=="object"&&global&&global.Object===Object&&global,Y2=r0;var t0=typeof self=="object"&&self&&self.Object===Object&&self,M0=Y2||t0||Function("return this")(),X2=M0;var o0=X2.Symbol,H1=o0;var J2=Object.prototype,i0=J2.hasOwnProperty,a0=J2.toString,u1=H1?H1.toStringTag:void 0;function n0(t){var C=i0.call(t,u1),H=t[u1];try{t[u1]=void 0;var L=!0}catch{}var e=a0.call(t);return L&&(C?t[u1]=H:delete t[u1]),e}var C5=n0;var l0=Object.prototype,A0=l0.toString;function d0(t){return A0.call(t)}var H5=d0;var s0="[object Null]",p0="[object Undefined]",V5=H1?H1.toStringTag:void 0;function m0(t){return t==null?t===void 0?p0:s0:V5&&V5 in Object(t)?C5(t):H5(t)}var L5=m0;function c0(t){return t!=null&&typeof t=="object"}var e5=c0;var v0="[object Symbol]";function u0(t){return typeof t=="symbol"||e5(t)&&L5(t)==v0}var r5=u0;function x0(t,C){for(var H=-1,L=t==null?0:t.length,e=Array(L);++H<L;)e[H]=C(t[H],H,t);return e}var t5=x0;var f0=Array.isArray,M5=f0;var h0=1/0,o5=H1?H1.prototype:void 0,i5=o5?o5.toString:void 0;function a5(t){if(typeof t=="string")return t;if(M5(t))return t5(t,a5)+"";if(r5(t))return i5?i5.call(t):"";var C=t+"";return C=="0"&&1/t==-h0?"-0":C}var n5=a5;function Z0(t){return t==null?"":n5(t)}var $1=Z0;function S0(t,C,H){var L=-1,e=t.length;C<0&&(C=-C>e?0:e+C),H=H>e?e:H,H<0&&(H+=e),e=C>H?0:H-C>>>0,C>>>=0;for(var o=Array(e);++L<e;)o[L]=t[L+C];return o}var l5=S0;function g0(t,C,H){var L=t.length;return H=H===void 0?L:H,!C&&H>=L?t:l5(t,C,H)}var A5=g0;var w0="\\ud800-\\udfff",b0="\\u0300-\\u036f",_0="\\ufe20-\\ufe2f",O0="\\u20d0-\\u20ff",y0=b0+_0+O0,k0="\\ufe0e\\ufe0f",T0="\\u200d",F0=RegExp("["+T0+w0+y0+k0+"]");function P0(t){return F0.test(t)}var R1=P0;function B0(t){return t.split("")}var d5=B0;var s5="\\ud800-\\udfff",$0="\\u0300-\\u036f",R0="\\ufe20-\\ufe2f",E0="\\u20d0-\\u20ff",D0=$0+R0+E0,W0="\\ufe0e\\ufe0f",N0="["+s5+"]",A2="["+D0+"]",d2="\\ud83c[\\udffb-\\udfff]",z0="(?:"+A2+"|"+d2+")",p5="[^"+s5+"]",m5="(?:\\ud83c[\\udde6-\\uddff]){2}",c5="[\\ud800-\\udbff][\\udc00-\\udfff]",I0="\\u200d",v5=z0+"?",u5="["+W0+"]?",G0="(?:"+I0+"(?:"+[p5,m5,c5].join("|")+")"+u5+v5+")*",U0=u5+v5+G0,Q0="(?:"+[p5+A2+"?",A2,m5,c5,N0].join("|")+")",j0=RegExp(d2+"(?="+d2+")|"+Q0+U0,"g");function q0(t){return t.match(j0)||[]}var x5=q0;function K0(t){return R1(t)?x5(t):d5(t)}var f5=K0;function Y0(t){return function(C){C=$1(C);var H=R1(C)?f5(C):void 0,L=H?H[0]:C.charAt(0),e=H?A5(H,1).join(""):C.slice(1);return L[t]()+e}}var h5=Y0;var X0=h5("toUpperCase"),Z5=X0;function J0(t){return Z5($1(t).toLowerCase())}var V1=J0;var S5=globalThis.__wsfcHost?.["vendor/weather-forecast-card/src/types.ts"];if(!S5)throw new Error("wsfc-editor.js: the card did not provide vendor/weather-forecast-card/src/types.ts; update every file of the card together");var{CHART_ATTRIBUTES:g5,CURRENT_WEATHER_ATTRIBUTES:Y,DEFAULT_CHART_ATTRIBUTE:q4,ForecastMode:K4,MAX_TEMPERATURE_PRECISION:s2,WEATHER_EFFECTS:E1}=S5;var C7={humidity:"humidity",pressure:["pressure","atmospheric_pressure"],wind_speed:"wind_speed",wind_gust_speed:"wind_speed",visibility:"distance",dew_point:"temperature",apparent_temperature:"temperature",uv_index:void 0,ozone:void 0,cloud_coverage:void 0},q=class extends I{constructor(){super(...arguments);this._schema=K2((H,L,e)=>[...this._genericSchema(H),...this._currentWeatherSchema(H),...this._forecastSchema(H),...this._interactionsSchema(e),...this._attributeEntitiesSchema(L),...this._advancedSchema()]);this._genericSchema=H=>[{name:"entity",required:!0,selector:{entity:{domain:"weather"}},optional:!1},{name:"name",selector:{text:{}},optional:!0},{name:"forecast_mode",default:"show_both",selector:{select:{options:[{value:"show_both",label:H("ui.panel.lovelace.editor.card.weather-forecast.show_both")},{value:"show_current",label:H("ui.panel.lovelace.editor.card.weather-forecast.show_only_current")},{value:"show_forecast",label:H("ui.panel.lovelace.editor.card.weather-forecast.show_only_forecast")}]}}},{name:"default_forecast",default:"daily",optional:!0,selector:{select:{options:[{value:"hourly",label:H("ui.panel.lovelace.editor.card.weather-forecast.hourly")},{value:"daily",label:H("ui.panel.lovelace.editor.card.weather-forecast.daily")}]}}},{name:"show_condition_effects",default:!1,optional:!0,selector:{select:{multiple:!0,options:E1.map(L=>({value:L,label:V1(L)}))}}},{name:"show_moon_phase",selector:{boolean:{}},default:!0,optional:!0}];this._currentWeatherSchema=H=>[{name:"current.temperature_entity",selector:{entity:{domain:"sensor",device_class:"temperature"}},optional:!0},{name:"current.show_attributes",default:!1,optional:!0,selector:{select:{multiple:!0,options:Y.map(L=>({value:L,label:H(`ui.card.weather.attributes.${L}`)||V1(L).replace(/_/g," ")}))}}},{name:"current.secondary_info_attribute",default:"none",optional:!0,selector:{select:{options:Y.map(L=>({value:L,label:H(`ui.card.weather.attributes.${L}`)||V1(L).replace(/_/g," ")}))}}}];this._forecastSchema=H=>[{name:"forecast.mode",default:"simple",selector:{select:{options:[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}]}},optional:!0},{name:"forecast.default_chart_attribute",selector:{select:{mode:"dropdown",options:g5.map(L=>({value:L,label:L==="temperature_and_precipitation"?`${H("ui.card.weather.attributes.temperature")||"Temperature"}, ${H("ui.card.weather.attributes.precipitation")||"Precipitation"}`:H(`ui.card.weather.attributes.${L}`)||V1(L).replace(/_/g," ")}))}},optional:!0},{name:"forecast.extra_attribute",optional:!0,selector:{select:{mode:"dropdown",options:[{value:"none",label:H("ui.panel.lovelace.editor.card.weather-forecast.none")||"(no attribute)"},{value:"wind_bearing",label:H("ui.card.weather.attributes.wind_bearing")||"Wind bearing"},{value:"wind_direction",label:H("ui.card.weather.attributes.wind_direction")||"Wind direction"},{value:"precipitation_probability",label:H("ui.card.weather.attributes.precipitation_probability")||"Precipitation probability"},{value:"uv_index",label:H("ui.card.weather.attributes.uv_index")||"UV index"}]}}},{name:"forecast.scroll_to_selected",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_sun_times",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.use_color_thresholds",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_attribute_selector",selector:{boolean:{}},default:!1,optional:!0},{name:"forecast.hourly_group_size",optional:!0,selector:{number:{min:1,max:4}},default:1},{name:"forecast.hourly_slots",optional:!0,selector:{number:{min:1}}},{name:"forecast.daily_slots",optional:!0,selector:{number:{min:1}}}];this._interactionsSchema=H=>{let L=[],e=[{name:"forecast_action.tap_action",selector:{ui_action:{default_action:"toggle-forecast"}}}];return H==="chart"?(L.push("double_tap_action"),e.push({name:"forecast_action.hold_action",selector:{ui_action:{default_action:"select-forecast-attribute"}}})):L.push("hold_action","double_tap_action"),e.push({name:"",type:"optional_actions",flatten:!0,schema:L.map(o=>({name:`forecast_action.${o}`,selector:{ui_action:{default_action:"none"}}}))}),[{name:"forecast_interactions",type:"expandable",flatten:!0,schema:e},{name:"interactions",type:"expandable",flatten:!0,schema:[{name:"tap_action",selector:{ui_action:{default_action:"more-info"}}},{name:"",type:"optional_actions",flatten:!0,schema:["hold_action","double_tap_action"].map(o=>({name:o,selector:{ui_action:{default_action:"none"}}}))}]}]};this._attributeEntitiesSchema=H=>H.length===0?[]:[{name:"attribute_entities",type:"expandable",flatten:!0,schema:H.flatMap(e=>{let o=C7[e];return[{name:`current.attribute_entity_${e}`,optional:!0,selector:o?{entity:{domain:"sensor",device_class:o}}:{entity:{domain:"sensor"}}},{name:`current.attribute_label_${e}`,optional:!0,selector:{text:{}}},{name:`current.attribute_icon_${e}`,optional:!0,selector:{icon:{}}}]})}];this._advancedSchema=()=>[{name:"advanced_settings",type:"expandable",flatten:!0,schema:[{name:"forecast_types",default:"both",optional:!0,selector:{select:{options:[{value:"both",label:"Hourly and daily"},{value:"daily",label:"Daily only"},{value:"hourly",label:"Hourly only"}]}}},{name:"icons_path",selector:{text:{}},optional:!0},{name:"current.temperature_precision",optional:!0,selector:{number:{min:0,max:s2}}},{name:"forecast.temperature_precision",optional:!0,selector:{number:{min:0,max:s2}}}]}];this._computeCustomAttributeLabel=H=>{switch(H.name){case"entity":return this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"Entity";case"label":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name")||"Name";case"icon":return this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")||"Icon";default:return H.name}};this._addCustomAttribute=()=>{let H=r1(this._config.current?.show_attributes);this._commitCustomAttributes([...H,{}])};this._removeCustomAttribute=H=>{let L=r1(this._config.current?.show_attributes);L.splice(H,1),this._commitCustomAttributes(L)};this._customAttributeChanged=(H,L)=>{L.stopPropagation();let e=r1(this._config.current?.show_attributes);e[H]=L.detail.value,this._commitCustomAttributes(e)};this._computeLabel=H=>{if(H.name.startsWith("current.attribute_label_")){let e=H.name.replace("current.attribute_label_","");return`${this.localize(`ui.card.weather.attributes.${e}`)||V1(e).replace(/_/g," ")} label`}if(H.name.startsWith("current.attribute_icon_")){let e=H.name.replace("current.attribute_icon_","");return`${this.localize(`ui.card.weather.attributes.${e}`)||V1(e).replace(/_/g," ")} icon`}if(H.name.startsWith("current.attribute_entity_")){let e=H.name.replace("current.attribute_entity_",""),o=this.localize(`ui.card.weather.attributes.${e}`)||V1(e).replace(/_/g," "),i=(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase();return`${o} ${i}`}let L=H.name.startsWith("forecast_action.")?H.name.split(".")[1]:H.name;switch(L){case"entity":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${(this.hass.localize("ui.panel.lovelace.editor.card.config.required")||"required").toLocaleLowerCase()})`;case"name":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name");case"current.temperature_entity":return`${this.hass.localize("ui.card.weather.attributes.temperature")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase()}`;case"forecast_mode":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.weather_to_show");case"default_forecast":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.forecast_type");case"forecast_types":return"Forecast types to load";case"icons_path":return"Path to custom icons";case"current.show_attributes":return this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute";case"current.secondary_info_attribute":return this.hass.localize("ui.panel.lovelace.editor.card.generic.secondary_info_attribute")||"Secondary info attribute";case"forecast.extra_attribute":return`Extra ${(this.hass.localize("ui.card.weather.forecast")||"forecast").toLocaleLowerCase()} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute").toLocaleLowerCase()}`;case"forecast.mode":return"Forecast display mode";case"current.temperature_precision":return"Current temperature precision";case"forecast.temperature_precision":return"Forecast temperature precision";case"forecast.scroll_to_selected":return"Scroll to selected forecast";case"forecast.show_sun_times":return"Show sunrise and sunset times";case"forecast.use_color_thresholds":return"Use color thresholds";case"forecast.show_attribute_selector":return"Show forecast attribute selector";case"forecast.default_chart_attribute":return"Default chart forecast attribute";case"forecast.hourly_group_size":return"Hourly forecast group size";case"forecast.hourly_slots":return"Hourly forecast slots";case"forecast.daily_slots":return"Daily forecast slots";case"forecast_interactions":return`${this.hass.localize("ui.card.weather.forecast")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.interactions")||"interactions").toLocaleLowerCase()}`;case"advanced_settings":return this.hass.localize("ui.dialogs.helper_settings.generic.advanced_settings");case"show_condition_effects":return"Show condition effects";case"show_moon_phase":return"Show moon phase";case"attribute_entities":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute"} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")||"entities").toLocaleLowerCase()}`;default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${L}`)}};this._computeHelper=H=>{switch(H.name){case"current.temperature_entity":return"Optional temperature sensor entity to override the weather entity's temperature.";case"default_forecast":return"Select the default forecast type to show when forecasts are enabled. Users can still toggle between hourly and daily forecasts if both are available.";case"forecast_types":return"Limit which forecast types the card subscribes to. Loading only the forecast you display reduces websocket load, which can prevent dashboard slowdowns on resource-constrained devices.";case"current.show_attributes":return"Select which weather attributes to display in the current weather section.";case"current.secondary_info_attribute":return"Select a weather attribute to display as secondary information in the current weather section.";case"forecast.extra_attribute":return"Select an extra attribute to display below each forecast.";case"forecast_interactions":return"Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.";case"interactions":return"Action to perform when the non-forecast area of the card is interacted with.";case"icons_path":return"Path to custom weather condition icons (e.g., /local/img/weather).";case"forecast.scroll_to_selected":return"Automatically scrolls to the first hourly forecast of the selected date when switching to hourly view, and returns to the first daily entry when switching back.";case"forecast.show_sun_times":return"Displays sunrise and sunset times in the hourly forecast, and uses specific icons to visualize clear night conditions.";case"forecast.use_color_thresholds":return"Replaces solid temperature lines with a gradient based on actual values when using forecast chart mode.";case"forecast.show_attribute_selector":return"When enabled and using chart mode, shows a selector above the forecast to choose which weather attribute to display.";case"forecast.default_chart_attribute":return"The forecast attribute to visualize by default in chart mode.";case"forecast.hourly_group_size":return"Aggregate hourly forecast data into groups to reduce the number of forecast entries shown.";case"forecast.hourly_slots":return"Limit the number of hourly forecast entries to show.";case"forecast.daily_slots":return"Limit the number of daily forecast entries to show.";case"current.temperature_precision":return"The number of decimal places to show for current temperature values.";case"forecast.temperature_precision":return"The number of decimal places to show for forecast temperature values.";case"name":return"Overrides the friendly name of the entity.";case"show_condition_effects":return"Select which weather conditions initiate visual effects and animations on the card.";case"show_moon_phase":return"Shades the night-time moon to match the current lunar phase based on your Home Assistant location. Disable to always show a full moon.";case"attribute_entities":return"Override weather attribute values with custom sensor entities.";default:return}};this.localize=H=>{let L;if(this._config?.entity&&H!=="ui.card.weather.attributes.precipitation"&&H.startsWith("ui.card.weather.attributes")){let e=this.hass.states[this._config.entity];e&&(L=this.hass.formatEntityAttributeName(e,H.replace("ui.card.weather.attributes.","")))}return L||(L=this.hass.localize(H)),L}}setConfig(H){this._config=H}render(){if(!this.hass||!this._config)return u;let H=D1(this._config),L=this._getSelectedAttributes(H),e=this._schema(this.localize.bind(this),L,H["forecast.mode"]);return a`
      <ha-form
        .hass=${this.hass}
        .data=${H}
        .schema=${e}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      >
      </ha-form>
      ${this._renderCustomAttributes()}
    `}_renderCustomAttributes(){let H=r1(this._config.current?.show_attributes);return a`
      <ha-expansion-panel outlined>
        <div slot="header" role="heading" aria-level="3">
          Custom entity attributes
        </div>
        <div class="custom-attributes">
          <p>
            Display any entity's state as an attribute. Pick an entity and
            optionally override its label and icon.
          </p>
          ${H.map((L,e)=>this._renderCustomAttributeRow(L,e))}
          <ha-button
            size="small"
            appearance="filled"
            variant="brand"
            @click=${this._addCustomAttribute}
          >
            <ha-svg-icon slot="start" .path=${j2}></ha-svg-icon>
            ${this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `}_renderCustomAttributeRow(H,L){return a`
      <div class="custom-attribute-row">
        <ha-form
          .hass=${this.hass}
          .data=${H}
          .schema=${H7}
          .computeLabel=${this._computeCustomAttributeLabel}
          @value-changed=${e=>this._customAttributeChanged(L,e)}
        ></ha-form>
        <ha-icon-button
          .path=${Q2}
          .label=${this.hass.localize("ui.common.remove")||"Remove"}
          @click=${()=>this._removeCustomAttribute(L)}
        ></ha-icon-button>
      </div>
    `}_commitCustomAttributes(H){let L={...this._config,current:{...this._config.current,show_attributes:L7(this._config.current?.show_attributes,H)}};Q(this,"config-changed",{config:L})}_getSelectedAttributes(H){let L=H["current.show_attributes"];return L?Array.isArray(L)?L.map(e=>typeof e=="string"?e:e.name):[]:[]}_valueChanged(H){H.stopPropagation();let L=H.detail.value;L.forecast_mode==="show_both"?(L.show_current=!0,L.show_forecast=!0):L.forecast_mode==="show_current"?(L.show_current=!0,L.show_forecast=!1):(L.show_current=!1,L.show_forecast=!0),delete L.forecast_mode;let e=e7(L);if(delete e.temperature_entity,e?.forecast?.extra_attribute==="none"&&delete e.forecast.extra_attribute,Array.isArray(e.show_condition_effects)&&E1.every(i=>e.show_condition_effects.includes(i))&&(e.show_condition_effects=!0),e?.current){let o={},i={},d={};for(let A of Object.keys(e.current))if(A.startsWith("attribute_entity_")){let l=A.replace("attribute_entity_",""),m=e.current[A];m&&(o[l]=m),delete e.current[A]}else if(A.startsWith("attribute_label_")){let l=A.replace("attribute_label_",""),m=e.current[A];m&&(i[l]=m),delete e.current[A]}else if(A.startsWith("attribute_icon_")){let l=A.replace("attribute_icon_",""),m=e.current[A];m&&(d[l]=m),delete e.current[A]}if(Array.isArray(e.current.show_attributes)){let A=r1(this._config?.current?.show_attributes);e.current.show_attributes=w5(e.current.show_attributes,{entity:o,label:i,icon:d},A)}}Q(this,"config-changed",{config:e})}};q.styles=D`
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
  `,B1([G2({attribute:!1})],q.prototype,"hass",2),B1([U2()],q.prototype,"_config",2),q=B1([I2("wsfc-flex-core-editor")],q);var t1=t=>typeof t=="string"&&Y.includes(t),r1=t=>{if(!Array.isArray(t))return[];let C=[];for(let H of t)if(H!=null){if(typeof H=="string")t1(H)||C.push({name:H});else if(typeof H=="object"){let L=H;t1(L.name)||C.push(L)}}return C},w5=(t,C,H)=>{let L=Y.every(i=>t.includes(i)),e=Object.keys(C.entity).length>0||Object.keys(C.label).length>0||Object.keys(C.icon).length>0;return H.length===0&&!e&&L?!0:[...t.map(i=>{let d=C.entity[i],A=C.label[i],l=C.icon[i];return d||A||l?{name:i,...d?{entity:d}:{},...A?{label:A}:{},...l?{icon:l}:{}}:i}),...H]},H7=[{name:"entity",selector:{entity:{}}},{name:"label",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],V7=t=>{if(t===!0)return[...Y];if(typeof t=="string")return t1(t)?[t]:[];if(!Array.isArray(t))return[];let C=[];for(let H of t)if(H!=null){if(typeof H=="string")t1(H)&&C.push(H);else if(typeof H=="object"){let L=H;t1(L.name)&&C.push(L)}}return C},L7=(t,C)=>{let H=V7(t),L=[],e={entity:{},label:{},icon:{}};for(let o of H)typeof o=="string"?L.push(o):o.name&&(L.push(o.name),o.entity&&(e.entity[o.name]=o.entity),o.label&&(e.label[o.name]=o.label),o.icon&&(e.icon[o.name]=o.icon));return w5(L,e,C)},e7=t=>{let C={...t};for(let H of Object.keys(t)){if(!H.startsWith("forecast.")&&!H.startsWith("forecast_action.")&&!H.startsWith("current."))continue;let L=H.split(".");if(L.length<2)continue;let[e,o]=L;!e||!o||((!C[e]||typeof C[e]!="object")&&(C[e]={}),C[e][o]=t[H],delete C[H])}return C},D1=t=>{let C=r7(t);C.forecast_mode=C.show_current&&C.show_forecast?"show_both":C.show_current?"show_current":"show_forecast",C.temperature_entity&&!C["current.temperature_entity"]&&(C["current.temperature_entity"]=C.temperature_entity),delete C.temperature_entity,C.show_condition_effects===!0&&(C.show_condition_effects=[...E1]),C["current.show_attributes"]===!0&&(C["current.show_attributes"]=[...Y]);let H=C["current.show_attributes"];if(Array.isArray(H)){let L=[];for(let e of H)if(typeof e=="string")t1(e)&&L.push(e);else if(typeof e=="object"&&e!==null){let o=e;t1(o.name)&&(L.push(o.name),o.entity&&(C[`current.attribute_entity_${o.name}`]=o.entity),o.label&&(C[`current.attribute_label_${o.name}`]=o.label),o.icon&&(C[`current.attribute_icon_${o.name}`]=o.icon))}C["current.show_attributes"]=L}return C},r7=t=>{let C={};for(let H in t){let L=t[H];if(H==="forecast"&&L&&typeof L=="object"&&!Array.isArray(L)){for(let e in L)C[`forecast.${e}`]=L[e];continue}if(H==="current"&&L&&typeof L=="object"&&!Array.isArray(L)){for(let e in L)C[`current.${e}`]=L[e];continue}if(H==="forecast_action"&&L&&typeof L=="object"&&!Array.isArray(L)){for(let e in L)C[`forecast_action.${e}`]=L[e];continue}C[H]=L}return C};(()=>{let{WFC_BUILD:t,WFC_DATE_FORMATS:C,WFC_DETAILS:H,WFC_DEVICE_PREFIX:L,WFC_LABEL:e,WFC_METRIC_CATALOG:o,WFC_METRIC_LABELS:i,WFC_METRIC_POSITIONS:d,WFC_SKY_EXTRA_KEYS:A,clamp:l,wfcAutoMapDevice:m,wfcDefaultConfig:s,wfcDeviceEntities:v,wfcDeviceIdOf:f,wfcExtraKeys:w,wfcIsDeviceRef:O,wfcLabelsPosNum:F,wfcMetrics:y,wfcNormalizeSources:P,wfcResolve:Z,wfcResolveDeviceMap:B,wfcToYaml:R}=globalThis.__wsfcSectionsScope||{};if(!Z)throw new Error("Weather Flex sections: load the card before its editor");let h=q.prototype,U=new Set(["forecast_mode","default_forecast","forecast_types","forecast.mode","forecast.extra_attribute","entity","current.temperature_entity","forecast.hourly_group_size","current.temperature_precision","forecast.temperature_precision","name","current.secondary_info_attribute","show_moon_phase","icons_path"]),a1={card_appearance:"mdi:palette-outline",current_settings:"mdi:weather-partly-cloudy",forecast_settings:"mdi:chart-line",forecast_interactions:"mdi:gesture-tap",interactions:"mdi:gesture-tap-button",advanced_settings:"mdi:tune",attribute_entities:"mdi:database-outline"},n1=null;function N3(){return n1||(n1=new Set,Object.values(O2).forEach(V=>V.forEach(M=>n1.add(M)))),n1}function _2(V,M){let r=[];return V.forEach(n=>{if(!M.has(n.name))if(n.schema){let p=_2(n.schema,M);p.length&&r.push({...n,schema:p})}else r.push(n)}),r}function z3(V){let M=N3(),r=new Set([...M,...U]);V=_2(V,r);let n=new Map,p=[];V.forEach(b=>{U.has(b.name)||(b.type==="expandable"?p.push(b):n.set(b.name,b))});let x=b=>b.map(_=>n.get(_)).filter(Boolean),c=(b,_,$)=>{let T=x($);return T.length?[{name:b,type:"expandable",flatten:!0,icon:_,schema:T}]:[]},g=b=>p.find(_=>_.name===b),k=[];{let b=g("attribute_entities");b&&k.push(a1.attribute_entities?{...b,icon:a1.attribute_entities}:b)}return k}let g7=["forecast.scroll_to_selected","forecast.show_sun_times","forecast.use_color_thresholds","forecast.show_attribute_selector"],I3=["forecast_action.tap_action","forecast_action.hold_action","forecast_action.double_tap_action"],G3=["tap_action","hold_action","double_tap_action"],U3=["show_condition_effects"],Q3=[],O2={current:["current.show_attributes"],hourly:[],daily:[]},y2={card_appearance:"Card Appearance",current_settings:"Current Weather",forecast_settings:"Forecast Settings",interactions:"Card actions",forecast_interactions:"Forecast actions",advanced_settings:"Advanced settings",attribute_entities:"Metric entities",tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double tap action",entity:"Primary Weather Source (required)",name:"Custom Friendly Name","current.temperature_entity":"Custom Temperature Entity (optional)","current.show_attributes":"Built-in metrics","current.secondary_info_attribute":"Secondary info metric","forecast.show_attribute_selector":"Show forecast metric selector"},j3="Weather Flex sections";h.render=function(){if(!this.hass||!this._config)return u;let V=D1(this._config),M=this._getSelectedAttributes(V),r=this._schema(this.localize.bind(this),M,V["forecast.mode"]),n=z3(r),p=c=>y2[c.name]||this._computeLabel(c)||c.name,x=this._wfcAccordionEnabled();return a`
      ${this._wfcEditorStyle()}
      ${this.wsfcMode==="sections"?u:a`<div class="wsfc-ed-header">
        <div class="wsfc-ed-title">
          <span class="wsfc-ed-name">${j3}</span>
          <span class="wsfc-ed-ver">build ${t}</span>
        </div>
        <label class="wsfc-ed-accordion wsfc-check-row">
          <input
            type="checkbox"
            class="wsfc-checkbox"
            .checked=${x}
            @change=${c=>this._wfcSetAccordion(c.target.checked)}
          />
          <span>Auto Collapse setting panels when opening new panel</span>
        </label>
      </div>`}
      ${n.length?a`<ha-form
            .hass=${this.hass}
            .data=${V}
            .schema=${n}
            .computeLabel=${p}
            .computeHelper=${c=>this._wfcHelper(c)}
            @value-changed=${this._valueChanged}
          ></ha-form>`:u}
      ${this._wfcCardAppearancePanel()}
      ${this._wfcWeatherSourcesPanel()}
      ${this._wfcEditor()}
      ${this._wfcUserActionsPanel()}
      ${this._wfcAdvancedPanel()}
      ${this._wfcYamlPanel()}
    `},h._wfcCardAppearancePanel=function(){let V=Z(this._config).card||{},M="card";return a`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${a1.card_appearance}></ha-icon><span class="wsfc-panel-title">Card Appearance</span></summary>
        <div class="wsfc-ed-panel">
          ${this.wsfcHide&&this.wsfcHide.includes("show_condition_effects")?a`<p class="wsfc-hint">The weather animation is drawn behind the whole card (Appearance → Background), so its effects and moon phase are set there.</p>`:a`${this._wfcConfigCheckbox("show_moon_phase","Show moon phase",this._config.show_moon_phase,!0)}
          <p class="wsfc-hint">Shades the night-time moon to match the current lunar phase. Disable to always show a full moon.</p>
          ${this._wfcStockFormFor(U3)}
          <p class="wsfc-hint">Which weather conditions trigger visual effects/animations on the card.</p>`}
          ${this._wfcConfigText("icons_path","Custom icons path",this._config.icons_path,"/local/img/weather")}
          <p class="wsfc-hint">Path to custom weather condition icons (e.g. /local/img/weather).</p>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Border</div>
            ${this._wfcCheckbox("Card border",!!V.border_enabled,r=>this._wfcToggleSecField(M,"border_enabled",r))}
            ${V.border_enabled?a`
                  ${this._wfcColorField("Border color",V.border_color,r=>this._wfcSetSecField(M,"border_color",r.target.value))}
                  ${this._wfcNumField(M,"border_width","Border width","px",V.border_width,1)}
                  ${this._wfcNumField(M,"border_radius","Corner radius","px",V.border_radius,12)}
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top",V.border_top!==!1,r=>this._wfcToggleSecField(M,"border_top",r))}
                    ${this._wfcCheckbox("Bottom",V.border_bottom!==!1,r=>this._wfcToggleSecField(M,"border_bottom",r))}
                    ${this._wfcCheckbox("Left",V.border_left!==!1,r=>this._wfcToggleSecField(M,"border_left",r))}
                    ${this._wfcCheckbox("Right",V.border_right!==!1,r=>this._wfcToggleSecField(M,"border_right",r))}
                  </div>
                  <p class="wsfc-hint">Rounded corners (uncheck to square a corner):</p>
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top-left",V.corner_tl!==!1,r=>this._wfcToggleSecField(M,"corner_tl",r))}
                    ${this._wfcCheckbox("Top-right",V.corner_tr!==!1,r=>this._wfcToggleSecField(M,"corner_tr",r))}
                    ${this._wfcCheckbox("Bottom-right",V.corner_br!==!1,r=>this._wfcToggleSecField(M,"corner_br",r))}
                    ${this._wfcCheckbox("Bottom-left",V.corner_bl!==!1,r=>this._wfcToggleSecField(M,"corner_bl",r))}
                  </div>`:u}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Background</div>
            ${this._wfcColorField("Card background",V.bg_color,r=>this._wfcSetSecField(M,"bg_color",r.target.value))}
            <p class="wsfc-hint">Blank = theme card background.</p>
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Glow</div>
            ${this._wfcCheckbox("Card glow",!!V.glow_enabled,r=>this._wfcToggleSecField(M,"glow_enabled",r))}
            ${V.glow_enabled?a`
                  ${this._wfcColorField("Glow color",V.glow_color,r=>this._wfcSetSecField(M,"glow_color",r.target.value))}
                  ${this._wfcPlainSlider("Glow intensity","%",Math.round((V.glow_intensity==null?1:V.glow_intensity)*100),100,"glow_intensity",r=>this._wfcSetSecField(M,"glow_intensity",l((parseInt(r.target.value,10)||100)/100,.2,3)))}
                  ${this._wfcCheckbox("Glow only the enabled border sides",V.glow_borders_only!==!1,r=>this._wfcToggleSecField(M,"glow_borders_only",r))}`:u}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Drop shadow</div>
            ${this._wfcCheckbox("Card shadow",!!V.shadow_enabled,r=>this._wfcToggleSecField(M,"shadow_enabled",r))}
            ${V.shadow_enabled?a`
                  ${this._wfcColorField("Shadow color",V.shadow_color,r=>this._wfcSetSecField(M,"shadow_color",r.target.value))}
                  ${this._wfcNumField(M,"shadow_x","Offset X","px",V.shadow_x,0)}
                  ${this._wfcNumField(M,"shadow_y","Offset Y","px",V.shadow_y,4)}
                  ${this._wfcNumField(M,"shadow_blur","Blur","px",V.shadow_blur,16)}
                  ${this._wfcNumField(M,"shadow_spread","Spread","px",V.shadow_spread,0)}
                  ${this._wfcNumField(M,"shadow_opacity","Opacity","%",V.shadow_opacity,35)}`:u}
          </div>
        </div>
      </details>
    `};let M2=4;h._wfcEdSources=function(){return P(this._config,this.hass)},h._wfcCommitSources=function(V){let M=V.filter(b=>b&&b.ref).map(b=>{let _={};for(let T in b.overrides||{})b.overrides[T]&&(_[T]=b.overrides[T]);let $={ref:b.ref};return Object.keys(_).length&&($.overrides=_),b.disabled&&($.disabled=!0),$}),r={...this._config.metric_sources||{}};delete r.primary,delete r.fallback,delete r.custom,delete r.device_map,M.length?r.sources=M:delete r.sources;let n={...this._config,metric_sources:r},p=b=>{let _=this.hass&&this.hass.states[b],$=_&&_.attributes&&_.attributes.supported_features;return typeof $=="number"&&($&7)!==0},x=b=>b.map(_=>_.ref).filter(_=>typeof _=="string"&&_.startsWith("weather.")),c=x(M.filter(b=>!b.disabled)),g=x(M),k=c.find(p)||c[0]||g.find(p)||g[0];k&&(n.entity=k),Object.keys(r).length===0&&delete n.metric_sources,Q(this,"config-changed",{config:n})},h._wfcSetSourceRef=function(V,M){let r=this._wfcEdSources();r[V]&&(M?r[V]={ref:M,overrides:r[V].overrides||{}}:r.splice(V,1),this._wfcCommitSources(r))},h._wfcAddSource=function(V){if(!V)return;let M=this._wfcEdSources();M.length>=M2||(M.push({ref:V,overrides:{}}),this._wfcCommitSources(M))},h._wfcMoveSource=function(V,M){let r=this._wfcEdSources(),n=V+M;if(V<0||n<0||n>=r.length)return;let p=r[V];r[V]=r[n],r[n]=p,this._wfcCommitSources(r)},h._wfcRemoveSource=function(V){let M=this._wfcEdSources();V<0||V>=M.length||(M.splice(V,1),this._wfcCommitSources(M))},h._wfcToggleSourceDisabled=function(V){let M=this._wfcEdSources();M[V]&&(M[V].disabled=!M[V].disabled,this._wfcCommitSources(M))},h._wfcSetSourceOverride=function(V,M,r){let n=this._wfcEdSources();if(!n[V])return;let p={...n[V].overrides||{}};r?p[M]=r:delete p[M],n[V].overrides=p,this._wfcCommitSources(n)},h._wfcLiveValue=function(V,M){let r=this.hass&&this.hass.states[V];if(!r)return"";let n,p;return V.startsWith("weather.")?(n=r.attributes?r.attributes[M]:null,p=r.attributes&&r.attributes[M+"_unit"]):(n=r.state,p=r.attributes&&r.attributes.unit_of_measurement),n==null||n===""||n==="unknown"||n==="unavailable"?"":p?`${n} ${p}`:`${n}`},h._wfcAvailableMetrics=function(){let V=new Set;if(!this.hass)return V;let M=new Set;this._config.entity&&M.add(this._config.entity);for(let n of this._wfcEdSources())if(!n.disabled)if(n.overrides&&Object.keys(n.overrides).forEach(p=>{V.add(p),M.add(n.overrides[p])}),O(n.ref)){let p=B(this._config,this.hass,f(n.ref));Object.keys(p).forEach(x=>{V.add(x),M.add(p[x])})}else n.ref&&M.add(n.ref);M.forEach(n=>{let p=this.hass.states[n];p&&p.attributes&&Object.keys(p.attributes).forEach(x=>V.add(x))});let r=n=>{if(Array.isArray(n))for(let p of n)p&&Object.keys(p).forEach(x=>V.add(x))};if(r(this._hourlyForecastData),r(this._dailyForecastData),this.__wfcSrc&&Object.values(this.__wfcSrc).forEach(n=>{n&&(r(n.hourly),r(n.daily))}),typeof l2.__wsfcExtraEntity=="function")for(let n of["ozone"])try{l2.__wsfcExtraEntity(n,this.hass,this._config)&&V.add(n)}catch{}return V};function q3(V){return String(V).split(/[_\s]+/).filter(Boolean).map(M=>M.charAt(0).toUpperCase()+M.slice(1)).join(" ")}let K3={uv_index:"UV Index",apparent_temperature:"Apparent Temp / Feels Like",dew_point:"Dew Point",wind_gust_speed:"Wind Gust"};function Y3(V){return K3[V]||q3(V)}h._wfcMetricOptions=function(V,M){let r=this._wfcAvailableMetrics(),n=M?[{value:"",label:"High / Low Temperature"},{value:"__wfc_none__",label:"None (show nothing)"}]:[];return(V||[]).forEach(p=>{let x=Y3(p);n.push({value:p,label:r.has(p)?x:`${x} (unavailable)`})}),n},h._wfcSourceMappingEditor=function(V,M){let r=M.ref,n=M.overrides||{},p=O(r),x=p?f(r):null,c=p?m(this.hass,x):{},g=_=>{if(p)return c[_]||"";if(!r)return"";if(r.startsWith("weather.")){let $=this.hass&&this.hass.states[r];return $&&$.attributes&&$.attributes[_]!=null?r:""}return""},k=p?{include_entities:v(this.hass,x)}:{},b=_=>{let $=_.key,T=n[$]||g($),S=!!n[$],v1=T?this._wfcLiveValue(T,$):"",a2=[{name:"e",selector:{entity:k}}],n2=S?" (override)":T?"":" \u2014 none";return a`
        <div class="wsfc-srcmap-row">
          <ha-form
            .hass=${this.hass}
            .data=${{e:T}}
            .schema=${a2}
            .computeLabel=${()=>_.label+n2}
            @value-changed=${j=>this._wfcSetSourceOverride(V,$,j.detail&&j.detail.value&&j.detail.value.e||"")}
          ></ha-form>
          <span class="wsfc-srcmap-live">${v1||"\u2014"}</span>
        </div>
      `};return a`
      <details class="wsfc-detail-row2 wsfc-src-devicemap">
        <summary class="wsfc-detail-summary">
          <ha-icon class="wsfc-detail-glyph" icon="mdi:map-marker-path"></ha-icon>
          <span class="wsfc-order-name">Value mapping${p?" (auto-detected)":""}</span>
        </summary>
        <div class="wsfc-detail-fields">
          <p class="wsfc-hint wsfc-grow">${p?"How this device's sensors map to each value. Auto-detected from device class and name; pick a different entity to override. Blank = this source doesn't provide it.":"Which value this source provides. By default a weather entity provides every attribute it exposes; override any value to a different entity (e.g. your own sensor)."}</p>
          ${o.map(b)}
        </div>
      </details>
    `},h._wfcSourceSummaryList=function(V){let M=V.ref,r=V.overrides||{},n=O(M),p=n?m(this.hass,f(M)):{},x=g=>{if(r[g])return r[g];if(n)return p[g]||"";if(M&&M.startsWith("weather.")){let k=this.hass&&this.hass.states[M];return k&&k.attributes&&k.attributes[g]!=null?M:""}return""},c=[];return o.forEach(g=>{let k=x(g.key);if(!k)return;let b=this._wfcLiveValue(k,g.key);c.push(a`
        <div class="wsfc-cond-row">
          <span class="wsfc-cond-prop">${g.label}</span>
          <span class="wsfc-cond-ent" title=${k}>${k}</span>
          <span class="wsfc-cond-val">${b||"\u2014"}</span>
        </div>
      `)}),c.length?a`<div class="wsfc-cond-list">${c}</div>`:u},h._wfcSrcMapOpen=function(){return this.__wfcSrcMapOpen||(this.__wfcSrcMapOpen=new Set),this.__wfcSrcMapOpen},h._wfcToggleSrcMap=function(V){let M=this._wfcSrcMapOpen();M.has(V)?M.delete(V):M.add(V),this.requestUpdate&&this.requestUpdate()},h._wfcToggleAddSource=function(){this.__wfcAddSourceOpen=!this.__wfcAddSourceOpen,this.requestUpdate&&this.requestUpdate()},h._wfcSourceMetricCount=function(V){let M=V.ref,r=V.overrides||{},n=new Set(Object.keys(r).filter(p=>r[p]));if(O(M))Object.keys(B(this._config,this.hass,f(M))).forEach(p=>n.add(p));else if(M&&M.startsWith("weather.")){let p=this.hass&&this.hass.states[M];p&&p.attributes&&o.forEach(x=>{p.attributes[x.key]!=null&&n.add(x.key)})}return n.size},h._wfcSourceRow=function(V,M,r){let n=V.ref,p=O(n),x=this._config.entity,c=p&&this.hass&&this.hass.devices&&this.hass.devices[f(n)],g=p?c&&(c.name_by_user||c.name)||f(n):n,k=p?"Device":n&&n.startsWith("weather.")?"Weather":"Sensor",b=p?"mdi:access-point":n&&n.startsWith("weather.")?"mdi:weather-partly-cloudy":"mdi:gauge",_=!p&&n&&n.startsWith("weather."),$=_&&n===x,T=this._wfcSrcMapOpen().has(n),S=!!V.disabled,v1=this._wfcSourceMetricCount(V),a2=`${v1} value${v1===1?"":"s"} mapped`,n2=$?a`<span class="wsfc-src-pill" title="Supplies the forecast and weather condition">📡 forecast + condition</span>`:_?a`<span class="wsfc-src-pill" title="Supplies current + forecast metrics (not the card's condition)">current + forecast</span>`:a`<span class="wsfc-src-pill" title="Supplies current conditions only">current conditions</span>`,j="",l1=n&&!p?this.hass&&this.hass.states[n]:null;if(p)j=v1?"Local station \u2014 no forecast or weather condition. Keep a weather entity in the list for those.":"No entities matched known weather metrics \u2014 map them with the edit (\u270E) button.";else if(!l1)j=`\u26A0 Entity not found: ${n}`;else if(l1.state==="unavailable"||l1.state==="unknown")j=`\u26A0 Currently ${l1.state}.`;else if(_&&!$){let $2=l1.attributes&&l1.attributes.supported_features;j=typeof $2=="number"&&($2&7)===0?"Provides no forecast \u2014 current-state values only.":"Fills values the higher-priority sources don't provide."}else _||(j="Single sensor \u2014 supplies one value (set it with the edit (\u270E) button).");return a`
      <div class="wsfc-src-row ${S?"wsfc-src-off":""}">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon=${b}></ha-icon>
          <span class="wsfc-src-name">${g} <span class="wsfc-src-type">${k}</span></span>
          <ha-icon class="wsfc-ico-btn ${M===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Higher priority" @click=${()=>this._wfcMoveSource(M,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${M===r-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Lower priority" @click=${()=>this._wfcMoveSource(M,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${S?"mdi:eye-off":"mdi:eye"} title=${S?"Hidden \u2014 click to use this source":"In use \u2014 click to hide"} @click=${()=>this._wfcToggleSourceDisabled(M)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${T?"active":""}" icon="mdi:pencil" title="Edit value mapping" @click=${()=>this._wfcToggleSrcMap(n)}></ha-icon>
          <ha-icon class="wsfc-ico-btn wsfc-ico-del" icon="mdi:trash-can-outline" title="Remove source" @click=${()=>this._wfcRemoveSource(M)}></ha-icon>
        </div>
        <div class="wsfc-src-info">${n2}<span class="wsfc-src-count">${a2}</span>${S?a`<span class="wsfc-src-count">· hidden</span>`:u}</div>
        ${j?a`<div class="wsfc-src-detail">${j}</div>`:u}
        ${this._wfcSourceSummaryList(V)}
        ${T?this._wfcSourceMappingEditor(M,V):u}
      </div>
    `},h._wfcWeatherSourcesPanel=function(){let V=this._wfcEdSources(),M=V.some(c=>c.ref&&!O(c.ref)&&c.ref.startsWith("weather.")),r=V.length>=M2,n=!!this.__wfcAddSourceOpen&&!r,p=a`
      <ha-form
        .hass=${this.hass}
        .data=${{e:""}}
        .schema=${[{name:"e",selector:{entity:{}}}]}
        .computeLabel=${()=>"Add a weather entity or sensor"}
        @value-changed=${c=>{let g=c.detail&&c.detail.value&&c.detail.value.e;g&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(g))}}
      ></ha-form>`,x=a`
      <ha-form
        .hass=${this.hass}
        .data=${{d:""}}
        .schema=${[{name:"d",selector:{device:{}}}]}
        .computeLabel=${()=>"\u2026or add a local-station device"}
        @value-changed=${c=>{let g=c.detail&&c.detail.value&&c.detail.value.d;g&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(L+g))}}
      ></ha-form>`;return a`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:database-marker-outline"></ha-icon><span class="wsfc-panel-title">Weather Sources</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">An ordered list of where weather data comes from — <b>top = highest priority</b>. For each value, the card walks the list top-down and uses the first source that has it. A source can be a weather entity, a local-station <b>device</b> (e.g. Ecowitt), or any single sensor. Devices/sensors give current conditions only; the forecast and weather condition always come from the highest weather entity in the list (marked 📡). Units are shown as each source reports them (no conversion).</p>
          ${r?a`<p class="wsfc-hint">Maximum of ${M2} sources reached. Remove one to add another.</p>`:a`
              <div class="wsfc-add-btn" role="button" tabindex="0" @click=${()=>this._wfcToggleAddSource()}>
                <ha-icon icon=${n?"mdi:close":"mdi:plus"}></ha-icon>${n?"Cancel":"Add Source"}
              </div>
              ${n?a`<div class="wsfc-add-pickers">${p}${x}</div>`:u}
            `}
          ${V.length?V.map((c,g)=>this._wfcSourceRow(c,g,V.length)):a`<p class="wsfc-hint">No sources yet — add one above.</p>`}
          ${!M&&V.length?a`<p class="wsfc-src-warn">⚠ No weather entity in the list — the card needs one for the forecast and weather condition. Add a <code>weather.*</code> entity.</p>`:u}
          ${this._wfcGroup("Headline temperature")}
          ${this._wfcHeadlineTempRow()}
        </div>
      </details>
    `},h._wfcToggleHeadlineEdit=function(){this.__wfcHeadlineEdit=!this.__wfcHeadlineEdit,this.requestUpdate&&this.requestUpdate()},h._wfcHeadlineTempRow=function(){let V=this._config.current&&this._config.current.temperature_entity,M=V||"",r="";if(!M)for(let x of this._wfcEdSources()){if(x.disabled)continue;let c=this._wfcSlotEntityForKeyEd(x,"temperature");if(c&&this.hass&&this.hass.states[c]){M=c;break}}M?r=this.hass&&this.hass.states[M]&&this.hass.states[M].attributes&&this.hass.states[M].attributes.friendly_name||M:r="\u2014 none available \u2014";let n=M?this._wfcLiveValue(M,"temperature"):"",p=!!this.__wfcHeadlineEdit;return a`
      <div class="wsfc-src-row">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon="mdi:thermometer"></ha-icon>
          <span class="wsfc-src-name">${r}${V?a` <span class="wsfc-src-type">override</span>`:u}</span>
          ${n?a`<span class="wsfc-srcmap-live">${n}</span>`:u}
          <ha-icon class="wsfc-ico-btn ${p?"active":""}" icon="mdi:pencil" title="Change headline temperature source" @click=${()=>this._wfcToggleHeadlineEdit()}></ha-icon>
        </div>
        ${p?a`
            <p class="wsfc-hint">Pick an entity to force the headline temperature, or clear it to let the source list decide (recommended).</p>
            ${this._wfcStockFormFor(["current.temperature_entity"])}
          `:u}
      </div>
    `},h._wfcSlotEntityForKeyEd=function(V,M){if(V.overrides&&V.overrides[M])return V.overrides[M];let r=V.ref;if(!r)return null;if(O(r))return B(this._config,this.hass,f(r))[M]||null;if(r.startsWith("weather.")){let n=this.hass&&this.hass.states[r];return n&&n.attributes&&n.attributes[M]!=null?r:null}return null},h._wfcSetForecastTypes=function(V,M){let r=V&&M?"both":V?"hourly":M?"daily":"both",n={...this._config,forecast_types:r};Q(this,"config-changed",{config:n})},h._wfcAdvancedPanel=function(){let V=this._config.forecast_types||"both",M=V==="both"||V==="hourly",r=V==="both"||V==="daily";return a`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:tune"></ha-icon><span class="wsfc-panel-title">Advanced</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast data to load</div>
          <p class="wsfc-hint">Which forecast the card subscribes to. Loading only what you display reduces websocket load.</p>
          ${this._wfcCheckbox("Hourly",M,n=>this._wfcSetForecastTypes(n.target.checked,r))}
          ${this._wfcCheckbox("Daily",r,n=>this._wfcSetForecastTypes(M,n.target.checked))}
          ${this._wfcGroup("Temperature precision")}
          ${this._wfcConfigSlider("current.temperature_precision","Current temperature precision","",(this._config.current||{}).temperature_precision,0)}
          ${this._wfcConfigSlider("forecast.temperature_precision","Forecast temperature precision","",(this._config.forecast||{}).temperature_precision,0)}
          ${this._wfcGroup("Other")}
          ${this._wfcStockFormFor(Q3)}
        </div>
      </details>
    `},h._wfcUserActionsPanel=function(){let V=this._wfcStockFormFor(I3),M=this._wfcStockFormFor(G3),r=this._config.forecast||{};return a`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:gesture-tap"></ha-icon><span class="wsfc-panel-title">User Actions</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast actions</div>
          <p class="wsfc-hint">Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.</p>
          ${V}
          ${this._wfcConfigCheckbox("forecast.scroll_to_selected","Scroll to selected forecast",r.scroll_to_selected,!0)}
          <p class="wsfc-hint">When you tap a day to switch to the hourly view, scroll the hourly strip to that day's first hour (and back to the start when switching to daily).</p>
          ${this._wfcGroup("Card actions")}
          <p class="wsfc-hint">Action to perform when the non-forecast area of the card is interacted with.</p>
          ${M}
        </div>
      </details>
    `};let X3=[{value:"temperature_and_precipitation",label:"Temperature & precipitation"},{value:"apparent_temperature",label:"Apparent temperature"},{value:"humidity",label:"Humidity"},{value:"pressure",label:"Pressure"},{value:"uv_index",label:"UV index"}];h._wfcForecastTypeControls=function(V){let M=this._config.forecast||{},r=[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}],n=[{value:"none",label:"(no metric)"},{value:"wind_bearing",label:"Wind bearing"},{value:"wind_direction",label:"Wind direction"},{value:"precipitation_probability",label:"Precipitation probability"},{value:"uv_index",label:"UV index"}],p=b=>M[`${b}_mode`]||M.mode||"simple",x=b=>(M[`${b}_extra_attribute`]!=null?M[`${b}_extra_attribute`]:M.extra_attribute)||"none",c=b=>(M[`${b}_chart_attribute`]!=null?M[`${b}_chart_attribute`]:M.default_chart_attribute)||"temperature_and_precipitation",g=(b,_,$)=>{let T=M[`${b}_${_}`];if(T!=null)return!!T;let S=M[_];return S!=null?!!S:$},k=p(V)==="chart";return a`
      ${this._wfcGroup("Forecast display")}
      <div class="wsfc-row">
        ${this._wfcForecastSelect(`${V}_mode`,"Display mode",r,p(V),"simple")}
        ${this._wfcForecastSelect(`${V}_extra_attribute`,"Extra metric",n,x(V),"none")}
      </div>
      ${k?a`<div class="wsfc-row">
            ${this._wfcForecastSelect(`${V}_chart_attribute`,"Chart metric",X3,c(V),"temperature_and_precipitation")}
          </div>`:u}
      ${this._wfcConfigCheckbox(`forecast.${V}_show_sun_times`,"Show sunrise & sunset times",g(V,"show_sun_times",!0),!0)}
      ${k?a`
            ${this._wfcConfigCheckbox(`forecast.${V}_use_color_thresholds`,"Use color thresholds",g(V,"use_color_thresholds",!0),!0)}
            ${this._wfcConfigCheckbox(`forecast.${V}_show_attribute_selector`,"Show metric selector",g(V,"show_attribute_selector",!1),!1)}`:u}
    `},h._wfcHelper=function(V){let M=this._computeHelper?this._computeHelper(V):void 0;return typeof M=="string"&&(M=M.replace(/attributes/g,"metrics").replace(/attribute/g,"metric").replace(/Attributes/g,"Metrics").replace(/Attribute/g,"Metric")),M},h._wfcAccordionEnabled=function(){return(this._config&&this._config.wfc||{}).editor_accordion!==!1},h._wfcSetAccordion=function(V){let M=this._wfcState();M.editor_accordion=!!V,this._wfcCommit(M),this._wfcApplyAccordion()},h._wfcApplyAccordion=function(){let V=this.renderRoot||this.shadowRoot||this;!V||!V.addEventListener||this.__wfcAccordionHooked||(this.__wfcAccordionHooked=!0,V.addEventListener("toggle",M=>{let r=M.target;if(!r||!r.classList||!r.classList.contains("wsfc-panel")||(this._wfcRememberOpen(r),!r.open)||!this._wfcAccordionEnabled())return;(V.querySelectorAll?V.querySelectorAll("details.wsfc-panel"):[]).forEach(p=>{p!==r&&p.open&&(p.open=!1)})},!0))},h._wfcRememberOpen=function(V){this.__wfcOpenPanels||(this.__wfcOpenPanels=new Set);let M=this._wfcPanelKey(V);M&&(V.open?this.__wfcOpenPanels.add(M):this.__wfcOpenPanels.delete(M))},h._wfcPanelKey=function(V){let M=V.querySelector&&V.querySelector(".wsfc-panel-title");return M?(M.textContent||"").trim():""},h._wfcRestoreOpen=function(){let V=this.renderRoot||this.shadowRoot||this;!V||!V.querySelectorAll||!this.__wfcOpenPanels||V.querySelectorAll("details.wsfc-panel").forEach(M=>{let r=this._wfcPanelKey(M);r&&this.__wfcOpenPanels.has(r)&&(M.open=!0)})},h.updated=function(V){try{let M=Object.getPrototypeOf(h);M&&typeof M.updated=="function"&&M.updated.call(this,V)}catch{}this._wfcApplyAccordion(),this._wfcRestoreOpen()},h._wfcEditorStyle=function(){return a`<style>
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
    </style>`};let J3="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";h._wfcCustomMetricsBody=function(){let V=r1(this._config.current&&this._config.current.show_attributes);return a`
      <div class="custom-attributes">
        <p class="wsfc-hint">Custom metrics: display any entity's state as a metric — pick an entity and optionally override its label and icon.</p>
        ${V.map((M,r)=>this._renderCustomAttributeRow(M,r))}
        <ha-button size="small" appearance="filled" variant="brand" @click=${this._addCustomAttribute}>
          <ha-svg-icon slot="start" .path=${J3}></ha-svg-icon>
          ${this.hass.localize&&this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
        </ha-button>
      </div>
    `},h._renderCustomAttributes=function(){return this._wfcCustomMetricsBody()};let o2={order:"mdi:view-dashboard-variant-outline",details:"mdi:format-list-bulleted",dividers:"mdi:minus",options:"mdi:cog-outline"};function m1(V){if(V&&V.detail&&V.detail.value!==void 0)return V.detail.value;let M=V&&V.target;if(M)return(M.type==="checkbox"||typeof M.checked=="boolean")&&(M.tagName==="HA-SWITCH"||M.type==="checkbox")?M.checked:M.value}function i2(V){let M=V&&V.target;return M&&typeof M.checked=="boolean"?M.checked:!!(V&&V.detail&&V.detail.value)}h._wfcState=function(){return JSON.parse(JSON.stringify(Z(this._config)))},h._wfcCommit=function(V){let M={...this._config,wfc:V};Q(this,"config-changed",{config:M})},h._wfcResetSection=function(V){let r=s(this._config)[V];if(!r)return;let n=this._wfcState(),p=!!(n[V]&&n[V].show);n[V]={...JSON.parse(JSON.stringify(r)),show:p},this._wfcCommit(n)},h._wfcMoveSection=function(V,M){let r=this._wfcState(),n=r.order.indexOf(V),p=n+M;if(n<0||p<0||p>=r.order.length)return;let x=r.order[n];r.order[n]=r.order[p],r.order[p]=x,this._wfcCommit(r)},h._wfcCommitMetrics=function(V,M){let r=this._wfcState();r[V]||(r[V]={});let n=y(r[V]),p=n.map(c=>c.key),x={};n.forEach(c=>x[c.key]=c.pos),M(p,x),r[V].forecast_metric_order=p,r[V].forecast_metric_pos=x,delete r[V].forecast_temps,delete r[V].forecast_icons,delete r[V].forecast_extra,delete r[V].forecast_row_order,delete r[V].forecast_stack,this._wfcCommit(r)},h._wfcMoveMetric=function(V,M,r){let n=this._wfcState(),x=y(n[V]||{}).find(c=>c.key===M);x&&x.pos==="below"&&(r=-r),this._wfcCommitMetrics(V,(c,g)=>{let k=c.indexOf(M),b=k+r;for(;b>=0&&b<c.length&&g[c[b]]!==g[M];)b+=r;if(k<0||b<0||b>=c.length)return;let _=c[k];c[k]=c[b],c[b]=_})},h._wfcSetMetricPos=function(V,M,r){this._wfcCommitMetrics(V,(n,p)=>{p[M]=r})},h._wfcSetMetricStyle=function(V,M,r,n){let p=this._wfcState();p[V]||(p[V]={});let x={...p[V].forecast_metric_style||{}},c={...x[M]||{}};n==null||n===""?delete c[r]:c[r]=n,Object.keys(c).length?x[M]=c:delete x[M],p[V].forecast_metric_style=x,this._wfcCommit(p)},h._wfcMetricsOrder=function(V,M){let r=y(M),n=c=>r.filter(g=>g.pos===c),p=[...n("above"),...n("overlay"),...n("below").reverse(),...r.filter(c=>!["above","overlay","below"].includes(c.pos))],x=M.forecast_metric_style||{};return p.map((c,g,k)=>{let b=x[c.key]||{},_=c.key==="icons",$=c.key!=="temps";return a`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <span class="wsfc-order-name">${i[c.key]||c.key}</span>
            <select
              class="wsfc-native-select wsfc-metric-pos"
              @click=${T=>T.stopPropagation()}
              @change=${T=>this._wfcSetMetricPos(V,c.key,T.target.value)}
            >
              ${d.map(T=>a`<option value=${T.value} ?selected=${T.value===c.pos}>${T.label}</option>`)}
            </select>
            <ha-icon class="wsfc-ico-btn ${g===0||k[g-1].pos!==c.pos?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${T=>{T.preventDefault(),T.stopPropagation(),this._wfcMoveMetric(V,c.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${g===k.length-1||k[g+1].pos!==c.pos?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${T=>{T.preventDefault(),T.stopPropagation(),this._wfcMoveMetric(V,c.key,1)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <p class="wsfc-hint wsfc-grow">Leave a field at its default to fall back to the section styling below.</p>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Show every (overrides default)</span>
              <select class="wsfc-native-select" @change=${T=>this._wfcSetMetricStyle(V,c.key,"every",T.target.value)}>
                ${[{value:"",label:"Use default"},{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(T=>({value:String(T),label:T+(T>1?" hours":" hour")}))].map(T=>a`<option value=${T.value} ?selected=${T.value===(b.every!=null?String(b.every):"")}>${T.label}</option>`)}
              </select>
            </label>
            ${$?a`
                  ${this._wfcColorField("Icon color",b.icon_color,T=>this._wfcSetMetricStyle(V,c.key,"icon_color",T.target.value))}
                  ${this._wfcPlainNum("Icon size (px)",b.icon_size,T=>this._wfcSetMetricStyle(V,c.key,"icon_size",parseFloat(m1(T))||""))}`:u}
            ${_?u:a`
                  ${this._wfcColorField("Text color",b.text_color,T=>this._wfcSetMetricStyle(V,c.key,"text_color",T.target.value))}
                  ${this._wfcPlainNum("Font size (px)",b.text_size,T=>this._wfcSetMetricStyle(V,c.key,"text_size",parseFloat(m1(T))||""))}`}
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Legibility (busy backgrounds)</span>
              <select class="wsfc-native-select" @change=${T=>this._wfcSetMetricStyle(V,c.key,"contrast",T.target.value)}>
                ${[{value:"",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}].map(T=>a`<option value=${T.value} ?selected=${T.value===(b.contrast||"")}>${T.label}</option>`)}
              </select>
            </label>
          </div>
        </details>
      `})},h._wfcToggleSection=function(V,M){let r=this._wfcState();r[V]||(r[V]={}),r[V].show=i2(M),this._wfcCommit(r)},h._wfcToggleSectionShow=function(V){let M=this._wfcState();M[V]||(M[V]={}),M[V].show=!M[V].show,this._wfcCommit(M)},h._wfcSetSecNum=function(V,M,r){let n=this._wfcState(),p=parseFloat(m1(r));n[V][M]=isNaN(p)?void 0:p,this._wfcCommit(n)},h._wfcSetSecField=function(V,M,r){let n=this._wfcState();n[V]||(n[V]={}),n[V][M]=r,this._wfcCommit(n)},h._wfcToggleSecField=function(V,M,r){this._wfcSetSecField(V,M,i2(r))},h._wfcSetForecastNum=function(V,M){let r={...this._config.forecast||{}};M==null||M<=0?delete r[V]:r[V]=M,Q(this,"config-changed",{config:{...this._config,forecast:r}})},h._wfcSetConfigNum=function(V,M,r){let[n,p]=V.split("."),x={...this._config},c={...x[n]||{}},g=M==null||M===""||isNaN(Number(M))?null:Number(M);g==null?delete c[p]:c[p]=g,x[n]=c,Q(this,"config-changed",{config:x})},h._wfcConfigSlider=function(V,M,r,n,p){let x=c1(V,r||""),c=n!=null?l(Number(n),x.min,x.max):Number(p);return this._wfcSliderTpl(M,r,x,c,g=>this._wfcSetConfigNum(V,g.target.value,p))},h._wfcSetConfigStr=function(V,M,r){let n={...this._config};if(V.indexOf(".")===-1)r&&(M==null||M==="")?delete n[V]:n[V]=M;else{let[p,x]=V.split("."),c={...n[p]||{}};r&&(M==null||M==="")?delete c[x]:c[x]=M,n[p]=c}Q(this,"config-changed",{config:n})},h._wfcConfigSelect=function(V,M,r,n,p,x){let c=String(n??p);return a`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${M}</span>
        <select class="wsfc-native-select" @change=${g=>this._wfcSetConfigStr(V,g.target.value,x)}>
          ${r.map(g=>a`<option value=${String(g.value)} ?selected=${String(g.value)===c}>${g.label}</option>`)}
        </select>
      </label>
    `},h._wfcSetConfigBool=function(V,M,r){let n={...this._config},p=(x,c)=>{M===!!r?delete x[c]:x[c]=M};if(V.indexOf(".")===-1)p(n,V);else{let[x,c]=V.split("."),g={...n[x]||{}};p(g,c),n[x]=g}Q(this,"config-changed",{config:n})},h._wfcConfigCheckbox=function(V,M,r,n){let p=r==null?!!n:!!r;return this._wfcCheckbox(M,p,x=>this._wfcSetConfigBool(V,x.target.checked,n))},h._wfcConfigText=function(V,M,r,n){return a`
      <label class="wsfc-field">
        <span class="wsfc-field-label">${M}</span>
        <input
          type="text"
          class="wsfc-input"
          .value=${r||""}
          placeholder=${n||""}
          @change=${p=>this._wfcSetConfigStr(V,p.target.value)}
        />
      </label>
    `},h._wfcSetForecastField=function(V,M){let r={...this._config.forecast||{}};M==null||M===""?delete r[V]:r[V]=M,Q(this,"config-changed",{config:{...this._config,forecast:r}})},h._wfcForecastSelect=function(V,M,r,n,p){let x=String(n??p);return a`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${M}</span>
        <select class="wsfc-native-select" @change=${c=>this._wfcSetForecastField(V,c.target.value)}>
          ${r.map(c=>a`<option value=${String(c.value)} ?selected=${String(c.value)===x}>${c.label}</option>`)}
        </select>
      </label>
    `},h._wfcNumSecField=function(V,M,r,n){let p=parseFloat(m1(r));this._wfcSetSecField(V,M,isNaN(p)?n:p)},h._wfcMoveDetail=function(V,M){let r=this._wfcState(),n=r.details.items,p=n.findIndex(g=>g.key===V),x=p+M;if(p<0||x<0||x>=n.length)return;let c=n[p];n[p]=n[x],n[x]=c,this._wfcCommit(r)},h._wfcToggleDetail=function(V,M){let r=this._wfcState(),n=r.details.items.find(p=>p.key===V);n&&(n.show=i2(M)),this._wfcCommit(r)},h._wfcToggleDetailShow=function(V){let M=this._wfcState(),r=M.details.items.find(n=>n.key===V);r&&(r.show=!r.show,this._wfcCommit(M))},h._wfcSetDetailValue=function(V,M,r){let n=this._wfcState(),p=n.details.items.find(x=>x.key===V);p&&(p[M]=r),this._wfcCommit(n)},h._wfcSetDetail=function(V,M,r){let n=this._wfcState(),p=n.details.items.find(c=>c.key===V);if(!p)return;let x=m1(r);if(M==="icon_size"||M==="text_size"){let c=parseFloat(x);x=isNaN(c)?void 0:c}else(x===""||x==null)&&(x=void 0);p[M]=x,this._wfcCommit(n)},h._wfcColorField=function(V,M,r){if(this.wsfcHide&&this.wsfcHide.includes("color:"+V))return u;if(/^(Day|Night) color$/.test(V))return this._wfcColorFieldHex(V,M,r);let n=[["var(--primary-color)","Primary"],["var(--accent-color)","Accent"],["var(--primary-text-color)","Primary text"],["var(--secondary-text-color)","Secondary text"],["var(--disabled-text-color)","Disabled text"],["var(--state-active-color)","State active"],["var(--error-color)","Error"],["var(--warning-color)","Warning"],["var(--success-color)","Success"],["var(--info-color)","Info"]],p=M==null?"":String(M),x=/background|bg$|^Chip background/i.test(V),c=p===""?"default":p==="transparent"?"transparent":/^#[0-9a-fA-F]{3,8}$/.test(p)?"custom":/^var\(/.test(p)&&n.some(([_])=>_===p)?"theme":"css",g=/^#[0-9a-fA-F]{6}$/.test(p)?p:"#4fc3f7",k=_=>r({target:{value:_}}),b=_=>k(_==="default"?"":_==="transparent"?"transparent":_==="theme"?n.some(([$])=>$===p)?p:n[0][0]:_==="custom"?g:p||g);return a`
      <div class="wsfc-color-field wsfc-color4">
        <span class="wsfc-field-label wsfc-color-label">${V}</span>
        <select class="wsfc-native-select" style="flex:0 0 auto;width:auto" @change=${_=>b(_.target.value)}>
          ${[["default","Not set"],...x||c==="transparent"?[["transparent","Transparent"]]:[],["theme","Theme color"],["custom","Custom"],["css","CSS"]].map(([_,$])=>a`<option value=${_} ?selected=${_===c}>${$}</option>`)}
        </select>
        ${c==="theme"?a`<select class="wsfc-native-select" style="flex:1 1 120px;width:auto" @change=${_=>k(_.target.value)}>${n.map(([_,$])=>a`<option value=${_} ?selected=${_===p}>${$}</option>`)}</select>`:c==="custom"?a`<input type="color" class="wsfc-color-input" .value=${g} @change=${_=>k(_.target.value)} />`:c==="css"?a`<input type="text" class="wsfc-native-select" style="flex:1 1 120px;width:auto" .value=${p} @change=${_=>k(_.target.value)} />`:u}
        ${c!=="default"&&c!=="transparent"?a`<span style="width:16px;height:16px;border-radius:50%;flex:0 0 auto;border:1px solid var(--divider-color);background:${p}"></span>`:u}
      </div>
    `},h._wfcColorFieldHex=function(V,M,r){return a`
      <div class="wsfc-color-field">
        <span class="wsfc-field-label wsfc-color-label">${V}</span>
        <input
          type="color"
          class="wsfc-color-input"
          .value=${M||"#888888"}
          @change=${r}
          @input=${r}
        />
        <span class="wsfc-color-hex">${M||"theme default"}</span>
        <button
          type="button"
          class="wsfc-color-reset"
          title="Reset to theme default"
          ?disabled=${!!!M}
          @click=${()=>r({target:{value:""}})}
        >Reset</button>
      </div>
    `},h._wfcSelect=function(V,M,r,n,p,x){if(this.wsfcHide&&this.wsfcHide.includes(M))return u;let c=String(p??x);return a`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${r}</span>
        <select
          class="wsfc-native-select"
          @change=${g=>this._wfcSetSecField(V,M,g.target.value)}
        >
          ${n.map(g=>a`<option value=${String(g.value)} ?selected=${String(g.value)===c}>${g.label}</option>`)}
        </select>
      </label>
    `};let k2={px:{min:0,max:60,step:1},"%":{min:0,max:100,step:1},"":{min:1,max:72,step:1}};function c1(V,M){return/chip_scale/.test(V)?{min:50,max:250,step:5}:/chip_columns/.test(V)?{min:1,max:6,step:1}:/^columns$|\.columns$/.test(V)?{min:1,max:4,step:1}:/chip_text_size|chip_icon_size/.test(V)?{min:0,max:48,step:1}:/clock_font_size|clock_date_font_size/.test(V)?{min:0,max:100,step:1}:/header_icon_size/.test(V)?{min:0,max:140,step:2}:/header_secondary_size/.test(V)?{min:0,max:48,step:1}:/header_state_size|header_temp_size/.test(V)?{min:0,max:64,step:1}:/global_icon_size|global_text_size/.test(V)?{min:0,max:48,step:1}:/shadow_x|shadow_y|shadow_spread/.test(V)?{min:-40,max:40,step:1}:/shadow_blur/.test(V)?{min:0,max:80,step:1}:/border_radius/.test(V)?{min:0,max:48,step:1}:/border_width/.test(V)?{min:0,max:12,step:1}:/hourly_slots/.test(V)?{min:0,max:48,step:1}:/daily_slots/.test(V)?{min:0,max:14,step:1}:/labels_position|opacity/.test(V)?{min:0,max:100,step:1}:/indent/.test(V)?{min:0,max:120,step:2}:/height/.test(V)?{min:10,max:200,step:2}:/^clock_(font_size|date_font_size)$/.test(V)?{min:8,max:100,step:1}:/font_size|_size$/.test(V)?{min:8,max:48,step:1}:/_width$/.test(V)?{min:1,max:12,step:1}:/_length$/.test(V)?{min:5,max:100,step:5}:/hourly_group_size/.test(V)?{min:1,max:4,step:1}:/temperature_precision/.test(V)?{min:0,max:2,step:1}:/hours/.test(V)?{min:1,max:48,step:1}:k2[M]||k2.px}h._wfcNumField=function(V,M,r,n,p,x){if(this.wsfcHide&&this.wsfcHide.includes(M))return u;let c=c1(M,n||""),g=p!=null?Number(p):Number(x);return this._wfcSliderTpl(r,n,c,g,k=>this._wfcNumSecField(V,M,k,x))},h._wfcPlainSlider=function(V,M,r,n,p,x){let c=c1(p||"",M||""),g=r!=null?Number(r):Number(n);return this._wfcSliderTpl(V,M,c,g,x)},h._wfcSlotSlider=function(V,M,r){let n=c1(M,""),p=r!=null?l(Number(r),n.min,n.max):0,x=c=>Number(c)<=0?"All":String(c);return a`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${V}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${n.min}
          max=${n.max}
          step=${n.step}
          .value=${String(p)}
          @input=${c=>{let g=c.target.closest(".wsfc-slider-row"),k=g&&g.querySelector(".wsfc-slider-num");k&&(k.textContent=x(c.target.value))}}
          @change=${c=>this._wfcSetForecastNum(M,parseInt(c.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${x(p)}></span></span>
      </div>
    `},h._wfcAutoSizeField=function(V,M,r){if(this.wsfcHide&&this.wsfcHide.includes(M))return u;let n=c1(M,""),p=this._wfcState()[V]||{},x=l(parseInt(p[M],10)||0,n.min,n.max),c=g=>Number(g)<=0?"Auto":`${g}px`;return a`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${r}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${n.min}
          max=${n.max}
          step=${n.step}
          .value=${String(x)}
          @input=${g=>{let k=g.target.closest(".wsfc-slider-row"),b=k&&k.querySelector(".wsfc-slider-num");b&&(b.textContent=c(g.target.value))}}
          @change=${g=>this._wfcSetSecField(V,M,parseInt(g.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${c(x)}></span></span>
      </div>
    `},h._wfcSliderTpl=function(V,M,r,n,p){let x=M||"";return a`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${V}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${r.min}
          max=${r.max}
          step=${r.step}
          .value=${String(n)}
          @input=${c=>{let g=c.target.closest(".wsfc-slider-row"),k=g&&g.querySelector(".wsfc-slider-num");k&&(k.textContent=c.target.value)}}
          @change=${p}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${String(n)}></span>${x}</span>
      </div>
    `},h._wfcCheckbox=function(V,M,r){return this.wsfcHide&&this.wsfcHide.includes("check:"+V)?u:a`
      <label class="wsfc-check-row">
        <input type="checkbox" class="wsfc-checkbox" .checked=${!!M} @change=${r} />
        <span>${V}</span>
      </label>
    `},h._wfcGroup=function(V){return V&&this.wsfcHide&&this.wsfcHide.includes("group:"+V)?u:V?a`<div class="wsfc-group-div"><span class="wsfc-group-label">${V}</span></div>`:a`<div class="wsfc-group-div"></div>`},h._wfcSubPanel=function(V,M){return a`
      <details class="wsfc-detail-row2 wsfc-subpanel">
        <summary><span class="wsfc-subpanel-title">${V}</span></summary>
        <div class="wsfc-subpanel-body">${M}</div>
      </details>
    `},h._wfcFlushControls=function(V,M){return a`
      ${this._wfcCheckbox("Flush to card edges (no left/right padding)",M.flush_edges,r=>this._wfcToggleSecField(V,"flush_edges",r))}
      ${this._wfcCheckbox("Flush to card top (no upper padding)",M.flush_top,r=>this._wfcToggleSecField(V,"flush_top",r))}
      ${this._wfcCheckbox("Flush to card bottom (no lower padding)",M.flush_bottom,r=>this._wfcToggleSecField(V,"flush_bottom",r))}
    `},h._wfcTextControls=function(V,M,r,n){if(this.wsfcHide&&this.wsfcHide.includes(`${M}_font_size`))return u;let p=this._wfcState()[V]||{};return a`
      <div class="wsfc-sub-title">${r}</div>
      <div class="wsfc-row">
        ${this._wfcNumField(V,`${M}_font_size`,"Size","px",p[`${M}_font_size`],n)}
        ${this._wfcSelect(V,`${M}_font_weight`,"Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],p[`${M}_font_weight`],"400")}
      </div>
      ${this._wfcColorField("Color",p[`${M}_color`],x=>this._wfcSetSecField(V,`${M}_color`,x.target.value))}
    `};let T2=[{value:"solid",label:"Solid"},{value:"dashed",label:"Dashed"},{value:"dotted",label:"Dotted"},{value:"double",label:"Double"}];h._wfcDividerControls=function(V,M){return a`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section Divider Above",M.divider_above,r=>this._wfcToggleSecField(V,"divider_above",r))}
      ${M.divider_above?a`
            <div class="wsfc-row">
              ${this._wfcNumField(V,"divider_above_width","Thickness","px",M.divider_above_width,1)}
              ${this._wfcNumField(V,"divider_above_length","Length","%",M.divider_above_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(V,"divider_above_style","Line style",T2,M.divider_above_style,"solid")}
            </div>`:u}

      ${this._wfcCheckbox("Section Divider Below",M.divider_below,r=>this._wfcToggleSecField(V,"divider_below",r))}
      ${M.divider_below?a`
            <div class="wsfc-row">
              ${this._wfcNumField(V,"divider_below_width","Thickness","px",M.divider_below_width,1)}
              ${this._wfcNumField(V,"divider_below_length","Length","%",M.divider_below_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(V,"divider_below_style","Line style",T2,M.divider_below_style,"solid")}
            </div>`:u}

      ${M.divider_above||M.divider_below?this._wfcColorField("Divider color",M.divider_color,r=>this._wfcSetSecField(V,"divider_color",r.target.value)):u}
    `},h._wfcBackgroundControls=function(V,M){let r=!!M.background_enabled;return a`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section background",r,n=>this._wfcToggleSecField(V,"background_enabled",n))}
      ${r?a`
            ${this._wfcColorField("Background color",M.background_color,n=>this._wfcSetSecField(V,"background_color",n.target.value))}
            ${this._wfcPlainSlider("Transparency (0 = solid, 100 = invisible)","%",M.background_opacity==null?80:M.background_opacity,80,"opacity",n=>this._wfcSetSecField(V,"background_opacity",l(parseInt(n.target.value,10)||0,0,100)))}`:u}
    `},h._wfcSectionStyles=function(V,M){return this.wsfcHide&&this.wsfcHide.includes("group:Section Styles")?u:this._wfcSubPanel("Section Styles",a`
        ${this._wfcFlushControls(V,M)}
        ${this._wfcDividerControls(V,M)}
        ${this._wfcBackgroundControls(V,M)}`)},h._wfcStockForm=function(V){return this._wfcStockFormFor(O2[V])},h._wfcStockFormFor=function(V){if(!V||!V.length)return u;let M=D1(this._config),r=this._getSelectedAttributes(M),n=this._schema(this.localize.bind(this),r,"chart"),p=new Map,x=k=>k.forEach(b=>{b.schema?x(b.schema):p.set(b.name,b)});x(n);let c=V.map(k=>p.get(k)).filter(Boolean);if(!c.length)return u;let g=k=>y2[k.name]||this._computeLabel(k)||k.name;return a`
      <ha-form
        .hass=${this.hass}
        .data=${M}
        .schema=${c}
        .computeLabel=${g}
        .computeHelper=${k=>this._wfcHelper(k)}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `},h._wfcTitleControls=function(V,M){return a`
      ${this._wfcCheckbox("Show Title Row",M.title_show,r=>this._wfcToggleSecField(V,"title_show",r))}
      ${M.title_show?a`
            <label class="wsfc-field">
              <span class="wsfc-field-label">Title text</span>
              <input
                type="text"
                class="wsfc-input"
                .value=${M.title_text||""}
                @change=${r=>this._wfcSetSecField(V,"title_text",r.target.value)}
              />
            </label>
            <ha-icon-picker
              label="Title icon"
              .value=${M.title_icon||""}
              @value-changed=${r=>this._wfcSetSecField(V,"title_icon",r.detail&&r.detail.value||"")}
            ></ha-icon-picker>
            <div class="wsfc-row">
              ${this._wfcSelect(V,"title_text_align","Text placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],M.title_text_align,"left")}
              ${this._wfcSelect(V,"title_icon_align","Icon placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],M.title_icon_align,"left")}
            </div>
            ${this._wfcNumField(V,"title_font_size","Text size","px",M.title_font_size,15)}
            ${this._wfcSelect(V,"title_font_weight","Text weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],M.title_font_weight,"600")}
            ${this._wfcNumField(V,"title_icon_size","Icon size","px",M.title_icon_size,20)}
            ${this._wfcNumField(V,"title_indent","Indent","px",M.title_indent,0)}
            <div class="wsfc-row">
              ${this._wfcColorField("Text color",M.title_color,r=>this._wfcSetSecField(V,"title_color",r.target.value))}
              ${this._wfcColorField("Icon color",M.title_icon_color,r=>this._wfcSetSecField(V,"title_icon_color",r.target.value))}
            </div>
          `:u}
    `},h._wfcSectionOptionsBody=function(V,M){let r=M[V]||{},n=V==="details",p=V==="current",x=V==="sun_position",c=V==="sun_arc",g=V==="hourly",k=V==="daily",b=this._config.forecast||{},_=this._config.current||{},$=l(parseInt(r.columns,10)||2,1,4),T=this._wfcMetricOptions(typeof Y<"u"?Y:[],!0);return a`
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
          ${p?a`
                ${this._wfcConfigText("name","Custom Friendly Name",this._config.name,"")}
                <p class="wsfc-hint">Friendly name shown under the Current Weather value. Enter a single space to hide it.</p>`:u}
          ${p?a`
                ${this._wfcGroup("Header sizes")}
                ${this._wfcAutoSizeField(V,"header_icon_size","Condition icon size")}
                ${this._wfcAutoSizeField(V,"header_state_size","Condition text size")}
                ${this._wfcAutoSizeField(V,"header_temp_size","Temperature size")}
                ${this._wfcAutoSizeField(V,"header_secondary_size","Temperature sub-header size")}

                ${this._wfcGroup("Current Weather Header metrics")}
                ${this._wfcConfigSelect("current.secondary_info_attribute","Temperature sub-header Metric",T,_.secondary_info_attribute||"","",!0)}
                <p class="wsfc-hint">Shown just under the main temperature. "High / Low Temperature" (the default) shows today's forecast high/low; "None" hides this line entirely.</p>
                <p class="wsfc-hint">Metrics shown in the header row (beneath the main temperature). Pick built-in weather metrics and/or add any entity's state as a custom metric — both appear here.</p>
                ${this._wfcStockForm(V)}
                ${this._wfcCustomMetricsBody()}`:this._wfcStockForm(V)}
          ${g?a`
                ${this._wfcForecastTypeControls("hourly")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Hourly forecast slots (0 = All)","hourly_slots",b.hourly_slots)}
                ${this._wfcConfigSlider("forecast.hourly_group_size","Hourly forecast group size","",b.hourly_group_size,1)}`:u}
          ${k?a`
                ${this._wfcForecastTypeControls("daily")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Daily forecast slots (0 = All)","daily_slots",b.daily_slots)}`:u}
          ${n?a`
                ${this._wfcGroup("Layout")}
                ${r.chips?a`
                      ${this._wfcSelect(V,"chip_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],r.chip_layout==="column"?"wrap":r.chip_layout||"wrap","wrap")}
                      ${(r.chip_layout||"wrap")==="grid"?a`
                            ${this._wfcCheckbox("Set a fixed number of columns",parseInt(r.chip_columns,10)>0,S=>this._wfcSetSecField(V,"chip_columns",S.target.checked?l(parseInt(r.chip_columns,10)||2,1,6):0))}
                            ${parseInt(r.chip_columns,10)>0?this._wfcNumField(V,"chip_columns","Columns","",parseInt(r.chip_columns,10)||2,2):u}`:u}`:a`
                      ${this._wfcSelect(V,"details_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],r.details_layout||"grid","grid")}
                      ${(r.details_layout||"grid")==="grid"?this._wfcNumField(V,"columns","Columns","",$,2):u}`}

                ${this._wfcGroup("Chips")}
                ${this._wfcCheckbox("Display metrics as chips",!!r.chips,S=>this._wfcToggleSecField(V,"chips",S))}
                ${r.chips?a`
                      ${this._wfcCheckbox("Pill (fully rounded ends)",r.chip_pill!=null?!!r.chip_pill:r.chip_shape!=="rounded"&&r.chip_shape!=="square",S=>this._wfcSetSecField(V,"chip_pill",S.target.checked))}
                      ${(r.chip_pill!=null?r.chip_pill:r.chip_shape!=="rounded"&&r.chip_shape!=="square")?u:this._wfcNumField(V,"chip_radius","Corner radius (0 = square)","px",r.chip_radius,8)}
                      ${this._wfcPlainSlider("Chip scale","%",Math.round((r.chip_scale==null?1:r.chip_scale)*100),100,"chip_scale",S=>this._wfcSetSecField(V,"chip_scale",l((parseInt(S.target.value,10)||100)/100,.5,2.5)))}
                      ${this._wfcAutoSizeField(V,"chip_text_size","Text size")}
                      ${this._wfcColorField("Chip text",r.chip_text_color,S=>this._wfcSetSecField(V,"chip_text_color",S.target.value))}
                      ${this._wfcColorField("Chip background",r.chip_bg,S=>this._wfcSetSecField(V,"chip_bg",S.target.value))}
                      ${this._wfcColorField("Chip border",r.chip_border_color,S=>this._wfcSetSecField(V,"chip_border_color",S.target.value))}
                      ${this._wfcCheckbox("Show icon on chip",r.chip_show_icon!==!1,S=>this._wfcToggleSecField(V,"chip_show_icon",S))}
                      ${r.chip_show_icon!==!1?a`
                            ${this._wfcSelect(V,"chip_icon_source","Chip icon",[{value:"auto",label:"Metric's default icon"},{value:"entity",label:"Value's custom icon"},{value:"none",label:"None"}],r.chip_icon_source,"auto")}
                            ${this._wfcAutoSizeField(V,"chip_icon_size","Icon size")}
                            ${this._wfcColorField("Icon color",r.chip_icon_color,S=>this._wfcSetSecField(V,"chip_icon_color",S.target.value))}`:u}
                      ${this._wfcCheckbox("Show metric name in chip",!!r.chip_show_name,S=>this._wfcToggleSecField(V,"chip_show_name",S))}
                      ${this._wfcCheckbox("Hide chip when value is off / unknown",!!r.chip_hide_when_off,S=>this._wfcToggleSecField(V,"chip_hide_when_off",S))}`:u}

                ${r.chips?a`
                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">Enable and reorder which metrics appear as chips.</p>
                      ${this._wfcDetailRows(M)}`:a`
                      ${this._wfcGroup("Global value styling")}
                      <p class="wsfc-hint">Defaults for every value. Individual values can override these by switching to “Custom”.</p>
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(V,"global_icon_size","Icon size")}
                        ${this._wfcAutoSizeField(V,"global_text_size","Text size")}
                      </div>
                      <div class="wsfc-row">
                        ${this._wfcColorField("Icon color",r.global_icon_color,S=>this._wfcSetSecField(V,"global_icon_color",S.target.value))}
                        ${this._wfcColorField("Text color",r.global_text_color,S=>this._wfcSetSecField(V,"global_text_color",S.target.value))}
                      </div>

                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">
                        Enable each value and reorder it. Each value uses the global styling above
                        unless set to “Custom”.
                      </p>
                      ${this._wfcDetailRows(M)}`}
              `:u}

          ${x?a`
                ${this._wfcSubPanel("Time",a`
                    ${this.wsfcHide&&this.wsfcHide.includes("timeframe_mode")?u:this._wfcGroup("Timeframe")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(V,"timeframe_mode","Time Frame",[{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"},{value:"match_arc",label:"Match Sun Position arc"}],r.timeframe_mode,"hours")}
                      ${r.timeframe_mode==="hours"||r.timeframe_mode==null?a`
                            ${this._wfcNumField(V,"timeframe_hours","Hours","",r.timeframe_hours,24)}
                            ${this._wfcSelect(V,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],r.timeframe_anchor,"now_left")}
                          `:u}
                    </div>
                    ${this._wfcGroup("Time labels & tick marks")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(V,"times_position","Time Labels",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],r.times_position==="center"?"overlay":r.times_position,"below")}
                      ${this._wfcSelect(V,"ticks_position","Time tick marks",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],r.ticks_position,"hidden")}
                    </div>
                    ${this._wfcSelect(V,"ticks_every","Show a label / tick every",[{value:0,label:"Auto (fit ~8 across)"},...[1,2,3,4,6,8,12].map(S=>({value:S,label:S+(S>1?" hours":" hour")}))],r.ticks_every==null?0:r.ticks_every,0)}
                    <p class="wsfc-hint">Controls the spacing of both the time labels and the tick marks.</p>
                    ${this._wfcTextControls(V,"times","Time labels",11)}`)}

                ${this._wfcSubPanel("Current-time marker",a`
                    <div class="wsfc-row">
                      ${this._wfcColorField("Marker color",r.marker_color,S=>this._wfcSetSecField(V,"marker_color",S.target.value))}
                      ${this._wfcNumField(V,"marker_opacity","Marker opacity","%",r.marker_opacity==null?100:r.marker_opacity,100)}
                    </div>`)}

                ${this._wfcSubPanel("Sunrise & sunset markers",a`
                    <div class="wsfc-row">
                      ${this._wfcSelect(V,"ss_markers_position","Position",[{value:"hidden",label:"Hide"},{value:"overlay",label:"On the bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],r.ss_markers_position,"hidden")}
                    </div>
                    ${r.ss_markers_position&&r.ss_markers_position!=="hidden"?a`<div class="wsfc-row">
                          ${this._wfcColorField("Marker color",r.ss_markers_color,S=>this._wfcSetSecField(V,"ss_markers_color",S.target.value))}
                          ${this._wfcNumField(V,"ss_markers_opacity","Marker opacity","%",r.ss_markers_opacity==null?100:r.ss_markers_opacity,100)}
                        </div>`:u}`)}

                ${this._wfcSubPanel("Forecast Weather Metrics",a`
                    ${this._wfcSubPanel("Metrics Defaults",a`
                        ${this._wfcCheckbox("Use Current Weather Metrics icons",!!r.forecast_metric_detail_icons,S=>this._wfcToggleSecField(V,"forecast_metric_detail_icons",S))}
                        ${this._wfcCheckbox("Temperature text beside the condition icon",!!r.forecast_temp_with_icon,S=>this._wfcToggleSecField(V,"forecast_temp_with_icon",S))}
                        <div class="wsfc-row">
                          ${this._wfcSelect(V,"forecast_every","Show every",[{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(S=>({value:S,label:S+(S>1?" hours":" hour")}))],r.forecast_every,3)}
                          ${this._wfcNumField(V,"forecast_font_size","Text size","px",r.forecast_font_size,11)}
                          ${this._wfcNumField(V,"forecast_icon_size","Icon size","px",r.forecast_icon_size,22)}
                        </div>
                        ${this._wfcColorField("Temperature color",r.forecast_temp_color,S=>this._wfcSetSecField(V,"forecast_temp_color",S.target.value))}
                        ${this._wfcColorField("Icon color",r.forecast_icon_color,S=>this._wfcSetSecField(V,"forecast_icon_color",S.target.value))}
                        ${A.some(S=>r.forecast_metric_pos&&r.forecast_metric_pos[S]&&r.forecast_metric_pos[S]!=="hidden"||w(r).includes(S))?this._wfcColorField("Metric Text Color",r.forecast_extra_color,S=>this._wfcSetSecField(V,"forecast_extra_color",S.target.value)):u}`)}
                    <p class="wsfc-hint">Show/hide and place each metric, and drag the order to control exactly where each sits on the bar. Listed top to bottom as they appear on the bar; the arrows move a metric up or down among those in the same place (change its place with the drop-down). Expand a metric to override the defaults (including its own "Show every").</p>
                    ${this._wfcMetricsOrder(V,r)}`)}

                ${this._wfcSubPanel("Bar Size & Colors",a`
                    ${this._wfcNumField(V,"height","Bar height","px",r.height,44)}
                    <p class="wsfc-hint">Gradient colors — blank = built-in palette.</p>
                    ${this._wfcCheckbox("Adjust colors for forecast (clouds)",r.weather_adjust!==!1,S=>this._wfcToggleSecField(V,"weather_adjust",S))}
                    <div class="wsfc-row">
                      ${this._wfcColorField("Day color",r.day_color,S=>this._wfcSetSecField(V,"day_color",S.target.value))}
                      ${this._wfcColorField("Night color",r.night_color,S=>this._wfcSetSecField(V,"night_color",S.target.value))}
                    </div>`)}

                ${this._wfcSectionStyles(V,r)}
              `:u}

          ${c?a`
                <div class="wsfc-row">
                  ${this._wfcNumField(V,"height","Arc height","px",r.height,90)}
                  ${this._wfcSelect(V,"time_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],r.time_format,"auto")}
                </div>

                ${this.wsfcHide&&this.wsfcHide.includes("timeframe_mode")?u:this._wfcGroup("Timeframe")}
                <div class="wsfc-row">
                  ${this._wfcSelect(V,"timeframe_mode","Time Frame",[{value:"sunrise_sunset",label:"Sunrise \u2192 sunset (fill width)"},{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"}],r.timeframe_mode,"sunrise_sunset")}
                  ${r.timeframe_mode==="hours"?a`
                        ${this._wfcNumField(V,"timeframe_hours","Hours","",r.timeframe_hours,24)}
                        ${this._wfcSelect(V,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],r.timeframe_anchor,"now_left")}
                      `:u}
                </div>
                <div class="wsfc-hint">When the baseline is the Sky Bar, the arc matches that bar's timeframe automatically.</div>

                <div class="wsfc-hint">Labels vertical position: 0 = below the arc, 50 = mid, 100 = above.</div>
                ${this._wfcPlainSlider("Labels position","",F(r.labels_position),0,"labels_position",S=>this._wfcSetSecField(V,"labels_position",l(parseInt(S.target.value,10)||0,0,100)))}
                ${this._wfcGroup("Sun marker")}
                <ha-icon-picker
                  label="Sun icon (blank = filled dot)"
                  .value=${r.sun_icon||""}
                  @value-changed=${S=>this._wfcSetSecField(V,"sun_icon",S.detail&&S.detail.value||"")}
                ></ha-icon-picker>
                ${this.wsfcHide&&this.wsfcHide.includes("night_moon")?u:this._wfcCheckbox("Use a moon icon at night (between sunset & sunrise)",!!r.night_moon,S=>this._wfcToggleSecField(V,"night_moon",S))}
                ${r.night_moon&&!(this.wsfcHide&&this.wsfcHide.includes("night_moon"))?a`<ha-icon-picker
                      label="Moon icon"
                      .value=${r.moon_icon||"mdi:weather-night"}
                      @value-changed=${S=>this._wfcSetSecField(V,"moon_icon",S.detail&&S.detail.value||"mdi:weather-night")}
                    ></ha-icon-picker>`:u}

                ${this._wfcGroup("Baseline")}
                <div class="wsfc-row">
                  ${this._wfcSelect(V,"baseline_mode","Baseline",[{value:"line",label:"Horizon line"},{value:"sky",label:"Sky Bar"}],r.baseline_mode,"line")}
                </div>
                <div class="wsfc-hint">“Sky Bar” reuses the settings from the Sky Bar panel.</div>

                ${this._wfcGroup("Tick marks")}
                ${this._wfcCheckbox("Show tick marks on the arc",r.show_arc_ticks,S=>this._wfcToggleSecField(V,"show_arc_ticks",S))}
                ${this._wfcCheckbox("Show tick marks on the baseline",r.show_base_ticks!==!1,S=>this._wfcToggleSecField(V,"show_base_ticks",S))}
                <div class="wsfc-row">
                  ${this._wfcSelect(V,"sunrise_sunset_ticks","Sunrise & sunset ticks",[{value:"none",label:"None"},{value:"arc",label:"On the arc"},{value:"base",label:"On the baseline"},{value:"both",label:"Arc and baseline"}],r.sunrise_sunset_ticks,"none")}
                </div>
                ${this._wfcColorField("Tick color",r.tick_color,S=>this._wfcSetSecField(V,"tick_color",S.target.value))}

                ${this._wfcGroup("Sunrise / sunset labels")}
                ${this._wfcCheckbox("Show times",r.show_times!==!1,S=>this._wfcToggleSecField(V,"show_times",S))}
                ${this._wfcCheckbox("Show captions (sunrise / sunset)",r.show_captions!==!1,S=>this._wfcToggleSecField(V,"show_captions",S))}

                ${this._wfcGroup("Sunrise / sunset icons")}
                ${this._wfcCheckbox("Show sunrise & sunset icons",r.show_ss_icons,S=>this._wfcToggleSecField(V,"show_ss_icons",S))}
                ${r.show_ss_icons?a`
                      <ha-icon-picker
                        label="Sunrise icon"
                        .value=${r.sunrise_icon||"mdi:weather-sunset-up"}
                        @value-changed=${S=>this._wfcSetSecField(V,"sunrise_icon",S.detail&&S.detail.value||"")}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Sunset icon"
                        .value=${r.sunset_icon||"mdi:weather-sunset-down"}
                        @value-changed=${S=>this._wfcSetSecField(V,"sunset_icon",S.detail&&S.detail.value||"")}
                      ></ha-icon-picker>
                      <div class="wsfc-row">
                        ${this._wfcSelect(V,"ss_icon_position","Icon placement",[{value:"left",label:"Left of text"},{value:"right",label:"Right of text"},{value:"above",label:"Above text"},{value:"below",label:"Below text"}],r.ss_icon_position,"left")}
                        ${this._wfcNumField(V,"ss_icon_size","Icon size","px",r.ss_icon_size,20)}
                      </div>
                      ${this._wfcColorField("Icon color",r.ss_icon_color,S=>this._wfcSetSecField(V,"ss_icon_color",S.target.value))}
                    `:u}

                ${this._wfcTextControls(V,"time","Time text",13)}
                ${this._wfcTextControls(V,"caption","Sunrise / sunset caption",11)}
              `:u}

          ${x?u:this._wfcSectionStyles(V,r)}
        </div>
    `};let F2={current:"mdi:weather-partly-cloudy",details:"mdi:format-list-bulleted",hourly:"mdi:clock-outline",daily:"mdi:calendar-week",sun_position:"mdi:white-balance-sunny",sun_arc:"mdi:sine-wave"};h._wfcPlainNum=function(V,M,r){return this._wfcPlainSlider(V,"px",M,16,"_size",r)},h._wfcDetailRows=function(V){return V.details.items.map((r,n,p)=>{let x=H[r.key]||{};return a`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <ha-icon class="wsfc-detail-glyph wsfc-glyph-accent" icon=${r.icon||x.icon||"mdi:tag-outline"}></ha-icon>
            <span class="wsfc-order-name">${x.label||r.key}</span>
            <ha-icon class="wsfc-ico-btn ${n===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${c=>{c.preventDefault(),c.stopPropagation(),this._wfcMoveDetail(r.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${n===p.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${c=>{c.preventDefault(),c.stopPropagation(),this._wfcMoveDetail(r.key,1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn" icon=${r.show?"mdi:eye":"mdi:eye-off"} title=${r.show?"Shown \u2014 click to hide":"Hidden \u2014 click to show"}
              @click=${c=>{c.preventDefault(),c.stopPropagation(),this._wfcToggleDetailShow(r.key)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <ha-icon-picker
              class="wsfc-grow"
              label="Icon (blank = default)"
              .placeholder=${x.icon||""}
              .value=${r.icon||""}
              @value-changed=${c=>this._wfcSetDetail(r.key,"icon",c)}
            ></ha-icon-picker>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Styling</span>
              <select class="wsfc-native-select" @change=${c=>this._wfcSetDetailValue(r.key,"mode",c.target.value)}>
                <option value="global" ?selected=${r.mode!=="custom"}>Global (use section defaults)</option>
                <option value="custom" ?selected=${r.mode==="custom"}>Custom</option>
              </select>
            </label>
            ${r.mode==="custom"?a`
                  ${this._wfcPlainNum("Icon size (px)",r.icon_size,c=>this._wfcSetDetail(r.key,"icon_size",c))}
                  ${this._wfcPlainNum("Text size (px)",r.text_size,c=>this._wfcSetDetail(r.key,"text_size",c))}
                  ${this._wfcColorField("Icon color",r.icon_color,c=>this._wfcSetDetail(r.key,"icon_color",c))}
                  ${this._wfcColorField("Text color",r.text_color,c=>this._wfcSetDetail(r.key,"text_color",c))}
                `:u}
          </div>
        </details>
      `})};let P2=["current","details","hourly","daily","sun_arc","sun_position"];function C0(V){let M=P2.filter(n=>V.includes(n)),r=V.filter(n=>!P2.includes(n));return[...M,...r]}h._wfcEditor=function(){let V=Z(this._config),M=C0(V.order),r=V.order.map((p,x,c)=>{let g=!!(V[p]&&V[p].show);return a`
        <div class="wsfc-order-row">
          <ha-icon class="wsfc-order-lead" icon=${F2[p]||o2.options}></ha-icon>
          <span class="wsfc-order-name">${e[p]||p}</span>
          <ha-icon class="wsfc-ico-btn ${x===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up" @click=${()=>this._wfcMoveSection(p,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${x===c.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down" @click=${()=>this._wfcMoveSection(p,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${g?"mdi:eye":"mdi:eye-off"} title=${g?"Shown \u2014 click to hide":"Hidden \u2014 click to show"} @click=${()=>this._wfcToggleSectionShow(p)}></ha-icon>
        </div>
      `}),n=M.map(p=>a`
        <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${F2[p]||o2.options}></ha-icon><span class="wsfc-panel-title">${e[p]||p}</span></summary>
          <div class="wsfc-ed-panel">
            ${this._wfcSectionOptionsBody(p,V)}
          </div>
        </details>
      `);return a`
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
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${o2.order}></ha-icon><span class="wsfc-panel-title">Section order &amp; visibility</span></summary>
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
    `};let B2=[{value:"left",label:"Left of weather"},{value:"center",label:"Center of row"},{value:"right",label:"Right of weather"},{value:"above-left",label:"Above weather \u2014 left"},{value:"above-center",label:"Above weather \u2014 middle"},{value:"above-right",label:"Above weather \u2014 right"},{value:"below-left",label:"Below weather \u2014 left"},{value:"below-center",label:"Below weather \u2014 middle"},{value:"below-right",label:"Below weather \u2014 right"}];h._wfcClockPanel=function(V){let M="current",r=V.current||{},n=x=>x==="above"?"above-center":x==="below"?"below-center":x,p=r.clock_show_time!==!1;return a`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:clock-outline"></ha-icon><span class="wsfc-panel-title">Clock &amp; Date</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Digital clock &amp; date rendered in the Current Weather row. Enable Current Weather to show it.</p>
          ${this._wfcGroup("Clock (time)")}
                ${this._wfcCheckbox("Show Time",p,x=>this._wfcToggleSecField(M,"clock_show_time",x))}
                ${p?a`
                      <div class="wsfc-row">
                        ${this._wfcSelect(M,"clock_placement","Clock placement",B2,n(r.clock_placement),"right")}
                        ${this._wfcSelect(M,"clock_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],r.clock_format,"auto")}
                      </div>
                      ${this._wfcCheckbox("Show Seconds",r.clock_show_seconds,x=>this._wfcToggleSecField(M,"clock_show_seconds",x))}
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(M,"clock_font_size","Time size")}
                        ${this._wfcSelect(M,"clock_font_weight","Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],r.clock_font_weight,"500")}
                      </div>
                      ${this._wfcColorField("Time color",r.clock_color,x=>this._wfcSetSecField(M,"clock_color",x.target.value))}
                      <label class="wsfc-field">
                        <span class="wsfc-field-label">Font family (blank = card default)</span>
                        <input
                          type="text"
                          class="wsfc-input"
                          placeholder="e.g. Roboto Mono, monospace"
                          .value=${r.clock_font_family||""}
                          @change=${x=>this._wfcSetSecField(M,"clock_font_family",x.target.value)}
                        />
                      </label>
                      ${this._wfcSelect(M,"clock_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],r.clock_contrast,"none")}`:u}

                ${this._wfcGroup("Date")}
                ${this._wfcCheckbox("Show Date",r.clock_show_date,x=>this._wfcToggleSecField(M,"clock_show_date",x))}
                ${r.clock_show_date?a`
                      ${this._wfcSelect(M,"clock_date_format","Date format",C.map(x=>({value:x.value,label:x.label})),r.clock_date_format,"auto")}
                      <div class="wsfc-row">
                        ${this._wfcSelect(M,"clock_date_placement","Date placement",[{value:"with_time",label:"With clock"},...B2],r.clock_date_placement==="above"||r.clock_date_placement==="below"?n(r.clock_date_placement):r.clock_date_placement,"with_time")}
                        ${this._wfcAutoSizeField(M,"clock_date_font_size","Date size")}
                        ${this._wfcColorField("Date color",r.clock_date_color,x=>this._wfcSetSecField(M,"clock_date_color",x.target.value))}
                      </div>
                      ${r.clock_show_time&&(r.clock_date_placement==="with_time"||!r.clock_date_placement)?this._wfcSelect(M,"clock_align","Time & date alignment",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}],r.clock_align||"center","center"):u}
                      ${this._wfcSelect(M,"clock_date_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],r.clock_date_contrast!=null?r.clock_date_contrast:r.clock_contrast,"none")}`:u}
        </div>
      </details>
    `},h._wfcYamlPanel=function(){let V;try{V=R(this._config)}catch{V="# (unable to render YAML)"}return a`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:code-braces"></ha-icon><span class="wsfc-panel-title">YAML configuration</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Read-only view of this card's current configuration.</p>
          <pre class="wsfc-yaml">${V}</pre>
        </div>
      </details>
    `}})();{let t=q.prototype,C=t._wfcWeatherSourcesPanel,H=t.render,L=t.updated,e=t._wfcForecastSelect;t._wfcForecastSelect=function(i,...d){return this.wsfcHide?.includes(i)?"":e.call(this,i,...d)},t._wfcWeatherSourcesPanel=function(){return this.wsfcMode==="sections"?"":C.call(this)},t.render=function(){return this.wsfcMode!=="sources"?H.call(this):!this.hass||!this._config?"":a`${this._wfcEditorStyle()}${C.call(this)}`};let o=new CSSStyleSheet;o.replaceSync(`
    details.wsfc-panel { border: 1px solid transparent; border-top-color: var(--ltek-c-border-soft, rgba(127,127,127,.25)); border-radius: 0; background: none; margin: 0; }
    details.wsfc-panel[open] { border-color: var(--accent-color, var(--ltek-c-accent, #03a9f4)); border-radius: var(--ltek-r-ctrl, 8px); margin: 6px 0; }
    details.wsfc-panel[open] + details.wsfc-panel { border-top-color: transparent; }
    details.wsfc-panel > summary.wsfc-panel-summary { padding: var(--ltek-sp-3, 10px); gap: 8px; }
    details.wsfc-panel > summary .wsfc-panel-icon { display: none; }
    details.wsfc-panel > summary .wsfc-panel-title { font-size: var(--ltek-fs-label, 13px); font-weight: var(--ltek-fw-semibold, 600); text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); }
    details.wsfc-panel > summary::after { width: 8px; height: 8px; border-right-color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); border-bottom-color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); }
    .wsfc-ed-header { display: none; }
  `),t.updated=function(i){L?.call(this,i),this.wsfcMode==="sections"&&this.renderRoot&&(this.renderRoot.adoptedStyleSheets.includes(o)||(this.renderRoot.adoptedStyleSheets=[...this.renderRoot.adoptedStyleSheets,o]),this.renderRoot.querySelectorAll("details.wsfc-panel").forEach(A=>{A.__wsfcFlat||(A.__wsfcFlat=!0,A.addEventListener("toggle",()=>{A.open&&this.dispatchEvent(new CustomEvent("wsfc-flat-open",{detail:{type:this.wsfcType},bubbles:!0,composed:!0}))}))}));let d=this.wsfcPanels;if(d&&this.wsfcMode!=="sources"&&this.renderRoot?.querySelectorAll("details.wfc-panel, details.wsfc-panel").forEach(A=>{let l=A.querySelector(":scope > summary .wfc-panel-title, :scope > summary .wsfc-panel-title")?.textContent?.trim();A.hidden=!!l&&!d.includes(l)}),this.wsfcMode==="sources"&&!this.__wsfcOpened){let A=this.renderRoot?.querySelector("details.wfc-panel, details.wsfc-panel");A&&(A.open=!0,this.__wsfcOpened=!0)}}}var b5=globalThis.__wsfcHost?.["src/card/constants.js"];if(!b5)throw new Error("wsfc-editor.js: the card did not provide src/card/constants.js; update every file of the card together");var{CARD_NAME:_5,CARD_TYPE:p2,CARD_VERSION:O5}=b5;var y5=globalThis.__wsfcHost?.["src/card/panels.js"];if(!y5)throw new Error("wsfc-editor.js: the card did not provide src/card/panels.js; update every file of the card together");var{COLLAPSE_COLORS:k5,COLLAPSE_FIELDS:g9,COMMON_SCHEMA:W1,DEFAULT_PANELS:w9,HERO_TEXT_ICONS:b9,NO_TITLE:T5,PANEL_TYPES:m2,RENAMED_TYPES:_9,SKY_TEXT_ICONS:O9,STACK_CHILD_SCHEMA:N1,TITLE_COLORS:F5,TITLE_WHEN_SET:c2,inBarOf:z1,layoutOf:y9,migrateSky:k9,normalizePanels:P5,opensPopup:T9,panelMeta:W,rowsOf:N,spanOf:G}=y5;var B5=globalThis.__wsfcHost?.["src/card/core.js"];if(!B5)throw new Error("wsfc-editor.js: the card did not provide src/card/core.js; update every file of the card together");var{CORE_EDITOR_TAG:$5,CORE_TAG:P9,CoreSlot:B9,FLEX_SECTIONS_BUILD:$9,deepMerge:R5,flexBaseline:R9,flexOverride:E5,resolveWfc:E9}=B5;var D5=globalThis.__wsfcHost?.["src/panels/flex.js"];if(!D5)throw new Error("wsfc-editor.js: the card did not provide src/panels/flex.js; update every file of the card together");var{FLEX_BASES:W9,WsfcFlexPanel:N9,adoptContrast:z9,flexBase:W5,heroAutoSizes:I9,scaleTracker:G9,scaledSizes:U9,trackerConfig:N5}=D5;var z5=globalThis.__wsfcHost?.["src/card/config.js"];if(!z5)throw new Error("wsfc-editor.js: the card did not provide src/card/config.js; update every file of the card together");var{clone:A1,deepDiff:j9,deepMerge:q9,fitMode:X,prune:K}=z5;var I5=globalThis.__wsfcHost?.["src/card/metrics.js"];if(!I5)throw new Error("wsfc-editor.js: the card did not provide src/card/metrics.js; update every file of the card together");var{CARDINALS:Y9,METRICS:z,cardinal:X9,digitsFor:J9,metricEntity:I1,pressureThreshold:C6,uvLevel:H6}=I5;var G5=globalThis.__wsfcHost?.["src/card/layout.js"];if(!G5)throw new Error("wsfc-editor.js: the card did not provide src/card/layout.js; update every file of the card together");var{COLS:L6,Q:L1,arrange:d1,pushDown:s1,readingOrder:v2,toRows:M1,toTracks:e1}=G5;var G1=30,U1=4,U5=10,x1=t=>t.title?t.title:t.type==="metric"?z[t.metric]?.label||t.label||"Metric":t.type==="stack"?`Stack \xB7 ${(t.panels||[]).length}`:t.type==="day"?["Today","Tomorrow"][Number(t.day_offset??1)]||`Day +${t.day_offset}`:(W(t)?.label||t.type).replace(/ \(.*\)$/,""),u2=t=>t.icon||t.type==="metric"&&z[t.metric]?.icon||W(t)?.icon||"mdi:square-outline",f1=class extends I{connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(()=>{let C=this.renderRoot.querySelector(".grid");if(!C)return;let H=C.clientWidth-12;Math.abs(H-(this._mapW||0))>1&&(this._mapW=H)}),this.updateComplete.then(()=>{let C=this.renderRoot.querySelector(".grid");C&&this._ro.observe(C)})}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect()}_scale(){let C=this.guide;if(!C?.w||!C?.h||!this._mapW)return{row:G1,gap:U1,line:null};let H=this._mapW/C.w,L=Math.max(100,C.h-(C.chrome||0)),e=C.row||110,o=!1;if(C.fit&&this._tracks){let d=this._tracks/L1,A=(L+(C.gap??12))/d-(C.gap??12);e=Math.max(60,Math.min(400,A)),o=A>=60}let i=Math.max(2,(C.gap??12)*H);return{row:Math.max(8,e*H),gap:i,line:L*H,rowPx:Math.round(e),fits:o}}updated(C){if(C.has("panels")&&this._focusNext!=null){let i=this._focusNext;this._focusNext=null,this.renderRoot.querySelector(`.blk[data-i="${i}"]`)?.focus()}let H=this.renderRoot.querySelector(".grid.measure");if(!H||!this.guide?.fit)return;let{row:L,gap:e}=this._scale(),o=Math.max(L1,Math.round((H.clientHeight-12+e)/((L-3*e)/L1+e)));o!==this._tracks&&(this._tracks=o)}_inMap(C){return C.display!=="popup"&&C.show!==!1}_gridIdx(){return(this.panels||[]).map((C,H)=>H).filter(C=>this._inMap(this.panels[C]))}_items(C=this.panels||[]){return this._gridIdx().map(H=>{let L=C[H];return{key:H,w:G(L),h:e1(N(L)),x:L.x??null,y:L.y==null?null:Number(L.y)*L1}})}_positions(){return this._preview||d1(this._items(),{gravity:this.gravity!==!1})}render(){let C=this.panels||[];this._pos=this._positions();let H=v2(this._pos),L=C.map((d,A)=>A).filter(d=>C[d].display==="popup"),e=C.map((d,A)=>A).filter(d=>C[d].display!=="popup"&&C[d].show===!1),o=this._scale();this._mr=o.row,this._mg=o.gap;let i=this.guide?.mode||"line";return a`
      <div class="wrap">
        <div class="grid ${this._drag?.moved||this._size?"editing":""}" style=${`--row:${o.row}px;--gap:${o.gap}px`}>
          ${H.map(d=>this._block(C[d],d))}
        </div>
        ${this.guide?.fit?a`<div class="grid measure" aria-hidden="true" style=${`--row:${o.row}px;--gap:${o.gap}px`}>
          ${this._measureBlocks(C)}</div>`:u}
        ${this.measured?.w&&this._mapW?this.measured.gridH>this.measured.visibleH+1?a`<div class="guide frame" style=${`top:${6+this.measured.visibleH*(this._mapW/this.measured.w)}px`} aria-hidden="true"><span>${this.guide.w}×${this.guide.h} screen edge</span></div>`:a`<div class="guide fitbox" aria-hidden="true"><span>Fits ${this.guide.w}×${this.guide.h}</span></div>`:o.line==null?u:o.fits?a`<div class="guide fitbox" aria-hidden="true"><span>Fits ${this.guide.w}×${this.guide.h} · rows ${o.rowPx}px</span></div>`:a`<div class="guide ${i}" style=${`top:${6+o.line}px`} aria-hidden="true">
                <span>${this.guide.w}×${this.guide.h} screen edge${this.guide.fit?` \xB7 rows at the ${o.rowPx}px minimum`:""}</span></div>`}
      </div>
      ${this._screen()}
      ${e.length?a`<div class="pops"><span>Hidden on load (not on the map):</span>${e.map(d=>a`<span class="pop"><ha-icon icon=${u2(C[d])}></ha-icon>${x1(C[d])}</span>`)}</div>`:u}
      ${L.length?a`<div class="pops"><span>Pop-ups:</span>${L.map(d=>a`<span class="pop"><ha-icon icon=${u2(C[d])}></ha-icon>${x1(C[d])}</span>`)}</div>`:u}
    `}_screen(){let C=this.measured,H=this.guide;if(!C||!H||!this._mapW||!C.w)return u;let L=C.tiles.filter(i=>i.where==="off"),e=C.tiles.filter(i=>i.where==="partial"),o=i=>i.map(d=>x1(this.panels[d.i]||{})).join(", ");return a`<div class="shot-head">On the ${H.w}×${H.h} screen at load${C.gridH<=C.visibleH+1?a` — <span class="okc">everything fits</span>`:""}</div>
      ${L.length||e.length?a`<div class="shot-note">${e.length?a`<b>Partly off screen:</b> ${o(e)}. `:""}${L.length?a`<b>Off screen:</b> ${o(L)}.`:""}
            ${H.fit&&!H.strict?" Content makes some panels taller than their rows (dashed in the map); try Exact heights, Fill the panel, or more rows for them.":""}</div>`:u}`}_place(C){return`grid-column: ${C.x+1} / span ${C.w}; grid-row: ${C.y+1} / span ${C.h};`}_measureBlocks(C){let H=this._items().filter(e=>C[e.key].show!==!1);return[...d1(H,{gravity:this.gravity!==!1}).values()].map(e=>a`<div style=${this._place(e)}></div>`)}_block(C,H){let L=this._size?.index===H?this._size:null,e=this._pos.get(H),o=e.w,i=L?L.rows:N(C),d=this._place(e),A=!L&&this.measured?.tiles?.find(v=>v.i===H),l=A&&!A.collapsed?Math.round((A.h+this.measured.gap)/(this.measured.row+this.measured.gap)*L1)/L1:null,m=l!=null&&i>0&&l>i+.25;m&&(d+=`--extra:${Math.round((l-i)*((this._mr||G1)+(this._mg||U1)))}px;`);let s=["blk",C.show===!1?"hidden":"",this._drag?.index===H?"dragging":"",L?"sizing":"",C.type,A?`at-${A.where}`:"",m?"grows":"",A?.collapsed?"folded":""].join(" ");return a`<div class=${s} style=${d} data-i=${H} tabindex="0" role="button"
        aria-label=${`${x1(C)}, column ${e.x+1}, row ${M1(e.y)+1}, width ${o} of 12, height ${i||"auto"}. Arrow keys move; Shift+arrows resize.`}
        @pointerdown=${v=>this._startMove(v,H)} @keydown=${v=>this._key(v,H)}>
      <ha-icon icon=${u2(C)}></ha-icon>
      <span class="nm">${x1(C)}</span>
      <span class="dim">${o}×${i||"a"}${m?a` <b class="need" title="Its content makes it taller on that screen">→ ${l}</b>`:u}${A?.collapsed?" \xB7 collapsed":""}</span>
      <span class="rz x" @pointerdown=${v=>this._startSize(v,H,"x")}></span>
      <span class="rz y" @pointerdown=${v=>this._startSize(v,H,"y")}></span>
      <span class="rz xy" @pointerdown=${v=>this._startSize(v,H,"xy")}></span>
    </div>`}_cell(C){let H=this.renderRoot.querySelector(".grid"),L=H.getBoundingClientRect(),e=this._mg||U1,o=(H.clientWidth-12-11*e)/12,i=((this._mr||G1)-3*e)/L1;return{x:Math.floor((C.clientX-L.left-6)/(o+e)),y:Math.floor((C.clientY-L.top-6)/(i+e))}}_startMove(C,H){if(C.button!==0||C.target.classList.contains("rz"))return;C.preventDefault();let L=C.currentTarget;L.setPointerCapture(C.pointerId);let e=this._pos.get(H),o=this._cell(C);this._drag={index:H,x0:C.clientX,y0:C.clientY,moved:!1,dx:o.x-e.x,dy:o.y-e.y,at:{x:e.x,y:e.y}};let i=A=>this._onMove(A),d=()=>{L.removeEventListener("pointermove",i),L.removeEventListener("pointerup",d),L.removeEventListener("pointercancel",d);let A=this._drag,l=this._preview;this._drag=null,this._preview=null,A?.moved&&l&&(A.to.x!==A.at.x||A.to.y!==A.at.y)&&this._commit(l)};L.addEventListener("pointermove",i),L.addEventListener("pointerup",d),L.addEventListener("pointercancel",d)}_onMove(C){let H=this._drag;if(!H||!H.moved&&Math.hypot(C.clientX-H.x0,C.clientY-H.y0)<4)return;H.moved=!0;let L=this._cell(C),e=d1(this._items(),{gravity:this.gravity!==!1}).get(H.index),o={x:Math.max(0,Math.min(12-e.w,L.x-H.dx)),y:Math.max(0,L.y-H.dy)};H.to&&H.to.x===o.x&&H.to.y===o.y||(H.to=o,this._preview=s1(this._items(),H.index,o,{gravity:this.gravity!==!1}))}_commit(C,H={}){let L=this.panels,e=v2(C),o=e.map(A=>{let l=C.get(A),m={...L[A],x:l.x,y:M1(l.y)};return H[A]&&Object.assign(m,H[A]),this._tidy(m)}),i=L.map(A=>this._inMap(A)?o.shift():A),d=L.map((A,l)=>l).filter(A=>this._inMap(L[A]));this._moved=new Map(e.map((A,l)=>[A,d[l]])),this._emit(i)}_tidy(C){let H=W(C)||{};return C.span===H.span&&delete C.span,C.rows!=null&&C.rows===(H.rows??0)&&delete C.rows,C}_commitOrder(C){let H=this.panels,L=C.map(o=>H[o]),e=H.map(o=>this._inMap(o)?L.shift():o);this._emit(e)}_startSize(C,H,L){if(C.button!==0)return;C.preventDefault(),C.stopPropagation();let e=C.currentTarget;e.setPointerCapture(C.pointerId);let o=this.renderRoot.querySelector(".grid"),i=this._mg||U1,d=(o.clientWidth-12-11*i)/12+i,A=((this._mr||G1)-3*i)/L1+i,l=this.panels[H],m=this._pos.get(H),s=G(l),v=N(l);this._size={index:H,span:s,rows:v};let f=C.clientX,w=C.clientY,O=y=>{let P=L==="y"?s:Math.max(1,Math.min(12-m.x,s+Math.round((y.clientX-f)/d))),B=L==="x"?v:Math.max(.25,Math.min(U5,M1(e1(v||1)+Math.round((y.clientY-w)/A))));L!=="x"&&v===0&&B===1&&Math.abs(y.clientY-w)<A/2&&(B=0),!(P===this._size.span&&B===this._size.rows)&&(this._size={index:H,span:P,rows:B},this._preview=s1(this._items(),H,{x:m.x,y:m.y,w:P,h:e1(B)},{gravity:this.gravity!==!1}))},F=()=>{e.removeEventListener("pointermove",O),e.removeEventListener("pointerup",F),e.removeEventListener("pointercancel",F);let{span:y,rows:P}=this._size,Z=this._preview;this._size=null,this._preview=null,(y!==s||P!==v)&&Z&&this._commit(Z,{[H]:{span:y,rows:P}})};e.addEventListener("pointermove",O),e.addEventListener("pointerup",F),e.addEventListener("pointercancel",F)}_commitSize(C,H,L){let e=this._pos.get(C),o=s1(this._items(),C,{x:e.x,y:e.y,w:H,h:e1(L)},{gravity:this.gravity!==!1});this._commit(o,{[C]:{span:H,rows:L}})}_key(C,H){let L={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[C.key];if(!L)return;C.preventDefault();let e=this.panels[H];if(C.shiftKey){let o=Math.max(0,Math.min(U5,M1(e1(N(e)||1)+L[1])));this._commitSize(H,Math.max(1,Math.min(12-this._pos.get(H).x,G(e)+L[0])),N(e)===0&&L[1]<0?.75:o)}else{let o=this._pos.get(H),i={x:Math.max(0,Math.min(12-o.w,o.x+L[0])),y:Math.max(0,o.y+L[1])},d=s1(this._items(),H,i,{gravity:this.gravity!==!1});if(L[1]<0&&d.get(H).y>=o.y){let A=[...this._pos.values()].filter(l=>l.key!==H&&l.y+l.h<=o.y&&l.x<o.x+o.w&&o.x<l.x+l.w).sort((l,m)=>m.y+m.h-(l.y+l.h))[0];A&&(d=s1(this._items(),H,{x:o.x,y:A.y},{gravity:this.gravity!==!1}))}this._commit(d)}this._focusNext=this._moved?.get(H)??H}_emit(C){this.dispatchEvent(new CustomEvent("layout-changed",{detail:{panels:C}}))}};E(f1,"properties",{panels:{attribute:!1},_preview:{state:!0},gravity:{attribute:!1},_size:{state:!0},_drag:{state:!0},guide:{attribute:!1},measured:{attribute:!1},_mapW:{state:!0},_tracks:{state:!0}}),E(f1,"styles",D`
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
  `);customElements.get("wsfc-layout-map")||customElements.define("wsfc-layout-map",f1);var Q5=56,j5=16,h1=class extends I{render(){let C=this.guide;return!C?.w||!C?.h?a``:a`<div class="screen" style=${`width:${Math.max(200,C.w-j5)}px;height:${Math.max(200,C.h-Q5)}px`}></div>`}updated(C){let H=`${this.guide?.w}x${this.guide?.h}`;!(C.has("config")&&C.get("config")!==this.config)&&H===this._key&&this._card||this.hass&&(this._key=H,clearTimeout(this._t),this._t=setTimeout(()=>this._build(),400))}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._t),clearTimeout(this._m)}_build(){let C=this.renderRoot.querySelector(".screen"),H=this.guide;if(!(!C||!H||!this.hass||!this.config?.entity)&&customElements.get("weather-station-flex-card")){this._card||(this._card=document.createElement("weather-station-flex-card"),this._card.editMode=!0,C.append(this._card));try{this._card.setConfig({...this.config,remember:!1})}catch{return}this._card.screenHeight=Math.max(200,H.h-Q5-j5),this._card.screenWidth=H.w,this._card.hass=this.hass,clearTimeout(this._m),this._m=setTimeout(()=>{try{this._card._fit?.(),this._card._autoFitPanels?.()}catch{}requestAnimationFrame(()=>this._measure())},900)}}_measure(){let C=this._card?.shadowRoot,H=C?.querySelector(".scroller"),L=C?.querySelector(".grid");if(!H||!L)return;let e=L.getBoundingClientRect(),o=H.getBoundingClientRect(),i=this.renderRoot.querySelector(".screen").getBoundingClientRect(),d=Math.min(o.top+H.clientHeight,i.bottom)-e.top,A=getComputedStyle(L),l=[...L.querySelectorAll(":scope > section.tile[data-i]")].map(m=>{let s=m.getBoundingClientRect(),v=s.top-e.top,f=s.height;return{i:Number(m.dataset.i),x:s.left-e.left,y:v,w:s.width,h:f,collapsed:m.classList.contains("collapsed"),where:v>=d-1?"off":v+f>d+1?"partial":"on"}});this.dispatchEvent(new CustomEvent("probe-measured",{detail:{w:e.width,visibleH:d,gridH:e.height,row:parseFloat(L.style.getPropertyValue("--wsfc-row")||A.getPropertyValue("--wsfc-row"))||110,gap:parseFloat(A.rowGap)||12,tiles:l}}))}};E(h1,"properties",{hass:{attribute:!1},config:{attribute:!1},guide:{attribute:!1}}),E(h1,"styles",D`
    :host { position: fixed; left: -20000px; top: 0; visibility: hidden; pointer-events: none; contain: layout; }
    .screen { position: relative; overflow: hidden; }
  `);customElements.get("wsfc-layout-probe")||customElements.define("wsfc-layout-probe",h1);var Q1=[["var(--primary-color)","Primary"],["var(--accent-color)","Accent"],["var(--primary-text-color)","Primary text"],["var(--secondary-text-color)","Secondary text"],["var(--disabled-text-color)","Disabled text"],["var(--disabled-color)","Disabled"],["var(--state-icon-color)","State icon"],["var(--state-active-color)","State active"],["var(--error-color)","Error"],["var(--warning-color)","Warning"],["var(--success-color)","Success"],["var(--info-color)","Info"]];function t7(t){return t=t==null?"":String(t),t===""?"default":t==="transparent"?"transparent":/^#[0-9a-fA-F]{3,8}$/.test(t)?"custom":/^var\(/.test(t)&&Q1.some(([C])=>C===t)?"theme":"css"}var Y5=t=>!!t.selector?.ltek_color||!!t.selector?.text&&/(^|_|\.)color$/.test(t.name),M7=t=>/px|%/.test(t?.unit_of_measurement||"");function o7(t){let C=t.selector||{};return!!(C.boolean||C.select&&!C.select.custom_value||C.number||Y5(t)||C.text&&!C.text.multiple)}var q5=t=>/^#[0-9a-fA-F]{6}$/.test(t||"")?t:null;function X5({data:t,schema:C,onChange:H,label:L,helper:e,haForm:o,auto:i,whenData:d,isSet:A,action:l}){let m=[],s=[],v=()=>{if(!s.length)return;let f=s;m.push(o(Object.fromEntries(f.map(w=>[w.name,t[w.name]])),f,w=>H({...t,...w}))),s=[]};for(let f of C){if(typeof f.when=="function"&&!f.when(d?{...d,...t}:t))continue;if(f.kind==="action"||f.kind==="info"){v(),l&&m.push(l(f));continue}if(!o7(f)){s.push(f);continue}v();let w=F=>H({...t,[f.name]:F}),O=!!f.selector?.number&&f.default===void 0;m.push(A?.(f)&&!O?a`<div class="fwrap" data-name=${f.name}>${K5(f,t[f.name],w,L(f),e(f),i?.(f))}<button type="button" class="fdefault" title="Back to the default value"
          @click=${()=>w(void 0)}><ha-icon icon="mdi:restore"></ha-icon>Reset to default</button></div>`:K5(f,t[f.name],w,L(f),e(f),i?.(f)))}return v(),m}function K5(t,C,H,L,e,o){let i=t.selector||{},d=`f-${t.name.replace(/\W/g,"_")}`,A=e?a`<div class="fhelp">${e}</div>`:u;if(i.boolean){let l=t.invert?C===!1:!!C;return a`<div class="fld"><label class="fchk"><input type="checkbox" .checked=${l} @change=${m=>H(t.invert?!m.target.checked:m.target.checked)} />${L}</label>${A}</div>`}if(i.select&&!i.select.multiple){let l=(i.select.options||[]).map(s=>typeof s=="string"?{value:s,label:s}:s),m=C==null?"":String(C);return a`<div class="fld"><div class="frow"><label for=${d}>${L}</label>
      <select id=${d} class="sel" @change=${s=>H(s.target.value===""?void 0:s.target.value)}>
        ${l.some(s=>String(s.value)===m)?u:a`<option value="" ?selected=${m===""}>—</option>`}
        ${l.map(s=>a`<option value=${s.value} ?selected=${String(s.value)===m}>${s.label}</option>`)}
      </select></div>${A}</div>`}if(i.select&&i.select.multiple){let l=(i.select.options||[]).map(v=>typeof v=="string"?{value:v,label:v}:v),m=Array.isArray(C)?C:[],s=(v,f)=>{let w=l.map(O=>O.value).filter(O=>O===v?f:m.includes(O));H(w.length?w:void 0)};return a`<div class="fld"><div class="flab">${L}</div><div class="fmulti">
      ${l.map(v=>a`<label class="fchk"><input type="checkbox" .checked=${m.includes(v.value)} @change=${f=>s(v.value,f.target.checked)} />${v.label}</label>`)}
    </div>${A}</div>`}if(i.number){let l=i.number,m=l.unit_of_measurement||"";if(l.mode==="slider"||M7(l)){let s=l.min??0,v=l.max??100,f=l.step??1,w=C??t.default,O=parseFloat(o),F=w??(Number.isFinite(O)?Math.max(s,Math.min(v,O)):s),y=P=>P==null||P===""?"Auto":`${P}${m}`;return a`<div class="fld"><div class="frow nowrap"><label for=${d}>${L}</label>
        <input id=${d} type="range" class="frange" min=${s} max=${v} step=${f} .value=${String(F)}
          @input=${P=>{let Z=P.target.parentElement.querySelector(".fval");Z&&(Z.textContent=y(P.target.value))}}
          @change=${P=>H(Number(P.target.value))} />
        <span class="fval">${y(w)}</span>
        ${C!=null&&t.default===void 0?a`<button class="freset" title="Back to Auto" @click=${()=>H(void 0)}>×</button>`:u}
      </div>${o&&w==null?a`<div class="fauto">Auto: ${o}</div>`:u}${A}</div>`}return a`<div class="fld"><div class="frow"><label for=${d}>${L}</label>
      <input id=${d} type="number" class="ftext num" min=${l.min??u} max=${l.max??u} step=${l.step??"any"} .value=${C??""}
        @change=${s=>H(s.target.value===""?void 0:Number(s.target.value))} />${m?a`<span class="funit">${m}</span>`:u}
    </div>${A}</div>`}return Y5(t)?i7(d,C,H,L,A,/background|(^|_)bg(_|$)/i.test(`${t.name} ${L}`)):a`<div class="fld"><div class="frow"><label for=${d}>${L}</label>
    <input id=${d} type=${i.text?.type||"text"} class="ftext" .value=${C??""} @change=${l=>H(l.target.value===""?void 0:l.target.value)} />
  </div>${A}</div>`}function i7(t,C,H,L,e,o=!1){let i=t7(C),d=C==null?"":String(C),A=l=>H(l==="default"?void 0:l==="transparent"?"transparent":l==="theme"?Q1.some(([m])=>m===d)?d:Q1[0][0]:l==="custom"?q5(d)||"#4fc3f7":d||"#4fc3f7");return a`<div class="fld"><div class="frow"><label for=${t}>${L}</label>
    <span class="fcolor">
      <select id=${t} class="sel mode" @change=${l=>A(l.target.value)}>
        ${[["default","Not set"],...o||i==="transparent"?[["transparent","Transparent"]]:[],["theme","Theme color"],["custom","Custom"],["css","CSS"]].map(([l,m])=>a`<option value=${l} ?selected=${l===i}>${m}</option>`)}
      </select>
      ${i==="theme"?a`<select class="sel" aria-label="Theme color" @change=${l=>H(l.target.value)}>${Q1.map(([l,m])=>a`<option value=${l} ?selected=${l===d}>${m}</option>`)}</select>`:i==="custom"?a`<input type="color" class="fswatch" aria-label="Color" .value=${q5(d)||"#4fc3f7"} @change=${l=>H(l.target.value)} />`:i==="css"?a`<input type="text" class="ftext" aria-label="CSS color" .value=${d} @change=${l=>H(l.target.value||void 0)} />`:u}
      ${i!=="default"&&i!=="transparent"?a`<span class="fdot" style="background:${d}"></span>`:u}
    </span>
  </div>${e}</div>`}var J5=D`
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
`;var C3=globalThis.__wsfcHost?.["src/card/lazy.js"];if(!C3)throw new Error("wsfc-editor.js: the card did not provide src/card/lazy.js; update every file of the card together");var{lazyLib:H3}=C3;var j1,a7=async()=>j1||(j1=await H3("wsfc-yaml.js")),n7=`
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
`,l7=t=>j1.dump(t,{lineWidth:-1,noRefs:!0});function A7(t,C){let H;try{H=j1.load(String(t||""))}catch(L){throw new Error(`Not valid YAML or JSON: ${L.reason||L.message}`)}if(!H||typeof H!="object"||Array.isArray(H))throw new Error("Expected the card's settings (a YAML mapping).");if(H.type&&C&&H.type!==C)throw new Error(`This is a ${H.type} config, not ${C}.`);if(!H.entity)throw new Error("Missing entity: the weather entity (e.g. weather.openweathermap).");return{...H,type:C||H.type}}async function x2(t){try{await a7()}catch(C){alert(String(C?.message||C));return}return d7(t)}function d7({mode:t,config:C,cardType:H,onImport:L}){let e=document.createElement("dialog");e.className="wsfc-io";let o=document.createElement("style");o.textContent=n7;let i=t==="export";e.innerHTML=`<div class="in">
    <h2>${i?"Export settings":"Import settings"}</h2>
    <p>${i?"The whole card's settings as YAML. Copy them to keep a backup or to use them on another dashboard.":"Paste settings exported from this card (YAML or JSON). They replace the current settings in the editor; press Save in Home Assistant to keep them."}</p>
    <textarea spellcheck="false" aria-label="${i?"Exported settings":"Settings to import"}"></textarea>
    <div class="err" role="alert"></div>
    <div class="bar">
      ${i?'<button class="copy">Copy to clipboard</button><button class="dl">Download file</button>':'<button class="paste">Paste from clipboard</button>'}
      <span class="grow"></span>
      <button class="close">${i?"Close":"Cancel"}</button>
      ${i?"":'<button class="pri apply">Import</button>'}
    </div>
  </div>`,e.prepend(o);let d=e.querySelector("textarea"),A=e.querySelector(".err");i&&(d.value=l7(C));let l=()=>{e.close(),e.remove()};e.querySelector(".close").addEventListener("click",l),e.addEventListener("cancel",m=>{m.preventDefault(),l()}),e.addEventListener("click",m=>{m.target===e&&l()}),e.querySelector(".copy")?.addEventListener("click",async m=>{let s=m.currentTarget;d.focus(),d.select();let v=!1;try{v=document.execCommand("copy")}catch{v=!1}if(!v)try{await navigator.clipboard.writeText(d.value),v=!0}catch{v=!1}s.textContent=v?"Copied \u2713":"Press Ctrl/Cmd+C"}),e.querySelector(".dl")?.addEventListener("click",()=>{let m=document.createElement("a");m.href=URL.createObjectURL(new Blob([d.value],{type:"text/yaml"})),m.download="weather-station-flex-card.yaml",m.click(),setTimeout(()=>URL.revokeObjectURL(m.href),1e3)}),e.querySelector(".paste")?.addEventListener("click",async m=>{try{d.value=await navigator.clipboard.readText(),A.textContent=""}catch{m.currentTarget.textContent="Paste with Ctrl/Cmd+V",d.focus()}}),e.querySelector(".apply")?.addEventListener("click",()=>{try{let m=A7(d.value,H);L?.(m),l()}catch(m){A.textContent=m.message}}),document.body.appendChild(e);try{e.showModal()}catch{e.setAttribute("open","")}return i?(d.focus(),d.select()):d.focus(),e}var V3=globalThis.__wsfcHost?.["src/card/unsaved.js"];if(!V3)throw new Error("wsfc-editor.js: the card did not provide src/card/unsaved.js; update every file of the card together");var{isLive:f2,isUnsaved:m6,setLive:h2,setUnsaved:q1}=V3;var L3=globalThis.__wsfcHost?.["src/card/detected.js"];if(!L3)throw new Error("wsfc-editor.js: the card did not provide src/card/detected.js; update every file of the card together");var{detected:e3,setDetected:v6}=L3;var r3=globalThis.__wsfcHost?.["src/card/animation-speed.js"];if(!r3)throw new Error("wsfc-editor.js: the card did not provide src/card/animation-speed.js; update every file of the card together");var{ANIM_SPEEDS:t3,LOW_POWER_VARS:M3,SPEED_MAX:x6,SPEED_MIN:f6,animSpeedVars:o3}=r3;var i3=globalThis.__wsfcHost?.["src/card/weather-station-flex-card.js"];if(!i3)throw new Error("wsfc-editor.js: the card did not provide src/card/weather-station-flex-card.js; update every file of the card together");var{baseSizes:Z6,canCollapseType:K1,contrastVars:S6,panelStyleVars:g6,tileFx:w6}=i3;var a3=globalThis.__wsfcHost?.["src/card/compact.js"];if(!a3)throw new Error("wsfc-editor.js: the card did not provide src/card/compact.js; update every file of the card together");var{COMPACT_TYPES:o1,NEEDS_PANEL:_6,compactRow:O6,compactStyles:y6,compactTiles:k6}=a3;var n3={inplace:"in place",overlay:"over the other panels",popup:"as a pop-up"},Z2=["compact","collapsible","collapsed","collapsed_view","collapsed_open"];function S1(t,C={},H=!0){if(!H)return[["full","Full Size"]];let L=[["full","Full Size"],["full_title","Full Size \u2192 Collapse to Title"],["title_full","Title \u2192 Expand to Full Size"]];return o1.has(t.type)?[...L,["full_tiles","Full Size \u2192 Collapse to Tiles"],["tiles",`Tiles \u2192 Expand (card default: ${s7(C)})`],["tiles_inplace","Tiles \u2192 Expand in Place"],["tiles_overlay","Tiles \u2192 Open Over the Other Panels"],["tiles_popup","Tiles \u2192 Open as a Pop-up"]]:L}function s7(t){let C=t.collapsed_open;return n3[C]?n3[C]:t.layout==="fullscreen"||t.screen_fit==="scale"?"over the other panels":"in place"}var p7=t=>o1.has(t.type)&&(!!t.compact||t.type==="air_quality"&&t.layout==="compact"),Z1=t=>t&&t!=="default"?t:null;function g1(t={},C={}){let H=e=>Z1(e)?`tiles_${Z1(e)}`:"tiles";return p7(t)?Z1(t.collapsed_view)==="minimal"?t.collapsed===!1?"full_title":"title_full":t.collapsed===!1?"full_tiles":H(t.collapsed_open):t.collapsible?(o1.has(t.type)?Z1(t.collapsed_view)||(C.collapsed_view==="compact"?"compact":"minimal"):"minimal")==="compact"?t.collapsed?H(t.collapsed_open):"full_tiles":t.collapsed?"title_full":"full_title":"full"}function Y1(t,C,H={}){let L={...t};for(let i of Z2)delete L[i];L.type==="air_quality"&&L.layout==="compact"&&delete L.layout;let e=()=>{o1.has(L.type)&&H.collapsed_view==="compact"&&(L.collapsed_view="minimal")},o=()=>{Z1(t.collapsed_open)&&(L.collapsed_open=t.collapsed_open)};switch(C){case"full_title":L.collapsible=!0,e(),o();break;case"title_full":L.collapsible=!0,L.collapsed=!0,e(),o();break;case"full_tiles":L.compact=!0,L.collapsed=!1,L.collapsed_open="inplace";break;case"tiles":L.compact=!0;break;case"tiles_inplace":L.compact=!0,L.collapsed_open="inplace";break;case"tiles_overlay":L.compact=!0,L.collapsed_open="overlay";break;case"tiles_popup":L.compact=!0,L.collapsed_open="popup";break;default:break}return L}function X1(t){return t==="full"?"full":t==="full_title"||t==="title_full"?"title":"tiles"}var l3=globalThis.__wsfcHost?.["src/card/alerts.js"];if(!l3)throw new Error("wsfc-editor.js: the card did not provide src/card/alerts.js; update every file of the card together");var{activeAlerts:B6,alertSources:A3,alertStyles:$6,alertsBar:R6,alertsEntity:d3,findAlertsEntity:E6}=l3;var s3=globalThis.__wsfcHost?.["src/card/pollen.js"];if(!s3)throw new Error("wsfc-editor.js: the card did not provide src/card/pollen.js; update every file of the card together");var{DEFAULT_SEASONS:W6,LEVEL_LABEL:N6,MONTHS:z6,levelOf:I6,nextDue:G6,parseSeason:U6,pollenLevelsLocations:Q6,pollenModel:p3}=s3;var m3=globalThis.__wsfcHost?.["src/card/sunlight.js"];if(!m3)throw new Error("wsfc-editor.js: the card did not provide src/card/sunlight.js; update every file of the card together");var{SV_ATTR:q6,SV_VALUE:K6,WALLS:Y6,clearSky:X6,cloudy:J6,compassName:C8,houseAngle:H8,sunAlert:V8,sunDefaults:L8,sunStrength:e8,sunThresholds:r8,svEntities:c3,tempNow:t8,wallBearings:M8}=m3;var v3=globalThis.__wsfcHost?.["src/card/icons.js"];if(!v3)throw new Error("wsfc-editor.js: the card did not provide src/card/icons.js; update every file of the card together");var{OPEN_ICONS_FULL:u3,OPEN_ICONS_SMALL:x3,openIcon:i8}=v3;var f3=globalThis.__wsfcHost?.["src/card/resolve.js"];if(!f3)throw new Error("wsfc-editor.js: the card did not provide src/card/resolve.js; update every file of the card together");var{deviceEntities:S2,entityValue:J1,findHealthEntity:n8,findStationEntity:l8,healthDevices:A8,integrationOf:J,metricChain:d8,metricSensor:h3,metricValue:s8,pick:p8,sourceDefault:Z3,stationDeviceEntities:S3,stationDevices:m8,stationStatus:c8}=f3;var g3="__other__",w1=class extends I{_name(C){let H=this.hass?.states?.[C],L=H?.attributes?.friendly_name||C,e=H&&!["unknown","unavailable"].includes(H.state)&&!C.startsWith("weather.")?` \xB7 ${H.state}${H.attributes?.unit_of_measurement?` ${H.attributes.unit_of_measurement}`:""}`:"";return`${L}${e}`}_emit(C){this._other=!1,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:C},bubbles:!1}))}render(){let C=this.value||"",H=[...new Set([...this.candidates||[],...C?[C]:[]])].filter(e=>e!==this.defaultEntity||C===e),L=this.defaultLabel||(this.defaultEntity?`Default \u2014 ${this._name(this.defaultEntity)}`:"Default \u2014 none found");return a`
      <div class="row">
        <select class=${C?"":"def"} aria-label=${this.label||"Entity"} @change=${e=>{let o=e.target.value;if(o===g3){this._other=!0,e.target.value=C;return}this._emit(o)}}>
          <option value="" ?selected=${!C}>${L}</option>
          ${H.map(e=>a`<option value=${e} ?selected=${e===C}>${this._name(e)}</option>`)}
          <option value=${g3}>Other entity…</option>
        </select>
        ${C?a`<button type="button" title="Use the default sensor" @click=${()=>this._emit("")}>Default</button>`:u}
      </div>
      ${this._other?a`<div class="picker"><ha-form .hass=${this.hass} .data=${{e:C}} .schema=${[{name:"e",selector:{entity:this.domain?{domain:this.domain}:{}}}]}
            .computeLabel=${()=>"Choose an entity"} @value-changed=${e=>{e.stopPropagation();let o=e.detail.value?.e;o&&this._emit(o)}}></ha-form></div>`:u}
    `}};E(w1,"properties",{hass:{attribute:!1},value:{},defaultEntity:{attribute:!1},defaultLabel:{attribute:!1},candidates:{attribute:!1},domain:{},label:{},_other:{state:!0}}),E(w1,"styles",D`
    :host { display: block; min-width: 0; }
    .row { display: flex; gap: 6px; align-items: center; min-width: 0; }
    select { flex: 1; min-width: 0; font: inherit; font-size: 12px; padding: 5px 8px; border-radius: 6px; border: 1px solid var(--ltek-c-border, #444); background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color); }
    select.def { color: var(--secondary-text-color); }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; padding: 2px 4px; font: inherit; font-size: 11px; white-space: nowrap; }
    button:hover { color: var(--primary-color); }
    .picker { margin-top: 4px; }
  `);customElements.get("wsfc-entity-select")||customElements.define("wsfc-entity-select",w1);var m7=[["temperature","Temperature"],["apparent_temperature","Feels like"],["dew_point","Dew point"],["humidity","Humidity"],["pressure","Pressure"],["wind_speed","Wind speed"],["wind_gust_speed","Wind gust"],["wind_bearing","Wind direction"],["uv_index","UV index"],["solar_radiation","Solar radiation"],["illuminance","Illuminance"],["precipitation","Rain rate"],["visibility","Visibility"],["cloud_coverage","Cloud cover"],["ozone","Ozone"]],C2=t=>typeof t=="string"&&t.startsWith("device:"),b1=class extends I{constructor(){super(),this._open=new Set}get _sources(){let C=this.config?.metric_sources||{};return Array.isArray(C.sources)?C.sources.filter(H=>H?.ref).map(H=>({ref:H.ref,overrides:{...H.overrides||{}},disabled:!!H.disabled})):this.config?.entity?[{ref:this.config.entity,overrides:{}}]:[]}_station(C){return{entity:this.config?.entity,metric_sources:{...this.config?.metric_sources||{},sources:C}}}_commit(C){let H=C.filter(l=>l?.ref).map(l=>{let m=Object.fromEntries(Object.entries(l.overrides||{}).filter(([,s])=>s));return{ref:l.ref,...Object.keys(m).length?{overrides:m}:{},...l.disabled?{disabled:!0}:{}}}),L={...this.config?.metric_sources||{}};delete L.primary,delete L.fallback,delete L.custom,delete L.device_map,H.length?L.sources=H:delete L.sources;let e=l=>(this.hass?.states?.[l]?.attributes?.supported_features&7)!==0,o=l=>l.map(m=>m.ref).filter(m=>typeof m=="string"&&m.startsWith("weather.")),i=o(H.filter(l=>!l.disabled)),d=o(H),A=i.find(e)||i[0]||d.find(e)||d[0]||this.config?.entity;this.dispatchEvent(new CustomEvent("sources-changed",{detail:{entity:A,metric_sources:Object.keys(L).length?L:void 0}}))}_info(C){let H=this.hass;if(C2(C)){let e=H?.devices?.[C.slice(7)],o=S2(H,C.slice(7))[0];return{icon:"mdi:access-point",name:e?.name_by_user||e?.name||C.slice(7),kind:"Station device",sub:[e?.manufacturer,e?.model].filter(Boolean).join(" "),integ:J(H,o)}}let L=H?.states?.[C];return C.startsWith("weather.")?{icon:"mdi:weather-partly-cloudy",name:L?.attributes?.friendly_name||C,kind:"Weather entity",sub:"forecast + condition",integ:J(H,C)}:{icon:"mdi:eye-outline",name:L?.attributes?.friendly_name||C,kind:"Sensor",sub:C,integ:J(H,C)}}_candidates(C,H){let L=this.hass;if(!C2(C))return[];let e=H&&L.states[H]?.attributes?.unit_of_measurement,o=C.slice(7),i=L.devices?.[o]?.config_entries||[];return[...new Set([o,...Object.entries(L.devices||{}).filter(([,A])=>(A.config_entries||[]).some(l=>i.includes(l))).map(([A])=>A)])].flatMap(A=>S2(L,A)).filter(A=>A.startsWith("sensor.")&&L.states[A]?.attributes?.unit_of_measurement&&(!e||L.states[A].attributes.unit_of_measurement===e)).sort()}render(){if(!this.hass)return u;let C=this._sources,H=this._station(C),L=C.some(e=>e.ref.startsWith("weather.")&&!e.disabled);return a`
      <div class="list">
        ${C.map((e,o)=>this._source(e,o,C,H))}
      </div>
      ${L?u:a`<p class="warn">Add a weather entity (e.g. OpenWeatherMap) — it supplies the forecast and condition.</p>`}
      ${this._adding?this._addForm(C):a`<button class="add" type="button" @click=${()=>this._adding=!0}><ha-icon icon="mdi:plus"></ha-icon>Add source</button>`}
    `}_source(C,H,L,e){let o=this._info(C.ref),i=this._open.has(C.ref),d=m7.map(([s,v])=>{let f=Z3(e,this.hass,C.ref,s),w=C.ref.startsWith("weather.")?this.hass.states[C.ref]?.attributes?.[s]!=null:!!f;return{k:s,label:v,def:C.ref.startsWith("weather.")?w?C.ref:null:f,ov:C.overrides[s]||"",has:w||!!C.overrides[s]}}),A=d.filter(s=>s.has).length,l=s=>{let v=L.map(f=>({...f,overrides:{...f.overrides}}));s(v),this._commit(v)},m=()=>{let s=new Set(this._open);s.has(C.ref)?s.delete(C.ref):s.add(C.ref),this._open=s};return a`<div class="src ${i?"open":""} ${C.disabled?"off":""}">
      <div class="hd" @click=${m} role="button" tabindex="0" aria-expanded=${String(i)} @keydown=${s=>(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),m())}>
        <span class="rank">${H+1}</span>
        <ha-icon class="lead" icon=${o.icon}></ha-icon>
        <div class="tt">
          <div class="nm">${o.name}${C.disabled?a` <span class="tag">hidden</span>`:u}</div>
          <div class="sb"><span class="pill">${o.kind}</span>${o.integ?a`<span class="pill integ">${o.integ}</span>`:u}<span>${A} value${A===1?"":"s"}</span></div>
        </div>
        <span class="acts" @click=${s=>s.stopPropagation()}>
          <button class="ib" title="Higher priority" ?disabled=${H===0} @click=${()=>l(s=>[s[H-1],s[H]]=[s[H],s[H-1]])}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
          <button class="ib" title="Lower priority" ?disabled=${H===L.length-1} @click=${()=>l(s=>[s[H+1],s[H]]=[s[H],s[H+1]])}><ha-icon icon="mdi:arrow-down"></ha-icon></button>
          <button class="ib" title=${C.disabled?"Use this source":"Skip this source"} @click=${()=>l(s=>s[H].disabled=!s[H].disabled)}><ha-icon icon=${C.disabled?"mdi:eye-off":"mdi:eye"}></ha-icon></button>
          <button class="ib del" title="Remove source" @click=${()=>l(s=>s.splice(H,1))}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
        </span>
        <ha-icon class="chev" icon=${i?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${i?a`<div class="bd">
            ${o.sub?a`<div class="meta">${o.sub}</div>`:u}
            <div class="tbl">
              ${d.filter(s=>s.has||C2(C.ref)).map(s=>{let v=s.ov||s.def,f=v&&!v.startsWith("weather.")?J1(this.hass,v):null,w=v?.startsWith("weather.")?this.hass.states[v]?.attributes?.[s.k]:null;return a`<span class="k">${s.label}</span>
                  <wsfc-entity-select .hass=${this.hass} .value=${s.ov} .defaultEntity=${s.def}
                    .defaultLabel=${C.ref.startsWith("weather.")&&!s.ov?s.def?"Default \u2014 attribute":"Default \u2014 none":void 0}
                    .candidates=${this._candidates(C.ref,s.def)} label=${s.label}
                    @value-changed=${O=>l(F=>F[H].overrides[s.k]=O.detail.value||void 0)}></wsfc-entity-select>
                  <span class="v">${f?`${f.value} ${f.unit}`:w!=null?String(w):""}</span>`})}
            </div>
            ${C.ref.startsWith("weather.")?a`<p class="hint">Only values this entity has are listed. Forecasts always come from the highest weather entity.</p>`:u}
          </div>`:u}
    </div>`}_addForm(C){let H=L=>{if(!L||C.some(i=>i.ref===L)){this._adding=!1;return}this._adding=!1;let e=C.slice(),o=e.findIndex(i=>i.ref.startsWith("weather."));C2(L)&&o>=0?e.splice(o,0,{ref:L,overrides:{}}):e.push({ref:L,overrides:{}}),this._commit(e)};return a`<div class="addbox">
      <ha-form .hass=${this.hass} .data=${{d:""}} .schema=${[{name:"d",selector:{device:{}}}]} .computeLabel=${()=>"Station device (e.g. your Ecowitt gateway or sensor)"}
        @value-changed=${L=>{L.stopPropagation(),H(L.detail.value?.d&&`device:${L.detail.value.d}`)}}></ha-form>
      <ha-form .hass=${this.hass} .data=${{e:""}} .schema=${[{name:"e",selector:{entity:{}}}]} .computeLabel=${()=>"\u2026or a weather entity or single sensor"}
        @value-changed=${L=>{L.stopPropagation(),H(L.detail.value?.e)}}></ha-form>
      <button class="add ghost" type="button" @click=${()=>this._adding=!1}>Cancel</button>
    </div>`}};E(b1,"properties",{hass:{attribute:!1},config:{attribute:!1},_open:{state:!0},_adding:{state:!0}}),E(b1,"styles",D`
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
  `);customElements.get("wsfc-sources-editor")||customElements.define("wsfc-sources-editor",b1);var w3=globalThis.__wsfcHost?.["src/panels/graph.js"];if(!w3)throw new Error("wsfc-editor.js: the card did not provide src/panels/graph.js; update every file of the card together");var{PRESET_SERIES:g2,WsfcGraph:w8}=w3;var b3=globalThis.__wsfcHost?.["src/panels/statistics.js"];if(!b3)throw new Error("wsfc-editor.js: the card did not provide src/panels/statistics.js; update every file of the card together");var{SGCC_PRESETS:_3,STAT_PRESETS:O3,statisticsCard:_8,statisticsEngine:y3}=b3;var p1=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],c7=t=>/^#[0-9a-f]{6}$/i.test(t||"")?t:/^#[0-9a-f]{3}$/i.test(t||"")?"#"+t.slice(1).split("").map(C=>C+C).join(""):"#888888";function v7(t){if(t.type==="statistics"){let C=t.preset||"temps",H=_3[C]||{};return((Array.isArray(t.metrics)&&t.metrics.length?t.metrics:H.metrics||O3[C]?.metrics)||[]).map((e,o)=>({metric:e,color:t.colors?.[e],defColor:H.series?.[e]?.color||z[e]?.color||p1[o%p1.length],entity:t.entity_overrides?.[e]||"",key:"map"}))}return Array.isArray(t.series)&&t.series.length?t.series.map((C,H)=>({metric:C.metric,idx:H,color:C.color,defColor:z[C.metric]?.color||p1[H%p1.length],entity:C.entity||"",label:C.label,key:"list"})):(g2[t.type]||g2.graph).map((C,H)=>({metric:C.metric,color:t.colors?.[C.metric],defColor:C.color||z[C.metric]?.color||p1[H%p1.length],entity:t.entities?.[C.metric]||"",key:"map"}))}var _1=class extends I{_set(C,H,L){let e=A1(this.panel);if(C.key==="list")e.series[C.idx]=K({...e.series[C.idx],[H]:L||void 0});else{let o=H==="color"?"colors":e.type==="statistics"?"entity_overrides":"entities";e[o]=K({...e[o]||{},[C.metric]:L||void 0}),Object.keys(e[o]).length||delete e[o]}this.dispatchEvent(new CustomEvent("panel-changed",{detail:{panel:e}}))}_candidates(C){let H=C&&this.hass.states[C]?.attributes?.unit_of_measurement;return S3(this.station,this.hass).filter(L=>L.startsWith("sensor.")&&(!H||this.hass.states[L]?.attributes?.unit_of_measurement===H))}render(){if(!this.hass||!this.panel)return u;let C=v7(this.panel),H=this.panel.type!=="statistics"||y3(this.panel)==="sgcc";return a`<div class="tbl">
      <span class="h">Series</span><span class="h">Color</span><span class="h">Sensor</span>
      ${C.map(L=>{let e=I1(L.metric,this.station,this.hass),o=L.color||L.defColor;return a`<span class="k">${L.label||z[L.metric]?.label||L.metric||"Series"}</span>
          <span class="c">
            ${H?a`<input type="color" .value=${c7(o)} title="Line color" aria-label="Line color" @change=${i=>this._set(L,"color",i.target.value)} />
                ${L.color?a`<button type="button" title="Default color" @click=${()=>this._set(L,"color","")}>↺</button>`:u}`:a`<span class="na" title="Home Assistant's Statistics graph picks its own colors">auto</span>`}
          </span>
          <wsfc-entity-select .hass=${this.hass} .value=${L.entity} .defaultEntity=${e} .candidates=${this._candidates(e)} label=${`${L.metric} sensor`}
            @value-changed=${i=>this._set(L,"entity",i.detail.value)}></wsfc-entity-select>`})}
    </div>`}};E(_1,"properties",{hass:{attribute:!1},panel:{attribute:!1},station:{attribute:!1}}),E(_1,"styles",D`
    .tbl { display: grid; grid-template-columns: minmax(80px, auto) auto minmax(0, 1fr); gap: 6px 10px; align-items: center; font-size: 12px; }
    .h { font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-muted, #888); }
    .k { color: var(--ltek-c-label, #ccc); }
    .c { display: flex; align-items: center; gap: 2px; }
    input[type="color"] { width: 30px; height: 24px; padding: 0; border: 1px solid var(--ltek-c-border, #444); border-radius: 6px; background: transparent; cursor: pointer; }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; font-size: 14px; padding: 0 2px; }
    .na { font-size: 11px; color: var(--ltek-c-muted, #888); }
  `);customElements.get("wsfc-series-editor")||customElements.define("wsfc-series-editor",_1);var H2=[["sunny","Sunny"],["clear-night","Clear night"],["partlycloudy","Partly cloudy"],["cloudy","Cloudy"],["fog","Fog"],["rainy","Rainy"],["pouring","Pouring"],["lightning","Lightning"],["lightning-rainy","Lightning and rain"],["hail","Hail"],["snowy","Snowy"],["snowy-rainy","Sleet (snow and rain)"],["windy","Windy"],["windy-variant","Windy with clouds"],["exceptional","Exceptional"]],O1=class extends I{render(){let C=this.config||{},H=this.hass,L=H?.states?.[C.entity],e=this.condition||L?.state||"partlycloudy",o=this.time==="night"||this.time!=="day"&&e==="clear-night",i=L?.attributes||{},d=[C.anim_low_power?M3:"",...o3(C)].filter(Boolean).join(";"),A=(H2.find(([l])=>l===e)||[,e])[1];return a`<div class="box" style=${d}>
      <wsfc-animation-provider .hass=${H} .wsfcNight=${o}
        .weatherEntity=${{...L||{entity_id:C.entity,attributes:{}},state:e}}
        .config=${{entity:C.entity,show_condition_effects:C.background_effects??!0,show_moon_phase:C.background_moon_phase??!0,fog_density:C.fog_density,wind_density:C.wind_density,lightning_interval:C.lightning_interval,lightning_intensity:C.lightning_intensity,lightning_bolts:C.lightning_bolts}}
        .currentForecast=${{wind_speed:i.wind_speed,wind_bearing:i.wind_bearing}}></wsfc-animation-provider>
      <span class="tag">${A} · ${o?"Night":"Day"}</span>
    </div>`}};E(O1,"properties",{hass:{attribute:!1},config:{attribute:!1},condition:{},time:{}}),E(O1,"styles",D`
    :host { display: block; }
    .box { position: relative; height: 200px; border-radius: var(--ltek-radius, 12px); overflow: hidden;
      background: var(--ha-card-background, var(--card-background-color, #1c1c1c)); border: 1px solid var(--divider-color, rgba(127,127,127,.25)); }
    .tag { position: absolute; left: 10px; bottom: 8px; z-index: 2; font-size: var(--ltek-fs-small, 12px); font-weight: 600; padding: 3px 9px; border-radius: 999px;
      background: rgba(0, 0, 0, 0.45); color: #fff; }
  `);customElements.get("wsfc-bg-preview")||customElements.define("wsfc-bg-preview",O1);var k3=globalThis.__wsfcHost?.["src/card/condition.js"];if(!k3)throw new Error("wsfc-editor.js: the card did not provide src/card/condition.js; update every file of the card together");var{clearSkyRadiation:I8,conditionSummary:T3,deriveHass:G8,ensureSolarScale:U8,lightDetails:Q8,resetSolarScale:j8,skyClearness:q8,solarScale:K8,stationCondition:Y8,sunElevation:X8}=k3;var F3=["temperature","apparent_temperature","dew_point","humidity","pressure","wind_speed","wind_gust_speed","wind_bearing","uv_index","solar_radiation","illuminance","precipitation"],u7={wind_bearing:"Wind direction",precipitation:"Rain rate"},L2=[{name:"condition_source",label:"Current condition from",selector:{select:{options:[{value:"entity",label:"The weather entity"},{value:"station",label:"Your station's readings (the entity fills in the rest)"}]}},default:"entity",helper:"With the station: rain rate, solar radiation (or light), humidity, wind, temperature and the lightning sensor decide sunny, partly cloudy, cloudy, rain, snow, fog, windy and lightning. The hero, bulletin and background follow it. At night, and when the sun is low, the entity's view of the sky is used."},{name:"station_solar_scale",label:"Clear-sky calibration",when:t=>t.condition_source==="station",selector:{number:{min:20,max:160,step:5,mode:"slider",unit_of_measurement:"%"}},helper:"Auto (not set): learned from the sensor's last 10 days against the clear-sky model, so it's judged against its own clear days. Set it to force a value: lower if clear days read as cloudy, higher if cloudy days read as sunny."},{name:"station_windy_mph",label:"Windy from",when:t=>t.condition_source==="station",selector:{number:{min:10,max:60,step:1,mode:"slider",unit_of_measurement:"mph"}},default:25},{name:"station_pouring_inh",label:"Pouring from",when:t=>t.condition_source==="station",selector:{number:{min:.1,max:1,step:.05,mode:"slider",unit_of_measurement:"in/h"}},default:.3}],F1=[["Background",[{name:"background",selector:{select:{options:[{value:"none",label:"None (theme)"},{value:"animated",label:"Animated weather \u2014 the hero's animation behind the whole card"},{value:"image",label:"Image \u2014 upload one or use a URL"}]}},helper:"With an animated or image background, panels become see-through and the hero stops drawing its own."}]],["Animation",[{name:"background_effects",label:"Animation effects",when:t=>t.background==="animated",selector:{select:{multiple:!0,options:[["rain","Rain"],["snow","Snow"],["lightning","Lightning"],["sky","Sky"],["moon","Moon"],["sun","Sun"],["cloud","Clouds"],["fog","Fog"],["hail","Hail"],["wind","Wind gusts"],["exceptional","Unusual weather glow"]].map(([t,C])=>({value:t,label:C}))}},default:["rain","snow","lightning","sky","moon","sun","cloud","fog","hail","wind","exceptional"],helper:"Which effects the weather animation draws. At night it shows the dark sky and the moon instead of the sun. Rain, snow and storms get an overcast sky and cloud deck (Sky, Clouds)."},{name:"background_moon_phase",label:"Show moon phase",when:t=>t.background==="animated",selector:{boolean:{}},default:!0,helper:"Shade the night-time moon to the current lunar phase (off: a full moon)."},{name:"anim_low_power",label:"Low-power animation",when:t=>t.background!=="image",selector:{boolean:{}},default:!1,helper:"For tablets and other low-powered screens: no panel blur while the background animates, each cloud drawn once on its own, and simpler cloud edges. Smoother drift; clouds look a little softer."},{name:"anim_speed",label:"Overall speed",when:t=>t.background!=="image",selector:{number:{min:10,max:150,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Every animation at once (100% = normal, 50% = half as fast), for the card background and the hero's own animation. Per-effect speeds below multiply it."},...t3.map(([t,,C])=>({name:t,label:C,sub:"Per-effect speeds",subIcon:"mdi:speedometer",when:H=>H.background!=="image",selector:{number:{min:10,max:150,step:5,mode:"slider",unit_of_measurement:"%"}},default:100})),{name:"fog_density",label:"Fog density",when:t=>t.background==="animated"&&(t.background_effects??["fog"]).includes("fog"),selector:{number:{min:30,max:200,step:10,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"How thick the fog is: the number of mist banks and how much they hide."},{name:"lightning_interval",label:"Time between strikes",when:t=>t.background==="animated"&&(t.background_effects??["lightning"]).includes("lightning"),selector:{number:{min:2,max:90,step:1,mode:"slider",unit_of_measurement:"s"}},default:12,helper:"In storms: roughly how often the clouds light up (each strike comes at its own irregular time around this)."},{name:"lightning_bolts",label:"Lightning bolts",when:t=>t.background==="animated"&&(t.background_effects??["lightning"]).includes("lightning"),selector:{number:{min:0,max:100,step:5,mode:"slider",unit_of_measurement:"%"}},default:20,helper:"How many of the flashes drop a visible bolt from the cloud (the others light the clouds from inside)."},{name:"lightning_intensity",label:"Lightning intensity",when:t=>t.background==="animated"&&(t.background_effects??["lightning"]).includes("lightning"),selector:{number:{min:10,max:200,step:10,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"How brightly the clouds and the sky light up."},{name:"wind_density",label:"Wind density",when:t=>t.background==="animated"&&(t.background_effects??["wind"]).includes("wind"),selector:{number:{min:30,max:200,step:10,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"How many wisps of air blow across in windy weather."}]],["Image",[{name:"background_image",when:t=>t.background==="image",selector:{media:{accept:["image/*"],image_upload:!0}},helper:"Image background: upload a PNG, JPG, WEBP\u2026 or pick one from your media."},{name:"background_image_url",when:t=>t.background==="image",selector:{text:{type:"url"}},helper:"Image background: or an image URL (wins over the upload), e.g. /local/images/sky.jpg."},{name:"background_image_fit",when:t=>t.background==="image",selector:{select:{options:[{value:"cover",label:"Fill (crop to fit)"},{value:"contain",label:"Fit (whole image)"},{value:"tile",label:"Tile"}]}},default:"cover"},{name:"background_dim",when:t=>t.background==="image",selector:{number:{min:0,max:.9,step:.05,mode:"slider"}},default:.25,helper:"Image background: darken it so text stays readable (0 = off)."}]]],P1=[["Card",[{name:"title",selector:{text:{}},helper:"Optional title row above the panels."},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]],["Text & icons",[{name:"text_size",label:"Text size",selector:{number:{min:8,max:32,step:1,mode:"slider",unit_of_measurement:"px"}},default:14,helper:"Base text size for every panel (designed at 14 px): all their text grows or shrinks with it. A panel's own Text size (%) scales this."},{name:"icon_size",label:"Icon size",selector:{number:{min:12,max:64,step:1,mode:"slider",unit_of_measurement:"px"}},default:24,helper:"Base icon size for every panel (designed at 24 px). A panel's own Icon size (%) scales this."},{name:"_reset_sizes",kind:"action",label:"Every panel uses these sizes",helper:"Clears the Text size and Icon size set on single panels."}]],["Panel titles",[{name:"title_size",label:"Title text size",selector:{number:{min:8,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Not set: follows Text size (15 px at the default)."},{name:"title_icon_size",label:"Title icon size",selector:{number:{min:10,max:64,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Not set: follows Icon size (20 px at the default)."},...F5,{name:"_reset_titles",kind:"action",label:"Every panel uses these title colours",helper:"Clears the title colours set on single panels."}]],["Panels",[{name:"text_contrast",label:"Text contrast",selector:{select:{options:[{value:"off",label:"Off"},{value:"auto",label:"Auto \u2014 a soft halo behind text and icons"},{value:"strong",label:"Strong \u2014 an outline around text and icons"}]}},default:"off",helper:"Makes text and icons readable on any background (the animated sky, see-through panels): the halo is dark in a dark theme and light in a light one. Each panel can override it (Default Overrides)."},{name:"_reset_contrast",kind:"action",label:"Every panel uses this setting",helper:"Clears Text contrast set on single panels."},{name:"panel_opacity",selector:{number:{min:0,max:1,step:.05,mode:"slider"}},helper:"With a card background: panel opacity (0 = fully transparent, 1 = solid). Default 0.55."},{name:"panel_blur",selector:{number:{min:0,max:30,step:1,mode:"slider",unit_of_measurement:"px"}},when:t=>!t.anim_low_power,helper:"With a card background: blur behind panels. Default 6 (off with Low-power animation)."},{name:"panel_radius",selector:{number:{min:0,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Auto: your theme's card corner radius (shown above). Move the slider to set your own; \xD7 goes back to Auto."},{name:"panel_shadow",selector:{select:{options:[{value:"none",label:"None"},{value:"soft",label:"Soft"},{value:"medium",label:"Medium"},{value:"strong",label:"Strong"}]}},default:"none"},{name:"panel_border_width",selector:{number:{min:0,max:6,step:.5,mode:"slider",unit_of_measurement:"px"}},helper:"Border (default none)."},{name:"panel_border_color",selector:{text:{}},helper:"Not set: the theme's divider color."},{name:"panel_glow",selector:{boolean:{}},default:!1,helper:"A soft glow around each panel."},{name:"panel_glow_color",when:t=>!!t.panel_glow,selector:{text:{}},helper:"Not set: the border color, else the theme's primary color."},{name:"panel_glow_size",when:t=>!!t.panel_glow,selector:{number:{min:2,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},default:10}]]],e2=[["Alerts bar",[{name:"alerts_bar",label:"Show the Alerts bar",selector:{boolean:{}},default:!1,helper:"A thin row at the top of the card. It appears only while something needs attention and is hidden the rest of the time. Tap an alert to open its panel (Frost & heat watch, Lightning) or the alert's details."},{name:"_alerts_sources",kind:"info",when:t=>!!t.alerts_bar}]],["What it shows",[{name:"alerts_watch",label:"Heat and frost",when:t=>!!t.alerts_bar,selector:{boolean:{}},default:!0,helper:"From your station's temperature, feels-like, dew point and wind, and tonight's forecast low."},{name:"alerts_lightning",label:"Lightning nearby",when:t=>!!t.alerts_bar,selector:{boolean:{}},default:!0,helper:"From your station's lightning sensor (e.g. Ecowitt WH57): strikes within 10 mi in the last 30 minutes."},{name:"alerts_weather",label:"Weather alerts",when:t=>!!t.alerts_bar,selector:{boolean:{}},default:!0,helper:"Official watches and warnings from an alerts sensor, such as the NWS Alerts integration's."},{name:"alerts_sun",label:"Sun on the house",when:t=>!!t.alerts_bar,selector:{boolean:{}},default:!1,helper:`Strong direct sun on a side of the house while it's hot, e.g. "West side: strong direct sun, 88 \xB0F". Needs the Sunlight Visualizer integration (which walls face the sun); the sun's strength comes from your station's solar sensor first.`},{name:"alerts_sun_alignment",label:"Wall faces the sun at least",when:t=>!!t.alerts_bar&&t.alerts_sun===!0,selector:{number:{min:10,max:100,step:5,mode:"slider",unit_of_measurement:"%"}},default:50,helper:"Sunlight Visualizer's sun alignment for that wall: 100 % = the sun straight in front of it."},{name:"alerts_sun_solar",label:"Sun at least",when:t=>!!t.alerts_bar&&t.alerts_sun===!0,selector:{number:{min:100,max:1e3,step:50,mode:"slider",unit_of_measurement:"W/m\xB2"}},default:600,helper:"Sunlight on flat ground: about 1000 W/m\xB2 on a clear summer noon, under 200 when overcast."},{name:"alerts_sun_temp",label:"Temperature at least",when:t=>!!t.alerts_bar&&t.alerts_sun===!0,selector:{number:{min:10,max:120,step:1,mode:"slider"}},helper:"In your temperature unit. Not set: 80 \xB0F (27 \xB0C)."},{name:"alerts_entity",label:"Weather alerts sensor",when:t=>!!t.alerts_bar&&t.alerts_weather!==!1,selector:{entity:{domain:"sensor"}},helper:"Not set: the card uses the alerts sensor it finds (shown above). Choose one to use a different sensor."}]]],$3={_reset_contrast:["text_contrast"],_reset_sizes:["text_scale","icon_scale","icon_scale_all"],_reset_titles:["expanded_icon_color","expanded_text_color"]};function P3(t,C,H,L){return[{name:t,label:C,selector:{select:{options:[...H.map((e,o)=>({value:e,label:`mdi:${e}${o?"":" (default)"}`})),{value:"custom",label:"Custom icon\u2026"}]}},default:H[0],helper:L},{name:`${t}_custom`,label:"Custom icon",when:e=>e[t]==="custom",selector:{icon:{}},helper:"Any Home Assistant icon, e.g. mdi:arrow-expand-down."}]}var r2=[["Screen fit & sizing",[{name:"layout",selector:{select:{options:[{value:"auto",label:"Size to content"},{value:"fullscreen",label:"Full screen (fills the view below the header)"}]}}},{name:"screen_fit",label:"Screen fit",selector:{select:{options:[{value:"none",label:"Off \u2014 panels are their set heights; the page scrolls"},{value:"rows",label:"Share the screen height \u2014 panels grow to fit their content"},{value:"strict",label:"Exact heights \u2014 content scrolls inside its panel"},{value:"scale",label:"Auto-fit \u2014 exact heights, and the contents scale to the screen"}]}},default:"rows",helper:"Share and Exact apply in Full screen. Auto-fit takes the layout and sizes you set as the design for the Screen guide's size (Layout Map \u2192 Screen guide) and scales each panel's contents to every other screen, smaller where they'd still overflow."},{name:"panel_fill",label:"Panels fill their space",selector:{boolean:{}},default:!1,helper:"Each panel with a set height scales its contents up or down to the largest size that fits the panel, between Smallest and Largest content scale. Text size, Icon size and the other size sliders then change the proportions, and the panel still fits. Each panel can turn it on or off (Size and Scaling \u2192 Fill the panel). The hero and Wind fit themselves; maps aren't scaled."},{name:"auto_fit_min",label:"Smallest content scale",when:t=>t.screen_fit==="scale"||!!t.panel_fill,selector:{number:{min:30,max:100,step:5,mode:"slider",unit_of_measurement:"%"}},default:60,helper:"Below this a panel scrolls instead, so text stays readable."},{name:"auto_fit_max",label:"Largest content scale",when:t=>t.screen_fit==="scale"||!!t.panel_fill,selector:{number:{min:100,max:250,step:5,mode:"slider",unit_of_measurement:"%"}},default:150,helper:"On screens bigger than the design."},{name:"panel_overflow",label:"When a panel's content doesn't fit",when:t=>!(t.layout==="fullscreen"&&["strict","scale"].includes(t.screen_fit)),selector:{select:{options:[{value:"grow",label:"Grow \u2014 the panel gets taller (and its row with it)"},{value:"scroll",label:"Scroll \u2014 the panel keeps its height, with a scroll bar inside"}]}},default:"grow",helper:"For panels with a set height (Height above 0); each panel can override this. Scroll locks every panel to its size in any layout; Strict fit does the same in full screen."},{name:"layout_gaps",label:"Gaps between panels",selector:{select:{options:[{value:"close",label:"Close up \u2014 panels move up into empty space"},{value:"keep",label:"Keep \u2014 panels stay where they're placed"}]}},default:"close",helper:"After you move a panel in the Layout Map, or when one is hidden (by its button, or when it has nothing to show)."},{name:"layout_size",selector:{select:{options:[{value:"auto",label:"Automatic (from the card's width)"},{value:"wide",label:"Wide \u2014 desktop layout"},{value:"medium",label:"Medium \u2014 tablet layout"},{value:"narrow",label:"Narrow \u2014 phone layout (stacked)"}]}},helper:"In a Sections view the card is only as wide as its section; widen the section or use a Panel view for the desktop layout."},{name:"row_height",selector:{number:{min:40,max:300,mode:"box",unit_of_measurement:"px"}},helper:"Height of one row unit (default 110)."},{name:"gap",selector:{number:{min:0,max:32,mode:"box",unit_of_measurement:"px"}},helper:"Space between panels (default 12)."}]]],t2=[["Collapsing and opening",[{name:"collapsed_view",label:"Panels set up with a collapse button collapse to",selector:{select:{options:[{value:"minimal",label:"Minimal \u2014 the title and a line of info (e.g. 7 strikes today)"},{value:"compact",label:"Compact \u2014 one row of tiles with all the data"}]}},default:"minimal",helper:"For panels whose YAML has collapsible: true without a view of their own. Panels set with Panel View don't use this."},{name:"collapsed_open",label:"Collapsed panels open (card default)",selector:{select:{options:[{value:"auto",label:"Automatic \u2014 over the other panels in full screen or Auto-fit, else in place"},{value:"inplace",label:"In place \u2014 the panel grows, the others move"},{value:"overlay",label:"Over the other panels \u2014 nothing moves; tap outside or Esc to close"},{value:"popup",label:"As a pop-up"}]}},default:"auto",helper:"Each panel can override this (Collapse \u2192 Opens)."},...P3("open_icon_small","Small pop-over icon",x3,"On a collapsed panel that opens over the others."),...P3("open_icon_full","Full-size icon",u3,"Expand to the whole card, tap-to-open tiles and panels that open as a pop-up."),{name:"collapse_title_tap",label:"Tap the title to collapse / expand",selector:{boolean:{}},default:!0,helper:"For panels with Collapse button on (each panel can override this)."},{name:"show_collapse_hint",label:"Hint under the title while collapsed",selector:{boolean:{}},default:!1,helper:'e.g. "Tap title to show" (off by default: the open button already says it).'},{name:"collapse_hint",label:"Hint text",when:t=>!!t.show_collapse_hint,selector:{text:{}},helper:'Default "Tap title to show".'},{name:"collapsed_info",label:"Info in the header while collapsed",selector:{select:{options:[{value:"summary",label:"The panel's summary (e.g. strikes today, rain today)"},{value:"off",label:"None"}]}},default:"summary"},...k5]]],k1=[{name:"remember",selector:{boolean:{}},default:!0,helper:"Keep which panels were shown or hidden with the panel buttons after a refresh, in each browser. Off: every load starts from the panels' Shown setting (the eye icon)."}],x7=[...L2,...[...F1,...P1,...e2,...r2,...t2].flatMap(([,t])=>t)].filter(t=>!t.kind),C1={layout:"auto",panel_bar:!0,remember:!0,screen_fit:"rows",layout_size:"auto",background:"none",panel_opacity:.55,panel_blur:6},V2={entity:"Weather entity",title:"Title",subtitle:"Subtitle",icon:"Icon",layout:"Layout",panel_bar:"Panel buttons",remember:"Remember Panel Button States",station_device:"Weather station device",layout_size:"Layout size",fit_strict:"Strict fit to screen dimensions",row_height:"Row height",gap:"Gap",span:"Width",rows:"Height",display:"Display",in_bar:"Panel button",tile_background:"Panel background",show:"Shown",metric:"Metric",label:"Label",color:"Color",digits:"Decimals",chart:"Sparkline",hours:"Sparkline hours",show_minmax:"Show today's min/max",series:"Series",ranges:"Range buttons",range:"Default range",show_readings:"Show current readings",left_min:"Left axis min",left_max:"Left axis max",right_min:"Right axis min",right_max:"Right axis max","entities.temperature":"Temperature sensor","entities.dew_point":"Dew point sensor","entities.humidity":"Humidity sensor","entities.wind_speed":"Wind speed sensor","entities.wind_gust_speed":"Gust sensor","entities.wind_bearing":"Wind direction sensor",view:"Default view",show_chart:"Show speed/gust chart",rose_bins:"Rose speed bins",radar:"Radar loop",base_map:"Base map",zoom:"Zoom",latitude:"Latitude",longitude:"Longitude",radar_opacity:"Radar opacity",owm_api_key:"OpenWeatherMap API key",owm_layers:"OpenWeatherMap layers",owm_default:"Layer shown first",owm_opacity:"Layer opacity",base_map_url:"Custom tile URL",base_map_attribution:"Custom tile attribution",day_offset:"Day",icon_size:"Icon size",show_moon:"Show moon",show_sun:"Show sun",attribute:"Text attribute",alerts_entity:"Alerts sensor",card:"Card configuration",show_status:"Show station status",show_devices:"Show device names",overlay:"Layer",model:"Forecast model",level:"Altitude",wind_unit:"Wind unit",marker:"Location pin",preset:"Graph",engine:"Graph card",days_to_show:"Days",period:"Resolution",chart_type:"Chart type",stat_types:"Values",show_arc:"Sun arc",show_sky:"Sky gradient & forecast row",timeframe:"Time window",anchor:"Now is",moon:"Moon at night",moon_phase:"Draw the moon phase",background:"Card background",panel_opacity:"Panel opacity",panel_blur:"Panel blur",sky_bar:"Sky Bar in the hero",show_facts:"Show sun times",moon_size:"Moon size",direction:"Direction",min_width:"Minimum width",grow:"Grow",show_bar:"Panel buttons here",background_image:"Background image",background_image_url:"Background image URL",background_image_fit:"Image fit",background_dim:"Darken image",panel_radius:"Corner radius",panel_shadow:"Shadow",panel_border_width:"Border width",panel_border_color:"Border color",panel_glow:"Glow",panel_glow_color:"Glow color",panel_glow_size:"Glow size",rose_engine:"Wind rose",fit:"Fit to the panel",show_view_buttons:"View buttons",readings_position:"Readings",chart_position:"Chart position",show_legend:"Rose legend",wr_bars:"Speed bars",wr_corners:"Corner info",wr_stats:"Min / avg / max",wr_buttons:"Buttons",wr_buttons_position:"Button position",wr_period:"Default period",wr_beaufort:"Bar scale",wr_arrow:"Direction arrow",windrose_chart:"Chart with the Wind Rose Card",compass_arrow_size:"Pointer size",compass_arrow_color:"Pointer color",wr_arrow_size:"Arrow size",wr_arrow_color:"Arrow color",wr_speed_arrows:"Speed arrows",wr_speed_arrow_size:"Speed arrow size",stats_items:"Show",stats_align:"Alignment",chart_legend:"Chart legend",dial_scale:"Size",wr_scale:"Size",corner_speed:"Speed",corner_direction:"Direction",corner_gust:"Gust",corner_label_size:"Label size",corner_value_size:"Value size",corner_color:"Text color",stats_size:"Text size",stats_weight:"Text weight",stats_color:"Text color",windrose_preset:"Wind Rose Card preset",windrose:"Wind Rose Card options",auto_scale:"Set scale to Auto",show_time:"Show the time",show_seconds:"Seconds",time_format:"Time format",show_date:"Show the date",date_format:"Date format",align:"Alignment",auto_size:"Auto size",time_size:"Time size",date_size:"Date size",time_weight:"Time weight",date_color:"Date color",scale:"Auto scaling",device:"Pollen location",hide_off_season:"Hide out-of-season species",hide_when_off_season:"Hide the panel out of season",hide_when_none:"Hide the panel when all are None",species:"Species",max_rows:"Rows",show_tomorrow:"Tomorrow's trend",show_season:"Season strip",location:"Town / area text",seasons:"Season months",entities:"Sensors",pollutants:"Pollutants",show_scale:"AQI scale",show_aqi:"Show the AQI",extra:"More readings",bar_height:"Bar height",source:"Source text",show_source:"Show the source",show_location:"Show the town / area",hide_none:"Hide species at None",show_nothing:'Show the "nothing in the air" text',nothing_text:'"Nothing in the air" text',"entities.aqi":"AQI sensor","entities.pm2_5":"PM2.5 sensor","entities.pm10":"PM10 sensor","entities.ozone":"Ozone sensor","entities.co2":"CO\u2082 sensor"},R3=(t,C)=>C.split(".").reduce((H,L)=>H==null?H:H[L],t);function f7(t,C,H){let L=C.split("."),e=t;L.slice(0,-1).forEach(i=>e=e[i]=e[i]&&typeof e[i]=="object"?{...e[i]}:{});let o=L[L.length-1];H===void 0||H===""||H===null||Array.isArray(H)&&!H.length?delete e[o]:e[o]=H}function y1(t,C,H={}){let L={};for(let e of C){let o=R3(t,e.name);L[e.name]=o!==void 0?o:H[e.name]!==void 0?H[e.name]:e.default}return L}function w2(t,C,H,L={}){let e=A1(t);for(let o of C){let i=H[o.name],d=L[o.name]!==void 0?L[o.name]:o.default;d!==void 0&&JSON.stringify(i)===JSON.stringify(d)&&(i=void 0),f7(e,o.name,i)}return K(e)}var B3={air_quality:[["Tablet compact",{layout:"tiles",show_scale:!1,show_location:!1,show_source:!1,content_scale:85,content_width:70,content_height:60,compact:null}],["Tiles row",{compact:!0}],["Full detail",{layout:"scale",show_scale:null,show_location:null,show_source:null,content_scale:null,content_width:null,content_height:null,compact:null}]],pollen:[["Tablet compact",{hide_when_off_season:!0,hide_when_none:!0,show_season:!1,show_source:!1,show_location:!1,content_height:60,compact:null}],["Tiles row",{compact:!0}],["Full detail",{show_season:null,show_source:null,show_location:null,content_height:null,compact:null}]],rain:[["Essentials",{show_rows:["rain_rate","rain_today","rain_24h","rain_event"],show_normal:!1,compact:null}],["Everything",{show_rows:["rain_rate","rain_hour","rain_today","rain_24h","rain_event","rain_week","rain_month","rain_year","last_rain"],show_normal:null,compact:null}],["Tiles row",{compact:!0}]],garden:[["Frost only",{show_soil:!1,show_water:!1,show_gdd:!1}],["Everything",{show_outlook:null,show_season:null,show_gdd:null,show_soil:null,show_water:null}]],records:[["Area only",{show_station:!1}],["Today only",{show_month:!1,show_all_time:!1}],["Everything",{show_station:null,show_today:null,show_month:null,show_all_time:null}]],lightning:[["Quiet",{hide_when_zero:!0,show_battery:!1,show_note:!1}],["Everything",{hide_when_zero:null,show_battery:null,show_note:null}]],wind:[["Rose, chart on demand",{view:"rose",chart_mode:"popover"}],["Compass and chart",{view:"compass",chart_mode:null}]],rainviewer:[["Light on tablets",{start_paused:!0,collapsible:!0,collapsed:!0}],["Live",{start_paused:null,collapsed:null}]],windy_map:[["Light on tablets",{start_paused:!0,collapsible:!0,collapsed:!0}],["Live",{start_paused:null,collapsed:null}]],frost_watch:[["Tiles row",{compact:!0}],["Full",{compact:null}]],vpd:[["Number only",{show_plant:!1,show_scale:!1,show_note:!1}],["Full",{show_plant:null,show_scale:null,show_note:null,show_advice:null}]]},h7=t=>t.type==="metric"?z[t.metric]?.label||"Metric":(W(t)?.label||t.type).replace(/ \(.*\)$/,"");function i1(t,C,H={}){let L=R3(t,C.name);if(L===void 0)return!1;let e=H[C.name]!==void 0?H[C.name]:C.default;return e===void 0||JSON.stringify(L)!==JSON.stringify(e)}var E3=["span","rows","display","span_medium","span_narrow","rows_compact"];function Z7(t,C){let H=t[C],L=t[C+1],e=d=>{let A={...d};for(let l of E3)delete A[l];return A},o=t.slice();if(L.type==="stack"&&L.direction==="vertical"){let d=N(H)+N(L);return o.splice(C,2,K({...L,span:Math.max(G(H),G(L)),rows:d||void 0,panels:[e(H),...L.panels||[]]})),o}let i=N(H)+N(L);return o.splice(C,2,K({type:"stack",direction:"vertical",span:Math.max(G(H),G(L)),rows:i||void 0,panels:[e(H),e(L)]})),o}function D3(t,C,H){let L={...t[H]};for(let o of E3)delete L[o];let e=t.slice();return e[C]={...e[C],panels:[...e[C].panels||[],L]},e.splice(H,1),e}function W3(t,C,H){let L=t[C],e=(L.panels||[]).slice(),[o]=e.splice(H,1),i=t.slice(),d=K({...o,span:G(L),rows:void 0});return e.length?i.splice(C,1,{...L,panels:e},d):i.splice(C,1,d),i}function S7(t){let C=W(t);return{span:C.span,rows:C.rows,display:"grid",in_bar:z1({...t,in_bar:void 0}),show_title:c2.has(t.type)?!!t.title:!0}}function b2(t){let C=W(t);return t.title?t.title:t.type==="metric"?z[t.metric]?.label||t.label||"Metric tile":t.type==="day"?["Today","Tomorrow"][Number(t.day_offset??1)]||`Day +${t.day_offset}`:C.label}var T1=class extends I{constructor(){super(),this._open=null,this._openPanel=null,this._addType="metric",this._flexEds=new Map}setConfig(C){this._config=C,this._savedJson==null&&(this._savedJson=JSON.stringify(C)),q1(JSON.stringify(C)!==this._savedJson)}shouldUpdate(C){if(C.size===1&&C.has("hass")){let H=C.get("hass"),L=this.hass;if(H&&L&&H.entities===L.entities&&H.devices===L.devices&&H.areas===L.areas&&H.themes===L.themes&&H.locale===L.locale&&H.language===L.language&&Date.now()-(this._renderedAt||0)<15e3)return this._hassTimer||(this._hassTimer=setTimeout(()=>{this._hassTimer=null,this.requestUpdate()},15e3)),!1}return!0}updated(){this._renderedAt=Date.now()}connectedCallback(){super.connectedCallback(),this._onDetected||(this._onDetected=()=>(this._open==="general"||this._open==="behavior")&&this.requestUpdate()),window.addEventListener("wsfc-detected",this._onDetected)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("wsfc-detected",this._onDetected),clearTimeout(this._hassTimer),this._hassTimer=null,this._savedJson=null,q1(!1),h2(!1)}get _panels(){return P5(this._config)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}_emit(C){this._config=C,q1(JSON.stringify(C)!==this._savedJson),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:C},bubbles:!0,composed:!0}))}_setPanels(C,H){let L={...this._withoutLegacyHero(),panels:C};for(let[e,o]of Object.entries(H||{}))o===void 0?delete L[e]:L[e]=o;this._emit(L)}_withoutLegacyHero(){let{hero:C,...H}=this._config;return C===!1?{...H,hero:C}:H}render(){return!this.hass||!this._config?u:a`
      <div class="ed">
        <div class="hdr"><span class="name">${_5}</span><span class="ver">v${O5}</span>
          <span class="io">
            <button class="btn sm ghost" title="Copy the whole card's settings as YAML" @click=${()=>x2({mode:"export",config:this._config,cardType:`custom:${p2}`})}><ha-icon icon="mdi:export"></ha-icon>Export</button>
            <button class="btn sm ghost" title="Replace the settings with pasted YAML or JSON" @click=${()=>x2({mode:"import",cardType:`custom:${p2}`,onImport:C=>{this._flexEds.clear(),this._openPanel=null,this._emit(C),this.requestUpdate()}})}><ha-icon icon="mdi:import"></ha-icon>Import</button>
          </span></div>
        <label class="live" title="While editing, the animated background, blur and the radar and Windy maps are paused to keep the editor fast. Tick to see them running (not saved).">
          <input type="checkbox" .checked=${f2()} @change=${C=>{h2(C.target.checked),this.requestUpdate()}} />
          <ha-icon icon="mdi:play-circle-outline"></ha-icon><span>Live preview</span>
          <span class="live-hint">${f2()?"animations and maps running":"animations and maps paused while editing"}</span>
        </label>
        <div class="findbar">
          <ha-icon icon="mdi:magnify"></ha-icon>
          <input class="ftext find" type="search" placeholder="Find a setting (e.g. compact, blur, rain)" .value=${this._q||""} aria-label="Find a setting"
            @input=${C=>{this._q=C.target.value,this.requestUpdate()}} @keydown=${C=>C.key==="Escape"&&(this._q="",this.requestUpdate())} />
          <label class="onlychg" title="Show only the settings you've changed from their defaults"><input type="checkbox" .checked=${!!this._onlyChanged} @change=${C=>{this._onlyChanged=C.target.checked,this.requestUpdate()}} />Only changed</label>
        </div>
        ${this._q&&this._q.trim().length>=2?this._searchResults(this._q.trim()):u}
        ${this._section("station","mdi:database-outline","Data Sources",()=>this._stationEditor())}
        ${this._section("background","mdi:image-filter-hdr","Background",()=>this._general(F1),(this._config.background||"none")==="animated"?this._bgPreviewButton():u)}
        ${this._section("general","mdi:palette-outline","Appearance",()=>this._general(P1))}
        ${this._section("alerts","mdi:alert-outline","Alerts Bar",()=>this._general(e2))}
        ${this._section("behavior","mdi:fit-to-screen-outline","Screen fit & layout",()=>this._general(r2))}
        ${this._section("buttons","mdi:gesture-tap-button","Button Menu",()=>this._buttonsEditor())}
        ${this._section("collapse","mdi:view-agenda-outline","Panel View Defaults",()=>a`${this._general(t2)}${this._convertBar()}`)}
        ${this._section("layout","mdi:view-dashboard-edit-outline","Layout Map",()=>this._layoutEditor())}
        ${this._section("panels","mdi:view-list-outline",`Panels (${this._panels.length})`,()=>this._panelList())}
      </div>
    `}_searchIndex(){let C=[],H=e=>e.label||V2[e.name]||e.name.replace(/[._]/g," ");for(let[e,o,i]of[["station","Data Sources",[["Current condition",L2]]],["background","Background",F1],["general","Appearance",P1],["alerts","Alerts Bar",e2],["behavior","Screen fit & layout",r2],["collapse","Panel View Defaults",t2]])for(let[d,A]of i)for(let l of A.filter(m=>!m.kind))C.push({label:H(l),help:l.helper||"",where:`${o} \u203A ${d}`,go:{open:e},f:l});for(let e of k1)C.push({label:H(e),help:e.helper||"",where:"Button Menu",go:{open:"buttons"},f:e});let L=(e,o,i)=>{let d=W(e);if(!d)return;let A=e.title||h7(e),l=(i?N1:W1).map(s=>({f:s,sec:s.section||"Size and Scaling"})),m=d.groups?d.groups.flatMap(([s,v],f)=>v.map(w=>({f:w,sec:`${d.label} options`,sub:f?s:null}))):(d.schema||[]).map(s=>({f:s,sec:s.section||(["content_width","content_height"].includes(s.name)?"Size and Scaling":`${d.label} options`)}));for(let{f:s,sec:v,sub:f}of[...l,...m])C.push({label:H(s),help:s.helper||"",where:`Panels \u203A ${A} \u203A ${v}${f?` \u203A ${f}`:""}`,go:{open:"panels",panel:o,type:e.type,sec:v,sub:f},f:s})};return this._panels.forEach((e,o)=>{L(e,`${o}`,!1),e.type==="stack"&&(e.panels||[]).forEach((i,d)=>i&&L(i,`${o}.${d}`,!0))}),C}_searchResults(C){let H=C.toLowerCase().split(/\s+/).filter(Boolean),L=this._searchIndex().filter(e=>{let o=`${e.label} ${e.help} ${e.where} ${e.f.name}`.toLowerCase();return H.every(i=>o.includes(i))});return L.sort((e,o)=>(o.label.toLowerCase().includes(H[0])?1:0)-(e.label.toLowerCase().includes(H[0])?1:0)),a`<div class="finds" role="listbox" aria-label="Matching settings">
      ${L.length?L.slice(0,40).map(e=>a`<button class="find-hit" role="option" @click=${()=>this._goTo(e)}><b>${e.label}</b><span>${e.where}</span></button>`):a`<div class="fhelp">No setting matches "${C}".</div>`}
      ${L.length>40?a`<div class="fhelp">${L.length-40} more — type more of the name.</div>`:u}
    </div>`}async _goTo(C){let H=C.go;if(this._q="",this._open=H.open,H.panel!=null){this._openPanel=H.panel,this._flatOpen||(this._flatOpen=new Map);for(let e of this._flatOpen.keys())e.startsWith(`${H.type}|`)&&this._flatOpen.set(e,!1);this._flatOpen.set(`${H.type}|${H.sec}`,!0),H.sub&&(this._subOpen||(this._subOpen=new Set),this._subOpen.add(`${H.type}:${H.sub}`))}this.requestUpdate(),await this.updateComplete,await new Promise(e=>requestAnimationFrame(e));let L=[...this.renderRoot.querySelectorAll(".fld, .frow, .fchk, label")].find(e=>e.textContent.trim().startsWith(C.label));L&&(L.scrollIntoView({block:"center",behavior:"smooth"}),L.classList.add("flash"),setTimeout(()=>L.classList.remove("flash"),1600))}_section(C,H,L,e,o=u){let i=this._open===C;return a`<details class="panel" ?open=${i} @toggle=${d=>{d.target.open?this._open=C:this._open===C&&(this._open=null)}}>
      <summary><ha-icon icon=${H}></ha-icon><span>${L}</span>${o}</summary>
      ${i?a`<div class="body">${e()}</div>`:u}
    </details>`}_form(C,H,L,e,o){return X5({data:C,schema:H,onChange:L,whenData:e,isSet:o,action:i=>i.kind==="info"?this._infoBlock(i):this._resetAction(i),label:i=>i.label||V2[i.name]||i.name,helper:i=>i.helper,haForm:(i,d,A)=>this._haForm(i,d,A),auto:i=>this._autoText(i)})}_autoText(C){let H={panel_radius:"radius",row_height:"row",gap:"gap"}[C.name];if(!H)return null;let{preview:L,dashboard:e}=e3(),o=L?.[H],i=e?.[H],d=H==="radius"?" (from the theme's card corner radius)":H==="row"&&this._config.layout==="fullscreen"&&X(this._config)!=="none"?" (calculated to fit the screen)":"";return o&&i&&o!==i?`${o} in this preview, ${i} on the dashboard${d}`:o||i?`${o||i}${d}`:null}_haForm(C,H,L){return a`<ha-form
      .hass=${this.hass}
      .data=${C}
      .schema=${H}
      .computeLabel=${e=>e.label||V2[e.name]||e.name}
      .computeHelper=${e=>e.helper}
      @value-changed=${e=>{e.stopPropagation(),L(e.detail.value)}}
    ></ha-form>`}_convertBar(){let C={...this._config,screen_fit:X(this._config)},H=m=>m&&K1(m.type)&&!W(m)?.bare,L=S1({type:"uv_solar"},C,!0),e=this._allView||"full_title",o=m=>H(m)&&S1(m,C,!0).some(([s])=>s===e),i=this._panels.flatMap(m=>[m,...m.type==="stack"?m.panels||[]:[]]).filter(H),d=i.filter(o).length,A=i.filter(m=>o(m)&&g1(m,this._config)!==e).length,l=()=>{let m=s=>o(s)?Y1(s,e,this._config):s;this._flexEds.clear(),this._setPanels(this._panels.map(s=>s.type==="stack"?{...s,panels:(s.panels||[]).map(m)}:m(s)))};return a`<div class="convert">
      <div class="fld"><div class="frow"><label for="allview">Set every panel's view</label>
        <select id="allview" class="sel" @change=${m=>{this._allView=m.target.value,this.requestUpdate()}}>
          ${L.map(([m,s])=>a`<option value=${m} ?selected=${m===e}>${s}</option>`)}
        </select>
        <button class="btn sm" ?disabled=${!A} @click=${l}><ha-icon icon="mdi:format-paint"></ha-icon>Apply</button></div>
      <span class="fhelp">${A?`Changes ${A} of the ${d} panel${d===1?"":"s"} that can use it.`:d?`All ${d} panel${d===1?"":"s"} that can use it already do.`:"No panel can use this view."}${d<i.length?" Tiles views skip panels without a tiles row.":""}</span></div>
    </div>`}_general(C=P1){let H={...this._config,screen_fit:X(this._config)},L=y1(H,x7,C1),e=this._config.background||"none";return C.map(([o,i])=>{let d=this._onlyChanged?i.filter(w=>i1(this._config,w,C1)):i;if(!d.length||!d.some(w=>typeof w.when!="function"||w.when(L)))return u;let A=i.some(w=>i1(this._config,w,C1)),l=C===F1&&o==="Background"&&e==="animated"&&this._bgPrev?.open,m=w=>this._form(y1(H,w,C1),w,O=>{let{panels:F,...y}=this._config,P=w2(y,w,O,C1);w.some(Z=>Z.name==="screen_fit")&&(delete P.fit_height,delete P.fit_strict,delete P.auto_fit),this._config.panels&&(P.panels=this._config.panels),this._emit(P)},L,O=>i1(this._config,O,C1)),s=d.filter(w=>!w.sub),v=[...new Set(d.filter(w=>w.sub).map(w=>w.sub))],f=w=>{let O=d.filter(Z=>Z.sub===w);if(!O.some(Z=>typeof Z.when!="function"||Z.when(L)))return u;let F=`card:${w}`,y=(this._subOpen||(this._subOpen=new Set)).has(F),P=O.some(Z=>i1(this._config,Z,C1));return a`<details class="sub psub" ?open=${y} @toggle=${Z=>{Z.target!==Z.currentTarget||Z.target.open===this._subOpen.has(F)||(Z.target.open?this._subOpen.add(F):this._subOpen.delete(F),this.requestUpdate())}}><summary><ha-icon icon=${O[0].subIcon||"mdi:tune"}></ha-icon><span>${w}</span>${P?a`<i class="chg" title="Has changed settings"></i>`:u}</summary>
          ${y?a`<div class="psub-body">${m(O)}</div>`:u}</details>`};return a`${l?this._bgPreview():u}<div class="agrp"><div class="agrp-t">${o}${A?a`<i class="chg" title="Has changed settings"></i>`:u}</div>${m(s)}${v.map(f)}</div>`})}_overrideCount(C){let H=0,L=e=>{for(let o of e||[])C.some(i=>o?.[i]!==void 0)&&H++,Array.isArray(o?.panels)&&L(o.panels)};return L(this._config.panels),H}_infoBlock(C){if(C.name!=="_alerts_sources")return u;let H=A3(this.hass,this._station,this._config),L={found:["Auto","mdi:auto-fix"],chosen:["Your choice","mdi:account-check-outline"],missing:["Not found","mdi:help-circle-outline"]},e=o=>this.hass?.states?.[o]?.attributes?.friendly_name;return a`<div class="asrc">
      <div class="fhelp">What each alert reads. <b>Auto</b> entities were found on your station; the rest you chose.</div>
      ${H.map(o=>a`<div class="asrc-g ${o.on?"":"off"}">
        <div class="asrc-t">${o.title}${o.on?"":a` <span class="asrc-off">(off)</span>`}</div>
        <div class="fhelp">${o.rule}</div>
        <table><tbody>${o.items.map(i=>a`<tr class=${i.how}>
          <td>${i.label}</td>
          <td>${i.entity?a`<span class="asrc-e" title=${i.entity}>${e(i.entity)||i.entity}</span><span class="asrc-id">${i.entity}</span>`:a`<span class="asrc-miss">—</span>`}${i.note?a`<div class="fhelp">${i.note}</div>`:u}</td>
          <td><span class="asrc-how ${i.how}"><ha-icon icon=${L[i.how][1]}></ha-icon>${L[i.how][0]}</span></td>
        </tr>`)}</tbody></table>
      </div>`)}
    </div>`}_resetAction(C){let H=$3[C.name]||[],L=this._overrideCount(H),e=()=>{let o=i=>i.map(d=>{let A={...d};for(let l of H)delete A[l];return Array.isArray(A.panels)&&(A.panels=o(A.panels)),A});this._emit({...this._config,panels:o(this._config.panels||[])})};return a`<div class="fact-btn" data-action=${C.name}><button type="button" ?disabled=${!L} @click=${e}><ha-icon icon="mdi:format-paint"></ha-icon>${C.label}</button>
      <span class="fhelp">${L?`${C.helper} ${L===1?"1 panel sets its own.":`${L} panels set their own.`}`:"No panel sets its own."}</span></div>`}_bgPreviewButton(){let C=!!this._bgPrev?.open;return a`<button class="bgprev-btn ${C?"on":""}" type="button" aria-pressed=${String(C)}
      title=${C?"Hide the background preview":"Preview the background"} aria-label="Preview the background"
      @click=${H=>{H.preventDefault(),H.stopPropagation(),this._bgPrev={...this._bgPrev||{},open:!C},C||(this._open="background"),this.requestUpdate()}}><ha-icon icon="mdi:magnify"></ha-icon></button>`}_bgPreview(){let C=this._bgPrev||{},H=this.hass?.states?.[this._config.entity]?.state,L=(H2.find(([o])=>o===H)||[,H])[1],e=[{name:"condition",label:"Condition",selector:{select:{options:[{value:"",label:H?`Now \u2014 ${L}`:"Now"},...H2.map(([o,i])=>({value:o,label:i}))]}}},{name:"time",label:"Time of day",selector:{select:{options:[{value:"",label:"Day (night for Clear night)"},{value:"day",label:"Day"},{value:"night",label:"Night"}]}}}];return a`<div class="bgprev">
      <wsfc-bg-preview .hass=${this.hass} .config=${this._config} .condition=${C.condition||""} .time=${C.time||""}></wsfc-bg-preview>
      ${this._form({condition:C.condition||"",time:C.time||""},e,o=>{this._bgPrev={...C,open:!0,condition:o.condition||"",time:o.time||""},this.requestUpdate()})}
    </div>`}_breakStack(C){let H=this._panels,L=Number(C);if(!H[L]||H[L].type!=="stack")return;if(H[L].x==null||H[L].y==null){let y=H.map((Z,B)=>B).filter(Z=>H[Z].display!=="popup"),P=d1(y.map(Z=>({key:Z,w:G(H[Z]),h:e1(N(H[Z]))})),{gravity:this._config.layout_gaps!=="keep"});H=H.map((Z,B)=>P.has(B)?{...Z,x:P.get(B).x,y:M1(P.get(B).y)}:Z)}let e=H[L],o=(e.panels||[]).filter(Boolean).map(y=>({...y}));if(!o.length)return;let i=G(e),d=N(e)||o.length*.5,A=e.direction==="vertical",l=y=>Math.max(.25,Math.round(y*4)/4),m=y=>Math.max(0,Math.round(y*4)/4),s=y=>Number(y.grow??1)||1,v=o.reduce((y,P)=>y+s(P),0),f=0,w=0,O=o.map((y,P)=>{let{grow:Z,min_width:B,...R}=y;if(A){let a1=P===o.length-1?l(d-w):l(d*s(y)/v),n1={...R,span:i,rows:Math.max(.25,a1),...e.x!=null?{x:e.x,y:m(Number(e.y)+w)}:{}};return w+=a1,n1}let h=P===o.length-1?i-f:Math.max(1,Math.round(i*s(y)/v)),U={...R,span:Math.max(1,h),rows:R.rows??d,...e.x!=null?{x:Number(e.x)+f,y:e.y}:{}};return f+=h,U}),F=H.slice();F.splice(L,1,...O),this._openPanel=null,this._setPanels(F)}_stationDevice(){let C=(this._config.metric_sources?.sources||[]).find(H=>!H.disabled&&String(H.ref).startsWith("device:"));return C?C.ref.slice(7):void 0}_stationEditor(){let C=this._station,H=[...F3,"rain_today","battery","battery_voltage","capacitor","signal","signal_quality","rssi","online","hardware_id","aqi","pm2_5","pm10","ozone","lightning_distance","lightning_count"].filter(i=>F3.includes(i)||z[i]||["rain_today","battery","battery_voltage","capacitor","signal","signal_quality","rssi","online","hardware_id"].includes(i)).map(i=>{let d=z[i]?.find||z[i]?.aq?I1(i,C,this.hass):h3(C,this.hass,i)||(this.hass.states[C.entity]?.attributes?.[i]!=null?C.entity:null),A=d&&!d.startsWith("weather.")?J1(this.hass,d):null,l=d?.startsWith("weather.")?this.hass.states[d]?.attributes?.[i]:null;return{k:i,e:d,v:A?`${A.value} ${A.unit}`:l!=null?String(l):"",label:u7[i]||z[i]?.label||i.replace(/_/g," "),integ:d?J(this.hass,d):""}}),L=H.filter(i=>i.e).length,e=this._connectedSources(H),o={listed:["In your list","mdi:format-list-numbered"],auto:["Found automatically","mdi:auto-fix"],web:["Online, no setup","mdi:web"],key:["Online, with your key","mdi:key-outline"]};return a`
      <div class="csrc">
        <div class="agrp-t">Connected sources</div>
        <div class="fhelp">Everything the card reads from, and what each one supplies.</div>
        <table><tbody>${e.map(i=>a`<tr>
          <td><b>${i.name}</b>${i.ent?a`<span class="asrc-id">${i.ent}</span>`:u}</td>
          <td>${i.provides.join(", ")}</td>
          <td><span class="asrc-how ${i.how}"><ha-icon icon=${o[i.how][1]}></ha-icon>${o[i.how][0]}</span></td>
        </tr>`)}</tbody></table>
      </div>
      <p class="hint">Sources are used top to bottom: for each value the first source that has it wins, and they apply to every panel. Add your station's <b>device</b> (sensors are mapped automatically, outdoor first) and a <b>weather entity</b> for the forecast and condition. Open a source to see or change what it supplies.</p>
      <wsfc-sources-editor .hass=${this.hass} .config=${{entity:this._config.entity,metric_sources:this._config.metric_sources}}
        @sources-changed=${i=>{let d={...this._config};i.detail.entity&&(d.entity=i.detail.entity),i.detail.metric_sources?d.metric_sources=i.detail.metric_sources:delete d.metric_sources,this._emit(d)}}></wsfc-sources-editor>
      ${this._general([["Current condition",L2]])}
      ${this._config.condition_source==="station"?a`<p class="hint cond-now"><b>Now:</b> ${T3(this.hass,this._station,this._config)}</p>`:u}
      <details class="sub">
        <summary><ha-icon icon="mdi:format-list-checks"></ha-icon><span>Values used</span><span class="cnt">${L} of ${H.length} found</span></summary>
        <div class="map">
          <span class="h">Value</span><span class="h">Entity</span><span class="h">Integration</span><span class="h">Now</span>
          ${H.map(i=>a`<span class="k">${i.label}</span><span class="e ${i.e?"":"none"}" title=${i.e||""}>${i.e||"not found"}</span><span class="i">${i.integ}</span><span class="v">${i.v}</span>`)}
        </div>
      </details>
      <details class="sub">
        <summary><ha-icon icon="mdi:information-outline"></ha-icon><span>Which Ecowitt integration?</span></summary>
        <p class="hint">Any of them works — Home Assistant's <b>Ecowitt</b>, <b>Ecowitt Local</b> or the <b>Ecowitt Official Integration</b> — and you can add more than one: e.g. the core integration for readings plus Ecowitt Local for battery, signal and RSSI (Station health panel). Home Assistant's own integration has no signal or RSSI sensors. With Ecowitt Local, add either its sensor or its gateway device; the other is found automatically.</p>
      </details>
    `}_connectedSources(C){let H=this.hass,L=this._config,e=new Set;for(let v of L.metric_sources?.sources||(L.entity?[{ref:L.entity}]:[])){if(!v?.ref||v.disabled)continue;let f=String(v.ref),w=f.startsWith("device:")?Object.values(H?.entities||{}).find(F=>F.device_id===f.slice(7))?.entity_id:f,O=J(H,w);O&&e.add(O)}let o=new Map,i=(v,f,w,O)=>{if(!v)return;let F=o.get(v)||{name:v,provides:[],how:w,ent:O};F.provides.includes(f)||F.provides.push(f),w==="listed"&&(F.how="listed"),o.set(v,F)},d=J(H,L.entity)||H?.states?.[L.entity]?.attributes?.attribution||L.entity;L.entity&&i(d,"forecast and condition","listed",L.entity);for(let v of C)if(v.e){let f=v.integ||(v.e.startsWith("weather.")?d:"Other sensors");i(f,v.label,e.has(f)?"listed":"auto")}let A=new Set(this._panels.flatMap(v=>[v.type,...v.type==="stack"?(v.panels||[]).map(f=>f?.type):[]])),l=v=>this._panels.flatMap(f=>[f,...f.type==="stack"?f.panels||[]:[]]).filter(f=>f?.type===v);if(A.has("pollen"))for(let v of l("pollen")){let f=p3(v,H),w=f.entities?.[0]||f.rows?.[0]?.entity,O=w&&J(H,w);O&&i(O,"pollen","auto")}if(L.alerts_bar){let v=d3(L,H);v&&i(J(H,v)||"Alerts sensor","weather alerts",L.alerts_entity?"listed":"auto",v)}A.has("rainviewer")&&l("rainviewer").some(v=>v.radar!==!1)&&i("RainViewer","radar loop","web"),A.has("rainviewer")&&l("rainviewer").some(v=>v.owm_api_key)&&i("OpenWeatherMap maps","map layers","key"),A.has("rainviewer")&&i("Map tiles (Esri, OpenStreetMap\u2026)","base map","web"),A.has("windy_map")&&i("Windy","weather maps","web");let m=c3(H);m&&(A.has("sunlight")||L.alerts_sun===!0)&&i("Sunlight Visualizer","house sun alignment, house direction","auto",m.walls.front||m.all[0]),["records","rain","garden"].some(v=>A.has(v))&&i("Open-Meteo","climate history and normals","web");let s={listed:0,auto:1,key:2,web:3};return[...o.values()].sort((v,f)=>s[v.how]-s[f.how])}_flexEditor(C,H,L){let e=`${C}:${H.type}`,o=this._flexEds.get(e);o||(o=document.createElement($5),o.wsfcMode="sections",o.wsfcType=H.type,o.addEventListener("wsfc-flat-open",s=>{for(let v of[...(this._flatOpen||new Map).keys()])v.startsWith(`${s.detail.type}|`)&&this._flatOpen.set(v,!1);this.requestUpdate()}),o.addEventListener("config-changed",s=>{s.stopPropagation(),o._wsfcOnChange?.(s.detail.config)}),this._flexEds.set(e,o));let i=s=>s.type==="sky_tracker"?N5(s,this._station):R5(W5(s.type,this._station),s.flex||{});o.wsfcPanels=W(H)?.flexPanels||null;let d=this._config.background==="animated"||this._config.background==="image"&&!!(this._config.background_image||this._config.background_image_url),A=[...W(H)?.flexHide||[],...H.type==="hero"&&d?["show_condition_effects"]:[],...H.type==="hero"&&H.auto_scale?["header_temp_size","header_state_size","header_icon_size","header_secondary_size","clock_font_size","clock_date_font_size","chip_text_size","chip_icon_size","global_icon_size","global_text_size"]:[]];JSON.stringify(A)!==JSON.stringify(o.wsfcHide||[])&&(o.wsfcHide=A,o.requestUpdate?.()),o._wsfcOnChange=s=>{let v=A1(H),f=E5(s,i({...H,flex:void 0}));Object.keys(f).length?v.flex=f:delete v.flex,L(v)};let l=i(H),m=JSON.stringify(l);return o._wsfcJson!==m&&(o._wsfcJson=m,o.setConfig(l)),o.hass=this.hass,a`<div class="flexed">${o}</div>`}_guideSpec(){let C=this._config,H=C.layout_screen;if(!H||(C.layout_guide||"line")==="off")return null;let[L,e]=H==="window"?[window.innerWidth,window.innerHeight]:String(H).split(/[x×]/).map(Number);if(!L||!e)return null;let o=C.gap??12,i=C.layout==="fullscreen",d=C.panel_bar!==!1&&!this._panels.some(l=>l.type==="heading"&&l.show_bar),A=56+(i?16:8)+2*o+(d?40+o:0)+(C.title?44+o:0);return{w:L,h:e,chrome:A,gap:o,row:C.row_height||110,fit:i&&X(C)!=="none",strict:i&&["strict","scale"].includes(X(C)),mode:C.layout_guide||"line"}}_screenGuide(){let C=this._config,H=[["","Off"],["window",`This browser window (${window.innerWidth}\xD7${window.innerHeight})`],["1920x1080","1920\xD71080 (16:9 desktop)"],["2560x1440","2560\xD71440 (16:9)"],["3440x1440","3440\xD71440 (21:9)"],["1366x768","1366\xD7768 (laptop)"],["1280x800","1280\xD7800 (16:10 tablet)"],["1180x820","1180\xD7820 (iPad landscape)"],["820x1180","820\xD71180 (iPad portrait)"],["1080x1920","1080\xD71920 (portrait panel)"]],L=C.layout_screen||"",e=L&&!H.some(([i])=>i===L),o=i=>{let d={...this._config,...i};for(let A of Object.keys(i))(i[A]==null||i[A]==="")&&delete d[A];this._emit(d)};return a`<div class="guidebar">
      <div class="frow"><label for="lg-s">Screen guide</label>
        <select id="lg-s" class="sel" @change=${i=>o({layout_screen:i.target.value==="custom"?"1600x900":i.target.value||void 0})}>
          ${H.map(([i,d])=>a`<option value=${i} ?selected=${i===L}>${d}</option>`)}
          <option value="custom" ?selected=${e}>Custom size…</option>
        </select><button class="btn sm ghost" title="Set the Screen guide to this device's browser window (open the editor on the tablet and press this)" @click=${()=>o({layout_screen:`${window.innerWidth}x${window.innerHeight}`})}><ha-icon icon="mdi:tablet"></ha-icon>This device</button></div>
      ${e?a`<div class="frow"><label for="lg-c">Width × height</label>
        <input id="lg-c" class="ftext" .value=${L} placeholder="1600x900" @change=${i=>o({layout_screen:/^\d{3,5}\s*[x×]\s*\d{3,5}$/.test(i.target.value.trim())?i.target.value.trim().replace(/\s+/g,"").replace("\xD7","x"):L})} /></div>`:u}
      ${L?a`<div class="frow"><label for="lg-m">Show as</label>
        <select id="lg-m" class="sel" @change=${i=>o({layout_guide:i.target.value==="line"?void 0:i.target.value})}>
          ${[["line","Dotted line at the screen edge"],["frame","Frame \u2014 shade what's off screen"]].map(([i,d])=>a`<option value=${i} ?selected=${(C.layout_guide||"line")===i}>${d}</option>`)}
        </select></div>
        <div class="fhelp">The map is drawn to that screen's scale (window size inside the browser, below the dashboard header).${C.layout==="fullscreen"&&X(C)!=="none"?" Full screen with fit: rows share the screen height, as on the dashboard.":" Panels below the line need scrolling."}</div>`:u}
    </div>`}_layoutEditor(){let C=this._config,H=this._mapFor==="phone",L=Array.isArray(C.phone_layout)?C.phone_layout:null,e=A=>{let l={...this._config};A&&A.length?l.phone_layout=A:delete l.phone_layout,this._emit(l)},o=this._panels.map((A,l)=>({p:A,i:l})).filter(({p:A})=>A.display!=="popup"),i=()=>{let A=new Map((L||[]).map((l,m)=>[Number(l.i),l]));return o.map(({p:l,i:m})=>({...l,__i:m,span:A.get(m)?.span??12,rows:A.get(m)?.rows??l.rows??0,x:A.get(m)?.x,y:A.get(m)?.y,show:A.has(m)?A.get(m).show!==!1:l.show})).sort((l,m)=>((L||[]).findIndex(s=>Number(s.i)===l.__i)+1||1e3+l.__i)-((L||[]).findIndex(s=>Number(s.i)===m.__i)+1||1e3+m.__i))},d=A=>A.filter(l=>l.__i!=null).map(l=>({i:l.__i,span:G(l),...N(l)?{rows:N(l)}:{},...l.x!=null&&l.y!=null?{x:l.x,y:l.y}:{},...l.show===!1?{show:!1}:{}}));return a`
      <div class="frow"><label for="lm-for">Layout for</label>
        <select id="lm-for" class="sel" @change=${A=>{this._mapFor=A.target.value,this.requestUpdate()}}>
          <option value="main" ?selected=${!H}>Main layout (tablets and larger)</option>
          <option value="phone" ?selected=${H}>Phone layout (narrow screens)${L?"":" \u2014 not set"}</option>
        </select></div>
      ${H?a`<p class="hint">On screens narrower than ${C.narrow_width||720} px the card uses this layout: its own order, widths and heights for the same panels. Without one, panels stack full width automatically.</p>
            <div class="presets">${L?a`<button class="btn sm ghost" @click=${()=>e(null)}><ha-icon icon="mdi:delete-outline"></ha-icon>Remove the phone layout</button>`:a`<button class="btn sm" @click=${()=>e(o.map(({p:A,i:l})=>({i:l,span:12,...A.rows?{rows:A.rows}:{}})))}><ha-icon icon="mdi:cellphone"></ha-icon>Create a phone layout</button>`}</div>
            ${L?a`<wsfc-layout-map .panels=${i()} .gravity=${this._config.layout_gaps!=="keep"} @layout-changed=${A=>e(d(A.detail.panels))}></wsfc-layout-map>`:u}`:a`<p class="hint"><b>Drag</b> a panel to any place on the grid: panels in its way move down, nothing else moves. Drag its <b>right or bottom edge</b> (or the corner) to resize, in quarter rows. Keyboard: arrows move one cell, Shift+arrows resize. This is the main layout${L?"; phones use the Phone layout":" \u2014 phones stack the panels automatically (or set a Phone layout above)"}. Dashed = hidden on load.</p>
            ${this._screenGuide()}
            ${this._guideSpec()?a`<wsfc-layout-probe .hass=${this.hass} .config=${this._config} .guide=${this._guideSpec()}
              @probe-measured=${A=>{this._measured=A.detail,this.requestUpdate()}}></wsfc-layout-probe>`:u}
            <wsfc-layout-map .panels=${this._panels} .gravity=${this._config.layout_gaps!=="keep"} .guide=${this._guideSpec()} .measured=${this._guideSpec()?this._measured:null} @layout-changed=${A=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(A.detail.panels)}}></wsfc-layout-map>`}
    `}_panelList(){return a`
      <p class="hint">Edit, show/hide, duplicate, delete and add panels. Arrange them under <b>Layout</b>. To keep panels together (side by side, or one above the other filling in for hidden ones), add a <b>Stack</b> panel, then use <b>Move into stack</b> under it.</p>
      ${this._list(this._panels,(C,H)=>this._setPanels(C,H),"")}
    `}_buttonsEditor(){let C=this._config,H=this._panels,L=H.findIndex(m=>m.type==="heading"),e=L>=0&&!!H[L].show_bar,o=C.panel_bar===!1?"hidden":e?"heading":"top",i=m=>{let s=H.map((v,f)=>f===L?K({...v,show_bar:m==="heading"?!0:void 0}):v);m==="heading"&&L<0&&s.splice(1,0,{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0}),this._setPanels(s,{panel_bar:m==="hidden"?!1:void 0})},d=(m,s)=>{let v=w=>K({...w,in_bar:s===z1({...w,in_bar:void 0})?void 0:s}),f=H.map((w,O)=>{let F=m.includes(`${O}`)?v(w):w;if(F.type==="stack"&&Array.isArray(F.panels)){let y=F.panels.map((P,Z)=>P&&m.includes(`${O}.${Z}`)?v(P):P);y.some((P,Z)=>P!==F.panels[Z])&&(F={...F,panels:y})}return F});this._setPanels(f)},A=[];H.forEach((m,s)=>{A.push([m,`${s}`,!1]),m.type==="stack"&&(m.panels||[]).forEach((v,f)=>v&&A.push([v,`${s}.${f}`,!0]))});let l=A.map(([,m])=>m);return a`
      <div class="row-inline">
        <label for="bp">Buttons</label>
        <select id="bp" class="sel" @change=${m=>i(m.target.value)}>
          <option value="top" ?selected=${o==="top"}>Above the panels</option>
          <option value="heading" ?selected=${o==="heading"}>In the Button Menu panel</option>
          <option value="hidden" ?selected=${o==="hidden"}>Hidden</option>
        </select>
      </div>
      <p class="hint">A button toggles its panel (pop-up panels open instead). Panels without a button stay as they are.</p>
      ${this._form(y1(C,k1,C1),k1,m=>{let{panels:s,...v}=this._config,f=w2(v,k1,m,C1);this._config.panels&&(f.panels=this._config.panels),this._emit(f)})}
      <div class="btnbar">
        <button class="btn sm" @click=${()=>d(l,!0)}>All</button>
        <button class="btn sm ghost" @click=${()=>d(l,!1)}>None</button>
      </div>
      <div class="checks">
        ${A.map(([m,s,v])=>a`<label class="chk ${v?"nested":""}">
          <input type="checkbox" .checked=${z1(m)} @change=${f=>d([s],f.target.checked)} />
          <ha-icon icon=${m.icon||m.type==="metric"&&z[m.metric]?.icon||W(m).icon}></ha-icon>
          <span>${b2(m)}</span>${m.display==="popup"?a`<span class="tag">pop-up</span>`:m.show===!1?a`<span class="tag">hidden on load</span>`:u}
        </label>`)}
      </div>
    `}_list(C,H,L){let e=!!L,o=Object.entries(m2).filter(([A])=>!(e&&A==="hero")).sort(([A,l],[m,s])=>A==="hero"?-1:m==="hero"?1:l.label.localeCompare(s.label)),i=L||"top",d=(this._addTypes||(this._addTypes={}))[i]||(e?"metric":this._addType);return a`
      <div class="rows">${C.map((A,l)=>this._panelRow(A,l,C,H,L?`${L}.${l}`:`${l}`,e))}</div>
      <div class="add">
        <select class="sel" @change=${A=>{this._addTypes[i]=A.target.value,this.requestUpdate()}} aria-label="Panel type to add">
          ${o.map(([A,l])=>a`<option value=${A} ?selected=${A===d}>${l.label}${A==="sunlight"&&!customElements.get("sunlight-visualizer-card")?" (not installed)":""}</option>`)}
        </select>
        <button class="btn" @click=${()=>{let A={type:d};A.type==="metric"&&(A.metric="temperature"),A.type==="stack"&&(A.panels=[{type:"metric",metric:"temperature"},{type:"metric",metric:"humidity"}]),H([...C,A]),this._openPanel=L?`${L}.${C.length}`:`${C.length}`}}><ha-icon icon="mdi:plus"></ha-icon>${e?"Add new to stack":"Add panel"}</button>
      </div>
    `}_panelRow(C,H,L,e,o,i){let d=W(C),A=this._openPanel===o||C.type!=="stack"&&String(this._openPanel||"").startsWith(`${o}.`),l=C.show===!1,m=()=>this._flexEds.clear(),s=O=>{let F=L.slice(),y=H+O;y<0||y>=F.length||([F[H],F[y]]=[F[y],F[H]],m(),this._openPanel=null,e(F))},v=(O,F)=>{let y=L.slice();y[H]=O,e(y,F)},f=i?`${C.grow!=null?`grow ${C.grow}`:""}${C.rows?` \xB7 ${C.rows} rows`:""}`:`${G(C)}/12${N(C)?` \xD7 ${N(C)}`:""}${C.display==="popup"?" \xB7 pop-up":""}`,w=C.type==="stack"?`${C.direction==="vertical"?"Vertical":"Horizontal"} stack \xB7 ${(C.panels||[]).length} panels`:d.label;return a`<div class="row ${A?"open":""} ${l?"dim":""}">
      <div class="line">
        <ha-icon class="lead" icon=${C.icon||C.type==="metric"&&z[C.metric]?.icon||(C.type==="stack"&&C.direction==="vertical"?"mdi:view-agenda-outline":d.icon)}></ha-icon>
        <div class="txt"><div class="n">${b2(C)}</div><div class="s">${w}${f?` \xB7 ${f}`:""}</div></div>
        ${i?a`<button class="ib" title="Move up" ?disabled=${H===0} @click=${()=>s(-1)}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
              <button class="ib" title="Move down" ?disabled=${H===L.length-1} @click=${()=>s(1)}><ha-icon icon="mdi:arrow-down"></ha-icon></button>`:u}
        ${i?u:a`<button class="ib" title=${l?"Show when the dashboard loads":"Hide when the dashboard loads"} @click=${()=>v(K({...C,show:l?void 0:!1}))}>
              <ha-icon icon=${l?"mdi:eye-off":"mdi:eye"}></ha-icon></button>`}
        ${i&&/^\d+\.\d+$/.test(o)?a`<button class="ib" title="Move out of the stack (back into the grid, after the stack)" @click=${()=>{m(),this._openPanel=null,this._setPanels(W3(this._panels,Number(o.split(".")[0]),H))}}><ha-icon icon="mdi:view-split-horizontal"></ha-icon></button>`:u}
        <button class="ib" title="Edit" @click=${()=>this._openPanel=this._openPanel===o?null:o}><ha-icon icon=${A?"mdi:chevron-up":"mdi:pencil"}></ha-icon></button>
        <button class="ib" title="Duplicate" @click=${()=>{let O=L.slice();O.splice(H+1,0,A1(C)),m(),e(O)}}><ha-icon icon="mdi:content-copy"></ha-icon></button>
        <button class="ib del" title="Delete" @click=${()=>{let O=L.slice();O.splice(H,1),m(),this._openPanel=null,e(O)}}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
      </div>
      ${A?this._panelBody(C,o,v,i):u}
      ${C.type==="stack"?this._stackKids(C,H,o,v,i):u}
    </div>`}_stackKids(C,H,L,e,o){let d=!o?this._panels.map((l,m)=>[l,m]).filter(([l,m])=>m!==H&&l.type!=="hero"&&l.type!=="stack"):[],A=(this._moveIn||(this._moveIn={}))[L]??d[0]?.[1]??"";return a`<div class="kids">
      ${this._list(C.panels||[],(l,m)=>e({...C,panels:l},m),L)}
      ${d.length?a`<div class="add">
            <select class="sel" aria-label="Panel to move into this stack" @change=${l=>{this._moveIn[L]=Number(l.target.value),this.requestUpdate()}}>
              ${d.map(([l,m])=>a`<option value=${m} ?selected=${m===A}>${b2(l)}</option>`)}
            </select>
            <button class="btn" @click=${()=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(D3(this._panels,H,Number(A)))}}><ha-icon icon="mdi:view-split-horizontal"></ha-icon>Move into stack</button>
          </div>`:u}
    </div>`}_flat(C,H,L,e=!1){let o=`${C.type}|${H}`;this._flatOpen||(this._flatOpen=new Map);let i=!!this._flatOpen.get(o);return a`<details class="flat" ?open=${i} @toggle=${d=>{if(!(d.target!==d.currentTarget||d.target.open===!!this._flatOpen.get(o))){if(d.target.open){for(let A of this._flatOpen.keys())A.startsWith(`${C.type}|`)&&this._flatOpen.set(A,!1);for(let[A,l]of this._flexEds||[])A.endsWith(`:${C.type}`)&&l.renderRoot?.querySelectorAll?.("details.wsfc-panel[open]").forEach(m=>m.open=!1)}this._flatOpen.set(o,d.target.open),this.requestUpdate()}}}>
      <summary>${H}${e?a`<i class="chg" title="Has changed settings"></i>`:u}</summary>
      <div class="flat-body">${L}</div>
    </details>`}_sections(C,H,L,e,o,i=!0,d=null){let A=[];for(let s of H){let v=s.sub?`sub:${s.sub}`:s.section?`sec:${s.section}`:`sec:${o}`,f=A.find(w=>w.k===v);f||A.push(f={k:v,f:[]}),f.f.push(s)}let l=s=>this._form(y1(C,s,L),s,v=>e({...w2(C,s,v,L),type:C.type}),C,v=>i1(C,v,L)),m=this._onlyChanged;return A.map(({k:s,f:v})=>{let f=m?v.filter(y=>i1(C,y,L)):v;if(!f.length)return u;let w={...y1(C,f,L),...C};if(!f.some(y=>typeof y.when!="function"||y.when(w)))return u;let O=v.some(y=>i1(C,y,L)),F=s.slice(4);if(s.startsWith("sub:")){let y=`${C.type}:${F}`,P=(this._subOpen||(this._subOpen=new Set)).has(y);return a`<details class="sub psub" ?open=${P} @toggle=${Z=>{if(!(Z.target!==Z.currentTarget||Z.target.open===this._subOpen.has(y))){if(Z.target.open){for(let B of[...this._subOpen])B.startsWith(`${C.type}:`)&&this._subOpen.delete(B);this._subOpen.add(y)}else this._subOpen.delete(y);this.requestUpdate()}}}>
          <summary><ha-icon icon=${f[0]?.subIcon||"mdi:weather-sunset"}></ha-icon><span>${F}</span>${O?a`<i class="chg" title="Has changed settings"></i>`:u}</summary>
          ${P?a`<div class="psub-body">${l(f)}</div>`:u}
        </details>`}return i?this._flat(C,F,l(f),O):a`<div class="grp">${F}${O?a`<i class="chg" title="Has changed settings"></i>`:u}</div>${l(f)}`})}_zoomHint(C,H){let L=Number(C.zoom??H.default??7),e=Number(C.latitude??this.hass?.config?.latitude??40),[o]=String(this._config.layout_screen||"").split("x").map(Number),i=Number(C.span??W(C)?.span??6),d=o>0?Math.max(200,(o-156)/12*i+(i-1)*12-32):450,A=156543.03*Math.cos(e*Math.PI/180)/2**L*d,l=this.hass?.config?.unit_system?.length==="km",m=v=>{let f=l?v/1e3:v/1609.344;return`${f<1?f.toFixed(1):f<10?f.toFixed(1).replace(/\.0$/,""):Math.round(f)} ${l?"km":"mi"}`},s=C.type==="rainviewer"?L>10?" Radar is about 0.6 mi (1 km) per pixel, so beyond zoom 10 it shows as large blocks.":"":L>=11?" 11 is as close as Windy goes.":"";return`About ${m(A/2)} from your home to the panel's sides (${m(A)} across, for a ${Math.round(d)} px wide panel).${s}`}_panelView(C,H){let L=W(C),e=S1(C,{...this._config,screen_fit:X(this._config)},K1(C.type)&&!L?.bare);if(e.length<2)return u;let o=g1(C,this._config),i=`pv-${C.type}`;return a`<div class="pview fld"><div class="frow"><label for=${i}>Panel View</label>
      <select id=${i} class="sel" @change=${d=>H(Y1(C,d.target.value,this._config))}>
        ${e.map(([d,A])=>a`<option value=${d} ?selected=${d===o}>${A}</option>`)}
      </select></div>
      <div class="fhelp">How the panel starts → what a tap on its title or tiles does.${X1(o)==="title"&&C.show_title===!1?" It needs its title shown to collapse.":""}</div>
    </div>`}_panelBody(C,H,L,e){let o=W(C),i=(Z,B)=>(Z?.overflow==="scroll"&&!e&&!(Number(Z.rows??o?.rows??0)>=1)&&(Z={...Z,rows:1}),L(Z,B)),d=["content_width","content_height",...["daily","hourly","forecast","sky_tracker"].includes(C.type)?["text_scale","icon_scale","chart_scale","bar_scale","arc_scale"]:[],...C.type==="hero"?["text_scale","icon_scale_all"]:[]],A=(o.schema||[]).filter(Z=>d.includes(Z.name)).map(Z=>({...Z,section:"Size and Scaling"})),l=A.length?{...o,schema:o.schema.filter(Z=>!d.includes(Z.name))}:o;["rainviewer","windy_map"].includes(C.type)&&l.schema&&(l={...l,schema:l.schema.map(Z=>Z.name==="zoom"?{...Z,helper:this._zoomHint(C,Z)}:Z)});let m=e?{show_title:c2.has(C.type)?!!C.title:!0}:S7(C),s=e?N1:W1;C.type==="hero"&&(s=s.filter(Z=>!["icon","display","in_bar"].includes(Z.name))),K1(C.type)||(s=s.filter(Z=>Z.section!=="Collapse")),s=s.filter(Z=>!Z2.includes(Z.name)).map(Z=>{if(Z.section!=="Collapse")return Z;let B=["compact_expand","compact_icon","compact_title"].includes(Z.name)?["tiles"]:["show_collapse_hint","collapse_hint","collapsed_info","collapsed_entity","collapsed_label"].includes(Z.name)?["title"]:["title","tiles"],R=Z.when;return{...Z,section:"Collapsed View",when:h=>{let U=X1(g1(h,this._config));return B.includes(U)?typeof R!="function"||R({...h,collapsible:!0,compact:U==="tiles",collapsed_view:U==="tiles"?"compact":"minimal"}):!1}}});let v=this._config,f=v.layout==="fullscreen"&&["strict","scale"].includes(X(v)),w={collapsed_view:()=>v.collapsed_view==="compact"?"Compact":"Minimal",collapsed_open:()=>({inplace:"In place",overlay:"Over the other panels",popup:"As a pop-up"})[v.collapsed_open]||(v.layout==="fullscreen"||X(v)==="scale"?"Automatic: over the other panels":"Automatic: in place"),collapse_title_tap:()=>v.collapse_title_tap===!1?"Off":"On",show_collapse_hint:()=>v.show_collapse_hint?"Show":"Hide",collapsed_info:()=>v.collapsed_info==="off"?"None":"The panel's summary",overflow:()=>f||v.panel_overflow==="scroll"?"Scroll":"Grow"};s=s.map(Z=>{let B=Z.selector?.select?.options;return!w[Z.name]||!B?.some(R=>R.value==="default")?Z:{...Z,selector:{select:{...Z.selector.select,options:B.map(R=>R.value==="default"?{...R,label:`Card default \u2014 ${w[Z.name]()}`}:R)}}}}),o1.has(C.type)||(s=s.filter(Z=>!["collapsed_view","compact_expand","compact_title","compact_icon","compact"].includes(Z.name))),T5.has(C.type)&&(s=s.filter(Z=>!["show_title","title","show_icon","icon"].includes(Z.name)||C.type!=="clock"&&Z.name==="title"));let O=["graph","temp_humidity","uv_solar","statistics"].includes(C.type),F=["type","span","rows","display","in_bar","tile_background","tile_shadow","tile_border","tile_glow","show","id","span_medium","span_narrow","rows_compact","grow","min_width",...C.type==="metric"?["metric"]:[],...C.type==="statistics"?["preset"]:[],...C.type==="stack"?["panels","direction"]:[]],y=Object.keys(C).some(Z=>!F.includes(Z)),P=()=>i(Object.fromEntries(Object.entries(C).filter(([Z])=>F.includes(Z))));return a`<div class="pbody">
      <div class="resetbar">
        ${C.type==="stack"&&!e&&(C.panels||[]).length?a`<button class="btn sm ghost" title="Put this stack's panels straight on the grid, in the stack's place, and remove the stack"
          @click=${()=>this._breakStack(H)}><ha-icon icon="mdi:arrow-split-horizontal"></ha-icon>Break apart</button>`:u}
        <button class="btn sm ghost" ?disabled=${!y} title="Keeps the panel's type, position and size" @click=${()=>{this._flexEds.clear(),P()}}>
          <ha-icon icon="mdi:restore"></ha-icon>Reset to default</button>
      </div>
      ${B3[C.type]&&!e?a`<div class="presets"><span class="fhelp">Presets</span>${B3[C.type].map(([Z,B])=>a`<button class="btn sm ghost" @click=${()=>{let R={...C};for(let[h,U]of Object.entries(B))U===null?delete R[h]:R[h]=U;this._flexEds.clear(),i(R)}}>${Z}</button>`)}</div>`:u}
      ${this._panelView(C,i)}
      ${O?a`<div class="grp first">Series</div>
            <wsfc-series-editor .hass=${this.hass} .panel=${C} .station=${this._station} @panel-changed=${Z=>i(Z.detail.panel)}></wsfc-series-editor>`:u}
      ${this._sections(C,A.length?(()=>{let Z=s.findIndex(R=>R.name==="content_scale"),B=s.slice();return B.splice(Z<0?B.length:Z+1,0,...A),B})():s,m,i,"Size and Scaling")}
      ${l.groups?this._flat(C,`${l.label} options`,l.groups.map(([Z,B,R],h)=>this._sections(C,h===0?B:B.map(U=>({...U,sub:Z,subIcon:R})),{},i,Z,!1))):l.schema.length?this._sections(C,l.schema,{},i,`${l.label} options`,!0,`${l.label} options`):u}
      ${l.flex?a`${C.type==="sky_tracker"?a`<div class="grp">Arc & sky details</div>`:u}
            ${C.type==="sky_tracker"?a`<p class="hint">Fine-tune the arc (Sun Position) and the sky (Sky Bar): heights, colors, labels, ticks and the forecast row. Layers, time window and moon are set above and override the same options here.</p>`:u}
            ${this._flexEditor(H,C,i)}`:u}
    </div>`}};E(T1,"properties",{hass:{attribute:!1},_config:{state:!0},_open:{state:!0},_openPanel:{state:!0},_addType:{state:!0}}),E(T1,"styles",[J5,D`
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
    .pview { margin: 0 0 var(--ltek-sp-3, 12px); padding: var(--ltek-sp-2, 8px) var(--ltek-sp-3, 12px); border: 1px solid var(--ltek-c-accent, var(--primary-color)); border-radius: var(--ltek-radius, 10px); }
    .pview label { font-weight: 600; color: var(--ltek-c-accent, var(--primary-color)); }
    .csrc { margin: 0 0 var(--ltek-sp-3, 12px); }
    .csrc table { width: 100%; border-collapse: collapse; margin-top: 6px; font-size: var(--ltek-fs-small, 13px); }
    .csrc td { padding: 5px 6px 5px 0; vertical-align: top; border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.2)); }
    .csrc td:first-child { width: 32%; }
    .csrc td:last-child { width: 1%; white-space: nowrap; text-align: right; }
    .asrc-how.listed { color: var(--ltek-c-accent, var(--primary-color)); background: color-mix(in srgb, var(--ltek-c-accent, var(--primary-color)) 14%, transparent); }
    .asrc-how.auto { color: var(--success-color, #43a047); background: color-mix(in srgb, var(--success-color, #43a047) 14%, transparent); }
    .asrc-how.web, .asrc-how.key { color: var(--secondary-text-color); background: rgba(127, 127, 127, 0.14); }
    .asrc { display: grid; gap: var(--ltek-sp-3, 12px); margin: var(--ltek-sp-2, 8px) 0; }
    .asrc-g { border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3)); border-radius: var(--ltek-radius, 10px); padding: var(--ltek-sp-2, 8px) var(--ltek-sp-3, 12px); }
    .asrc-g.off { opacity: 0.55; }
    .asrc-t { font-weight: 600; margin-bottom: 2px; }
    .asrc-off { font-weight: 400; color: var(--secondary-text-color); }
    .asrc table { width: 100%; border-collapse: collapse; margin-top: 6px; font-size: var(--ltek-fs-small, 13px); }
    .asrc td { padding: 4px 6px 4px 0; vertical-align: top; border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.2)); }
    .asrc td:first-child { width: 34%; color: var(--secondary-text-color); }
    .asrc td:last-child { width: 1%; white-space: nowrap; text-align: right; }
    .asrc-e { display: block; }
    .asrc-id { display: block; font-size: 11px; color: var(--secondary-text-color); word-break: break-all; }
    .asrc-how { display: inline-flex; align-items: center; gap: 3px; font-size: 12px; padding: 1px 8px; border-radius: 999px; }
    .asrc-how ha-icon { --mdc-icon-size: 14px; }
    .asrc-how.found { color: var(--success-color, #43a047); background: color-mix(in srgb, var(--success-color, #43a047) 14%, transparent); }
    .asrc-how.chosen { color: var(--ltek-c-accent, var(--primary-color)); background: color-mix(in srgb, var(--ltek-c-accent, var(--primary-color)) 14%, transparent); }
    .asrc-how.missing { color: var(--warning-color, #ffa600); background: color-mix(in srgb, var(--warning-color, #ffa600) 14%, transparent); }
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
  `]);customElements.get("weather-station-flex-card-editor")||customElements.define("weather-station-flex-card-editor",T1);globalThis.__wsfcEditorHelpers={stackWithNext:Z7,unstack:W3,moveIntoStack:D3};globalThis.__wsfcPanelView={viewOptions:S1,readView:g1,writeView:Y1,viewKind:X1};globalThis.__wsfcSchemas={STATION_FIELDS:L2,BACKGROUND_GROUPS:F1,APPEARANCE_GROUPS:P1,ALERTS_GROUPS:e2,RESET_ACTIONS:$3,LAYOUT_GROUPS:r2,PANEL_GROUPS:t2,GENERAL_DEFAULTS:C1,REMEMBER:k1,LABELS:V2,PANEL_TYPES:m2,COMMON_SCHEMA:W1,STACK_CHILD_SCHEMA:N1};export{D3 as moveIntoStack,Z7 as stackWithNext,W3 as unstack};
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
