import{d as a,B as c,I as p,_,r as t,o as i,a as d,b as o,e as s,w as l,p as m,i as u}from"./index.9718dd56.js";const f=a({name:"AppEmptyState",props:{message:{type:String,default:"There is error in your network connection. Please check your connection and try again."}},components:{BaseButton:c,Icon:p},methods:{refreshPage(){window.location.reload()}}}),h="/assets/network-error.3fc7fca8.svg";const k=e=>(m("data-v-0c9b408b"),e=e(),u(),e),w={class:"network__error"},B=k(()=>o("img",{src:h,alt:"empty state"},null,-1)),g=["innerHTML"];function b(e,v,y,I,C,S){const n=t("Icon"),r=t("BaseButton");return i(),d("div",w,[B,o("div",null,[o("p",{innerHTML:e.message},null,8,g)]),s(r,{text:"refresh",class:"refresh__button",onClick:e.refreshPage},{default:l(()=>[s(n,{icon:"mdi:refresh"})]),_:1},8,["onClick"])])}const A=_(f,[["render",b],["__scopeId","data-v-0c9b408b"]]);export{A};