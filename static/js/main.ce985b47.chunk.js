(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{10:function(t,e,n){t.exports={app:"App_app__29g1Z",title:"App_title__3rsy1"}},22:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var s=n(0),c=n.n(s),i=n(6),a=n.n(i),r=(n(22),n(10)),o=n.n(r),d=n(4),u=n.n(d),l=n(1),j=function(t){return Object(l.jsxs)("div",{className:t.task.isDone?"is-done":"",children:[Object(l.jsx)("input",{type:"checkbox",checked:t.task.isDone,onChange:function(){return t.changeTaskStatus(t.task.id,t.task.isDone)}}),Object(l.jsx)("span",{children:t.task.title}),Object(l.jsx)("button",{onClick:function(){return t.removeTask(t.task.id)},children:"x"})]},t.task.id)},b=n(12),h=function(t){var e=Object(s.useState)(""),n=Object(b.a)(e,2),c=n[0],i=n[1],a=Object(s.useState)(null),r=Object(b.a)(a,2),o=r[0],d=r[1];return Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",placeholder:"What needs to be done?",value:c,onChange:function(t){i(t.currentTarget.value)},onKeyPress:function(e){null!==o&&d(null),13===e.charCode&&(""!==c.trim()?(t.addItem(c),i("")):d("Title is required"))}})})},O=n(3),p=n(14),f=n(5),v=n(17),k=[],x=function(){var t=Object(O.b)(),e=Object(O.c)((function(t){return t.tasks}));return Object(l.jsxs)("div",{className:u.a.todolist_section,children:[Object(l.jsx)("div",{className:u.a.header,children:Object(l.jsx)(h,{addItem:function(e){return t(function(t){return{type:"ADD-TASK",title:t}}(e))}})}),Object(l.jsx)("div",{className:u.a.tasks_list,children:e.map((function(e){return Object(l.jsx)(j,{task:e,removeTask:function(){return t({type:"REMOVE-TASK",taskId:e.id})},changeTaskStatus:function(){return t((n=e.id,s=!e.isDone,{type:"CHANGE-TASK-STATUS",taskId:n,isDone:s}));var n,s}},e.id)}))}),Object(l.jsx)("div",{children:e.length>0&&Object(l.jsxs)("div",{className:u.a.footer,children:[e.length," items  lefts"]})})]})};var T=function(){return Object(l.jsxs)("div",{className:o.a.app,children:[Object(l.jsx)("h1",{className:o.a.title,children:"Todos"}),Object(l.jsx)(x,{})]})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),s(t),c(t),i(t),a(t)}))},g=n(13),S=Object(g.a)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":var n=Object(f.a)(t),s=n;return n=s.filter((function(t){return t.id!==e.taskId}));case"ADD-TASK":var c={id:Object(v.v1)(),title:e.title,isDone:!1},i=Object(f.a)(t);return i=[c].concat(Object(f.a)(i));case"CHANGE-TASK-STATUS":var a=Object(f.a)(t),r=a;return a=r.map((function(t){return t.id===e.taskId?Object(p.a)(Object(p.a)({},t),{},{isDone:e.isDone}):t}));default:return t}}}),_=Object(g.b)(S);window.store=_,a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(O.a,{store:_,children:Object(l.jsx)(T,{})})}),document.getElementById("root")),m()},4:function(t,e,n){t.exports={todolist_section:"Todolist_todolist_section__1Ya9p",header:"Todolist_header__3uf09"}}},[[30,1,2]]]);
//# sourceMappingURL=main.ce985b47.chunk.js.map