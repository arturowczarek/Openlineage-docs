"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9971],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=m(a),u=i,d=h["".concat(o,".").concat(u)]||h[u]||k[u]||r;return a?n.createElement(d,p(p({ref:t},s),{},{components:a})):n.createElement(d,p({ref:t},s))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,p=new Array(r);p[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var m=2;m<r;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},74697:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const r={title:"1.9.1",sidebar_position:9948},p="1.9.1 - 2024-02-26",l={unversionedId:"releases/1_9_1",id:"releases/1_9_1",title:"1.9.1",description:"This version adds the capability to publish Scala 2.12 and 2.13 variants of Apache Spark,",source:"@site/docs/releases/1_9_1.md",sourceDirName:"releases",slug:"/releases/1_9_1",permalink:"/docs/releases/1_9_1",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/1_9_1.md",tags:[],version:"current",sidebarPosition:9948,frontMatter:{title:"1.9.1",sidebar_position:9948},sidebar:"tutorialSidebar",previous:{title:"1.10.2",permalink:"/docs/releases/1_10_2"},next:{title:"1.8.0",permalink:"/docs/releases/1_8_0"}},o={},m=[{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Fixed",id:"fixed",level:3}],s={toc:m};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"191---2024-02-26"},"1.9.1 - 2024-02-26"),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"This version adds the capability to publish ",(0,i.kt)("strong",{parentName:"p"},"Scala 2.12")," and ",(0,i.kt)("strong",{parentName:"p"},"2.13")," variants of ",(0,i.kt)("strong",{parentName:"p"},"Apache Spark"),",\nwhich necessitates a change in the artifact identifier for ",(0,i.kt)("inlineCode",{parentName:"p"},"io.openlineage:openlineage-spark"),".\nFrom this version onwards, please use: ",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"io.openlineage:openlineage-spark_${SCALA_BINARY_VERSION}:${OPENLINEAGE_SPARK_VERSION}"),".")),(0,i.kt)("h3",{id:"added"},"Added"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Airflow: add support for ",(0,i.kt)("inlineCode",{parentName:"strong"},"JobTypeJobFacet")," properties")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2412"},(0,i.kt)("inlineCode",{parentName:"a"},"#2412"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mattiabertorello"},"@mattiabertorello"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds support for Job type properties within the Airflow Job facet.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dbt: add support for ",(0,i.kt)("inlineCode",{parentName:"strong"},"JobTypeJobFacet")," properties")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2411"},(0,i.kt)("inlineCode",{parentName:"a"},"#2411"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mattiabertorello"},"@mattiabertorello"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Support Job type properties within the DBT Job facet.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flink: support Flink Kafka dynamic source and sink")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2417"},(0,i.kt)("inlineCode",{parentName:"a"},"#2417"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/HuangZhenQiu"},"@HuangZhenQiu"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds support for Flink Kafka Table Connector use cases for topic and schema extraction.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flink: support multi-topic Kafka Sink")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2372"},(0,i.kt)("inlineCode",{parentName:"a"},"#2372"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds support for multi-topic Kafka sinks. Limitations: ",(0,i.kt)("inlineCode",{parentName:"em"},"recordSerializer")," needs to implement ",(0,i.kt)("inlineCode",{parentName:"em"},"KafkaTopicsDescriptor"),". Please refer to the ",(0,i.kt)("a",{parentName:"em",href:"https://openlineage.io/docs/integrations/flink/#limitations"},"limitations")," sections in documentation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flink: support lineage for JDBC connector")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2436"},(0,i.kt)("inlineCode",{parentName:"a"},"#2436"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/HuangZhenQiu"},"@HuangZhenQiu"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds support for use cases that employ this connector.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flink: add common config gradle plugin")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2461"},(0,i.kt)("inlineCode",{parentName:"a"},"#2461"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/HuangZhenQiu"},"@HuangZhenQiu"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Add common config gradle plugin to simplify gradle files of Flink submodules.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Java: extend circuit breaker loaded with ",(0,i.kt)("inlineCode",{parentName:"strong"},"ServiceLoader"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2435"},(0,i.kt)("inlineCode",{parentName:"a"},"#2435"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Loads the circuit breaker builder with ",(0,i.kt)("inlineCode",{parentName:"em"},"ServiceLoader")," as an addition to a list of implemented builders available within the existing package.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark: integration now emits intermediate, application level events wrapping entire job execution")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2471"},(0,i.kt)("inlineCode",{parentName:"a"},"#2371"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Previously, the Spark event model described only single actions, potentially linked only to some parent run. Closes ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/OpenLineage/OpenLineage/issues/1672"},(0,i.kt)("inlineCode",{parentName:"a"},"#1672")),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark: support built-in lineage within ",(0,i.kt)("inlineCode",{parentName:"strong"},"DataSourceV2Relation"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2394"},(0,i.kt)("inlineCode",{parentName:"a"},"#2394"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Enables built-in lineage extraction within from ",(0,i.kt)("inlineCode",{parentName:"em"},"DataSourceV2Relation")," lineage nodes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark: add support for ",(0,i.kt)("inlineCode",{parentName:"strong"},"JobTypeJobFacet")," properties")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2410"},(0,i.kt)("inlineCode",{parentName:"a"},"#2410"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mattiabertorello"},"@mattiabertorello"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds support for Job type properties within the Spark Job facet.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark: stop sending  ",(0,i.kt)("inlineCode",{parentName:"strong"},"spark.LogicalPlan")," facet by default")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2433"},(0,i.kt)("inlineCode",{parentName:"a"},"#2433"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"spark.LogicalPlan")," has been added to default value of ",(0,i.kt)("inlineCode",{parentName:"em"},"spark.openlineage.facets.disabled"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark/Flink/Java: circuit breaker")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/issues/2407"},(0,i.kt)("inlineCode",{parentName:"a"},"#2407"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Introduces a circuit breaker mechanism to prevent effects of over-instrumentation. Implemented within Java client, it serves both the Flink and Spark integration. Read the Java client README for more details.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark: add the capability to publish Scala 2.12 and 2.13 variants of ",(0,i.kt)("inlineCode",{parentName:"strong"},"openlineage-spark"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2446"},(0,i.kt)("inlineCode",{parentName:"a"},"#2446"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/d-m-h"},"@d-m-h"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds the capability to publish Scala 2.12 and 2.13 variants of ",(0,i.kt)("inlineCode",{parentName:"em"},"openlineage-spark"))," ")),(0,i.kt)("h3",{id:"changed"},"Changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark: enable the ",(0,i.kt)("inlineCode",{parentName:"strong"},"app")," module to be compiled with Scala 2.12 and Scala 2.13 variants of Apache Spark")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2432"},(0,i.kt)("inlineCode",{parentName:"a"},"#2432"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/d-m-h"},"@d-m-h"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"em"},"spark.binary.version")," and ",(0,i.kt)("inlineCode",{parentName:"em"},"spark.version")," properties control which variant to build.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark: enable Scala 2.13 support in the ",(0,i.kt)("inlineCode",{parentName:"strong"},"app")," module")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2432"},(0,i.kt)("inlineCode",{parentName:"a"},"#2432"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/d-m-h"},"@d-m-h"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Enables the ",(0,i.kt)("inlineCode",{parentName:"em"},"app")," module to be built using both Scala 2.12 and Scala 2.13 variants of various Apache Spark versions, and enables the CI/CD pipeline to build and test them.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark: don't fail on exception of ",(0,i.kt)("inlineCode",{parentName:"strong"},"UnknownEntryFacet")," creation")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2431"},(0,i.kt)("inlineCode",{parentName:"a"},"#2431"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Failure to generate ",(0,i.kt)("inlineCode",{parentName:"em"},"UnknownEntryFacet")," was resulting in the event not being sent.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark: move Snowflake code into the vendor projects folders")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2405"},(0,i.kt)("inlineCode",{parentName:"a"},"#2405"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mattiabertorello"},"@mattiabertorello"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Creates a ",(0,i.kt)("inlineCode",{parentName:"em"},"vendor")," folder to isolate Snowflake-specific code from the main Spark integration, enhancing organization and flexibility."))),(0,i.kt)("h3",{id:"fixed"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flink: resolve PMD rule violation warnings")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2403"},(0,i.kt)("inlineCode",{parentName:"a"},"#2403"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/HuangZhenQiu"},"@HuangZhenQiu"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Resolves the PMD rule violation warnings in the Flink integration module.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flink: Added the 'isReleaseVersion' property back to the build, enabling the Flink integration to be release")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2468"},(0,i.kt)("inlineCode",{parentName:"a"},"#2468"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/d-m-h"},"@d-m-h"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"The 'isReleaseVersion' property was removed from the build, preventing the Flink integration from being released.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Python: fix issue with file config creating additional file")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2447"},(0,i.kt)("inlineCode",{parentName:"a"},"#2447"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kacpermuda"},"@kacpermuda"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"FileConfig")," was creating an additional file when not in append mode. Closes ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/OpenLineage/OpenLineage/issues/2439"},(0,i.kt)("inlineCode",{parentName:"a"},"#2439")),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Python: fix issue with append option in file config")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2441"},(0,i.kt)("inlineCode",{parentName:"a"},"#2441"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kacpermuda"},"@kacpermuda"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"FileConfig")," was ignoring the append key in YAML config. Closes ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/OpenLineage/OpenLineage/issues/2440"},(0,i.kt)("inlineCode",{parentName:"a"},"#2440")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark: fix integration catalog symlink without warehouse")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2379"},(0,i.kt)("inlineCode",{parentName:"a"},"#2379"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/algorithmy1"},"@algorithmy1"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"In the case of symlinked Glue Catalog Tables, the parsing method was producing dataset names identical to the namespace.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flink: fix ",(0,i.kt)("inlineCode",{parentName:"strong"},"IcebergSourceWrapper")," for Iceberg connector 1.17")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2409"},(0,i.kt)("inlineCode",{parentName:"a"},"#2409"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ensctom"},"@ensctom"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"In Flink 1.17, the Iceberg ",(0,i.kt)("inlineCode",{parentName:"em"},"catalogloader")," was loading the catalog in the open function, causing the ",(0,i.kt)("inlineCode",{parentName:"em"},"loadTable")," method to throw a ",(0,i.kt)("inlineCode",{parentName:"em"},"NullPointerException")," error.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark: migrate ",(0,i.kt)("inlineCode",{parentName:"strong"},"spark35"),", ",(0,i.kt)("inlineCode",{parentName:"strong"},"spark3"),", ",(0,i.kt)("inlineCode",{parentName:"strong"},"shared")," modules to produce Scala 2.12 and Scala 2.13 variants")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2390"},(0,i.kt)("inlineCode",{parentName:"a"},"#2390"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2385"},(0,i.kt)("inlineCode",{parentName:"a"},"#2385")),(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2384"},(0,i.kt)("inlineCode",{parentName:"a"},"#2384"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/d-m-h"},"@d-m-h"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Migrates the three modules to use the refactored Gradle plugins. Also splits some tests into Scala 2.12- and Scala 2.13-specific versions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark: conform the ",(0,i.kt)("inlineCode",{parentName:"strong"},"spark2")," module to the new build process")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2391"},(0,i.kt)("inlineCode",{parentName:"a"},"#2391"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/d-m-h"},"@d-m-h"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Due to a change in the Scala Collections API in Scala 2.13, ",(0,i.kt)("inlineCode",{parentName:"em"},"NoSuchMethodErrors")," were being thrown when running the openlineage-spack connector in an Apache Spark runtime compiled using Scala 2.13."))))}k.isMDXComponent=!0}}]);