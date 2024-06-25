"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1012],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=i,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},67873:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(87462),i=(a(67294),a(3905)),r=a(14174);const o={title:"Getting Started",template:"basepage",hide_table_of_contents:!0,description:"Data lineage is the foundation for a new generation of powerful, context-aware data tools and best practices. OpenLineage enables consistent collection of lineage metadata, creating a deeper understanding of how data is produced and used."},l=void 0,p={type:"mdx",permalink:"/getting-started/",source:"@site/src/pages/getting-started/index.mdx",title:"Getting Started",description:"Data lineage is the foundation for a new generation of powerful, context-aware data tools and best practices. OpenLineage enables consistent collection of lineage metadata, creating a deeper understanding of how data is produced and used.",frontMatter:{title:"Getting Started",template:"basepage",hide_table_of_contents:!0,description:"Data lineage is the foundation for a new generation of powerful, context-aware data tools and best practices. OpenLineage enables consistent collection of lineage metadata, creating a deeper understanding of how data is produced and used."}},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run Marquez with Docker",id:"run-marquez-with-docker",level:3},{value:"Collect Run-Level Metadata",id:"collect-run-level-metadata",level:2},{value:"Step 1: Start a Run",id:"step-1-start-a-run",level:3},{value:"REQUEST",id:"request",level:4},{value:"RESPONSE",id:"response",level:4},{value:"Step 2: Complete a Run",id:"step-2-complete-a-run",level:3},{value:"REQUEST",id:"request-1",level:4},{value:"RESPONSE",id:"response-1",level:4},{value:"View Collected Lineage Metadata",id:"view-collected-lineage-metadata",level:2},{value:"Search Job Metadata",id:"search-job-metadata",level:3},{value:"View Job Metadata",id:"view-job-metadata",level:3},{value:"View Input Dataset Metadata",id:"view-input-dataset-metadata",level:3},{value:"Summary",id:"summary",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:s};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{id:"post-content",className:"boxed"},(0,i.kt)("div",{className:"title px-4 py-12 text-center lg:py-14 lg:px-0"},(0,i.kt)("h2",{className:"text-5xl text-color-1"},"Getting Started")),(0,i.kt)("p",null,"This guide covers how you can quickly get started collecting ",(0,i.kt)("em",{parentName:"p"},"dataset"),", ",(0,i.kt)("em",{parentName:"p"},"job"),", and ",(0,i.kt)("em",{parentName:"p"},"run")," metadata using OpenLineage. We'll show how to collect ",(0,i.kt)("em",{parentName:"p"},"run-level")," metadata as OpenLineage events using ",(0,i.kt)("a",{parentName:"p",href:"https://marquezproject.ai"},"Marquez")," as the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage#scope"},"HTTP backend"),", then explore lineage metadata via the Marquez UI."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you begin, make sure you have installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/install"},"Docker 17.05"),"+"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install"},"Docker Compose"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In this guide, we'll be using Marquez as the OpenLineage HTTP backend and running the HTTP server via Docker.")),(0,i.kt)("h3",{id:"run-marquez-with-docker"},"Run Marquez with ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/MarquezProject/marquez/blob/main/Dockerfile"},"Docker")),(0,i.kt)("p",null,"The easiest way to get up and running with Marquez is Docker. Check out the Marquez source code and run the ",(0,i.kt)("inlineCode",{parentName:"p"},"./docker/up.sh")," script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone git@github.com:MarquezProject/marquez.git && cd marquez\n\n$ ./docker/up.sh\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"--build")," flag to the script to build images from source, or ",(0,i.kt)("inlineCode",{parentName:"p"},"--tag X.Y.Z")," to use a tagged image."),(0,i.kt)("p",{parentName:"admonition"},"Users on Apple silicon architecture encountering platform-related errors from Docker might need to enable emulation and customize the Docker services. Tips can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@email.bajaj/docker-image-platform-compatibility-issue-with-mac-silicon-processors-m1-m2-ee2d5ea3ff0e"},"this guide"),"."),(0,i.kt)("p",{parentName:"admonition"},"The Marquez backend uses port ",(0,i.kt)("inlineCode",{parentName:"p"},"5432"),".")),(0,i.kt)("p",null,"To view the Marquez UI and verify it's running, open ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),". "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The UI enables you to discover dependencies between jobs and the datasets they produce and consume via the lineage graph, view run-level metadata of current and previous job runs, and much more.")),(0,i.kt)("h2",{id:"collect-run-level-metadata"},"Collect Run-Level Metadata"),(0,i.kt)("p",null,"Marquez, the reference implementation of the OpenLineage standard, is an ",(0,i.kt)("a",{parentName:"p",href:"https://lfaidata.foundation"},"LF AI & DATA")," incubation project to collect, aggregate, and visualize a data ecosystem\u2019s metadata."),(0,i.kt)("p",null,"In this example, you will learn how to collect dataset and job metadata using the ",(0,i.kt)("a",{parentName:"p",href:"https://marquezproject.github.io/marquez/"},"Marquez")," ",(0,i.kt)("a",{parentName:"p",href:"https://marquezproject.github.io/marquez/openapi.html#tag/Lineage"},"LineageAPI")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez/tree/main/web"},"UI"),"."),(0,i.kt)("p",null,"When you submit a lineage event, you first need to define a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"run ID")," similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"d46e465b-d358-4d32-83d4-df660ff614dd"),". UUID format is recommended, and it should be unique. This run ID will enable the tracking of run-level metadata over time for a ",(0,i.kt)("em",{parentName:"p"},"job")," that may have a name, like ",(0,i.kt)("inlineCode",{parentName:"p"},"my-job"),". So, let's get started!"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The example shows how to collect metadata via direct HTTP API calls using ",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),". But, you can also get started using either of our client libraries for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez/tree/main/clients/java"},"Java")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez/tree/main/clients/python"},"Python"),".")),(0,i.kt)("h3",{id:"step-1-start-a-run"},"Step 1: Start a Run"),(0,i.kt)("p",null,"Use the run ID ",(0,i.kt)("inlineCode",{parentName:"p"},"d46e465b-d358-4d32-83d4-df660ff614dd")," to ",(0,i.kt)("strong",{parentName:"p"},"start")," the run for ",(0,i.kt)("inlineCode",{parentName:"p"},"my-job")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"my-input")," as the input dataset:"),(0,i.kt)("h4",{id:"request"},"REQUEST"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -X POST http://localhost:5000/api/v1/lineage \\\n  -i -H \'Content-Type: application/json\' \\\n  -d \'{\n        "eventType": "START",\n        "eventTime": "2020-12-28T19:52:00.001+10:00",\n        "run": {\n          "runId": "d46e465b-d358-4d32-83d4-df660ff614dd"\n        },\n        "job": {\n          "namespace": "my-namespace",\n          "name": "my-job"\n        },\n        "inputs": [{\n          "namespace": "my-namespace",\n          "name": "my-input"\n        }],  \n        "producer": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/client",\n        "schemaURL": "https://openlineage.io/spec/1-0-5/OpenLineage.json#/definitions/RunEvent"\n      }\'\n')),(0,i.kt)("h4",{id:"response"},"RESPONSE"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"201 CREATED")),(0,i.kt)("h3",{id:"step-2-complete-a-run"},"Step 2: Complete a Run"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"d46e465b-d358-4d32-83d4-df660ff614dd")," to ",(0,i.kt)("strong",{parentName:"p"},"complete")," the run for ",(0,i.kt)("inlineCode",{parentName:"p"},"my-job")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"my-output")," as the output dataset. We also specify the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/main/spec/OpenLineage.md#dataset-facets"},"schema")," ",(0,i.kt)("strong",{parentName:"p"},"facet")," to collect the schema for ",(0,i.kt)("inlineCode",{parentName:"p"},"my-output")," before marking the run as completed. Note, you don't have to specify the input dataset ",(0,i.kt)("inlineCode",{parentName:"p"},"my-input")," again for the run since it has already been associated with the run ID:"),(0,i.kt)("h4",{id:"request-1"},"REQUEST"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -X POST http://localhost:5000/api/v1/lineage \\\n  -i -H \'Content-Type: application/json\' \\\n  -d \'{\n        "eventType": "COMPLETE",\n        "eventTime": "2020-12-28T20:52:00.001+10:00",\n        "run": {\n          "runId": "d46e465b-d358-4d32-83d4-df660ff614dd"\n        },\n        "job": {\n          "namespace": "my-namespace",\n          "name": "my-job"\n        },\n        "outputs": [{\n          "namespace": "my-namespace",\n          "name": "my-output",\n          "facets": {\n            "schema": {\n              "_producer": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/client",\n              "_schemaURL": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/spec/OpenLineage.json#/definitions/SchemaDatasetFacet",\n              "fields": [\n                { "name": "a", "type": "VARCHAR"},\n                { "name": "b", "type": "VARCHAR"}\n              ]\n            }\n          }\n        }],     \n        "producer": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/client",\n        "schemaURL": "https://openlineage.io/spec/1-0-5/OpenLineage.json#/definitions/RunEvent"\n      }\'\n')),(0,i.kt)("h4",{id:"response-1"},"RESPONSE"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"201 CREATED")),(0,i.kt)("h2",{id:"view-collected-lineage-metadata"},"View Collected Lineage Metadata"),(0,i.kt)("h3",{id:"search-job-metadata"},"Search Job Metadata"),(0,i.kt)("p",null,"To view lineage metadata collected by Marquez, browse to the UI by visiting ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),". Then, use the search bar in the upper right-side of the page and search for the job ",(0,i.kt)("inlineCode",{parentName:"p"},"my-job"),". To view lineage metadata for ",(0,i.kt)("inlineCode",{parentName:"p"},"my-job"),", click on the job from the drop-down list:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:a(50775).Z})),(0,i.kt)("h3",{id:"view-job-metadata"},"View Job Metadata"),(0,i.kt)("p",null,"In the search result, you should see the job ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", and in the lineage graph you should see ",(0,i.kt)("inlineCode",{parentName:"p"},"my-input")," as an input dataset and ",(0,i.kt)("inlineCode",{parentName:"p"},"my-output")," as an output dataset. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"RUN HISTORY")," tab on the Job Detail page below the graph, the job run state should be ",(0,i.kt)("inlineCode",{parentName:"p"},"COMPLETED"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(16893).Z,width:"1705",height:"487"})),(0,i.kt)("h3",{id:"view-input-dataset-metadata"},"View Input Dataset Metadata"),(0,i.kt)("p",null,"Finally, click on the output dataset ",(0,i.kt)("inlineCode",{parentName:"p"},"my-output")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"my-job"),". Metadata displayed includes the name, column names, data types, and more:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(91205).Z,width:"1646",height:"642"})),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In this simple example, we showed you how to use Marquez to collect dataset and job metadata with Openlineage. We also walked you through the set of HTTP ",(0,i.kt)("a",{parentName:"p",href:"https://marquezproject.github.io/marquez/openapi.html"},"API")," calls to successfully mark a run as ",(0,i.kt)("strong",{parentName:"p"},"complete")," and view the lineage metadata collected with Marquez."),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Take a look at Marquez's Airflow ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/MarquezProject/marquez/tree/main/examples/airflow"},"example")," to learn how to enable OpenLineage metadata collection for Airflow DAGs and troubleshoot failing DAGs using Marquez."),(0,i.kt)("li",{parentName:"ul"},"Watch ",(0,i.kt)("a",{parentName:"li",href:"https://www.databricks.com/dataaisummit/session/cross-platform-data-lineage-openlineage/"},"Cross-platform Data Lineage with OpenLineage"),"."),(0,i.kt)("li",{parentName:"ul"},"Watch ",(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/xFVSZCCbZlY"},"Column-level Lineage is Coming to the Rescue"),"."),(0,i.kt)("li",{parentName:"ul"},"Watch ",(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/HEJFCQLwdtk?si=ILsLdCfJqCP8SifQ"},"Observability for Data Pipelines with OpenLineage"),"."),(0,i.kt)("li",{parentName:"ul"},"Watch ",(0,i.kt)("a",{parentName:"li",href:"https://mattturck.com/datakin/"},"Data Observability and Pipelines: OpenLineage and Marquez"),"."),(0,i.kt)("li",{parentName:"ul"},"Listen to ",(0,i.kt)("a",{parentName:"li",href:"https://www.dataengineeringpodcast.com/marquez-data-lineage-episode-111"},"Solving Data Lineage Tracking And Data Discovery At WeWork"),"."),(0,i.kt)("li",{parentName:"ul"},"Listen to ",(0,i.kt)("a",{parentName:"li",href:"https://www.dataengineeringpodcast.com/openlineage-data-lineage-specification-episode-187"},"Unlocking The Power of Data Lineage In Your Platform with OpenLineage"),".")),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)("p",null,"What did you think of this guide? We would love to hear feedback, and we can be found on the ",(0,i.kt)("a",{parentName:"p",href:"https://bit.ly/OLslack"},"OpenLineage Slack"),"."),(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"Footer"}))}d.isMDXComponent=!0},14174:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),i=a(52263);function r(){const{siteConfig:e}=(0,i.Z)(),t=e.customFields.links.map(((e,t)=>n.createElement(o,{data:e,key:`footer-n-l-${t}`}))),a=e.customFields.linksSocial.map(((e,t)=>n.createElement(o,{data:e,key:`footer-n-l-${t}`})));return n.createElement("footer",{className:"footer bg-bgalt py-12"},n.createElement("div",{className:"container mx-auto text-center"},n.createElement("div",{className:"flex justify-center my-3 mb-4"},n.createElement("a",{href:"/",title:e?.title},n.createElement("img",{src:"/"+e.themeConfig.navbar.logo.src,alt:`${e.themeConfig.navbar.logo.alt} - logo`,style:{height:"45px"}}))),n.createElement("div",{className:"text-color-2 my-3 footer-links animated-link-parent"},n.createElement("ul",null,t)),n.createElement("div",{className:"text-color-2 my-3 footer-links animated-link-parent"},n.createElement("ul",null,a)),n.createElement("p",{className:"text-color-default text-lg"},"Copyright \xa9 ",(new Date).getFullYear()," The Linux Foundation\xae. All rights reserved.")))}const o=e=>{let{data:t}=e;return n.createElement("li",{className:"inline-block mx-3 animated-link-parent"},n.createElement("a",{href:t.to?t.to:t.href,title:t.label,rel:t.rel?t.rel:""},n.createElement("span",null,t.label)))}},50775:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/marquez-current-search-view-job-5efbb31be5065e44f533f8c10d1fc3f0.png"},91205:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/marquez-current-tab-view-dataset-output-1f69986abccb1557cb2a3e9fefcc84c3.png"},16893:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/marquez-current-tab-view-job-completed-f2530933cd884e6228ce058c371b0812.png"}}]);