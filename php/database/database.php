<?php

/**
* We use this function to initialize the connection to the database.
**/
function connectToDatabase() 
{

}

/**
* We use this function to retrieve data from our data sources
* (Twitter,Google Trendsa and IMDb).
**/
function getDataFromDataSource(searchQuery)
{
	if (searchQuery.dataSource == "Twitter")
	{
		data = callTwitterApi(searchQuery)  // see php/dataSources/queryTwitterWS.php
	}
	else if (searchQuery.dataSource == "Trends")
	{
		data = callTrendsApi(searchQuery)   // see php/dataSources/queryGoogleTrendsApi.php
	}
	else if (searchQuery.dataSource == "Imdb")
	{
		data = callOmdbApi(searchQuery)     // see php/dataSources/queryOMDbWS.php
	}
	else
	{
		data = handleCombinatioOfDataSources(searchQuery);
	}	
	
}

/**
* The front-end calls this function in order to retrieve the 
*  sentiment analysis results for the search query and render the bubble chart.
**/
function getGraphData(string searchQuery)
{
	connectToDatabase();
	dataSourceData = getDataFromDataSource(searchQuery);
	store(dataSourceData);
	finalGraphData = runSentimentAnalysis(dataSourceData);	// see js/analysis/dataProcessing.js
	return finalGraphData;
}





?>
