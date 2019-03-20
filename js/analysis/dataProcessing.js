
/**
* Returns the sentiment analysis data in a form that the bubble chart accepts.
**/
function runSentimentAnalysis(dataSourceData)
{
	newData=prepareData(dataSourceData)
	return getResultsFromMLAlgorithm(newData);
}	

/**
* Calls ML algorithm which deside about the average sentiment value.
**/
function getResultsFromMLAlgorithm(dataSourceData)
{

}
