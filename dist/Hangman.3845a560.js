import{S,i as x,s as z,e as p,v as k,c as _,a as b,d as m,w as j,x as y,b as d,f as g,y as v,z as I,A,B,n as C,t as P,h as V,j as E,k as F,C as H,D as T,E as N}from"./chunks/index.f02b0593.js";import{v as O,s as J,t as K}from"./chunks/prompt.33958b81.js";import{f as q}from"./chunks/index.872b44aa.js";/* empty css                                                    */const D="/hangman/assets/0.de248fde.jpg",Q="/hangman/assets/3.9d6a1b02.jpg",R="/hangman/assets/4.efed6c2d.jpg",U="/hangman/assets/5.f11acc5d.jpg",W="/hangman/assets/6.0d658ac1.jpg",X="/hangman/assets/7.7dc1a853.jpg",Y="/hangman/assets/8.82fad927.jpg",Z="/hangman/assets/9.5b622a8c.jpg",$="/hangman/assets/10.ad66d493.jpg";function L(h,t,i){const n=h.slice();return n[6]=t[i],n}function M(h){let t,i;return{c(){t=p("img"),this.h()},l(n){t=_(n,"IMG",{src:!0,alt:!0,width:!0}),this.h()},h(){y(t.src,i=h[6])||d(t,"src",i),d(t,"alt","hangman"),d(t,"width","200")},m(n,a){g(n,t,a)},p:C,d(n){n&&m(t)}}}function G(h){let t,i,n,a,u;return{c(){t=p("dialog"),i=p("div"),n=P(h[0]),this.h()},l(l){t=_(l,"DIALOG",{});var c=b(t);i=_(c,"DIV",{id:!0,class:!0});var r=b(i);n=V(r,h[0]),r.forEach(m),c.forEach(m),this.h()},h(){d(i,"id","losing-text"),d(i,"class","svelte-ceqmk6"),t.open=!0},m(l,c){g(l,t,c),E(t,i),E(i,n),u=!0},p(l,c){(!u||c&1)&&F(n,l[0])},i(l){u||(H(()=>{a||(a=T(t,q,{},!0)),a.run(1)}),u=!0)},o(l){a||(a=T(t,q,{},!1)),a.run(0),u=!1},d(l){l&&m(t),l&&a&&a.end()}}}function ee(h){let t,i,n,a,u,l,c=h[3],r=[];for(let e=0;e<c.length;e+=1)r[e]=M(L(h,c,e));let s=h[1]&&G(h);return{c(){t=p("div");for(let e=0;e<r.length;e+=1)r[e].c();i=k(),s&&s.c(),n=k(),a=p("img"),this.h()},l(e){t=_(e,"DIV",{});var f=b(t);for(let o=0;o<r.length;o+=1)r[o].l(f);f.forEach(m),i=j(e),s&&s.l(e),n=j(e),a=_(e,"IMG",{src:!0,alt:!0,width:!0}),this.h()},h(){t.hidden=!0,y(a.src,u=h[2])||d(a,"src",u),d(a,"alt","hangman"),d(a,"width","200")},m(e,f){g(e,t,f);for(let o=0;o<r.length;o+=1)r[o].m(t,null);g(e,i,f),s&&s.m(e,f),g(e,n,f),g(e,a,f),l=!0},p(e,[f]){if(f&8){c=e[3];let o;for(o=0;o<c.length;o+=1){const w=L(e,c,o);r[o]?r[o].p(w,f):(r[o]=M(w),r[o].c(),r[o].m(t,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=c.length}e[1]?s?(s.p(e,f),f&2&&v(s,1)):(s=G(e),s.c(),v(s,1),s.m(n.parentNode,n)):s&&(N(),I(s,1,1,()=>{s=null}),A()),(!l||f&4&&!y(a.src,u=e[2]))&&d(a,"src",u)},i(e){l||(v(s),l=!0)},o(e){I(s),l=!1},d(e){e&&m(t),B(r,e),e&&m(i),s&&s.d(e),e&&m(n),e&&m(a)}}}function te(h,t,i){let n="";const a=["Samsara sucks!","The safest way of not being very miserable is not to expect to be very happy.","Failure is instructive. The person who really thinks learns quite as much from his failures as from his successes.","Error is the price we pay for progress.","To be truly happy and contented, you must let go of the idea of what it means to be truly happy or content.","The peaceful rest in happiness, giving up both victory and defeat.","Be content with what you have, rejoice in the way things are, when you realize there is nothing lacking, the whole world belongs to you."];function u(){const s=Math.floor(Math.random()*a.length);i(0,n=a[s])}let l=!1,c=[D,Q,R,U,W,X,Y,Z,$],r=D;return O.listen(({wrongLetters:s})=>{const e=s.length;e>=c.length-1&&(u(),J(),i(1,l=!0)),i(2,r=c[e])}),K.subscribe(s=>{i(1,l=s===0)}),[n,l,r,c]}class re extends S{constructor(t){super(),x(this,t,te,ee,z,{})}}export{re as default};