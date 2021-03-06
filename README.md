
## Overview
Sentiment analysis is the automated process of understanding an opinion about a given subject. This repository is **a prototype for a sentiment analysis system** which was developed within software development group coursework. The system supports 5 different queries. The supported queries are based on the usability tests and the inputs are presented in the section named *Inputs for Scenarios* below.

---
### Display Webpage 
Our **prototype supports specific search queries**: If the user enters a search query that the prototype doesn't support, we generate a warning message to inform the user. If you wish to display output from one of the scenarios please enter **University of Edinburgh** in the search query input field. You can find all the supported queries in the section *Inputs for scenarios*.

Please follow the instructions below to access the prototype:
 * Local: Download the repository and open **index.html** using your browser.
 * Web: **[Sentiment-Analysis](http://alexiskavroulakis.com/Sentiment-Analysis/)**


---
### Inputs For Scenarios
| Scenario        | search query           | location  | start date| end date |Check box|
|:-------------:|:-------------|:-----|:-----|:-----|:-----|
| 1 | University of Edinburgh | | | | | |
| 2 |  Obama| | 01/01/2007| 31/12/2008|Twitter |
| 3 | Brexit | United Kingdom| | | Twitter |
| 4 | Bohemian Rhapsody | | | | IMDb |
| 5 |  Charlie Hebdo | France|01/01/2012 |31/12/2012 |Twitter | 

---
### Prototype changes based on users feedback
|Num| Description   | Issue Number|
|:-------------:|:-------------|:-------------:|
|1|show an alert box if the user does not select a data source. |[#14](https://github.com/kavros/Sentiment-Analysis/issues/14) |
|2|opens datepicker popup when the user click in the input field.|[#14](https://github.com/kavros/Sentiment-Analysis/issues/14) |
|3|change icon for mail at footer.|[#14](https://github.com/kavros/Sentiment-Analysis/issues/14) |
|4|rename keyword label to search query label.|[#14](https://github.com/kavros/Sentiment-Analysis/issues/14) |
|5|change code to clean inputs if the user query is correct.|[#14](https://github.com/kavros/Sentiment-Analysis/issues/14) |
|6|changed js code based on scenario changes.|[#11](https://github.com/kavros/Sentiment-Analysis/issues/11) |
|7|changed confidence axis image since using one color seems to be  easier for the user to understand the confidence level. |[#5](https://github.com/kavros/Sentiment-Analysis/issues/5) |
|8|added expanation section and tooltips on both axis in order to help user understand the chart|[#16](https://github.com/kavros/Sentiment-Analysis/issues/16)|
---
### Links for shared documents
* Phase 2:
  * [Google Form for SUS test incl. results (you can request access via this link)](https://docs.google.com/forms/d/e/1FAIpQLSenyvthGA1wdy936HOJ078jLTSKl0hqRDXBQqAN8KxsjVPV3g/viewform)
  * [Spreadsheet for Notes](https://docs.google.com/spreadsheets/d/1NbxiDpBnAFK5i6nSiXF3eeBTan9wrBeycsR6J4SmAK8/edit#gid=0)
  * [Webpage (Prototype)](http://alexiskavroulakis.com/Sentiment-Analysis/)
  * [Intoduction Speech for Scenarios](https://docs.google.com/document/d/1Q_5apw9pUvhXW3SicY4I_Hgv_Nuh_Su67vWB7nNVjR0/edit?usp=sharing)
  * [Slides for scenarios](https://docs.google.com/presentation/d/1K9yt5EzQk232Llxr5TCyLQiv08VM6RHHaRTPINkaktg/edit?usp=sharing)
  * [Report for phase 2](https://www.overleaf.com/3532464358bmcfyfmdfmxk)
* Phase 1:
  * [Report for phase 1](https://www.overleaf.com/4929713254rzkyjvnktgdb)
  * [Requirements Engineering](https://docs.google.com/document/d/1_QbKIdNie3GJXQ5infMYwywUUHN1iwhhs_OY7EZsgTk/edit)
  * [System Design](https://docs.google.com/document/d/1N8sC62DxqVeOEFTCOtHlnEWvM12VgvBTN8HmOk2m9GE/edit?usp=sharing)
  * [Team Structure and Planning Excel - old](https://docs.google.com/spreadsheets/d/1cEJQlFki3ymdUTRwEBbQDcUdAIUed592hiqDsdFRrQ0/edit?usp=sharing)
  * [GANTT chart on TeamGantt](https://prod.teamgantt.com/gantt/schedule/?ids=1465838#&ids=1465838&user=&custom=&company=&hide_completed=false&date_filter=&color_filter=)
  * [Team Structure and Planning Documentation](https://docs.google.com/document/d/1ouhJbn_nc6Yyi8X3EvN3WyT4WNKSTf4paY4keIwIDME/edit?usp=sharing)
  * [Risk Analysis](https://docs.google.com/document/d/11zV_r6II-NUeqCdDrP0cZHHb8t_aZNyOYmYCP7ATwYs/edit#heading=h.ekt7cjy9xwzv)
  * [User Interface Design](https://docs.google.com/document/d/1QDToYyaeqLTdVpkmZtNAWw_MWG5a_u6c2Z9kwnWrwKI/edit?usp=sharing)

---
### Additional readings:
* [Build a social media dashboard using machine learning and BI services](https://aws.amazon.com/de/blogs/machine-learning/build-a-social-media-dashboard-using-machine-learning-and-bi-services/)
* [An app to analyze tweets using Amazon Comprehend's Sentiment Analysis service](https://github.com/dmuth/twitter-aws-comprehend)
