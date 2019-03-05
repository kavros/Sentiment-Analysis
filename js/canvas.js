
window.onload = function() {

	var scenario_simple_search = [
		{ x: 1, y: 6.1, z: 75, c: 0.91, l: "Worldwide", name: "University of Edinburgh",color:"#00cd00",label: "04/2018" },
		{ x: 2, y: 5.9, z: 72, c: 0.86, l: "Worldwide", name: "University of Edinburgh",color:"#00cd00",label: "05/2018" },
		{ x: 3, y: 7.9, z: 55, c: 0.86, l: "Worldwide", name: "University of Edinburgh",color:"#00cd00",label: "06/2018" },
		{ x: 4, y: 8.0, z: 61, c: 0.88, l: "Worldwide", name: "University of Edinburgh",color:"#00cd00",label: "07/2018" },
		{ x: 5, y: 8.0, z: 68, c: 0.89, l: "Worldwide", name: "University of Edinburgh",color:"#00cd00",label: "08/2018" },
		{ x: 6, y: 8.2, z: 84, c: 0.79, l: "Worldwide", name: "University of Edinburgh",color:"#00cd00",label: "09/2018" },
		{ x: 7, y: 8.3, z: 81, c: 0.84, l: "Worldwide", name: "University of Edinburgh",color:"#00cd00",label: "10/2018" },
		{ x: 8, y: 8.0, z: 72, c: 0.9, l: "Worldwide", name: "University of Edinburgh",color:"#00cd00",label: "11/2018" },
		{ x: 9, y: 7.7, z: 49, c: 0.87, l: "Worldwide", name: "University of Edinburgh",color:"#00cd00",label: "12/2018" },
		{ x: 10, y: 7.5, z: 72, c: 0.88, l: "Worldwide", name: "University of Edinburgh",color:"#00cd00",label: "01/2019" },
		{ x: 11, y: 6.7, z: 68, c: 0.79, l: "Worldwide", name: "University of Edinburgh",color:"#00cd00",label: "02/2019" },
		{ x: 12, y: 6.6, z: 62, c: 0.83, l: "Worldwide", name: "University of Edinburgh",color:"#00cd00",label: "03/2019" }
	];
	
	var scenario_advanced_search_date = [
		{ x: 1, y: 4.1, z: 7, c: 0, l: "Worldwide", name: "Obama",color:"#00cd00",label: "01/2007" },
		{ x: 2, y: 4.9, z: 4, c: 0, l: "Worldwide", name: "Obama",color:"#00cd00",label: "03/2007" },
		{ x: 3, y: 5.4, z: 4, c: 0, l: "Worldwide", name: "Obama",color:"#00cd00",label: "05/2007" },
		{ x: 4, y: 9, z: 4, c: 0, l: "Worldwide", name: "Obama",color:"#00cd00",label: "07/2007" },
		{ x: 5, y: 9, z: 4, c: 0, l: "Worldwide", name: "Obama",color:"#00cd00",label: "09/2007" },
		{ x: 6, y: 9, z: 4, c: 0, l: "Worldwide", name: "Obama",color:"#00cd00",label: "11/2007" },
		{ x: 7, y: 9, z: 4, c: 0, l: "Worldwide", name: "Obama",color:"#00cd00",label: "01/2008" },
		{ x: 8, y: 9, z: 4, c: 0, l: "Worldwide", name: "Obama",color:"#00cd00",label: "03/2008" },
		{ x: 9, y: 9, z: 4, c: 0, l: "Worldwide", name: "Obama",color:"#00cd00",label: "05/2008" },
		{ x: 10, y: 9, z: 4, c: 0, l: "Worldwide", name: "Obama",color:"#00cd00",label: "07/2008" },
		{ x: 11, y: 9.1, z: 7, c: 0, l: "Worldwide", name: "Obama",color:"#00cd00",label: "09/2008" },
		{ x: 12, y: 9, z: 4, c: 0, l: "Worldwide", name: "Obama",color:"#00cd00",label: "11/2008" }
	];
	
	var scenario_advanced_search_location = [
		{ x: 1, y: 4.1, z: 7, c: 0, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "04/2018" },
		{ x: 2, y: 4.9, z: 4, c: 0, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "05/2018" },
		{ x: 3, y: 5.4, z: 4, c: 0, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "06/2018" },
		{ x: 4, y: 9, z: 4, c: 0, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "07/2018" },
		{ x: 5, y: 9, z: 4, c: 0, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "08/2018" },
		{ x: 6, y: 9, z: 4, c: 0, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "09/2018" },
		{ x: 7, y: 9, z: 4, c: 0, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "10/2018" },
		{ x: 8, y: 9, z: 4, c: 0, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "11/2018" },
		{ x: 9, y: 9, z: 4, c: 0, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "12/2018" },
		{ x: 10, y: 9, z: 4, c: 0, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "01/2019" },
		{ x: 11, y: 9.1, z: 7, c: 0, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "02/2019" },
		{ x: 12, y: 9, z: 4, c: 0, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "03/2019" }
	];
	
	var scenario_advanced_search_sources = [
		{ x: 1, y: 4.1, z: 7, c: 0, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "04/2018" },
		{ x: 2, y: 4.9, z: 4, c: 0, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "05/2018" },
		{ x: 3, y: 5.4, z: 4, c: 0, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "06/2018" },
		{ x: 4, y: 9, z: 4, c: 0, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "07/2018" },
		{ x: 5, y: 9, z: 4, c: 0, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "08/2018" },
		{ x: 6, y: 9, z: 4, c: 0, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "09/2018" },
		{ x: 7, y: 9, z: 4, c: 0, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "10/2018" },
		{ x: 8, y: 9, z: 4, c: 0, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "11/2018" },
		{ x: 9, y: 9, z: 4, c: 0, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "12/2018" },
		{ x: 10, y: 9, z: 4, c: 0, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "01/2019" },
		{ x: 11, y: 9.1, z: 7, c: 0, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "02/2019" },
		{ x: 12, y: 9, z: 4, c: 0, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "03/2019" }
	];
	
	var scenario_advanced_search_combination = [
		{ x: 1, y: 4.1, z: 7, c: 0, l: "Paris, France", name: "Charlie Hebdo",color:"#00cd00",label: "01/2012" },
		{ x: 2, y: 4.9, z: 4, c: 0, l: "Paris, France", name: "Charlie Hebdo",color:"#00cd00",label: "02/2012" },
		{ x: 3, y: 5.4, z: 4, c: 0, l: "Paris, France", name: "Charlie Hebdo",color:"#00cd00",label: "03/2012" },
		{ x: 4, y: 9, z: 4, c: 0, l: "Paris, France", name: "Charlie Hebdo",color:"#00cd00",label: "04/2012" },
		{ x: 5, y: 9, z: 4, c: 0, l: "Paris, France", name: "Charlie Hebdo",color:"#00cd00",label: "05/2012" },
		{ x: 6, y: 9, z: 4, c: 0, l: "Paris, France", name: "Charlie Hebdo",color:"#00cd00",label: "06/2012" },
		{ x: 7, y: 9, z: 4, c: 0, l: "Paris, France", name: "Charlie Hebdo",color:"#00cd00",label: "07/2012" },
		{ x: 8, y: 9, z: 4, c: 0, l: "Paris, France", name: "Charlie Hebdo",color:"#00cd00",label: "08/2012" },
		{ x: 9, y: 9, z: 4, c: 0, l: "Paris, France", name: "Charlie Hebdo",color:"#00cd00",label: "09/2012" },
		{ x: 10, y: 9, z: 4, c: 0, l: "Paris, France", name: "Charlie Hebdo",color:"#00cd00",label: "10/2012" },
		{ x: 11, y: 9.1, z: 7, c: 0, l: "Paris, France", name: "Charlie Hebdo",color:"#00cd00",label: "11/2012" },
		{ x: 12, y: 9, z: 4, c: 0, l: "Paris, France", name: "Charlie Hebdo",color:"#00cd00",label: "12/2012" }
	];
	

	var options =  {
		//backgroundColor: "#DDDDDD",
		animationEnabled: true,
		zoomEnabled: true,
		theme: "light2",
		title: {
			text: ""
		},
		subtitles: [{
			text: "",
			fontSize: 15
		}],
		axisX: {
			title: "Month"
		},
		axisY: {
			title: "Average Sentiment Value"
		},
		data: [{
			type: "bubble",
			xValueFormatString: "#,#0",
			yValueFormatString: "#,#0.0",
			zValueFormatString: "#,#0",
			toolTipContent: "<b>{name}</b><br/>Location: {l} <br/>Confidence Level:{c}<br/> Average Sentiment value: {y}<br/> Population: {z}",
			dataPoints: [
				{ c:2, x: 1, y: 9.1, z: 7,   name: "Bulgaria", color:"#00cd00",label: "01/2018" },
				{ c:2, x: 2, y: 9.1, z: 7,   name: "Bulgaria", color:"#00cd00",label: "02/2018" },
				{ c:2, x: 3, y: -9.2, z: 1,  name: "Romania",  color:"#92A1CF",label: "03/2018" },
				{ c:2, x: 4, y: 9.1, z: 7,   name: "Bulgaria", color:"#00cd00",label: "04/2018" },
				{ c:2, x: 5, y: 15.5, z: 78, name: "Turkey",   color:"#008100 ",label: "05/2018" },
				{ c:2, x: 7, y: 11.2, z: 5,  name: "Norway",   color:"#00cd00",label: "06/2018" },
				{ c:2, x: 6, y: 11.2, z: 5,  name: "Norway",   color:"#00cd00",label: "07/2018" },
				{ c:2, x: 8, y: 4.7, z: 46,  name: "Obama",    color:"#2A52BE",label: "08/2018"},
				{ c:2, x: 9, y: 10.8, z: 11, name: "Belgium",  color:"#00cd00",label: "09/2018" },
				{ c:2, x: 10, y: 8.8, z: 21, name: "Belgium",  color:"#00cd00" ,label: "10/2018"},
				{ c:2, x: 11, y: 8.6, z: 10, name: "Greece",   color:"#00cd00",label: "11/2018" },			
				{ c:2, x: 12, y: 9, z: 4,    name: "Croatia",   color:"#00cd00",label: "12/2018" }
				
			]
		}]
	};

	$("#simple-search").click(function () {

		if($('#keyword').val().toLowerCase() === 'university of edinburgh')
		{
			displayGraphSection(options);
			options.data[0].dataPoints = scenario_simple_search;
			$("#chartContainer").CanvasJSChart(options);			
		}
		else
		{
			showNotification();
		}

		
	});

	$("#advanced-search").click(function () {
	
		if(
			($('#advanced-keyword').val().toLowerCase() === 'brexit')
			&& ($('#location').val().toLowerCase() === 'britain'))
		{
			
			displayGraphSection(options);
			options.data[0].dataPoints = scenario_advanced_search_location;
			$("#chartContainer").CanvasJSChart(options);	
		}
		else if(
				$('#advanced-keyword').val().toLowerCase() === 'bohemian rhapsody'
				&& 
				$('#exampleCheck1').is(":checked"))
		{
			displayGraphSection(options);
			options.data[0].dataPoints =scenario_advanced_search_sources;
			$("#chartContainer").CanvasJSChart(options);	

		}
		else if(			
				$('#advanced-keyword').val().toLowerCase() === 'charlie hebdo'
				&& 
				$('#location').val().toLowerCase() === 'paris, france'
				&&
				$("#datetimepicker1").find("input").val() === '01/01/2012'
				&&
				$("#datetimepicker2").find("input").val() === '31/12/2012')
		{
			displayGraphSection(options);
			options.data[0].dataPoints =scenario_advanced_search_combination;
			$("#chartContainer").CanvasJSChart(options);	

		}
		else if(
			$('#advanced-keyword').val().toLowerCase() === 'barack obama'
			&& 
			$("#datetimepicker1").find("input").val() === '01/10/2007')	
		{
			displayGraphSection(options);
			options.data[0].dataPoints =scenario_advanced_search_date;
			$("#chartContainer").CanvasJSChart(options);	
		}
		else
		{
			showNotification();
		}


	});

}



function displayGraphSection(options)
{
	if($('#graphRow').hasClass("row hidden"))
	{
		$('#graphRow').removeClass("row hidden").addClass("row");	
		$("#chartContainer").CanvasJSChart(options);
	}	
}

function showNotification()
{
	$(".span4").removeClass("hidden");
	$(".alert").removeClass("in").show();
	$(".alert").delay(5000).addClass("in").fadeOut(5000);
}

//adds functionality for hiding and displaying the graph
$(function() {
	$('#resize').click(function()
  	{
  		
  		if($('#axis1').hasClass("axis1 col-md-1 hidden-xs")){
			$('#axis1').removeClass("axis1 col-md-1 hidden-xs");	
			$('#axis2').removeClass("axis2 col-md-1 hidden-xs");
			$('#confidenceImg').remove();
			$('#label0').remove();
			$('#label1').remove();
			$('#label2').remove();
			$('#label3').remove();
			
			$('#happinessImg').remove();
	
			$('#mainGraph').removeClass("col-md-10 col-xs-12").addClass("col-md-12 col-xs-12");
		}else{

			$('#axis1').addClass("axis1 col-md-1 hidden-xs");
			$('#axis1').append('<label id="label0">Happy</label>');
			$('#axis1').append('<img src="images/happinessAxis.png" id="happinessImg">');
			$('#axis1').append('<label id="label1">Unhappy</label>');


			$('#axis2').addClass("axis2 col-md-1 hidden-xs");
			$('#axis2').append('<label id="label2">High confidence</label>');
			$('#axis2').append('<img src="images/confidence.png" id="confidenceImg">')
			$('#axis2').append('<label id="label3">Low confidence</label>');
			$('#mainGraph').removeClass("col-md-12 col-xs-12").addClass("col-md-10 col-xs-12");
		}
	});
});
