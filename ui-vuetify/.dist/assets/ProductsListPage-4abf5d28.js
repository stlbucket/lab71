import{f as p,e as r,V as g}from"./products-e73dc8f6.js";import{L as _,ac as m,M as s,ad as t,t as a,Z as P,ae as v,a2 as f,R as n,af as x,_ as d}from"./index-cec9332a.js";const y={class:"products-display"},h={class:"product"},I=_({__name:"ProductsDisplay",setup(i){const e=p(),{products:o}=m(e),u=async()=>{await e.previousProductPage()},l=async()=>{await e.nextProductPage()};return(k,D)=>(s(),t("div",y,[a(r,{start:"",icon:"mdi-chevron-left",size:"x-large",onClick:u}),(s(!0),t(P,null,v(f(o),c=>(s(),t("div",h,[n("div",null,[a(g,{contain:"",width:"100px",height:"100px",src:c.colors[0].productImages[0]},null,8,["src"])]),n("div",null,x(c.name),1)]))),256)),a(r,{start:"",icon:"mdi-chevron-right",size:"x-large",onClick:l})]))}});const L=d(I,[["__scopeId","data-v-762ecdda"]]),V=_({__name:"ProductsListPage",setup(i){return(e,o)=>(s(),t("main",null,[a(L)]))}});const C=d(V,[["__scopeId","data-v-a790b5e1"]]);export{C as default};