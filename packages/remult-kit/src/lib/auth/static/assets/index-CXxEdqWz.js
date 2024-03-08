function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/One-DjFWPzmu.js","assets/One-CJl0Wfuv.css","assets/Two-C1XJXkCM.js","assets/Two-BKpsxCug.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var et=Object.defineProperty;var tt=(t,e,n)=>e in t?et(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var P=(t,e,n)=>(tt(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();const nt="modulepreload",ot=function(t){return"/api/static/"+t},Ce={},De=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");o=Promise.all(n.map(s=>{if(s=ot(s),s in Ce)return;Ce[s]=!0;const l=s.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!r)for(let u=c.length-1;u>=0;u--){const v=c[u];if(v.href===s&&(!l||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${i}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":nt,l||(p.as="script",p.crossOrigin=""),p.href=s,document.head.appendChild(p),l)return new Promise((u,v)=>{p.addEventListener("load",u),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${s}`)))})}))}return o.then(()=>e()).catch(c=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=c,window.dispatchEvent(s),!s.defaultPrevented)throw c})};function d(){}function rt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function y(t,e,n,r,o){t.__svelte_meta={loc:{file:e,line:n,column:r,char:o}}}function Pe(t){return t()}function Re(){return Object.create(null)}function F(t){t.forEach(Pe)}function Ke(t){return typeof t=="function"}function Ne(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let X;function Le(t,e){return t===e?!0:(X||(X=document.createElement("a")),X.href=e,t===X.href)}function ct(t){return Object.keys(t).length===0}const it=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function lt(t,e){t.appendChild(e)}function st(t,e,n){t.insertBefore(e,n||null)}function Te(t){t.parentNode&&t.parentNode.removeChild(t)}function k(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function C(){return A(" ")}function Fe(){return A("")}function at(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ft(t){return Array.from(t.childNodes)}function dt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}let W;function D(t){W=t}function Ie(){if(!W)throw new Error("Function called outside component initialization");return W}function je(t){Ie().$$.on_mount.push(t)}const N=[],Ae=[];let T=[];const Me=[],mt=Promise.resolve();let re=!1;function pt(){re||(re=!0,mt.then(me))}function ce(t){T.push(t)}const oe=new Set;let K=0;function me(){if(K!==0)return;const t=W;do{try{for(;K<N.length;){const e=N[K];K++,D(e),ht(e.$$)}}catch(e){throw N.length=0,K=0,e}for(D(null),N.length=0,K=0;Ae.length;)Ae.pop()();for(let e=0;e<T.length;e+=1){const n=T[e];oe.has(n)||(oe.add(n),n())}T.length=0}while(N.length);for(;Me.length;)Me.pop()();re=!1,oe.clear(),D(t)}function ht(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ce)}}function _t(t){const e=[],n=[];T.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),T=e}const z=new Set;let j;function ie(){j={r:0,c:[],p:j}}function le(){j.r||F(j.c),j=j.p}function E(t,e){t&&t.i&&(z.delete(t),t.i(e))}function S(t,e,n,r){if(t&&t.o){if(z.has(t))return;z.add(t),j.c.push(()=>{z.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Y(t,e){const n=e.token={};function r(o,c,s,l){if(e.token!==n)return;e.resolved=l;let i=e.ctx;s!==void 0&&(i=i.slice(),i[s]=l);const a=o&&(e.current=o)(i);let p=!1;e.block&&(e.blocks?e.blocks.forEach((u,v)=>{v!==c&&u&&(ie(),S(u,1,1,()=>{e.blocks[v]===u&&(e.blocks[v]=null)}),le())}):e.block.d(1),a.c(),E(a,1),a.m(e.mount(),e.anchor),p=!0),e.block=a,e.blocks&&(e.blocks[c]=a),p&&me()}if(rt(t)){const o=Ie();if(t.then(c=>{D(o),r(e.then,1,e.value,c),D(null)},c=>{if(D(o),r(e.catch,2,e.error,c),D(null),!e.hasCatch)throw c}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function pe(t){t&&t.c()}function G(t,e,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),ce(()=>{const c=t.$$.on_mount.map(Pe).filter(Ke);t.$$.on_destroy?t.$$.on_destroy.push(...c):F(c),t.$$.on_mount=[]}),o.forEach(ce)}function H(t,e){const n=t.$$;n.fragment!==null&&(_t(n.after_update),F(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gt(t,e){t.$$.dirty[0]===-1&&(N.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xe(t,e,n,r,o,c,s=null,l=[-1]){const i=W;D(t);const a=t.$$={fragment:null,ctx:[],props:c,update:d,not_equal:o,bound:Re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:Re(),dirty:l,skip_bound:!1,root:e.target||i.$$.root};s&&s(a.root);let p=!1;if(a.ctx=n?n(t,e.props||{},(u,v,...h)=>{const O=h.length?h[0]:v;return a.ctx&&o(a.ctx[u],a.ctx[u]=O)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](O),p&&gt(t,u)),v}):[],a.update(),p=!0,F(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){const u=ft(e.target);a.fragment&&a.fragment.l(u),u.forEach(Te)}else a.fragment&&a.fragment.c();e.intro&&E(t.$$.fragment),G(t,e.target,e.anchor),me()}D(i)}class wt{constructor(){P(this,"$$");P(this,"$$set")}$destroy(){H(this,1),this.$destroy=d}$on(e,n){if(!Ke(n))return d;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const bt="4.2.12",vt="4";function m(t,e){document.dispatchEvent(dt(t,{version:bt,...e},{bubbles:!0}))}function f(t,e){m("SvelteDOMInsert",{target:t,node:e}),lt(t,e)}function J(t,e,n){m("SvelteDOMInsert",{target:t,node:e,anchor:n}),st(t,e,n)}function Q(t){m("SvelteDOMRemove",{node:t}),Te(t)}function se(t,e,n,r,o,c,s){const l=r===!0?["capture"]:r?Array.from(Object.keys(r)):[];o&&l.push("preventDefault"),c&&l.push("stopPropagation"),s&&l.push("stopImmediatePropagation"),m("SvelteDOMAddEventListener",{node:t,event:e,handler:n,modifiers:l});const i=at(t,e,n,r);return()=>{m("SvelteDOMRemoveEventListener",{node:t,event:e,handler:n,modifiers:l}),i()}}function w(t,e,n){ut(t,e,n),n==null?m("SvelteDOMRemoveAttribute",{node:t,attribute:e}):m("SvelteDOMSetAttribute",{node:t,attribute:e,value:n})}function Ve(t,e){e=""+e,t.data!==e&&(m("SvelteDOMSetData",{node:t,data:e}),t.data=e)}function qe(t,e,n){for(const r of Object.keys(e))~n.indexOf(r)||console.warn(`<${t}> received an unexpected slot "${r}".`)}class We extends wt{constructor(n){if(!n||!n.target&&!n.$$inline)throw new Error("'target' is a required option");super();P(this,"$$prop_def");P(this,"$$events_def");P(this,"$$slot_def")}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(vt);const Ue="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='26.6'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20308'%3e%3cpath%20fill='%23FF3E00'%20d='M239.682%2040.707C211.113-.182%20154.69-12.301%20113.895%2013.69L42.247%2059.356a82.198%2082.198%200%200%200-37.135%2055.056a86.566%2086.566%200%200%200%208.536%2055.576a82.425%2082.425%200%200%200-12.296%2030.719a87.596%2087.596%200%200%200%2014.964%2066.244c28.574%2040.893%2084.997%2053.007%20125.787%2027.016l71.648-45.664a82.182%2082.182%200%200%200%2037.135-55.057a86.601%2086.601%200%200%200-8.53-55.577a82.409%2082.409%200%200%200%2012.29-30.718a87.573%2087.573%200%200%200-14.963-66.244'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M106.889%20270.841c-23.102%206.007-47.497-3.036-61.103-22.648a52.685%2052.685%200%200%201-9.003-39.85a49.978%2049.978%200%200%201%201.713-6.693l1.35-4.115l3.671%202.697a92.447%2092.447%200%200%200%2028.036%2014.007l2.663.808l-.245%202.659a16.067%2016.067%200%200%200%202.89%2010.656a17.143%2017.143%200%200%200%2018.397%206.828a15.786%2015.786%200%200%200%204.403-1.935l71.67-45.672a14.922%2014.922%200%200%200%206.734-9.977a15.923%2015.923%200%200%200-2.713-12.011a17.156%2017.156%200%200%200-18.404-6.832a15.78%2015.78%200%200%200-4.396%201.933l-27.35%2017.434a52.298%2052.298%200%200%201-14.553%206.391c-23.101%206.007-47.497-3.036-61.101-22.649a52.681%2052.681%200%200%201-9.004-39.849a49.428%2049.428%200%200%201%2022.34-33.114l71.664-45.677a52.218%2052.218%200%200%201%2014.563-6.398c23.101-6.007%2047.497%203.036%2061.101%2022.648a52.685%2052.685%200%200%201%209.004%2039.85a50.559%2050.559%200%200%201-1.713%206.692l-1.35%204.116l-3.67-2.693a92.373%2092.373%200%200%200-28.037-14.013l-2.664-.809l.246-2.658a16.099%2016.099%200%200%200-2.89-10.656a17.143%2017.143%200%200%200-18.398-6.828a15.786%2015.786%200%200%200-4.402%201.935l-71.67%2045.674a14.898%2014.898%200%200%200-6.73%209.975a15.9%2015.9%200%200%200%202.709%2012.012a17.156%2017.156%200%200%200%2018.404%206.832a15.841%2015.841%200%200%200%204.402-1.935l27.345-17.427a52.147%2052.147%200%200%201%2014.552-6.397c23.101-6.006%2047.497%203.037%2061.102%2022.65a52.681%2052.681%200%200%201%209.003%2039.848a49.453%2049.453%200%200%201-22.34%2033.12l-71.664%2045.673a52.218%2052.218%200%200%201-14.563%206.398'%3e%3c/path%3e%3c/svg%3e",yt="src/lib/Counter.svelte";function ae(t){let e,n,r,o,c;const s={c:function(){e=k("button"),n=A("count is "),r=A(t[0]),y(e,yt,7,0,87)},l:function(i){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(i,a){J(i,e,a),f(e,n),f(e,r),o||(c=se(e,"click",t[1],!1,!1,!1,!1),o=!0)},p:function(i,[a]){a&1&&Ve(r,i[0])},i:d,o:d,d:function(i){i&&Q(e),o=!1,c()}};return m("SvelteRegisterBlock",{block:s,id:ae.name,type:"component",source:"",ctx:t}),s}function kt(t,e,n){let{$$slots:r={},$$scope:o}=e;qe("Counter",r,[]);let c=0;const s=()=>{n(0,c+=1)},l=[];return Object.keys(e).forEach(i=>{!~l.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<Counter> was created with unknown prop '${i}'`)}),t.$capture_state=()=>({count:c,increment:s}),t.$inject_state=i=>{"count"in i&&n(0,c=i.count)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[c,s]}class Xe extends We{constructor(e){super(e),xe(this,e,kt,ae,Ne,{}),m("SvelteRegisterComponent",{component:this,tagName:"Counter",options:e,id:ae.name})}}const ze="/api/static/vite.svg",{console:Be}=it,$="src/App.svelte";function $t(t){t[5]=t[6].default}function Et(t){t[7]=t[6].default}function ue(t){let e,n,r,o={ctx:t,current:null,token:null,hasCatch:!1,pending:He,then:Ge,catch:Ye,value:6,blocks:[,,,]};Y(n=t[1],o);const c={c:function(){e=Fe(),o.block.c()},m:function(l,i){J(l,e,i),o.block.m(l,o.anchor=i),o.mount=()=>e.parentNode,o.anchor=e,r=!0},p:function(l,i){t=l,o.ctx=t,i&2&&n!==(n=t[1])&&Y(n,o)},i:function(l){r||(E(o.block),r=!0)},o:function(l){for(let i=0;i<3;i+=1){const a=o.blocks[i];S(a)}r=!1},d:function(l){l&&Q(e),o.block.d(l),o.token=null,o=null}};return m("SvelteRegisterBlock",{block:c,id:ue.name,type:"if",source:"(38:4) {#if one}",ctx:t}),c}function Ye(t){const e={c:d,m:d,i:d,o:d,d};return m("SvelteRegisterBlock",{block:e,id:Ye.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { onMount }',ctx:t}),e}function Ge(t){Et(t);let e,n;e=new t[7]({props:{name:"yoyoyo"},$$inline:!0});const r={c:function(){pe(e.$$.fragment)},m:function(c,s){G(e,c,s),n=!0},i:function(c){n||(E(e.$$.fragment,c),n=!0)},o:function(c){S(e.$$.fragment,c),n=!1},d:function(c){H(e,c)}};return m("SvelteRegisterBlock",{block:r,id:Ge.name,type:"then",source:'(39:40)          <One name=\\"yoyoyo\\" />       {/await}',ctx:t}),r}function He(t){const e={c:d,m:d,i:d,o:d,d};return m("SvelteRegisterBlock",{block:e,id:He.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { onMount }',ctx:t}),e}function fe(t){let e,n,r,o={ctx:t,current:null,token:null,hasCatch:!1,pending:Ze,then:Qe,catch:Je,value:6,blocks:[,,,]};Y(n=t[2],o);const c={c:function(){e=Fe(),o.block.c()},m:function(l,i){J(l,e,i),o.block.m(l,o.anchor=i),o.mount=()=>e.parentNode,o.anchor=e,r=!0},p:function(l,i){t=l,o.ctx=t,i&4&&n!==(n=t[2])&&Y(n,o)},i:function(l){r||(E(o.block),r=!0)},o:function(l){for(let i=0;i<3;i+=1){const a=o.blocks[i];S(a)}r=!1},d:function(l){l&&Q(e),o.block.d(l),o.token=null,o=null}};return m("SvelteRegisterBlock",{block:c,id:fe.name,type:"if",source:"(44:4) {#if two}",ctx:t}),c}function Je(t){const e={c:d,m:d,i:d,o:d,d};return m("SvelteRegisterBlock",{block:e,id:Je.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { onMount }',ctx:t}),e}function Qe(t){$t(t);let e,n;e=new t[5]({props:{name:"yoyoyo two"},$$inline:!0});const r={c:function(){pe(e.$$.fragment)},m:function(c,s){G(e,c,s),n=!0},i:function(c){n||(E(e.$$.fragment,c),n=!0)},o:function(c){S(e.$$.fragment,c),n=!1},d:function(c){H(e,c)}};return m("SvelteRegisterBlock",{block:r,id:Qe.name,type:"then",source:'(45:40)          <Two name=\\"yoyoyo two\\" />       {/await}',ctx:t}),r}function Ze(t){const e={c:d,m:d,i:d,o:d,d};return m("SvelteRegisterBlock",{block:e,id:Ze.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { onMount }',ctx:t}),e}function de(t){var $e,Ee;let e,n,r,o,c,s,l,i,a,p,u,v,h,O,he,Z,ee,I,U=(((Ee=($e=t[0])==null?void 0:$e.button)==null?void 0:Ee.label)??"no label")+"",te,_e,x,ge,M,we,R,be,ve,V,q,ne,ye;O=new Xe({$$inline:!0});let _=t[1]&&ue(t),g=t[2]&&fe(t);const ke={c:function(){e=k("main"),n=k("div"),r=k("a"),o=k("img"),s=C(),l=k("a"),i=k("img"),p=C(),u=k("h1"),u.textContent="Remult + kit",v=C(),h=k("div"),pe(O.$$.fragment),he=C(),_&&_.c(),Z=C(),g&&g.c(),ee=C(),I=k("button"),te=A(U),_e=C(),x=k("button"),x.textContent="Load Two",ge=C(),M=k("p"),we=A("Check out "),R=k("a"),R.textContent="SvelteKit",be=A(", the official Svelte app framework powered by Vite!"),ve=C(),V=k("p"),V.textContent="Click on the Vite and Svelte logos to learn more",Le(o.src,c=ze)||w(o,"src",c),w(o,"class","logo s-XsEmFtvddWTw"),w(o,"alt","Vite Logo"),y(o,$,34,6,627),w(r,"href","https://vitejs.dev"),w(r,"target","_blank"),w(r,"rel","noreferrer"),y(r,$,33,4,558),Le(i.src,a=Ue)||w(i,"src",a),w(i,"class","logo svelte s-XsEmFtvddWTw"),w(i,"alt","Svelte Logo"),y(i,$,37,6,761),w(l,"href","https://svelte.dev"),w(l,"target","_blank"),w(l,"rel","noreferrer"),y(l,$,36,4,692),y(n,$,32,2,548),y(u,$,40,2,844),y(I,$,57,4,1135),y(x,$,58,4,1220),w(h,"class","card"),y(h,$,42,2,869),w(R,"href","https://github.com/sveltejs/kit#readme"),w(R,"target","_blank"),w(R,"rel","noreferrer"),y(R,$,62,14,1295),y(M,$,61,2,1277),w(V,"class","read-the-docs s-XsEmFtvddWTw"),y(V,$,67,2,1465),y(e,$,31,0,539)},l:function(b){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(b,L){J(b,e,L),f(e,n),f(n,r),f(r,o),f(n,s),f(n,l),f(l,i),f(e,p),f(e,u),f(e,v),f(e,h),G(O,h,null),f(h,he),_&&_.m(h,null),f(h,Z),g&&g.m(h,null),f(h,ee),f(h,I),f(I,te),f(h,_e),f(h,x),f(e,ge),f(e,M),f(M,we),f(M,R),f(M,be),f(e,ve),f(e,V),q=!0,ne||(ye=[se(I,"click",t[3],!1,!1,!1,!1),se(x,"click",t[4],!1,!1,!1,!1)],ne=!0)},p:function(b,[L]){var Se,Oe;b[1]?_?(_.p(b,L),L&2&&E(_,1)):(_=ue(b),_.c(),E(_,1),_.m(h,Z)):_&&(ie(),S(_,1,1,()=>{_=null}),le()),b[2]?g?(g.p(b,L),L&4&&E(g,1)):(g=fe(b),g.c(),E(g,1),g.m(h,ee)):g&&(ie(),S(g,1,1,()=>{g=null}),le()),(!q||L&1)&&U!==(U=(((Oe=(Se=b[0])==null?void 0:Se.button)==null?void 0:Oe.label)??"no label")+"")&&Ve(te,U)},i:function(b){q||(E(O.$$.fragment,b),E(_),E(g),q=!0)},o:function(b){S(O.$$.fragment,b),S(_),S(g),q=!1},d:function(b){b&&Q(e),H(O),_&&_.d(),g&&g.d(),ne=!1,F(ye)}};return m("SvelteRegisterBlock",{block:ke,id:de.name,type:"component",source:"",ctx:t}),ke}function St(t,e,n){let{$$slots:r={},$$scope:o}=e;qe("App",r,[]);let{remultKitData:c}=e,s,l;function i(){n(1,s=De(()=>import("./One-DjFWPzmu.js"),__vite__mapDeps([0,1])))}function a(){n(2,l=De(()=>import("./Two-C1XJXkCM.js"),__vite__mapDeps([2,3])))}je(async()=>{console.log("remultKitData",c),c.component=="One"?i():c.component=="Two"&&a()}),t.$$.on_mount.push(function(){c===void 0&&!("remultKitData"in e||t.$$.bound[t.$$.props.remultKitData])&&Be.warn("<App> was created without expected prop 'remultKitData'")});const p=["remultKitData"];return Object.keys(e).forEach(u=>{!~p.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&Be.warn(`<App> was created with unknown prop '${u}'`)}),t.$$set=u=>{"remultKitData"in u&&n(0,c=u.remultKitData)},t.$capture_state=()=>({onMount:je,svelteLogo:Ue,Counter:Xe,viteLogo:ze,remultKitData:c,one:s,two:l,loadOne:i,loadTwo:a}),t.$inject_state=u=>{"remultKitData"in u&&n(0,c=u.remultKitData),"one"in u&&n(1,s=u.one),"two"in u&&n(2,l=u.two)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[c,s,l,i,a]}class Ot extends We{constructor(e){super(e),xe(this,e,St,de,Ne,{remultKitData:0}),m("SvelteRegisterComponent",{component:this,tagName:"App",options:e,id:de.name})}get remultKitData(){throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set remultKitData(e){throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}new Ot({target:document.getElementById("app"),props:{remultKitData}});export{We as S,w as a,y as b,J as c,m as d,k as e,f,Ve as g,Q as h,xe as i,d as n,Ne as s,A as t,qe as v};
