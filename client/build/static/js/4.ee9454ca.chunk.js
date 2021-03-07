(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[4],{118:function(n,t,e){"use strict";e.r(t);var i,c,a,r,o=e(27),s=e(20),d=e(21),u=e(88),l=e(89),b=e(8),j=e(50),p=(e(1),e(90)),m=e(11),x=e(12),f=x.c.div(i||(i=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 800px) {\n    align-items: center;\n  }\n"]))),h=x.c.h1(c||(c=Object(m.a)(["\n  font-size: 28px;\n  margin-bottom: 25px;\n"]))),O=x.c.div(a||(a=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (max-width: 800px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n"]))),g=e(3),v=function(n){var t=n.title,e=n.items;return Object(g.jsxs)(f,{className:"collection-preview",children:[Object(g.jsx)(h,{className:"title",children:t.toUpperCase()}),Object(g.jsx)(O,{className:"preview",children:e.filter((function(n,t){return t<4})).map((function(n){return Object(g.jsx)(p.a,{item:n},n.id)}))})]})},w=x.c.div(r||(r=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),y=Object(s.b)({collections:u.b}),k=Object(o.b)(y)((function(n){var t=n.collections;return Object(g.jsx)(w,{className:"collections-overview",children:t.map((function(n){var t=n.id,e=Object(j.a)(n,["id"]);return Object(g.jsx)(v,Object(b.a)({},e),t)}))})})),N=Object(s.b)({isFetching:u.c}),U=Object(d.d)(Object(o.b)(N),l.a)(k);t.default=U},88:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"a",(function(){return o})),e.d(t,"c",(function(){return s})),e.d(t,"d",(function(){return d}));var i=e(20),c=function(n){return n.shop},a=Object(i.a)([c],(function(n){return n.collections})),r=Object(i.a)([a],(function(n){return n?Object.keys(n).map((function(t){return n[t]})):[]})),o=function(n){return Object(i.a)([a],(function(t){return t?t[n]:null}))},s=Object(i.a)([c],(function(n){return n.isFetching})),d=Object(i.a)([c],(function(n){return!!n.collections}))},89:function(n,t,e){"use strict";var i=e(8),c=e(50),a=(e(1),e(52)),r=e(3);t.a=function(n){return function(t){var e=t.isLoading,o=Object(c.a)(t,["isLoading"]);return e?Object(r.jsx)(a.a,{}):Object(r.jsx)(n,Object(i.a)({},o))}}},90:function(n,t,e){"use strict";e(1);var i,c,a,r,o,s,d=e(27),u=e(31),l=e(11),b=e(12),j=e(51),p=b.c.div(i||(i=Object(l.a)(["\n  width: 20vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 40vw;\n\n    &:hover {\n      .image {\n        opacity: unset;\n      }\n      button {\n        opacity: unset;\n      }\n    }\n  }\n"]))),m=b.c.div(c||(c=Object(l.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"])),(function(n){var t=n.imageUrl;return"url(".concat(t,")")})),x=b.c.div(a||(a=Object(l.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]))),f=b.c.span(r||(r=Object(l.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n\n  @media screen and (max-width: 800px) {\n    width: 70%;\n    margin-bottom: 10px;\n  }\n"]))),h=b.c.span(o||(o=Object(l.a)(["\n  width: 10%;\n\n  @media screen and (max-width: 800px) {\n    width: 20%;\n  }\n"]))),O=Object(b.c)(j.a)(s||(s=Object(l.a)(["\n  width: 70%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n\n  @media screen and (max-width: 800px) {\n    display: block;\n    opacity: 0.9;\n    min-width: unset;\n    padding 0 10px;\n  }\n"]))),g=e(3);t.a=Object(d.b)(null,(function(n){return{addItem:function(t){return n(Object(u.a)(t))}}}))((function(n){var t=n.item,e=n.addItem,i=t.name,c=t.price,a=t.imageUrl;return Object(g.jsxs)(p,{children:[Object(g.jsx)(m,{className:"image",imageUrl:a}),Object(g.jsxs)(x,{children:[Object(g.jsx)(f,{children:i}),Object(g.jsxs)(h,{children:["$",c]})]}),Object(g.jsx)(O,{inverted:!0,onClick:function(){return e(t)},children:"Add to cart"})]})}))}}]);
//# sourceMappingURL=4.ee9454ca.chunk.js.map