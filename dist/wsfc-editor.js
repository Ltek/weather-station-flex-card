/* weather-station-flex-card 2026.11.01.109 editor — https://github.com/Ltek/weather-station-flex-card */
var R2=Object.defineProperty;var q3=Object.getOwnPropertyDescriptor;var K3=(t,C,H)=>C in t?R2(t,C,{enumerable:!0,configurable:!0,writable:!0,value:H}):t[C]=H;var B1=(t,C,H,e)=>{for(var L=e>1?void 0:e?q3(C,H):C,o=t.length-1,a;o>=0;o--)(a=t[o])&&(L=(e?a(C,H,L):a(L))||L);return e&&L&&R2(C,H,L),L};var E=(t,C,H)=>K3(t,typeof C!="symbol"?C+"":C,H);var E2=globalThis.__wsfcHost?.lit;if(!E2)throw new Error("wsfc-editor.js: the card did not provide lit; update every file of the card together");var{CSSResult:Z7,LitElement:z,ReactiveElement:h7,_$LE:S7,_$LH:g7,adoptStyles:w7,css:D,defaultConverter:b7,getCompatibleStyle:_7,html:i,isServer:O7,mathml:y7,noChange:k7,notEqual:T7,nothing:u,render:F7,supportsAdoptingStyleSheets:P7,svg:B7,unsafeCSS:$7}=E2;var D2,W2;(function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"})(D2||(D2={})),(function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"})(W2||(W2={}));var Q=function(t,C,H,e){e=e||{},H=H??{};var L=new Event(C,{bubbles:e.bubbles===void 0||e.bubbles,cancelable:!!e.cancelable,composed:e.composed===void 0||e.composed});return L.detail=H,t.dispatchEvent(L),L};var N2=globalThis.__wsfcHost?.["vendor/weather-forecast-card/src/weather-forecast-card.ts"];if(!N2)throw new Error("wsfc-editor.js: the card did not provide vendor/weather-forecast-card/src/weather-forecast-card.ts; update every file of the card together");var{WeatherForecastCard:A2}=N2;var z2=globalThis.__wsfcHost?.["lit/decorators"];if(!z2)throw new Error("wsfc-editor.js: the card did not provide lit/decorators; update every file of the card together");var{customElement:I2,eventOptions:W7,property:G2,query:N7,queryAll:z7,queryAssignedElements:I7,queryAssignedNodes:G7,queryAsync:U7,standardProperty:Q7,state:U2}=z2;var Q2="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var j2="M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z";var q2=Number.isNaN||function(C){return typeof C=="number"&&C!==C};function Y3(t,C){return!!(t===C||q2(t)&&q2(C))}function X3(t,C){if(t.length!==C.length)return!1;for(var H=0;H<t.length;H++)if(!Y3(t[H],C[H]))return!1;return!0}function K2(t,C){C===void 0&&(C=X3);var H=null;function e(){for(var L=[],o=0;o<arguments.length;o++)L[o]=arguments[o];if(H&&H.lastThis===this&&C(L,H.lastArgs))return H.lastResult;var a=t.apply(this,L);return H={lastResult:a,lastArgs:L,lastThis:this},a}return e.clear=function(){H=null},e}var J3=typeof global=="object"&&global&&global.Object===Object&&global,Y2=J3;var C0=typeof self=="object"&&self&&self.Object===Object&&self,H0=Y2||C0||Function("return this")(),X2=H0;var V0=X2.Symbol,C1=V0;var J2=Object.prototype,L0=J2.hasOwnProperty,e0=J2.toString,u1=C1?C1.toStringTag:void 0;function r0(t){var C=L0.call(t,u1),H=t[u1];try{t[u1]=void 0;var e=!0}catch{}var L=e0.call(t);return e&&(C?t[u1]=H:delete t[u1]),L}var C5=r0;var t0=Object.prototype,M0=t0.toString;function o0(t){return M0.call(t)}var H5=o0;var i0="[object Null]",a0="[object Undefined]",V5=C1?C1.toStringTag:void 0;function n0(t){return t==null?t===void 0?a0:i0:V5&&V5 in Object(t)?C5(t):H5(t)}var L5=n0;function A0(t){return t!=null&&typeof t=="object"}var e5=A0;var l0="[object Symbol]";function d0(t){return typeof t=="symbol"||e5(t)&&L5(t)==l0}var r5=d0;function s0(t,C){for(var H=-1,e=t==null?0:t.length,L=Array(e);++H<e;)L[H]=C(t[H],H,t);return L}var t5=s0;var p0=Array.isArray,M5=p0;var m0=1/0,o5=C1?C1.prototype:void 0,i5=o5?o5.toString:void 0;function a5(t){if(typeof t=="string")return t;if(M5(t))return t5(t,a5)+"";if(r5(t))return i5?i5.call(t):"";var C=t+"";return C=="0"&&1/t==-m0?"-0":C}var n5=a5;function c0(t){return t==null?"":n5(t)}var $1=c0;function v0(t,C,H){var e=-1,L=t.length;C<0&&(C=-C>L?0:L+C),H=H>L?L:H,H<0&&(H+=L),L=C>H?0:H-C>>>0,C>>>=0;for(var o=Array(L);++e<L;)o[e]=t[e+C];return o}var A5=v0;function u0(t,C,H){var e=t.length;return H=H===void 0?e:H,!C&&H>=e?t:A5(t,C,H)}var l5=u0;var x0="\\ud800-\\udfff",f0="\\u0300-\\u036f",Z0="\\ufe20-\\ufe2f",h0="\\u20d0-\\u20ff",S0=f0+Z0+h0,g0="\\ufe0e\\ufe0f",w0="\\u200d",b0=RegExp("["+w0+x0+S0+g0+"]");function _0(t){return b0.test(t)}var R1=_0;function O0(t){return t.split("")}var d5=O0;var s5="\\ud800-\\udfff",y0="\\u0300-\\u036f",k0="\\ufe20-\\ufe2f",T0="\\u20d0-\\u20ff",F0=y0+k0+T0,P0="\\ufe0e\\ufe0f",B0="["+s5+"]",l2="["+F0+"]",d2="\\ud83c[\\udffb-\\udfff]",$0="(?:"+l2+"|"+d2+")",p5="[^"+s5+"]",m5="(?:\\ud83c[\\udde6-\\uddff]){2}",c5="[\\ud800-\\udbff][\\udc00-\\udfff]",R0="\\u200d",v5=$0+"?",u5="["+P0+"]?",E0="(?:"+R0+"(?:"+[p5,m5,c5].join("|")+")"+u5+v5+")*",D0=u5+v5+E0,W0="(?:"+[p5+l2+"?",l2,m5,c5,B0].join("|")+")",N0=RegExp(d2+"(?="+d2+")|"+W0+D0,"g");function z0(t){return t.match(N0)||[]}var x5=z0;function I0(t){return R1(t)?x5(t):d5(t)}var f5=I0;function G0(t){return function(C){C=$1(C);var H=R1(C)?f5(C):void 0,e=H?H[0]:C.charAt(0),L=H?l5(H,1).join(""):C.slice(1);return e[t]()+L}}var Z5=G0;var U0=Z5("toUpperCase"),h5=U0;function Q0(t){return h5($1(t).toLowerCase())}var H1=Q0;var S5=globalThis.__wsfcHost?.["vendor/weather-forecast-card/src/types.ts"];if(!S5)throw new Error("wsfc-editor.js: the card did not provide vendor/weather-forecast-card/src/types.ts; update every file of the card together");var{CHART_ATTRIBUTES:g5,CURRENT_WEATHER_ATTRIBUTES:Y,DEFAULT_CHART_ATTRIBUTE:I4,ForecastMode:G4,MAX_TEMPERATURE_PRECISION:s2,WEATHER_EFFECTS:E1}=S5;var j0={humidity:"humidity",pressure:["pressure","atmospheric_pressure"],wind_speed:"wind_speed",wind_gust_speed:"wind_speed",visibility:"distance",dew_point:"temperature",apparent_temperature:"temperature",uv_index:void 0,ozone:void 0,cloud_coverage:void 0},q=class extends z{constructor(){super(...arguments);this._schema=K2((H,e,L)=>[...this._genericSchema(H),...this._currentWeatherSchema(H),...this._forecastSchema(H),...this._interactionsSchema(L),...this._attributeEntitiesSchema(e),...this._advancedSchema()]);this._genericSchema=H=>[{name:"entity",required:!0,selector:{entity:{domain:"weather"}},optional:!1},{name:"name",selector:{text:{}},optional:!0},{name:"forecast_mode",default:"show_both",selector:{select:{options:[{value:"show_both",label:H("ui.panel.lovelace.editor.card.weather-forecast.show_both")},{value:"show_current",label:H("ui.panel.lovelace.editor.card.weather-forecast.show_only_current")},{value:"show_forecast",label:H("ui.panel.lovelace.editor.card.weather-forecast.show_only_forecast")}]}}},{name:"default_forecast",default:"daily",optional:!0,selector:{select:{options:[{value:"hourly",label:H("ui.panel.lovelace.editor.card.weather-forecast.hourly")},{value:"daily",label:H("ui.panel.lovelace.editor.card.weather-forecast.daily")}]}}},{name:"show_condition_effects",default:!1,optional:!0,selector:{select:{multiple:!0,options:E1.map(e=>({value:e,label:H1(e)}))}}},{name:"show_moon_phase",selector:{boolean:{}},default:!0,optional:!0}];this._currentWeatherSchema=H=>[{name:"current.temperature_entity",selector:{entity:{domain:"sensor",device_class:"temperature"}},optional:!0},{name:"current.show_attributes",default:!1,optional:!0,selector:{select:{multiple:!0,options:Y.map(e=>({value:e,label:H(`ui.card.weather.attributes.${e}`)||H1(e).replace(/_/g," ")}))}}},{name:"current.secondary_info_attribute",default:"none",optional:!0,selector:{select:{options:Y.map(e=>({value:e,label:H(`ui.card.weather.attributes.${e}`)||H1(e).replace(/_/g," ")}))}}}];this._forecastSchema=H=>[{name:"forecast.mode",default:"simple",selector:{select:{options:[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}]}},optional:!0},{name:"forecast.default_chart_attribute",selector:{select:{mode:"dropdown",options:g5.map(e=>({value:e,label:e==="temperature_and_precipitation"?`${H("ui.card.weather.attributes.temperature")||"Temperature"}, ${H("ui.card.weather.attributes.precipitation")||"Precipitation"}`:H(`ui.card.weather.attributes.${e}`)||H1(e).replace(/_/g," ")}))}},optional:!0},{name:"forecast.extra_attribute",optional:!0,selector:{select:{mode:"dropdown",options:[{value:"none",label:H("ui.panel.lovelace.editor.card.weather-forecast.none")||"(no attribute)"},{value:"wind_bearing",label:H("ui.card.weather.attributes.wind_bearing")||"Wind bearing"},{value:"wind_direction",label:H("ui.card.weather.attributes.wind_direction")||"Wind direction"},{value:"precipitation_probability",label:H("ui.card.weather.attributes.precipitation_probability")||"Precipitation probability"},{value:"uv_index",label:H("ui.card.weather.attributes.uv_index")||"UV index"}]}}},{name:"forecast.scroll_to_selected",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_sun_times",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.use_color_thresholds",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_attribute_selector",selector:{boolean:{}},default:!1,optional:!0},{name:"forecast.hourly_group_size",optional:!0,selector:{number:{min:1,max:4}},default:1},{name:"forecast.hourly_slots",optional:!0,selector:{number:{min:1}}},{name:"forecast.daily_slots",optional:!0,selector:{number:{min:1}}}];this._interactionsSchema=H=>{let e=[],L=[{name:"forecast_action.tap_action",selector:{ui_action:{default_action:"toggle-forecast"}}}];return H==="chart"?(e.push("double_tap_action"),L.push({name:"forecast_action.hold_action",selector:{ui_action:{default_action:"select-forecast-attribute"}}})):e.push("hold_action","double_tap_action"),L.push({name:"",type:"optional_actions",flatten:!0,schema:e.map(o=>({name:`forecast_action.${o}`,selector:{ui_action:{default_action:"none"}}}))}),[{name:"forecast_interactions",type:"expandable",flatten:!0,schema:L},{name:"interactions",type:"expandable",flatten:!0,schema:[{name:"tap_action",selector:{ui_action:{default_action:"more-info"}}},{name:"",type:"optional_actions",flatten:!0,schema:["hold_action","double_tap_action"].map(o=>({name:o,selector:{ui_action:{default_action:"none"}}}))}]}]};this._attributeEntitiesSchema=H=>H.length===0?[]:[{name:"attribute_entities",type:"expandable",flatten:!0,schema:H.flatMap(L=>{let o=j0[L];return[{name:`current.attribute_entity_${L}`,optional:!0,selector:o?{entity:{domain:"sensor",device_class:o}}:{entity:{domain:"sensor"}}},{name:`current.attribute_label_${L}`,optional:!0,selector:{text:{}}},{name:`current.attribute_icon_${L}`,optional:!0,selector:{icon:{}}}]})}];this._advancedSchema=()=>[{name:"advanced_settings",type:"expandable",flatten:!0,schema:[{name:"forecast_types",default:"both",optional:!0,selector:{select:{options:[{value:"both",label:"Hourly and daily"},{value:"daily",label:"Daily only"},{value:"hourly",label:"Hourly only"}]}}},{name:"icons_path",selector:{text:{}},optional:!0},{name:"current.temperature_precision",optional:!0,selector:{number:{min:0,max:s2}}},{name:"forecast.temperature_precision",optional:!0,selector:{number:{min:0,max:s2}}}]}];this._computeCustomAttributeLabel=H=>{switch(H.name){case"entity":return this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"Entity";case"label":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name")||"Name";case"icon":return this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")||"Icon";default:return H.name}};this._addCustomAttribute=()=>{let H=e1(this._config.current?.show_attributes);this._commitCustomAttributes([...H,{}])};this._removeCustomAttribute=H=>{let e=e1(this._config.current?.show_attributes);e.splice(H,1),this._commitCustomAttributes(e)};this._customAttributeChanged=(H,e)=>{e.stopPropagation();let L=e1(this._config.current?.show_attributes);L[H]=e.detail.value,this._commitCustomAttributes(L)};this._computeLabel=H=>{if(H.name.startsWith("current.attribute_label_")){let L=H.name.replace("current.attribute_label_","");return`${this.localize(`ui.card.weather.attributes.${L}`)||H1(L).replace(/_/g," ")} label`}if(H.name.startsWith("current.attribute_icon_")){let L=H.name.replace("current.attribute_icon_","");return`${this.localize(`ui.card.weather.attributes.${L}`)||H1(L).replace(/_/g," ")} icon`}if(H.name.startsWith("current.attribute_entity_")){let L=H.name.replace("current.attribute_entity_",""),o=this.localize(`ui.card.weather.attributes.${L}`)||H1(L).replace(/_/g," "),a=(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase();return`${o} ${a}`}let e=H.name.startsWith("forecast_action.")?H.name.split(".")[1]:H.name;switch(e){case"entity":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${(this.hass.localize("ui.panel.lovelace.editor.card.config.required")||"required").toLocaleLowerCase()})`;case"name":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name");case"current.temperature_entity":return`${this.hass.localize("ui.card.weather.attributes.temperature")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase()}`;case"forecast_mode":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.weather_to_show");case"default_forecast":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.forecast_type");case"forecast_types":return"Forecast types to load";case"icons_path":return"Path to custom icons";case"current.show_attributes":return this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute";case"current.secondary_info_attribute":return this.hass.localize("ui.panel.lovelace.editor.card.generic.secondary_info_attribute")||"Secondary info attribute";case"forecast.extra_attribute":return`Extra ${(this.hass.localize("ui.card.weather.forecast")||"forecast").toLocaleLowerCase()} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute").toLocaleLowerCase()}`;case"forecast.mode":return"Forecast display mode";case"current.temperature_precision":return"Current temperature precision";case"forecast.temperature_precision":return"Forecast temperature precision";case"forecast.scroll_to_selected":return"Scroll to selected forecast";case"forecast.show_sun_times":return"Show sunrise and sunset times";case"forecast.use_color_thresholds":return"Use color thresholds";case"forecast.show_attribute_selector":return"Show forecast attribute selector";case"forecast.default_chart_attribute":return"Default chart forecast attribute";case"forecast.hourly_group_size":return"Hourly forecast group size";case"forecast.hourly_slots":return"Hourly forecast slots";case"forecast.daily_slots":return"Daily forecast slots";case"forecast_interactions":return`${this.hass.localize("ui.card.weather.forecast")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.interactions")||"interactions").toLocaleLowerCase()}`;case"advanced_settings":return this.hass.localize("ui.dialogs.helper_settings.generic.advanced_settings");case"show_condition_effects":return"Show condition effects";case"show_moon_phase":return"Show moon phase";case"attribute_entities":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute"} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")||"entities").toLocaleLowerCase()}`;default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e}`)}};this._computeHelper=H=>{switch(H.name){case"current.temperature_entity":return"Optional temperature sensor entity to override the weather entity's temperature.";case"default_forecast":return"Select the default forecast type to show when forecasts are enabled. Users can still toggle between hourly and daily forecasts if both are available.";case"forecast_types":return"Limit which forecast types the card subscribes to. Loading only the forecast you display reduces websocket load, which can prevent dashboard slowdowns on resource-constrained devices.";case"current.show_attributes":return"Select which weather attributes to display in the current weather section.";case"current.secondary_info_attribute":return"Select a weather attribute to display as secondary information in the current weather section.";case"forecast.extra_attribute":return"Select an extra attribute to display below each forecast.";case"forecast_interactions":return"Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.";case"interactions":return"Action to perform when the non-forecast area of the card is interacted with.";case"icons_path":return"Path to custom weather condition icons (e.g., /local/img/weather).";case"forecast.scroll_to_selected":return"Automatically scrolls to the first hourly forecast of the selected date when switching to hourly view, and returns to the first daily entry when switching back.";case"forecast.show_sun_times":return"Displays sunrise and sunset times in the hourly forecast, and uses specific icons to visualize clear night conditions.";case"forecast.use_color_thresholds":return"Replaces solid temperature lines with a gradient based on actual values when using forecast chart mode.";case"forecast.show_attribute_selector":return"When enabled and using chart mode, shows a selector above the forecast to choose which weather attribute to display.";case"forecast.default_chart_attribute":return"The forecast attribute to visualize by default in chart mode.";case"forecast.hourly_group_size":return"Aggregate hourly forecast data into groups to reduce the number of forecast entries shown.";case"forecast.hourly_slots":return"Limit the number of hourly forecast entries to show.";case"forecast.daily_slots":return"Limit the number of daily forecast entries to show.";case"current.temperature_precision":return"The number of decimal places to show for current temperature values.";case"forecast.temperature_precision":return"The number of decimal places to show for forecast temperature values.";case"name":return"Overrides the friendly name of the entity.";case"show_condition_effects":return"Select which weather conditions initiate visual effects and animations on the card.";case"show_moon_phase":return"Shades the night-time moon to match the current lunar phase based on your Home Assistant location. Disable to always show a full moon.";case"attribute_entities":return"Override weather attribute values with custom sensor entities.";default:return}};this.localize=H=>{let e;if(this._config?.entity&&H!=="ui.card.weather.attributes.precipitation"&&H.startsWith("ui.card.weather.attributes")){let L=this.hass.states[this._config.entity];L&&(e=this.hass.formatEntityAttributeName(L,H.replace("ui.card.weather.attributes.","")))}return e||(e=this.hass.localize(H)),e}}setConfig(H){this._config=H}render(){if(!this.hass||!this._config)return u;let H=D1(this._config),e=this._getSelectedAttributes(H),L=this._schema(this.localize.bind(this),e,H["forecast.mode"]);return i`
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
          ${H.map((e,L)=>this._renderCustomAttributeRow(e,L))}
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
    `}_renderCustomAttributeRow(H,e){return i`
      <div class="custom-attribute-row">
        <ha-form
          .hass=${this.hass}
          .data=${H}
          .schema=${q0}
          .computeLabel=${this._computeCustomAttributeLabel}
          @value-changed=${L=>this._customAttributeChanged(e,L)}
        ></ha-form>
        <ha-icon-button
          .path=${Q2}
          .label=${this.hass.localize("ui.common.remove")||"Remove"}
          @click=${()=>this._removeCustomAttribute(e)}
        ></ha-icon-button>
      </div>
    `}_commitCustomAttributes(H){let e={...this._config,current:{...this._config.current,show_attributes:Y0(this._config.current?.show_attributes,H)}};Q(this,"config-changed",{config:e})}_getSelectedAttributes(H){let e=H["current.show_attributes"];return e?Array.isArray(e)?e.map(L=>typeof L=="string"?L:L.name):[]:[]}_valueChanged(H){H.stopPropagation();let e=H.detail.value;e.forecast_mode==="show_both"?(e.show_current=!0,e.show_forecast=!0):e.forecast_mode==="show_current"?(e.show_current=!0,e.show_forecast=!1):(e.show_current=!1,e.show_forecast=!0),delete e.forecast_mode;let L=X0(e);if(delete L.temperature_entity,L?.forecast?.extra_attribute==="none"&&delete L.forecast.extra_attribute,Array.isArray(L.show_condition_effects)&&E1.every(a=>L.show_condition_effects.includes(a))&&(L.show_condition_effects=!0),L?.current){let o={},a={},d={};for(let l of Object.keys(L.current))if(l.startsWith("attribute_entity_")){let A=l.replace("attribute_entity_",""),m=L.current[l];m&&(o[A]=m),delete L.current[l]}else if(l.startsWith("attribute_label_")){let A=l.replace("attribute_label_",""),m=L.current[l];m&&(a[A]=m),delete L.current[l]}else if(l.startsWith("attribute_icon_")){let A=l.replace("attribute_icon_",""),m=L.current[l];m&&(d[A]=m),delete L.current[l]}if(Array.isArray(L.current.show_attributes)){let l=e1(this._config?.current?.show_attributes);L.current.show_attributes=w5(L.current.show_attributes,{entity:o,label:a,icon:d},l)}}Q(this,"config-changed",{config:L})}};q.styles=D`
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
  `,B1([G2({attribute:!1})],q.prototype,"hass",2),B1([U2()],q.prototype,"_config",2),q=B1([I2("wsfc-flex-core-editor")],q);var r1=t=>typeof t=="string"&&Y.includes(t),e1=t=>{if(!Array.isArray(t))return[];let C=[];for(let H of t)if(H!=null){if(typeof H=="string")r1(H)||C.push({name:H});else if(typeof H=="object"){let e=H;r1(e.name)||C.push(e)}}return C},w5=(t,C,H)=>{let e=Y.every(a=>t.includes(a)),L=Object.keys(C.entity).length>0||Object.keys(C.label).length>0||Object.keys(C.icon).length>0;return H.length===0&&!L&&e?!0:[...t.map(a=>{let d=C.entity[a],l=C.label[a],A=C.icon[a];return d||l||A?{name:a,...d?{entity:d}:{},...l?{label:l}:{},...A?{icon:A}:{}}:a}),...H]},q0=[{name:"entity",selector:{entity:{}}},{name:"label",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],K0=t=>{if(t===!0)return[...Y];if(typeof t=="string")return r1(t)?[t]:[];if(!Array.isArray(t))return[];let C=[];for(let H of t)if(H!=null){if(typeof H=="string")r1(H)&&C.push(H);else if(typeof H=="object"){let e=H;r1(e.name)&&C.push(e)}}return C},Y0=(t,C)=>{let H=K0(t),e=[],L={entity:{},label:{},icon:{}};for(let o of H)typeof o=="string"?e.push(o):o.name&&(e.push(o.name),o.entity&&(L.entity[o.name]=o.entity),o.label&&(L.label[o.name]=o.label),o.icon&&(L.icon[o.name]=o.icon));return w5(e,L,C)},X0=t=>{let C={...t};for(let H of Object.keys(t)){if(!H.startsWith("forecast.")&&!H.startsWith("forecast_action.")&&!H.startsWith("current."))continue;let e=H.split(".");if(e.length<2)continue;let[L,o]=e;!L||!o||((!C[L]||typeof C[L]!="object")&&(C[L]={}),C[L][o]=t[H],delete C[H])}return C},D1=t=>{let C=J0(t);C.forecast_mode=C.show_current&&C.show_forecast?"show_both":C.show_current?"show_current":"show_forecast",C.temperature_entity&&!C["current.temperature_entity"]&&(C["current.temperature_entity"]=C.temperature_entity),delete C.temperature_entity,C.show_condition_effects===!0&&(C.show_condition_effects=[...E1]),C["current.show_attributes"]===!0&&(C["current.show_attributes"]=[...Y]);let H=C["current.show_attributes"];if(Array.isArray(H)){let e=[];for(let L of H)if(typeof L=="string")r1(L)&&e.push(L);else if(typeof L=="object"&&L!==null){let o=L;r1(o.name)&&(e.push(o.name),o.entity&&(C[`current.attribute_entity_${o.name}`]=o.entity),o.label&&(C[`current.attribute_label_${o.name}`]=o.label),o.icon&&(C[`current.attribute_icon_${o.name}`]=o.icon))}C["current.show_attributes"]=e}return C},J0=t=>{let C={};for(let H in t){let e=t[H];if(H==="forecast"&&e&&typeof e=="object"&&!Array.isArray(e)){for(let L in e)C[`forecast.${L}`]=e[L];continue}if(H==="current"&&e&&typeof e=="object"&&!Array.isArray(e)){for(let L in e)C[`current.${L}`]=e[L];continue}if(H==="forecast_action"&&e&&typeof e=="object"&&!Array.isArray(e)){for(let L in e)C[`forecast_action.${L}`]=e[L];continue}C[H]=e}return C};(()=>{let{WFC_BUILD:t,WFC_DATE_FORMATS:C,WFC_DETAILS:H,WFC_DEVICE_PREFIX:e,WFC_LABEL:L,WFC_METRIC_CATALOG:o,WFC_METRIC_LABELS:a,WFC_METRIC_POSITIONS:d,WFC_SKY_EXTRA_KEYS:l,clamp:A,wfcAutoMapDevice:m,wfcDefaultConfig:p,wfcDeviceEntities:x,wfcDeviceIdOf:Z,wfcExtraKeys:b,wfcIsDeviceRef:T,wfcLabelsPosNum:F,wfcMetrics:O,wfcNormalizeSources:P,wfcResolve:h,wfcResolveDeviceMap:B,wfcToYaml:R}=globalThis.__wsfcSectionsScope||{};if(!h)throw new Error("Weather Flex sections: load the card before its editor");let f=q.prototype,U=new Set(["forecast_mode","default_forecast","forecast_types","forecast.mode","forecast.extra_attribute","entity","current.temperature_entity","forecast.hourly_group_size","current.temperature_precision","forecast.temperature_precision","name","current.secondary_info_attribute","show_moon_phase","icons_path"]),i1={card_appearance:"mdi:palette-outline",current_settings:"mdi:weather-partly-cloudy",forecast_settings:"mdi:chart-line",forecast_interactions:"mdi:gesture-tap",interactions:"mdi:gesture-tap-button",advanced_settings:"mdi:tune",attribute_entities:"mdi:database-outline"},a1=null;function B3(){return a1||(a1=new Set,Object.values(O2).forEach(V=>V.forEach(M=>a1.add(M)))),a1}function _2(V,M){let r=[];return V.forEach(n=>{if(!M.has(n.name))if(n.schema){let s=_2(n.schema,M);s.length&&r.push({...n,schema:s})}else r.push(n)}),r}function $3(V){let M=B3(),r=new Set([...M,...U]);V=_2(V,r);let n=new Map,s=[];V.forEach(w=>{U.has(w.name)||(w.type==="expandable"?s.push(w):n.set(w.name,w))});let v=w=>w.map(_=>n.get(_)).filter(Boolean),c=(w,_,$)=>{let k=v($);return k.length?[{name:w,type:"expandable",flatten:!0,icon:_,schema:k}]:[]},g=w=>s.find(_=>_.name===w),y=[];{let w=g("attribute_entities");w&&y.push(i1.attribute_entities?{...w,icon:i1.attribute_entities}:w)}return y}let x7=["forecast.scroll_to_selected","forecast.show_sun_times","forecast.use_color_thresholds","forecast.show_attribute_selector"],R3=["forecast_action.tap_action","forecast_action.hold_action","forecast_action.double_tap_action"],E3=["tap_action","hold_action","double_tap_action"],D3=["show_condition_effects"],W3=[],O2={current:["current.show_attributes"],hourly:[],daily:[]},y2={card_appearance:"Card Appearance",current_settings:"Current Weather",forecast_settings:"Forecast Settings",interactions:"Card actions",forecast_interactions:"Forecast actions",advanced_settings:"Advanced settings",attribute_entities:"Metric entities",tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double tap action",entity:"Primary Weather Source (required)",name:"Custom Friendly Name","current.temperature_entity":"Custom Temperature Entity (optional)","current.show_attributes":"Built-in metrics","current.secondary_info_attribute":"Secondary info metric","forecast.show_attribute_selector":"Show forecast metric selector"},N3="Weather Flex sections";f.render=function(){if(!this.hass||!this._config)return u;let V=D1(this._config),M=this._getSelectedAttributes(V),r=this._schema(this.localize.bind(this),M,V["forecast.mode"]),n=$3(r),s=c=>y2[c.name]||this._computeLabel(c)||c.name,v=this._wfcAccordionEnabled();return i`
      ${this._wfcEditorStyle()}
      ${this.wsfcMode==="sections"?u:i`<div class="wsfc-ed-header">
        <div class="wsfc-ed-title">
          <span class="wsfc-ed-name">${N3}</span>
          <span class="wsfc-ed-ver">build ${t}</span>
        </div>
        <label class="wsfc-ed-accordion wsfc-check-row">
          <input
            type="checkbox"
            class="wsfc-checkbox"
            .checked=${v}
            @change=${c=>this._wfcSetAccordion(c.target.checked)}
          />
          <span>Auto Collapse setting panels when opening new panel</span>
        </label>
      </div>`}
      ${n.length?i`<ha-form
            .hass=${this.hass}
            .data=${V}
            .schema=${n}
            .computeLabel=${s}
            .computeHelper=${c=>this._wfcHelper(c)}
            @value-changed=${this._valueChanged}
          ></ha-form>`:u}
      ${this._wfcCardAppearancePanel()}
      ${this._wfcWeatherSourcesPanel()}
      ${this._wfcEditor()}
      ${this._wfcUserActionsPanel()}
      ${this._wfcAdvancedPanel()}
      ${this._wfcYamlPanel()}
    `},f._wfcCardAppearancePanel=function(){let V=h(this._config).card||{},M="card";return i`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${i1.card_appearance}></ha-icon><span class="wsfc-panel-title">Card Appearance</span></summary>
        <div class="wsfc-ed-panel">
          ${this.wsfcHide&&this.wsfcHide.includes("show_condition_effects")?i`<p class="wsfc-hint">The weather animation is drawn behind the whole card (Appearance → Background), so its effects and moon phase are set there.</p>`:i`${this._wfcConfigCheckbox("show_moon_phase","Show moon phase",this._config.show_moon_phase,!0)}
          <p class="wsfc-hint">Shades the night-time moon to match the current lunar phase. Disable to always show a full moon.</p>
          ${this._wfcStockFormFor(D3)}
          <p class="wsfc-hint">Which weather conditions trigger visual effects/animations on the card.</p>`}
          ${this._wfcConfigText("icons_path","Custom icons path",this._config.icons_path,"/local/img/weather")}
          <p class="wsfc-hint">Path to custom weather condition icons (e.g. /local/img/weather).</p>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Border</div>
            ${this._wfcCheckbox("Card border",!!V.border_enabled,r=>this._wfcToggleSecField(M,"border_enabled",r))}
            ${V.border_enabled?i`
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
            ${V.glow_enabled?i`
                  ${this._wfcColorField("Glow color",V.glow_color,r=>this._wfcSetSecField(M,"glow_color",r.target.value))}
                  ${this._wfcPlainSlider("Glow intensity","%",Math.round((V.glow_intensity==null?1:V.glow_intensity)*100),100,"glow_intensity",r=>this._wfcSetSecField(M,"glow_intensity",A((parseInt(r.target.value,10)||100)/100,.2,3)))}
                  ${this._wfcCheckbox("Glow only the enabled border sides",V.glow_borders_only!==!1,r=>this._wfcToggleSecField(M,"glow_borders_only",r))}`:u}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Drop shadow</div>
            ${this._wfcCheckbox("Card shadow",!!V.shadow_enabled,r=>this._wfcToggleSecField(M,"shadow_enabled",r))}
            ${V.shadow_enabled?i`
                  ${this._wfcColorField("Shadow color",V.shadow_color,r=>this._wfcSetSecField(M,"shadow_color",r.target.value))}
                  ${this._wfcNumField(M,"shadow_x","Offset X","px",V.shadow_x,0)}
                  ${this._wfcNumField(M,"shadow_y","Offset Y","px",V.shadow_y,4)}
                  ${this._wfcNumField(M,"shadow_blur","Blur","px",V.shadow_blur,16)}
                  ${this._wfcNumField(M,"shadow_spread","Spread","px",V.shadow_spread,0)}
                  ${this._wfcNumField(M,"shadow_opacity","Opacity","%",V.shadow_opacity,35)}`:u}
          </div>
        </div>
      </details>
    `};let M2=4;f._wfcEdSources=function(){return P(this._config,this.hass)},f._wfcCommitSources=function(V){let M=V.filter(w=>w&&w.ref).map(w=>{let _={};for(let k in w.overrides||{})w.overrides[k]&&(_[k]=w.overrides[k]);let $={ref:w.ref};return Object.keys(_).length&&($.overrides=_),w.disabled&&($.disabled=!0),$}),r={...this._config.metric_sources||{}};delete r.primary,delete r.fallback,delete r.custom,delete r.device_map,M.length?r.sources=M:delete r.sources;let n={...this._config,metric_sources:r},s=w=>{let _=this.hass&&this.hass.states[w],$=_&&_.attributes&&_.attributes.supported_features;return typeof $=="number"&&($&7)!==0},v=w=>w.map(_=>_.ref).filter(_=>typeof _=="string"&&_.startsWith("weather.")),c=v(M.filter(w=>!w.disabled)),g=v(M),y=c.find(s)||c[0]||g.find(s)||g[0];y&&(n.entity=y),Object.keys(r).length===0&&delete n.metric_sources,Q(this,"config-changed",{config:n})},f._wfcSetSourceRef=function(V,M){let r=this._wfcEdSources();r[V]&&(M?r[V]={ref:M,overrides:r[V].overrides||{}}:r.splice(V,1),this._wfcCommitSources(r))},f._wfcAddSource=function(V){if(!V)return;let M=this._wfcEdSources();M.length>=M2||(M.push({ref:V,overrides:{}}),this._wfcCommitSources(M))},f._wfcMoveSource=function(V,M){let r=this._wfcEdSources(),n=V+M;if(V<0||n<0||n>=r.length)return;let s=r[V];r[V]=r[n],r[n]=s,this._wfcCommitSources(r)},f._wfcRemoveSource=function(V){let M=this._wfcEdSources();V<0||V>=M.length||(M.splice(V,1),this._wfcCommitSources(M))},f._wfcToggleSourceDisabled=function(V){let M=this._wfcEdSources();M[V]&&(M[V].disabled=!M[V].disabled,this._wfcCommitSources(M))},f._wfcSetSourceOverride=function(V,M,r){let n=this._wfcEdSources();if(!n[V])return;let s={...n[V].overrides||{}};r?s[M]=r:delete s[M],n[V].overrides=s,this._wfcCommitSources(n)},f._wfcLiveValue=function(V,M){let r=this.hass&&this.hass.states[V];if(!r)return"";let n,s;return V.startsWith("weather.")?(n=r.attributes?r.attributes[M]:null,s=r.attributes&&r.attributes[M+"_unit"]):(n=r.state,s=r.attributes&&r.attributes.unit_of_measurement),n==null||n===""||n==="unknown"||n==="unavailable"?"":s?`${n} ${s}`:`${n}`},f._wfcAvailableMetrics=function(){let V=new Set;if(!this.hass)return V;let M=new Set;this._config.entity&&M.add(this._config.entity);for(let n of this._wfcEdSources())if(!n.disabled)if(n.overrides&&Object.keys(n.overrides).forEach(s=>{V.add(s),M.add(n.overrides[s])}),T(n.ref)){let s=B(this._config,this.hass,Z(n.ref));Object.keys(s).forEach(v=>{V.add(v),M.add(s[v])})}else n.ref&&M.add(n.ref);M.forEach(n=>{let s=this.hass.states[n];s&&s.attributes&&Object.keys(s.attributes).forEach(v=>V.add(v))});let r=n=>{if(Array.isArray(n))for(let s of n)s&&Object.keys(s).forEach(v=>V.add(v))};if(r(this._hourlyForecastData),r(this._dailyForecastData),this.__wfcSrc&&Object.values(this.__wfcSrc).forEach(n=>{n&&(r(n.hourly),r(n.daily))}),typeof A2.__wsfcExtraEntity=="function")for(let n of["ozone"])try{A2.__wsfcExtraEntity(n,this.hass,this._config)&&V.add(n)}catch{}return V};function z3(V){return String(V).split(/[_\s]+/).filter(Boolean).map(M=>M.charAt(0).toUpperCase()+M.slice(1)).join(" ")}let I3={uv_index:"UV Index",apparent_temperature:"Apparent Temp / Feels Like",dew_point:"Dew Point",wind_gust_speed:"Wind Gust"};function G3(V){return I3[V]||z3(V)}f._wfcMetricOptions=function(V,M){let r=this._wfcAvailableMetrics(),n=M?[{value:"",label:"High / Low Temperature"},{value:"__wfc_none__",label:"None (show nothing)"}]:[];return(V||[]).forEach(s=>{let v=G3(s);n.push({value:s,label:r.has(s)?v:`${v} (unavailable)`})}),n},f._wfcSourceMappingEditor=function(V,M){let r=M.ref,n=M.overrides||{},s=T(r),v=s?Z(r):null,c=s?m(this.hass,v):{},g=_=>{if(s)return c[_]||"";if(!r)return"";if(r.startsWith("weather.")){let $=this.hass&&this.hass.states[r];return $&&$.attributes&&$.attributes[_]!=null?r:""}return""},y=s?{include_entities:x(this.hass,v)}:{},w=_=>{let $=_.key,k=n[$]||g($),S=!!n[$],v1=k?this._wfcLiveValue(k,$):"",a2=[{name:"e",selector:{entity:y}}],n2=S?" (override)":k?"":" \u2014 none";return i`
        <div class="wsfc-srcmap-row">
          <ha-form
            .hass=${this.hass}
            .data=${{e:k}}
            .schema=${a2}
            .computeLabel=${()=>_.label+n2}
            @value-changed=${j=>this._wfcSetSourceOverride(V,$,j.detail&&j.detail.value&&j.detail.value.e||"")}
          ></ha-form>
          <span class="wsfc-srcmap-live">${v1||"\u2014"}</span>
        </div>
      `};return i`
      <details class="wsfc-detail-row2 wsfc-src-devicemap">
        <summary class="wsfc-detail-summary">
          <ha-icon class="wsfc-detail-glyph" icon="mdi:map-marker-path"></ha-icon>
          <span class="wsfc-order-name">Value mapping${s?" (auto-detected)":""}</span>
        </summary>
        <div class="wsfc-detail-fields">
          <p class="wsfc-hint wsfc-grow">${s?"How this device's sensors map to each value. Auto-detected from device class and name; pick a different entity to override. Blank = this source doesn't provide it.":"Which value this source provides. By default a weather entity provides every attribute it exposes; override any value to a different entity (e.g. your own sensor)."}</p>
          ${o.map(w)}
        </div>
      </details>
    `},f._wfcSourceSummaryList=function(V){let M=V.ref,r=V.overrides||{},n=T(M),s=n?m(this.hass,Z(M)):{},v=g=>{if(r[g])return r[g];if(n)return s[g]||"";if(M&&M.startsWith("weather.")){let y=this.hass&&this.hass.states[M];return y&&y.attributes&&y.attributes[g]!=null?M:""}return""},c=[];return o.forEach(g=>{let y=v(g.key);if(!y)return;let w=this._wfcLiveValue(y,g.key);c.push(i`
        <div class="wsfc-cond-row">
          <span class="wsfc-cond-prop">${g.label}</span>
          <span class="wsfc-cond-ent" title=${y}>${y}</span>
          <span class="wsfc-cond-val">${w||"\u2014"}</span>
        </div>
      `)}),c.length?i`<div class="wsfc-cond-list">${c}</div>`:u},f._wfcSrcMapOpen=function(){return this.__wfcSrcMapOpen||(this.__wfcSrcMapOpen=new Set),this.__wfcSrcMapOpen},f._wfcToggleSrcMap=function(V){let M=this._wfcSrcMapOpen();M.has(V)?M.delete(V):M.add(V),this.requestUpdate&&this.requestUpdate()},f._wfcToggleAddSource=function(){this.__wfcAddSourceOpen=!this.__wfcAddSourceOpen,this.requestUpdate&&this.requestUpdate()},f._wfcSourceMetricCount=function(V){let M=V.ref,r=V.overrides||{},n=new Set(Object.keys(r).filter(s=>r[s]));if(T(M))Object.keys(B(this._config,this.hass,Z(M))).forEach(s=>n.add(s));else if(M&&M.startsWith("weather.")){let s=this.hass&&this.hass.states[M];s&&s.attributes&&o.forEach(v=>{s.attributes[v.key]!=null&&n.add(v.key)})}return n.size},f._wfcSourceRow=function(V,M,r){let n=V.ref,s=T(n),v=this._config.entity,c=s&&this.hass&&this.hass.devices&&this.hass.devices[Z(n)],g=s?c&&(c.name_by_user||c.name)||Z(n):n,y=s?"Device":n&&n.startsWith("weather.")?"Weather":"Sensor",w=s?"mdi:access-point":n&&n.startsWith("weather.")?"mdi:weather-partly-cloudy":"mdi:gauge",_=!s&&n&&n.startsWith("weather."),$=_&&n===v,k=this._wfcSrcMapOpen().has(n),S=!!V.disabled,v1=this._wfcSourceMetricCount(V),a2=`${v1} value${v1===1?"":"s"} mapped`,n2=$?i`<span class="wsfc-src-pill" title="Supplies the forecast and weather condition">📡 forecast + condition</span>`:_?i`<span class="wsfc-src-pill" title="Supplies current + forecast metrics (not the card's condition)">current + forecast</span>`:i`<span class="wsfc-src-pill" title="Supplies current conditions only">current conditions</span>`,j="",n1=n&&!s?this.hass&&this.hass.states[n]:null;if(s)j=v1?"Local station \u2014 no forecast or weather condition. Keep a weather entity in the list for those.":"No entities matched known weather metrics \u2014 map them with the edit (\u270E) button.";else if(!n1)j=`\u26A0 Entity not found: ${n}`;else if(n1.state==="unavailable"||n1.state==="unknown")j=`\u26A0 Currently ${n1.state}.`;else if(_&&!$){let $2=n1.attributes&&n1.attributes.supported_features;j=typeof $2=="number"&&($2&7)===0?"Provides no forecast \u2014 current-state values only.":"Fills values the higher-priority sources don't provide."}else _||(j="Single sensor \u2014 supplies one value (set it with the edit (\u270E) button).");return i`
      <div class="wsfc-src-row ${S?"wsfc-src-off":""}">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon=${w}></ha-icon>
          <span class="wsfc-src-name">${g} <span class="wsfc-src-type">${y}</span></span>
          <ha-icon class="wsfc-ico-btn ${M===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Higher priority" @click=${()=>this._wfcMoveSource(M,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${M===r-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Lower priority" @click=${()=>this._wfcMoveSource(M,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${S?"mdi:eye-off":"mdi:eye"} title=${S?"Hidden \u2014 click to use this source":"In use \u2014 click to hide"} @click=${()=>this._wfcToggleSourceDisabled(M)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${k?"active":""}" icon="mdi:pencil" title="Edit value mapping" @click=${()=>this._wfcToggleSrcMap(n)}></ha-icon>
          <ha-icon class="wsfc-ico-btn wsfc-ico-del" icon="mdi:trash-can-outline" title="Remove source" @click=${()=>this._wfcRemoveSource(M)}></ha-icon>
        </div>
        <div class="wsfc-src-info">${n2}<span class="wsfc-src-count">${a2}</span>${S?i`<span class="wsfc-src-count">· hidden</span>`:u}</div>
        ${j?i`<div class="wsfc-src-detail">${j}</div>`:u}
        ${this._wfcSourceSummaryList(V)}
        ${k?this._wfcSourceMappingEditor(M,V):u}
      </div>
    `},f._wfcWeatherSourcesPanel=function(){let V=this._wfcEdSources(),M=V.some(c=>c.ref&&!T(c.ref)&&c.ref.startsWith("weather.")),r=V.length>=M2,n=!!this.__wfcAddSourceOpen&&!r,s=i`
      <ha-form
        .hass=${this.hass}
        .data=${{e:""}}
        .schema=${[{name:"e",selector:{entity:{}}}]}
        .computeLabel=${()=>"Add a weather entity or sensor"}
        @value-changed=${c=>{let g=c.detail&&c.detail.value&&c.detail.value.e;g&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(g))}}
      ></ha-form>`,v=i`
      <ha-form
        .hass=${this.hass}
        .data=${{d:""}}
        .schema=${[{name:"d",selector:{device:{}}}]}
        .computeLabel=${()=>"\u2026or add a local-station device"}
        @value-changed=${c=>{let g=c.detail&&c.detail.value&&c.detail.value.d;g&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(e+g))}}
      ></ha-form>`;return i`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:database-marker-outline"></ha-icon><span class="wsfc-panel-title">Weather Sources</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">An ordered list of where weather data comes from — <b>top = highest priority</b>. For each value, the card walks the list top-down and uses the first source that has it. A source can be a weather entity, a local-station <b>device</b> (e.g. Ecowitt), or any single sensor. Devices/sensors give current conditions only; the forecast and weather condition always come from the highest weather entity in the list (marked 📡). Units are shown as each source reports them (no conversion).</p>
          ${r?i`<p class="wsfc-hint">Maximum of ${M2} sources reached. Remove one to add another.</p>`:i`
              <div class="wsfc-add-btn" role="button" tabindex="0" @click=${()=>this._wfcToggleAddSource()}>
                <ha-icon icon=${n?"mdi:close":"mdi:plus"}></ha-icon>${n?"Cancel":"Add Source"}
              </div>
              ${n?i`<div class="wsfc-add-pickers">${s}${v}</div>`:u}
            `}
          ${V.length?V.map((c,g)=>this._wfcSourceRow(c,g,V.length)):i`<p class="wsfc-hint">No sources yet — add one above.</p>`}
          ${!M&&V.length?i`<p class="wsfc-src-warn">⚠ No weather entity in the list — the card needs one for the forecast and weather condition. Add a <code>weather.*</code> entity.</p>`:u}
          ${this._wfcGroup("Headline temperature")}
          ${this._wfcHeadlineTempRow()}
        </div>
      </details>
    `},f._wfcToggleHeadlineEdit=function(){this.__wfcHeadlineEdit=!this.__wfcHeadlineEdit,this.requestUpdate&&this.requestUpdate()},f._wfcHeadlineTempRow=function(){let V=this._config.current&&this._config.current.temperature_entity,M=V||"",r="";if(!M)for(let v of this._wfcEdSources()){if(v.disabled)continue;let c=this._wfcSlotEntityForKeyEd(v,"temperature");if(c&&this.hass&&this.hass.states[c]){M=c;break}}M?r=this.hass&&this.hass.states[M]&&this.hass.states[M].attributes&&this.hass.states[M].attributes.friendly_name||M:r="\u2014 none available \u2014";let n=M?this._wfcLiveValue(M,"temperature"):"",s=!!this.__wfcHeadlineEdit;return i`
      <div class="wsfc-src-row">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon="mdi:thermometer"></ha-icon>
          <span class="wsfc-src-name">${r}${V?i` <span class="wsfc-src-type">override</span>`:u}</span>
          ${n?i`<span class="wsfc-srcmap-live">${n}</span>`:u}
          <ha-icon class="wsfc-ico-btn ${s?"active":""}" icon="mdi:pencil" title="Change headline temperature source" @click=${()=>this._wfcToggleHeadlineEdit()}></ha-icon>
        </div>
        ${s?i`
            <p class="wsfc-hint">Pick an entity to force the headline temperature, or clear it to let the source list decide (recommended).</p>
            ${this._wfcStockFormFor(["current.temperature_entity"])}
          `:u}
      </div>
    `},f._wfcSlotEntityForKeyEd=function(V,M){if(V.overrides&&V.overrides[M])return V.overrides[M];let r=V.ref;if(!r)return null;if(T(r))return B(this._config,this.hass,Z(r))[M]||null;if(r.startsWith("weather.")){let n=this.hass&&this.hass.states[r];return n&&n.attributes&&n.attributes[M]!=null?r:null}return null},f._wfcSetForecastTypes=function(V,M){let r=V&&M?"both":V?"hourly":M?"daily":"both",n={...this._config,forecast_types:r};Q(this,"config-changed",{config:n})},f._wfcAdvancedPanel=function(){let V=this._config.forecast_types||"both",M=V==="both"||V==="hourly",r=V==="both"||V==="daily";return i`
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
          ${this._wfcStockFormFor(W3)}
        </div>
      </details>
    `},f._wfcUserActionsPanel=function(){let V=this._wfcStockFormFor(R3),M=this._wfcStockFormFor(E3),r=this._config.forecast||{};return i`
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
    `};let U3=[{value:"temperature_and_precipitation",label:"Temperature & precipitation"},{value:"apparent_temperature",label:"Apparent temperature"},{value:"humidity",label:"Humidity"},{value:"pressure",label:"Pressure"},{value:"uv_index",label:"UV index"}];f._wfcForecastTypeControls=function(V){let M=this._config.forecast||{},r=[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}],n=[{value:"none",label:"(no metric)"},{value:"wind_bearing",label:"Wind bearing"},{value:"wind_direction",label:"Wind direction"},{value:"precipitation_probability",label:"Precipitation probability"},{value:"uv_index",label:"UV index"}],s=w=>M[`${w}_mode`]||M.mode||"simple",v=w=>(M[`${w}_extra_attribute`]!=null?M[`${w}_extra_attribute`]:M.extra_attribute)||"none",c=w=>(M[`${w}_chart_attribute`]!=null?M[`${w}_chart_attribute`]:M.default_chart_attribute)||"temperature_and_precipitation",g=(w,_,$)=>{let k=M[`${w}_${_}`];if(k!=null)return!!k;let S=M[_];return S!=null?!!S:$},y=s(V)==="chart";return i`
      ${this._wfcGroup("Forecast display")}
      <div class="wsfc-row">
        ${this._wfcForecastSelect(`${V}_mode`,"Display mode",r,s(V),"simple")}
        ${this._wfcForecastSelect(`${V}_extra_attribute`,"Extra metric",n,v(V),"none")}
      </div>
      ${y?i`<div class="wsfc-row">
            ${this._wfcForecastSelect(`${V}_chart_attribute`,"Chart metric",U3,c(V),"temperature_and_precipitation")}
          </div>`:u}
      ${this._wfcConfigCheckbox(`forecast.${V}_show_sun_times`,"Show sunrise & sunset times",g(V,"show_sun_times",!0),!0)}
      ${y?i`
            ${this._wfcConfigCheckbox(`forecast.${V}_use_color_thresholds`,"Use color thresholds",g(V,"use_color_thresholds",!0),!0)}
            ${this._wfcConfigCheckbox(`forecast.${V}_show_attribute_selector`,"Show metric selector",g(V,"show_attribute_selector",!1),!1)}`:u}
    `},f._wfcHelper=function(V){let M=this._computeHelper?this._computeHelper(V):void 0;return typeof M=="string"&&(M=M.replace(/attributes/g,"metrics").replace(/attribute/g,"metric").replace(/Attributes/g,"Metrics").replace(/Attribute/g,"Metric")),M},f._wfcAccordionEnabled=function(){return(this._config&&this._config.wfc||{}).editor_accordion!==!1},f._wfcSetAccordion=function(V){let M=this._wfcState();M.editor_accordion=!!V,this._wfcCommit(M),this._wfcApplyAccordion()},f._wfcApplyAccordion=function(){let V=this.renderRoot||this.shadowRoot||this;!V||!V.addEventListener||this.__wfcAccordionHooked||(this.__wfcAccordionHooked=!0,V.addEventListener("toggle",M=>{let r=M.target;if(!r||!r.classList||!r.classList.contains("wsfc-panel")||(this._wfcRememberOpen(r),!r.open)||!this._wfcAccordionEnabled())return;(V.querySelectorAll?V.querySelectorAll("details.wsfc-panel"):[]).forEach(s=>{s!==r&&s.open&&(s.open=!1)})},!0))},f._wfcRememberOpen=function(V){this.__wfcOpenPanels||(this.__wfcOpenPanels=new Set);let M=this._wfcPanelKey(V);M&&(V.open?this.__wfcOpenPanels.add(M):this.__wfcOpenPanels.delete(M))},f._wfcPanelKey=function(V){let M=V.querySelector&&V.querySelector(".wsfc-panel-title");return M?(M.textContent||"").trim():""},f._wfcRestoreOpen=function(){let V=this.renderRoot||this.shadowRoot||this;!V||!V.querySelectorAll||!this.__wfcOpenPanels||V.querySelectorAll("details.wsfc-panel").forEach(M=>{let r=this._wfcPanelKey(M);r&&this.__wfcOpenPanels.has(r)&&(M.open=!0)})},f.updated=function(V){try{let M=Object.getPrototypeOf(f);M&&typeof M.updated=="function"&&M.updated.call(this,V)}catch{}this._wfcApplyAccordion(),this._wfcRestoreOpen()},f._wfcEditorStyle=function(){return i`<style>
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
    </style>`};let Q3="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";f._wfcCustomMetricsBody=function(){let V=e1(this._config.current&&this._config.current.show_attributes);return i`
      <div class="custom-attributes">
        <p class="wsfc-hint">Custom metrics: display any entity's state as a metric — pick an entity and optionally override its label and icon.</p>
        ${V.map((M,r)=>this._renderCustomAttributeRow(M,r))}
        <ha-button size="small" appearance="filled" variant="brand" @click=${this._addCustomAttribute}>
          <ha-svg-icon slot="start" .path=${Q3}></ha-svg-icon>
          ${this.hass.localize&&this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
        </ha-button>
      </div>
    `},f._renderCustomAttributes=function(){return this._wfcCustomMetricsBody()};let o2={order:"mdi:view-dashboard-variant-outline",details:"mdi:format-list-bulleted",dividers:"mdi:minus",options:"mdi:cog-outline"};function m1(V){if(V&&V.detail&&V.detail.value!==void 0)return V.detail.value;let M=V&&V.target;if(M)return(M.type==="checkbox"||typeof M.checked=="boolean")&&(M.tagName==="HA-SWITCH"||M.type==="checkbox")?M.checked:M.value}function i2(V){let M=V&&V.target;return M&&typeof M.checked=="boolean"?M.checked:!!(V&&V.detail&&V.detail.value)}f._wfcState=function(){return JSON.parse(JSON.stringify(h(this._config)))},f._wfcCommit=function(V){let M={...this._config,wfc:V};Q(this,"config-changed",{config:M})},f._wfcResetSection=function(V){let r=p(this._config)[V];if(!r)return;let n=this._wfcState(),s=!!(n[V]&&n[V].show);n[V]={...JSON.parse(JSON.stringify(r)),show:s},this._wfcCommit(n)},f._wfcMoveSection=function(V,M){let r=this._wfcState(),n=r.order.indexOf(V),s=n+M;if(n<0||s<0||s>=r.order.length)return;let v=r.order[n];r.order[n]=r.order[s],r.order[s]=v,this._wfcCommit(r)},f._wfcCommitMetrics=function(V,M){let r=this._wfcState();r[V]||(r[V]={});let n=O(r[V]),s=n.map(c=>c.key),v={};n.forEach(c=>v[c.key]=c.pos),M(s,v),r[V].forecast_metric_order=s,r[V].forecast_metric_pos=v,delete r[V].forecast_temps,delete r[V].forecast_icons,delete r[V].forecast_extra,delete r[V].forecast_row_order,delete r[V].forecast_stack,this._wfcCommit(r)},f._wfcMoveMetric=function(V,M,r){let n=this._wfcState(),v=O(n[V]||{}).find(c=>c.key===M);v&&v.pos==="below"&&(r=-r),this._wfcCommitMetrics(V,(c,g)=>{let y=c.indexOf(M),w=y+r;for(;w>=0&&w<c.length&&g[c[w]]!==g[M];)w+=r;if(y<0||w<0||w>=c.length)return;let _=c[y];c[y]=c[w],c[w]=_})},f._wfcSetMetricPos=function(V,M,r){this._wfcCommitMetrics(V,(n,s)=>{s[M]=r})},f._wfcSetMetricStyle=function(V,M,r,n){let s=this._wfcState();s[V]||(s[V]={});let v={...s[V].forecast_metric_style||{}},c={...v[M]||{}};n==null||n===""?delete c[r]:c[r]=n,Object.keys(c).length?v[M]=c:delete v[M],s[V].forecast_metric_style=v,this._wfcCommit(s)},f._wfcMetricsOrder=function(V,M){let r=O(M),n=c=>r.filter(g=>g.pos===c),s=[...n("above"),...n("overlay"),...n("below").reverse(),...r.filter(c=>!["above","overlay","below"].includes(c.pos))],v=M.forecast_metric_style||{};return s.map((c,g,y)=>{let w=v[c.key]||{},_=c.key==="icons",$=c.key!=="temps";return i`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <span class="wsfc-order-name">${a[c.key]||c.key}</span>
            <select
              class="wsfc-native-select wsfc-metric-pos"
              @click=${k=>k.stopPropagation()}
              @change=${k=>this._wfcSetMetricPos(V,c.key,k.target.value)}
            >
              ${d.map(k=>i`<option value=${k.value} ?selected=${k.value===c.pos}>${k.label}</option>`)}
            </select>
            <ha-icon class="wsfc-ico-btn ${g===0||y[g-1].pos!==c.pos?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${k=>{k.preventDefault(),k.stopPropagation(),this._wfcMoveMetric(V,c.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${g===y.length-1||y[g+1].pos!==c.pos?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${k=>{k.preventDefault(),k.stopPropagation(),this._wfcMoveMetric(V,c.key,1)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <p class="wsfc-hint wsfc-grow">Leave a field at its default to fall back to the section styling below.</p>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Show every (overrides default)</span>
              <select class="wsfc-native-select" @change=${k=>this._wfcSetMetricStyle(V,c.key,"every",k.target.value)}>
                ${[{value:"",label:"Use default"},{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(k=>({value:String(k),label:k+(k>1?" hours":" hour")}))].map(k=>i`<option value=${k.value} ?selected=${k.value===(w.every!=null?String(w.every):"")}>${k.label}</option>`)}
              </select>
            </label>
            ${$?i`
                  ${this._wfcColorField("Icon color",w.icon_color,k=>this._wfcSetMetricStyle(V,c.key,"icon_color",k.target.value))}
                  ${this._wfcPlainNum("Icon size (px)",w.icon_size,k=>this._wfcSetMetricStyle(V,c.key,"icon_size",parseFloat(m1(k))||""))}`:u}
            ${_?u:i`
                  ${this._wfcColorField("Text color",w.text_color,k=>this._wfcSetMetricStyle(V,c.key,"text_color",k.target.value))}
                  ${this._wfcPlainNum("Font size (px)",w.text_size,k=>this._wfcSetMetricStyle(V,c.key,"text_size",parseFloat(m1(k))||""))}`}
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Legibility (busy backgrounds)</span>
              <select class="wsfc-native-select" @change=${k=>this._wfcSetMetricStyle(V,c.key,"contrast",k.target.value)}>
                ${[{value:"",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}].map(k=>i`<option value=${k.value} ?selected=${k.value===(w.contrast||"")}>${k.label}</option>`)}
              </select>
            </label>
          </div>
        </details>
      `})},f._wfcToggleSection=function(V,M){let r=this._wfcState();r[V]||(r[V]={}),r[V].show=i2(M),this._wfcCommit(r)},f._wfcToggleSectionShow=function(V){let M=this._wfcState();M[V]||(M[V]={}),M[V].show=!M[V].show,this._wfcCommit(M)},f._wfcSetSecNum=function(V,M,r){let n=this._wfcState(),s=parseFloat(m1(r));n[V][M]=isNaN(s)?void 0:s,this._wfcCommit(n)},f._wfcSetSecField=function(V,M,r){let n=this._wfcState();n[V]||(n[V]={}),n[V][M]=r,this._wfcCommit(n)},f._wfcToggleSecField=function(V,M,r){this._wfcSetSecField(V,M,i2(r))},f._wfcSetForecastNum=function(V,M){let r={...this._config.forecast||{}};M==null||M<=0?delete r[V]:r[V]=M,Q(this,"config-changed",{config:{...this._config,forecast:r}})},f._wfcSetConfigNum=function(V,M,r){let[n,s]=V.split("."),v={...this._config},c={...v[n]||{}},g=M==null||M===""||isNaN(Number(M))?null:Number(M);g==null?delete c[s]:c[s]=g,v[n]=c,Q(this,"config-changed",{config:v})},f._wfcConfigSlider=function(V,M,r,n,s){let v=c1(V,r||""),c=n!=null?A(Number(n),v.min,v.max):Number(s);return this._wfcSliderTpl(M,r,v,c,g=>this._wfcSetConfigNum(V,g.target.value,s))},f._wfcSetConfigStr=function(V,M,r){let n={...this._config};if(V.indexOf(".")===-1)r&&(M==null||M==="")?delete n[V]:n[V]=M;else{let[s,v]=V.split("."),c={...n[s]||{}};r&&(M==null||M==="")?delete c[v]:c[v]=M,n[s]=c}Q(this,"config-changed",{config:n})},f._wfcConfigSelect=function(V,M,r,n,s,v){let c=String(n??s);return i`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${M}</span>
        <select class="wsfc-native-select" @change=${g=>this._wfcSetConfigStr(V,g.target.value,v)}>
          ${r.map(g=>i`<option value=${String(g.value)} ?selected=${String(g.value)===c}>${g.label}</option>`)}
        </select>
      </label>
    `},f._wfcSetConfigBool=function(V,M,r){let n={...this._config},s=(v,c)=>{M===!!r?delete v[c]:v[c]=M};if(V.indexOf(".")===-1)s(n,V);else{let[v,c]=V.split("."),g={...n[v]||{}};s(g,c),n[v]=g}Q(this,"config-changed",{config:n})},f._wfcConfigCheckbox=function(V,M,r,n){let s=r==null?!!n:!!r;return this._wfcCheckbox(M,s,v=>this._wfcSetConfigBool(V,v.target.checked,n))},f._wfcConfigText=function(V,M,r,n){return i`
      <label class="wsfc-field">
        <span class="wsfc-field-label">${M}</span>
        <input
          type="text"
          class="wsfc-input"
          .value=${r||""}
          placeholder=${n||""}
          @change=${s=>this._wfcSetConfigStr(V,s.target.value)}
        />
      </label>
    `},f._wfcSetForecastField=function(V,M){let r={...this._config.forecast||{}};M==null||M===""?delete r[V]:r[V]=M,Q(this,"config-changed",{config:{...this._config,forecast:r}})},f._wfcForecastSelect=function(V,M,r,n,s){let v=String(n??s);return i`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${M}</span>
        <select class="wsfc-native-select" @change=${c=>this._wfcSetForecastField(V,c.target.value)}>
          ${r.map(c=>i`<option value=${String(c.value)} ?selected=${String(c.value)===v}>${c.label}</option>`)}
        </select>
      </label>
    `},f._wfcNumSecField=function(V,M,r,n){let s=parseFloat(m1(r));this._wfcSetSecField(V,M,isNaN(s)?n:s)},f._wfcMoveDetail=function(V,M){let r=this._wfcState(),n=r.details.items,s=n.findIndex(g=>g.key===V),v=s+M;if(s<0||v<0||v>=n.length)return;let c=n[s];n[s]=n[v],n[v]=c,this._wfcCommit(r)},f._wfcToggleDetail=function(V,M){let r=this._wfcState(),n=r.details.items.find(s=>s.key===V);n&&(n.show=i2(M)),this._wfcCommit(r)},f._wfcToggleDetailShow=function(V){let M=this._wfcState(),r=M.details.items.find(n=>n.key===V);r&&(r.show=!r.show,this._wfcCommit(M))},f._wfcSetDetailValue=function(V,M,r){let n=this._wfcState(),s=n.details.items.find(v=>v.key===V);s&&(s[M]=r),this._wfcCommit(n)},f._wfcSetDetail=function(V,M,r){let n=this._wfcState(),s=n.details.items.find(c=>c.key===V);if(!s)return;let v=m1(r);if(M==="icon_size"||M==="text_size"){let c=parseFloat(v);v=isNaN(c)?void 0:c}else(v===""||v==null)&&(v=void 0);s[M]=v,this._wfcCommit(n)},f._wfcColorField=function(V,M,r){if(this.wsfcHide&&this.wsfcHide.includes("color:"+V))return u;if(/^(Day|Night) color$/.test(V))return this._wfcColorFieldHex(V,M,r);let n=[["var(--primary-color)","Primary"],["var(--accent-color)","Accent"],["var(--primary-text-color)","Primary text"],["var(--secondary-text-color)","Secondary text"],["var(--disabled-text-color)","Disabled text"],["var(--state-active-color)","State active"],["var(--error-color)","Error"],["var(--warning-color)","Warning"],["var(--success-color)","Success"],["var(--info-color)","Info"]],s=M==null?"":String(M),v=/background|bg$|^Chip background/i.test(V),c=s===""?"default":s==="transparent"?"transparent":/^#[0-9a-fA-F]{3,8}$/.test(s)?"custom":/^var\(/.test(s)&&n.some(([_])=>_===s)?"theme":"css",g=/^#[0-9a-fA-F]{6}$/.test(s)?s:"#4fc3f7",y=_=>r({target:{value:_}}),w=_=>y(_==="default"?"":_==="transparent"?"transparent":_==="theme"?n.some(([$])=>$===s)?s:n[0][0]:_==="custom"?g:s||g);return i`
      <div class="wsfc-color-field wsfc-color4">
        <span class="wsfc-field-label wsfc-color-label">${V}</span>
        <select class="wsfc-native-select" style="flex:0 0 auto;width:auto" @change=${_=>w(_.target.value)}>
          ${[["default","Not set"],...v||c==="transparent"?[["transparent","Transparent"]]:[],["theme","Theme color"],["custom","Custom"],["css","CSS"]].map(([_,$])=>i`<option value=${_} ?selected=${_===c}>${$}</option>`)}
        </select>
        ${c==="theme"?i`<select class="wsfc-native-select" style="flex:1 1 120px;width:auto" @change=${_=>y(_.target.value)}>${n.map(([_,$])=>i`<option value=${_} ?selected=${_===s}>${$}</option>`)}</select>`:c==="custom"?i`<input type="color" class="wsfc-color-input" .value=${g} @change=${_=>y(_.target.value)} />`:c==="css"?i`<input type="text" class="wsfc-native-select" style="flex:1 1 120px;width:auto" .value=${s} @change=${_=>y(_.target.value)} />`:u}
        ${c!=="default"&&c!=="transparent"?i`<span style="width:16px;height:16px;border-radius:50%;flex:0 0 auto;border:1px solid var(--divider-color);background:${s}"></span>`:u}
      </div>
    `},f._wfcColorFieldHex=function(V,M,r){return i`
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
    `},f._wfcSelect=function(V,M,r,n,s,v){if(this.wsfcHide&&this.wsfcHide.includes(M))return u;let c=String(s??v);return i`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${r}</span>
        <select
          class="wsfc-native-select"
          @change=${g=>this._wfcSetSecField(V,M,g.target.value)}
        >
          ${n.map(g=>i`<option value=${String(g.value)} ?selected=${String(g.value)===c}>${g.label}</option>`)}
        </select>
      </label>
    `};let k2={px:{min:0,max:60,step:1},"%":{min:0,max:100,step:1},"":{min:1,max:72,step:1}};function c1(V,M){return/chip_scale/.test(V)?{min:50,max:250,step:5}:/chip_columns/.test(V)?{min:1,max:6,step:1}:/^columns$|\.columns$/.test(V)?{min:1,max:4,step:1}:/chip_text_size|chip_icon_size/.test(V)?{min:0,max:48,step:1}:/clock_font_size|clock_date_font_size/.test(V)?{min:0,max:100,step:1}:/header_icon_size/.test(V)?{min:0,max:140,step:2}:/header_secondary_size/.test(V)?{min:0,max:48,step:1}:/header_state_size|header_temp_size/.test(V)?{min:0,max:64,step:1}:/global_icon_size|global_text_size/.test(V)?{min:0,max:48,step:1}:/shadow_x|shadow_y|shadow_spread/.test(V)?{min:-40,max:40,step:1}:/shadow_blur/.test(V)?{min:0,max:80,step:1}:/border_radius/.test(V)?{min:0,max:48,step:1}:/border_width/.test(V)?{min:0,max:12,step:1}:/hourly_slots/.test(V)?{min:0,max:48,step:1}:/daily_slots/.test(V)?{min:0,max:14,step:1}:/labels_position|opacity/.test(V)?{min:0,max:100,step:1}:/indent/.test(V)?{min:0,max:120,step:2}:/height/.test(V)?{min:10,max:200,step:2}:/^clock_(font_size|date_font_size)$/.test(V)?{min:8,max:100,step:1}:/font_size|_size$/.test(V)?{min:8,max:48,step:1}:/_width$/.test(V)?{min:1,max:12,step:1}:/_length$/.test(V)?{min:5,max:100,step:5}:/hourly_group_size/.test(V)?{min:1,max:4,step:1}:/temperature_precision/.test(V)?{min:0,max:2,step:1}:/hours/.test(V)?{min:1,max:48,step:1}:k2[M]||k2.px}f._wfcNumField=function(V,M,r,n,s,v){if(this.wsfcHide&&this.wsfcHide.includes(M))return u;let c=c1(M,n||""),g=s!=null?Number(s):Number(v);return this._wfcSliderTpl(r,n,c,g,y=>this._wfcNumSecField(V,M,y,v))},f._wfcPlainSlider=function(V,M,r,n,s,v){let c=c1(s||"",M||""),g=r!=null?Number(r):Number(n);return this._wfcSliderTpl(V,M,c,g,v)},f._wfcSlotSlider=function(V,M,r){let n=c1(M,""),s=r!=null?A(Number(r),n.min,n.max):0,v=c=>Number(c)<=0?"All":String(c);return i`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${V}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${n.min}
          max=${n.max}
          step=${n.step}
          .value=${String(s)}
          @input=${c=>{let g=c.target.closest(".wsfc-slider-row"),y=g&&g.querySelector(".wsfc-slider-num");y&&(y.textContent=v(c.target.value))}}
          @change=${c=>this._wfcSetForecastNum(M,parseInt(c.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${v(s)}></span></span>
      </div>
    `},f._wfcAutoSizeField=function(V,M,r){if(this.wsfcHide&&this.wsfcHide.includes(M))return u;let n=c1(M,""),s=this._wfcState()[V]||{},v=A(parseInt(s[M],10)||0,n.min,n.max),c=g=>Number(g)<=0?"Auto":`${g}px`;return i`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${r}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${n.min}
          max=${n.max}
          step=${n.step}
          .value=${String(v)}
          @input=${g=>{let y=g.target.closest(".wsfc-slider-row"),w=y&&y.querySelector(".wsfc-slider-num");w&&(w.textContent=c(g.target.value))}}
          @change=${g=>this._wfcSetSecField(V,M,parseInt(g.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${c(v)}></span></span>
      </div>
    `},f._wfcSliderTpl=function(V,M,r,n,s){let v=M||"";return i`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${V}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${r.min}
          max=${r.max}
          step=${r.step}
          .value=${String(n)}
          @input=${c=>{let g=c.target.closest(".wsfc-slider-row"),y=g&&g.querySelector(".wsfc-slider-num");y&&(y.textContent=c.target.value)}}
          @change=${s}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${String(n)}></span>${v}</span>
      </div>
    `},f._wfcCheckbox=function(V,M,r){return this.wsfcHide&&this.wsfcHide.includes("check:"+V)?u:i`
      <label class="wsfc-check-row">
        <input type="checkbox" class="wsfc-checkbox" .checked=${!!M} @change=${r} />
        <span>${V}</span>
      </label>
    `},f._wfcGroup=function(V){return V&&this.wsfcHide&&this.wsfcHide.includes("group:"+V)?u:V?i`<div class="wsfc-group-div"><span class="wsfc-group-label">${V}</span></div>`:i`<div class="wsfc-group-div"></div>`},f._wfcSubPanel=function(V,M){return i`
      <details class="wsfc-detail-row2 wsfc-subpanel">
        <summary><span class="wsfc-subpanel-title">${V}</span></summary>
        <div class="wsfc-subpanel-body">${M}</div>
      </details>
    `},f._wfcFlushControls=function(V,M){return i`
      ${this._wfcCheckbox("Flush to card edges (no left/right padding)",M.flush_edges,r=>this._wfcToggleSecField(V,"flush_edges",r))}
      ${this._wfcCheckbox("Flush to card top (no upper padding)",M.flush_top,r=>this._wfcToggleSecField(V,"flush_top",r))}
      ${this._wfcCheckbox("Flush to card bottom (no lower padding)",M.flush_bottom,r=>this._wfcToggleSecField(V,"flush_bottom",r))}
    `},f._wfcTextControls=function(V,M,r,n){if(this.wsfcHide&&this.wsfcHide.includes(`${M}_font_size`))return u;let s=this._wfcState()[V]||{};return i`
      <div class="wsfc-sub-title">${r}</div>
      <div class="wsfc-row">
        ${this._wfcNumField(V,`${M}_font_size`,"Size","px",s[`${M}_font_size`],n)}
        ${this._wfcSelect(V,`${M}_font_weight`,"Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],s[`${M}_font_weight`],"400")}
      </div>
      ${this._wfcColorField("Color",s[`${M}_color`],v=>this._wfcSetSecField(V,`${M}_color`,v.target.value))}
    `};let T2=[{value:"solid",label:"Solid"},{value:"dashed",label:"Dashed"},{value:"dotted",label:"Dotted"},{value:"double",label:"Double"}];f._wfcDividerControls=function(V,M){return i`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section Divider Above",M.divider_above,r=>this._wfcToggleSecField(V,"divider_above",r))}
      ${M.divider_above?i`
            <div class="wsfc-row">
              ${this._wfcNumField(V,"divider_above_width","Thickness","px",M.divider_above_width,1)}
              ${this._wfcNumField(V,"divider_above_length","Length","%",M.divider_above_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(V,"divider_above_style","Line style",T2,M.divider_above_style,"solid")}
            </div>`:u}

      ${this._wfcCheckbox("Section Divider Below",M.divider_below,r=>this._wfcToggleSecField(V,"divider_below",r))}
      ${M.divider_below?i`
            <div class="wsfc-row">
              ${this._wfcNumField(V,"divider_below_width","Thickness","px",M.divider_below_width,1)}
              ${this._wfcNumField(V,"divider_below_length","Length","%",M.divider_below_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(V,"divider_below_style","Line style",T2,M.divider_below_style,"solid")}
            </div>`:u}

      ${M.divider_above||M.divider_below?this._wfcColorField("Divider color",M.divider_color,r=>this._wfcSetSecField(V,"divider_color",r.target.value)):u}
    `},f._wfcBackgroundControls=function(V,M){let r=!!M.background_enabled;return i`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section background",r,n=>this._wfcToggleSecField(V,"background_enabled",n))}
      ${r?i`
            ${this._wfcColorField("Background color",M.background_color,n=>this._wfcSetSecField(V,"background_color",n.target.value))}
            ${this._wfcPlainSlider("Transparency (0 = solid, 100 = invisible)","%",M.background_opacity==null?80:M.background_opacity,80,"opacity",n=>this._wfcSetSecField(V,"background_opacity",A(parseInt(n.target.value,10)||0,0,100)))}`:u}
    `},f._wfcSectionStyles=function(V,M){return this.wsfcHide&&this.wsfcHide.includes("group:Section Styles")?u:this._wfcSubPanel("Section Styles",i`
        ${this._wfcFlushControls(V,M)}
        ${this._wfcDividerControls(V,M)}
        ${this._wfcBackgroundControls(V,M)}`)},f._wfcStockForm=function(V){return this._wfcStockFormFor(O2[V])},f._wfcStockFormFor=function(V){if(!V||!V.length)return u;let M=D1(this._config),r=this._getSelectedAttributes(M),n=this._schema(this.localize.bind(this),r,"chart"),s=new Map,v=y=>y.forEach(w=>{w.schema?v(w.schema):s.set(w.name,w)});v(n);let c=V.map(y=>s.get(y)).filter(Boolean);if(!c.length)return u;let g=y=>y2[y.name]||this._computeLabel(y)||y.name;return i`
      <ha-form
        .hass=${this.hass}
        .data=${M}
        .schema=${c}
        .computeLabel=${g}
        .computeHelper=${y=>this._wfcHelper(y)}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `},f._wfcTitleControls=function(V,M){return i`
      ${this._wfcCheckbox("Show Title Row",M.title_show,r=>this._wfcToggleSecField(V,"title_show",r))}
      ${M.title_show?i`
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
    `},f._wfcSectionOptionsBody=function(V,M){let r=M[V]||{},n=V==="details",s=V==="current",v=V==="sun_position",c=V==="sun_arc",g=V==="hourly",y=V==="daily",w=this._config.forecast||{},_=this._config.current||{},$=A(parseInt(r.columns,10)||2,1,4),k=this._wfcMetricOptions(typeof Y<"u"?Y:[],!0);return i`
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
          ${s?i`
                ${this._wfcConfigText("name","Custom Friendly Name",this._config.name,"")}
                <p class="wsfc-hint">Friendly name shown under the Current Weather value. Enter a single space to hide it.</p>`:u}
          ${s?i`
                ${this._wfcGroup("Header sizes")}
                ${this._wfcAutoSizeField(V,"header_icon_size","Condition icon size")}
                ${this._wfcAutoSizeField(V,"header_state_size","Condition text size")}
                ${this._wfcAutoSizeField(V,"header_temp_size","Temperature size")}
                ${this._wfcAutoSizeField(V,"header_secondary_size","Temperature sub-header size")}

                ${this._wfcGroup("Current Weather Header metrics")}
                ${this._wfcConfigSelect("current.secondary_info_attribute","Temperature sub-header Metric",k,_.secondary_info_attribute||"","",!0)}
                <p class="wsfc-hint">Shown just under the main temperature. "High / Low Temperature" (the default) shows today's forecast high/low; "None" hides this line entirely.</p>
                <p class="wsfc-hint">Metrics shown in the header row (beneath the main temperature). Pick built-in weather metrics and/or add any entity's state as a custom metric — both appear here.</p>
                ${this._wfcStockForm(V)}
                ${this._wfcCustomMetricsBody()}`:this._wfcStockForm(V)}
          ${g?i`
                ${this._wfcForecastTypeControls("hourly")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Hourly forecast slots (0 = All)","hourly_slots",w.hourly_slots)}
                ${this._wfcConfigSlider("forecast.hourly_group_size","Hourly forecast group size","",w.hourly_group_size,1)}`:u}
          ${y?i`
                ${this._wfcForecastTypeControls("daily")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Daily forecast slots (0 = All)","daily_slots",w.daily_slots)}`:u}
          ${n?i`
                ${this._wfcGroup("Layout")}
                ${r.chips?i`
                      ${this._wfcSelect(V,"chip_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],r.chip_layout==="column"?"wrap":r.chip_layout||"wrap","wrap")}
                      ${(r.chip_layout||"wrap")==="grid"?i`
                            ${this._wfcCheckbox("Set a fixed number of columns",parseInt(r.chip_columns,10)>0,S=>this._wfcSetSecField(V,"chip_columns",S.target.checked?A(parseInt(r.chip_columns,10)||2,1,6):0))}
                            ${parseInt(r.chip_columns,10)>0?this._wfcNumField(V,"chip_columns","Columns","",parseInt(r.chip_columns,10)||2,2):u}`:u}`:i`
                      ${this._wfcSelect(V,"details_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],r.details_layout||"grid","grid")}
                      ${(r.details_layout||"grid")==="grid"?this._wfcNumField(V,"columns","Columns","",$,2):u}`}

                ${this._wfcGroup("Chips")}
                ${this._wfcCheckbox("Display metrics as chips",!!r.chips,S=>this._wfcToggleSecField(V,"chips",S))}
                ${r.chips?i`
                      ${this._wfcCheckbox("Pill (fully rounded ends)",r.chip_pill!=null?!!r.chip_pill:r.chip_shape!=="rounded"&&r.chip_shape!=="square",S=>this._wfcSetSecField(V,"chip_pill",S.target.checked))}
                      ${(r.chip_pill!=null?r.chip_pill:r.chip_shape!=="rounded"&&r.chip_shape!=="square")?u:this._wfcNumField(V,"chip_radius","Corner radius (0 = square)","px",r.chip_radius,8)}
                      ${this._wfcPlainSlider("Chip scale","%",Math.round((r.chip_scale==null?1:r.chip_scale)*100),100,"chip_scale",S=>this._wfcSetSecField(V,"chip_scale",A((parseInt(S.target.value,10)||100)/100,.5,2.5)))}
                      ${this._wfcAutoSizeField(V,"chip_text_size","Text size")}
                      ${this._wfcColorField("Chip text",r.chip_text_color,S=>this._wfcSetSecField(V,"chip_text_color",S.target.value))}
                      ${this._wfcColorField("Chip background",r.chip_bg,S=>this._wfcSetSecField(V,"chip_bg",S.target.value))}
                      ${this._wfcColorField("Chip border",r.chip_border_color,S=>this._wfcSetSecField(V,"chip_border_color",S.target.value))}
                      ${this._wfcCheckbox("Show icon on chip",r.chip_show_icon!==!1,S=>this._wfcToggleSecField(V,"chip_show_icon",S))}
                      ${r.chip_show_icon!==!1?i`
                            ${this._wfcSelect(V,"chip_icon_source","Chip icon",[{value:"auto",label:"Metric's default icon"},{value:"entity",label:"Value's custom icon"},{value:"none",label:"None"}],r.chip_icon_source,"auto")}
                            ${this._wfcAutoSizeField(V,"chip_icon_size","Icon size")}
                            ${this._wfcColorField("Icon color",r.chip_icon_color,S=>this._wfcSetSecField(V,"chip_icon_color",S.target.value))}`:u}
                      ${this._wfcCheckbox("Show metric name in chip",!!r.chip_show_name,S=>this._wfcToggleSecField(V,"chip_show_name",S))}
                      ${this._wfcCheckbox("Hide chip when value is off / unknown",!!r.chip_hide_when_off,S=>this._wfcToggleSecField(V,"chip_hide_when_off",S))}`:u}

                ${r.chips?i`
                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">Enable and reorder which metrics appear as chips.</p>
                      ${this._wfcDetailRows(M)}`:i`
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

          ${v?i`
                ${this._wfcSubPanel("Time",i`
                    ${this.wsfcHide&&this.wsfcHide.includes("timeframe_mode")?u:this._wfcGroup("Timeframe")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(V,"timeframe_mode","Time Frame",[{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"},{value:"match_arc",label:"Match Sun Position arc"}],r.timeframe_mode,"hours")}
                      ${r.timeframe_mode==="hours"||r.timeframe_mode==null?i`
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

                ${this._wfcSubPanel("Current-time marker",i`
                    <div class="wsfc-row">
                      ${this._wfcColorField("Marker color",r.marker_color,S=>this._wfcSetSecField(V,"marker_color",S.target.value))}
                      ${this._wfcNumField(V,"marker_opacity","Marker opacity","%",r.marker_opacity==null?100:r.marker_opacity,100)}
                    </div>`)}

                ${this._wfcSubPanel("Sunrise & sunset markers",i`
                    <div class="wsfc-row">
                      ${this._wfcSelect(V,"ss_markers_position","Position",[{value:"hidden",label:"Hide"},{value:"overlay",label:"On the bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],r.ss_markers_position,"hidden")}
                    </div>
                    ${r.ss_markers_position&&r.ss_markers_position!=="hidden"?i`<div class="wsfc-row">
                          ${this._wfcColorField("Marker color",r.ss_markers_color,S=>this._wfcSetSecField(V,"ss_markers_color",S.target.value))}
                          ${this._wfcNumField(V,"ss_markers_opacity","Marker opacity","%",r.ss_markers_opacity==null?100:r.ss_markers_opacity,100)}
                        </div>`:u}`)}

                ${this._wfcSubPanel("Forecast Weather Metrics",i`
                    ${this._wfcSubPanel("Metrics Defaults",i`
                        ${this._wfcCheckbox("Use Current Weather Metrics icons",!!r.forecast_metric_detail_icons,S=>this._wfcToggleSecField(V,"forecast_metric_detail_icons",S))}
                        ${this._wfcCheckbox("Temperature text beside the condition icon",!!r.forecast_temp_with_icon,S=>this._wfcToggleSecField(V,"forecast_temp_with_icon",S))}
                        <div class="wsfc-row">
                          ${this._wfcSelect(V,"forecast_every","Show every",[{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(S=>({value:S,label:S+(S>1?" hours":" hour")}))],r.forecast_every,3)}
                          ${this._wfcNumField(V,"forecast_font_size","Text size","px",r.forecast_font_size,11)}
                          ${this._wfcNumField(V,"forecast_icon_size","Icon size","px",r.forecast_icon_size,22)}
                        </div>
                        ${this._wfcColorField("Temperature color",r.forecast_temp_color,S=>this._wfcSetSecField(V,"forecast_temp_color",S.target.value))}
                        ${this._wfcColorField("Icon color",r.forecast_icon_color,S=>this._wfcSetSecField(V,"forecast_icon_color",S.target.value))}
                        ${l.some(S=>r.forecast_metric_pos&&r.forecast_metric_pos[S]&&r.forecast_metric_pos[S]!=="hidden"||b(r).includes(S))?this._wfcColorField("Metric Text Color",r.forecast_extra_color,S=>this._wfcSetSecField(V,"forecast_extra_color",S.target.value)):u}`)}
                    <p class="wsfc-hint">Show/hide and place each metric, and drag the order to control exactly where each sits on the bar. Listed top to bottom as they appear on the bar; the arrows move a metric up or down among those in the same place (change its place with the drop-down). Expand a metric to override the defaults (including its own "Show every").</p>
                    ${this._wfcMetricsOrder(V,r)}`)}

                ${this._wfcSubPanel("Bar Size & Colors",i`
                    ${this._wfcNumField(V,"height","Bar height","px",r.height,44)}
                    <p class="wsfc-hint">Gradient colors — blank = built-in palette.</p>
                    ${this._wfcCheckbox("Adjust colors for forecast (clouds)",r.weather_adjust!==!1,S=>this._wfcToggleSecField(V,"weather_adjust",S))}
                    <div class="wsfc-row">
                      ${this._wfcColorField("Day color",r.day_color,S=>this._wfcSetSecField(V,"day_color",S.target.value))}
                      ${this._wfcColorField("Night color",r.night_color,S=>this._wfcSetSecField(V,"night_color",S.target.value))}
                    </div>`)}

                ${this._wfcSectionStyles(V,r)}
              `:u}

          ${c?i`
                <div class="wsfc-row">
                  ${this._wfcNumField(V,"height","Arc height","px",r.height,90)}
                  ${this._wfcSelect(V,"time_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],r.time_format,"auto")}
                </div>

                ${this.wsfcHide&&this.wsfcHide.includes("timeframe_mode")?u:this._wfcGroup("Timeframe")}
                <div class="wsfc-row">
                  ${this._wfcSelect(V,"timeframe_mode","Time Frame",[{value:"sunrise_sunset",label:"Sunrise \u2192 sunset (fill width)"},{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"}],r.timeframe_mode,"sunrise_sunset")}
                  ${r.timeframe_mode==="hours"?i`
                        ${this._wfcNumField(V,"timeframe_hours","Hours","",r.timeframe_hours,24)}
                        ${this._wfcSelect(V,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],r.timeframe_anchor,"now_left")}
                      `:u}
                </div>
                <div class="wsfc-hint">When the baseline is the Sky Bar, the arc matches that bar's timeframe automatically.</div>

                <div class="wsfc-hint">Labels vertical position: 0 = below the arc, 50 = mid, 100 = above.</div>
                ${this._wfcPlainSlider("Labels position","",F(r.labels_position),0,"labels_position",S=>this._wfcSetSecField(V,"labels_position",A(parseInt(S.target.value,10)||0,0,100)))}
                ${this._wfcGroup("Sun marker")}
                <ha-icon-picker
                  label="Sun icon (blank = filled dot)"
                  .value=${r.sun_icon||""}
                  @value-changed=${S=>this._wfcSetSecField(V,"sun_icon",S.detail&&S.detail.value||"")}
                ></ha-icon-picker>
                ${this.wsfcHide&&this.wsfcHide.includes("night_moon")?u:this._wfcCheckbox("Use a moon icon at night (between sunset & sunrise)",!!r.night_moon,S=>this._wfcToggleSecField(V,"night_moon",S))}
                ${r.night_moon&&!(this.wsfcHide&&this.wsfcHide.includes("night_moon"))?i`<ha-icon-picker
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
                ${r.show_ss_icons?i`
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

          ${v?u:this._wfcSectionStyles(V,r)}
        </div>
    `};let F2={current:"mdi:weather-partly-cloudy",details:"mdi:format-list-bulleted",hourly:"mdi:clock-outline",daily:"mdi:calendar-week",sun_position:"mdi:white-balance-sunny",sun_arc:"mdi:sine-wave"};f._wfcPlainNum=function(V,M,r){return this._wfcPlainSlider(V,"px",M,16,"_size",r)},f._wfcDetailRows=function(V){return V.details.items.map((r,n,s)=>{let v=H[r.key]||{};return i`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <ha-icon class="wsfc-detail-glyph wsfc-glyph-accent" icon=${r.icon||v.icon||"mdi:tag-outline"}></ha-icon>
            <span class="wsfc-order-name">${v.label||r.key}</span>
            <ha-icon class="wsfc-ico-btn ${n===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${c=>{c.preventDefault(),c.stopPropagation(),this._wfcMoveDetail(r.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${n===s.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${c=>{c.preventDefault(),c.stopPropagation(),this._wfcMoveDetail(r.key,1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn" icon=${r.show?"mdi:eye":"mdi:eye-off"} title=${r.show?"Shown \u2014 click to hide":"Hidden \u2014 click to show"}
              @click=${c=>{c.preventDefault(),c.stopPropagation(),this._wfcToggleDetailShow(r.key)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <ha-icon-picker
              class="wsfc-grow"
              label="Icon (blank = default)"
              .placeholder=${v.icon||""}
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
            ${r.mode==="custom"?i`
                  ${this._wfcPlainNum("Icon size (px)",r.icon_size,c=>this._wfcSetDetail(r.key,"icon_size",c))}
                  ${this._wfcPlainNum("Text size (px)",r.text_size,c=>this._wfcSetDetail(r.key,"text_size",c))}
                  ${this._wfcColorField("Icon color",r.icon_color,c=>this._wfcSetDetail(r.key,"icon_color",c))}
                  ${this._wfcColorField("Text color",r.text_color,c=>this._wfcSetDetail(r.key,"text_color",c))}
                `:u}
          </div>
        </details>
      `})};let P2=["current","details","hourly","daily","sun_arc","sun_position"];function j3(V){let M=P2.filter(n=>V.includes(n)),r=V.filter(n=>!P2.includes(n));return[...M,...r]}f._wfcEditor=function(){let V=h(this._config),M=j3(V.order),r=V.order.map((s,v,c)=>{let g=!!(V[s]&&V[s].show);return i`
        <div class="wsfc-order-row">
          <ha-icon class="wsfc-order-lead" icon=${F2[s]||o2.options}></ha-icon>
          <span class="wsfc-order-name">${L[s]||s}</span>
          <ha-icon class="wsfc-ico-btn ${v===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up" @click=${()=>this._wfcMoveSection(s,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${v===c.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down" @click=${()=>this._wfcMoveSection(s,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${g?"mdi:eye":"mdi:eye-off"} title=${g?"Shown \u2014 click to hide":"Hidden \u2014 click to show"} @click=${()=>this._wfcToggleSectionShow(s)}></ha-icon>
        </div>
      `}),n=M.map(s=>i`
        <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${F2[s]||o2.options}></ha-icon><span class="wsfc-panel-title">${L[s]||s}</span></summary>
          <div class="wsfc-ed-panel">
            ${this._wfcSectionOptionsBody(s,V)}
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
    `};let B2=[{value:"left",label:"Left of weather"},{value:"center",label:"Center of row"},{value:"right",label:"Right of weather"},{value:"above-left",label:"Above weather \u2014 left"},{value:"above-center",label:"Above weather \u2014 middle"},{value:"above-right",label:"Above weather \u2014 right"},{value:"below-left",label:"Below weather \u2014 left"},{value:"below-center",label:"Below weather \u2014 middle"},{value:"below-right",label:"Below weather \u2014 right"}];f._wfcClockPanel=function(V){let M="current",r=V.current||{},n=v=>v==="above"?"above-center":v==="below"?"below-center":v,s=r.clock_show_time!==!1;return i`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:clock-outline"></ha-icon><span class="wsfc-panel-title">Clock &amp; Date</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Digital clock &amp; date rendered in the Current Weather row. Enable Current Weather to show it.</p>
          ${this._wfcGroup("Clock (time)")}
                ${this._wfcCheckbox("Show Time",s,v=>this._wfcToggleSecField(M,"clock_show_time",v))}
                ${s?i`
                      <div class="wsfc-row">
                        ${this._wfcSelect(M,"clock_placement","Clock placement",B2,n(r.clock_placement),"right")}
                        ${this._wfcSelect(M,"clock_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],r.clock_format,"auto")}
                      </div>
                      ${this._wfcCheckbox("Show Seconds",r.clock_show_seconds,v=>this._wfcToggleSecField(M,"clock_show_seconds",v))}
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(M,"clock_font_size","Time size")}
                        ${this._wfcSelect(M,"clock_font_weight","Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],r.clock_font_weight,"500")}
                      </div>
                      ${this._wfcColorField("Time color",r.clock_color,v=>this._wfcSetSecField(M,"clock_color",v.target.value))}
                      <label class="wsfc-field">
                        <span class="wsfc-field-label">Font family (blank = card default)</span>
                        <input
                          type="text"
                          class="wsfc-input"
                          placeholder="e.g. Roboto Mono, monospace"
                          .value=${r.clock_font_family||""}
                          @change=${v=>this._wfcSetSecField(M,"clock_font_family",v.target.value)}
                        />
                      </label>
                      ${this._wfcSelect(M,"clock_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],r.clock_contrast,"none")}`:u}

                ${this._wfcGroup("Date")}
                ${this._wfcCheckbox("Show Date",r.clock_show_date,v=>this._wfcToggleSecField(M,"clock_show_date",v))}
                ${r.clock_show_date?i`
                      ${this._wfcSelect(M,"clock_date_format","Date format",C.map(v=>({value:v.value,label:v.label})),r.clock_date_format,"auto")}
                      <div class="wsfc-row">
                        ${this._wfcSelect(M,"clock_date_placement","Date placement",[{value:"with_time",label:"With clock"},...B2],r.clock_date_placement==="above"||r.clock_date_placement==="below"?n(r.clock_date_placement):r.clock_date_placement,"with_time")}
                        ${this._wfcAutoSizeField(M,"clock_date_font_size","Date size")}
                        ${this._wfcColorField("Date color",r.clock_date_color,v=>this._wfcSetSecField(M,"clock_date_color",v.target.value))}
                      </div>
                      ${r.clock_show_time&&(r.clock_date_placement==="with_time"||!r.clock_date_placement)?this._wfcSelect(M,"clock_align","Time & date alignment",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}],r.clock_align||"center","center"):u}
                      ${this._wfcSelect(M,"clock_date_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],r.clock_date_contrast!=null?r.clock_date_contrast:r.clock_contrast,"none")}`:u}
        </div>
      </details>
    `},f._wfcYamlPanel=function(){let V;try{V=R(this._config)}catch{V="# (unable to render YAML)"}return i`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:code-braces"></ha-icon><span class="wsfc-panel-title">YAML configuration</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Read-only view of this card's current configuration.</p>
          <pre class="wsfc-yaml">${V}</pre>
        </div>
      </details>
    `}})();{let t=q.prototype,C=t._wfcWeatherSourcesPanel,H=t.render,e=t.updated;t._wfcWeatherSourcesPanel=function(){return this.wsfcMode==="sections"?"":C.call(this)},t.render=function(){return this.wsfcMode!=="sources"?H.call(this):!this.hass||!this._config?"":i`${this._wfcEditorStyle()}${C.call(this)}`};let L=new CSSStyleSheet;L.replaceSync(`
    details.wsfc-panel { border: 1px solid transparent; border-top-color: var(--ltek-c-border-soft, rgba(127,127,127,.25)); border-radius: 0; background: none; margin: 0; }
    details.wsfc-panel[open] { border-color: var(--accent-color, var(--ltek-c-accent, #03a9f4)); border-radius: var(--ltek-r-ctrl, 8px); margin: 6px 0; }
    details.wsfc-panel[open] + details.wsfc-panel { border-top-color: transparent; }
    details.wsfc-panel > summary.wsfc-panel-summary { padding: var(--ltek-sp-3, 10px); gap: 8px; }
    details.wsfc-panel > summary .wsfc-panel-icon { display: none; }
    details.wsfc-panel > summary .wsfc-panel-title { font-size: var(--ltek-fs-label, 13px); font-weight: var(--ltek-fw-semibold, 600); text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); }
    details.wsfc-panel > summary::after { width: 8px; height: 8px; border-right-color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); border-bottom-color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); }
    .wsfc-ed-header { display: none; }
  `),t.updated=function(o){e?.call(this,o),this.wsfcMode==="sections"&&this.renderRoot&&(this.renderRoot.adoptedStyleSheets.includes(L)||(this.renderRoot.adoptedStyleSheets=[...this.renderRoot.adoptedStyleSheets,L]),this.renderRoot.querySelectorAll("details.wsfc-panel").forEach(d=>{d.__wsfcFlat||(d.__wsfcFlat=!0,d.addEventListener("toggle",()=>{d.open&&this.dispatchEvent(new CustomEvent("wsfc-flat-open",{detail:{type:this.wsfcType},bubbles:!0,composed:!0}))}))}));let a=this.wsfcPanels;if(a&&this.wsfcMode!=="sources"&&this.renderRoot?.querySelectorAll("details.wfc-panel, details.wsfc-panel").forEach(d=>{let l=d.querySelector(":scope > summary .wfc-panel-title, :scope > summary .wsfc-panel-title")?.textContent?.trim();d.hidden=!!l&&!a.includes(l)}),this.wsfcMode==="sources"&&!this.__wsfcOpened){let d=this.renderRoot?.querySelector("details.wfc-panel, details.wsfc-panel");d&&(d.open=!0,this.__wsfcOpened=!0)}}}var b5=globalThis.__wsfcHost?.["src/card/constants.js"];if(!b5)throw new Error("wsfc-editor.js: the card did not provide src/card/constants.js; update every file of the card together");var{CARD_NAME:_5,CARD_TYPE:p2,CARD_VERSION:O5}=b5;var y5=globalThis.__wsfcHost?.["src/card/panels.js"];if(!y5)throw new Error("wsfc-editor.js: the card did not provide src/card/panels.js; update every file of the card together");var{COLLAPSE_COLORS:k5,COLLAPSE_FIELDS:x9,COMMON_SCHEMA:W1,DEFAULT_PANELS:f9,HERO_TEXT_ICONS:Z9,NO_TITLE:T5,PANEL_TYPES:m2,SKY_TEXT_ICONS:h9,STACK_CHILD_SCHEMA:N1,TITLE_COLORS:F5,TITLE_WHEN_SET:c2,inBarOf:z1,layoutOf:S9,migrateSky:g9,normalizePanels:P5,opensPopup:w9,panelMeta:W,rowsOf:N,spanOf:G}=y5;var B5=globalThis.__wsfcHost?.["src/card/core.js"];if(!B5)throw new Error("wsfc-editor.js: the card did not provide src/card/core.js; update every file of the card together");var{CORE_EDITOR_TAG:$5,CORE_TAG:_9,CoreSlot:O9,FLEX_SECTIONS_BUILD:y9,deepMerge:R5,flexBaseline:k9,flexOverride:E5,resolveWfc:T9}=B5;var D5=globalThis.__wsfcHost?.["src/panels/flex.js"];if(!D5)throw new Error("wsfc-editor.js: the card did not provide src/panels/flex.js; update every file of the card together");var{FLEX_BASES:P9,WsfcFlexPanel:B9,adoptContrast:$9,flexBase:W5,heroAutoSizes:R9,scaleTracker:E9,scaledSizes:D9,trackerConfig:N5}=D5;var z5=globalThis.__wsfcHost?.["src/card/config.js"];if(!z5)throw new Error("wsfc-editor.js: the card did not provide src/card/config.js; update every file of the card together");var{clone:A1,deepDiff:N9,deepMerge:z9,fitMode:X,prune:K}=z5;var I5=globalThis.__wsfcHost?.["src/card/metrics.js"];if(!I5)throw new Error("wsfc-editor.js: the card did not provide src/card/metrics.js; update every file of the card together");var{CARDINALS:G9,METRICS:I,cardinal:U9,digitsFor:Q9,metricEntity:I1,pressureThreshold:j9,uvLevel:q9}=I5;var G5=globalThis.__wsfcHost?.["src/card/layout.js"];if(!G5)throw new Error("wsfc-editor.js: the card did not provide src/card/layout.js; update every file of the card together");var{COLS:Y9,Q:V1,arrange:l1,pushDown:d1,readingOrder:v2,toRows:t1,toTracks:L1}=G5;var G1=30,U1=4,U5=10,x1=t=>t.title?t.title:t.type==="metric"?I[t.metric]?.label||t.label||"Metric":t.type==="stack"?`Stack \xB7 ${(t.panels||[]).length}`:t.type==="day"?["Today","Tomorrow"][Number(t.day_offset??1)]||`Day +${t.day_offset}`:(W(t)?.label||t.type).replace(/ \(.*\)$/,""),u2=t=>t.icon||t.type==="metric"&&I[t.metric]?.icon||W(t)?.icon||"mdi:square-outline",f1=class extends z{connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(()=>{let C=this.renderRoot.querySelector(".grid");if(!C)return;let H=C.clientWidth-12;Math.abs(H-(this._mapW||0))>1&&(this._mapW=H)}),this.updateComplete.then(()=>{let C=this.renderRoot.querySelector(".grid");C&&this._ro.observe(C)})}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect()}_scale(){let C=this.guide;if(!C?.w||!C?.h||!this._mapW)return{row:G1,gap:U1,line:null};let H=this._mapW/C.w,e=Math.max(100,C.h-(C.chrome||0)),L=C.row||110,o=!1;if(C.fit&&this._tracks){let d=this._tracks/V1,l=(e+(C.gap??12))/d-(C.gap??12);L=Math.max(60,Math.min(400,l)),o=l>=60}let a=Math.max(2,(C.gap??12)*H);return{row:Math.max(8,L*H),gap:a,line:e*H,rowPx:Math.round(L),fits:o}}updated(C){if(C.has("panels")&&this._focusNext!=null){let a=this._focusNext;this._focusNext=null,this.renderRoot.querySelector(`.blk[data-i="${a}"]`)?.focus()}let H=this.renderRoot.querySelector(".grid.measure");if(!H||!this.guide?.fit)return;let{row:e,gap:L}=this._scale(),o=Math.max(V1,Math.round((H.clientHeight-12+L)/((e-3*L)/V1+L)));o!==this._tracks&&(this._tracks=o)}_inMap(C){return C.display!=="popup"&&C.show!==!1}_gridIdx(){return(this.panels||[]).map((C,H)=>H).filter(C=>this._inMap(this.panels[C]))}_items(C=this.panels||[]){return this._gridIdx().map(H=>{let e=C[H];return{key:H,w:G(e),h:L1(N(e)),x:e.x??null,y:e.y==null?null:Number(e.y)*V1}})}_positions(){return this._preview||l1(this._items(),{gravity:this.gravity!==!1})}render(){let C=this.panels||[];this._pos=this._positions();let H=v2(this._pos),e=C.map((d,l)=>l).filter(d=>C[d].display==="popup"),L=C.map((d,l)=>l).filter(d=>C[d].display!=="popup"&&C[d].show===!1),o=this._scale();this._mr=o.row,this._mg=o.gap;let a=this.guide?.mode||"line";return i`
      <div class="wrap">
        <div class="grid ${this._drag?.moved||this._size?"editing":""}" style=${`--row:${o.row}px;--gap:${o.gap}px`}>
          ${H.map(d=>this._block(C[d],d))}
        </div>
        ${this.guide?.fit?i`<div class="grid measure" aria-hidden="true" style=${`--row:${o.row}px;--gap:${o.gap}px`}>
          ${this._measureBlocks(C)}</div>`:u}
        ${this.measured?.w&&this._mapW?this.measured.gridH>this.measured.visibleH+1?i`<div class="guide frame" style=${`top:${6+this.measured.visibleH*(this._mapW/this.measured.w)}px`} aria-hidden="true"><span>${this.guide.w}×${this.guide.h} screen edge</span></div>`:i`<div class="guide fitbox" aria-hidden="true"><span>Fits ${this.guide.w}×${this.guide.h}</span></div>`:o.line==null?u:o.fits?i`<div class="guide fitbox" aria-hidden="true"><span>Fits ${this.guide.w}×${this.guide.h} · rows ${o.rowPx}px</span></div>`:i`<div class="guide ${a}" style=${`top:${6+o.line}px`} aria-hidden="true">
                <span>${this.guide.w}×${this.guide.h} screen edge${this.guide.fit?` \xB7 rows at the ${o.rowPx}px minimum`:""}</span></div>`}
      </div>
      ${this._screen()}
      ${L.length?i`<div class="pops"><span>Hidden on load (not on the map):</span>${L.map(d=>i`<span class="pop"><ha-icon icon=${u2(C[d])}></ha-icon>${x1(C[d])}</span>`)}</div>`:u}
      ${e.length?i`<div class="pops"><span>Pop-ups:</span>${e.map(d=>i`<span class="pop"><ha-icon icon=${u2(C[d])}></ha-icon>${x1(C[d])}</span>`)}</div>`:u}
    `}_screen(){let C=this.measured,H=this.guide;if(!C||!H||!this._mapW||!C.w)return u;let e=C.tiles.filter(a=>a.where==="off"),L=C.tiles.filter(a=>a.where==="partial"),o=a=>a.map(d=>x1(this.panels[d.i]||{})).join(", ");return i`<div class="shot-head">On the ${H.w}×${H.h} screen at load${C.gridH<=C.visibleH+1?i` — <span class="okc">everything fits</span>`:""}</div>
      ${e.length||L.length?i`<div class="shot-note">${L.length?i`<b>Partly off screen:</b> ${o(L)}. `:""}${e.length?i`<b>Off screen:</b> ${o(e)}.`:""}
            ${H.fit&&!H.strict?" Content makes some panels taller than their rows (dashed in the map); try Exact heights, Fill the panel, or more rows for them.":""}</div>`:u}`}_place(C){return`grid-column: ${C.x+1} / span ${C.w}; grid-row: ${C.y+1} / span ${C.h};`}_measureBlocks(C){let H=this._items().filter(L=>C[L.key].show!==!1);return[...l1(H,{gravity:this.gravity!==!1}).values()].map(L=>i`<div style=${this._place(L)}></div>`)}_block(C,H){let e=this._size?.index===H?this._size:null,L=this._pos.get(H),o=L.w,a=e?e.rows:N(C),d=this._place(L),l=!e&&this.measured?.tiles?.find(x=>x.i===H),A=l&&!l.collapsed?Math.round((l.h+this.measured.gap)/(this.measured.row+this.measured.gap)*V1)/V1:null,m=A!=null&&a>0&&A>a+.25;m&&(d+=`--extra:${Math.round((A-a)*((this._mr||G1)+(this._mg||U1)))}px;`);let p=["blk",C.show===!1?"hidden":"",this._drag?.index===H?"dragging":"",e?"sizing":"",C.type,l?`at-${l.where}`:"",m?"grows":"",l?.collapsed?"folded":""].join(" ");return i`<div class=${p} style=${d} data-i=${H} tabindex="0" role="button"
        aria-label=${`${x1(C)}, column ${L.x+1}, row ${t1(L.y)+1}, width ${o} of 12, height ${a||"auto"}. Arrow keys move; Shift+arrows resize.`}
        @pointerdown=${x=>this._startMove(x,H)} @keydown=${x=>this._key(x,H)}>
      <ha-icon icon=${u2(C)}></ha-icon>
      <span class="nm">${x1(C)}</span>
      <span class="dim">${o}×${a||"a"}${m?i` <b class="need" title="Its content makes it taller on that screen">→ ${A}</b>`:u}${l?.collapsed?" \xB7 collapsed":""}</span>
      <span class="rz x" @pointerdown=${x=>this._startSize(x,H,"x")}></span>
      <span class="rz y" @pointerdown=${x=>this._startSize(x,H,"y")}></span>
      <span class="rz xy" @pointerdown=${x=>this._startSize(x,H,"xy")}></span>
    </div>`}_cell(C){let H=this.renderRoot.querySelector(".grid"),e=H.getBoundingClientRect(),L=this._mg||U1,o=(H.clientWidth-12-11*L)/12,a=((this._mr||G1)-3*L)/V1;return{x:Math.floor((C.clientX-e.left-6)/(o+L)),y:Math.floor((C.clientY-e.top-6)/(a+L))}}_startMove(C,H){if(C.button!==0||C.target.classList.contains("rz"))return;C.preventDefault();let e=C.currentTarget;e.setPointerCapture(C.pointerId);let L=this._pos.get(H),o=this._cell(C);this._drag={index:H,x0:C.clientX,y0:C.clientY,moved:!1,dx:o.x-L.x,dy:o.y-L.y,at:{x:L.x,y:L.y}};let a=l=>this._onMove(l),d=()=>{e.removeEventListener("pointermove",a),e.removeEventListener("pointerup",d),e.removeEventListener("pointercancel",d);let l=this._drag,A=this._preview;this._drag=null,this._preview=null,l?.moved&&A&&(l.to.x!==l.at.x||l.to.y!==l.at.y)&&this._commit(A)};e.addEventListener("pointermove",a),e.addEventListener("pointerup",d),e.addEventListener("pointercancel",d)}_onMove(C){let H=this._drag;if(!H||!H.moved&&Math.hypot(C.clientX-H.x0,C.clientY-H.y0)<4)return;H.moved=!0;let e=this._cell(C),L=l1(this._items(),{gravity:this.gravity!==!1}).get(H.index),o={x:Math.max(0,Math.min(12-L.w,e.x-H.dx)),y:Math.max(0,e.y-H.dy)};H.to&&H.to.x===o.x&&H.to.y===o.y||(H.to=o,this._preview=d1(this._items(),H.index,o,{gravity:this.gravity!==!1}))}_commit(C,H={}){let e=this.panels,L=v2(C),o=L.map(l=>{let A=C.get(l),m={...e[l],x:A.x,y:t1(A.y)};return H[l]&&Object.assign(m,H[l]),this._tidy(m)}),a=e.map(l=>this._inMap(l)?o.shift():l),d=e.map((l,A)=>A).filter(l=>this._inMap(e[l]));this._moved=new Map(L.map((l,A)=>[l,d[A]])),this._emit(a)}_tidy(C){let H=W(C)||{};return C.span===H.span&&delete C.span,C.rows!=null&&C.rows===(H.rows??0)&&delete C.rows,C}_commitOrder(C){let H=this.panels,e=C.map(o=>H[o]),L=H.map(o=>this._inMap(o)?e.shift():o);this._emit(L)}_startSize(C,H,e){if(C.button!==0)return;C.preventDefault(),C.stopPropagation();let L=C.currentTarget;L.setPointerCapture(C.pointerId);let o=this.renderRoot.querySelector(".grid"),a=this._mg||U1,d=(o.clientWidth-12-11*a)/12+a,l=((this._mr||G1)-3*a)/V1+a,A=this.panels[H],m=this._pos.get(H),p=G(A),x=N(A);this._size={index:H,span:p,rows:x};let Z=C.clientX,b=C.clientY,T=O=>{let P=e==="y"?p:Math.max(1,Math.min(12-m.x,p+Math.round((O.clientX-Z)/d))),B=e==="x"?x:Math.max(.25,Math.min(U5,t1(L1(x||1)+Math.round((O.clientY-b)/l))));e!=="x"&&x===0&&B===1&&Math.abs(O.clientY-b)<l/2&&(B=0),!(P===this._size.span&&B===this._size.rows)&&(this._size={index:H,span:P,rows:B},this._preview=d1(this._items(),H,{x:m.x,y:m.y,w:P,h:L1(B)},{gravity:this.gravity!==!1}))},F=()=>{L.removeEventListener("pointermove",T),L.removeEventListener("pointerup",F),L.removeEventListener("pointercancel",F);let{span:O,rows:P}=this._size,h=this._preview;this._size=null,this._preview=null,(O!==p||P!==x)&&h&&this._commit(h,{[H]:{span:O,rows:P}})};L.addEventListener("pointermove",T),L.addEventListener("pointerup",F),L.addEventListener("pointercancel",F)}_commitSize(C,H,e){let L=this._pos.get(C),o=d1(this._items(),C,{x:L.x,y:L.y,w:H,h:L1(e)},{gravity:this.gravity!==!1});this._commit(o,{[C]:{span:H,rows:e}})}_key(C,H){let e={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[C.key];if(!e)return;C.preventDefault();let L=this.panels[H];if(C.shiftKey){let o=Math.max(0,Math.min(U5,t1(L1(N(L)||1)+e[1])));this._commitSize(H,Math.max(1,Math.min(12-this._pos.get(H).x,G(L)+e[0])),N(L)===0&&e[1]<0?.75:o)}else{let o=this._pos.get(H),a={x:Math.max(0,Math.min(12-o.w,o.x+e[0])),y:Math.max(0,o.y+e[1])},d=d1(this._items(),H,a,{gravity:this.gravity!==!1});if(e[1]<0&&d.get(H).y>=o.y){let l=[...this._pos.values()].filter(A=>A.key!==H&&A.y+A.h<=o.y&&A.x<o.x+o.w&&o.x<A.x+A.w).sort((A,m)=>m.y+m.h-(A.y+A.h))[0];l&&(d=d1(this._items(),H,{x:o.x,y:l.y},{gravity:this.gravity!==!1}))}this._commit(d)}this._focusNext=this._moved?.get(H)??H}_emit(C){this.dispatchEvent(new CustomEvent("layout-changed",{detail:{panels:C}}))}};E(f1,"properties",{panels:{attribute:!1},_preview:{state:!0},gravity:{attribute:!1},_size:{state:!0},_drag:{state:!0},guide:{attribute:!1},measured:{attribute:!1},_mapW:{state:!0},_tracks:{state:!0}}),E(f1,"styles",D`
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
  `);customElements.get("wsfc-layout-map")||customElements.define("wsfc-layout-map",f1);var Q5=56,j5=16,Z1=class extends z{render(){let C=this.guide;return!C?.w||!C?.h?i``:i`<div class="screen" style=${`width:${Math.max(200,C.w-j5)}px;height:${Math.max(200,C.h-Q5)}px`}></div>`}updated(C){let H=`${this.guide?.w}x${this.guide?.h}`;!(C.has("config")&&C.get("config")!==this.config)&&H===this._key&&this._card||this.hass&&(this._key=H,clearTimeout(this._t),this._t=setTimeout(()=>this._build(),400))}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._t),clearTimeout(this._m)}_build(){let C=this.renderRoot.querySelector(".screen"),H=this.guide;if(!(!C||!H||!this.hass||!this.config?.entity)&&customElements.get("weather-station-flex-card")){this._card||(this._card=document.createElement("weather-station-flex-card"),this._card.editMode=!0,C.append(this._card));try{this._card.setConfig({...this.config,remember:!1})}catch{return}this._card.screenHeight=Math.max(200,H.h-Q5-j5),this._card.screenWidth=H.w,this._card.hass=this.hass,clearTimeout(this._m),this._m=setTimeout(()=>{try{this._card._fit?.(),this._card._autoFitPanels?.()}catch{}requestAnimationFrame(()=>this._measure())},900)}}_measure(){let C=this._card?.shadowRoot,H=C?.querySelector(".scroller"),e=C?.querySelector(".grid");if(!H||!e)return;let L=e.getBoundingClientRect(),o=H.getBoundingClientRect(),a=this.renderRoot.querySelector(".screen").getBoundingClientRect(),d=Math.min(o.top+H.clientHeight,a.bottom)-L.top,l=getComputedStyle(e),A=[...e.querySelectorAll(":scope > section.tile[data-i]")].map(m=>{let p=m.getBoundingClientRect(),x=p.top-L.top,Z=p.height;return{i:Number(m.dataset.i),x:p.left-L.left,y:x,w:p.width,h:Z,collapsed:m.classList.contains("collapsed"),where:x>=d-1?"off":x+Z>d+1?"partial":"on"}});this.dispatchEvent(new CustomEvent("probe-measured",{detail:{w:L.width,visibleH:d,gridH:L.height,row:parseFloat(e.style.getPropertyValue("--wsfc-row")||l.getPropertyValue("--wsfc-row"))||110,gap:parseFloat(l.rowGap)||12,tiles:A}}))}};E(Z1,"properties",{hass:{attribute:!1},config:{attribute:!1},guide:{attribute:!1}}),E(Z1,"styles",D`
    :host { position: fixed; left: -20000px; top: 0; visibility: hidden; pointer-events: none; contain: layout; }
    .screen { position: relative; overflow: hidden; }
  `);customElements.get("wsfc-layout-probe")||customElements.define("wsfc-layout-probe",Z1);var Q1=[["var(--primary-color)","Primary"],["var(--accent-color)","Accent"],["var(--primary-text-color)","Primary text"],["var(--secondary-text-color)","Secondary text"],["var(--disabled-text-color)","Disabled text"],["var(--disabled-color)","Disabled"],["var(--state-icon-color)","State icon"],["var(--state-active-color)","State active"],["var(--error-color)","Error"],["var(--warning-color)","Warning"],["var(--success-color)","Success"],["var(--info-color)","Info"]];function C7(t){return t=t==null?"":String(t),t===""?"default":t==="transparent"?"transparent":/^#[0-9a-fA-F]{3,8}$/.test(t)?"custom":/^var\(/.test(t)&&Q1.some(([C])=>C===t)?"theme":"css"}var Y5=t=>!!t.selector?.ltek_color||!!t.selector?.text&&/(^|_|\.)color$/.test(t.name),H7=t=>/px|%/.test(t?.unit_of_measurement||"");function V7(t){let C=t.selector||{};return!!(C.boolean||C.select&&!C.select.custom_value||C.number||Y5(t)||C.text&&!C.text.multiple)}var q5=t=>/^#[0-9a-fA-F]{6}$/.test(t||"")?t:null;function X5({data:t,schema:C,onChange:H,label:e,helper:L,haForm:o,auto:a,whenData:d,isSet:l,action:A}){let m=[],p=[],x=()=>{if(!p.length)return;let Z=p;m.push(o(Object.fromEntries(Z.map(b=>[b.name,t[b.name]])),Z,b=>H({...t,...b}))),p=[]};for(let Z of C){if(typeof Z.when=="function"&&!Z.when(d?{...d,...t}:t))continue;if(Z.kind==="action"||Z.kind==="info"){x(),A&&m.push(A(Z));continue}if(!V7(Z)){p.push(Z);continue}x();let b=F=>H({...t,[Z.name]:F}),T=!!Z.selector?.number&&Z.default===void 0;m.push(l?.(Z)&&!T?i`<div class="fwrap" data-name=${Z.name}>${K5(Z,t[Z.name],b,e(Z),L(Z),a?.(Z))}<button type="button" class="fdefault" title="Back to the default value"
          @click=${()=>b(void 0)}><ha-icon icon="mdi:restore"></ha-icon>Reset to default</button></div>`:K5(Z,t[Z.name],b,e(Z),L(Z),a?.(Z)))}return x(),m}function K5(t,C,H,e,L,o){let a=t.selector||{},d=`f-${t.name.replace(/\W/g,"_")}`,l=L?i`<div class="fhelp">${L}</div>`:u;if(a.boolean){let A=t.invert?C===!1:!!C;return i`<div class="fld"><label class="fchk"><input type="checkbox" .checked=${A} @change=${m=>H(t.invert?!m.target.checked:m.target.checked)} />${e}</label>${l}</div>`}if(a.select&&!a.select.multiple){let A=(a.select.options||[]).map(p=>typeof p=="string"?{value:p,label:p}:p),m=C==null?"":String(C);return i`<div class="fld"><div class="frow"><label for=${d}>${e}</label>
      <select id=${d} class="sel" @change=${p=>H(p.target.value===""?void 0:p.target.value)}>
        ${A.some(p=>String(p.value)===m)?u:i`<option value="" ?selected=${m===""}>—</option>`}
        ${A.map(p=>i`<option value=${p.value} ?selected=${String(p.value)===m}>${p.label}</option>`)}
      </select></div>${l}</div>`}if(a.select&&a.select.multiple){let A=(a.select.options||[]).map(x=>typeof x=="string"?{value:x,label:x}:x),m=Array.isArray(C)?C:[],p=(x,Z)=>{let b=A.map(T=>T.value).filter(T=>T===x?Z:m.includes(T));H(b.length?b:void 0)};return i`<div class="fld"><div class="flab">${e}</div><div class="fmulti">
      ${A.map(x=>i`<label class="fchk"><input type="checkbox" .checked=${m.includes(x.value)} @change=${Z=>p(x.value,Z.target.checked)} />${x.label}</label>`)}
    </div>${l}</div>`}if(a.number){let A=a.number,m=A.unit_of_measurement||"";if(A.mode==="slider"||H7(A)){let p=A.min??0,x=A.max??100,Z=A.step??1,b=C??t.default,T=parseFloat(o),F=b??(Number.isFinite(T)?Math.max(p,Math.min(x,T)):p),O=P=>P==null||P===""?"Auto":`${P}${m}`;return i`<div class="fld"><div class="frow nowrap"><label for=${d}>${e}</label>
        <input id=${d} type="range" class="frange" min=${p} max=${x} step=${Z} .value=${String(F)}
          @input=${P=>{let h=P.target.parentElement.querySelector(".fval");h&&(h.textContent=O(P.target.value))}}
          @change=${P=>H(Number(P.target.value))} />
        <span class="fval">${O(b)}</span>
        ${C!=null&&t.default===void 0?i`<button class="freset" title="Back to Auto" @click=${()=>H(void 0)}>×</button>`:u}
      </div>${o&&b==null?i`<div class="fauto">Auto: ${o}</div>`:u}${l}</div>`}return i`<div class="fld"><div class="frow"><label for=${d}>${e}</label>
      <input id=${d} type="number" class="ftext num" min=${A.min??u} max=${A.max??u} step=${A.step??"any"} .value=${C??""}
        @change=${p=>H(p.target.value===""?void 0:Number(p.target.value))} />${m?i`<span class="funit">${m}</span>`:u}
    </div>${l}</div>`}return Y5(t)?L7(d,C,H,e,l,/background|(^|_)bg(_|$)/i.test(`${t.name} ${e}`)):i`<div class="fld"><div class="frow"><label for=${d}>${e}</label>
    <input id=${d} type=${a.text?.type||"text"} class="ftext" .value=${C??""} @change=${A=>H(A.target.value===""?void 0:A.target.value)} />
  </div>${l}</div>`}function L7(t,C,H,e,L,o=!1){let a=C7(C),d=C==null?"":String(C),l=A=>H(A==="default"?void 0:A==="transparent"?"transparent":A==="theme"?Q1.some(([m])=>m===d)?d:Q1[0][0]:A==="custom"?q5(d)||"#4fc3f7":d||"#4fc3f7");return i`<div class="fld"><div class="frow"><label for=${t}>${e}</label>
    <span class="fcolor">
      <select id=${t} class="sel mode" @change=${A=>l(A.target.value)}>
        ${[["default","Not set"],...o||a==="transparent"?[["transparent","Transparent"]]:[],["theme","Theme color"],["custom","Custom"],["css","CSS"]].map(([A,m])=>i`<option value=${A} ?selected=${A===a}>${m}</option>`)}
      </select>
      ${a==="theme"?i`<select class="sel" aria-label="Theme color" @change=${A=>H(A.target.value)}>${Q1.map(([A,m])=>i`<option value=${A} ?selected=${A===d}>${m}</option>`)}</select>`:a==="custom"?i`<input type="color" class="fswatch" aria-label="Color" .value=${q5(d)||"#4fc3f7"} @change=${A=>H(A.target.value)} />`:a==="css"?i`<input type="text" class="ftext" aria-label="CSS color" .value=${d} @change=${A=>H(A.target.value||void 0)} />`:u}
      ${a!=="default"&&a!=="transparent"?i`<span class="fdot" style="background:${d}"></span>`:u}
    </span>
  </div>${L}</div>`}var J5=D`
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
`;var C3=globalThis.__wsfcHost?.["src/card/lazy.js"];if(!C3)throw new Error("wsfc-editor.js: the card did not provide src/card/lazy.js; update every file of the card together");var{lazyLib:H3}=C3;var j1,e7=async()=>j1||(j1=await H3("wsfc-yaml.js")),r7=`
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
`,t7=t=>j1.dump(t,{lineWidth:-1,noRefs:!0});function M7(t,C){let H;try{H=j1.load(String(t||""))}catch(e){throw new Error(`Not valid YAML or JSON: ${e.reason||e.message}`)}if(!H||typeof H!="object"||Array.isArray(H))throw new Error("Expected the card's settings (a YAML mapping).");if(H.type&&C&&H.type!==C)throw new Error(`This is a ${H.type} config, not ${C}.`);if(!H.entity)throw new Error("Missing entity: the weather entity (e.g. weather.openweathermap).");return{...H,type:C||H.type}}async function x2(t){try{await e7()}catch(C){alert(String(C?.message||C));return}return o7(t)}function o7({mode:t,config:C,cardType:H,onImport:e}){let L=document.createElement("dialog");L.className="wsfc-io";let o=document.createElement("style");o.textContent=r7;let a=t==="export";L.innerHTML=`<div class="in">
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
  </div>`,L.prepend(o);let d=L.querySelector("textarea"),l=L.querySelector(".err");a&&(d.value=t7(C));let A=()=>{L.close(),L.remove()};L.querySelector(".close").addEventListener("click",A),L.addEventListener("cancel",m=>{m.preventDefault(),A()}),L.addEventListener("click",m=>{m.target===L&&A()}),L.querySelector(".copy")?.addEventListener("click",async m=>{let p=m.currentTarget;d.focus(),d.select();let x=!1;try{x=document.execCommand("copy")}catch{x=!1}if(!x)try{await navigator.clipboard.writeText(d.value),x=!0}catch{x=!1}p.textContent=x?"Copied \u2713":"Press Ctrl/Cmd+C"}),L.querySelector(".dl")?.addEventListener("click",()=>{let m=document.createElement("a");m.href=URL.createObjectURL(new Blob([d.value],{type:"text/yaml"})),m.download="weather-station-flex-card.yaml",m.click(),setTimeout(()=>URL.revokeObjectURL(m.href),1e3)}),L.querySelector(".paste")?.addEventListener("click",async m=>{try{d.value=await navigator.clipboard.readText(),l.textContent=""}catch{m.currentTarget.textContent="Paste with Ctrl/Cmd+V",d.focus()}}),L.querySelector(".apply")?.addEventListener("click",()=>{try{let m=M7(d.value,H);e?.(m),A()}catch(m){l.textContent=m.message}}),document.body.appendChild(L);try{L.showModal()}catch{L.setAttribute("open","")}return a?(d.focus(),d.select()):d.focus(),L}var V3=globalThis.__wsfcHost?.["src/card/unsaved.js"];if(!V3)throw new Error("wsfc-editor.js: the card did not provide src/card/unsaved.js; update every file of the card together");var{isLive:f2,isUnsaved:n6,setLive:Z2,setUnsaved:q1}=V3;var L3=globalThis.__wsfcHost?.["src/card/detected.js"];if(!L3)throw new Error("wsfc-editor.js: the card did not provide src/card/detected.js; update every file of the card together");var{detected:e3,setDetected:l6}=L3;var r3=globalThis.__wsfcHost?.["src/card/animation-speed.js"];if(!r3)throw new Error("wsfc-editor.js: the card did not provide src/card/animation-speed.js; update every file of the card together");var{ANIM_SPEEDS:t3,LOW_POWER_VARS:M3,SPEED_MAX:s6,SPEED_MIN:p6,animSpeedVars:o3}=r3;var i3=globalThis.__wsfcHost?.["src/card/weather-station-flex-card.js"];if(!i3)throw new Error("wsfc-editor.js: the card did not provide src/card/weather-station-flex-card.js; update every file of the card together");var{baseSizes:c6,canCollapseType:K1,contrastVars:v6,panelStyleVars:u6,tileFx:x6}=i3;var a3=globalThis.__wsfcHost?.["src/card/compact.js"];if(!a3)throw new Error("wsfc-editor.js: the card did not provide src/card/compact.js; update every file of the card together");var{COMPACT_TYPES:M1,NEEDS_PANEL:Z6,compactRow:h6,compactStyles:S6,compactTiles:g6}=a3;var n3={inplace:"in place",overlay:"over the other panels",popup:"as a pop-up"},h2=["compact","collapsible","collapsed","collapsed_view","collapsed_open"];function S1(t,C={},H=!0){if(!H)return[["full","Full Size"]];let e=[["full","Full Size"],["full_title","Full Size \u2192 Collapse to Title"],["title_full","Title \u2192 Expand to Full Size"]];return M1.has(t.type)?[...e,["full_tiles","Full Size \u2192 Collapse to Tiles"],["tiles",`Tiles \u2192 Expand (card default: ${i7(C)})`],["tiles_inplace","Tiles \u2192 Expand in Place"],["tiles_overlay","Tiles \u2192 Open Over the Other Panels"],["tiles_popup","Tiles \u2192 Open as a Pop-up"]]:e}function i7(t){let C=t.collapsed_open;return n3[C]?n3[C]:t.layout==="fullscreen"||t.screen_fit==="scale"?"over the other panels":"in place"}var a7=t=>M1.has(t.type)&&(!!t.compact||t.type==="air_quality"&&t.layout==="compact"),h1=t=>t&&t!=="default"?t:null;function g1(t={},C={}){let H=L=>h1(L)?`tiles_${h1(L)}`:"tiles";return a7(t)?h1(t.collapsed_view)==="minimal"?t.collapsed===!1?"full_title":"title_full":t.collapsed===!1?"full_tiles":H(t.collapsed_open):t.collapsible?(M1.has(t.type)?h1(t.collapsed_view)||(C.collapsed_view==="compact"?"compact":"minimal"):"minimal")==="compact"?t.collapsed?H(t.collapsed_open):"full_tiles":t.collapsed?"title_full":"full_title":"full"}function Y1(t,C,H={}){let e={...t};for(let a of h2)delete e[a];e.type==="air_quality"&&e.layout==="compact"&&delete e.layout;let L=()=>{M1.has(e.type)&&H.collapsed_view==="compact"&&(e.collapsed_view="minimal")},o=()=>{h1(t.collapsed_open)&&(e.collapsed_open=t.collapsed_open)};switch(C){case"full_title":e.collapsible=!0,L(),o();break;case"title_full":e.collapsible=!0,e.collapsed=!0,L(),o();break;case"full_tiles":e.compact=!0,e.collapsed=!1,e.collapsed_open="inplace";break;case"tiles":e.compact=!0;break;case"tiles_inplace":e.compact=!0,e.collapsed_open="inplace";break;case"tiles_overlay":e.compact=!0,e.collapsed_open="overlay";break;case"tiles_popup":e.compact=!0,e.collapsed_open="popup";break;default:break}return e}function X1(t){return t==="full"?"full":t==="full_title"||t==="title_full"?"title":"tiles"}var A3=globalThis.__wsfcHost?.["src/card/alerts.js"];if(!A3)throw new Error("wsfc-editor.js: the card did not provide src/card/alerts.js; update every file of the card together");var{activeAlerts:O6,alertSources:l3,alertStyles:y6,alertsBar:k6,alertsEntity:T6,findAlertsEntity:F6}=A3;var d3=globalThis.__wsfcHost?.["src/card/icons.js"];if(!d3)throw new Error("wsfc-editor.js: the card did not provide src/card/icons.js; update every file of the card together");var{OPEN_ICONS_FULL:s3,OPEN_ICONS_SMALL:p3,openIcon:B6}=d3;var m3=globalThis.__wsfcHost?.["src/card/resolve.js"];if(!m3)throw new Error("wsfc-editor.js: the card did not provide src/card/resolve.js; update every file of the card together");var{deviceEntities:S2,entityValue:J1,findHealthEntity:R6,findStationEntity:E6,healthDevices:D6,integrationOf:s1,metricChain:W6,metricSensor:c3,metricValue:N6,pick:z6,sourceDefault:v3,stationDeviceEntities:u3,stationDevices:I6,stationStatus:G6}=m3;var x3="__other__",w1=class extends z{_name(C){let H=this.hass?.states?.[C],e=H?.attributes?.friendly_name||C,L=H&&!["unknown","unavailable"].includes(H.state)&&!C.startsWith("weather.")?` \xB7 ${H.state}${H.attributes?.unit_of_measurement?` ${H.attributes.unit_of_measurement}`:""}`:"";return`${e}${L}`}_emit(C){this._other=!1,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:C},bubbles:!1}))}render(){let C=this.value||"",H=[...new Set([...this.candidates||[],...C?[C]:[]])].filter(L=>L!==this.defaultEntity||C===L),e=this.defaultLabel||(this.defaultEntity?`Default \u2014 ${this._name(this.defaultEntity)}`:"Default \u2014 none found");return i`
      <div class="row">
        <select class=${C?"":"def"} aria-label=${this.label||"Entity"} @change=${L=>{let o=L.target.value;if(o===x3){this._other=!0,L.target.value=C;return}this._emit(o)}}>
          <option value="" ?selected=${!C}>${e}</option>
          ${H.map(L=>i`<option value=${L} ?selected=${L===C}>${this._name(L)}</option>`)}
          <option value=${x3}>Other entity…</option>
        </select>
        ${C?i`<button type="button" title="Use the default sensor" @click=${()=>this._emit("")}>Default</button>`:u}
      </div>
      ${this._other?i`<div class="picker"><ha-form .hass=${this.hass} .data=${{e:C}} .schema=${[{name:"e",selector:{entity:this.domain?{domain:this.domain}:{}}}]}
            .computeLabel=${()=>"Choose an entity"} @value-changed=${L=>{L.stopPropagation();let o=L.detail.value?.e;o&&this._emit(o)}}></ha-form></div>`:u}
    `}};E(w1,"properties",{hass:{attribute:!1},value:{},defaultEntity:{attribute:!1},defaultLabel:{attribute:!1},candidates:{attribute:!1},domain:{},label:{},_other:{state:!0}}),E(w1,"styles",D`
    :host { display: block; min-width: 0; }
    .row { display: flex; gap: 6px; align-items: center; min-width: 0; }
    select { flex: 1; min-width: 0; font: inherit; font-size: 12px; padding: 5px 8px; border-radius: 6px; border: 1px solid var(--ltek-c-border, #444); background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color); }
    select.def { color: var(--secondary-text-color); }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; padding: 2px 4px; font: inherit; font-size: 11px; white-space: nowrap; }
    button:hover { color: var(--primary-color); }
    .picker { margin-top: 4px; }
  `);customElements.get("wsfc-entity-select")||customElements.define("wsfc-entity-select",w1);var n7=[["temperature","Temperature"],["apparent_temperature","Feels like"],["dew_point","Dew point"],["humidity","Humidity"],["pressure","Pressure"],["wind_speed","Wind speed"],["wind_gust_speed","Wind gust"],["wind_bearing","Wind direction"],["uv_index","UV index"],["solar_radiation","Solar radiation"],["illuminance","Illuminance"],["precipitation","Rain rate"],["visibility","Visibility"],["cloud_coverage","Cloud cover"],["ozone","Ozone"]],C2=t=>typeof t=="string"&&t.startsWith("device:"),b1=class extends z{constructor(){super(),this._open=new Set}get _sources(){let C=this.config?.metric_sources||{};return Array.isArray(C.sources)?C.sources.filter(H=>H?.ref).map(H=>({ref:H.ref,overrides:{...H.overrides||{}},disabled:!!H.disabled})):this.config?.entity?[{ref:this.config.entity,overrides:{}}]:[]}_station(C){return{entity:this.config?.entity,metric_sources:{...this.config?.metric_sources||{},sources:C}}}_commit(C){let H=C.filter(A=>A?.ref).map(A=>{let m=Object.fromEntries(Object.entries(A.overrides||{}).filter(([,p])=>p));return{ref:A.ref,...Object.keys(m).length?{overrides:m}:{},...A.disabled?{disabled:!0}:{}}}),e={...this.config?.metric_sources||{}};delete e.primary,delete e.fallback,delete e.custom,delete e.device_map,H.length?e.sources=H:delete e.sources;let L=A=>(this.hass?.states?.[A]?.attributes?.supported_features&7)!==0,o=A=>A.map(m=>m.ref).filter(m=>typeof m=="string"&&m.startsWith("weather.")),a=o(H.filter(A=>!A.disabled)),d=o(H),l=a.find(L)||a[0]||d.find(L)||d[0]||this.config?.entity;this.dispatchEvent(new CustomEvent("sources-changed",{detail:{entity:l,metric_sources:Object.keys(e).length?e:void 0}}))}_info(C){let H=this.hass;if(C2(C)){let L=H?.devices?.[C.slice(7)],o=S2(H,C.slice(7))[0];return{icon:"mdi:access-point",name:L?.name_by_user||L?.name||C.slice(7),kind:"Station device",sub:[L?.manufacturer,L?.model].filter(Boolean).join(" "),integ:s1(H,o)}}let e=H?.states?.[C];return C.startsWith("weather.")?{icon:"mdi:weather-partly-cloudy",name:e?.attributes?.friendly_name||C,kind:"Weather entity",sub:"forecast + condition",integ:s1(H,C)}:{icon:"mdi:eye-outline",name:e?.attributes?.friendly_name||C,kind:"Sensor",sub:C,integ:s1(H,C)}}_candidates(C,H){let e=this.hass;if(!C2(C))return[];let L=H&&e.states[H]?.attributes?.unit_of_measurement,o=C.slice(7),a=e.devices?.[o]?.config_entries||[];return[...new Set([o,...Object.entries(e.devices||{}).filter(([,l])=>(l.config_entries||[]).some(A=>a.includes(A))).map(([l])=>l)])].flatMap(l=>S2(e,l)).filter(l=>l.startsWith("sensor.")&&e.states[l]?.attributes?.unit_of_measurement&&(!L||e.states[l].attributes.unit_of_measurement===L)).sort()}render(){if(!this.hass)return u;let C=this._sources,H=this._station(C),e=C.some(L=>L.ref.startsWith("weather.")&&!L.disabled);return i`
      <div class="list">
        ${C.map((L,o)=>this._source(L,o,C,H))}
      </div>
      ${e?u:i`<p class="warn">Add a weather entity (e.g. OpenWeatherMap) — it supplies the forecast and condition.</p>`}
      ${this._adding?this._addForm(C):i`<button class="add" type="button" @click=${()=>this._adding=!0}><ha-icon icon="mdi:plus"></ha-icon>Add source</button>`}
    `}_source(C,H,e,L){let o=this._info(C.ref),a=this._open.has(C.ref),d=n7.map(([p,x])=>{let Z=v3(L,this.hass,C.ref,p),b=C.ref.startsWith("weather.")?this.hass.states[C.ref]?.attributes?.[p]!=null:!!Z;return{k:p,label:x,def:C.ref.startsWith("weather.")?b?C.ref:null:Z,ov:C.overrides[p]||"",has:b||!!C.overrides[p]}}),l=d.filter(p=>p.has).length,A=p=>{let x=e.map(Z=>({...Z,overrides:{...Z.overrides}}));p(x),this._commit(x)},m=()=>{let p=new Set(this._open);p.has(C.ref)?p.delete(C.ref):p.add(C.ref),this._open=p};return i`<div class="src ${a?"open":""} ${C.disabled?"off":""}">
      <div class="hd" @click=${m} role="button" tabindex="0" aria-expanded=${String(a)} @keydown=${p=>(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),m())}>
        <span class="rank">${H+1}</span>
        <ha-icon class="lead" icon=${o.icon}></ha-icon>
        <div class="tt">
          <div class="nm">${o.name}${C.disabled?i` <span class="tag">hidden</span>`:u}</div>
          <div class="sb"><span class="pill">${o.kind}</span>${o.integ?i`<span class="pill integ">${o.integ}</span>`:u}<span>${l} value${l===1?"":"s"}</span></div>
        </div>
        <span class="acts" @click=${p=>p.stopPropagation()}>
          <button class="ib" title="Higher priority" ?disabled=${H===0} @click=${()=>A(p=>[p[H-1],p[H]]=[p[H],p[H-1]])}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
          <button class="ib" title="Lower priority" ?disabled=${H===e.length-1} @click=${()=>A(p=>[p[H+1],p[H]]=[p[H],p[H+1]])}><ha-icon icon="mdi:arrow-down"></ha-icon></button>
          <button class="ib" title=${C.disabled?"Use this source":"Skip this source"} @click=${()=>A(p=>p[H].disabled=!p[H].disabled)}><ha-icon icon=${C.disabled?"mdi:eye-off":"mdi:eye"}></ha-icon></button>
          <button class="ib del" title="Remove source" @click=${()=>A(p=>p.splice(H,1))}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
        </span>
        <ha-icon class="chev" icon=${a?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${a?i`<div class="bd">
            ${o.sub?i`<div class="meta">${o.sub}</div>`:u}
            <div class="tbl">
              ${d.filter(p=>p.has||C2(C.ref)).map(p=>{let x=p.ov||p.def,Z=x&&!x.startsWith("weather.")?J1(this.hass,x):null,b=x?.startsWith("weather.")?this.hass.states[x]?.attributes?.[p.k]:null;return i`<span class="k">${p.label}</span>
                  <wsfc-entity-select .hass=${this.hass} .value=${p.ov} .defaultEntity=${p.def}
                    .defaultLabel=${C.ref.startsWith("weather.")&&!p.ov?p.def?"Default \u2014 attribute":"Default \u2014 none":void 0}
                    .candidates=${this._candidates(C.ref,p.def)} label=${p.label}
                    @value-changed=${T=>A(F=>F[H].overrides[p.k]=T.detail.value||void 0)}></wsfc-entity-select>
                  <span class="v">${Z?`${Z.value} ${Z.unit}`:b!=null?String(b):""}</span>`})}
            </div>
            ${C.ref.startsWith("weather.")?i`<p class="hint">Only values this entity has are listed. Forecasts always come from the highest weather entity.</p>`:u}
          </div>`:u}
    </div>`}_addForm(C){let H=e=>{if(!e||C.some(a=>a.ref===e)){this._adding=!1;return}this._adding=!1;let L=C.slice(),o=L.findIndex(a=>a.ref.startsWith("weather."));C2(e)&&o>=0?L.splice(o,0,{ref:e,overrides:{}}):L.push({ref:e,overrides:{}}),this._commit(L)};return i`<div class="addbox">
      <ha-form .hass=${this.hass} .data=${{d:""}} .schema=${[{name:"d",selector:{device:{}}}]} .computeLabel=${()=>"Station device (e.g. your Ecowitt gateway or sensor)"}
        @value-changed=${e=>{e.stopPropagation(),H(e.detail.value?.d&&`device:${e.detail.value.d}`)}}></ha-form>
      <ha-form .hass=${this.hass} .data=${{e:""}} .schema=${[{name:"e",selector:{entity:{}}}]} .computeLabel=${()=>"\u2026or a weather entity or single sensor"}
        @value-changed=${e=>{e.stopPropagation(),H(e.detail.value?.e)}}></ha-form>
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
  `);customElements.get("wsfc-sources-editor")||customElements.define("wsfc-sources-editor",b1);var f3=globalThis.__wsfcHost?.["src/panels/graph.js"];if(!f3)throw new Error("wsfc-editor.js: the card did not provide src/panels/graph.js; update every file of the card together");var{PRESET_SERIES:g2,WsfcGraph:C8}=f3;var Z3=globalThis.__wsfcHost?.["src/panels/statistics.js"];if(!Z3)throw new Error("wsfc-editor.js: the card did not provide src/panels/statistics.js; update every file of the card together");var{SGCC_PRESETS:h3,STAT_PRESETS:S3,statisticsCard:V8,statisticsEngine:g3}=Z3;var p1=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],A7=t=>/^#[0-9a-f]{6}$/i.test(t||"")?t:/^#[0-9a-f]{3}$/i.test(t||"")?"#"+t.slice(1).split("").map(C=>C+C).join(""):"#888888";function l7(t){if(t.type==="statistics"){let C=t.preset||"temps",H=h3[C]||{};return((Array.isArray(t.metrics)&&t.metrics.length?t.metrics:H.metrics||S3[C]?.metrics)||[]).map((L,o)=>({metric:L,color:t.colors?.[L],defColor:H.series?.[L]?.color||I[L]?.color||p1[o%p1.length],entity:t.entity_overrides?.[L]||"",key:"map"}))}return Array.isArray(t.series)&&t.series.length?t.series.map((C,H)=>({metric:C.metric,idx:H,color:C.color,defColor:I[C.metric]?.color||p1[H%p1.length],entity:C.entity||"",label:C.label,key:"list"})):(g2[t.type]||g2.graph).map((C,H)=>({metric:C.metric,color:t.colors?.[C.metric],defColor:C.color||I[C.metric]?.color||p1[H%p1.length],entity:t.entities?.[C.metric]||"",key:"map"}))}var _1=class extends z{_set(C,H,e){let L=A1(this.panel);if(C.key==="list")L.series[C.idx]=K({...L.series[C.idx],[H]:e||void 0});else{let o=H==="color"?"colors":L.type==="statistics"?"entity_overrides":"entities";L[o]=K({...L[o]||{},[C.metric]:e||void 0}),Object.keys(L[o]).length||delete L[o]}this.dispatchEvent(new CustomEvent("panel-changed",{detail:{panel:L}}))}_candidates(C){let H=C&&this.hass.states[C]?.attributes?.unit_of_measurement;return u3(this.station,this.hass).filter(e=>e.startsWith("sensor.")&&(!H||this.hass.states[e]?.attributes?.unit_of_measurement===H))}render(){if(!this.hass||!this.panel)return u;let C=l7(this.panel),H=this.panel.type!=="statistics"||g3(this.panel)==="sgcc";return i`<div class="tbl">
      <span class="h">Series</span><span class="h">Color</span><span class="h">Sensor</span>
      ${C.map(e=>{let L=I1(e.metric,this.station,this.hass),o=e.color||e.defColor;return i`<span class="k">${e.label||I[e.metric]?.label||e.metric||"Series"}</span>
          <span class="c">
            ${H?i`<input type="color" .value=${A7(o)} title="Line color" aria-label="Line color" @change=${a=>this._set(e,"color",a.target.value)} />
                ${e.color?i`<button type="button" title="Default color" @click=${()=>this._set(e,"color","")}>↺</button>`:u}`:i`<span class="na" title="Home Assistant's Statistics graph picks its own colors">auto</span>`}
          </span>
          <wsfc-entity-select .hass=${this.hass} .value=${e.entity} .defaultEntity=${L} .candidates=${this._candidates(L)} label=${`${e.metric} sensor`}
            @value-changed=${a=>this._set(e,"entity",a.detail.value)}></wsfc-entity-select>`})}
    </div>`}};E(_1,"properties",{hass:{attribute:!1},panel:{attribute:!1},station:{attribute:!1}}),E(_1,"styles",D`
    .tbl { display: grid; grid-template-columns: minmax(80px, auto) auto minmax(0, 1fr); gap: 6px 10px; align-items: center; font-size: 12px; }
    .h { font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-muted, #888); }
    .k { color: var(--ltek-c-label, #ccc); }
    .c { display: flex; align-items: center; gap: 2px; }
    input[type="color"] { width: 30px; height: 24px; padding: 0; border: 1px solid var(--ltek-c-border, #444); border-radius: 6px; background: transparent; cursor: pointer; }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; font-size: 14px; padding: 0 2px; }
    .na { font-size: 11px; color: var(--ltek-c-muted, #888); }
  `);customElements.get("wsfc-series-editor")||customElements.define("wsfc-series-editor",_1);var H2=[["sunny","Sunny"],["clear-night","Clear night"],["partlycloudy","Partly cloudy"],["cloudy","Cloudy"],["fog","Fog"],["rainy","Rainy"],["pouring","Pouring"],["lightning","Lightning"],["lightning-rainy","Lightning and rain"],["hail","Hail"],["snowy","Snowy"],["snowy-rainy","Sleet (snow and rain)"],["windy","Windy"],["windy-variant","Windy with clouds"],["exceptional","Exceptional"]],O1=class extends z{render(){let C=this.config||{},H=this.hass,e=H?.states?.[C.entity],L=this.condition||e?.state||"partlycloudy",o=this.time==="night"||this.time!=="day"&&L==="clear-night",a=e?.attributes||{},d=[C.anim_low_power?M3:"",...o3(C)].filter(Boolean).join(";"),l=(H2.find(([A])=>A===L)||[,L])[1];return i`<div class="box" style=${d}>
      <wsfc-animation-provider .hass=${H} .wsfcNight=${o}
        .weatherEntity=${{...e||{entity_id:C.entity,attributes:{}},state:L}}
        .config=${{entity:C.entity,show_condition_effects:C.background_effects??!0,show_moon_phase:C.background_moon_phase??!0,fog_density:C.fog_density,wind_density:C.wind_density,lightning_interval:C.lightning_interval,lightning_intensity:C.lightning_intensity,lightning_bolts:C.lightning_bolts}}
        .currentForecast=${{wind_speed:a.wind_speed,wind_bearing:a.wind_bearing}}></wsfc-animation-provider>
      <span class="tag">${l} · ${o?"Night":"Day"}</span>
    </div>`}};E(O1,"properties",{hass:{attribute:!1},config:{attribute:!1},condition:{},time:{}}),E(O1,"styles",D`
    :host { display: block; }
    .box { position: relative; height: 200px; border-radius: var(--ltek-radius, 12px); overflow: hidden;
      background: var(--ha-card-background, var(--card-background-color, #1c1c1c)); border: 1px solid var(--divider-color, rgba(127,127,127,.25)); }
    .tag { position: absolute; left: 10px; bottom: 8px; z-index: 2; font-size: var(--ltek-fs-small, 12px); font-weight: 600; padding: 3px 9px; border-radius: 999px;
      background: rgba(0, 0, 0, 0.45); color: #fff; }
  `);customElements.get("wsfc-bg-preview")||customElements.define("wsfc-bg-preview",O1);var w3=globalThis.__wsfcHost?.["src/card/condition.js"];if(!w3)throw new Error("wsfc-editor.js: the card did not provide src/card/condition.js; update every file of the card together");var{clearSkyRadiation:m8,conditionSummary:b3,deriveHass:c8,ensureSolarScale:v8,lightDetails:u8,resetSolarScale:x8,skyClearness:f8,solarScale:Z8,stationCondition:h8,sunElevation:S8}=w3;var d7=["temperature","apparent_temperature","dew_point","humidity","pressure","wind_speed","wind_gust_speed","wind_bearing","uv_index","solar_radiation","illuminance","precipitation"],s7={wind_bearing:"Wind direction",precipitation:"Rain rate"},L2=[{name:"condition_source",label:"Current condition from",selector:{select:{options:[{value:"entity",label:"The weather entity"},{value:"station",label:"Your station's readings (the entity fills in the rest)"}]}},default:"entity",helper:"With the station: rain rate, solar radiation (or light), humidity, wind, temperature and the lightning sensor decide sunny, partly cloudy, cloudy, rain, snow, fog, windy and lightning. The hero, bulletin and background follow it. At night, and when the sun is low, the entity's view of the sky is used."},{name:"station_solar_scale",label:"Clear-sky calibration",when:t=>t.condition_source==="station",selector:{number:{min:20,max:160,step:5,mode:"slider",unit_of_measurement:"%"}},helper:"Auto (not set): learned from the sensor's last 10 days against the clear-sky model, so it's judged against its own clear days. Set it to force a value: lower if clear days read as cloudy, higher if cloudy days read as sunny."},{name:"station_windy_mph",label:"Windy from",when:t=>t.condition_source==="station",selector:{number:{min:10,max:60,step:1,mode:"slider",unit_of_measurement:"mph"}},default:25},{name:"station_pouring_inh",label:"Pouring from",when:t=>t.condition_source==="station",selector:{number:{min:.1,max:1,step:.05,mode:"slider",unit_of_measurement:"in/h"}},default:.3}],F1=[["Background",[{name:"background",selector:{select:{options:[{value:"none",label:"None (theme)"},{value:"animated",label:"Animated weather \u2014 the hero's animation behind the whole card"},{value:"image",label:"Image \u2014 upload one or use a URL"}]}},helper:"With an animated or image background, panels become see-through and the hero stops drawing its own."}]],["Animation",[{name:"background_effects",label:"Animation effects",when:t=>t.background==="animated",selector:{select:{multiple:!0,options:[["rain","Rain"],["snow","Snow"],["lightning","Lightning"],["sky","Sky"],["moon","Moon"],["sun","Sun"],["cloud","Clouds"],["fog","Fog"],["hail","Hail"],["wind","Wind gusts"],["exceptional","Unusual weather glow"]].map(([t,C])=>({value:t,label:C}))}},default:["rain","snow","lightning","sky","moon","sun","cloud","fog","hail","wind","exceptional"],helper:"Which effects the weather animation draws. At night it shows the dark sky and the moon instead of the sun. Rain, snow and storms get an overcast sky and cloud deck (Sky, Clouds)."},{name:"background_moon_phase",label:"Show moon phase",when:t=>t.background==="animated",selector:{boolean:{}},default:!0,helper:"Shade the night-time moon to the current lunar phase (off: a full moon)."},{name:"anim_low_power",label:"Low-power animation",when:t=>t.background!=="image",selector:{boolean:{}},default:!1,helper:"For tablets and other low-powered screens: no panel blur while the background animates, each cloud drawn once on its own, and simpler cloud edges. Smoother drift; clouds look a little softer."},{name:"anim_speed",label:"Overall speed",when:t=>t.background!=="image",selector:{number:{min:10,max:150,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Every animation at once (100% = normal, 50% = half as fast), for the card background and the hero's own animation. Per-effect speeds below multiply it."},...t3.map(([t,,C])=>({name:t,label:C,sub:"Per-effect speeds",subIcon:"mdi:speedometer",when:H=>H.background!=="image",selector:{number:{min:10,max:150,step:5,mode:"slider",unit_of_measurement:"%"}},default:100})),{name:"fog_density",label:"Fog density",when:t=>t.background==="animated"&&(t.background_effects??["fog"]).includes("fog"),selector:{number:{min:30,max:200,step:10,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"How thick the fog is: the number of mist banks and how much they hide."},{name:"lightning_interval",label:"Time between strikes",when:t=>t.background==="animated"&&(t.background_effects??["lightning"]).includes("lightning"),selector:{number:{min:2,max:90,step:1,mode:"slider",unit_of_measurement:"s"}},default:12,helper:"In storms: roughly how often the clouds light up (each strike comes at its own irregular time around this)."},{name:"lightning_bolts",label:"Lightning bolts",when:t=>t.background==="animated"&&(t.background_effects??["lightning"]).includes("lightning"),selector:{number:{min:0,max:100,step:5,mode:"slider",unit_of_measurement:"%"}},default:20,helper:"How many of the flashes drop a visible bolt from the cloud (the others light the clouds from inside)."},{name:"lightning_intensity",label:"Lightning intensity",when:t=>t.background==="animated"&&(t.background_effects??["lightning"]).includes("lightning"),selector:{number:{min:10,max:200,step:10,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"How brightly the clouds and the sky light up."},{name:"wind_density",label:"Wind density",when:t=>t.background==="animated"&&(t.background_effects??["wind"]).includes("wind"),selector:{number:{min:30,max:200,step:10,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"How many wisps of air blow across in windy weather."}]],["Image",[{name:"background_image",when:t=>t.background==="image",selector:{media:{accept:["image/*"],image_upload:!0}},helper:"Image background: upload a PNG, JPG, WEBP\u2026 or pick one from your media."},{name:"background_image_url",when:t=>t.background==="image",selector:{text:{type:"url"}},helper:"Image background: or an image URL (wins over the upload), e.g. /local/images/sky.jpg."},{name:"background_image_fit",when:t=>t.background==="image",selector:{select:{options:[{value:"cover",label:"Fill (crop to fit)"},{value:"contain",label:"Fit (whole image)"},{value:"tile",label:"Tile"}]}},default:"cover"},{name:"background_dim",when:t=>t.background==="image",selector:{number:{min:0,max:.9,step:.05,mode:"slider"}},default:.25,helper:"Image background: darken it so text stays readable (0 = off)."}]]],P1=[["Card",[{name:"title",selector:{text:{}},helper:"Optional title row above the panels."},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]],["Text & icons",[{name:"text_size",label:"Text size",selector:{number:{min:8,max:32,step:1,mode:"slider",unit_of_measurement:"px"}},default:14,helper:"Base text size for every panel (designed at 14 px): all their text grows or shrinks with it. A panel's own Text size (%) scales this."},{name:"icon_size",label:"Icon size",selector:{number:{min:12,max:64,step:1,mode:"slider",unit_of_measurement:"px"}},default:24,helper:"Base icon size for every panel (designed at 24 px). A panel's own Icon size (%) scales this."},{name:"_reset_sizes",kind:"action",label:"Every panel uses these sizes",helper:"Clears the Text size and Icon size set on single panels."}]],["Panel titles",[{name:"title_size",label:"Title text size",selector:{number:{min:8,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Not set: follows Text size (15 px at the default)."},{name:"title_icon_size",label:"Title icon size",selector:{number:{min:10,max:64,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Not set: follows Icon size (20 px at the default)."},...F5,{name:"_reset_titles",kind:"action",label:"Every panel uses these title colours",helper:"Clears the title colours set on single panels."}]],["Panels",[{name:"text_contrast",label:"Text contrast",selector:{select:{options:[{value:"off",label:"Off"},{value:"auto",label:"Auto \u2014 a soft halo behind text and icons"},{value:"strong",label:"Strong \u2014 an outline around text and icons"}]}},default:"off",helper:"Makes text and icons readable on any background (the animated sky, see-through panels): the halo is dark in a dark theme and light in a light one. Each panel can override it (Default Overrides)."},{name:"_reset_contrast",kind:"action",label:"Every panel uses this setting",helper:"Clears Text contrast set on single panels."},{name:"panel_opacity",selector:{number:{min:0,max:1,step:.05,mode:"slider"}},helper:"With a card background: panel opacity (0 = fully transparent, 1 = solid). Default 0.55."},{name:"panel_blur",selector:{number:{min:0,max:30,step:1,mode:"slider",unit_of_measurement:"px"}},when:t=>!t.anim_low_power,helper:"With a card background: blur behind panels. Default 6 (off with Low-power animation)."},{name:"panel_radius",selector:{number:{min:0,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Auto: your theme's card corner radius (shown above). Move the slider to set your own; \xD7 goes back to Auto."},{name:"panel_shadow",selector:{select:{options:[{value:"none",label:"None"},{value:"soft",label:"Soft"},{value:"medium",label:"Medium"},{value:"strong",label:"Strong"}]}},default:"none"},{name:"panel_border_width",selector:{number:{min:0,max:6,step:.5,mode:"slider",unit_of_measurement:"px"}},helper:"Border (default none)."},{name:"panel_border_color",selector:{text:{}},helper:"Not set: the theme's divider color."},{name:"panel_glow",selector:{boolean:{}},default:!1,helper:"A soft glow around each panel."},{name:"panel_glow_color",when:t=>!!t.panel_glow,selector:{text:{}},helper:"Not set: the border color, else the theme's primary color."},{name:"panel_glow_size",when:t=>!!t.panel_glow,selector:{number:{min:2,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},default:10}]]],e2=[["Alerts bar",[{name:"alerts_bar",label:"Show the Alerts bar",selector:{boolean:{}},default:!1,helper:"A thin row at the top of the card. It appears only while something needs attention and is hidden the rest of the time. Tap an alert to open its panel (Frost & heat watch, Lightning) or the alert's details."},{name:"_alerts_sources",kind:"info",when:t=>!!t.alerts_bar}]],["What it shows",[{name:"alerts_watch",label:"Heat and frost",when:t=>!!t.alerts_bar,selector:{boolean:{}},default:!0,helper:"From your station's temperature, feels-like, dew point and wind, and tonight's forecast low."},{name:"alerts_lightning",label:"Lightning nearby",when:t=>!!t.alerts_bar,selector:{boolean:{}},default:!0,helper:"From your station's lightning sensor (e.g. Ecowitt WH57): strikes within 10 mi in the last 30 minutes."},{name:"alerts_weather",label:"Weather alerts",when:t=>!!t.alerts_bar,selector:{boolean:{}},default:!0,helper:"Official watches and warnings from an alerts sensor, such as the NWS Alerts integration's."},{name:"alerts_entity",label:"Weather alerts sensor",when:t=>!!t.alerts_bar&&t.alerts_weather!==!1,selector:{entity:{domain:"sensor"}},helper:"Not set: the card uses the alerts sensor it finds (shown above). Choose one to use a different sensor."}]]],y3={_reset_contrast:["text_contrast"],_reset_sizes:["text_scale","icon_scale","icon_scale_all"],_reset_titles:["expanded_icon_color","expanded_text_color"]};function _3(t,C,H,e){return[{name:t,label:C,selector:{select:{options:[...H.map((L,o)=>({value:L,label:`mdi:${L}${o?"":" (default)"}`})),{value:"custom",label:"Custom icon\u2026"}]}},default:H[0],helper:e},{name:`${t}_custom`,label:"Custom icon",when:L=>L[t]==="custom",selector:{icon:{}},helper:"Any Home Assistant icon, e.g. mdi:arrow-expand-down."}]}var r2=[["Screen fit & sizing",[{name:"layout",selector:{select:{options:[{value:"auto",label:"Size to content"},{value:"fullscreen",label:"Full screen (fills the view below the header)"}]}}},{name:"screen_fit",label:"Screen fit",selector:{select:{options:[{value:"none",label:"Off \u2014 panels are their set heights; the page scrolls"},{value:"rows",label:"Share the screen height \u2014 panels grow to fit their content"},{value:"strict",label:"Exact heights \u2014 content scrolls inside its panel"},{value:"scale",label:"Auto-fit \u2014 exact heights, and the contents scale to the screen"}]}},default:"rows",helper:"Share and Exact apply in Full screen. Auto-fit takes the layout and sizes you set as the design for the Screen guide's size (Layout Map \u2192 Screen guide) and scales each panel's contents to every other screen, smaller where they'd still overflow."},{name:"panel_fill",label:"Panels fill their space",selector:{boolean:{}},default:!1,helper:"Each panel with a set height scales its contents up or down to the largest size that fits the panel, between Smallest and Largest content scale. Text size, Icon size and the other size sliders then change the proportions, and the panel still fits. Each panel can turn it on or off (Size and Scaling \u2192 Fill the panel). The hero and Wind fit themselves; maps aren't scaled."},{name:"auto_fit_min",label:"Smallest content scale",when:t=>t.screen_fit==="scale"||!!t.panel_fill,selector:{number:{min:30,max:100,step:5,mode:"slider",unit_of_measurement:"%"}},default:60,helper:"Below this a panel scrolls instead, so text stays readable."},{name:"auto_fit_max",label:"Largest content scale",when:t=>t.screen_fit==="scale"||!!t.panel_fill,selector:{number:{min:100,max:250,step:5,mode:"slider",unit_of_measurement:"%"}},default:150,helper:"On screens bigger than the design."},{name:"panel_overflow",label:"When a panel's content doesn't fit",when:t=>!(t.layout==="fullscreen"&&["strict","scale"].includes(t.screen_fit)),selector:{select:{options:[{value:"grow",label:"Grow \u2014 the panel gets taller (and its row with it)"},{value:"scroll",label:"Scroll \u2014 the panel keeps its height, with a scroll bar inside"}]}},default:"grow",helper:"For panels with a set height (Height above 0); each panel can override this. Scroll locks every panel to its size in any layout; Strict fit does the same in full screen."},{name:"layout_gaps",label:"Gaps between panels",selector:{select:{options:[{value:"close",label:"Close up \u2014 panels move up into empty space"},{value:"keep",label:"Keep \u2014 panels stay where they're placed"}]}},default:"close",helper:"After you move a panel in the Layout Map, or when one is hidden (by its button, or when it has nothing to show)."},{name:"layout_size",selector:{select:{options:[{value:"auto",label:"Automatic (from the card's width)"},{value:"wide",label:"Wide \u2014 desktop layout"},{value:"medium",label:"Medium \u2014 tablet layout"},{value:"narrow",label:"Narrow \u2014 phone layout (stacked)"}]}},helper:"In a Sections view the card is only as wide as its section; widen the section or use a Panel view for the desktop layout."},{name:"row_height",selector:{number:{min:40,max:300,mode:"box",unit_of_measurement:"px"}},helper:"Height of one row unit (default 110)."},{name:"gap",selector:{number:{min:0,max:32,mode:"box",unit_of_measurement:"px"}},helper:"Space between panels (default 12)."}]]],t2=[["Collapsing and opening",[{name:"collapsed_view",label:"Panels set up with a collapse button collapse to",selector:{select:{options:[{value:"minimal",label:"Minimal \u2014 the title and a line of info (e.g. 7 strikes today)"},{value:"compact",label:"Compact \u2014 one row of tiles with all the data"}]}},default:"minimal",helper:"For panels whose YAML has collapsible: true without a view of their own. Panels set with Panel View don't use this."},{name:"collapsed_open",label:"Collapsed panels open (card default)",selector:{select:{options:[{value:"auto",label:"Automatic \u2014 over the other panels in full screen or Auto-fit, else in place"},{value:"inplace",label:"In place \u2014 the panel grows, the others move"},{value:"overlay",label:"Over the other panels \u2014 nothing moves; tap outside or Esc to close"},{value:"popup",label:"As a pop-up"}]}},default:"auto",helper:"Each panel can override this (Collapse \u2192 Opens)."},..._3("open_icon_small","Small pop-over icon",p3,"On a collapsed panel that opens over the others."),..._3("open_icon_full","Full-size icon",s3,"Expand to the whole card, tap-to-open tiles and panels that open as a pop-up."),{name:"collapse_title_tap",label:"Tap the title to collapse / expand",selector:{boolean:{}},default:!0,helper:"For panels with Collapse button on (each panel can override this)."},{name:"show_collapse_hint",label:"Hint under the title while collapsed",selector:{boolean:{}},default:!1,helper:'e.g. "Tap title to show" (off by default: the open button already says it).'},{name:"collapse_hint",label:"Hint text",when:t=>!!t.show_collapse_hint,selector:{text:{}},helper:'Default "Tap title to show".'},{name:"collapsed_info",label:"Info in the header while collapsed",selector:{select:{options:[{value:"summary",label:"The panel's summary (e.g. strikes today, rain today)"},{value:"off",label:"None"}]}},default:"summary"},...k5]]],k1=[{name:"remember",selector:{boolean:{}},default:!0,helper:"Keep which panels were shown or hidden with the panel buttons after a refresh, in each browser. Off: every load starts from the panels' Shown setting (the eye icon)."}],p7=[...L2,...[...F1,...P1,...e2,...r2,...t2].flatMap(([,t])=>t)].filter(t=>!t.kind),J={layout:"auto",panel_bar:!0,remember:!0,screen_fit:"rows",layout_size:"auto",background:"none",panel_opacity:.55,panel_blur:6},V2={entity:"Weather entity",title:"Title",subtitle:"Subtitle",icon:"Icon",layout:"Layout",panel_bar:"Panel buttons",remember:"Remember Panel Button States",station_device:"Weather station device",layout_size:"Layout size",fit_strict:"Strict fit to screen dimensions",row_height:"Row height",gap:"Gap",span:"Width",rows:"Height",display:"Display",in_bar:"Panel button",tile_background:"Panel background",show:"Shown",metric:"Metric",label:"Label",color:"Color",digits:"Decimals",chart:"Sparkline",hours:"Sparkline hours",show_minmax:"Show today's min/max",series:"Series",ranges:"Range buttons",range:"Default range",show_readings:"Show current readings",left_min:"Left axis min",left_max:"Left axis max",right_min:"Right axis min",right_max:"Right axis max","entities.temperature":"Temperature sensor","entities.dew_point":"Dew point sensor","entities.humidity":"Humidity sensor","entities.wind_speed":"Wind speed sensor","entities.wind_gust_speed":"Gust sensor","entities.wind_bearing":"Wind direction sensor",view:"Default view",show_chart:"Show speed/gust chart",rose_bins:"Rose speed bins",radar:"Radar loop",base_map:"Base map",zoom:"Zoom",latitude:"Latitude",longitude:"Longitude",radar_opacity:"Radar opacity",owm_api_key:"OpenWeatherMap API key",owm_layers:"OpenWeatherMap layers",owm_default:"Layer shown first",owm_opacity:"Layer opacity",base_map_url:"Custom tile URL",base_map_attribution:"Custom tile attribution",day_offset:"Day",icon_size:"Icon size",show_moon:"Show moon",show_sun:"Show sun",attribute:"Text attribute",alerts_entity:"Alerts sensor",card:"Card configuration",show_status:"Show station status",show_devices:"Show device names",overlay:"Layer",model:"Forecast model",level:"Altitude",wind_unit:"Wind unit",marker:"Location pin",preset:"Graph",engine:"Graph card",days_to_show:"Days",period:"Resolution",chart_type:"Chart type",stat_types:"Values",show_arc:"Sun arc",show_sky:"Sky gradient & forecast row",timeframe:"Time window",anchor:"Now is",moon:"Moon at night",moon_phase:"Draw the moon phase",background:"Card background",panel_opacity:"Panel opacity",panel_blur:"Panel blur",sky_bar:"Sky Bar in the hero",show_facts:"Show sun times",moon_size:"Moon size",direction:"Direction",min_width:"Minimum width",grow:"Grow",show_bar:"Panel buttons here",background_image:"Background image",background_image_url:"Background image URL",background_image_fit:"Image fit",background_dim:"Darken image",panel_radius:"Corner radius",panel_shadow:"Shadow",panel_border_width:"Border width",panel_border_color:"Border color",panel_glow:"Glow",panel_glow_color:"Glow color",panel_glow_size:"Glow size",rose_engine:"Wind rose",fit:"Fit to the panel",show_view_buttons:"View buttons",readings_position:"Readings",chart_position:"Chart position",show_legend:"Rose legend",wr_bars:"Speed bars",wr_corners:"Corner info",wr_stats:"Min / avg / max",wr_buttons:"Buttons",wr_buttons_position:"Button position",wr_period:"Default period",wr_beaufort:"Bar scale",wr_arrow:"Direction arrow",windrose_chart:"Chart with the Wind Rose Card",compass_arrow_size:"Pointer size",compass_arrow_color:"Pointer color",wr_arrow_size:"Arrow size",wr_arrow_color:"Arrow color",wr_speed_arrows:"Speed arrows",wr_speed_arrow_size:"Speed arrow size",stats_items:"Show",stats_align:"Alignment",chart_legend:"Chart legend",dial_scale:"Size",wr_scale:"Size",corner_speed:"Speed",corner_direction:"Direction",corner_gust:"Gust",corner_label_size:"Label size",corner_value_size:"Value size",corner_color:"Text color",stats_size:"Text size",stats_weight:"Text weight",stats_color:"Text color",windrose_preset:"Wind Rose Card preset",windrose:"Wind Rose Card options",auto_scale:"Set scale to Auto",show_time:"Show the time",show_seconds:"Seconds",time_format:"Time format",show_date:"Show the date",date_format:"Date format",align:"Alignment",auto_size:"Auto size",time_size:"Time size",date_size:"Date size",time_weight:"Time weight",date_color:"Date color",scale:"Auto scaling",device:"Pollen location",hide_off_season:"Hide out-of-season species",hide_when_off_season:"Hide the panel out of season",hide_when_none:"Hide the panel when all are None",species:"Species",max_rows:"Rows",show_tomorrow:"Tomorrow's trend",show_season:"Season strip",location:"Town / area text",seasons:"Season months",entities:"Sensors",pollutants:"Pollutants",show_scale:"AQI scale",show_aqi:"Show the AQI",extra:"More readings",bar_height:"Bar height",source:"Source text",show_source:"Show the source",show_location:"Show the town / area",hide_none:"Hide species at None",show_nothing:'Show the "nothing in the air" text',nothing_text:'"Nothing in the air" text',"entities.aqi":"AQI sensor","entities.pm2_5":"PM2.5 sensor","entities.pm10":"PM10 sensor","entities.ozone":"Ozone sensor","entities.co2":"CO\u2082 sensor"},k3=(t,C)=>C.split(".").reduce((H,e)=>H==null?H:H[e],t);function m7(t,C,H){let e=C.split("."),L=t;e.slice(0,-1).forEach(a=>L=L[a]=L[a]&&typeof L[a]=="object"?{...L[a]}:{});let o=e[e.length-1];H===void 0||H===""||H===null||Array.isArray(H)&&!H.length?delete L[o]:L[o]=H}function y1(t,C,H={}){let e={};for(let L of C){let o=k3(t,L.name);e[L.name]=o!==void 0?o:H[L.name]!==void 0?H[L.name]:L.default}return e}function w2(t,C,H,e={}){let L=A1(t);for(let o of C){let a=H[o.name],d=e[o.name]!==void 0?e[o.name]:o.default;d!==void 0&&JSON.stringify(a)===JSON.stringify(d)&&(a=void 0),m7(L,o.name,a)}return K(L)}var O3={air_quality:[["Tablet compact",{layout:"tiles",show_scale:!1,show_location:!1,show_source:!1,content_scale:85,content_width:70,content_height:60,compact:null}],["Tiles row",{compact:!0}],["Full detail",{layout:"scale",show_scale:null,show_location:null,show_source:null,content_scale:null,content_width:null,content_height:null,compact:null}]],pollen:[["Tablet compact",{hide_when_off_season:!0,hide_when_none:!0,show_season:!1,show_source:!1,show_location:!1,content_height:60,compact:null}],["Tiles row",{compact:!0}],["Full detail",{show_season:null,show_source:null,show_location:null,content_height:null,compact:null}]],rain:[["Essentials",{show_rows:["rain_rate","rain_today","rain_24h","rain_event"],show_normal:!1,compact:null}],["Everything",{show_rows:["rain_rate","rain_hour","rain_today","rain_24h","rain_event","rain_week","rain_month","rain_year","last_rain"],show_normal:null,compact:null}],["Tiles row",{compact:!0}]],garden:[["Frost only",{show_soil:!1,show_water:!1,show_gdd:!1}],["Everything",{show_outlook:null,show_season:null,show_gdd:null,show_soil:null,show_water:null}]],records:[["Area only",{show_station:!1}],["Today only",{show_month:!1,show_all_time:!1}],["Everything",{show_station:null,show_today:null,show_month:null,show_all_time:null}]],lightning:[["Quiet",{hide_when_zero:!0,show_battery:!1,show_note:!1}],["Everything",{hide_when_zero:null,show_battery:null,show_note:null}]],wind:[["Rose, chart on demand",{view:"rose",chart_mode:"popover"}],["Compass and chart",{view:"compass",chart_mode:null}]],radar:[["Light on tablets",{start_paused:!0,collapsible:!0,collapsed:!0}],["Live",{start_paused:null,collapsed:null}]],wind_map:[["Light on tablets",{start_paused:!0,collapsible:!0,collapsed:!0}],["Live",{start_paused:null,collapsed:null}]],frost_watch:[["Tiles row",{compact:!0}],["Full",{compact:null}]],vpd:[["Number only",{show_plant:!1,show_scale:!1,show_note:!1}],["Full",{show_plant:null,show_scale:null,show_note:null,show_advice:null}]]},c7=t=>t.type==="metric"?I[t.metric]?.label||"Metric":(W(t)?.label||t.type).replace(/ \(.*\)$/,"");function o1(t,C,H={}){let e=k3(t,C.name);if(e===void 0)return!1;let L=H[C.name]!==void 0?H[C.name]:C.default;return L===void 0||JSON.stringify(e)!==JSON.stringify(L)}var T3=["span","rows","display","span_medium","span_narrow","rows_compact"];function v7(t,C){let H=t[C],e=t[C+1],L=d=>{let l={...d};for(let A of T3)delete l[A];return l},o=t.slice();if(e.type==="stack"&&e.direction==="vertical"){let d=N(H)+N(e);return o.splice(C,2,K({...e,span:Math.max(G(H),G(e)),rows:d||void 0,panels:[L(H),...e.panels||[]]})),o}let a=N(H)+N(e);return o.splice(C,2,K({type:"stack",direction:"vertical",span:Math.max(G(H),G(e)),rows:a||void 0,panels:[L(H),L(e)]})),o}function F3(t,C,H){let e={...t[H]};for(let o of T3)delete e[o];let L=t.slice();return L[C]={...L[C],panels:[...L[C].panels||[],e]},L.splice(H,1),L}function P3(t,C,H){let e=t[C],L=(e.panels||[]).slice(),[o]=L.splice(H,1),a=t.slice(),d=K({...o,span:G(e),rows:void 0});return L.length?a.splice(C,1,{...e,panels:L},d):a.splice(C,1,d),a}function u7(t){let C=W(t);return{span:C.span,rows:C.rows,display:"grid",in_bar:z1({...t,in_bar:void 0}),show_title:c2.has(t.type)?!!t.title:!0}}function b2(t){let C=W(t);return t.title?t.title:t.type==="metric"?I[t.metric]?.label||t.label||"Metric tile":t.type==="day"?["Today","Tomorrow"][Number(t.day_offset??1)]||`Day +${t.day_offset}`:C.label}var T1=class extends z{constructor(){super(),this._open=null,this._openPanel=null,this._addType="metric",this._flexEds=new Map}setConfig(C){this._config=C,this._savedJson==null&&(this._savedJson=JSON.stringify(C)),q1(JSON.stringify(C)!==this._savedJson)}shouldUpdate(C){if(C.size===1&&C.has("hass")){let H=C.get("hass"),e=this.hass;if(H&&e&&H.entities===e.entities&&H.devices===e.devices&&H.areas===e.areas&&H.themes===e.themes&&H.locale===e.locale&&H.language===e.language&&Date.now()-(this._renderedAt||0)<15e3)return this._hassTimer||(this._hassTimer=setTimeout(()=>{this._hassTimer=null,this.requestUpdate()},15e3)),!1}return!0}updated(){this._renderedAt=Date.now()}connectedCallback(){super.connectedCallback(),this._onDetected||(this._onDetected=()=>(this._open==="general"||this._open==="behavior")&&this.requestUpdate()),window.addEventListener("wsfc-detected",this._onDetected)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("wsfc-detected",this._onDetected),clearTimeout(this._hassTimer),this._hassTimer=null,this._savedJson=null,q1(!1),Z2(!1)}get _panels(){return P5(this._config)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}_emit(C){this._config=C,q1(JSON.stringify(C)!==this._savedJson),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:C},bubbles:!0,composed:!0}))}_setPanels(C,H){let e={...this._withoutLegacyHero(),panels:C};for(let[L,o]of Object.entries(H||{}))o===void 0?delete e[L]:e[L]=o;this._emit(e)}_withoutLegacyHero(){let{hero:C,...H}=this._config;return C===!1?{...H,hero:C}:H}render(){return!this.hass||!this._config?u:i`
      <div class="ed">
        <div class="hdr"><span class="name">${_5}</span><span class="ver">v${O5}</span>
          <span class="io">
            <button class="btn sm ghost" title="Copy the whole card's settings as YAML" @click=${()=>x2({mode:"export",config:this._config,cardType:`custom:${p2}`})}><ha-icon icon="mdi:export"></ha-icon>Export</button>
            <button class="btn sm ghost" title="Replace the settings with pasted YAML or JSON" @click=${()=>x2({mode:"import",cardType:`custom:${p2}`,onImport:C=>{this._flexEds.clear(),this._openPanel=null,this._emit(C),this.requestUpdate()}})}><ha-icon icon="mdi:import"></ha-icon>Import</button>
          </span></div>
        <label class="live" title="While editing, the animated background, blur and the radar and Windy maps are paused to keep the editor fast. Tick to see them running (not saved).">
          <input type="checkbox" .checked=${f2()} @change=${C=>{Z2(C.target.checked),this.requestUpdate()}} />
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
        ${this._section("station","mdi:weather-cloudy-clock","Weather station",()=>this._stationEditor())}
        ${this._section("background","mdi:image-filter-hdr","Background",()=>this._general(F1),(this._config.background||"none")==="animated"?this._bgPreviewButton():u)}
        ${this._section("general","mdi:palette-outline","Appearance",()=>this._general(P1))}
        ${this._section("alerts","mdi:alert-outline","Alerts Bar",()=>this._general(e2))}
        ${this._section("behavior","mdi:fit-to-screen-outline","Screen fit & layout",()=>this._general(r2))}
        ${this._section("buttons","mdi:gesture-tap-button","Button Menu",()=>this._buttonsEditor())}
        ${this._section("collapse","mdi:view-agenda-outline","Panel View Defaults",()=>i`${this._general(t2)}${this._convertBar()}`)}
        ${this._section("layout","mdi:view-dashboard-edit-outline","Layout Map",()=>this._layoutEditor())}
        ${this._section("panels","mdi:view-list-outline",`Panels (${this._panels.length})`,()=>this._panelList())}
      </div>
    `}_searchIndex(){let C=[],H=L=>L.label||V2[L.name]||L.name.replace(/[._]/g," ");for(let[L,o,a]of[["station","Weather station",[["Current condition",L2]]],["background","Background",F1],["general","Appearance",P1],["alerts","Alerts Bar",e2],["behavior","Screen fit & layout",r2],["collapse","Panel View Defaults",t2]])for(let[d,l]of a)for(let A of l.filter(m=>!m.kind))C.push({label:H(A),help:A.helper||"",where:`${o} \u203A ${d}`,go:{open:L},f:A});for(let L of k1)C.push({label:H(L),help:L.helper||"",where:"Button Menu",go:{open:"buttons"},f:L});let e=(L,o,a)=>{let d=W(L);if(!d)return;let l=L.title||c7(L),A=(a?N1:W1).map(p=>({f:p,sec:p.section||"Size and Scaling"})),m=d.groups?d.groups.flatMap(([p,x],Z)=>x.map(b=>({f:b,sec:`${d.label} options`,sub:Z?p:null}))):(d.schema||[]).map(p=>({f:p,sec:p.section||(["content_width","content_height"].includes(p.name)?"Size and Scaling":`${d.label} options`)}));for(let{f:p,sec:x,sub:Z}of[...A,...m])C.push({label:H(p),help:p.helper||"",where:`Panels \u203A ${l} \u203A ${x}${Z?` \u203A ${Z}`:""}`,go:{open:"panels",panel:o,type:L.type,sec:x,sub:Z},f:p})};return this._panels.forEach((L,o)=>{e(L,`${o}`,!1),L.type==="stack"&&(L.panels||[]).forEach((a,d)=>a&&e(a,`${o}.${d}`,!0))}),C}_searchResults(C){let H=C.toLowerCase().split(/\s+/).filter(Boolean),e=this._searchIndex().filter(L=>{let o=`${L.label} ${L.help} ${L.where} ${L.f.name}`.toLowerCase();return H.every(a=>o.includes(a))});return e.sort((L,o)=>(o.label.toLowerCase().includes(H[0])?1:0)-(L.label.toLowerCase().includes(H[0])?1:0)),i`<div class="finds" role="listbox" aria-label="Matching settings">
      ${e.length?e.slice(0,40).map(L=>i`<button class="find-hit" role="option" @click=${()=>this._goTo(L)}><b>${L.label}</b><span>${L.where}</span></button>`):i`<div class="fhelp">No setting matches "${C}".</div>`}
      ${e.length>40?i`<div class="fhelp">${e.length-40} more — type more of the name.</div>`:u}
    </div>`}async _goTo(C){let H=C.go;if(this._q="",this._open=H.open,H.panel!=null){this._openPanel=H.panel,this._flatOpen||(this._flatOpen=new Map);for(let L of this._flatOpen.keys())L.startsWith(`${H.type}|`)&&this._flatOpen.set(L,!1);this._flatOpen.set(`${H.type}|${H.sec}`,!0),H.sub&&(this._subOpen||(this._subOpen=new Set),this._subOpen.add(`${H.type}:${H.sub}`))}this.requestUpdate(),await this.updateComplete,await new Promise(L=>requestAnimationFrame(L));let e=[...this.renderRoot.querySelectorAll(".fld, .frow, .fchk, label")].find(L=>L.textContent.trim().startsWith(C.label));e&&(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add("flash"),setTimeout(()=>e.classList.remove("flash"),1600))}_section(C,H,e,L,o=u){let a=this._open===C;return i`<details class="panel" ?open=${a} @toggle=${d=>{d.target.open?this._open=C:this._open===C&&(this._open=null)}}>
      <summary><ha-icon icon=${H}></ha-icon><span>${e}</span>${o}</summary>
      ${a?i`<div class="body">${L()}</div>`:u}
    </details>`}_form(C,H,e,L,o){return X5({data:C,schema:H,onChange:e,whenData:L,isSet:o,action:a=>a.kind==="info"?this._infoBlock(a):this._resetAction(a),label:a=>a.label||V2[a.name]||a.name,helper:a=>a.helper,haForm:(a,d,l)=>this._haForm(a,d,l),auto:a=>this._autoText(a)})}_autoText(C){let H={panel_radius:"radius",row_height:"row",gap:"gap"}[C.name];if(!H)return null;let{preview:e,dashboard:L}=e3(),o=e?.[H],a=L?.[H],d=H==="radius"?" (from the theme's card corner radius)":H==="row"&&this._config.layout==="fullscreen"&&X(this._config)!=="none"?" (calculated to fit the screen)":"";return o&&a&&o!==a?`${o} in this preview, ${a} on the dashboard${d}`:o||a?`${o||a}${d}`:null}_haForm(C,H,e){return i`<ha-form
      .hass=${this.hass}
      .data=${C}
      .schema=${H}
      .computeLabel=${L=>L.label||V2[L.name]||L.name}
      .computeHelper=${L=>L.helper}
      @value-changed=${L=>{L.stopPropagation(),e(L.detail.value)}}
    ></ha-form>`}_convertBar(){let C={...this._config,screen_fit:X(this._config)},H=m=>m&&K1(m.type)&&!W(m)?.bare,e=S1({type:"uv_solar"},C,!0),L=this._allView||"full_title",o=m=>H(m)&&S1(m,C,!0).some(([p])=>p===L),a=this._panels.flatMap(m=>[m,...m.type==="stack"?m.panels||[]:[]]).filter(H),d=a.filter(o).length,l=a.filter(m=>o(m)&&g1(m,this._config)!==L).length,A=()=>{let m=p=>o(p)?Y1(p,L,this._config):p;this._flexEds.clear(),this._setPanels(this._panels.map(p=>p.type==="stack"?{...p,panels:(p.panels||[]).map(m)}:m(p)))};return i`<div class="convert">
      <div class="fld"><div class="frow"><label for="allview">Set every panel's view</label>
        <select id="allview" class="sel" @change=${m=>{this._allView=m.target.value,this.requestUpdate()}}>
          ${e.map(([m,p])=>i`<option value=${m} ?selected=${m===L}>${p}</option>`)}
        </select>
        <button class="btn sm" ?disabled=${!l} @click=${A}><ha-icon icon="mdi:format-paint"></ha-icon>Apply</button></div>
      <span class="fhelp">${l?`Changes ${l} of the ${d} panel${d===1?"":"s"} that can use it.`:d?`All ${d} panel${d===1?"":"s"} that can use it already do.`:"No panel can use this view."}${d<a.length?" Tiles views skip panels without a tiles row.":""}</span></div>
    </div>`}_general(C=P1){let H={...this._config,screen_fit:X(this._config)},e=y1(H,p7,J),L=this._config.background||"none";return C.map(([o,a])=>{let d=this._onlyChanged?a.filter(b=>o1(this._config,b,J)):a;if(!d.length||!d.some(b=>typeof b.when!="function"||b.when(e)))return u;let l=a.some(b=>o1(this._config,b,J)),A=C===F1&&o==="Background"&&L==="animated"&&this._bgPrev?.open,m=b=>this._form(y1(H,b,J),b,T=>{let{panels:F,...O}=this._config,P=w2(O,b,T,J);b.some(h=>h.name==="screen_fit")&&(delete P.fit_height,delete P.fit_strict,delete P.auto_fit),this._config.panels&&(P.panels=this._config.panels),this._emit(P)},e,T=>o1(this._config,T,J)),p=d.filter(b=>!b.sub),x=[...new Set(d.filter(b=>b.sub).map(b=>b.sub))],Z=b=>{let T=d.filter(h=>h.sub===b);if(!T.some(h=>typeof h.when!="function"||h.when(e)))return u;let F=`card:${b}`,O=(this._subOpen||(this._subOpen=new Set)).has(F),P=T.some(h=>o1(this._config,h,J));return i`<details class="sub psub" ?open=${O} @toggle=${h=>{h.target!==h.currentTarget||h.target.open===this._subOpen.has(F)||(h.target.open?this._subOpen.add(F):this._subOpen.delete(F),this.requestUpdate())}}><summary><ha-icon icon=${T[0].subIcon||"mdi:tune"}></ha-icon><span>${b}</span>${P?i`<i class="chg" title="Has changed settings"></i>`:u}</summary>
          ${O?i`<div class="psub-body">${m(T)}</div>`:u}</details>`};return i`${A?this._bgPreview():u}<div class="agrp"><div class="agrp-t">${o}${l?i`<i class="chg" title="Has changed settings"></i>`:u}</div>${m(p)}${x.map(Z)}</div>`})}_overrideCount(C){let H=0,e=L=>{for(let o of L||[])C.some(a=>o?.[a]!==void 0)&&H++,Array.isArray(o?.panels)&&e(o.panels)};return e(this._config.panels),H}_infoBlock(C){if(C.name!=="_alerts_sources")return u;let H=l3(this.hass,this._station,this._config),e={found:["Auto","mdi:auto-fix"],chosen:["Your choice","mdi:account-check-outline"],missing:["Not found","mdi:help-circle-outline"]},L=o=>this.hass?.states?.[o]?.attributes?.friendly_name;return i`<div class="asrc">
      <div class="fhelp">What each alert reads. <b>Auto</b> entities were found on your station; the rest you chose.</div>
      ${H.map(o=>i`<div class="asrc-g ${o.on?"":"off"}">
        <div class="asrc-t">${o.title}${o.on?"":i` <span class="asrc-off">(off)</span>`}</div>
        <div class="fhelp">${o.rule}</div>
        <table><tbody>${o.items.map(a=>i`<tr class=${a.how}>
          <td>${a.label}</td>
          <td>${a.entity?i`<span class="asrc-e" title=${a.entity}>${L(a.entity)||a.entity}</span><span class="asrc-id">${a.entity}</span>`:i`<span class="asrc-miss">—</span>`}${a.note?i`<div class="fhelp">${a.note}</div>`:u}</td>
          <td><span class="asrc-how ${a.how}"><ha-icon icon=${e[a.how][1]}></ha-icon>${e[a.how][0]}</span></td>
        </tr>`)}</tbody></table>
      </div>`)}
    </div>`}_resetAction(C){let H=y3[C.name]||[],e=this._overrideCount(H),L=()=>{let o=a=>a.map(d=>{let l={...d};for(let A of H)delete l[A];return Array.isArray(l.panels)&&(l.panels=o(l.panels)),l});this._emit({...this._config,panels:o(this._config.panels||[])})};return i`<div class="fact-btn" data-action=${C.name}><button type="button" ?disabled=${!e} @click=${L}><ha-icon icon="mdi:format-paint"></ha-icon>${C.label}</button>
      <span class="fhelp">${e?`${C.helper} ${e===1?"1 panel sets its own.":`${e} panels set their own.`}`:"No panel sets its own."}</span></div>`}_bgPreviewButton(){let C=!!this._bgPrev?.open;return i`<button class="bgprev-btn ${C?"on":""}" type="button" aria-pressed=${String(C)}
      title=${C?"Hide the background preview":"Preview the background"} aria-label="Preview the background"
      @click=${H=>{H.preventDefault(),H.stopPropagation(),this._bgPrev={...this._bgPrev||{},open:!C},C||(this._open="background"),this.requestUpdate()}}><ha-icon icon="mdi:magnify"></ha-icon></button>`}_bgPreview(){let C=this._bgPrev||{},H=this.hass?.states?.[this._config.entity]?.state,e=(H2.find(([o])=>o===H)||[,H])[1],L=[{name:"condition",label:"Condition",selector:{select:{options:[{value:"",label:H?`Now \u2014 ${e}`:"Now"},...H2.map(([o,a])=>({value:o,label:a}))]}}},{name:"time",label:"Time of day",selector:{select:{options:[{value:"",label:"Day (night for Clear night)"},{value:"day",label:"Day"},{value:"night",label:"Night"}]}}}];return i`<div class="bgprev">
      <wsfc-bg-preview .hass=${this.hass} .config=${this._config} .condition=${C.condition||""} .time=${C.time||""}></wsfc-bg-preview>
      ${this._form({condition:C.condition||"",time:C.time||""},L,o=>{this._bgPrev={...C,open:!0,condition:o.condition||"",time:o.time||""},this.requestUpdate()})}
    </div>`}_breakStack(C){let H=this._panels,e=Number(C);if(!H[e]||H[e].type!=="stack")return;if(H[e].x==null||H[e].y==null){let O=H.map((h,B)=>B).filter(h=>H[h].display!=="popup"),P=l1(O.map(h=>({key:h,w:G(H[h]),h:L1(N(H[h]))})),{gravity:this._config.layout_gaps!=="keep"});H=H.map((h,B)=>P.has(B)?{...h,x:P.get(B).x,y:t1(P.get(B).y)}:h)}let L=H[e],o=(L.panels||[]).filter(Boolean).map(O=>({...O}));if(!o.length)return;let a=G(L),d=N(L)||o.length*.5,l=L.direction==="vertical",A=O=>Math.max(.25,Math.round(O*4)/4),m=O=>Math.max(0,Math.round(O*4)/4),p=O=>Number(O.grow??1)||1,x=o.reduce((O,P)=>O+p(P),0),Z=0,b=0,T=o.map((O,P)=>{let{grow:h,min_width:B,...R}=O;if(l){let i1=P===o.length-1?A(d-b):A(d*p(O)/x),a1={...R,span:a,rows:Math.max(.25,i1),...L.x!=null?{x:L.x,y:m(Number(L.y)+b)}:{}};return b+=i1,a1}let f=P===o.length-1?a-Z:Math.max(1,Math.round(a*p(O)/x)),U={...R,span:Math.max(1,f),rows:R.rows??d,...L.x!=null?{x:Number(L.x)+Z,y:L.y}:{}};return Z+=f,U}),F=H.slice();F.splice(e,1,...T),this._openPanel=null,this._setPanels(F)}_stationDevice(){let C=(this._config.metric_sources?.sources||[]).find(H=>!H.disabled&&String(H.ref).startsWith("device:"));return C?C.ref.slice(7):void 0}_stationEditor(){let C=this._station,H=[...d7,"rain_today","battery","battery_voltage","capacitor","signal","signal_quality","rssi","online","hardware_id","aqi","pm2_5","pm10","ozone"].map(L=>{let o=I[L]?.find||I[L]?.aq?I1(L,C,this.hass):c3(C,this.hass,L)||(this.hass.states[C.entity]?.attributes?.[L]!=null?C.entity:null),a=o&&!o.startsWith("weather.")?J1(this.hass,o):null,d=o?.startsWith("weather.")?this.hass.states[o]?.attributes?.[L]:null;return{k:L,e:o,v:a?`${a.value} ${a.unit}`:d!=null?String(d):"",label:s7[L]||I[L]?.label||L.replace(/_/g," "),integ:o?s1(this.hass,o):""}}),e=H.filter(L=>L.e).length;return i`
      <p class="hint">Sources are used top to bottom: for each value the first source that has it wins, and they apply to every panel. Add your station's <b>device</b> (sensors are mapped automatically, outdoor first) and a <b>weather entity</b> for the forecast and condition. Open a source to see or change what it supplies.</p>
      <wsfc-sources-editor .hass=${this.hass} .config=${{entity:this._config.entity,metric_sources:this._config.metric_sources}}
        @sources-changed=${L=>{let o={...this._config};L.detail.entity&&(o.entity=L.detail.entity),L.detail.metric_sources?o.metric_sources=L.detail.metric_sources:delete o.metric_sources,this._emit(o)}}></wsfc-sources-editor>
      ${this._general([["Current condition",L2]])}
      ${this._config.condition_source==="station"?i`<p class="hint cond-now"><b>Now:</b> ${b3(this.hass,this._station,this._config)}</p>`:u}
      <details class="sub">
        <summary><ha-icon icon="mdi:format-list-checks"></ha-icon><span>Values used</span><span class="cnt">${e} of ${H.length} found</span></summary>
        <div class="map">
          <span class="h">Value</span><span class="h">Entity</span><span class="h">Integration</span><span class="h">Now</span>
          ${H.map(L=>i`<span class="k">${L.label}</span><span class="e ${L.e?"":"none"}" title=${L.e||""}>${L.e||"not found"}</span><span class="i">${L.integ}</span><span class="v">${L.v}</span>`)}
        </div>
      </details>
      <details class="sub">
        <summary><ha-icon icon="mdi:information-outline"></ha-icon><span>Which Ecowitt integration?</span></summary>
        <p class="hint">Any of them works — Home Assistant's <b>Ecowitt</b>, <b>Ecowitt Local</b> or the <b>Ecowitt Official Integration</b> — and you can add more than one: e.g. the core integration for readings plus Ecowitt Local for battery, signal and RSSI (Station health panel). Home Assistant's own integration has no signal or RSSI sensors. With Ecowitt Local, add either its sensor or its gateway device; the other is found automatically.</p>
      </details>
    `}_flexEditor(C,H,e){let L=`${C}:${H.type}`,o=this._flexEds.get(L);o||(o=document.createElement($5),o.wsfcMode="sections",o.wsfcType=H.type,o.addEventListener("wsfc-flat-open",p=>{for(let x of[...(this._flatOpen||new Map).keys()])x.startsWith(`${p.detail.type}|`)&&this._flatOpen.set(x,!1);this.requestUpdate()}),o.addEventListener("config-changed",p=>{p.stopPropagation(),o._wsfcOnChange?.(p.detail.config)}),this._flexEds.set(L,o));let a=p=>p.type==="sky_tracker"?N5(p,this._station):R5(W5(p.type,this._station),p.flex||{});o.wsfcPanels=W(H)?.flexPanels||null;let d=this._config.background==="animated"||this._config.background==="image"&&!!(this._config.background_image||this._config.background_image_url),l=[...W(H)?.flexHide||[],...H.type==="hero"&&d?["show_condition_effects"]:[],...H.type==="hero"&&H.auto_scale?["header_temp_size","header_state_size","header_icon_size","header_secondary_size","clock_font_size","clock_date_font_size","chip_text_size","chip_icon_size","global_icon_size","global_text_size"]:[]];JSON.stringify(l)!==JSON.stringify(o.wsfcHide||[])&&(o.wsfcHide=l,o.requestUpdate?.()),o._wsfcOnChange=p=>{let x=A1(H),Z=E5(p,a({...H,flex:void 0}));Object.keys(Z).length?x.flex=Z:delete x.flex,e(x)};let A=a(H),m=JSON.stringify(A);return o._wsfcJson!==m&&(o._wsfcJson=m,o.setConfig(A)),o.hass=this.hass,i`<div class="flexed">${o}</div>`}_guideSpec(){let C=this._config,H=C.layout_screen;if(!H||(C.layout_guide||"line")==="off")return null;let[e,L]=H==="window"?[window.innerWidth,window.innerHeight]:String(H).split(/[x×]/).map(Number);if(!e||!L)return null;let o=C.gap??12,a=C.layout==="fullscreen",d=C.panel_bar!==!1&&!this._panels.some(A=>A.type==="heading"&&A.show_bar),l=56+(a?16:8)+2*o+(d?40+o:0)+(C.title?44+o:0);return{w:e,h:L,chrome:l,gap:o,row:C.row_height||110,fit:a&&X(C)!=="none",strict:a&&["strict","scale"].includes(X(C)),mode:C.layout_guide||"line"}}_screenGuide(){let C=this._config,H=[["","Off"],["window",`This browser window (${window.innerWidth}\xD7${window.innerHeight})`],["1920x1080","1920\xD71080 (16:9 desktop)"],["2560x1440","2560\xD71440 (16:9)"],["3440x1440","3440\xD71440 (21:9)"],["1366x768","1366\xD7768 (laptop)"],["1280x800","1280\xD7800 (16:10 tablet)"],["1180x820","1180\xD7820 (iPad landscape)"],["820x1180","820\xD71180 (iPad portrait)"],["1080x1920","1080\xD71920 (portrait panel)"]],e=C.layout_screen||"",L=e&&!H.some(([a])=>a===e),o=a=>{let d={...this._config,...a};for(let l of Object.keys(a))(a[l]==null||a[l]==="")&&delete d[l];this._emit(d)};return i`<div class="guidebar">
      <div class="frow"><label for="lg-s">Screen guide</label>
        <select id="lg-s" class="sel" @change=${a=>o({layout_screen:a.target.value==="custom"?"1600x900":a.target.value||void 0})}>
          ${H.map(([a,d])=>i`<option value=${a} ?selected=${a===e}>${d}</option>`)}
          <option value="custom" ?selected=${L}>Custom size…</option>
        </select><button class="btn sm ghost" title="Set the Screen guide to this device's browser window (open the editor on the tablet and press this)" @click=${()=>o({layout_screen:`${window.innerWidth}x${window.innerHeight}`})}><ha-icon icon="mdi:tablet"></ha-icon>This device</button></div>
      ${L?i`<div class="frow"><label for="lg-c">Width × height</label>
        <input id="lg-c" class="ftext" .value=${e} placeholder="1600x900" @change=${a=>o({layout_screen:/^\d{3,5}\s*[x×]\s*\d{3,5}$/.test(a.target.value.trim())?a.target.value.trim().replace(/\s+/g,"").replace("\xD7","x"):e})} /></div>`:u}
      ${e?i`<div class="frow"><label for="lg-m">Show as</label>
        <select id="lg-m" class="sel" @change=${a=>o({layout_guide:a.target.value==="line"?void 0:a.target.value})}>
          ${[["line","Dotted line at the screen edge"],["frame","Frame \u2014 shade what's off screen"]].map(([a,d])=>i`<option value=${a} ?selected=${(C.layout_guide||"line")===a}>${d}</option>`)}
        </select></div>
        <div class="fhelp">The map is drawn to that screen's scale (window size inside the browser, below the dashboard header).${C.layout==="fullscreen"&&X(C)!=="none"?" Full screen with fit: rows share the screen height, as on the dashboard.":" Panels below the line need scrolling."}</div>`:u}
    </div>`}_layoutEditor(){let C=this._config,H=this._mapFor==="phone",e=Array.isArray(C.phone_layout)?C.phone_layout:null,L=l=>{let A={...this._config};l&&l.length?A.phone_layout=l:delete A.phone_layout,this._emit(A)},o=this._panels.map((l,A)=>({p:l,i:A})).filter(({p:l})=>l.display!=="popup"),a=()=>{let l=new Map((e||[]).map((A,m)=>[Number(A.i),A]));return o.map(({p:A,i:m})=>({...A,__i:m,span:l.get(m)?.span??12,rows:l.get(m)?.rows??A.rows??0,x:l.get(m)?.x,y:l.get(m)?.y,show:l.has(m)?l.get(m).show!==!1:A.show})).sort((A,m)=>((e||[]).findIndex(p=>Number(p.i)===A.__i)+1||1e3+A.__i)-((e||[]).findIndex(p=>Number(p.i)===m.__i)+1||1e3+m.__i))},d=l=>l.filter(A=>A.__i!=null).map(A=>({i:A.__i,span:G(A),...N(A)?{rows:N(A)}:{},...A.x!=null&&A.y!=null?{x:A.x,y:A.y}:{},...A.show===!1?{show:!1}:{}}));return i`
      <div class="frow"><label for="lm-for">Layout for</label>
        <select id="lm-for" class="sel" @change=${l=>{this._mapFor=l.target.value,this.requestUpdate()}}>
          <option value="main" ?selected=${!H}>Main layout (tablets and larger)</option>
          <option value="phone" ?selected=${H}>Phone layout (narrow screens)${e?"":" \u2014 not set"}</option>
        </select></div>
      ${H?i`<p class="hint">On screens narrower than ${C.narrow_width||720} px the card uses this layout: its own order, widths and heights for the same panels. Without one, panels stack full width automatically.</p>
            <div class="presets">${e?i`<button class="btn sm ghost" @click=${()=>L(null)}><ha-icon icon="mdi:delete-outline"></ha-icon>Remove the phone layout</button>`:i`<button class="btn sm" @click=${()=>L(o.map(({p:l,i:A})=>({i:A,span:12,...l.rows?{rows:l.rows}:{}})))}><ha-icon icon="mdi:cellphone"></ha-icon>Create a phone layout</button>`}</div>
            ${e?i`<wsfc-layout-map .panels=${a()} .gravity=${this._config.layout_gaps!=="keep"} @layout-changed=${l=>L(d(l.detail.panels))}></wsfc-layout-map>`:u}`:i`<p class="hint"><b>Drag</b> a panel to any place on the grid: panels in its way move down, nothing else moves. Drag its <b>right or bottom edge</b> (or the corner) to resize, in quarter rows. Keyboard: arrows move one cell, Shift+arrows resize. This is the main layout${e?"; phones use the Phone layout":" \u2014 phones stack the panels automatically (or set a Phone layout above)"}. Dashed = hidden on load.</p>
            ${this._screenGuide()}
            ${this._guideSpec()?i`<wsfc-layout-probe .hass=${this.hass} .config=${this._config} .guide=${this._guideSpec()}
              @probe-measured=${l=>{this._measured=l.detail,this.requestUpdate()}}></wsfc-layout-probe>`:u}
            <wsfc-layout-map .panels=${this._panels} .gravity=${this._config.layout_gaps!=="keep"} .guide=${this._guideSpec()} .measured=${this._guideSpec()?this._measured:null} @layout-changed=${l=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(l.detail.panels)}}></wsfc-layout-map>`}
    `}_panelList(){return i`
      <p class="hint">Edit, show/hide, duplicate, delete and add panels. Arrange them under <b>Layout</b>. To keep panels together (side by side, or one above the other filling in for hidden ones), add a <b>Stack</b> panel, then use <b>Move into stack</b> under it.</p>
      ${this._list(this._panels,(C,H)=>this._setPanels(C,H),"")}
    `}_buttonsEditor(){let C=this._config,H=this._panels,e=H.findIndex(m=>m.type==="heading"),L=e>=0&&!!H[e].show_bar,o=C.panel_bar===!1?"hidden":L?"heading":"top",a=m=>{let p=H.map((x,Z)=>Z===e?K({...x,show_bar:m==="heading"?!0:void 0}):x);m==="heading"&&e<0&&p.splice(1,0,{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0}),this._setPanels(p,{panel_bar:m==="hidden"?!1:void 0})},d=(m,p)=>{let x=b=>K({...b,in_bar:p===z1({...b,in_bar:void 0})?void 0:p}),Z=H.map((b,T)=>{let F=m.includes(`${T}`)?x(b):b;if(F.type==="stack"&&Array.isArray(F.panels)){let O=F.panels.map((P,h)=>P&&m.includes(`${T}.${h}`)?x(P):P);O.some((P,h)=>P!==F.panels[h])&&(F={...F,panels:O})}return F});this._setPanels(Z)},l=[];H.forEach((m,p)=>{l.push([m,`${p}`,!1]),m.type==="stack"&&(m.panels||[]).forEach((x,Z)=>x&&l.push([x,`${p}.${Z}`,!0]))});let A=l.map(([,m])=>m);return i`
      <div class="row-inline">
        <label for="bp">Buttons</label>
        <select id="bp" class="sel" @change=${m=>a(m.target.value)}>
          <option value="top" ?selected=${o==="top"}>Above the panels</option>
          <option value="heading" ?selected=${o==="heading"}>In the Button Menu panel</option>
          <option value="hidden" ?selected=${o==="hidden"}>Hidden</option>
        </select>
      </div>
      <p class="hint">A button toggles its panel (pop-up panels open instead). Panels without a button stay as they are.</p>
      ${this._form(y1(C,k1,J),k1,m=>{let{panels:p,...x}=this._config,Z=w2(x,k1,m,J);this._config.panels&&(Z.panels=this._config.panels),this._emit(Z)})}
      <div class="btnbar">
        <button class="btn sm" @click=${()=>d(A,!0)}>All</button>
        <button class="btn sm ghost" @click=${()=>d(A,!1)}>None</button>
      </div>
      <div class="checks">
        ${l.map(([m,p,x])=>i`<label class="chk ${x?"nested":""}">
          <input type="checkbox" .checked=${z1(m)} @change=${Z=>d([p],Z.target.checked)} />
          <ha-icon icon=${m.icon||m.type==="metric"&&I[m.metric]?.icon||W(m).icon}></ha-icon>
          <span>${b2(m)}</span>${m.display==="popup"?i`<span class="tag">pop-up</span>`:m.show===!1?i`<span class="tag">hidden on load</span>`:u}
        </label>`)}
      </div>
    `}_list(C,H,e){let L=!!e,o=Object.entries(m2).filter(([l])=>!(L&&l==="hero")).sort(([l,A],[m,p])=>l==="hero"?-1:m==="hero"?1:A.label.localeCompare(p.label)),a=e||"top",d=(this._addTypes||(this._addTypes={}))[a]||(L?"metric":this._addType);return i`
      <div class="rows">${C.map((l,A)=>this._panelRow(l,A,C,H,e?`${e}.${A}`:`${A}`,L))}</div>
      <div class="add">
        <select class="sel" @change=${l=>{this._addTypes[a]=l.target.value,this.requestUpdate()}} aria-label="Panel type to add">
          ${o.map(([l,A])=>i`<option value=${l} ?selected=${l===d}>${A.label}</option>`)}
        </select>
        <button class="btn" @click=${()=>{let l={type:d};l.type==="metric"&&(l.metric="temperature"),l.type==="stack"&&(l.panels=[{type:"metric",metric:"temperature"},{type:"metric",metric:"humidity"}]),H([...C,l]),this._openPanel=e?`${e}.${C.length}`:`${C.length}`}}><ha-icon icon="mdi:plus"></ha-icon>${L?"Add new to stack":"Add panel"}</button>
      </div>
    `}_panelRow(C,H,e,L,o,a){let d=W(C),l=this._openPanel===o||C.type!=="stack"&&String(this._openPanel||"").startsWith(`${o}.`),A=C.show===!1,m=()=>this._flexEds.clear(),p=T=>{let F=e.slice(),O=H+T;O<0||O>=F.length||([F[H],F[O]]=[F[O],F[H]],m(),this._openPanel=null,L(F))},x=(T,F)=>{let O=e.slice();O[H]=T,L(O,F)},Z=a?`${C.grow!=null?`grow ${C.grow}`:""}${C.rows?` \xB7 ${C.rows} rows`:""}`:`${G(C)}/12${N(C)?` \xD7 ${N(C)}`:""}${C.display==="popup"?" \xB7 pop-up":""}`,b=C.type==="stack"?`${C.direction==="vertical"?"Vertical":"Horizontal"} stack \xB7 ${(C.panels||[]).length} panels`:d.label;return i`<div class="row ${l?"open":""} ${A?"dim":""}">
      <div class="line">
        <ha-icon class="lead" icon=${C.icon||C.type==="metric"&&I[C.metric]?.icon||(C.type==="stack"&&C.direction==="vertical"?"mdi:view-agenda-outline":d.icon)}></ha-icon>
        <div class="txt"><div class="n">${b2(C)}</div><div class="s">${b}${Z?` \xB7 ${Z}`:""}</div></div>
        ${a?i`<button class="ib" title="Move up" ?disabled=${H===0} @click=${()=>p(-1)}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
              <button class="ib" title="Move down" ?disabled=${H===e.length-1} @click=${()=>p(1)}><ha-icon icon="mdi:arrow-down"></ha-icon></button>`:u}
        ${a?u:i`<button class="ib" title=${A?"Show when the dashboard loads":"Hide when the dashboard loads"} @click=${()=>x(K({...C,show:A?void 0:!1}))}>
              <ha-icon icon=${A?"mdi:eye-off":"mdi:eye"}></ha-icon></button>`}
        ${a&&/^\d+\.\d+$/.test(o)?i`<button class="ib" title="Move out of the stack (back into the grid, after the stack)" @click=${()=>{m(),this._openPanel=null,this._setPanels(P3(this._panels,Number(o.split(".")[0]),H))}}><ha-icon icon="mdi:view-split-horizontal"></ha-icon></button>`:u}
        <button class="ib" title="Edit" @click=${()=>this._openPanel=this._openPanel===o?null:o}><ha-icon icon=${l?"mdi:chevron-up":"mdi:pencil"}></ha-icon></button>
        <button class="ib" title="Duplicate" @click=${()=>{let T=e.slice();T.splice(H+1,0,A1(C)),m(),L(T)}}><ha-icon icon="mdi:content-copy"></ha-icon></button>
        <button class="ib del" title="Delete" @click=${()=>{let T=e.slice();T.splice(H,1),m(),this._openPanel=null,L(T)}}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
      </div>
      ${l?this._panelBody(C,o,x,a):u}
      ${C.type==="stack"?this._stackKids(C,H,o,x,a):u}
    </div>`}_stackKids(C,H,e,L,o){let d=!o?this._panels.map((A,m)=>[A,m]).filter(([A,m])=>m!==H&&A.type!=="hero"&&A.type!=="stack"):[],l=(this._moveIn||(this._moveIn={}))[e]??d[0]?.[1]??"";return i`<div class="kids">
      ${this._list(C.panels||[],(A,m)=>L({...C,panels:A},m),e)}
      ${d.length?i`<div class="add">
            <select class="sel" aria-label="Panel to move into this stack" @change=${A=>{this._moveIn[e]=Number(A.target.value),this.requestUpdate()}}>
              ${d.map(([A,m])=>i`<option value=${m} ?selected=${m===l}>${b2(A)}</option>`)}
            </select>
            <button class="btn" @click=${()=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(F3(this._panels,H,Number(l)))}}><ha-icon icon="mdi:view-split-horizontal"></ha-icon>Move into stack</button>
          </div>`:u}
    </div>`}_flat(C,H,e,L=!1){let o=`${C.type}|${H}`;this._flatOpen||(this._flatOpen=new Map);let a=!!this._flatOpen.get(o);return i`<details class="flat" ?open=${a} @toggle=${d=>{if(!(d.target!==d.currentTarget||d.target.open===!!this._flatOpen.get(o))){if(d.target.open){for(let l of this._flatOpen.keys())l.startsWith(`${C.type}|`)&&this._flatOpen.set(l,!1);for(let[l,A]of this._flexEds||[])l.endsWith(`:${C.type}`)&&A.renderRoot?.querySelectorAll?.("details.wsfc-panel[open]").forEach(m=>m.open=!1)}this._flatOpen.set(o,d.target.open),this.requestUpdate()}}}>
      <summary>${H}${L?i`<i class="chg" title="Has changed settings"></i>`:u}</summary>
      <div class="flat-body">${e}</div>
    </details>`}_sections(C,H,e,L,o,a=!0,d=null){let l=[];for(let p of H){let x=p.sub?`sub:${p.sub}`:p.section?`sec:${p.section}`:`sec:${o}`,Z=l.find(b=>b.k===x);Z||l.push(Z={k:x,f:[]}),Z.f.push(p)}let A=p=>this._form(y1(C,p,e),p,x=>L({...w2(C,p,x,e),type:C.type}),C,x=>o1(C,x,e)),m=this._onlyChanged;return l.map(({k:p,f:x})=>{let Z=m?x.filter(O=>o1(C,O,e)):x;if(!Z.length)return u;let b={...y1(C,Z,e),...C};if(!Z.some(O=>typeof O.when!="function"||O.when(b)))return u;let T=x.some(O=>o1(C,O,e)),F=p.slice(4);if(p.startsWith("sub:")){let O=`${C.type}:${F}`,P=(this._subOpen||(this._subOpen=new Set)).has(O);return i`<details class="sub psub" ?open=${P} @toggle=${h=>{if(!(h.target!==h.currentTarget||h.target.open===this._subOpen.has(O))){if(h.target.open){for(let B of[...this._subOpen])B.startsWith(`${C.type}:`)&&this._subOpen.delete(B);this._subOpen.add(O)}else this._subOpen.delete(O);this.requestUpdate()}}}>
          <summary><ha-icon icon=${Z[0]?.subIcon||"mdi:weather-sunset"}></ha-icon><span>${F}</span>${T?i`<i class="chg" title="Has changed settings"></i>`:u}</summary>
          ${P?i`<div class="psub-body">${A(Z)}</div>`:u}
        </details>`}return a?this._flat(C,F,A(Z),T):i`<div class="grp">${F}${T?i`<i class="chg" title="Has changed settings"></i>`:u}</div>${A(Z)}`})}_zoomHint(C,H){let e=Number(C.zoom??H.default??7),L=Number(C.latitude??this.hass?.config?.latitude??40),[o]=String(this._config.layout_screen||"").split("x").map(Number),a=Number(C.span??W(C)?.span??6),d=o>0?Math.max(200,(o-156)/12*a+(a-1)*12-32):450,l=156543.03*Math.cos(L*Math.PI/180)/2**e*d,A=this.hass?.config?.unit_system?.length==="km",m=x=>{let Z=A?x/1e3:x/1609.344;return`${Z<1?Z.toFixed(1):Z<10?Z.toFixed(1).replace(/\.0$/,""):Math.round(Z)} ${A?"km":"mi"}`},p=C.type==="radar"?e>10?" Radar is about 0.6 mi (1 km) per pixel, so beyond zoom 10 it shows as large blocks.":"":e>=11?" 11 is as close as Windy goes.":"";return`About ${m(l/2)} from your home to the panel's sides (${m(l)} across, for a ${Math.round(d)} px wide panel).${p}`}_panelView(C,H){let e=W(C),L=S1(C,{...this._config,screen_fit:X(this._config)},K1(C.type)&&!e?.bare);if(L.length<2)return u;let o=g1(C,this._config),a=`pv-${C.type}`;return i`<div class="pview fld"><div class="frow"><label for=${a}>Panel View</label>
      <select id=${a} class="sel" @change=${d=>H(Y1(C,d.target.value,this._config))}>
        ${L.map(([d,l])=>i`<option value=${d} ?selected=${d===o}>${l}</option>`)}
      </select></div>
      <div class="fhelp">How the panel starts → what a tap on its title or tiles does.${X1(o)==="title"&&C.show_title===!1?" It needs its title shown to collapse.":""}</div>
    </div>`}_panelBody(C,H,e,L){let o=W(C),a=(h,B)=>(h?.overflow==="scroll"&&!L&&!(Number(h.rows??o?.rows??0)>=1)&&(h={...h,rows:1}),e(h,B)),d=["content_width","content_height",...["daily","hourly","forecast","sky_tracker"].includes(C.type)?["text_scale","icon_scale","chart_scale","bar_scale","arc_scale"]:[],...C.type==="hero"?["text_scale","icon_scale_all"]:[]],l=(o.schema||[]).filter(h=>d.includes(h.name)).map(h=>({...h,section:"Size and Scaling"})),A=l.length?{...o,schema:o.schema.filter(h=>!d.includes(h.name))}:o;["radar","wind_map"].includes(C.type)&&A.schema&&(A={...A,schema:A.schema.map(h=>h.name==="zoom"?{...h,helper:this._zoomHint(C,h)}:h)});let m=L?{show_title:c2.has(C.type)?!!C.title:!0}:u7(C),p=L?N1:W1;C.type==="hero"&&(p=p.filter(h=>!["icon","display","in_bar"].includes(h.name))),K1(C.type)||(p=p.filter(h=>h.section!=="Collapse")),p=p.filter(h=>!h2.includes(h.name)).map(h=>{if(h.section!=="Collapse")return h;let B=["compact_expand","compact_icon","compact_title"].includes(h.name)?["tiles"]:["show_collapse_hint","collapse_hint","collapsed_info","collapsed_entity","collapsed_label"].includes(h.name)?["title"]:["title","tiles"],R=h.when;return{...h,section:"Collapsed View",when:f=>{let U=X1(g1(f,this._config));return B.includes(U)?typeof R!="function"||R({...f,collapsible:!0,compact:U==="tiles",collapsed_view:U==="tiles"?"compact":"minimal"}):!1}}});let x=this._config,Z=x.layout==="fullscreen"&&["strict","scale"].includes(X(x)),b={collapsed_view:()=>x.collapsed_view==="compact"?"Compact":"Minimal",collapsed_open:()=>({inplace:"In place",overlay:"Over the other panels",popup:"As a pop-up"})[x.collapsed_open]||(x.layout==="fullscreen"||X(x)==="scale"?"Automatic: over the other panels":"Automatic: in place"),collapse_title_tap:()=>x.collapse_title_tap===!1?"Off":"On",show_collapse_hint:()=>x.show_collapse_hint?"Show":"Hide",collapsed_info:()=>x.collapsed_info==="off"?"None":"The panel's summary",overflow:()=>Z||x.panel_overflow==="scroll"?"Scroll":"Grow"};p=p.map(h=>{let B=h.selector?.select?.options;return!b[h.name]||!B?.some(R=>R.value==="default")?h:{...h,selector:{select:{...h.selector.select,options:B.map(R=>R.value==="default"?{...R,label:`Card default \u2014 ${b[h.name]()}`}:R)}}}}),M1.has(C.type)||(p=p.filter(h=>!["collapsed_view","compact_expand","compact_title","compact_icon","compact"].includes(h.name))),T5.has(C.type)&&(p=p.filter(h=>!["show_title","title","show_icon","icon"].includes(h.name)||C.type!=="clock"&&h.name==="title"));let T=["graph","temp_humidity","uv_solar","statistics"].includes(C.type),F=["type","span","rows","display","in_bar","tile_background","tile_shadow","tile_border","tile_glow","show","id","span_medium","span_narrow","rows_compact","grow","min_width",...C.type==="metric"?["metric"]:[],...C.type==="statistics"?["preset"]:[],...C.type==="stack"?["panels","direction"]:[]],O=Object.keys(C).some(h=>!F.includes(h)),P=()=>a(Object.fromEntries(Object.entries(C).filter(([h])=>F.includes(h))));return i`<div class="pbody">
      <div class="resetbar">
        ${C.type==="stack"&&!L&&(C.panels||[]).length?i`<button class="btn sm ghost" title="Put this stack's panels straight on the grid, in the stack's place, and remove the stack"
          @click=${()=>this._breakStack(H)}><ha-icon icon="mdi:arrow-split-horizontal"></ha-icon>Break apart</button>`:u}
        <button class="btn sm ghost" ?disabled=${!O} title="Keeps the panel's type, position and size" @click=${()=>{this._flexEds.clear(),P()}}>
          <ha-icon icon="mdi:restore"></ha-icon>Reset to default</button>
      </div>
      ${O3[C.type]&&!L?i`<div class="presets"><span class="fhelp">Presets</span>${O3[C.type].map(([h,B])=>i`<button class="btn sm ghost" @click=${()=>{let R={...C};for(let[f,U]of Object.entries(B))U===null?delete R[f]:R[f]=U;this._flexEds.clear(),a(R)}}>${h}</button>`)}</div>`:u}
      ${this._panelView(C,a)}
      ${T?i`<div class="grp first">Series</div>
            <wsfc-series-editor .hass=${this.hass} .panel=${C} .station=${this._station} @panel-changed=${h=>a(h.detail.panel)}></wsfc-series-editor>`:u}
      ${this._sections(C,l.length?(()=>{let h=p.findIndex(R=>R.name==="content_scale"),B=p.slice();return B.splice(h<0?B.length:h+1,0,...l),B})():p,m,a,"Size and Scaling")}
      ${A.groups?this._flat(C,`${A.label} options`,A.groups.map(([h,B,R],f)=>this._sections(C,f===0?B:B.map(U=>({...U,sub:h,subIcon:R})),{},a,h,!1))):A.schema.length?this._sections(C,A.schema,{},a,`${A.label} options`,!0,`${A.label} options`):u}
      ${A.flex?i`${C.type==="sky_tracker"?i`<div class="grp">Arc & sky details</div>`:u}
            ${C.type==="sky_tracker"?i`<p class="hint">Fine-tune the arc (Sun Position) and the sky (Sky Bar): heights, colors, labels, ticks and the forecast row. Layers, time window and moon are set above and override the same options here.</p>`:u}
            ${this._flexEditor(H,C,a)}`:u}
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
  `]);customElements.get("weather-station-flex-card-editor")||customElements.define("weather-station-flex-card-editor",T1);globalThis.__wsfcEditorHelpers={stackWithNext:v7,unstack:P3,moveIntoStack:F3};globalThis.__wsfcPanelView={viewOptions:S1,readView:g1,writeView:Y1,viewKind:X1};globalThis.__wsfcSchemas={STATION_FIELDS:L2,BACKGROUND_GROUPS:F1,APPEARANCE_GROUPS:P1,ALERTS_GROUPS:e2,RESET_ACTIONS:y3,LAYOUT_GROUPS:r2,PANEL_GROUPS:t2,GENERAL_DEFAULTS:J,REMEMBER:k1,LABELS:V2,PANEL_TYPES:m2,COMMON_SCHEMA:W1,STACK_CHILD_SCHEMA:N1};export{F3 as moveIntoStack,v7 as stackWithNext,P3 as unstack};
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
