import{S as c,i as l,s as f,n,M as p,N as m,g}from"./chunks/index.f02b0593.js";import{g as d,t as _}from"./chunks/prompt.33958b81.js";function h(s){let e,r;return{c:n,l:n,m(t,u){e||(r=p(window,"keydown",m(s[1])),e=!0)},p:n,i:n,o:n,d(t){e=!1,r()}}}function w(s,e,r){let t;return g(s,_,o=>r(0,t=o)),[t,o=>{if(t===0)return;const a=o.key.toLowerCase();if(a.length!==1)return;const i=d.get();i.includes(a)||d.set([...i,a])}]}class L extends c{constructor(e){super(),l(this,e,w,h,f,{})}}export{L as default};
