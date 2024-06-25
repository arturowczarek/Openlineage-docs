"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3815],{3905:(e,t,a)=>{a.d(t,{Zo:()=>A,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},A=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,A=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=o,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(h,r(r({ref:t},A),{},{components:a})):n.createElement(h,r({ref:t},A))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},93170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={sidebar_position:2},r="Using OpenLineage with Spark",s={unversionedId:"guides/spark",id:"guides/spark",title:"Using OpenLineage with Spark",description:"Adapted from a blog post by Michael Collado",source:"@site/docs/guides/spark.md",sourceDirName:"guides",slug:"/guides/spark",permalink:"/docs/guides/spark",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/guides/spark.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started with Airflow and OpenLineage+Marquez",permalink:"/docs/guides/airflow-quickstart"},next:{title:"Backfilling Airflow DAGs Using Marquez",permalink:"/docs/guides/airflow-backfill-dags"}},l={},p=[{value:"Adapted from a blog post by Michael Collado",id:"adapted-from-a-blog-post-by-michael-collado",level:4},{value:"Running Spark with OpenLineage",id:"running-spark-with-openlineage",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Instructions",id:"instructions",level:3},{value:"Conclusion",id:"conclusion",level:3}],A={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},A,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-openlineage-with-spark"},"Using OpenLineage with Spark"),(0,o.kt)("h4",{id:"adapted-from-a-blog-post-by-michael-collado"},"Adapted from a ",(0,o.kt)("a",{parentName:"h4",href:"https://openlineage.io/blog/openlineage-spark/"},"blog post")," by Michael Collado"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This guide was developed using an ",(0,o.kt)("strong",{parentName:"p"},"earlier version")," of this integration and may require modification for recent releases.")),(0,o.kt)("p",null,"Adding OpenLineage to Spark is refreshingly uncomplicated, and this is thanks to Spark's SparkListener interface. OpenLineage integrates with Spark by implementing SparkListener and collecting information about jobs executed inside a Spark application. To activate the listener, add the following properties to your Spark configuration in your cluster's ",(0,o.kt)("inlineCode",{parentName:"p"},"spark-defaults.conf")," file or, alternatively, add them to specific jobs on submission via the ",(0,o.kt)("inlineCode",{parentName:"p"},"spark-submit")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spark.jars.packages     io.openlineage:openlineage-spark:0.3.+\nspark.extraListeners    io.openlineage.spark.agent.OpenLineageSparkListener\n")),(0,o.kt)("p",null,"Once activated, the listener needs to know where to report lineage events, as well as the namespace of your jobs. Add the following additional configuration lines to your ",(0,o.kt)("inlineCode",{parentName:"p"},"spark-defaults.conf")," file or your Spark submission script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spark.openlineage.host      {your.openlineage.host}\nspark.openlineage.namespace {your.openlineage.namespace}\n")),(0,o.kt)("h2",{id:"running-spark-with-openlineage"},"Running Spark with OpenLineage"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker Desktop"),(0,o.kt)("li",{parentName:"ul"},"git"),(0,o.kt)("li",{parentName:"ul"},"Google Cloud Service account  "),(0,o.kt)("li",{parentName:"ul"},"Google Cloud Service account JSON key file")),(0,o.kt)("p",null,"Note: your Google Cloud account should have access to BigQuery and read/write access to your GCS bucket. Giving your key file an easy-to-remember name (bq-spark-demo.json) is recommended. Finally, if using macOS Monterey (macOS 12), port 5000 will have to be released by ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/forums/thread/682332"},"disabling the AirPlay Receiver"),"."),(0,o.kt)("h3",{id:"instructions"},"Instructions"),(0,o.kt)("p",null,"Clone the OpenLineage project, navigate to the spark directory, and create a directory for your Google Cloud Service credentials:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/OpenLineage/OpenLineage\ncd integration/spark\nmkdir -p docker/notebooks/gcs\n")),(0,o.kt)("p",null,"Copy your Google Cloud Service credentials file into that directory, then run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose up\n")),(0,o.kt)("p",null,"This launches a Jupyter notebook with Spark as well as a Marquez API endpoint already installed to report lineage. Once the notebook server is up and running, you should see something like the following in the logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"notebook_1  | [I 21:43:39.014 NotebookApp] Jupyter Notebook 6.4.4 is running at:\nnotebook_1  | [I 21:43:39.014 NotebookApp] http://082cb836f1ec:8888/?token=507af3cf9c22f627f6c5211d6861fe0804d9f7b19a93ca48\nnotebook_1  | [I 21:43:39.014 NotebookApp]  or http://127.0.0.1:8888/?token=507af3cf9c22f627f6c5211d6861fe0804d9f7b19a93ca48\nnotebook_1  | [I 21:43:39.015 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).\n")),(0,o.kt)("p",null,"Copy the URL with 127.0.0.1 as the hostname from your own log (the token will be different from this one) and paste it into your browser window. You should have a blank Jupyter notebook environment ready to go."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Jupyter notebook environment",src:a(40639).Z,width:"1226",height:"377"})),(0,o.kt)("p",null,"Click on the notebooks directory, then click on the New button to create a new Python 3 notebook."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Jupyter new notebook",src:a(86291).Z,width:"1214",height:"365"})),(0,o.kt)("p",null,"In the first cell in the window paste the below text. Update the GCP project and bucket names and the service account credentials file, then run the code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"from pyspark.sql import SparkSession\nimport urllib.request\n\n# Download dependencies for BigQuery and GCS\ngc_jars = ['https://repo1.maven.org/maven2/com/google/cloud/bigdataoss/gcs-connector/hadoop3-2.1.1/gcs-connector-hadoop3-2.1.1-shaded.jar',\n        'https://repo1.maven.org/maven2/com/google/cloud/bigdataoss/bigquery-connector/hadoop3-1.2.0/bigquery-connector-hadoop3-1.2.0-shaded.jar',\n        'https://repo1.maven.org/maven2/com/google/cloud/spark/spark-bigquery-with-dependencies_2.12/0.22.2/spark-bigquery-with-dependencies_2.12-0.22.2.jar']\n\nfiles = [urllib.request.urlretrieve(url)[0] for url in gc_jars]\n\n# Set these to your own project and bucket\nproject_id = 'bq-openlineage-spark-demo'\ngcs_bucket = 'bq-openlineage-spark-demo-bucket'\ncredentials_file = '/home/jovyan/notebooks/gcs/bq-spark-demo.json'\n\nspark = (SparkSession.builder.master('local').appName('openlineage_spark_test')\n        .config('spark.jars', \",\".join(files))\n        \n        # Install and set up the OpenLineage listener\n        .config('spark.jars.packages', 'io.openlineage:openlineage-spark:0.3.+')\n        .config('spark.extraListeners', 'io.openlineage.spark.agent.OpenLineageSparkListener')\n        .config('spark.openlineage.host', 'http://marquez-api:5000')\n        .config('spark.openlineage.namespace', 'spark_integration')\n        \n        # Configure the Google credentials and project id\n        .config('spark.executorEnv.GCS_PROJECT_ID', project_id)\n        .config('spark.executorEnv.GOOGLE_APPLICATION_CREDENTIALS', '/home/jovyan/notebooks/gcs/bq-spark-demo.json')\n        .config('spark.hadoop.google.cloud.auth.service.account.enable', 'true')\n        .config('spark.hadoop.google.cloud.auth.service.account.json.keyfile', credentials_file)\n        .config('spark.hadoop.fs.gs.impl', 'com.google.cloud.hadoop.fs.gcs.GoogleHadoopFileSystem')\n        .config('spark.hadoop.fs.AbstractFileSystem.gs.impl', 'com.google.cloud.hadoop.fs.gcs.GoogleHadoopFS')\n        .config(\"spark.hadoop.fs.gs.project.id\", project_id)\n        .getOrCreate())\n")),(0,o.kt)("p",null,"Most of this is boilerplate for installing the BigQuery and GCS libraries in the notebook environment. This also sets the configuration parameters to tell the libraries what GCP project to use and how to authenticate with Google. The parameters specific to OpenLineage are the four already mentioned: ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.jars.packages"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.extraListeners"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.openlineage.host"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.openlineage.namespace"),". Here, the host has been configured to be the ",(0,o.kt)("inlineCode",{parentName:"p"},"marquez-api")," container started by Docker."),(0,o.kt)("p",null,"With OpenLineage configured, it's time to get some data. The below code populates Spark DataFrames with data from two COVID-19 public data sets. Create a new cell in the notebook and paste the following: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"from pyspark.sql.functions import expr, col\n\nmask_use = spark.read.format('bigquery') \\\n    .option('parentProject', project_id) \\\n    .option('table', 'bigquery-public-data:covid19_nyt.mask_use_by_county') \\\n    .load() \\\n    .select(expr(\"always + frequently\").alias(\"frequent\"),\n            expr(\"never + rarely\").alias(\"rare\"),\n            \"county_fips_code\")\n        \nopendata = spark.read.format('bigquery') \\\n    .option('parentProject', project_id) \\\n    .option('table', 'bigquery-public-data.covid19_open_data.covid19_open_data') \\\n    .load() \\\n    .filter(\"country_name == 'United States of America'\") \\\n    .filter(\"date == '2021-10-31'\") \\\n    .select(\"location_key\",\n            expr('cumulative_deceased/(population/100000)').alias('deaths_per_100k'),\n            expr('cumulative_persons_fully_vaccinated/(population - population_age_00_09)').alias('vaccination_rate'),\n            col('subregion2_code').alias('county_fips_code'))\njoined = mask_use.join(opendata, 'county_fips_code')\n\njoined.write.mode('overwrite').parquet(f'gs://{gcs_bucket}/demodata/covid_deaths_and_mask_usage/')\n")),(0,o.kt)("p",null,"Some background on the above: the ",(0,o.kt)("inlineCode",{parentName:"p"},"covid19_open_data")," table is being filtered to include only U.S. data and data for Halloween 2021. The ",(0,o.kt)("inlineCode",{parentName:"p"},"deaths_per_100k")," data point is being calculated using the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"cumulative_deceased")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"population")," columns and the ",(0,o.kt)("inlineCode",{parentName:"p"},"vaccination_rate")," using the total population, subtracting the 0-9 year olds, since they were ineligible for vaccination at the time. For the ",(0,o.kt)("inlineCode",{parentName:"p"},"mask_use_by_county"),' data, "rarely" and "never" data are being combined into a single number, as are "frequently" and "always." The columns selected from the two datasets are then stored in GCS.'),(0,o.kt)("p",null,"Now, add a cell to the notebook and paste this line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spark.read.parquet(f'gs://{gcs_bucket}/demodata/covid_deaths_and_mask_usage/').count()\n")),(0,o.kt)("p",null,"The notebook should print a warning and a stacktrace (probably a debug statement), then return a total of 3142 records."),(0,o.kt)("p",null,"Now that the pipeline is operational it is available for lineage collection."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file that ships with the OpenLineage repo includes only the Jupyter notebook and the Marquez API. To explore the lineage visually, start up the Marquez web project. Without terminating the existing docker containers, run the following command in a new terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --network spark_default -p 3000:3000 -e MARQUEZ_HOST=marquez-api -e MARQUEZ_PORT=5000 --link marquez-api:marquez-api marquezproject/marquez-web:0.19.1\n")),(0,o.kt)("p",null,"Next, open a new browser tab and navigate to http://localhost:3000, which should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Marquez home",src:a(49619).Z,width:"1688",height:"1308"})),(0,o.kt)("p",null,"Note: the ",(0,o.kt)("inlineCode",{parentName:"p"},"spark_integration")," namespace is automatically chosen because there are no other namespaces available. Three jobs are listed on the jobs page of the UI. They all start with ",(0,o.kt)("inlineCode",{parentName:"p"},"openlineage_spark_test"),", which is the appName passed to the SparkSession when the first cell of the notebook was built. Each query execution or RDD action is represented as a distinct job and the name of the action is appended to the application name to form the name of the job. Clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"openlineage_spark_test.execute_insert_into_hadoop_fs_relation_command")," node calls up the lineage graph for our notebook:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Marquez job graph",src:a(14703).Z,width:"1687",height:"1307"})),(0,o.kt)("p",null,"The graph shows that the ",(0,o.kt)("inlineCode",{parentName:"p"},"openlineage_spark_test.execute_insert_into_hadoop_fs_relation_command")," job reads from two input datasets, ",(0,o.kt)("inlineCode",{parentName:"p"},"bigquery-public-data.covid19_nyt.mask_use_by_county")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bigquery-public-data.covid19_open_data.covid19_open_data"),", and writes to a third dataset, ",(0,o.kt)("inlineCode",{parentName:"p"},"/demodata/covid_deaths_and_mask_usage"),". The namespace is missing from that third dataset, but the fully qualified name is ",(0,o.kt)("inlineCode",{parentName:"p"},"gs://<your_bucket>/demodata/covid_deaths_and_mask_usage"),"."),(0,o.kt)("p",null,"The bottom bar shows some interesting data that was collected from the Spark job. Dragging the bar up expands the view to offer a closer look."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Marquez job facets",src:a(67066).Z,width:"1687",height:"1307"})),(0,o.kt)("p",null,"Two facets always collected from Spark jobs are the ",(0,o.kt)("inlineCode",{parentName:"p"},"spark_version")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.logicalPlan"),". The first simply reports what version of Spark was executing, as well as the version of the openlineage-spark library. This is helpful for debugging job runs."),(0,o.kt)("p",null,"The second facet is the serialized optimized LogicalPlan Spark reports when the job runs. Spark\u2019s query optimization can have dramatic effects on the execution time and efficiency of the query job. Tracking how query plans change over time can significantly aid in debugging slow queries or ",(0,o.kt)("inlineCode",{parentName:"p"},"OutOfMemory")," errors in production."),(0,o.kt)("p",null,"Clicking on the first BigQuery dataset provides information about the data:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Marquez BigQuery dataset",src:a(8658).Z,width:"1686",height:"1307"})),(0,o.kt)("p",null,"One can see the schema of the dataset as well as the datasource."),(0,o.kt)("p",null,"Similar information is available about the dataset written to in GCS:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Marquez output dataset",src:a(22850).Z,width:"1688",height:"1307"})),(0,o.kt)("p",null,"As in the BigQuery dataset, one can see the output schema and the datasource \u2014 in this case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"gs://")," scheme and the name of the bucket written to."),(0,o.kt)("p",null,"In addition to the schema, one can also see a stats facet, reporting the number of output records and bytes as -1. "),(0,o.kt)("p",null,"The VERSIONS tab on the bottom bar would display multiple versions if there were any (not the case here). Clicking on the version shows the same schema and statistics facets, but they are specific to the version selected."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Marquez output dataset version",src:a(1922).Z,width:"1687",height:"1308"})),(0,o.kt)("p",null,"In production, this dataset would have many versions, as each time a job runs a new version of the dataset is created. This permits the tracking of changes to the statistics and schema over time, aiding in debugging slow jobs or data quality issues and job failures."),(0,o.kt)("p",null,"The final job in the UI is a HashAggregate job. This represents the ",(0,o.kt)("inlineCode",{parentName:"p"},"count()")," method called at the end to show the number of records in the dataset. Rather than a ",(0,o.kt)("inlineCode",{parentName:"p"},"count()"),", this could easily be a ",(0,o.kt)("inlineCode",{parentName:"p"},"toPandas()")," call or some other job that reads and processes that data -- perhaps one that stores output back into GCS or updates a Postgres database, publishes a new model, etc. Regardless of where the output gets stored, the OpenLineage integration allows one to see the entire lineage graph, unifying datasets in object stores, relational databases, and more traditional data warehouses."),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"The Spark integration from OpenLineage offers users insights into graphs of datasets stored in object stores like S3, GCS, and Azure Blob Storage, as well as BigQuery and relational databases like Postgres. Now with support for Spark 3.1, OpenLineage offers visibility into more environments, such as Databricks, EMR, and Dataproc clusters."))}c.isMDXComponent=!0},40639:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},86291:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jupyter_new_notebook-8c87401b0e3cb3258324aec74a9cc53d.png"},8658:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/marquez_bigquery_dataset_latest-887043572deffb77cf49da306c59ba53.png"},49619:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/marquez_home-ccf31aaf028eb9759ef4aaa755d9236d.png"},67066:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/marquez_job_facets-e5cc2629f752104bfdecb0ad2836afd1.png"},14703:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/marquez_job_graph-36260e0e671598e72438cd665ba4d5bc.png"},22850:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/marquez_output_dataset_latest-0c1d02f62be9e66720dfc33b85ccc851.png"},1922:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/marquez_output_dataset_version-1e0e5b024d82bfa3d2bf4a7cf8222d6c.png"}}]);