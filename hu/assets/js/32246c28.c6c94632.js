"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),v=c(t),d=l,m=v["".concat(i,".").concat(d)]||v[d]||s[d]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=v;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},1319:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>i,metadata:()=>c,toc:()=>u,default:()=>v});var r=t(5900),l=t(4750),o=(t(9496),t(9613)),a=["components"],p={id:"env",title:"pnpm env <cmd>"},i=void 0,c={unversionedId:"cli/env",id:"version-6.x/cli/env",isDocsHomePage:!1,title:"pnpm env <cmd>",description:"Hozz\xe1adva: v6.12.0",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-6.x/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/hu/cli/env",editUrl:"https://crowdin.com/project/pnpm/hu",tags:[],version:"6.x",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"version-6.x/docs",previous:{title:"pnpm start",permalink:"/hu/cli/start"},next:{title:"pnpm publish",permalink:"/hu/cli/publish"}},u=[{value:"Parancsok",id:"parancsok",children:[{value:"use",id:"use",children:[],level:3}],level:2},{value:"Opci\xf3k",id:"opci\xf3k",children:[{value:"--global, -g",id:"--global--g",children:[],level:3}],level:2}],s={toc:u};function v(e){var n=e.components,t=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hozz\xe1adva: v6.12.0"),(0,o.kt)("p",null,"Kezeli a Node.js k\xf6rnyezetet."),(0,o.kt)("h2",{id:"parancsok"},"Parancsok"),(0,o.kt)("h3",{id:"use"},"use"),(0,o.kt)("p",null,"Telep\xedtse \xe9s haszn\xe1lja a Node.js megadott verzi\xf3j\xe1t."),(0,o.kt)("p",null,"Telep\xedtse a Node.js LTS verzi\xf3j\xe1t:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global lts\npnpm env use --global argon\n")),(0,o.kt)("p",null,"A Node.js v16 telep\xedt\xe9se:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,o.kt)("p",null,"Szint\xe9n a v6.18.0 \xf3ta:"),(0,o.kt)("p",null,"Node.js el\u0151zetes verzi\xf3i telep\xedt\xe9se:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global nightly\npnpm env use --global rc\npnpm env use --global 16.0.0-rc.0\npnpm env use --global rc/14\n")),(0,o.kt)("p",null,"Node.js legujabb verzi\xf3ja telep\xedt\xe9se:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global latest\n")),(0,o.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"A v\xe1ltoztat\xe1sok rendszerszinten t\xf6rt\xe9nnek."))}v.isMDXComponent=!0}}]);