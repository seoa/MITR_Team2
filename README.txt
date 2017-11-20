In order to set up the dashboard, follow these steps:

Download Kibana: https://www.elastic.co/downloads/kibana
Download Elasticsearch: https://www.elastic.co/downloads/elasticsearch
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
3.	Place the configuration file in Logstash directory
4.	Open a Command Prompt
5.	Change directory to where Kibana and Elasticsearch is located
6.	Go to the Kibana directory and run Kibana “.\bin\kibana”
7.	Open another Command Prompt and go to the Elasticsearch directory
8.	Run Elasticsearch “.\bin\elasticsearch”
9.	Open another Command Prompt and run the Logstash Configuration file
10.	Access Kibana via port 5601 (by default)
11.	Create the index by specifying the name that was given to Excelastic


Technical Setup: Importing Dashboard and Visualizations
1.	Open Kibana
2.	Select “Management” on  the left menu
3.	Press “Saved Objects”
4.	Press “Import” on the upper right
5.	Locate the export.json file
6.	Import saved objects

