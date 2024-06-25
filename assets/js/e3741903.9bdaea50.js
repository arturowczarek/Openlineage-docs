"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8494],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,y=f["".concat(i,".").concat(d)]||f[d]||p[d]||c;return r?n.createElement(y,s(s({ref:t},l),{},{components:r})):n.createElement(y,s({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<c;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},42395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const c={sidebar_position:2},s="External Query Facet",o={unversionedId:"spec/facets/run-facets/external_query",id:"spec/facets/run-facets/external_query",title:"External Query Facet",description:"The facet that describes the identification of the query that the run is related to which was executed by external systems. Even though the query itself is not contained, using this facet, the user should be able to access the query and its details.",source:"@site/docs/spec/facets/run-facets/external_query.md",sourceDirName:"spec/facets/run-facets",slug:"/spec/facets/run-facets/external_query",permalink:"/docs/spec/facets/run-facets/external_query",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/spec/facets/run-facets/external_query.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Error Message Facet",permalink:"/docs/spec/facets/run-facets/error_message"},next:{title:"Nominal Time Facet",permalink:"/docs/spec/facets/run-facets/nominal_time"}},i={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"external-query-facet"},"External Query Facet"),(0,a.kt)("p",null,"The facet that describes the identification of the query that the run is related to which was executed by external systems. Even though the query itself is not contained, using this facet, the user should be able to access the query and its details."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "run": {\n        "facets": {\n            "externalQuery": {\n                "_producer": "https://some.producer.com/version/1.0",\n                "_schemaURL": "https://github.com/OpenLineage/OpenLineage/blob/main/spec/facets/ExternalQueryRunFacet.json",\n                "externalQueryId": "my-project-1234:US.bquijob_123x456_123y123z123c",\n                "source": "bigquery"\n            }\n        }\n    }\n    ...\n}\n')),(0,a.kt)("p",null,"The facet specification can be found ",(0,a.kt)("a",{parentName:"p",href:"https://openlineage.io/spec/facets/1-0-0/ExternalQueryRunFacet.json"},"here")))}p.isMDXComponent=!0}}]);