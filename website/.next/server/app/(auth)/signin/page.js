(()=>{var e={};e.id=161,e.ids=[161],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},3862:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>d,routeModule:()=>h,tree:()=>c});var r=s(482),n=s(9108),i=s(2563),l=s.n(i),a=s(8300),o={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>a[e]);s.d(t,o);let c=["",{children:["(auth)",{children:["signin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2321)),"D:\\projects\\HomebrewAI\\tailwind-landing-page-template\\app\\(auth)\\signin\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,8077)),"D:\\projects\\HomebrewAI\\tailwind-landing-page-template\\app\\(auth)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,8909)),"D:\\projects\\HomebrewAI\\tailwind-landing-page-template\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"]}],d=["D:\\projects\\HomebrewAI\\tailwind-landing-page-template\\app\\(auth)\\signin\\page.tsx"],x="/(auth)/signin/page",m={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(auth)/signin/page",pathname:"/signin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6450:(e,t,s)=>{Promise.resolve().then(s.bind(s,9423))},32:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},5477:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,1476,23))},5303:()=>{},9423:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(5344),n=s(3729),i=s(783),l=s.n(i);function a(){return r.jsx(l(),{href:"/",className:"block","aria-label":"Cruip",children:(0,r.jsxs)("svg",{className:"w-8 h-8",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("defs",{children:(0,r.jsxs)("radialGradient",{cx:"21.152%",cy:"86.063%",fx:"21.152%",fy:"86.063%",r:"79.941%",id:"footer-logo",children:[r.jsx("stop",{stopColor:"#4FD1C5",offset:"0%"}),r.jsx("stop",{stopColor:"#81E6D9",offset:"25.871%"}),r.jsx("stop",{stopColor:"#338CF5",offset:"100%"})]})}),r.jsx("rect",{width:"32",height:"32",rx:"16",fill:"url(#footer-logo)",fillRule:"nonzero"})]})})}var o=s(3463);function c(){let[e,t]=(0,n.useState)(!1),s=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let r=({target:r})=>{i.current&&s.current&&(!e||i.current.contains(r)||s.current.contains(r)||t(!1))};return document.addEventListener("click",r),()=>document.removeEventListener("click",r)}),(0,n.useEffect)(()=>{let s=({keyCode:s})=>{e&&27===s&&t(!1)};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)}),(0,r.jsxs)("div",{className:"flex md:hidden",children:[(0,r.jsxs)("button",{ref:s,className:`hamburger ${e&&"active"}`,"aria-controls":"mobile-nav","aria-expanded":e,onClick:()=>t(!e),children:[r.jsx("span",{className:"sr-only",children:"Menu"}),(0,r.jsxs)("svg",{className:"w-6 h-6 fill-current text-gray-900",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("rect",{y:"4",width:"24",height:"2"}),r.jsx("rect",{y:"11",width:"24",height:"2"}),r.jsx("rect",{y:"18",width:"24",height:"2"})]})]}),r.jsx("div",{ref:i,children:r.jsx(o.u,{show:e,as:"nav",id:"mobile-nav",className:"absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white",enter:"transition ease-out duration-200 transform",enterFrom:"opacity-0 -translate-y-2",enterTo:"opacity-100 translate-y-0",leave:"transition ease-out duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsxs)("ul",{className:"px-5 py-2",children:[r.jsx("li",{children:r.jsx(l(),{href:"/signin",className:"flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center",onClick:()=>t(!1),children:"Sign in"})}),r.jsx("li",{children:(0,r.jsxs)(l(),{href:"/signup",className:"btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2",onClick:()=>t(!1),children:[r.jsx("span",{children:"Sign up"}),r.jsx("svg",{className:"w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z",fill:"#999",fillRule:"nonzero"})})]})})]})})})]})}function d(){let[e,t]=(0,n.useState)(!0),s=()=>{window.pageYOffset>10?t(!1):t(!0)};return(0,n.useEffect)(()=>(s(),window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)),[e]),r.jsx("header",{className:`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${e?"":"bg-white backdrop-blur-sm shadow-lg"}`,children:r.jsx("div",{className:"max-w-6xl mx-auto px-5 sm:px-6",children:(0,r.jsxs)("div",{className:"flex items-center justify-between h-16 md:h-20",children:[r.jsx("div",{className:"shrink-0 mr-4",children:r.jsx(a,{})}),r.jsx("nav",{className:"hidden md:flex md:grow",children:(0,r.jsxs)("ul",{className:"flex grow justify-end flex-wrap items-center",children:[r.jsx("li",{children:r.jsx(l(),{href:"/events",className:"font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out",children:"活动"})}),r.jsx("li",{children:r.jsx(l(),{href:"/blog",className:"font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out",children:"博客"})}),r.jsx("li",{children:r.jsx(l(),{href:"/about",className:"font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out",children:"关于我们"})}),r.jsx("li",{children:(0,r.jsxs)(l(),{href:"/signup",className:"btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3",children:[r.jsx("span",{children:"加入我们"}),r.jsx("svg",{className:"w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z",fillRule:"nonzero"})})]})})]})}),r.jsx(c,{})]})})})}},8077:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(5036);function n({children:e}){return r.jsx("main",{className:"grow",children:e})}},2321:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a,metadata:()=>l});var r=s(5036),n=s(646),i=s.n(n);let l={title:"Sign In - Simple",description:"Page description"};function a(){return r.jsx("section",{className:"bg-gradient-to-b from-gray-100 to-white",children:r.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:(0,r.jsxs)("div",{className:"pt-32 pb-12 md:pt-40 md:pb-20",children:[r.jsx("div",{className:"max-w-3xl mx-auto text-center pb-12 md:pb-20",children:r.jsx("h1",{className:"h1",children:"Welcome back. We exist to make entrepreneurism easier."})}),(0,r.jsxs)("div",{className:"max-w-sm mx-auto",children:[(0,r.jsxs)("form",{children:[r.jsx("div",{className:"flex flex-wrap -mx-3 mb-4",children:(0,r.jsxs)("div",{className:"w-full px-3",children:[r.jsx("label",{className:"block text-gray-800 text-sm font-medium mb-1",htmlFor:"email",children:"Email"}),r.jsx("input",{id:"email",type:"email",className:"form-input w-full text-gray-800",placeholder:"Enter your email address",required:!0})]})}),r.jsx("div",{className:"flex flex-wrap -mx-3 mb-4",children:(0,r.jsxs)("div",{className:"w-full px-3",children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[r.jsx("label",{className:"block text-gray-800 text-sm font-medium mb-1",htmlFor:"password",children:"Password"}),r.jsx(i(),{href:"/reset-password",className:"text-sm font-medium text-blue-600 hover:underline",children:"Having trouble signing in?"})]}),r.jsx("input",{id:"password",type:"password",className:"form-input w-full text-gray-800",placeholder:"Enter your password",required:!0})]})}),r.jsx("div",{className:"flex flex-wrap -mx-3 mb-4",children:r.jsx("div",{className:"w-full px-3",children:r.jsx("div",{className:"flex justify-between",children:(0,r.jsxs)("label",{className:"flex items-center",children:[r.jsx("input",{type:"checkbox",className:"form-checkbox"}),r.jsx("span",{className:"text-gray-600 ml-2",children:"Keep me signed in"})]})})})}),r.jsx("div",{className:"flex flex-wrap -mx-3 mt-6",children:r.jsx("div",{className:"w-full px-3",children:r.jsx("button",{className:"btn text-white bg-blue-600 hover:bg-blue-700 w-full",children:"Sign in"})})})]}),(0,r.jsxs)("div",{className:"flex items-center my-6",children:[r.jsx("div",{className:"border-t border-gray-300 grow mr-3","aria-hidden":"true"}),r.jsx("div",{className:"text-gray-600 italic",children:"Or"}),r.jsx("div",{className:"border-t border-gray-300 grow ml-3","aria-hidden":"true"})]}),(0,r.jsxs)("form",{children:[r.jsx("div",{className:"flex flex-wrap -mx-3 mb-3",children:r.jsx("div",{className:"w-full px-3",children:(0,r.jsxs)("button",{className:"btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center",children:[r.jsx("svg",{className:"w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z"})}),r.jsx("span",{className:"flex-auto pl-16 pr-8 -ml-16",children:"Continue with GitHub"})]})})}),r.jsx("div",{className:"flex flex-wrap -mx-3",children:r.jsx("div",{className:"w-full px-3",children:(0,r.jsxs)("button",{className:"btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center",children:[r.jsx("svg",{className:"w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"})}),r.jsx("span",{className:"flex-auto pl-16 pr-8 -ml-16",children:"Continue with Google"})]})})})]}),(0,r.jsxs)("div",{className:"text-gray-600 text-center mt-6",children:["Don't you have an account? ",r.jsx(i(),{href:"/signup",className:"text-blue-600 hover:underline transition duration-150 ease-in-out",children:"Sign up"})]})]})]})})})}},8909:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x,metadata:()=>d});var r=s(5036),n=s(5904),i=s.n(n);s(2729);let l=(0,s(6843).createProxy)(String.raw`D:\projects\HomebrewAI\tailwind-landing-page-template\components\ui\header.tsx`),{__esModule:a,$$typeof:o}=l,c=l.default,d={title:"Create Next App",description:"Generated by create next app"};function x({children:e}){return r.jsx("html",{lang:"zh",children:r.jsx("body",{className:`${i().variable} font-inter antialiased bg-white text-gray-900 tracking-tight`,children:(0,r.jsxs)("div",{className:"flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip",children:[r.jsx(c,{}),e]})})})}},8026:(e,t,s)=>{let{createProxy:r}=s(6843);e.exports=r("D:\\projects\\HomebrewAI\\tailwind-landing-page-template\\node_modules\\next\\dist\\client\\link.js")},646:(e,t,s)=>{e.exports=s(8026)},2729:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,711],()=>s(3862));module.exports=r})();