"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6264],{3905:(e,t,A)=>{A.d(t,{Zo:()=>l,kt:()=>m});var a=A(67294);function n(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function r(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,a)}return A}function s(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?r(Object(A),!0).forEach((function(t){n(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):r(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function o(e,t){if(null==e)return{};var A,a,n=function(e,t){if(null==e)return{};var A,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)A=r[a],t.indexOf(A)>=0||(n[A]=e[A]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)A=r[a],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(n[A]=e[A])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),A=t;return e&&(A="function"==typeof e?e(t):s(s({},t),e)),A},l=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var A=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(A),m=n,d=u["".concat(i,".").concat(m)]||u[m]||c[m]||r;return A?a.createElement(d,s(s({ref:t},l),{},{components:A})):a.createElement(d,s({ref:t},l))}));function m(e,t){var A=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=A.length,s=new Array(r);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<r;p++)s[p]=A[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,A)}u.displayName="MDXCreateElement"},75639:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=A(87462),n=(A(67294),A(3905));const r={sidebar_position:1,title:"Quickstart with Jupyter"},s=void 0,o={unversionedId:"integrations/spark/quickstart/quickstart_local",id:"integrations/spark/quickstart/quickstart_local",title:"Quickstart with Jupyter",description:"Trying out the Spark integration is super easy if you already have Docker Desktop and git installed.",source:"@site/docs/integrations/spark/quickstart/quickstart_local.md",sourceDirName:"integrations/spark/quickstart",slug:"/integrations/spark/quickstart/quickstart_local",permalink:"/docs/integrations/spark/quickstart/quickstart_local",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/integrations/spark/quickstart/quickstart_local.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Quickstart with Jupyter"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/integrations/spark/installation"},next:{title:"Quickstart with Databricks",permalink:"/docs/integrations/spark/quickstart/quickstart_databricks"}},i={},p=[],l={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Trying out the Spark integration is super easy if you already have Docker Desktop and git installed. "),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you're on macOS Monterey (macOS 12) you'll have to release port 5000 before beginning by disabling the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/forums/thread/682332"},"AirPlay Receiver"),".")),(0,n.kt)("p",null,"Check out the OpenLineage project into your workspace with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git clone https://github.com/OpenLineage/OpenLineage\n")),(0,n.kt)("p",null,"From the spark integration directory ($OPENLINEAGE_ROOT/integration/spark) execute"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,n.kt)("p",null,"This will start Marquez as an Openlineage client and Jupyter Spark notebook on localhost:8888. On startup, the notebook container logs will show a list of URLs\nincluding an access token, such as"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"notebook_1  |     To access the notebook, open this file in a browser:\nnotebook_1  |         file:///home/jovyan/.local/share/jupyter/runtime/nbserver-9-open.html\nnotebook_1  |     Or copy and paste one of these URLs:\nnotebook_1  |         http://abc12345d6e:8888/?token=XXXXXX\nnotebook_1  |      or http://127.0.0.1:8888/?token=XXXXXX\n")),(0,n.kt)("p",null,"Copy the URL with 127.0.0.1 as the hostname from your own log (the token will be different from mine) and paste it into your browser window. You should have a blank Jupyter notebook environment ready to go."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:A(70107).Z,width:"1200",height:"369"})),(0,n.kt)("p",null,"Once your notebook environment is ready, click on the notebooks directory, then click on the New button to create a new Python 3 notebook."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:A(53725).Z,width:"1200",height:"361"})),(0,n.kt)("p",null,"In the first cell in the window paste the following text:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.sql import SparkSession\n\nspark = (SparkSession.builder.master('local')\n         .appName('sample_spark')\n         .config('spark.extraListeners', 'io.openlineage.spark.agent.OpenLineageSparkListener')\n         .config('spark.jars.packages', 'io.openlineage:openlineage-spark:1.7.0')\n         .config('spark.openlineage.transport.type', 'console')\n         .getOrCreate())\n")),(0,n.kt)("p",null,"Once the Spark context is started, we adjust logging level to ",(0,n.kt)("inlineCode",{parentName:"p"},"INFO")," with: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'spark.sparkContext.setLogLevel("INFO")\n')),(0,n.kt)("p",null,"and create some Spark table with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"spark.createDataFrame([\n    {'a': 1, 'b': 2},\n    {'a': 3, 'b': 4}\n]).write.mode(\"overwrite\").saveAsTable(\"temp\")\n")),(0,n.kt)("p",null,"The command should output OpenLineage event in a form of log:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'22/08/01 06:15:49 INFO ConsoleTransport: {"eventType":"START","eventTime":"2022-08-01T06:15:49.671Z","run":{"runId":"204d9c56-6648-4d46-b6bd-f4623255d324","facets":{"spark_unknown":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/1-0-2/OpenLineage.json#/$defs/RunFacet","inputs":[{"description":{"@class":"org.apache.spark.sql.execution.LogicalRDD","id":1,"streaming":false,"traceEnabled":false,"canonicalizedPlan":false},"inputAttributes":[],"outputAttributes":[{"name":"a","type":"long","metadata":{}},{"name":"b","type":"long","metadata":{}}]}]},"spark.logicalPlan":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/1-0-2/OpenLineage.json#/$defs/RunFacet","plan":[{"class":"org.apache.spark.sql.execution.command.CreateDataSourceTableAsSelectCommand","num-children":1,"table":{"product-class":"org.apache.spark.sql.catalyst.catalog.CatalogTable","identifier":{"product-class":"org.apache.spark.sql.catalyst.TableIdentifier","table":"temp"},"tableType":{"product-class":"org.apache.spark.sql.catalyst.catalog.CatalogTableType","name":"MANAGED"},"storage":{"product-class":"org.apache.spark.sql.catalyst.catalog.CatalogStorageFormat","compressed":false,"properties":null},"schema":{"type":"struct","fields":[]},"provider":"parquet","partitionColumnNames":[],"owner":"","createTime":1659334549656,"lastAccessTime":-1,"createVersion":"","properties":null,"unsupportedFeatures":[],"tracksPartitionsInCatalog":false,"schemaPreservesCase":true,"ignoredProperties":null},"mode":null,"query":0,"outputColumnNames":"[a, b]"},{"class":"org.apache.spark.sql.execution.LogicalRDD","num-children":0,"output":[[{"class":"org.apache.spark.sql.catalyst.expressions.AttributeReference","num-children":0,"name":"a","dataType":"long","nullable":true,"metadata":{},"exprId":{"product-class":"org.apache.spark.sql.catalyst.expressions.ExprId","id":6,"jvmId":"6a1324ac-917e-4e22-a0b9-84a5f80694ad"},"qualifier":[]}],[{"class":"org.apache.spark.sql.catalyst.expressions.AttributeReference","num-children":0,"name":"b","dataType":"long","nullable":true,"metadata":{},"exprId":{"product-class":"org.apache.spark.sql.catalyst.expressions.ExprId","id":7,"jvmId":"6a1324ac-917e-4e22-a0b9-84a5f80694ad"},"qualifier":[]}]],"rdd":null,"outputPartitioning":{"product-class":"org.apache.spark.sql.catalyst.plans.physical.UnknownPartitioning","numPartitions":0},"outputOrdering":[],"isStreaming":false,"session":null}]},"spark_version":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/1-0-2/OpenLineage.json#/$defs/RunFacet","spark-version":"3.1.2","openlineage-spark-version":"0.12.0-SNAPSHOT"}}},"job":{"namespace":"default","name":"sample_spark.execute_create_data_source_table_as_select_command","facets":{}},"inputs":[],"outputs":[{"namespace":"file","name":"/home/jovyan/notebooks/spark-warehouse/temp","facets":{"dataSource":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DatasourceDatasetFacet.json#/$defs/DatasourceDatasetFacet","name":"file","uri":"file"},"schema":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/SchemaDatasetFacet.json#/$defs/SchemaDatasetFacet","fields":[{"name":"a","type":"long"},{"name":"b","type":"long"}]},"lifecycleStateChange":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/LifecycleStateChangeDatasetFacet.json#/$defs/LifecycleStateChangeDatasetFacet","lifecycleStateChange":"CREATE"}},"outputFacets":{}}],"producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","schemaURL":"https://openlineage.io/spec/1-0-2/OpenLineage.json#/$defs/RunEvent"}\n')),(0,n.kt)("p",null,"Generated JSON contains output dataset name and location ",(0,n.kt)("inlineCode",{parentName:"p"},'{"namespace":"file","name":"/home/jovyan/notebooks/spark-warehouse/temp"'),", schema fields ",(0,n.kt)("inlineCode",{parentName:"p"},'[{"name":"a","type":"long"},{"name":"b","type":"long"}]'),", etc. "),(0,n.kt)("p",null,"More comprehensive demo, that integrates Spark events with Marquez backend can be found on our blog ",(0,n.kt)("a",{parentName:"p",href:"https://openlineage.io/blog/openlineage-spark/"},"Tracing Data Lineage with OpenLineage and Apache Spark")))}c.isMDXComponent=!0},70107:(e,t,A)=>{A.d(t,{Z:()=>a});const a="data:image/png;base64,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"},53725:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/jupyter_new_notebook-c8dff778baebed6d12cf10bb5df209fb.png"}}]);