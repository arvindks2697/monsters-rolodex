(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var s=t(1),c=t.n(s),r=t(3),a=t.n(r),o=(t(12),t(4)),i=t(5),h=t(7),u=t(6),l=(t(13),t(14),t(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(l.jsx)("h2",{children:e.monster.name}),Object(l.jsx)("p",{children:e.monster.name})]})},j=(t(16),function(e){return Object(l.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})}),m=(t(17),function(e){var n=e.placeholder,t=e.handleChange;return Object(l.jsx)("input",{type:"search",placeholder:n,onChange:t,className:"search"})}),f=function(e){Object(h.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={monsters:[{name:"Frankenstein",id:"asc1"},{name:"Dracula",id:"asc2"},{name:"Zombie",id:"asc3"}],searchField:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({monsters:n})}))}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,s=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Monsters Rolodex"}),Object(l.jsx)(m,{placeholder:"Search Monsters",handleChange:this.handleChange}),Object(l.jsx)(j,{monsters:s})]})}}]),t}(s.Component),b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,s=n.getFID,c=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.162ee3eb.chunk.js.map