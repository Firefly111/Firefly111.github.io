import{S as $,i as z,s as S,e as v,v as j,c as u,a as m,d as h,w as q,b as g,f as d,n as p,B as b,g as y,t as D,h as E,j as I,k as V}from"./chunks/index.f02b0593.js";import{v as B}from"./chunks/prompt.33958b81.js";/* empty css                                                    */function L(c,s,a){const r=c.slice();return r[1]=s[a],r}function w(c,s,a){const r=c.slice();return r[1]=s[a],r}function k(c){let s,a=c[1]+"",r;return{c(){s=v("div"),r=D(a)},l(n){s=u(n,"DIV",{});var l=m(s);r=E(l,a),l.forEach(h)},m(n,l){d(n,s,l),I(s,r)},p(n,l){l&1&&a!==(a=n[1]+"")&&V(r,a)},d(n){n&&h(s)}}}function x(c){let s,a=c[1]+"",r;return{c(){s=v("div"),r=D(a)},l(n){s=u(n,"DIV",{});var l=m(s);r=E(l,a),l.forEach(h)},m(n,l){d(n,s,l),I(s,r)},p(n,l){l&1&&a!==(a=n[1]+"")&&V(r,a)},d(n){n&&h(s)}}}function C(c){let s,a,r,n=c[0].wrongLetters,l=[];for(let e=0;e<n.length;e+=1)l[e]=k(w(c,n,e));let _=c[0].correctLetters,i=[];for(let e=0;e<_.length;e+=1)i[e]=x(L(c,_,e));return{c(){s=v("div");for(let e=0;e<l.length;e+=1)l[e].c();a=j(),r=v("div");for(let e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){s=u(e,"DIV",{class:!0});var f=m(s);for(let o=0;o<l.length;o+=1)l[o].l(f);f.forEach(h),a=q(e),r=u(e,"DIV",{class:!0});var t=m(r);for(let o=0;o<i.length;o+=1)i[o].l(t);t.forEach(h),this.h()},h(){g(s,"class","wrongLetters grid svelte-izwbvn"),g(r,"class","correctLetters grid svelte-izwbvn")},m(e,f){d(e,s,f);for(let t=0;t<l.length;t+=1)l[t].m(s,null);d(e,a,f),d(e,r,f);for(let t=0;t<i.length;t+=1)i[t].m(r,null)},p(e,[f]){if(f&1){n=e[0].wrongLetters;let t;for(t=0;t<n.length;t+=1){const o=w(e,n,t);l[t]?l[t].p(o,f):(l[t]=k(o),l[t].c(),l[t].m(s,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=n.length}if(f&1){_=e[0].correctLetters;let t;for(t=0;t<_.length;t+=1){const o=L(e,_,t);i[t]?i[t].p(o,f):(i[t]=x(o),i[t].c(),i[t].m(r,null))}for(;t<i.length;t+=1)i[t].d(1);i.length=_.length}},i:p,o:p,d(e){e&&h(s),b(l,e),e&&h(a),e&&h(r),b(i,e)}}}function K(c,s,a){let r;return y(c,B,n=>a(0,r=n)),[r]}class G extends ${constructor(s){super(),z(this,s,K,C,S,{})}}export{G as default};
