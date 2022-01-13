(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,a){e.exports={modal__meal:"CartItem_modal__meal__2xhgm","modal__container-left":"CartItem_modal__container-left__b9sKf","modal__container-right":"CartItem_modal__container-right__FkXaL","modal__container-price":"CartItem_modal__container-price__zlFHz",modal__price:"CartItem_modal__price__2he4w",modal__amount:"CartItem_modal__amount__34Wv5"}},function(e,t,a){e.exports={header:"Button_header__308jk",header__svg:"Button_header__svg__2AJv3",header__number:"Button_header__number__1PpJ3",cancel:"Button_cancel__2VHWG",submit:"Button_submit__y1X6a",add:"Button_add__1nZZu",cart:"Button_cart__29heq"}},function(e,t,a){e.exports={cart:"Cart_cart__-QCMg","button-container":"Cart_button-container__3_FIi",total__container:"Cart_total__container__uGTaC"}},,,,,function(e,t,a){e.exports={background:"Modal_background__uCftj",modal:"Modal_modal__20w7A"}},function(e,t,a){e.exports={app:"App_app__1xdJY"}},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(7),n=a.n(c),r=(a(17),a(2)),o=a.n(r),s=a(1),i=(a(18),a(5)),l=a.n(i),u=a.p+"static/media/shopping-cart.e83b041e.svg",d=a(0),j=function(e){return Object(d.jsxs)("button",{className:l.a.header,onClick:function(){e.openModal()},children:[Object(d.jsx)("img",{alt:"Cart Icon",className:l.a.header__svg,src:u}),Object(d.jsx)("h3",{children:"Your Cart"}),Object(d.jsx)("h3",{className:l.a.header__number,children:e.count})]})},m=function(){return Object(d.jsx)("button",{className:l.a.add,children:"+ Add"})},b=function(e){var t=l.a[e.type];return Object(d.jsx)("button",{className:"".concat(t),onClick:function(){e.hasOwnProperty("closeModal")&&e.closeModal()},children:e.content})},_=function(e){var t=l.a[e.type];return Object(d.jsx)("button",{className:"".concat(t),onClick:function(){e.clickEvent(e.content)},children:e.content})},O=function(e){var t;switch(e.type){case"cancel":case"submit":t=Object(d.jsx)(b,Object(s.a)({},e));break;case"cart":t=Object(d.jsx)(_,Object(s.a)({},e));break;case"header":t=Object(d.jsx)(j,Object(s.a)({},e));break;case"add":t=Object(d.jsx)(m,{});break;default:console.log("Buttontype not found")}return Object(d.jsx)(d.Fragment,{children:t})},h=a.p+"static/media/meals.0b88c523.jpg",p=a(8),f=a(3),x=o.a.createContext({}),v=function(e){var t=Object(r.useState)(!1),a=Object(f.a)(t,2),c=a[0],n=a[1],o=[{id:"m1",name:"Sushi",info:"Finest fish and veggies",price:"22.99",amount:0},{id:"m2",name:"Schnitzel",info:"A german specialty!",price:"16.50",amount:0},{id:"m3",name:"Barbecue Burger",info:"American, raw, meaty",price:"12.99",amount:0},{id:"m4",name:"Green Bowl",info:"Healthy...and green...",price:"18.99",amount:0}],s=Object(r.useReducer)((function(e,t){switch(t.type){case"increment":return{count:e.count+ +t.amount};case"decrement":return{count:e.count-+t.amount};default:console.log("Error Reducer")}}),{count:0}),i=Object(f.a)(s,2),l=i[0],u=i[1],j=Object(r.useReducer)((function(e,t){switch(t.type){case"add":var a,c=Object(p.a)(e);try{for(c.s();!(a=c.n()).done;){var n=a.value;if(n.id===t.id)return n.amount+=t.value,e}}catch(i){c.e(i)}finally{c.f()}break;case"remove":var r,o=Object(p.a)(e);try{for(o.s();!(r=o.n()).done;){var s=r.value;if(s.id===t.id)return s.amount-=1,e}}catch(i){o.e(i)}finally{o.f()}break;default:console.log("Error in Meal useReducer")}}),o),m=Object(f.a)(j,2),b=m[0],_=m[1];return Object(d.jsx)(x.Provider,{value:{modalState:c,openModal:function(){n(!0)},closeModal:function(){n(!1)},setCount:u,cartCounter:l,cartMeals:b,changeMealAmount:_,mealList:o,filterMeals:function(e){return e.filter((function(e){return e.amount>0}))}},children:e.children})},g=x,N=function(){var e=Object(r.useContext)(g);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("header",{className:"nav",children:[Object(d.jsx)("h1",{className:"nav__caption",children:"ReactMeals"}),Object(d.jsx)(O,Object(s.a)(Object(s.a)({type:"header"},e.cartCounter),{},{openModal:e.openModal}))]}),Object(d.jsx)("img",{alt:"Background",className:"img",src:h})]})},y=(a(20),a(21),function(e){var t=Object(r.useContext)(g),a=Object(r.useState)(1),c=Object(f.a)(a,2),n=c[0],o=c[1];return Object(d.jsxs)("form",{className:"amount",onSubmit:function(a){a.preventDefault(),t.setCount({type:"increment",amount:n}),t.changeMealAmount({id:e.identifier,value:+n,type:"add"}),o(1)},children:[Object(d.jsxs)("div",{className:"amount__container",children:[Object(d.jsx)("label",{className:"amount__text",children:"Amount"}),Object(d.jsx)("input",{className:"amount__input",onChange:function(e){o(e.target.value)},value:n,type:"number",min:"1"})]}),Object(d.jsx)(O,{type:"add"})]})}),C=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("li",{className:"meal",children:[Object(d.jsxs)("div",{className:"description__meal",children:[Object(d.jsx)("h3",{className:"description__name",children:e.name}),Object(d.jsx)("p",{className:"description__subtext",children:e.info}),Object(d.jsxs)("p",{className:"description__price",children:["$",e.price]})]}),Object(d.jsx)(y,{identifier:e.id})]})})},M=(a(22),function(e){return Object(d.jsx)("div",{className:"meallist-container",children:Object(d.jsx)("div",{className:"meallist",children:e.children})})}),k=function(){var e=Object(r.useContext)(g);return Object(d.jsx)(M,{children:e.mealList.map((function(e){return Object(d.jsx)(C,Object(s.a)({},e),e.id)}))})},B=(a(23),function(){return Object(d.jsx)("section",{className:"description",children:Object(d.jsxs)("div",{className:"description__container",children:[Object(d.jsxs)("h2",{className:"description__caption",children:["Delicious Food, Delivered To You"," "]}),Object(d.jsx)("p",{className:"description__content",children:"Chose your favorite meal from our broad selection of available meals and enjoy a delivious lunch or dinner at home."}),Object(d.jsx)("p",{className:"description__content",children:"All our meal sare cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})})}),A=a(11),w=a.n(A),F=function(e){return Object(d.jsx)("div",{className:w.a.background,onClick:function(){e.closeModal()}})},I=function(e){return Object(d.jsx)("div",Object(s.a)(Object(s.a)({className:w.a.modal},e),{},{children:e.children}))},S=document.querySelector("#overlays"),E=function(e){return Object(d.jsxs)(d.Fragment,{children:[n.a.createPortal(Object(d.jsx)(F,Object(s.a)({},e)),S),n.a.createPortal(Object(d.jsx)(I,{children:e.children}),S)]})},J=a(6),P=a.n(J),R=a(4),q=a.n(R),z=function(e){var t=Object(r.useContext)(g),a=function(a){if(!(t.cartCounter.count<=0))switch(a){case"-":t.setCount({type:"decrement",amount:1}),t.changeMealAmount({id:e.id,value:-1,type:"remove"});break;case"+":t.setCount({type:"increment",amount:1}),t.changeMealAmount({id:e.id,value:1,type:"add"});break;default:console.log("Error Cart Button")}};return Object(d.jsxs)("div",{className:q.a.modal__meal,children:[Object(d.jsxs)("div",{className:q.a["modal__container-left"],children:[Object(d.jsx)("p",{className:q.a.modal__name,children:e.name}),Object(d.jsxs)("div",{className:q.a["modal__container-price"],children:[Object(d.jsxs)("p",{className:q.a.modal__price,children:["$",e.price]}),Object(d.jsxs)("p",{className:q.a.modal__amount,children:["x ",e.amount]})]})]}),Object(d.jsxs)("div",{className:q.a["modal__container-right"],children:[Object(d.jsx)(O,Object(s.a)(Object(s.a)({},{type:"cart",content:"-"}),{},{clickEvent:a})),Object(d.jsx)(O,Object(s.a)(Object(s.a)({},{type:"cart",content:"+"}),{},{clickEvent:a}))]})]})},D=function(){var e=Object(r.useState)(0),t=Object(f.a)(e,2),a=t[0],c=t[1],n=Object(r.useContext)(g),o=n.filterMeals(n.cartMeals);return Object(r.useEffect)((function(){var e=[],t=0;!function(){var t,a=Object(p.a)(o);try{for(a.s();!(t=a.n()).done;){var c=t.value;e.push(c.amount*+c.price)}}catch(n){a.e(n)}finally{a.f()}}();for(var a=0;a<e.length;a++)t+=e[a];c(t)}),[c,o,a]),Object(d.jsx)("div",{className:P.a.cart,children:Object(d.jsxs)(E,{closeModal:n.closeModal,children:[o.map((function(e){return Object(d.jsx)(z,Object(s.a)({},e),e.id)})),Object(d.jsxs)("div",{className:P.a.total__container,children:[Object(d.jsx)("p",{className:P.a.total__amount,children:"Total Amount"}),Object(d.jsxs)("p",{className:P.a.total__price,children:["$",a.toFixed(2)]})]}),Object(d.jsxs)("div",{className:P.a["button-container"],children:[Object(d.jsx)(O,Object(s.a)(Object(s.a)({},{type:"cancel",content:"Close"}),{},{closeModal:n.closeModal})),Object(d.jsx)(O,Object(s.a)({},{type:"submit",content:"Order"}))]})]})})},G=a(12),H=a.n(G);var L=function(){var e=Object(r.useContext)(g);return Object(d.jsxs)("div",{className:H.a.app,children:[e.modalState?Object(d.jsx)(D,{}):"",Object(d.jsx)(N,{}),Object(d.jsx)(B,{}),Object(d.jsx)(k,{})]})};n.a.render(Object(d.jsx)(v,{children:Object(d.jsx)(L,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.ec9979c2.chunk.js.map