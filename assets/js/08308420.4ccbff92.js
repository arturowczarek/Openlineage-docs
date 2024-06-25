"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=i.createContext({}),c=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},l=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(n),d=a,h=l["".concat(r,".").concat(d)]||l[d]||m[d]||o;return n?i.createElement(h,s(s({ref:t},u),{},{components:n})):i.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=l;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}l.displayName="MDXCreateElement"},64270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={title:"Logging",sidebar_position:1},s=void 0,p={unversionedId:"development/developing/python/troubleshooting/logging",id:"development/developing/python/troubleshooting/logging",title:"Logging",description:"OpenLineage uses python's logging facility when generating logs. Being able to emit logs for various purposes is very helpful when troubleshooting OpenLineage.",source:"@site/docs/development/developing/python/troubleshooting/logging.md",sourceDirName:"development/developing/python/troubleshooting",slug:"/development/developing/python/troubleshooting/logging",permalink:"/docs/development/developing/python/troubleshooting/logging",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/development/developing/python/troubleshooting/logging.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Logging",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Dagster",permalink:"/docs/development/developing/python/tests/dagster"},next:{title:"Python Client",permalink:"/docs/development/developing/python/api-reference/openlineage.client"}},r={},c=[{value:"Further readings",id:"further-readings",level:3}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OpenLineage uses python's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/logging.html"},"logging facility")," when generating logs. Being able to emit logs for various purposes is very helpful when troubleshooting OpenLineage."),(0,a.kt)("p",null,"Consider the following sample python script that emits OpenLineage events:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/env python3\nfrom openlineage.client.run import (\n    RunEvent,\n    RunState,\n    Run,\n    Job,\n    Dataset,\n    OutputDataset,\n    InputDataset,\n)\nfrom openlineage.client.client import OpenLineageClient, OpenLineageClientOptions\nfrom openlineage.client.facet import (\n    SqlJobFacet,\n    SchemaDatasetFacet,\n    SchemaField,\n    OutputStatisticsOutputDatasetFacet,\n    SourceCodeLocationJobFacet,\n    NominalTimeRunFacet,\n    DataQualityMetricsInputDatasetFacet,\n    ColumnMetric,\n)\nimport uuid\nfrom datetime import datetime, timezone, timedelta\nimport time\nfrom random import random\n\nPRODUCER = f"https://github.com/openlineage-user"\nnamespace = "python_client"\n\nurl = "http://localhost:5000"\napi_key = "1234567890ckcu028rzu5l"\n\nclient = OpenLineageClient(\n    url=url,\n    # optional api key in case the backend requires it\n    options=OpenLineageClientOptions(api_key=api_key),\n)\n\n# generates job facet\ndef job(job_name, sql, location):\n    facets = {"sql": SqlJobFacet(sql)}\n    if location != None:\n        facets.update(\n            {"sourceCodeLocation": SourceCodeLocationJobFacet("git", location)}\n        )\n    return Job(namespace=namespace, name=job_name, facets=facets)\n\n\n# geneartes run racet\ndef run(run_id, hour):\n    return Run(\n        runId=run_id,\n        facets={\n            "nominalTime": NominalTimeRunFacet(\n                nominalStartTime=f"2022-04-14T{twoDigits(hour)}:12:00Z"\n            )\n        },\n    )\n\n\n# generates dataset\ndef dataset(name, schema=None, ns=namespace):\n    if schema == None:\n        facets = {}\n    else:\n        facets = {"schema": schema}\n    return Dataset(namespace, name, facets)\n\n\n# generates output dataset\ndef outputDataset(dataset, stats):\n    output_facets = {"stats": stats, "outputStatistics": stats}\n    return OutputDataset(dataset.namespace, dataset.name, dataset.facets, output_facets)\n\n\n# generates input dataset\ndef inputDataset(dataset, dq):\n    input_facets = {\n        "dataQuality": dq,\n    }\n    return InputDataset(dataset.namespace, dataset.name, dataset.facets, input_facets)\n\n\ndef twoDigits(n):\n    if n < 10:\n        result = f"0{n}"\n    elif n < 100:\n        result = f"{n}"\n    else:\n        raise f"error: {n}"\n    return result\n\n\nnow = datetime.now(timezone.utc)\n\n\n# generates run Event\ndef runEvents(job_name, sql, inputs, outputs, hour, min, location, duration):\n    run_id = str(uuid.uuid4())\n    myjob = job(job_name, sql, location)\n    myrun = run(run_id, hour)\n    st = now + timedelta(hours=hour, minutes=min, seconds=20 + round(random() * 10))\n    end = st + timedelta(minutes=duration, seconds=20 + round(random() * 10))\n    started_at = st.isoformat()\n    ended_at = end.isoformat()\n    return (\n        RunEvent(\n            eventType=RunState.START,\n            eventTime=started_at,\n            run=myrun,\n            job=myjob,\n            producer=PRODUCER,\n            inputs=inputs,\n            outputs=outputs,\n        ),\n        RunEvent(\n            eventType=RunState.COMPLETE,\n            eventTime=ended_at,\n            run=myrun,\n            job=myjob,\n            producer=PRODUCER,\n            inputs=inputs,\n            outputs=outputs,\n        ),\n    )\n\n\n# add run event to the events list\ndef addRunEvents(\n    events, job_name, sql, inputs, outputs, hour, minutes, location=None, duration=2\n):\n    (start, complete) = runEvents(\n        job_name, sql, inputs, outputs, hour, minutes, location, duration\n    )\n    events.append(start)\n    events.append(complete)\n\n\nevents = []\n\n# create dataset data\nfor i in range(0, 5):\n\n    user_counts = dataset("tmp_demo.user_counts")\n    user_history = dataset(\n        "temp_demo.user_history",\n        SchemaDatasetFacet(\n            fields=[\n                SchemaField(name="id", type="BIGINT", description="the user id"),\n                SchemaField(\n                    name="email_domain", type="VARCHAR", description="the user id"\n                ),\n                SchemaField(name="status", type="BIGINT", description="the user id"),\n                SchemaField(\n                    name="created_at",\n                    type="DATETIME",\n                    description="date and time of creation of the user",\n                ),\n                SchemaField(\n                    name="updated_at",\n                    type="DATETIME",\n                    description="the last time this row was updated",\n                ),\n                SchemaField(\n                    name="fetch_time_utc",\n                    type="DATETIME",\n                    description="the time the data was fetched",\n                ),\n                SchemaField(\n                    name="load_filename",\n                    type="VARCHAR",\n                    description="the original file this data was ingested from",\n                ),\n                SchemaField(\n                    name="load_filerow",\n                    type="INT",\n                    description="the row number in the original file",\n                ),\n                SchemaField(\n                    name="load_timestamp",\n                    type="DATETIME",\n                    description="the time the data was ingested",\n                ),\n            ]\n        ),\n        "snowflake://",\n    )\n\n    create_user_counts_sql = """CREATE OR REPLACE TABLE TMP_DEMO.USER_COUNTS AS (\n            SELECT DATE_TRUNC(DAY, created_at) date, COUNT(id) as user_count\n            FROM TMP_DEMO.USER_HISTORY\n            GROUP BY date\n            )"""\n\n    # location of the source code\n    location = "https://github.com/some/airflow/dags/example/user_trends.py"\n\n    # run simulating Airflow DAG with snowflake operator\n    addRunEvents(\n        events,\n        "create_user_counts",\n        create_user_counts_sql,\n        [user_history],\n        [user_counts],\n        i,\n        11,\n        location,\n    )\n\n\nfor event in events:\n    from openlineage.client.serde import Serde\n    client.emit(event)\n\n')),(0,a.kt)("p",null,"When you use OpenLineage backend such as Marquez on your local environment, the script would emit OpenLienage events to it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python oltest.py\n")),(0,a.kt)("p",null,"However, this short script does not produce any logging information, as the logging configuration is not setup."),(0,a.kt)("p",null,"Add the following line to ",(0,a.kt)("inlineCode",{parentName:"p"},"oltest.py"),", to configure the logging level as ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"...\nimport logging\n...\nlogging.basicConfig(level=logging.DEBUG)\n...\n")),(0,a.kt)("p",null,"Re-running the ",(0,a.kt)("inlineCode",{parentName:"p"},"oltest.py")," again will now produce the following outputs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'DEBUG:openlineage.client.transport.http:Constructing openlineage client to send events to http://localhost:5000\nDEBUG:openlineage.client.transport.http:Sending openlineage event {"eventTime": "2022-12-07T02:10:24.369600+00:00", "eventType": "START", "inputs": [{"facets": {"schema": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SchemaDatasetFacet", "fields": [{"description": "the user id", "name": "id", "type": "BIGINT"}, {"description": "the user id", "name": "email_domain", "type": "VARCHAR"}, {"description": "the user id", "name": "status", "type": "BIGINT"}, {"description": "date and time of creation of the user", "name": "created_at", "type": "DATETIME"}, {"description": "the last time this row was updated", "name": "updated_at", "type": "DATETIME"}, {"description": "the time the data was fetched", "name": "fetch_time_utc", "type": "DATETIME"}, {"description": "the original file this data was ingested from", "name": "load_filename", "type": "VARCHAR"}, {"description": "the row number in the original file", "name": "load_filerow", "type": "INT"}, {"description": "the time the data was ingested", "name": "load_timestamp", "type": "DATETIME"}]}}, "name": "temp_demo.user_history", "namespace": "python_client"}], "job": {"facets": {"sourceCodeLocation": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SourceCodeLocationJobFacet", "type": "git", "url": "https://github.com/some/airflow/dags/example/user_trends.py"}, "sql": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SqlJobFacet", "query": "CREATE OR REPLACE TABLE TMP_DEMO.USER_COUNTS AS (\\n\\t\\t\\tSELECT DATE_TRUNC(DAY, created_at) date, COUNT(id) as user_count\\n\\t\\t\\tFROM TMP_DEMO.USER_HISTORY\\n\\t\\t\\tGROUP BY date\\n\\t\\t\\t)"}}, "name": "create_user_counts", "namespace": "python_client"}, "outputs": [{"facets": {}, "name": "tmp_demo.user_counts", "namespace": "python_client"}], "producer": "https://github.com/openlineage-user", "run": {"facets": {"nominalTime": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/NominalTimeRunFacet", "nominalStartTime": "2022-04-14T00:12:00Z"}}, "runId": "e74f805a-0fde-4480-84a3-6919011eb14d"}}\nDEBUG:urllib3.connectionpool:Starting new HTTP connection (1): localhost:5000\nDEBUG:urllib3.connectionpool:http://localhost:5000 "POST /api/v1/lineage HTTP/1.1" 201 0\nDEBUG:openlineage.client.transport.http:Sending openlineage event {"eventTime": "2022-12-07T02:12:47.369600+00:00", "eventType": "COMPLETE", "inputs": [{"facets": {"schema": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SchemaDatasetFacet", "fields": [{"description": "the user id", "name": "id", "type": "BIGINT"}, {"description": "the user id", "name": "email_domain", "type": "VARCHAR"}, {"description": "the user id", "name": "status", "type": "BIGINT"}, {"description": "date and time of creation of the user", "name": "created_at", "type": "DATETIME"}, {"description": "the last time this row was updated", "name": "updated_at", "type": "DATETIME"}, {"description": "the time the data was fetched", "name": "fetch_time_utc", "type": "DATETIME"}, {"description": "the original file this data was ingested from", "name": "load_filename", "type": "VARCHAR"}, {"description": "the row number in the original file", "name": "load_filerow", "type": "INT"}, {"description": "the time the data was ingested", "name": "load_timestamp", "type": "DATETIME"}]}}, "name": "temp_demo.user_history", "namespace": "python_client"}], "job": {"facets": {"sourceCodeLocation": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SourceCodeLocationJobFacet", "type": "git", "url": "https://github.com/some/airflow/dags/example/user_trends.py"}, "sql": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SqlJobFacet", "query": "CREATE OR REPLACE TABLE TMP_DEMO.USER_COUNTS AS (\\n\\t\\t\\tSELECT DATE_TRUNC(DAY, created_at) date, COUNT(id) as user_count\\n\\t\\t\\tFROM TMP_DEMO.USER_HISTORY\\n\\t\\t\\tGROUP BY date\\n\\t\\t\\t)"}}, "name": "create_user_counts", "namespace": "python_client"}, "outputs": [{"facets": {}, "name": "tmp_demo.user_counts", "namespace": "python_client"}], "producer": "https://github.com/openlineage-user", "run": {"facets": {"nominalTime": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/NominalTimeRunFacet", "nominalStartTime": "2022-04-14T00:12:00Z"}}, "runId": "e74f805a-0fde-4480-84a3-6919011eb14d"}}\nDEBUG:urllib3.connectionpool:http://localhost:5000 "POST /api/v1/lineage HTTP/1.1" 201 0\nDEBUG:openlineage.client.transport.http:Sending openlineage event {"eventTime": "2022-12-07T03:10:20.369600+00:00", "eventType": "START", "inputs": [{"facets": {"schema": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SchemaDatasetFacet", "fields": [{"description": "the user id", "name": "id", "type": "BIGINT"}, {"description": "the user id", "name": "email_domain", "type": "VARCHAR"}, {"description": "the user id", "name": "status", "type": "BIGINT"}, {"description": "date and time of creation of the user", "name": "created_at", "type": "DATETIME"}, {"description": "the last time this row was updated", "name": "updated_at", "type": "DATETIME"}, {"description": "the time the data was fetched", "name": "fetch_time_utc", "type": "DATETIME"}, {"description": "the original file this data was ingested from", "name": "load_filename", "type": "VARCHAR"}, {"description": "the row number in the original file", "name": "load_filerow", "type": "INT"}, {"description": "the time the data was ingested", "name": "load_timestamp", "type": "DATETIME"}]}}, "name": "temp_demo.user_history", "namespace": "python_client"}], "job": {"facets": {"sourceCodeLocation": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SourceCodeLocationJobFacet", "type": "git", "url": "https://github.com/some/airflow/dags/example/user_trends.py"}, "sql": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SqlJobFacet", "query": "CREATE OR REPLACE TABLE TMP_DEMO.USER_COUNTS AS (\\n\\t\\t\\tSELECT DATE_TRUNC(DAY, created_at) date, COUNT(id) as user_count\\n\\t\\t\\tFROM TMP_DEMO.USER_HISTORY\\n\\t\\t\\tGROUP BY date\\n\\t\\t\\t)"}}, "name": "create_user_counts", "namespace": "python_client"}, "outputs": [{"facets": {}, "name": "tmp_demo.user_counts", "namespace": "python_client"}], "producer": "https://github.com/openlineage-user", "run": {"facets": {"nominalTime": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/NominalTimeRunFacet", "nominalStartTime": "2022-04-14T01:12:00Z"}}, "runId": "ff034dc3-e3e9-4e4b-bcf1-efba104ac4d4"}}\nDEBUG:urllib3.connectionpool:http://localhost:5000 "POST /api/v1/lineage HTTP/1.1" 201 0\nDEBUG:openlineage.client.transport.http:Sending openlineage event {"eventTime": "2022-12-07T03:12:42.369600+00:00", "eventType": "COMPLETE", "inputs": [{"facets": {"schema": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SchemaDatasetFacet", "fields": [{"description": "the user id", "name": "id", "type": "BIGINT"}, {"description": "the user id", "name": "email_domain", "type": "VARCHAR"}, {"description": "the user id", "name": "status", "type": "BIGINT"}, {"description": "date and time of creation of the user", "name": "created_at", "type": "DATETIME"}, {"description": "the last time this row was updated", "name": "updated_at", "type": "DATETIME"}, {"description": "the time the data was fetched", "name": "fetch_time_utc", "type": "DATETIME"}, {"description": "the original file this data was ingested from", "name": "load_filename", "type": "VARCHAR"}, {"description": "the row number in the original file", "name": "load_filerow", "type": "INT"}, {"description": "the time the data was ingested", "name": "load_timestamp", "type": "DATETIME"}]}}, "name": "temp_demo.user_history", "namespace": "python_client"}], "job": {"facets": {"sourceCodeLocation": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SourceCodeLocationJobFacet", "type": "git", "url": "https://github.com/some/airflow/dags/example/user_trends.py"}, "sql": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SqlJobFacet", "query": "CREATE OR REPLACE TABLE TMP_DEMO.USER_COUNTS AS (\\n\\t\\t\\tSELECT DATE_TRUNC(DAY, created_at) date, COUNT(id) as user_count\\n\\t\\t\\tFROM TMP_DEMO.USER_HISTORY\\n\\t\\t\\tGROUP BY date\\n\\t\\t\\t)"}}, "name": "create_user_counts", "namespace": "python_client"}, "outputs": [{"facets": {}, "name": "tmp_demo.user_counts", "namespace": "python_client"}], "producer": "https://github.com/openlineage-user", "run": {"facets": {"nominalTime": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/NominalTimeRunFacet", "nominalStartTime": "2022-04-14T01:12:00Z"}}, "runId": "ff034dc3-e3e9-4e4b-bcf1-efba104ac4d4"}}\nDEBUG:urllib3.connectionpool:http://localhost:5000 "POST /api/v1/lineage HTTP/1.1" 201 0\nDEBUG:openlineage.client.transport.http:Sending openlineage event {"eventTime": "2022-12-07T04:10:22.369600+00:00", "eventType": "START", "inputs": [{"facets": {"schema": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SchemaDatasetFacet", "fields": [{"description": "the user id", "name": "id", "type": "BIGINT"}, {"description": "the user id", "name": "email_domain", "type": "VARCHAR"}, {"description": "the user id", "name": "status", "type": "BIGINT"}, {"description": "date and time of creation of the user", "name": "created_at", "type": "DATETIME"}, {"description": "the last time this row was updated", "name": "updated_at", "type": "DATETIME"}, {"description": "the time the data was fetched", "name": "fetch_time_utc", "type": "DATETIME"}, {"description": "the original file this data was ingested from", "name": "load_filename", "type": "VARCHAR"}, {"description": "the row number in the original file", "name": "load_filerow", "type": "INT"}, {"description": "the time the data was ingested", "name": "load_timestamp", "type": "DATETIME"}]}}, "name": "temp_demo.user_history", "namespace": "python_client"}], "job": {"facets": {"sourceCodeLocation": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SourceCodeLocationJobFacet", "type": "git", "url": "https://github.com/some/airflow/dags/example/user_trends.py"}, "sql": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SqlJobFacet", "query": "CREATE OR REPLACE TABLE TMP_DEMO.USER_COUNTS AS (\\n\\t\\t\\tSELECT DATE_TRUNC(DAY, created_at) date, COUNT(id) as user_count\\n\\t\\t\\tFROM TMP_DEMO.USER_HISTORY\\n\\t\\t\\tGROUP BY date\\n\\t\\t\\t)"}}, "name": "create_user_counts", "namespace": "python_client"}, "outputs": [{"facets": {}, "name": "tmp_demo.user_counts", "namespace": "python_client"}], "producer": "https://github.com/openlineage-user", "run": {"facets": {"nominalTime": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/NominalTimeRunFacet", "nominalStartTime": "2022-04-14T02:12:00Z"}}, "runId": "b7304cdf-7c9e-4183-bd9d-1474cb86bad3"}}\nDEBUG:urllib3.connectionpool:http://localhost:5000 "POST /api/v1/lineage HTTP/1.1" 201 0\nDEBUG:openlineage.client.transport.http:Sending openlineage event {"eventTime": "2022-12-07T04:12:45.369600+00:00", "eventType": "COMPLETE", "inputs": [{"facets": {"schema": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SchemaDatasetFacet", "fields": [{"description": "the user id", "name": "id", "type": "BIGINT"}, {"description": "the user id", "name": "email_domain", "type": "VARCHAR"}, {"description": "the user id", "name": "status", "type": "BIGINT"}, {"description": "date and time of creation of the user", "name": "created_at", "type": "DATETIME"}, {"description": "the last time this row was updated", "name": "updated_at", "type": "DATETIME"}, {"description": "the time the data was fetched", "name": "fetch_time_utc", "type": "DATETIME"}, {"description": "the original file this data was ingested from", "name": "load_filename", "type": "VARCHAR"}, {"description": "the row number in the original file", "name": "load_filerow", "type": "INT"}, {"description": "the time the data was ingested", "name": "load_timestamp", "type": "DATETIME"}]}}, "name": "temp_demo.user_history", "namespace": "python_client"}], "job": {"facets": {"sourceCodeLocation": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SourceCodeLocationJobFacet", "type": "git", "url": "https://github.com/some/airflow/dags/example/user_trends.py"}, "sql": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SqlJobFacet", "query": "CREATE OR REPLACE TABLE TMP_DEMO.USER_COUNTS AS (\\n\\t\\t\\tSELECT DATE_TRUNC(DAY, created_at) date, COUNT(id) as user_count\\n\\t\\t\\tFROM TMP_DEMO.USER_HISTORY\\n\\t\\t\\tGROUP BY date\\n\\t\\t\\t)"}}, "name": "create_user_counts", "namespace": "python_client"}, "outputs": [{"facets": {}, "name": "tmp_demo.user_counts", "namespace": "python_client"}], "producer": "https://github.com/openlineage-user", "run": {"facets": {"nominalTime": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/NominalTimeRunFacet", "nominalStartTime": "2022-04-14T02:12:00Z"}}, "runId": "b7304cdf-7c9e-4183-bd9d-1474cb86bad3"}}\nDEBUG:urllib3.connectionpool:http://localhost:5000 "POST /api/v1/lineage HTTP/1.1" 201 0\n....\n')),(0,a.kt)("p",null,"DEBUG will also produce meaningful error messages when something does not work correctly. For example, if the backend server does not exist, you would get the following messages in your console output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'DEBUG:openlineage.client.transport.http:Constructing openlineage client to send events to http://localhost:5000\nDEBUG:openlineage.client.transport.http:Sending openlineage event {"eventTime": "2022-12-07T02:15:58.090994+00:00", "eventType": "START", "inputs": [{"facets": {"schema": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SchemaDatasetFacet", "fields": [{"description": "the user id", "name": "id", "type": "BIGINT"}, {"description": "the user id", "name": "email_domain", "type": "VARCHAR"}, {"description": "the user id", "name": "status", "type": "BIGINT"}, {"description": "date and time of creation of the user", "name": "created_at", "type": "DATETIME"}, {"description": "the last time this row was updated", "name": "updated_at", "type": "DATETIME"}, {"description": "the time the data was fetched", "name": "fetch_time_utc", "type": "DATETIME"}, {"description": "the original file this data was ingested from", "name": "load_filename", "type": "VARCHAR"}, {"description": "the row number in the original file", "name": "load_filerow", "type": "INT"}, {"description": "the time the data was ingested", "name": "load_timestamp", "type": "DATETIME"}]}}, "name": "temp_demo.user_history", "namespace": "python_client"}], "job": {"facets": {"sourceCodeLocation": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SourceCodeLocationJobFacet", "type": "git", "url": "https://github.com/some/airflow/dags/example/user_trends.py"}, "sql": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/SqlJobFacet", "query": "CREATE OR REPLACE TABLE TMP_DEMO.USER_COUNTS AS (\\n\\t\\t\\tSELECT DATE_TRUNC(DAY, created_at) date, COUNT(id) as user_count\\n\\t\\t\\tFROM TMP_DEMO.USER_HISTORY\\n\\t\\t\\tGROUP BY date\\n\\t\\t\\t)"}}, "name": "create_user_counts", "namespace": "python_client"}, "outputs": [{"facets": {}, "name": "tmp_demo.user_counts", "namespace": "python_client"}], "producer": "https://github.com/openlineage-user", "run": {"facets": {"nominalTime": {"_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.18.0/client/python", "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/NominalTimeRunFacet", "nominalStartTime": "2022-04-14T00:12:00Z"}}, "runId": "c321058c-276b-4d1a-a260-8e16f2137c2b"}}\nDEBUG:urllib3.connectionpool:Starting new HTTP connection (1): localhost:5000\nTraceback (most recent call last):\n  File "/opt/homebrew/Caskroom/miniconda/base/envs/openlineage/lib/python3.9/site-packages/urllib3/connection.py", line 174, in _new_conn\n    conn = connection.create_connection(\n  File "/opt/homebrew/Caskroom/miniconda/base/envs/openlineage/lib/python3.9/site-packages/urllib3/util/connection.py", line 95, in create_connection\n    raise err\n  File "/opt/homebrew/Caskroom/miniconda/base/envs/openlineage/lib/python3.9/site-packages/urllib3/util/connection.py", line 85, in create_connection\n    sock.connect(sa)\nConnectionRefusedError: [Errno 61] Connection refused\n')),(0,a.kt)("p",null,"If you wish to output loggigng message to a file, you can modify the basic configuration as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"...\nlogging.basicConfig(filename='debug.log', encoding='utf-8', level=logging.DEBUG)\n...\n")),(0,a.kt)("p",null,"And the output will be saved to a file ",(0,a.kt)("inlineCode",{parentName:"p"},"debug.log"),"."),(0,a.kt)("h3",{id:"further-readings"},"Further readings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/logging.html"},"https://docs.python.org/3/library/logging.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://realpython.com/python-logging/"},"https://realpython.com/python-logging/"))))}m.isMDXComponent=!0}}]);