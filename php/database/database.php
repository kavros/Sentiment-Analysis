<?php
function connectToDatabase() 
{

}

function initialize()
{
	connectToDatabase();
}

function getDataFromDataSource()
{
	if (searchQuery.dataSource == "Twitter")
	{
		data = callTwitterApi(searchQuery)  // see queryTwitterWS.php
	}
	else if (searchQuery.dataSource == "Trends")
	{
		data = callTrendsApi(searchQuery)   // see queryGoogleTrendsApi.php
	}
	else if (searchQuery.dataSource == "Imdb")
	{
		data = callOmdbApi(searchQuery)     // see queryOMDbWS.php
	}
	else
	{
		data = handleCombinatioOfDataSources(searchQuery);
	}	
	
}


function getGraphData(string searchQuery)
{
	initialize();
	dataSourceData = getDataFromDataSource();
	store(dataSourceData);
	finalGraphData = runSentimentAnalysis(dataSourceData);
	return finalGraphData;
}





?>
