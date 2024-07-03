"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7129],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},16715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:2},i="Getting Started with Airflow and OpenLineage+Marquez",l={unversionedId:"guides/airflow-quickstart",id:"guides/airflow-quickstart",title:"Getting Started with Airflow and OpenLineage+Marquez",description:"In this example, we'll walk you through how to enable Airflow DAGs to send lineage metadata to Marquez using OpenLineage.",source:"@site/docs/guides/airflow-quickstart.md",sourceDirName:"guides",slug:"/guides/airflow-quickstart",permalink:"/docs/guides/airflow-quickstart",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/guides/airflow-quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"About These Guides",permalink:"/docs/guides/about"},next:{title:"Using OpenLineage with Spark",permalink:"/docs/guides/spark"}},s={},p=[{value:"You\u2019ll Learn How To:",id:"youll-learn-how-to",level:3},{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure Your Astro Project",id:"configure-your-astro-project",level:2},{value:"Add Marquez and Database Services Using Docker Compose",id:"add-marquez-and-database-services-using-docker-compose",level:2},{value:"Start Airflow with Marquez",id:"start-airflow-with-marquez",level:2},{value:"Write Airflow DAGs",id:"write-airflow-dags",level:2},{value:"Create a <code>counter</code> DAG",id:"create-a-counter-dag",level:3},{value:"Create a <code>sum</code> DAG",id:"create-a-sum-dag",level:3},{value:"View Collected Metadata",id:"view-collected-metadata",level:2},{value:"Troubleshoot a Failing DAG with Marquez",id:"troubleshoot-a-failing-dag-with-marquez",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-airflow-and-openlineagemarquez"},"Getting Started with Airflow and OpenLineage+Marquez"),(0,r.kt)("p",null,"In this example, we'll walk you through how to enable Airflow DAGs to send lineage metadata to ",(0,r.kt)("a",{parentName:"p",href:"https://marquezproject.ai/"},"Marquez")," using OpenLineage. "),(0,r.kt)("h3",{id:"youll-learn-how-to"},"You\u2019ll Learn How To:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"configure Airflow to send OpenLineage events to Marquez"),(0,r.kt)("li",{parentName:"ul"},"write OpenLineage-enabled DAGs"),(0,r.kt)("li",{parentName:"ul"},"troubleshoot a failing DAG using Marquez")),(0,r.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#configure-your-astro-project"},"Step 1: Configure Your Astro Project")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#add-marquez-services-using-docker-compose"},"Step 2: Add Marquez Services Using Docker Compose")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#start-airflow-with-marquez"},"Step 3: Start Airflow with Marquez")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#write-airflow-dags"},"Step 4: Write Airflow DAGs")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#view-collected-metadata"},"Step 5: View Collected Metadata")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#troubleshoot-a-failing-dag-with-marquez"},"Step 6: Troubleshoot a Failing DAG with Marquez"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you begin, make sure you have installed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/install"},"Docker 17.05"),"+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.astronomer.io/astro/cli/overview"},"Astro CLI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://curl.se/"},"curl"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," We recommend that you have allocated at least ",(0,r.kt)("strong",{parentName:"p"},"2 CPUs")," and ",(0,r.kt)("strong",{parentName:"p"},"8 GB")," of memory to Docker.")),(0,r.kt)("h2",{id:"configure-your-astro-project"},"Configure Your Astro Project"),(0,r.kt)("p",null,"Use the Astro CLI to create and run an Airflow project locally that will integrate with Marquez."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your project directory, create a new Astro project:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ..\n$ mkdir astro-marquez-tutorial && cd astro-marquez-tutorial\n$ astro dev init\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using curl, change into new directory ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," and download some scripts required by Marquez services:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ mkdir docker && cd docker\n$ curl -O "https://raw.githubusercontent.com/MarquezProject/marquez/main/docker/{entrypoint.sh,wait-for-it.sh}"\n$ ..\n')),(0,r.kt)("p",{parentName:"li"},"After executing the above, your project directory should look like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ls -a\n.                     Dockerfile            packages.txt\n..                    README.md             plugins\n.astro                airflow_settings.yaml requirements.txt\n.dockerignore         dags                  tests\n.env                  docker\n.gitignore            include\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the OpenLineage Airflow Provider and the Common SQL Provider to the requirements.txt file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"apache-airflow-providers-common-sql==1.7.2\napache-airflow-providers-openlineage==1.1.0\n")),(0,r.kt)("p",{parentName:"li"},"For details about the Provider and its minimum requirements, see the Airflow ",(0,r.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/index.html"},"docs"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To configure Astro to send lineage metadata to Marquez, add the following environment variables below to your Astro project's ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-env"},"OPENLINEAGE_URL=http://host.docker.internal:5000\nOPENLINEAGE_NAMESPACE=example\nAIRFLOW_CONN_EXAMPLE_DB=postgres://example:example@host.docker.internal:7654/example\n")),(0,r.kt)("p",{parentName:"li"},"These variables allow Airflow to connect with the OpenLineage API and send events to Marquez.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"It is a good idea to have Airflow use a different port for Postgres than the default 5432, so run the following command to use port 5678 instead:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"astro config set postgres.port 5678\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the Dockerfile to verify that your installed version of the Astro Runtime is 9.0.0+ (to ensure that you will be using Airflow 2.7.0+)."),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"FROM quay.io/astronomer/astro-runtime:9.1.0\n")))),(0,r.kt)("h2",{id:"add-marquez-and-database-services-using-docker-compose"},"Add Marquez and Database Services Using Docker Compose"),(0,r.kt)("p",null,"Astro supports manual configuration of services via Docker Compose using YAML."),(0,r.kt)("p",null,"Create new file ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.override.yml")," in your project and copy/paste the following into the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3.1"\nservices:\n  web:\n    image: marquezproject/marquez-web:latest\n    container_name: marquez-web\n    environment:\n      - MARQUEZ_HOST=api\n      - MARQUEZ_PORT=5000\n    ports:\n      - "3000:3000"\n    depends_on:\n      - api\n\n  db:\n    image: postgres:14.9\n    container_name: marquez-db\n    ports:\n      - "6543:6543"\n    environment:\n      - POSTGRES_USER=marquez\n      - POSTGRES_PASSWORD=marquez\n      - POSTGRES_DB=marquez\n\n  example-db:\n    image: postgres:14.9\n    container_name: example-db\n    ports:\n      - "7654:5432"\n    environment:\n      - POSTGRES_USER=example\n      - POSTGRES_PASSWORD=example\n      - POSTGRES_DB=example\n  \n  api:\n    image: marquezproject/marquez:latest\n    container_name: marquez-api\n    environment:\n      - MARQUEZ_PORT=5000\n      - MARQUEZ_ADMIN_PORT=5001\n    ports:\n      - "5000:5000"\n      - "5001:5001"\n    volumes:\n       - ./docker/wait-for-it.sh:/usr/src/app/wait-for-it.sh\n    links:\n      - "db:postgres"\n    depends_on:\n      - db\n    entrypoint: ["/bin/bash", "./wait-for-it.sh", "db:6543", "--", "./entrypoint.sh"]\n\n  redis:\n    image: bitnami/redis:6.0.6\n    environment:\n      - ALLOW_EMPTY_PASSWORD=yes\n')),(0,r.kt)("p",null,"The above adds the Marquez API, database and Web UI, along with an additional Postgres database for the DAGs used in this example, to Astro's Docker container and configures them to use the scripts in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," directory you previously downloaded from Marquez."),(0,r.kt)("h2",{id:"start-airflow-with-marquez"},"Start Airflow with Marquez"),(0,r.kt)("p",null,"Now you can start all services. To do so, execute the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ astro dev start\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The above command will:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"start Airflow"),(0,r.kt)("li",{parentName:"ul"},"start Marquez, including its API, database and UI"),(0,r.kt)("li",{parentName:"ul"},"create and start a Postgres server for DAG tasks")),(0,r.kt)("p",null,"To view the Airflow UI and verify it's running, open ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),". Then, log in using the username and password ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"admin"),". You can also browse to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," to view the Marquez UI."),(0,r.kt)("h2",{id:"write-airflow-dags"},"Write Airflow DAGs"),(0,r.kt)("p",null,"In this step, you will create two new Airflow DAGs that perform simple tasks. The ",(0,r.kt)("inlineCode",{parentName:"p"},"counter")," DAG adds 1 to a column every minute, while the ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," DAG calculates a sum every five minutes. This will result in a simple pipeline containing two jobs and two datasets."),(0,r.kt)("h3",{id:"create-a-counter-dag"},"Create a ",(0,r.kt)("inlineCode",{parentName:"h3"},"counter")," DAG"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"dags/"),", create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"counter.py")," and add the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from airflow import DAG\nfrom airflow.decorators import task\nfrom airflow.providers.postgres.operators.postgres import PostgresOperator\nfrom airflow.utils.dates import days_ago\n\nwith DAG(\n    'counter',\n    start_date=days_ago(1),\n    schedule='*/1 * * * *',\n    catchup=False,\n    is_paused_upon_creation=False,\n    max_active_runs=1,\n    description='DAG that generates a new count value equal to 1.'\n):\n\n    query1 = PostgresOperator(\n        task_id='if_not_exists',\n        postgres_conn_id='example_db',\n        sql='''\n        CREATE TABLE IF NOT EXISTS counts (\n            value INTEGER\n        );'''\n    )\n\n    query2 = PostgresOperator(\n        task_id='inc',\n        postgres_conn_id='example_db',\n        sql='''\n        INSERT INTO counts (value)\n            VALUES (1) \n        '''\n    )\n\nquery1 >> query2\n")),(0,r.kt)("h3",{id:"create-a-sum-dag"},"Create a ",(0,r.kt)("inlineCode",{parentName:"h3"},"sum")," DAG"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"dags/"),", create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"sum.py")," and add the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from airflow import DAG\nfrom airflow.providers.postgres.operators.postgres import PostgresOperator\nfrom airflow.utils.dates import days_ago\n\nwith DAG(\n    'sum',\n    start_date=days_ago(1),\n    schedule='*/5 * * * *',\n    catchup=False,\n    is_paused_upon_creation=False,\n    max_active_runs=1,\n    description='DAG that sums the total of generated count values.'\n):\n\n    query1 = PostgresOperator(\n        task_id='if_not_exists',\n        postgres_conn_id='example_db',\n        sql='''\n        CREATE TABLE IF NOT EXISTS sums (\n            value INTEGER\n        );'''\n    )\n\n    query2 = PostgresOperator(\n        task_id='total',\n        postgres_conn_id='example_db',\n        sql='''\n        INSERT INTO sums (value)\n            SELECT SUM(value) FROM counts;\n        '''\n    )\n\nquery1 >> query2\n")),(0,r.kt)("h2",{id:"view-collected-metadata"},"View Collected Metadata"),(0,r.kt)("p",null,"To ensure that Airflow is executing ",(0,r.kt)("inlineCode",{parentName:"p"},"counter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sum"),", navigate to the DAGs tab in Airflow and verify that they are both enabled and are in a ",(0,r.kt)("em",{parentName:"p"},"running")," state:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(50225).Z,width:"1911",height:"568"})),(0,r.kt)("p",null,"To view DAG metadata collected by Marquez from Airflow, browse to the Marquez UI by visiting ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),". Then, use the ",(0,r.kt)("em",{parentName:"p"},"search")," bar in the upper right-side of the page and search for the ",(0,r.kt)("inlineCode",{parentName:"p"},"counter.inc")," job. To view lineage metadata for ",(0,r.kt)("inlineCode",{parentName:"p"},"counter.inc"),", click on the job from the drop-down list:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," If the ",(0,r.kt)("inlineCode",{parentName:"p"},"counter.inc")," job is not in the drop-down list, check to see if Airflow has successfully executed the DAG.")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:a(94241).Z})),(0,r.kt)("p",null,"If you take a quick look at the lineage graph for ",(0,r.kt)("inlineCode",{parentName:"p"},"counter.inc"),", you should see ",(0,r.kt)("inlineCode",{parentName:"p"},"example.public.counts")," as an output dataset and ",(0,r.kt)("inlineCode",{parentName:"p"},"sum.total")," as a downstream job!"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(18881).Z,width:"1095",height:"436"})),(0,r.kt)("h2",{id:"troubleshoot-a-failing-dag-with-marquez"},"Troubleshoot a Failing DAG with Marquez"),(0,r.kt)("p",null,"In this step, let's quickly walk through a simple troubleshooting scenario where the DAG ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," begins to fail as the result of an upstream schema change for table ",(0,r.kt)("inlineCode",{parentName:"p"},"counts"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tip:")," It's helpful to apply the same code changes outlined below to your Airflow DAGs defined in ",(0,r.kt)("strong",{parentName:"p"},"Step 6"),".")),(0,r.kt)("p",null,"Let's say team ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," owns the DAG ",(0,r.kt)("inlineCode",{parentName:"p"},"counter"),". Team ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," decides to update the tasks in ",(0,r.kt)("inlineCode",{parentName:"p"},"counter")," to rename the ",(0,r.kt)("inlineCode",{parentName:"p"},"values")," column in the ",(0,r.kt)("inlineCode",{parentName:"p"},"counts")," table to ",(0,r.kt)("inlineCode",{parentName:"p"},"value_1_to_10")," (without properly communicating the schema change!):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"query1 = PostgresOperator(\n-   task_id='if_not_exists',\n+   task_id='alter_name_of_column',\n    postgres_conn_id='example_db',\n    sql='''\n-   CREATE TABLE IF NOT EXISTS counts (\n-     value INTEGER\n-   );''',\n+   ALTER TABLE \"counts\" RENAME COLUMN \"value\" TO \"value_1_to_10\";\n+   '''\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"query2 = PostgresOperator(\n    task_id='inc',\n    postgres_conn_id='example_db',\n    sql='''\n-    INSERT INTO counts (value)\n+    INSERT INTO counts (value_1_to_10)\n         VALUES (1)\n    ''',\n)\n")),(0,r.kt)("p",null,"Team ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", unaware of the schema change, owns the DAG ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," and begins to see DAG run metadata with ",(0,r.kt)("em",{parentName:"p"},"failed")," run states:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(87281).Z,width:"1360",height:"381"})),(0,r.kt)("p",null,"But, team ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," is not sure what might have caused the DAG failure as no recent code changes have been made to the DAG. So, team ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," decides to check the schema of the input dataset:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(94012).Z,width:"926",height:"436"})),(0,r.kt)("p",null,"Team ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," soon realizes that the schema has changed recently for the ",(0,r.kt)("inlineCode",{parentName:"p"},"counts")," table! To fix the DAG, team ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," updates the ",(0,r.kt)("inlineCode",{parentName:"p"},"t2")," task that calcuates the count total to use the new column name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"query2 = PostgresOperator(\n    task_id='total',\n    postgres_conn_id='example_db',\n    sql='''\n    INSERT INTO sums (value)\n-       SELECT SUM(value) FROM counts;\n+       SELECT SUM(value_1_to_10) FROM counts;\n    '''\n)\n")),(0,r.kt)("p",null,"With the code change, the DAG ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," begins to run successfully:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(30258).Z,width:"1396",height:"436"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Congrats"),"! You successfully step through a troubleshooting scenario of a failing DAG using metadata collected with Marquez! You can now add your own DAGs to ",(0,r.kt)("inlineCode",{parentName:"p"},"dags/")," to build more complex data lineage graphs."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Review the Marquez ",(0,r.kt)("a",{parentName:"li",href:"https://marquezproject.github.io/marquez/openapi.html"},"HTTP API")," used to collect Airflow DAG metadata and learn how to build your own integrations using OpenLineage."),(0,r.kt)("li",{parentName:"ul"},"Take a look at ",(0,r.kt)("a",{parentName:"li",href:"https://openlineage.io/docs/integrations/spark/"},(0,r.kt)("inlineCode",{parentName:"a"},"openlineage-spark"))," integration that can be used with Airflow.")),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"What did you think of this example? You can reach out to us on ",(0,r.kt)("a",{parentName:"p",href:"http://bit.ly/MqzSlack"},"Slack")," and leave us feedback, or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez/blob/main/CONTRIBUTING.md#submitting-a-pull-request"},"open a pull request")," with your suggested changes!"))}d.isMDXComponent=!0},94241:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/current-search-count-8f114187e9e98b7232568fb86855c99d.png"},18881:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/astro-current-lineage-view-job-35f1ba275c82cd333c96931455538650.png"},87281:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/astro-job-failure-5c8592653746dbfbedcdd4bfb94b75fe.png"},94012:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/astro-lineage-view-dataset-b48f8b9d06706244cbc5ff7f786cd5de.png"},30258:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/astro-lineage-view-job-successful-254a991b9d7a4eaee49c48bf21076aa2.png"},50225:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/astro-view-dags-0693c966ae0fe5cdf3d37ea227394a25.png"}}]);