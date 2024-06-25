"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6995],{3905:(e,n,i)=>{i.d(n,{Zo:()=>c,kt:()=>_});var t=i(67294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(i),_=r,g=f["".concat(l,".").concat(_)]||f[_]||d[_]||a;return i?t.createElement(g,o(o({ref:n},c),{},{components:i})):t.createElement(g,o({ref:n},c))}));function _(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=i[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}f.displayName="MDXCreateElement"},86954:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=i(87462),r=(i(67294),i(3905));const a={sidebar_position:3,title:"Preflight check DAG"},o="Preflight Check DAG",s={unversionedId:"integrations/airflow/preflight-check-dag",id:"integrations/airflow/preflight-check-dag",title:"Preflight check DAG",description:"Purpose",source:"@site/docs/integrations/airflow/preflight-check-dag.md",sourceDirName:"integrations/airflow",slug:"/integrations/airflow/preflight-check-dag",permalink:"/docs/integrations/airflow/preflight-check-dag",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/integrations/airflow/preflight-check-dag.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Preflight check DAG"},sidebar:"tutorialSidebar",previous:{title:"Supported Airflow versions",permalink:"/docs/integrations/airflow/older"},next:{title:"Exposing Lineage in Airflow Operators",permalink:"/docs/integrations/airflow/default-extractors"}},l={},p=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration Variables",id:"configuration-variables",level:2},{value:"Implementation",id:"implementation",level:2},{value:"DAG Tasks",id:"dag-tasks",level:3},{value:"Setup and Execution",id:"setup-and-execution",level:3},{value:"Preflight check DAG code",id:"preflight-check-dag-code",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function d(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"preflight-check-dag"},"Preflight Check DAG"),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"The preflight check DAG is created to verify the setup of OpenLineage within an Airflow environment. It checks the Airflow version, the version of the installed OpenLineage package, and the configuration settings read by the OpenLineage listener. This validation is crucial because, after setting up OpenLineage with Airflow and configuring necessary environment variables, users need confirmation that the setup is correctly done to start receiving OL events."),(0,r.kt)("h2",{id:"configuration-variables"},"Configuration Variables"),(0,r.kt)("p",null,"The DAG introduces two configurable variables that users can set according to their requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BYPASS_LATEST_VERSION_CHECK"),": Set this to ",(0,r.kt)("inlineCode",{parentName:"li"},"True")," to skip checking for the latest version of the OpenLineage package. This is useful when accessing the PyPI URL is not possible or if users prefer not to upgrade."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LINEAGE_BACKEND"),": This variable specifies the backend used for OpenLineage events ingestion. By default, it is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"MARQUEZ"),". Users utilizing a custom backend for OpenLineage should implement custom checks within the ",(0,r.kt)("inlineCode",{parentName:"li"},"_verify_custom_backend")," function.")),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"The DAG comprises several key functions, each designed to perform specific validations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Version Checks"),": It validates the installed OpenLineage package against the latest available version on PyPI, considering the ",(0,r.kt)("inlineCode",{parentName:"li"},"BYPASS_LATEST_VERSION_CHECK")," flag."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Airflow Version Compatibility"),": Ensures that the Airflow version is compatible with OpenLineage. OpenLineage requires Airflow version 2.1 or newer."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Transport and Configuration Validation"),": Checks if necessary transport settings and configurations are set for OpenLineage to communicate with the specified backend."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Backend Connectivity"),": Verifies the connection to the specified ",(0,r.kt)("inlineCode",{parentName:"li"},"LINEAGE_BACKEND")," to ensure that OpenLineage can successfully send events."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Listener Accessibility and OpenLineage Plugin Checks"),": Ensures that the OpenLineage listener is accessible and that OpenLineage is not disabled (by ",(0,r.kt)("a",{parentName:"li",href:"https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/guides/user.html#:~:text=OPENLINEAGE_DISABLED%20is%20an%20equivalent%20of%20AIRFLOW__OPENLINEAGE__DISABLED."},"environment variable")," or ",(0,r.kt)("a",{parentName:"li",href:"https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/guides/user.html#disable"},"config"),").")),(0,r.kt)("h3",{id:"dag-tasks"},"DAG Tasks"),(0,r.kt)("p",null,"The DAG defines three main tasks that sequentially execute the above validations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"validate_ol_installation"),": Confirms that the OpenLineage installation is correct and up-to-date."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"is_ol_accessible_and_enabled"),": Checks if OpenLineage is accessible and enabled within Airflow."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"validate_connection"),": Verifies the connection to the specified lineage backend.")),(0,r.kt)("h3",{id:"setup-and-execution"},"Setup and Execution"),(0,r.kt)("p",null,"To use this DAG:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ensure that OpenLineage is installed within your Airflow environment."),(0,r.kt)("li",{parentName:"ol"},"Set the necessary environment variables for OpenLineage, such as the namespace and the URL or transport mechanism using ",(0,r.kt)("a",{parentName:"li",href:"https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/guides/user.html"},"provider package docs")," or ",(0,r.kt)("a",{parentName:"li",href:"https://openlineage.io/docs/integrations/airflow/usage"},"OL docs"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure the ",(0,r.kt)("inlineCode",{parentName:"li"},"BYPASS_LATEST_VERSION_CHECK")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"LINEAGE_BACKEND")," variables as needed."),(0,r.kt)("li",{parentName:"ol"},"Add the DAG file to your Airflow DAGs folder."),(0,r.kt)("li",{parentName:"ol"},"Trigger the DAG manually or just enable it and allow it to run once automatically based on its schedule (@once) to perform the preflight checks.")),(0,r.kt)("h2",{id:"preflight-check-dag-code"},"Preflight check DAG code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from __future__ import annotations\n\nimport logging\nimport os\nimport attr\n\nfrom packaging.version import Version\n\nfrom airflow import DAG\nfrom airflow.configuration import conf\nfrom airflow import __version__ as airflow_version\nfrom airflow.operators.python import PythonOperator\nfrom airflow.utils.dates import days_ago\n\n# Set this to True to bypass the latest version check for OpenLineage package.\n# Version check will be skipped if unable to access PyPI URL\nBYPASS_LATEST_VERSION_CHECK = False\n# Update this to `CUSTOM` if using any other backend for OpenLineage events ingestion\n# When using custom transport - implement custom checks in _verify_custom_backend function\nLINEAGE_BACKEND = "MARQUEZ"\n\nlog = logging.getLogger(__name__)\n\n\ndef _get_latest_package_version(library_name: str) -> Version | None:\n    try:\n        import requests\n\n        response = requests.get(f"https://pypi.org/pypi/{library_name}/json")\n        response.raise_for_status()\n        version_string = response.json()["info"]["version"]\n        return Version(version_string)\n    except Exception as e:\n        log.error(f"Failed to fetch latest version for `{library_name}` from PyPI: {e}")\n        return None\n\n\ndef _get_installed_package_version(library_name) -> Version | None:\n    try:\n        from importlib.metadata import version\n\n        return Version(version(library_name))\n    except Exception as e:\n        raise ModuleNotFoundError(f"`{library_name}` is not installed") from e\n\n\ndef _provider_can_be_used() -> bool:\n    parsed_version = Version(airflow_version)\n    if parsed_version < Version("2.1"):\n        raise RuntimeError("OpenLineage is not supported in Airflow versions <2.1")\n    elif parsed_version >= Version("2.7"):\n        return True\n    return False\n\n\ndef validate_ol_installation() -> None:\n    library_name = "openlineage-airflow"\n    if _provider_can_be_used():\n        library_name = "apache-airflow-providers-openlineage"\n\n    library_version = _get_installed_package_version(library_name)\n    if BYPASS_LATEST_VERSION_CHECK:\n        log.info(f"Bypassing the latest version check for `{library_name}`")\n        return\n\n    latest_version = _get_latest_package_version(library_name)\n    if latest_version is None:\n        log.warning(f"Failed to fetch the latest version for `{library_name}`. Skipping version check.")\n        return\n\n    if library_version < latest_version:\n        raise ValueError(\n            f"`{library_name}` is out of date. "\n            f"Installed version: `{library_version}`, "\n            f"Required version: `{latest_version}`"\n            f"Please upgrade the package using `pip install --upgrade {library_name}` or set BYPASS_LATEST_VERSION_CHECK to True"\n        )\n\n\ndef _is_transport_set() -> None:\n    transport = conf.get("openlineage", "transport", fallback="")\n    if transport:\n        raise ValueError(\n            "Transport value found: `%s`\\n"\n            "Please check the format at "\n            "https://openlineage.io/docs/client/python/#built-in-transport-types",\n            transport,\n        )\n    log.info("Airflow OL transport is not set.")\n    return\n\n\ndef _is_config_set(provider: bool = True) -> None:\n    if provider:\n        config_path = conf.get("openlineage", "config_path", fallback="")\n    else:\n        config_path = os.getenv("OPENLINEAGE_CONFIG", "")\n\n    if config_path and not _check_openlineage_yml(config_path):\n        raise ValueError(\n            "Config file is empty or does not exist: `%s`",\n            config_path,\n        )\n\n    log.info("OL config is not set.")\n    return\n\n\ndef _check_openlineage_yml(file_path) -> bool:\n    file_path = os.path.expanduser(file_path)\n    if os.path.exists(file_path):\n        with open(file_path, "r") as file:\n            content = file.read()\n        if not content:\n            raise ValueError(f"Empty file: `{file_path}`")\n        raise ValueError(\n                f"File found at `{file_path}` with the following content: `{content}`. "\n                "Make sure there the configuration is correct."\n            )\n    log.info("File not found: `%s`", file_path)\n    return False\n\n\ndef _check_http_env_vars() -> None:\n    from urllib.parse import urljoin\n\n    final_url = urljoin(os.getenv("OPENLINEAGE_URL", ""), os.getenv("OPENLINEAGE_ENDPOINT", ""))\n    if final_url:\n        raise ValueError("OPENLINEAGE_URL and OPENLINEAGE_ENDPOINT are set to: %s", final_url)\n    log.info(\n        "OPENLINEAGE_URL and OPENLINEAGE_ENDPOINT are not set. "\n        "Please set up OpenLineage using documentation at "\n        "https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/guides/user.html"\n    )\n    return\n\n\ndef _debug_missing_transport():\n    if _provider_can_be_used():\n        _is_config_set(provider=True)\n        _is_transport_set()\n    _is_config_set(provider=False)\n    _check_openlineage_yml("openlineage.yml")\n    _check_openlineage_yml("~/.openlineage/openlineage.yml")\n    _check_http_env_vars()\n    raise ValueError("OpenLineage is missing configuration, please refer to the OL setup docs.")\n\n\ndef _is_listener_accessible():\n    if _provider_can_be_used():\n        try:\n            from airflow.providers.openlineage.plugins.openlineage import OpenLineageProviderPlugin as plugin\n        except ImportError as e:\n            raise ValueError("OpenLineage provider is not accessible") from e\n    else:\n        try:\n            from openlineage.airflow.plugin import OpenLineagePlugin as plugin\n        except ImportError as e:\n            raise ValueError("OpenLineage is not accessible") from e\n\n    if len(plugin.listeners) == 1:\n        return True\n\n    return False\n\n\ndef _is_ol_disabled():\n    if _provider_can_be_used():\n        try:\n            # apache-airflow-providers-openlineage >= 1.7.0\n            from airflow.providers.openlineage.conf import is_disabled\n        except ImportError:\n            # apache-airflow-providers-openlineage < 1.7.0\n            from airflow.providers.openlineage.plugins.openlineage import _is_disabled as is_disabled\n    else:\n        from openlineage.airflow.plugin import _is_disabled as is_disabled\n\n    if is_disabled():\n        if _provider_can_be_used() and conf.getboolean("openlineage", "disabled", fallback=False):\n            raise ValueError("OpenLineage is disabled in airflow.cfg: openlineage.disabled")\n        elif os.getenv("OPENLINEAGE_DISABLED", "false").lower() == "true":\n            raise ValueError(\n                "OpenLineage is disabled due to the environment variable OPENLINEAGE_DISABLED"\n            )\n        raise ValueError(\n            "OpenLineage is disabled because required config/env variables are not set. "\n            "Please refer to "\n            "https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/guides/user.html"\n        )\n    return False\n\n\ndef _get_transport():\n    if _provider_can_be_used():\n        from airflow.providers.openlineage.plugins.openlineage import OpenLineageProviderPlugin\n        transport = OpenLineageProviderPlugin().listeners[0].adapter.get_or_create_openlineage_client().transport\n    else:\n        from openlineage.airflow.plugin import OpenLineagePlugin\n        transport = (\n            OpenLineagePlugin.listeners[0].adapter.get_or_create_openlineage_client().transport\n        )\n    return transport\n\ndef is_ol_accessible_and_enabled():\n    if not _is_listener_accessible():\n        _is_ol_disabled()\n\n    try:\n        transport = _get_transport()\n    except Exception as e:\n        raise ValueError("There was an error when trying to build transport.") from e\n\n    if transport is None or transport.kind in ("noop", "console"):\n        _debug_missing_transport()\n\n\ndef validate_connection():\n    transport = _get_transport()\n    config = attr.asdict(transport.config)\n    verify_backend(LINEAGE_BACKEND, config)\n\n\ndef verify_backend(backend_type: str, config: dict):\n    backend_type = backend_type.lower()\n    if backend_type == "marquez":\n        return _verify_marquez_http_backend(config)\n    elif backend_type == "atlan":\n        return _verify_atlan_http_backend(config)\n    elif backend_type == "custom":\n        return _verify_custom_backend(config)\n    raise ValueError(f"Unsupported backend type: {backend_type}")\n\n\ndef _verify_marquez_http_backend(config):\n    log.info("Checking Marquez setup")\n    ol_url = config["url"]\n    ol_endpoint = config["endpoint"]  # "api/v1/lineage"\n    marquez_prefix_path = ol_endpoint[: ol_endpoint.rfind("/") + 1]  # "api/v1/"\n    list_namespace_url = ol_url + "/" + marquez_prefix_path + "namespaces"\n    import requests\n\n    try:\n        response = requests.get(list_namespace_url)\n        response.raise_for_status()\n    except Exception as e:\n        raise ConnectionError(f"Failed to connect to Marquez at `{list_namespace_url}`") from e\n    log.info("Airflow is able to access the URL")\n\n\ndef _verify_atlan_http_backend(config):\n    raise NotImplementedError("This feature is not implemented yet")\n\n\ndef _verify_custom_backend(config):\n    raise NotImplementedError("This feature is not implemented yet")\n\n\nwith DAG(\n    dag_id="openlineage_preflight_check_dag",\n    start_date=days_ago(1),\n    description="A DAG to check OpenLineage setup and configurations",\n    schedule_interval="@once",\n) as dag:\n    validate_ol_installation_task = PythonOperator(\n        task_id="validate_ol_installation",\n        python_callable=validate_ol_installation,\n    )\n\n    is_ol_accessible_and_enabled_task = PythonOperator(\n        task_id="is_ol_accessible_and_enabled",\n        python_callable=is_ol_accessible_and_enabled,\n    )\n\n    validate_connection_task = PythonOperator(\n        task_id="validate_connection",\n        python_callable=validate_connection,\n    )\n\n    validate_ol_installation_task >> is_ol_accessible_and_enabled_task\n    is_ol_accessible_and_enabled_task >> validate_connection_task\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The OpenLineage Preflight Check DAG serves as a vital tool for ensuring that the OpenLineage setup within Airflow is correct and fully operational. By following the instructions and configurations documented here, users can confidently verify their setup and start utilizing OpenLineage for monitoring and managing data lineage within their Airflow workflows."))}d.isMDXComponent=!0}}]);