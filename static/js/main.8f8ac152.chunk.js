(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),s=n.n(a),u=(n(10),n(3)),l=n.n(u),i=n(5);function o(){return(o=Object(i.a)(l.a.mark((function e(){var t,n,c,r,a,s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.cbr-xml-daily.ru/daily_json.js");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=document.querySelector(".select").value,r=JSON.stringify(n.Valute.USD.Value),a=JSON.stringify(n.Valute.EUR.Value),s=JSON.stringify(n.Date),u=document.querySelector(".searchTxt").value,document.querySelector(".date").innerHTML=s,"0"===c&&(document.querySelector(".summer").value=u*r),"1"===c&&(document.querySelector(".summer").value=u*a);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(){return o.apply(this,arguments)},d=n(0),p=function(e){var t=e.loadData;return t(),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0432\u0430\u043b\u044e\u0442"}),Object(d.jsx)("div",{className:"date",children:"\u0414\u0430\u0442\u0430 \u043a\u0443\u0440\u0441\u0430 \u0432\u0430\u043b\u044e\u0442\u044b:"}),Object(d.jsx)("input",{type:"number",className:"searchTxt",defaultValue:"1",name:"searchTxt",onKeyUp:t,onClick:t}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:"="}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",name:"",className:"summer",placeholder:"0"}),Object(d.jsxs)("select",{className:"select",onChange:t,children:[Object(d.jsx)("option",{value:"0",children:"USD"}),Object(d.jsx)("option",{value:"1",children:"EURO"})]}),Object(d.jsx)("div",{className:"selectRu",children:"/ RU"})]})},h=function(){return Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)(p,{loadData:j})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),m()}},[[13,1,2]]]);
//# sourceMappingURL=main.8f8ac152.chunk.js.map