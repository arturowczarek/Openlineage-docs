"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[674],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},49146:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={title:"0.15.1",sidebar_position:9976},l="0.15.1 - 2022-10-05",o={unversionedId:"releases/0_15_1",id:"releases/0_15_1",title:"0.15.1",description:"Added",source:"@site/docs/releases/0_15_1.md",sourceDirName:"releases",slug:"/releases/0_15_1",permalink:"/docs/releases/0_15_1",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_15_1.md",tags:[],version:"current",sidebarPosition:9976,frontMatter:{title:"0.15.1",sidebar_position:9976},sidebar:"tutorialSidebar",previous:{title:"0.16.1",permalink:"/docs/releases/0_16_1"},next:{title:"0.14.1",permalink:"/docs/releases/0_14_1"}},p={},m=[{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Fixed",id:"fixed",level:3}],s={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0151---2022-10-05"},"0.15.1 - 2022-10-05"),(0,r.kt)("h3",{id:"added"},"Added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Airflow: improve development experience ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1101"},(0,r.kt)("inlineCode",{parentName:"a"},"#1101"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds an interactive development environment to the Airflow integration and improves integration testing.")),(0,r.kt)("li",{parentName:"ul"},"Spark: add description for URL parameters in readme, change ",(0,r.kt)("inlineCode",{parentName:"li"},"overwriteName")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"appName")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1130"},(0,r.kt)("inlineCode",{parentName:"a"},"#1130"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tnazarew"},"@tnazarew"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds more information about passing arguments with ",(0,r.kt)("inlineCode",{parentName:"em"},"spark.openlineage.url")," and changes ",(0,r.kt)("inlineCode",{parentName:"em"},"overwriteName")," to ",(0,r.kt)("inlineCode",{parentName:"em"},"appName")," for clarity.")),(0,r.kt)("li",{parentName:"ul"},"Documentation: update issue templates for proposal & add new integration template ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1116"},(0,r.kt)("inlineCode",{parentName:"a"},"#1116"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rossturk"},"@rossturk"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds a YAML issue template for new integrations and fixes a bug in the proposal template."))),(0,r.kt)("h3",{id:"changed"},"Changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Airflow: lazy load BigQuery client ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1119"},(0,r.kt)("inlineCode",{parentName:"a"},"#1119"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Moves import of the BigQuery client from top level to local level to decrease DAG import time."))),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Airflow: fix UUID generation conflict for Airflow DAGs with same name ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1056"},(0,r.kt)("inlineCode",{parentName:"a"},"#1056"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/collado-mike"},"@collado-mike"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds a namespace to the UUID calculation to avoid conflicts caused by DAGs having the same name in different namespaces in Airflow deployments.")),(0,r.kt)("li",{parentName:"ul"},"Spark/BigQuery: fix issue with spark-bigquery-connector >=0.25.0 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1111"},(0,r.kt)("inlineCode",{parentName:"a"},"#1111"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Makes the Spark integration compatible with the latest connector.")),(0,r.kt)("li",{parentName:"ul"},"Spark: fix column lineage ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1069"},(0,r.kt)("inlineCode",{parentName:"a"},"#1069"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Fixes a null pointer exception error and an error when ",(0,r.kt)("inlineCode",{parentName:"em"},"openlineage.timeout")," is not provided.")),(0,r.kt)("li",{parentName:"ul"},"Spark: set log level of ",(0,r.kt)("inlineCode",{parentName:"li"},"Init OpenLineageContext")," to DEBUG ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1064"},(0,r.kt)("inlineCode",{parentName:"a"},"#1064"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/varuntestaz"},"@varuntestaz"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Prevents sensitive information from being logged unless debug mode is used.")),(0,r.kt)("li",{parentName:"ul"},"Java client: update version of SnakeYAML ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1090"},(0,r.kt)("inlineCode",{parentName:"a"},"#1090"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/TheSpeedding"},"@TheSpeedding"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Bumps the SnakeYAML library version to include a key bug fix.")," "),(0,r.kt)("li",{parentName:"ul"},"dbt: remove requirement for ",(0,r.kt)("inlineCode",{parentName:"li"},"OPENLINEAGE_URL")," to be set ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1107"},(0,r.kt)("inlineCode",{parentName:"a"},"#1107"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Removes erroneous check for ",(0,r.kt)("inlineCode",{parentName:"em"},"OPENLINEAGE_URL")," in the dbt integration.")),(0,r.kt)("li",{parentName:"ul"},"Python client: remove potentially cyclic import ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1126"},(0,r.kt)("inlineCode",{parentName:"a"},"#1126"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Hides imports to remove potentially cyclic import.")),(0,r.kt)("li",{parentName:"ul"},"CI: build macos release package on medium resource class ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1131"},(0,r.kt)("inlineCode",{parentName:"a"},"#1131"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Fixes failing build due to resource class being too large."))))}c.isMDXComponent=!0}}]);