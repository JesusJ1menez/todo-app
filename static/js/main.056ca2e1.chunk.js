(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/emptyToDo.4fbac563.svg"},function(e,t,a){e.exports=a.p+"static/media/noResults.c486a180.svg"},function(e,t,a){e.exports=a(38)},,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(6),r=a.n(c),l=a(2),u=a(1);var m=o.a.createContext();function s(e){var t=function(e,t){var a=o.a.useState(!1),n=Object(u.a)(a,2),c=n[0],r=n[1],l=o.a.useState(!0),m=Object(u.a)(l,2),s=m[0],i=m[1],d=o.a.useState(t),p=Object(u.a)(d,2),f=p[0],E=p[1];return o.a.useEffect(function(){setTimeout(function(){try{var a,n=localStorage.getItem(e);n?a=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),a=t),E(a),i(!1)}catch(c){r(c)}},3e3)}),{item:f,saveItem:function(t){try{var a=JSON.stringify(t);localStorage.setItem(e,a),E(t)}catch(c){r(c)}},loading:s,error:c}}("TODOS_V1",[]),a=t.item,n=t.saveItem,c=t.loading,r=t.error,s=o.a.useState(""),i=Object(u.a)(s,2),d=i[0],p=i[1],f=o.a.useState(!1),E=Object(u.a)(f,2),g=E[0],v=E[1],T=a.filter(function(e){return!!e.completed}).length,h=a.length,b=[];b=!d.length>=1?a:a.filter(function(e){var t=e.text.toLowerCase(),a=d.toLowerCase();return t.includes(a)});return o.a.createElement(m.Provider,{value:{loading:c,error:r,totalTodos:h,completedTodos:T,searchValue:d,setSearchValue:p,searchedTodos:b,addTodo:function(e){var t=Object(l.a)(a);t.push({completed:!1,text:e}),n(t)},completeTodo:function(e){var t=a.findIndex(function(t){return t.text===e}),o=Object(l.a)(a);o[t].completed=!0,n(o)},deleteTodo:function(e){var t=a.findIndex(function(t){return t.text===e}),o=Object(l.a)(a);o.splice(t,1),n(o)},openModal:g,setOpenModal:v}},e.children)}a(17);function i(){var e=o.a.useContext(m),t=e.totalTodos,a=e.completedTodos;return o.a.createElement("h2",{className:"TodoCounter"},"Has completado ",a," de ",t," tareas por hacer")}a(19);function d(){var e=o.a.useContext(m),t=e.searchValue,a=e.setSearchValue;return o.a.createElement("input",{className:"TodoSearch",placeholder:"Buscar Tarea",value:t,onChange:function(e){console.log(e.target.value),a(e.target.value)}})}var p;a(21);function f(e){return o.a.createElement("section",null,o.a.createElement("ul",null,e.children))}function E(){return(E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var g,v=function(e){return o.a.createElement("svg",E({viewBox:"0 0 405.272 405.272",xmlSpace:"preserve"},e),p||(p=o.a.createElement("path",{d:"M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"})))};a.p;function T(){return(T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var h=function(e){return o.a.createElement("svg",T({viewBox:"0 0 348.333 348.334",xmlSpace:"preserve"},e),g||(g=o.a.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"})))},b=(a.p,a(23),{check:function(e){return o.a.createElement(v,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return o.a.createElement(h,{className:"Icon-svg Icon-svg--delete",fill:e})}});function O(e){var t=e.type,a=e.color,n=void 0===a?"gray":a,c=e.onClick;return o.a.createElement("span",{className:"Icon-container Icon-container--".concat(t),onClick:c},b[t](n))}function N(e){var t=e.completed,a=e.onComplete;return o.a.createElement(O,{type:"check",color:t?"#4caf50":"gray",onClick:a})}function C(e){var t=e.onDelete;return o.a.createElement(O,{type:"delete",onClick:t})}a(25);function x(e){return o.a.createElement("li",{className:"TodoItem"},o.a.createElement(N,{completed:e.completed,onComplete:e.onComplete}),o.a.createElement("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete")},e.text),o.a.createElement(C,{onDelete:e.onDelete}))}function y(){return o.a.createElement("p",null,"Desesp\xe9rate, hubo un error...")}a(27);function I(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"LoadingTodo-container"},o.a.createElement("span",{className:"LoadingTodo-completeIcon"}),o.a.createElement("p",{className:"LoadingTodo-text"},"Cargando TODOs..."),o.a.createElement("span",{className:"LoadingTodo-deleteIcon"})),o.a.createElement("div",{className:"LoadingTodo-container"},o.a.createElement("span",{className:"LoadingTodo-completeIcon"}),o.a.createElement("p",{className:"LoadingTodo-text"},"Cargando TODOs..."),o.a.createElement("span",{className:"LoadingTodo-deleteIcon"})),o.a.createElement("div",{className:"LoadingTodo-container"},o.a.createElement("span",{className:"LoadingTodo-completeIcon"}),o.a.createElement("p",{className:"LoadingTodo-text"},"Cargando TODOs..."),o.a.createElement("span",{className:"LoadingTodo-deleteIcon"})))}a(5);var L=a(7),S=a.n(L);function j(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"emptyTodo"},"\xa1Crea tu primer Tarea!"),o.a.createElement("figure",{className:"emptyTodoImg"},o.a.createElement("img",{src:S.a,alt:"emptyToDo"})))}a(30);function k(){var e=o.a.useState(""),t=Object(u.a)(e,2),a=t[0],n=t[1],c=o.a.useContext(m),r=c.addTodo,l=c.setOpenModal;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r(a),l(!1)}},o.a.createElement("label",null,"Tarea nueva"),o.a.createElement("textarea",{value:a,onChange:function(e){n(e.target.value)},placeholder:""}),o.a.createElement("div",{className:"TodoForm-buttonContainer"},o.a.createElement("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){l(!1)}},"Cancelar"),o.a.createElement("button",{type:"submit",className:"TodoForm-button TodoForm-button--add"},"A\xf1adir")))}a(32);function D(e){return o.a.createElement("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal(function(e){return!e})}},"+")}var w=a(3),M=a.n(w);a(34);function F(e){var t=e.children;return M.a.createPortal(o.a.createElement("div",{className:"ModalBackground"},t),document.getElementById("modal"))}var B=a(8),J=a.n(B);function V(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"emptyTodo"},"Sin resultados"),o.a.createElement("figure",{className:"emptyTodoImg"},o.a.createElement("img",{src:J.a,alt:"emptyToDo"})))}function P(){var e=o.a.useContext(m),t=e.error,a=e.totalTodos,n=e.loading,c=e.searchedTodos,r=e.completeTodo,l=e.deleteTodo,u=e.openModal,s=e.setOpenModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i,null),o.a.createElement(d,null),o.a.createElement(f,null,t&&o.a.createElement(y,null),n&&o.a.createElement(I,null),!n&&!a&&o.a.createElement(j,null),!!a&&!c.length&&o.a.createElement(V,null),c.map(function(e){return o.a.createElement(x,{key:e.text,text:e.text,completed:e.completed,onComplete:function(){return r(e.text)},onDelete:function(){return l(e.text)}})})),u&&o.a.createElement(F,null,o.a.createElement(k,null)),o.a.createElement(D,{setOpenModal:s}))}var z=function(){return o.a.createElement(s,null,o.a.createElement(P,null))};a(36);r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(z,null)))}],[[9,2,1]]]);
//# sourceMappingURL=main.056ca2e1.chunk.js.map