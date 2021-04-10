(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a,i,c,r,o,s,d=n(0),u=n.n(d),l=n(10),j=n.n(l),f=n(20),b=n(13),p=n(7),h=n(3),x=n(4),O=n(1),m=x.a.div(a||(a=Object(h.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width:100%   \n"]))),v=x.a.div(i||(i=Object(h.a)(["\n    width: 100%;\n    display:flex;\n    justify-content: space-between;\n    box-shadow: 0 0 4px rgb(0 0 0 / 25%);\n    border-bottom: 1px solid var(--surface-d);\n"]))),g=x.a.div(c||(c=Object(h.a)(["\n    justify-content: flex-end;\n      @media (max-width: 400px){\n        display: flex;\n      }\n"]))),y=x.a.div(r||(r=Object(h.a)(["\n    display:flex;\n    justify-content: flex-start;\n    color: var(--black);\n    font-size: var(--heading-2);\n    font-weight:400;\n    padding: 1rem;\n      @media (max-width: 400px){\n        font-size: var(--heading-3);\n        padding: 1rem;\n      }\n"]))),w=x.a.div(o||(o=Object(h.a)(["\n  display:inline-block;\n  padding: 0.5rem 1rem;\n  margin: 0.5rem;\n  background-color:#FBC02D;\n  border-radius: 5px;\n  text-align: center;\n    @media (max-width: 400px){\n      display:inline-block;\n      padding: 0.2rem 0.5rem;\n      font-size: var(--heading-4);\n    }\n"]))),C=Object(x.a)(f.b)(s||(s=Object(h.a)(["\n  text-decoration: none;\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n    }\n"])));function k(){return Object(O.jsx)(v,{children:Object(O.jsxs)(m,{children:[Object(O.jsx)(y,{children:"HEROLO weather"}),Object(O.jsxs)(g,{children:[Object(O.jsx)(C,{to:"/",children:Object(O.jsx)(w,{children:"HOME"})}),Object(O.jsx)(C,{to:"/favorites",children:Object(O.jsx)(w,{children:"FAVORITES"})})]})]})})}var T,N,A,E,S=n(31),z=n(14),F=n(42),I=n(43),M=n(44),W=n(12),R="SUGGESTIONS",D="GET_WEATHER",G="CURRENT_CONDITIONS",L="FAVORITES_CONDITIONS",V="42jHPT6VXvQuFTMmkuAXRsR5TfoWlm0N",P=function(e){return function(t){fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat(V,"&metric=true"),{method:"GET",headers:{"Access-Control-Allow-Origin":"*"},mode:"cors"}).then((function(e){return e.json()})).then((function(e){return t({type:D,payload:e})})).catch((function(e){return console.log("faild to get 5 day foreCast")}))}},B=function(e,t){return function(n){fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=").concat(V),{method:"GET",headers:{"Access-Control-Allow-Origin":"*"},mode:"cors"}).then((function(e){return e.json()})).then((function(a){var i=a[0];n({type:G,payload:Object(W.a)(Object(W.a)({},i),{},{cityName:t,key:e})})})).catch((function(e){return console.log("faild to get current conditions")}))}},H=x.a.div(T||(T=Object(h.a)(["\n    display: flex;\n    justify-content: center;\n"]))),J=Object(b.b)((function(e){return{data:e.data}}),{getAutoComplete:function(e){return function(t){fetch("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(V,"&q=").concat(e),{method:"GET",headers:{"Access-Control-Allow-Origin":"*"},mode:"cors"}).then((function(e){return e.json()})).then((function(e){return t({type:R,payload:e})})).catch((function(e){return console.log("faild to get autoComplete API")}))}},getWeather:P,getCurrentConditions:B})((function(e){var t=e.data,n=e.getAutoComplete,a=e.getWeather,i=e.getCurrentConditions,c=Object(d.useState)(),r=Object(z.a)(c,2),o=r[0],s=r[1],u=t.suggestions,l=void 0===u?[]:u;Object(d.useEffect)((function(){var e=l.filter((function(e){return e.LocalizedName===o.value}));e.length>0&&a(e[0].Key),e.length>0&&i(e[0].Key,e[0].LocalizedName)}),[o]);var j=l.map((function(e){return{label:e.LocalizedName,value:e.LocalizedName}}));return Object(O.jsx)(H,{children:Object(O.jsx)(M.AutoComplete,{value:o,suggestions:j,field:"value",onChange:function(e){return s(e.value)},completeMethod:function(){void 0!==o&&n(o)},type:"a-z"})})})),_=n(45),K=n.n(_),U=function(e,t){return e?9*Math.floor(t/5)+32:t},X=x.a.div(N||(N=Object(h.a)(["\n    padding: 1.2rem;\n    margin: 5px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    border-radius: 10px;\n    width: 180px;\n    text-align: center;\n      @media (max-width: 400px){\n        width: 100%;\n      }\n"]))),q=x.a.div(A||(A=Object(h.a)(["\n    display: flex;\n    justify-content: space-around;\n      @media (max-width: 400px){\n        flex-direction: column;\n        justify-content: space-between;\n      }\n"]))),Q=x.a.div(E||(E=Object(h.a)(["\n    font-size: var(--heading-4);\n    font-weight: 400;\n"]))),Y=Object(b.b)((function(e){return{data:e.data}}))((function(e){var t,n,a=e.data,i=e.fahrenheit;return Object(O.jsx)(q,{children:null===a||void 0===a||null===(t=a.weeklyForecast)||void 0===t||null===(n=t.DailyForecasts)||void 0===n?void 0:n.map((function(e,t){return Object(O.jsxs)(X,{children:[Object(O.jsx)(Q,{children:K()(e.Date).format("dddd")}),Object(O.jsx)("p",{children:e.Day.IconPhrase}),Object(O.jsxs)("p",{children:[U(i,e.Temperature.Minimum.Value),"\xb0"]}),Object(O.jsxs)("p",{children:[U(i,e.Temperature.Maximum.Value),"\xb0"]})]},t)}))})}));var Z,$,ee,te,ne,ae,ie,ce,re,oe,se,de,ue,le=function(e,t){var n=Object(d.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),a=Object(z.a)(n,2),i=a[0],c=a[1];return[i,function(t){try{var n=t instanceof Function?t(i):t;c(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]},je=x.a.div(Z||(Z=Object(h.a)(["\n    display: flex;\n    justify-content: center;\n    margin: 20px 0;\n"]))),fe=x.a.div($||($=Object(h.a)(["   \n    display: flex;\n    flex-direction: column;\n    width: 80%;background: #ffffff;\n    color: var(--black);\n    box-shadow:  3px 3px 17px #e1e1e3, -3px -3px 17px #ffffff;\n    border-radius: 15px;\n    margin: 10px 0 0 0;\n    padding: 23px;\n    flex-grow: 1;\n    margin: auto;\n      @media (max-width: 400px){\n        width: 100%;\n      }\n"]))),be=x.a.div(ee||(ee=Object(h.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;   \n"]))),pe=x.a.div(te||(te=Object(h.a)(["\n  font-size: var(--heading-3);\n  font-weight: 400;\n"]))),he=x.a.div(ne||(ne=Object(h.a)(["\n    font-size: var(--heading-3);\n"]))),xe=x.a.div(ae||(ae=Object(h.a)(["\n    text-align: center;\n"]))),Oe=x.a.div(ie||(ie=Object(h.a)(["\n    border-top: 1px solid #eee;\n    margin: 1.5rem 0rem 1.5rem 0rem;\n"]))),me=x.a.div(ce||(ce=Object(h.a)(["\n  display: flex;\n"]))),ve=Object(x.a)(F.Button)(re||(re=Object(h.a)(["\n  margin-left: 15px;\n"]))),ge=Object(b.b)((function(e){return{data:e.data,currentCity:e.data.currentConditions.cityName}}),{getWeather:P,getCurrentConditions:B})((function(e){var t=e.data,n=e.getWeather,a=e.getCurrentConditions,i=e.currentCity,c=le("favorites",[]),r=Object(z.a)(c,2),o=r[0],s=r[1],u=Object(d.useState)(!1),l=Object(z.a)(u,2),j=l[0],f=l[1],b=Object(d.useState)("\xb0C"),p=Object(z.a)(b,2),h=p[0],x=p[1],m=["\xb0C","\xb0F"];Object(d.useEffect)((function(){void 0===i&&(navigator.geolocation?(n(215854),a(215854,"Tel Aviv")):navigator.geolocation.getCurrentPosition((function(e){e.coords.latitude,e.coords.longitude})))}),[i]);return Object(d.useEffect)((function(){(o.length>0?o.filter((function(e){if(e.cityName===i)return e})):[]).length>0?f(!0):f(!1)}),[i]),Object(O.jsxs)("div",{children:[Object(O.jsx)(je,{children:Object(O.jsx)(J,{})}),Object(O.jsxs)(fe,{children:[t.currentConditions.WeatherText&&Object(O.jsxs)(be,{children:[Object(O.jsx)(pe,{children:t.currentConditions.cityName}),Object(O.jsxs)(xe,{children:[Object(O.jsx)(he,{children:t.currentConditions.WeatherText}),Object(O.jsxs)(he,{children:[U(h===m[1],t.currentConditions.Temperature.Metric.Value),"\xb0"]})]}),Object(O.jsxs)(me,{children:[Object(O.jsx)(I.SelectButton,{value:h,options:m,onChange:function(e){return x(e.value)}}),Object(O.jsx)(ve,{onClick:function(){return function(e){var t=e.cityName,n=e.key;if((o.length>0?o.filter((function(e){if(e.cityName===t)return e})):[]).length>0){f(!1);var a=o.reduce((function(e,n){return n.cityName!==t?[].concat(Object(S.a)(e),[n]):e}),[]);s(a)}else{f(!0);var i=o.length>0?o:[];s([].concat(Object(S.a)(i),[{cityName:t,key:n}]))}}(t.currentConditions)},icon:"pi pi-star-o",className:j?"p-button-rounded p-button-secondary":"p-button-rounded p-button-secondary p-button-outlined"})]})]}),Object(O.jsx)(Oe,{}),Object(O.jsx)(Y,{fahrenheit:h===m[1]})]})]})})),ye=x.a.div(oe||(oe=Object(h.a)(["\n    padding: 1.2rem;\n    margin: 15px;\n    border-radius: 5px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n    text-align: center;\n      @media (max-width: 400px){\n          display:flex;\n          justify-content:space-between;\n    }\n      :hover {\n          box-shadow: 0 14px 18px rgba(0,0,0,0.15), 0 5px 5px rgba(0,0,0,0.12);\n          border-radius: 5px;\n      @media (max-width: 400px){\n          display:flex;\n          justify-content:space-between;\n    }\n}\n"]))),we=x.a.div(se||(se=Object(h.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n      @media (max-width: 400px){\n          display: flex;\n          flex-direction: column;\n      }\n"]))),Ce=x.a.div(de||(de=Object(h.a)(["\n    text-align: center;\n    font-size:var(--heading-2)\n"]))),ke=x.a.div(ue||(ue=Object(h.a)(["\n    font-weight: 400;\n"]))),Te=Object(b.b)((function(e){return{favoritesConditions:e.data.favoritesConditions,currentCity:e.data.currentConditions.cityName}}),{getFavoritesConditions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(t){Promise.all(e.map((function(e){return fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(e.key,"?apikey=").concat(V),{method:"GET",headers:{"Access-Control-Allow-Origin":"*"},mode:"cors"})}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){t({type:L,payload:e})})).catch((function(e){return console.log("faild to get favorite conditions")}))}},getWeather:P,getCurrentConditions:B})((function(e){var t=e.getFavoritesConditions,n=e.favoritesConditions,a=e.getWeather,i=e.getCurrentConditions,c=le("favorites"),r=Object(z.a)(c,2),o=r[0],s=(r[1],Object(p.f)());Object(d.useEffect)((function(){t(o)}),[]);var u=function(e){var t=e.slice(31),n=t.indexOf("/");return t.slice(0,n).replace("-"," ")};return Object(O.jsxs)("div",{children:[Object(O.jsx)(Ce,{children:"These are my favorites, There are many favorites like it but these are mine"}),Object(O.jsx)(we,{children:n.map((function(e,t){return Object(O.jsxs)(ye,{onClick:function(){return function(e){var t=e.slice(63),n=t.indexOf("?"),c=t.slice(0,n);a(c),i(c,u(e)),s.push("/")}(e[0].MobileLink)},children:[Object(O.jsx)(ke,{children:u(e[0].MobileLink)}),Object(O.jsx)("div",{children:e[0].WeatherText}),Object(O.jsxs)("div",{children:[e[0].Temperature.Metric.Value,"\xb0"]})]},t)}))})]})})),Ne=n(15),Ae=n(46),Ee=n(47),Se={suggestions:[],weeklyForecast:{},currentConditions:{},favoritesConditions:[]},ze=Object(Ne.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(W.a)(Object(W.a)({},e),{},{suggestions:t.payload});case D:return Object(W.a)(Object(W.a)({},e),{},{weeklyForecast:t.payload});case G:return Object(W.a)(Object(W.a)({},e),{},{currentConditions:t.payload});case L:return Object(W.a)(Object(W.a)({},e),{},{favoritesConditions:t.payload});default:return e}}}),Fe=[Ee.a],Ie=Object(Ne.createStore)(ze,{},Object(Ae.composeWithDevTools)(Ne.applyMiddleware.apply(void 0,Fe)));n(70),n(71),n(72),n(73);var Me=function(){return Object(O.jsx)(b.a,{store:Ie,children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(k,{}),Object(O.jsxs)(p.c,{children:[Object(O.jsx)(p.a,{path:"/favorites",component:Te}),Object(O.jsx)(p.a,{path:"/",component:ge,exact:!0})]})]})})};j.a.render(Object(O.jsx)(u.a.StrictMode,{children:Object(O.jsx)(f.a,{basename:"/",children:Object(O.jsx)(Me,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.a2cd69b3.chunk.js.map