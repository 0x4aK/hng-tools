(function(){var e={9027:function(e,n,t){"use strict";var r=t(144),o=t(1096),i=t(3551),u=function(){var e=this,n=e._self._c;return n(o.Z,[n("nav-bar"),n(i.Z,[n("router-view")],1)],1)},a=[],c=t(5057),s=t(248),f=t(1908),l=t(8228),d=t(8435),m=t(9374),p=function(){var e=this,n=e._self._c;return n(m.Z,{attrs:{app:"",permanent:"","mini-variant":""}},[n(s.Z,{attrs:{nav:"",dense:""}},e._l(e.navRoutes,(function(t){return n(f.Z,{key:t.name,attrs:{link:"",to:t.path}},[n(l.Z,[n(c.Z,[e._v(e._s(t.meta.icon))])],1),n(d.V9,[e._v(e._s(t.name))])],1)})),1)],1)},h=[],v=t(8345),g=t(3058),b=t(6035),y=function(){var e=this,n=e._self._c;return n(b.Z,{staticClass:"home fill-height justify-center"},e._l(e.homeRoutes,(function(r){return n(g.Z,{key:r.name,staticClass:"route ma-2",attrs:{to:r.path,width:"360px",height:"268px",img:t(4792)(`./${r.name.toLowerCase()}.png`)}},[n("div",{staticClass:"route-title pa-2 text-h5"},[e._v(e._s(r.name))])])})),1)},w=[],Z={name:"Home",computed:{homeRoutes(){return P.filter((e=>e.meta?.showInHome))}}},_=Z,k=t(1001),C=(0,k.Z)(_,y,w,!1,null,null,null),O=C.exports;r.ZP.use(v.ZP);const P=[{path:"/",name:"Home",component:O,meta:{icon:"mdi-home"}},{path:"/timings",name:"TimingsCalc",meta:{icon:"mdi-timer-outline",showInHome:!0},component:()=>Promise.all([t.e(25),t.e(643)]).then(t.bind(t,3848))},{path:"/fun",name:"FunCalc",meta:{icon:"mdi-calculator",showInHome:!0},component:()=>Promise.all([t.e(25),t.e(960)]).then(t.bind(t,351))},{path:"/:catchAll(.*)",name:"NotFound",meta:{hidden:!0},component:()=>t.e(245).then(t.bind(t,62))}],x=new v.ZP({mode:"history",base:"/hng-tools/",routes:P});var j=x,E={computed:{navRoutes(){return P.filter((e=>!e.meta?.hidden))}}},N=E,T=(0,k.Z)(N,p,h,!1,null,null,null),S=T.exports,A={components:{NavBar:S}},F=A,L=(0,k.Z)(F,u,a,!1,null,null,null),H=L.exports,B=t(629);r.ZP.use(B.ZP);var D=new B.ZP.Store({state:{version:"1.3.2"}}),I=t(3806);r.ZP.use(I.Z);var M=new I.Z({theme:{dark:!0}});r.ZP.config.productionTip=!1,new r.ZP({store:D,vuetify:M,router:j,render:e=>e(H)}).$mount("#app")},4792:function(e,n,t){var r={"./funcalc.png":2917,"./timingscalc.png":850};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=4792},2917:function(e,n,t){"use strict";e.exports=t.p+"img/funcalc.39a67e9d.png"},850:function(e,n,t){"use strict";e.exports=t.p+"img/timingscalc.80372551.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(f--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+({245:"notfound",643:"timings",960:"fun"}[e]||e)+"."+{25:"02bee427",245:"23a406d1",643:"6dbdbc22",960:"283b1a01"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+({245:"notfound",643:"timings",960:"fun"}[e]||e)+"."+{25:"a1f52037",245:"6c29a00f",643:"264961c3",960:"b635a69c"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="hngui:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/hng-tools/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var u=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=u,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,null,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={25:1,245:1,643:1,960:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var f=c(t)}for(n&&n(r);s<u.length;s++)i=u[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(f)},r=self["webpackChunkhngui"]=self["webpackChunkhngui"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(9027)}));r=t.O(r)})();