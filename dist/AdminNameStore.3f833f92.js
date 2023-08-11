import{u as ne,S as re,i as oe,s as ie,e as u,v as I,t as N,c as d,a as p,w,d as c,h as D,b as k,m as ce,f as ae,j as e,O as ee,M as B,N as ue,n as te,Q as se,k as H}from"./chunks/index.f02b0593.js";const K=ne("playerListData",{},{encode:JSON.stringify,decode:JSON.parse});function de(l){const t=K.get()[l];return t===void 0?{count:0,wins:0}:t}function q(l,t,n){let a=K.get();a[l]===void 0&&(a[l]={count:0,wins:0}),a[l].count=Math.max(a[l].count+t,0),a[l].wins=Math.max(a[l].wins+n,0),K.set(a)}function le(l){let t,n,a,r,E,f,v,h,S,o,m,P,O,s,i,b,g,V,y,L,M,R,C,J,T,j,F,X;return{c(){t=u("div"),n=u("b"),a=N("Roll: "),r=N(l[0]),E=I(),f=u("b"),v=N("Tries "),h=N(l[2]),S=I(),o=u("div"),m=u("span"),P=N("-"),O=I(),s=u("span"),i=N("+"),b=I(),g=u("b"),V=N("Wins: "),y=N(l[3]),L=I(),M=u("div"),R=u("span"),C=N("-"),J=I(),T=u("span"),j=N("+"),this.h()},l(A){t=d(A,"DIV",{});var _=p(t);n=d(_,"B",{});var Q=p(n);a=D(Q,"Roll: "),r=D(Q,l[0]),Q.forEach(c),E=w(_),f=d(_,"B",{});var z=p(f);v=D(z,"Tries "),h=D(z,l[2]),z.forEach(c),S=w(_),o=d(_,"DIV",{class:!0});var U=p(o);m=d(U,"SPAN",{role:!0,class:!0});var Y=p(m);P=D(Y,"-"),Y.forEach(c),O=w(U),s=d(U,"SPAN",{role:!0});var Z=p(s);i=D(Z,"+"),Z.forEach(c),U.forEach(c),b=w(_),g=d(_,"B",{});var G=p(g);V=D(G,"Wins: "),y=D(G,l[3]),G.forEach(c),L=w(_),M=d(_,"DIV",{class:!0});var W=p(M);R=d(W,"SPAN",{role:!0,class:!0});var $=p(R);C=D($,"-"),$.forEach(c),J=w(W),T=d(W,"SPAN",{role:!0});var x=p(T);j=D(x,"+"),x.forEach(c),W.forEach(c),_.forEach(c),this.h()},h(){k(m,"role","button"),k(m,"class","outline"),k(s,"role","button"),k(o,"class","grid"),k(R,"role","button"),k(R,"class","outline"),k(T,"role","button"),k(M,"class","grid")},m(A,_){ae(A,t,_),e(t,n),e(n,a),e(n,r),e(t,E),e(t,f),e(f,v),e(f,h),e(t,S),e(t,o),e(o,m),e(m,P),e(o,O),e(o,s),e(s,i),e(t,b),e(t,g),e(g,V),e(g,y),e(t,L),e(t,M),e(M,R),e(R,C),e(M,J),e(M,T),e(T,j),F||(X=[B(m,"click",l[7]),B(s,"click",l[8]),B(R,"click",l[9]),B(T,"click",l[10])],F=!0)},p(A,_){_&1&&H(r,A[0]),_&4&&H(h,A[2]),_&8&&H(y,A[3])},d(A){A&&c(t),F=!1,se(X)}}}function fe(l){let t,n,a,r,E,f,v,h,S,o,m,P,O,s=l[0]!==""&&le(l);return{c(){t=u("div"),n=u("div"),a=u("form"),r=u("input"),E=I(),f=u("input"),v=I(),h=u("div"),s&&s.c(),S=I(),o=u("small"),m=N("delete all"),this.h()},l(i){t=d(i,"DIV",{class:!0});var b=p(t);n=d(b,"DIV",{});var g=p(n);a=d(g,"FORM",{});var V=p(a);r=d(V,"INPUT",{type:!0}),E=w(V),f=d(V,"INPUT",{type:!0}),V.forEach(c),g.forEach(c),v=w(b),h=d(b,"DIV",{});var y=p(h);s&&s.l(y),S=w(y),o=d(y,"SMALL",{role:!0,class:!0,style:!0});var L=p(o);m=D(L,"delete all"),L.forEach(c),y.forEach(c),b.forEach(c),this.h()},h(){k(r,"type","text"),r.required=!0,k(f,"type","submit"),f.value="search roll#",k(o,"role","button"),k(o,"class","secondary outline"),ce(o,"margin-top","5em"),k(t,"class","grid")},m(i,b){ae(i,t,b),e(t,n),e(n,a),e(a,r),ee(r,l[1]),e(a,E),e(a,f),e(t,v),e(t,h),s&&s.m(h,null),e(h,S),e(h,o),e(o,m),P||(O=[B(r,"input",l[5]),B(a,"submit",ue(l[6])),B(o,"click",l[11])],P=!0)},p(i,[b]){b&2&&r.value!==i[1]&&ee(r,i[1]),i[0]!==""?s?s.p(i,b):(s=le(i),s.c(),s.m(h,S)):s&&(s.d(1),s=null)},i:te,o:te,d(i){i&&c(t),s&&s.d(),P=!1,se(O)}}}function _e(){confirm("Are you sure?")&&(localStorage.clear(),location.reload())}function he(l,t,n){let a="",r="",E=0,f=0;function v(){const i=de(a);n(2,{count:E,wins:f}=i,E,n(3,f))}function h(){r=this.value,n(1,r)}return[a,r,E,f,v,h,()=>{n(0,a=r),v()},()=>{q(a,-1,0),v()},()=>{q(a,1,0),v()},()=>{q(a,0,-1),v()},()=>{q(a,0,1),v()},()=>{_e()}]}class ve extends re{constructor(t){super(),oe(this,t,he,fe,ie,{})}}export{ve as default};
