In order to set up the dashboard, follow these steps:

Download Kibana: https://www.elastic.co/downloads/kibana
Download Elasticsearch: https://www.elastic.co/downloads/elasticsearch
Logstash: https://www.elastic.co/downloads/logstash 
Download Excelastic (.jar file): https://github.com/codingchili/parser-excel-elasticsearch/releases

Technical Setup: Excel
1.	Download Kibana and Elasticsearch 
2.	Download Excelastic
3.	Open a Command Prompt
4.	Change directory to where Kibana and Elasticsearch is located
5.	Go to the Kibana directory and run Kibana “.\bin\kibana”
6.	Open another Command Prompt and go to the Elasticsearch directory
7.	Run Elasticsearch “.\bin\elasticsearch”
8.	Open another Command Prompt and locate the Excelastic .jar file
9.	Run Excelastic “java -jar excelastic_jar_file”
10.	Use Excelastic to import the desired excel file into elasticsearch
11.	Access Kibana via port 5601 (by default)
12.	Create the index by specifying the name that was given to Excelastic


Technical Setup: SQL Database
1.	Download Kibana, Elasticsearch, and Logstash
2.	Create the Logstash configuration file as specified in section 9 of this document under subtitle “Backend”
3.	Place the configuration file in Logstash directory bin
4.    Make sure the config file matches the file pathways and credientials for your computer, make sure all correct ports are open
5.    Must download a version of a JDBC driver which will be used in connecting to sql, must put pathway in config file
6.    Must enter sql command to select the data you want to filter out into the elastic search index, must also name index in config file
7.	Open a Command Prompt
8.	Change directory to where Kibana and Elasticsearch is located
9.	Go to the Kibana directory and run Kibana “.\bin\kibana”
10.	Open another Command Prompt and go to the Elasticsearch directory
11.	Run Elasticsearch “.\bin\elasticsearch”
12.	Open another Command Prompt and run the Logstash Configuration file
13.	Access Kibana via port 5601 (by default)
14.   Select the elastic search index in kibana 


Technical Setup: Importing Dashboard and Visualizations
1.	Open Kibana
2.	Select “Management” on  the left menu
3.	Press “Saved Objects”
4.	Press “Import” on the upper right
5.	Locate the exported files
6.	Import saved objects

Custom Plugin: HTML Visualization
1. Locate the main Kibana directory
2. Go to plugins folder
3. Place html_vis folder in plugins
4. Kibana will have to re-cache and optimize in order to register the custom plugin. This process may take several minutes
