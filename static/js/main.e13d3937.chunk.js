(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(4),r=a.n(l),o=(a(9),a(2)),s=(a(10),a(0));function i(e){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(s.jsx)("label",{htmlFor:"exampleColorInput",className:"form-label my-10",children:"Color picker"}),Object(s.jsx)("input",{type:"color",className:"form-control form-control-color",onChange:e.HandleOnChnage,id:"exampleColorInput",title:"Choose your color"}),Object(s.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function b(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{htmlFor:"myText",className:"form-label",children:e.heading}),Object(s.jsx)("textarea",{className:"form-control",value:c,id:"myText",rows:"8",style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"black":"white"},onChange:function(e){l(e.target.value)}})]}),Object(s.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.toUpperCase();l(t),e.showAlert("Upper case done.","success")},children:"Convert to upper case"}),Object(s.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.toLowerCase();l(t),e.showAlert("Lower case done.","primary")},children:"Convert to lower lower"}),Object(s.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=c.split(/[ ]+/);l(e.join(" "))},children:"Remove Extra Spaces"}),Object(s.jsx)("button",{className:"btn btn-success mx-2",onClick:function(){navigator.clipboard.writeText(c)},children:"Copy to clipboard"}),Object(s.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(){l(""),e.showAlert("Clear.","danger")},children:"Clear"})]}),Object(s.jsxs)("div",{className:"container my3",style:{color:"light"===e.mode?"black":"white"},children:[Object(s.jsx)("h2",{children:"Your text Summary"}),Object(s.jsxs)("p",{children:[""===c?0:c.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n /,"\n").split(" ").length," words and ",c.length," characters."]}),Object(s.jsxs)("p",{children:[.008*c.split(" ").length," Mintues read."]}),Object(s.jsx)("h2",{children:"Preview"}),Object(s.jsx)("p",{children:c.length>0?c:"Enter something to preview"})]})]})}i.defaultProps={title:"Text Utils",aboutText:"About us"};var d=function(e){return e.alert&&Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"container my-3",children:Object(s.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(s.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," "]}),e.alert.messgae]})})})};var m=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),r=Object(o.a)(l,2),m=r[0],h=r[1],j=Object(n.useState)("black"),u=Object(o.a)(j,2),x=u[0],g=u[1],p=function(e,t){h({messgae:e,type:t}),setTimeout((function(){h(null)}),1500)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor=x,document.title="TextUtils - Darkmode",p("Dark mode has been enable","success"),setInterval((function(){document.title="TextUtils - Darkmode"}),1e3),setInterval((function(){document.title="Install now"}),1500)):(c("light"),document.body.style.backgroundColor="white",p("Light mode has been enable","success"),document.title="TextUtils - Lightmode")},HandleOnChnage:function(e){g(e.target.value),console.log(e.target.value)},colors:x}),Object(s.jsx)(d,{alert:m}),Object(s.jsx)("div",{className:"container my-3"}),Object(s.jsx)(b,{heading:"Enter The Text to ananlyze below",mode:a,showAlert:p})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.e13d3937.chunk.js.map