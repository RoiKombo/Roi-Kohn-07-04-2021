(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var i,a,c,r,o,d,s=n(0),u=n.n(s),l=n(10),f=n.n(l),j=n(19),b=n(13),p=n(7),x=n(3),h=n(4),O=n(1),v=h.a.div(i||(i=Object(x.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width:100%   \n"]))),g=h.a.div(a||(a=Object(x.a)(["\n    width: 100%;\n    display:flex;\n    justify-content: space-between;\n    box-shadow: 0 0 4px rgb(0 0 0 / 25%);\n    border-bottom: 1px solid var(--surface-d);\n"]))),m=h.a.div(c||(c=Object(x.a)(["\n    justify-content: flex-end;\n      @media (max-width: 400px){\n        display: flex;\n      }\n"]))),y=h.a.div(r||(r=Object(x.a)(["\n    display:flex;\n    justify-content: flex-start;\n    color: var(--black);\n    font-size: var(--heading-2);\n    font-weight:400;\n    padding: 1rem;\n      @media (max-width: 400px){\n        font-size: var(--heading-3);\n        padding: 1rem;\n      }\n"]))),w=h.a.div(o||(o=Object(x.a)(["\n  display:inline-block;\n  padding: 0.5rem 1rem;\n  margin: 0.5rem;\n  background-color:#FBC02D;\n  border-radius: 5px;\n  text-align: center;\n    @media (max-width: 400px){\n      display:inline-block;\n      padding: 0.2rem 0.5rem;\n      font-size: var(--heading-4);\n    }\n"]))),C=Object(h.a)(j.b)(d||(d=Object(x.a)(["\n  text-decoration: none;\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n    }\n"])));function k(){return Object(O.jsx)(g,{children:Object(O.jsxs)(v,{children:[Object(O.jsx)(y,{children:"HEROLO weather"}),Object(O.jsxs)(m,{children:[Object(O.jsx)(C,{to:"/",children:Object(O.jsx)(w,{children:"HOME"})}),Object(O.jsx)(C,{to:"/favorites",children:Object(O.jsx)(w,{children:"FAVORITES"})})]})]})})}var N,T,S,E,z=n(30),I=n(14),M=n(42),W=n(43),F=n(12),A="SUGGESTIONS",D="GET_WEATHER",V="CURRENT_CONDITIONS",G="FAVORITES_CONDITIONS",L="jXiwGd5fgeVXVG8lKaClg4D6GlAGEz8q",R=function(e){return function(t){fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat(L,"&metric=true")).then((function(e){return e.json()})).then((function(e){return t({type:D,payload:e})})).catch((function(e){return console.log("faild to get 5 day foreCast")}))}},J=function(e,t){return function(n){fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=").concat(L)).then((function(e){return e.json()})).then((function(i){var a=i[0];n({type:V,payload:Object(F.a)(Object(F.a)({},a),{},{cityName:t,key:e})})})).catch((function(e){return console.log("faild to get current conditions")}))}},P=h.a.div(N||(N=Object(x.a)(["\n    display: flex;\n    justify-content: center;\n"]))),B=Object(b.b)((function(e){return{data:e.data}}),{getAutoComplete:function(e){return function(t){fetch("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(L,"&q=").concat(e)).then((function(e){return e.json()})).then((function(e){return t({type:A,payload:e})}))}},getWeather:R,getCurrentConditions:J})((function(e){var t=e.data,n=e.getAutoComplete,i=e.getWeather,a=e.getCurrentConditions,c=Object(s.useState)(),r=Object(I.a)(c,2),o=r[0],d=r[1],u=t.suggestions,l=void 0===u?[]:u;Object(s.useEffect)((function(){var e=l.filter((function(e){return e.LocalizedName===o.value}));e.length>0&&i(e[0].Key),e.length>0&&a(e[0].Key,e[0].LocalizedName)}),[o]);var f=l.map((function(e){return{label:e.LocalizedName,value:e.LocalizedName}}));return Object(O.jsx)(P,{children:Object(O.jsx)(W.AutoComplete,{value:o,suggestions:f,field:"value",onChange:function(e){return d(e.value)},completeMethod:function(){void 0!==o&&n(o)},type:"a-z"})})})),H=n(44),K=n.n(H),_=h.a.div(T||(T=Object(x.a)(["\n    padding: 1.2rem;\n    margin: 5px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    border-radius: 10px;\n    width: 180px;\n    text-align: center;\n      @media (max-width: 400px){\n        width: 100%;\n      }\n"]))),q=h.a.div(S||(S=Object(x.a)(["\n    display: flex;\n    justify-content: space-around;\n      @media (max-width: 400px){\n        flex-direction: column;\n        justify-content: space-between;\n      }\n"]))),U=h.a.div(E||(E=Object(x.a)(["\n    font-size: var(--heading-4);\n    font-weight: 400;\n"]))),X=Object(b.b)((function(e){return{data:e.data}}))((function(e){var t,n,i=e.data;return Object(O.jsx)(q,{children:null===i||void 0===i||null===(t=i.weeklyForecast)||void 0===t||null===(n=t.DailyForecasts)||void 0===n?void 0:n.map((function(e,t){return Object(O.jsxs)(_,{children:[Object(O.jsx)(U,{children:K()(e.Date).format("dddd")}),Object(O.jsx)("p",{children:e.Day.IconPhrase}),Object(O.jsxs)("p",{children:[e.Temperature.Minimum.Value,"\xb0"]}),Object(O.jsxs)("p",{children:[e.Temperature.Maximum.Value,"\xb0"]})]},t)}))})}));var Q,Y,Z,$,ee,te,ne,ie,ae,ce,re,oe=function(e,t){var n=Object(s.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(i){return console.log(i),t}})),i=Object(I.a)(n,2),a=i[0],c=i[1];return[a,function(t){try{var n=t instanceof Function?t(a):t;c(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(i){console.log(i)}}]},de=h.a.div(Q||(Q=Object(x.a)(["\n    display: flex;\n    justify-content: center;\n    margin: 20px 0;\n"]))),se=h.a.div(Y||(Y=Object(x.a)(["   \n    display: flex;\n    flex-direction: column;\n    width: 80%;background: #ffffff;\n    color: var(--black);\n    box-shadow:  3px 3px 17px #e1e1e3, -3px -3px 17px #ffffff;\n    border-radius: 15px;\n    margin: 10px 0 0 0;\n    padding: 23px;\n    flex-grow: 1;\n    margin: auto;\n      @media (max-width: 400px){\n        width: 100%;\n      }\n"]))),ue=h.a.div(Z||(Z=Object(x.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;   \n"]))),le=h.a.div($||($=Object(x.a)(["\n  font-size: var(--heading-3);\n  font-weight: 400;\n"]))),fe=h.a.div(ee||(ee=Object(x.a)(["\n    font-size: var(--heading-3);\n"]))),je=h.a.div(te||(te=Object(x.a)(["\n    text-align: center;\n"]))),be=h.a.div(ne||(ne=Object(x.a)(["\n    border-top: 1px solid #eee;\n    margin: 1.5rem 0rem 1.5rem 0rem;\n"]))),pe=Object(b.b)((function(e){return{data:e.data,currentCity:e.data.currentConditions.cityName}}),{getWeather:R,getCurrentConditions:J})((function(e){var t=e.data,n=e.getWeather,i=e.getCurrentConditions,a=e.currentCity,c=oe("favorites",[]),r=Object(I.a)(c,2),o=r[0],d=r[1],u=Object(s.useState)(!1),l=Object(I.a)(u,2),f=l[0],j=l[1];Object(s.useEffect)((function(){void 0===a&&(navigator.geolocation?(n(215854),i(215854,"Tel Aviv")):navigator.geolocation.getCurrentPosition((function(e){e.coords.latitude,e.coords.longitude})))}),[a]);Object(s.useEffect)((function(){(o.length>0?o.filter((function(e){if(e.cityName===a)return e})):[]).length>0?j(!0):j(!1)}),[a]);return Object(O.jsxs)("div",{children:[Object(O.jsx)(de,{children:Object(O.jsx)(B,{})}),Object(O.jsxs)(se,{children:[t.currentConditions.WeatherText&&Object(O.jsxs)(ue,{children:[Object(O.jsx)(le,{children:t.currentConditions.cityName}),Object(O.jsxs)(je,{children:[Object(O.jsx)(fe,{children:t.currentConditions.WeatherText}),Object(O.jsxs)(fe,{children:[function(e,t){if(e)return 9*Math.floor(t/5)+32}(!0,t.currentConditions.Temperature.Metric.Value),"\xb0"]})]}),Object(O.jsx)(M.Button,{onClick:function(){return function(e){var t=e.cityName,n=e.key;if((o.length>0?o.filter((function(e){if(e.cityName===t)return e})):[]).length>0){j(!1);var i=o.reduce((function(e,n){return n.cityName!==t?[].concat(Object(z.a)(e),[n]):e}),[]);d(i)}else{j(!0);var a=o.length>0?o:[];d([].concat(Object(z.a)(a),[{cityName:t,key:n}]))}}(t.currentConditions)},icon:"pi pi-star-o",className:f?"p-button-rounded p-button-secondary":"p-button-rounded p-button-secondary p-button-outlined"})]}),Object(O.jsx)(be,{}),Object(O.jsx)(X,{})]})]})})),xe=h.a.div(ie||(ie=Object(x.a)(["\n    padding: 1.2rem;\n    margin: 15px;\n    border-radius: 5px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n    text-align: center;\n      @media (max-width: 400px){\n          display:flex;\n          justify-content:space-between;\n    }\n      :hover {\n          box-shadow: 0 14px 18px rgba(0,0,0,0.15), 0 5px 5px rgba(0,0,0,0.12);\n          border-radius: 5px;\n      @media (max-width: 400px){\n          display:flex;\n          justify-content:space-between;\n    }\n}\n"]))),he=h.a.div(ae||(ae=Object(x.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n      @media (max-width: 400px){\n          display: flex;\n          flex-direction: column;\n      }\n"]))),Oe=h.a.div(ce||(ce=Object(x.a)(["\n    text-align: center;\n    font-size:var(--heading-2)\n"]))),ve=h.a.div(re||(re=Object(x.a)(["\n    font-weight: 400;\n"]))),ge=Object(b.b)((function(e){return{favoritesConditions:e.data.favoritesConditions,currentCity:e.data.currentConditions.cityName}}),{getFavoritesConditions:function(e){return function(t){Promise.all(e.map((function(e){return fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(e.key,"?apikey=").concat(L))}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){t({type:G,payload:e})})).catch((function(e){return console.log("faild to get favorite conditions")}))}},getWeather:R,getCurrentConditions:J})((function(e){var t=e.getFavoritesConditions,n=e.favoritesConditions,i=e.getWeather,a=e.getCurrentConditions,c=oe("favorites"),r=Object(I.a)(c,2),o=r[0],d=(r[1],Object(p.f)());Object(s.useEffect)((function(){t(o)}),[]);var u=function(e){var t=e.slice(31),n=t.indexOf("/");return t.slice(0,n).replace("-"," ")};return Object(O.jsxs)("div",{children:[Object(O.jsx)(Oe,{children:"These are my favorites, There are many favorites like it but these are mine"}),Object(O.jsx)(he,{children:n.map((function(e,t){return Object(O.jsxs)(xe,{onClick:function(){return function(e){var t=e.slice(63),n=t.indexOf("?"),c=t.slice(0,n);i(c),a(c,u(e)),d.push("/")}(e[0].MobileLink)},children:[Object(O.jsx)(ve,{children:u(e[0].MobileLink)}),Object(O.jsx)("div",{children:e[0].WeatherText}),Object(O.jsxs)("div",{children:[e[0].Temperature.Metric.Value,"\xb0"]})]},t)}))})]})})),me=n(15),ye=n(45),we=n(46),Ce={suggestions:[],weeklyForecast:{},currentConditions:{},favoritesConditions:[]},ke=Object(me.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(F.a)(Object(F.a)({},e),{},{suggestions:t.payload});case D:return Object(F.a)(Object(F.a)({},e),{},{weeklyForecast:t.payload});case V:return Object(F.a)(Object(F.a)({},e),{},{currentConditions:t.payload});case G:return Object(F.a)(Object(F.a)({},e),{},{favoritesConditions:t.payload});default:return e}}}),Ne=[we.a],Te=Object(me.createStore)(ke,{},Object(ye.composeWithDevTools)(me.applyMiddleware.apply(void 0,Ne)));n(67),n(68),n(69),n(70);var Se=function(){return Object(O.jsx)(b.a,{store:Te,children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(k,{}),Object(O.jsxs)(p.c,{children:[Object(O.jsx)(p.a,{path:"/favorites",component:ge}),Object(O.jsx)(p.a,{path:"/",component:pe,exact:!0})]})]})})};f.a.render(Object(O.jsx)(u.a.StrictMode,{children:Object(O.jsx)(j.a,{children:Object(O.jsx)(Se,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.b9fdb4ba.chunk.js.map