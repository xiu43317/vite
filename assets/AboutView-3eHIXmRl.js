import{_ as a,c as o,a as s,t as n,b as c,o as r}from"./index-F-_H5Iqx.js";const d={data(){return{data:{}}},mounted(){console.log("這是產品的環境"),this.$http.get("https://randomuser.me/api/").then(t=>{console.log(t),this.data=t.data})}},i={class:"about"},p=c("h1",null,"This is an about page",-1);function _(t,l,u,h,e,m){return r(),o("div",i,[p,s(" "+n(e.data),1)])}const g=a(d,[["render",_]]);export{g as default};