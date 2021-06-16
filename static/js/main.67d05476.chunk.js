(this["webpackJsonpexpert-eureka"]=this["webpackJsonpexpert-eureka"]||[]).push([[0],{21:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(15),i=c.n(s),l=(c(21),c(6)),o=c(2),j=c(0),a=function(){return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsxs)("div",{className:"title-container",children:[Object(j.jsx)("h1",{children:"Expert Eureka"}),Object(j.jsx)("small",{className:"subtitle",children:"Super Micro-blog"})]}),Object(j.jsx)("nav",{className:"nav",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/create",children:"New Blog"})})]})})]})},b=c(8),d=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(!0),l=Object(b.a)(i,2),o=l[0],j=l[1],a=Object(n.useState)(null),d=Object(b.a)(a,2),h=d[0],u=d[1];return Object(n.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("Connected to server but could not fetch data from the server!");return e.json()})).then((function(e){s(e),j(!1),u(null)})).catch((function(e){"AbortError"===e.name?console.log("Fetch aborted"):(u(e.message),j(!1))}))}),1e3),function(){return t.abort()}}),[e]),{data:r,isLoading:o,error:h}},h=function(e){var t=e.blogs,c=e.title;return Object(j.jsxs)("div",{className:"blog-list",children:[Object(j.jsx)("h1",{children:c}),t.map((function(e){return Object(j.jsx)("div",{className:"blog-preview",children:Object(j.jsxs)(l.b,{to:"/blogs/".concat(e.id),children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsxs)("p",{children:["Written by: ",e.author]})]})},e.id)}))]})},u=function(){var e=d("http://localhost:8000/blogs"),t=e.data,c=e.isLoading,n=e.error;return Object(j.jsxs)("div",{children:[n&&Object(j.jsx)("div",{children:n}),c&&Object(j.jsx)("div",{children:"Fetching blog posts..."}),t&&Object(j.jsx)(h,{blogs:t,title:"All Blogs"})]})},O=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),i=Object(b.a)(s,2),l=i[0],a=i[1],d=Object(n.useState)("Hector"),h=Object(b.a)(d,2),u=h[0],O=h[1],x=Object(n.useState)(!1),g=Object(b.a)(x,2),f=g[0],p=g[1],v=Object(o.f)();return Object(j.jsxs)("div",{className:"create",children:[Object(j.jsx)("h2",{children:"Add a New Blog"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:l,author:u};p(!0),fetch("http://localhost:8000/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("new blog added"),p(!1),v.push("/")}))},children:[Object(j.jsx)("label",{children:"Blog title:"}),Object(j.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("label",{children:"Blog body:"}),Object(j.jsx)("textarea",{required:!0,value:l,onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("label",{children:"Blog author:"}),Object(j.jsxs)("select",{value:u,onChange:function(e){return O(e.target.value)},children:[Object(j.jsx)("option",{value:"Hector",children:"Hector"}),Object(j.jsx)("option",{value:"Josh",children:"Josh"})]}),!f&&Object(j.jsx)("button",{children:"Add Blog"}),f&&Object(j.jsx)("button",{disabled:!0,children:"Adding blog..."})]})]})},x=function(){var e=Object(o.g)().id,t=d("http://localhost:8000/blogs/"+e),c=t.data,n=t.error,r=t.isLoading,s=Object(o.f)();return Object(j.jsxs)("div",{className:"blog-details",children:[r&&Object(j.jsx)("div",{children:"Loading blog post..."}),n&&Object(j.jsx)("div",{children:n}),c&&Object(j.jsxs)("article",{children:[Object(j.jsx)("h2",{children:c.title}),Object(j.jsxs)("p",{children:["Written by: ",c.author]}),Object(j.jsx)("div",{children:c.previewText}),Object(j.jsx)("button",{onClick:function(){fetch("http://localhost:8000/blogs/"+c.id,{method:"DELETE"}).then((function(){s.push("/")}))},children:"Delete"})]})]})},g=function(){return Object(j.jsxs)("div",{className:"not-found",children:[Object(j.jsx)("h2",{children:"Sorry"}),Object(j.jsx)("p",{children:"That page doesn't exist"}),Object(j.jsx)(l.b,{to:"/",children:"Back to homepage"})]})},f=function(){return Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(a,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(u,{})}),Object(j.jsx)(o.a,{path:"/create",children:Object(j.jsx)(O,{})}),Object(j.jsx)(o.a,{path:"/blogs/:id",children:Object(j.jsx)(x,{})}),Object(j.jsx)(o.a,{path:"*",children:Object(j.jsx)(g,{})})]})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),p()}},[[31,1,2]]]);
//# sourceMappingURL=main.67d05476.chunk.js.map