(function(t){function e(e){for(var s,n,l=e[0],i=e[1],c=e[2],u=0,v=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&v.push(o[n][0]),o[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);p&&p(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,l=1;l<a.length;l++){var i=a[l];0!==o[i]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},o={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("svg",{staticClass:"w-25 px-5",attrs:{xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 250 133"}},[a("path",{attrs:{d:"M3.4,24.73c3.51.67,4.37,3.82,4.37,7.53v69.37c0,3.71-.86,6.93-4.37,7.6v.7H61.48l4.28-13H64.53A19.72,19.72,0,0,1,46.8,108.06H13.57V90.18h0V23.85H3.4Z"}}),a("path",{attrs:{d:"M233.15,101.31c-5.76-4.16-5.78-4.32-12.34-12.86L207.35,68.38c7.15-1.49,10.36-4.57,13.94-9A23.67,23.67,0,0,0,226.65,44a17.07,17.07,0,0,0-7.77-14.88c-5.18-3.57-11.06-5.29-21.93-5.29H162.09v.88c3.39.76,4.42,3.7,4.42,7.32v69.37c0,3.62-1,7-4.42,7.81v.7h14.58v-.7c-3.53-.65-4.41-4.09-4.41-7.81v-33l28.16-.06S208.54,81.49,216,92.45s14.69,16.36,30,15A46.22,46.22,0,0,1,233.15,101.31ZM196.34,66.45H172.26V25.83c3.72-.07,9.32-.1,14.94-.1h9c9,0,15.41,2.14,19.09,5.23s5.51,7.37,5.51,13.17q0,10-5.9,16.41C211,64.81,204.79,66.51,196.34,66.45Z"}}),a("path",{attrs:{d:"M138.19,33.19c4.56-6,4.62-6,9.81-8.46v-.88h-5.25L114.44,63.49,88.64,23.85H78.38v.88c5.21,2.69,5.3,2.68,7.66,5.81l23.71,36.4h0l1,1.49-21,30.22c-5.9,7.67-6.15,8-11.34,10.4v.88h5.41l28-39.88,26,39.88H148v-.7c-4.64-1.67-4.62-1.78-7.6-5.91l-23.71-36.4h0l-1.25-1.86Z"}})]),a("Table")],1)])},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-md-3 text-start"},[a("Dropdown",{on:{"update:option":t.optionUpdate}})],1),t._m(0)]),a("table",{staticClass:"table table-hover text-start"},[t._m(1),a("tbody",t._l(t.items,(function(e){return a("tr",{key:e.id,attrs:{scope:"row"},on:{click:function(a){return t.showDetails(e)}}},[a("th",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.topics.toString().replaceAll(","," - ")))]),a("td",[t._v(t._s(e.levels.toString().replaceAll(","," - ")))])])})),0)]),a("b-modal",{attrs:{id:"detail",size:"lg",centered:"",title:"More Detail :","header-bg-variant":"dark","header-text-variant":"light",bodyTextVariant:"dark","ok-only":"","hide-header-close":""}},[a("span",{staticClass:"fw-bold"},[t._v("Description :")]),a("p",{staticClass:"my-2"},[t._v(t._s(t.description))]),a("span",{staticClass:"fw-bold"},[t._v("Types : ")]),a("p",{staticClass:"my-2"},[t._v(t._s(t.types.toString().replaceAll(","," - ")))]),a("span",{staticClass:"fw-bold"},[t._v("Topics : ")]),a("p",{staticClass:"my-2"},[t._v(t._s(t.topics.toString().replaceAll(","," - ")))]),a("span",{staticClass:"fw-bold"},[t._v("Levels :")]),a("p",{staticClass:"my-2"},[t._v(" "+t._s(t.levels.toString().replaceAll(","," - ")))]),a("span",{staticClass:"fw-bold"},[t._v("Url : ")]),a("br"),a("a",{attrs:{href:t.url}},[t._v(t._s(t.url))]),a("br")])],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-9 text-end"},[a("h5",[t._v("Welcome to my assignment")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"table-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Topics")]),a("th",{attrs:{scope:"col"}},[t._v("Levels")])])])}],i=(a("a4d3"),a("e01a"),a("159b"),a("caad"),a("2532"),a("bc3a")),c=a.n(i),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("select",{staticClass:"form-select mb-3",attrs:{"aria-label":"Default select example"},on:{change:function(e){return t.selectTopic(e)}}},[a("option",{attrs:{selected:"",disabled:""}},[t._v("Please choose your favorite topic")]),a("option",{attrs:{value:"java"}},[t._v("java")]),a("option",{attrs:{value:"css"}},[t._v("css")]),a("option",{attrs:{value:"git"}},[t._v("git")]),a("option",{attrs:{value:"rails"}},[t._v("rails")]),a("option",{attrs:{value:"sql"}},[t._v("sql")]),a("option",{attrs:{value:"angularjs"}},[t._v("angularjs")]),a("option",{attrs:{value:"php"}},[t._v("php")]),a("option",{attrs:{value:"iOS"}},[t._v("iOS")]),a("option",{attrs:{value:"android"}},[t._v("android")]),a("option",{attrs:{value:"java"}},[t._v("java")]),a("option",{attrs:{value:"c#"}},[t._v("c#")]),a("option",{attrs:{value:"game development"}},[t._v("game development")]),a("option",{attrs:{value:"databases"}},[t._v("databases")]),a("option",{attrs:{value:"wordpress"}},[t._v("wordpress")]),a("option",{attrs:{value:"html"}},[t._v("html")]),a("option",{attrs:{value:"ruby"}},[t._v("ruby")]),a("option",{attrs:{value:"App Development"}},[t._v("App Development")]),a("option",{attrs:{value:"computer science"}},[t._v("computer science")]),a("option",{attrs:{value:"aws"}},[t._v("aws")]),a("option",{attrs:{value:"cloud security"}},[t._v("cloud security")]),a("option",{attrs:{value:"bug"}},[t._v("bug")]),a("option",{attrs:{value:"iot"}},[t._v("iot")]),a("option",{attrs:{value:"smalltalk"}},[t._v("smalltalk")]),a("option",{attrs:{value:"misc"}},[t._v("misc")]),a("option",{attrs:{value:"Go"}},[t._v("Go")]),a("option",{attrs:{value:"security"}},[t._v("security")]),a("option",{attrs:{value:"ctf"}},[t._v("ctf")]),a("option",{attrs:{value:"learn to code"}},[t._v("learn to code")]),a("option",{attrs:{value:"javascript"}},[t._v("javascript")])])])},u=[],v={name:"Dropdown",methods:{selectTopic:function(t){this.$emit("update:option",t)}}},d=v,f=a("2877"),_=Object(f["a"])(d,p,u,!1,null,null,null),h=_.exports,m={name:"Table",components:{Dropdown:h},mounted:function(){var t=this;c.a.get("https://api.sampleapis.com/codingresources/codingResources").then((function(e){return t.items=e.data,t.copyItems=e.data}))},data:function(){return{test:null,items:null,description:String,url:String,types:Array,topics:Array,levels:Array}},methods:{showDetails:function(t){this.$bvModal.show("detail"),this.description=t.description,this.url=t.url,this.types=t.types,this.topics=t.topics,this.levels=t.levels},optionUpdate:function(t){var e=[],a=this.copyItems;a.forEach((function(a){a.topics.includes(t.target.value)&&e.push(a)})),this.items=e}}},b=m,y=Object(f["a"])(b,n,l,!1,null,null,null),g=y.exports,w={name:"App",components:{Table:g}},j=w,x=(a("034f"),Object(f["a"])(j,o,r,!1,null,null,null)),C=x.exports,O=a("5f5b"),S=a("b1e0"),A=a("2106"),T=a.n(A);a("f9e3"),a("2dd8");s["default"].config.productionTip=!1,s["default"].use(O["a"]),s["default"].use(S["a"]),s["default"].use(T.a,c.a),window.axios=a("bc3a"),new s["default"]({render:function(t){return t(C)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.f48cd643.js.map