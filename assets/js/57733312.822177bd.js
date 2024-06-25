"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4178],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,h=d["".concat(p,".").concat(u)]||d[u]||g[u]||o;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},89384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"OpenLineage Support in Egeria",date:new Date("2022-04-25T00:00:00.000Z"),authors:["Chessell"],description:"The Egeria project uses OpenLineage to enhance its production of holistic metadata about an organization's operations."},i=void 0,s={permalink:"/blog/openlineage-egeria",source:"@site/blog/openlineage-egeria/index.mdx",title:"OpenLineage Support in Egeria",description:"The Egeria project uses OpenLineage to enhance its production of holistic metadata about an organization's operations.",date:"2022-04-25T00:00:00.000Z",formattedDate:"April 25, 2022",tags:[],readingTime:2.06,hasTruncateMarker:!0,authors:[{name:"Mandy Chessel",title:"Guest Blogger and OpenLineage Committer",key:"Chessell"}],frontMatter:{title:"OpenLineage Support in Egeria",date:"2022-04-25T00:00:00.000Z",authors:["Chessell"],description:"The Egeria project uses OpenLineage to enhance its production of holistic metadata about an organization's operations."},prevItem:{title:"Data Lineage with Snowflake",permalink:"/blog/openlineage-snowflake"},nextItem:{title:"Video - OpenLineage at Data Agility Day",permalink:"/blog/data-agility-day"}},p={authorsImageUrls:[void 0]},c=[{value:"OpenLineage Support in Egeria",id:"openlineage-support-in-egeria",level:2}],l={toc:c};function g(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Egeria project uses OpenLineage to enhance its production of holistic metadata about an organization's operations."),(0,r.kt)("h2",{id:"openlineage-support-in-egeria"},"OpenLineage Support in Egeria"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://egeria-project.org"},"Egeria")," is a sister open source project to OpenLineage in the LF AI and Data Foundation. Egeria provides Open Metadata and Governance standard types and integration technology to exchange metadata between different technologies. It stitches together different standards to create a complete landscape of metadata about an organization\u2019s digital operations."),(0,r.kt)("p",null,"OpenLineage is very welcome to the Egeria team since it defines a standard for dynamic lineage capture.  This means Egeria can capture open lineage events to detect new assets and activity around them, link this new knowledge into the existing metadata and distribute it to the open metadata ecosystem."),(0,r.kt)("p",null,"Egeria also executes governance processes for maintaining both metadata and the data sources it describes. Since it is running processes, it also makes sense that Egeria produces open lineage for its processes."),(0,r.kt)("p",null,"The diagram below is a big animal picture showing the different features relating to open lineage that Egeria offers. With Egeria\u2019s plug-and-play architecture you can pick and choose which pieces you need."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Egeria architecture",src:a(43603).Z,width:"1599",height:"775"})),(0,r.kt)("p",null,"The numbers on the diagram refer to the notes below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Egeria can capture open lineage events directly through HTTP or via the proxy backend."),(0,r.kt)("li",{parentName:"ol"},"OpenLineage metadata is correlated and matched to existing metadata captured through a variety of mechanisms from direct metadata extraction from the hosting data platforms, to updates through dev ops pipelines to metadata discovery analytic tools."),(0,r.kt)("li",{parentName:"ol"},"Egeria can publish OpenLineage events. These include the OpenLineage events it received (potentially augmented with additional facets), or events generated from its own governance processes. Published OpenLineage events can go to Egeria\u2019s OpenLineage file-based log store for later processing or to any application that supports the OpenLineage API (Marquez, for example -- another project from LF AI and Data)."),(0,r.kt)("li",{parentName:"ol"},"The metadata extracted from OpenLineage events can be distributed to the open metadata ecosystem using standard approaches. This means it can be picked up by connected data science, governance and lineage tools."),(0,r.kt)("li",{parentName:"ol"},"Governance processes linked to the open metadata ecosystem can use OpenLineage events to validate that their originating processes are operating as frequently and as accurately as expected.")),(0,r.kt)("p",null,"More information on Egeria\u2019s open lineage support can be found ",(0,r.kt)("a",{parentName:"p",href:"https://egeria-project.org/features/lineage-management/overview/#the-openlineage-standard"},"here"),"."),(0,r.kt)("p",null,"The Egeria community would like to thank the OpenLineage community for their great support while we created this integration. We look forward to continuing to work together as both our projects mature."))}g.isMDXComponent=!0},43603:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/open-lineage-blog-8ea7da434cfd0a939d6eb8fcd0d19e0b.svg"}}]);