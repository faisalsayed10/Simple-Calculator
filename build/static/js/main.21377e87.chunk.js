(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(23)},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),u=n.n(c),l=n(11),o=(n(18),n(19),function(e){var t;return r.a.createElement("div",{className:"button-wrapper ".concat((t=e.children,isNaN(t)&&"."!==t&&"="!==t?"operator":null)),onClick:e.onClick},e.children)}),i=(n(20),function(e){return r.a.createElement("div",{className:"input"},e.input)}),m=(n(21),function(e){return r.a.createElement("div",{className:"equal-btn",onClick:e.onClick},e.children)});function p(e){var t=e.state,n=e.dispatch;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"ReactJs Calculator"),r.a.createElement("div",{className:"calc-wrapper"},r.a.createElement(i,{input:t}),r.a.createElement("div",{className:"row"},r.a.createElement(o,{onClick:function(){return n({type:"addtoInputNum",param:"7"})}},"7"),r.a.createElement(o,{onClick:function(){return n({type:"addtoInputNum",param:"8"})}},"8"),r.a.createElement(o,{onClick:function(){return n({type:"addtoInputNum",param:"9"})}},"9"),r.a.createElement(o,{onClick:function(){return n({type:"addtoInputOpr",param:"/"})}},"/"),r.a.createElement(o,{onClick:function(){return n({type:"handleRoot"})}},"\u221a")),r.a.createElement("div",{className:"row"},r.a.createElement(o,{onClick:function(){return n({type:"addtoInputNum",param:"4"})}},"4"),r.a.createElement(o,{onClick:function(){return n({type:"addtoInputNum",param:"5"})}},"5"),r.a.createElement(o,{onClick:function(){return n({type:"addtoInputNum",param:"6"})}},"6"),r.a.createElement(o,{onClick:function(){return n({type:"addtoInputOpr",param:"*"})}},"X"),r.a.createElement(o,{onClick:function(){return n({type:"handleCube"})}},"x\xb3")),r.a.createElement("div",{className:"row"},r.a.createElement(o,{onClick:function(){return n({type:"addtoInputNum",param:"1"})}},"1"),r.a.createElement(o,{onClick:function(){return n({type:"addtoInputNum",param:"2"})}},"2"),r.a.createElement(o,{onClick:function(){return n({type:"addtoInputNum",param:"3"})}},"3"),r.a.createElement(o,{onClick:function(){return n({type:"addtoInputOpr",param:"+"})}},"+"),r.a.createElement(o,{onClick:function(){return n({type:"handleSquare"})}},"x\xb2")),r.a.createElement("div",{className:"row"},r.a.createElement(o,{onClick:function(){return n({type:"addtoInputNum",param:"."})}},"."),r.a.createElement(o,{onClick:function(){return n({type:"addtoInputNum",param:"0"})}},"0"),r.a.createElement(o,{onClick:function(){return n({type:"addtoInputNum",param:"00"})}},"00"),r.a.createElement(o,{onClick:function(){return n({type:"addtoInputNum",param:"-"})}},"-"),r.a.createElement(o,{onClick:function(){return n({type:"handleClear"})}},"C")),r.a.createElement("div",{className:"row"},r.a.createElement(m,{onClick:function(){return n({type:"handleEqual"})}},"="))))}var d=n(25),E={handleClear:()=>(console.clear(),""),addtoInputNum:(e,t)=>(console.log(e,t),e+t),addtoInputOpr:(e,t)=>""===e?e:e+t,handleEqual:e=>""===e?e:(console.log(d.a(e)),d.a(e)),handleRoot:e=>""===e?e:Math.sqrt(e),handleSquare:e=>""===e?e:Math.pow(e,2),handleCube:e=>""===e?e:Math.pow(e,3)};function s(e,t){var n=t.type,a=t.param;return console.log(t),E[n](e,a)}var f=function(){var e=Object(a.useReducer)(s,""),t=Object(l.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{state:n,dispatch:c}))},C=document.getElementById("root");u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),C)}},[[13,1,2]]]);
//# sourceMappingURL=main.21377e87.chunk.js.map