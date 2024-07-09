"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8737],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,w=u["".concat(s,".").concat(d)]||u[d]||f[d]||n;return a?r.createElement(w,i(i({ref:t},p),{},{components:a})):r.createElement(w,i({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},20253:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(87462),o=(a(67294),a(3905));const n={sidebar_position:1,title:"Apache Airflow"},i=void 0,l={unversionedId:"integrations/airflow/airflow",id:"integrations/airflow/airflow",title:"Apache Airflow",description:"This page is about Airflow's external integration that works mainly for Airflow versions <2.7.",source:"@site/docs/integrations/airflow/airflow.md",sourceDirName:"integrations/airflow",slug:"/integrations/airflow/",permalink:"/docs/integrations/airflow/",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/integrations/airflow/airflow.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Apache Airflow"},sidebar:"tutorialSidebar",previous:{title:"Extending",permalink:"/docs/integrations/spark/extending"},next:{title:"Using the Airflow Integration",permalink:"/docs/integrations/airflow/usage"}},s={},c=[{value:"How does Airflow work with OpenLineage?",id:"how-does-airflow-work-with-openlineage",level:2},{value:"How can I use this integration?",id:"how-can-i-use-this-integration",level:2},{value:"How to add lineage coverage for more operators?",id:"how-to-add-lineage-coverage-for-more-operators",level:2},{value:"Where can I learn more?",id:"where-can-i-learn-more",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:c};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This page is about Airflow's external integration that works mainly for Airflow versions <2.7.\n",(0,o.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/index.html"},"If you're using Airflow 2.7+, look at native Airflow OpenLineage provider documentation."),"  ",(0,o.kt)("br",null),(0,o.kt)("br",null)," "),(0,o.kt)("p",{parentName:"admonition"},"The ongoing development and enhancements will be focused on the ",(0,o.kt)("inlineCode",{parentName:"p"},"apache-airflow-providers-openlineage")," package,\nwhile the ",(0,o.kt)("inlineCode",{parentName:"p"},"openlineage-airflow")," will primarily be updated for bug fixes. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/airflow/older#supported-airflow-versions"},"all Airflow versions supported by this integration"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Airflow")," is a widely-used workflow automation and scheduling platform that can be used to author and manage data pipelines. Airflow uses workflows made of directed acyclic graphs (DAGs) of tasks. To learn more about Airflow, check out the Airflow ",(0,o.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/index.html"},"documentation"),"."),(0,o.kt)("h2",{id:"how-does-airflow-work-with-openlineage"},"How does Airflow work with OpenLineage?"),(0,o.kt)("p",null,"Understanding complex inter-DAG dependencies and providing up-to-date runtime visibility into DAG execution can be challenging. OpenLineage integrates with Airflow to collect DAG lineage metadata so that inter-DAG dependencies are easily maintained and viewable via a lineage graph, while also keeping a catalog of historical runs of DAGs."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(24719).Z,width:"8000",height:"4500"})),(0,o.kt)("p",null,"The DAG metadata collected can answer questions like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Why has a DAG failed?"),(0,o.kt)("li",{parentName:"ul"},"Why has the DAG runtime increased after a code change?"),(0,o.kt)("li",{parentName:"ul"},"What are the upstream dependencies of a DAG?")),(0,o.kt)("h2",{id:"how-can-i-use-this-integration"},"How can I use this integration?"),(0,o.kt)("p",null,"To instrument your Airflow instance with OpenLineage, follow ",(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/airflow/usage"},"these instructions"),"."),(0,o.kt)("h2",{id:"how-to-add-lineage-coverage-for-more-operators"},"How to add lineage coverage for more operators?"),(0,o.kt)("p",null,"OpenLineage provides a set of ",(0,o.kt)("inlineCode",{parentName:"p"},"extractors")," that extract lineage from operators. "),(0,o.kt)("p",null,"If you want to add lineage coverage for your own custom operators, follow these ",(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/airflow/default-extractors"},"instructions to add lineage to operators"),"."),(0,o.kt)("p",null,"If you want to add coverage for operators you can not modify, follow ",(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/airflow/extractors/custom-extractors"},"instructions to add custom extractors"),"."),(0,o.kt)("p",null,"If you want to expose lineage as a one off in your workflow, ",(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/airflow/manual"},"you can also manually annotate the tasks in your DAG"),"."),(0,o.kt)("h2",{id:"where-can-i-learn-more"},"Where can I learn more?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Take a look at Marquez's Airflow ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/MarquezProject/marquez/tree/main/examples/airflow"},"example")," to learn how to enable OpenLineage metadata collection for Airflow DAGs and troubleshoot failing DAGs using Marquez."),(0,o.kt)("li",{parentName:"ul"},"Watch ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=2s013GQy1Sw"},"Data Lineage with OpenLineage and Airflow"))),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"You can reach out to us on ",(0,o.kt)("a",{parentName:"p",href:"http://bit.ly/OpenLineageSlack"},"slack")," and leave us feedback!"))}f.isMDXComponent=!0},24719:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/af-schematic-ad8c295a182cb32b94ee27b96727fa98.svg"}}]);