
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
		{ x: 1, y: 5.3, z: 1, c: 0.89, l: "Worldwide", name: "Obama",color:"#00cd00",label: "01/2007" },
		{ x: 2, y: 7.5, z: 2, c: 0.88, l: "Worldwide", name: "Obama",color:"#00cd00",label: "03/2007" },
		{ x: 3, y: 7.2, z: 1, c: 0.91, l: "Worldwide", name: "Obama",color:"#00cd00",label: "05/2007" },
		{ x: 4, y: 7.8, z: 1, c: 0.89, l: "Worldwide", name: "Obama",color:"#00cd00",label: "07/2007" },
		{ x: 5, y: 6.7, z: 1, c: 0.82, l: "Worldwide", name: "Obama",color:"#00cd00",label: "09/2007" },
		{ x: 6, y: 6.4, z: 1, c: 0.87, l: "Worldwide", name: "Obama",color:"#00cd00",label: "11/2007" },
		{ x: 7, y: 5.6, z: 6, c: 0.91, l: "Worldwide", name: "Obama",color:"#00cd00",label: "01/2008" },
		{ x: 8, y: 4.1, z: 9, c: 0.9, l: "Worldwide", name: "Obama",color:"#00cd00",label: "03/2008" },
		{ x: 9, y: 3.7, z: 7, c: 0.93, l: "Worldwide", name: "Obama",color:"#00cd00",label: "05/2008" },
		{ x: 10, y: 4.2, z: 10, c: 0.87, l: "Worldwide", name: "Obama",color:"#00cd00",label: "07/2008" },
		{ x: 11, y: 6.5, z: 18, c: 0.86, l: "Worldwide", name: "Obama",color:"#00cd00",label: "09/2008" },
		{ x: 12, y: 8.1, z: 100, c: 0.88, l: "Worldwide", name: "Obama",color:"#00cd00",label: "11/2008" }
	];
	
	var scenario_advanced_search_location = [
		{ x: 1, y: 6.9, z: 7, c: 0.88, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "04/2018" },
		{ x: 2, y: 7.6, z: 10, c: 0.81, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "05/2018" },
		{ x: 3, y: 7.9, z: 14, c: 0.79, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "06/2018" },
		{ x: 4, y: 7.3, z: 19, c: 0.85, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "07/2018" },
		{ x: 5, y: 7.3, z: 19, c: 0.79, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "08/2018" },
		{ x: 6, y: 6.9, z: 23, c: 0.91, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "09/2018" },
		{ x: 7, y: 7.6, z: 28, c: 0.81, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "10/2018" },
		{ x: 8, y: 8.1, z: 42, c: 0.88, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "11/2018" },
		{ x: 9, y: 7.2, z: 55, c: 0.90, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "12/2018" },
		{ x: 10, y: 7.4, z: 100, c: 0.87, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "01/2019" },
		{ x: 11, y: 7.6, z: 46, c: 0.78, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "02/2019" },
		{ x: 12, y: 7.7, z: 38, c: 0.91, l: "United Kingdom", name: "Brexit",color:"#00cd00",label: "03/2019" }
	];
	
	var scenario_advanced_search_sources = [
	/** the movie aired on October 24, 2018
		{ x: 1, y: 4.1, z: 7, c: 4, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "04/2018" },
		{ x: 2, y: 4.9, z: 4, c: 5, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "05/2018" },
		{ x: 3, y: 5.4, z: 4, c: 8, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "06/2018" },
		{ x: 4, y: 9, z: 4, c: 5, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "07/2018" },
		{ x: 5, y: 9, z: 4, c: 9, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "08/2018" }, 
		{ x: 6, y: 9, z: 0, c: 1.00, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "09/2018" },
	*/
		{ x: 7, y: 8.4, z: 9614, c: 1.00, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "10/2018" },
		{ x: 8, y: 8.4, z: 80132, c: 1.00, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "11/2018" },
		{ x: 9, y: 8.4, z: 128933, c: 1.00, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "12/2018" },
		{ x: 10, y: 8.3, z: 167100, c: 1.00, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "01/2019" },
		{ x: 11, y: 8.2, z: 218150, c: 1.00, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "02/2019" },
		{ x: 12, y: 8.1, z: 285685, c: 1.00, l: "Worldwide", name: "Bohemian Rhapsody",color:"#00cd00",label: "03/2019" }
	];
	
	var scenario_advanced_search_combination = [
		{ x: 1, y: 6.5, z: 2, c: 0.15, l: "France", name: "Charlie Hebdo",color:"#00cd00",label: "01/2012" },
		{ x: 2, y: 6.7, z: 1, c: 0.24, l: "France", name: "Charlie Hebdo",color:"#00cd00",label: "02/2012" },
		{ x: 3, y: 6.1, z: 1, c: 0.09, l: "France", name: "Charlie Hebdo",color:"#00cd00",label: "03/2012" },
		{ x: 4, y: 6.3, z: 0, c: 0.21, l: "France", name: "Charlie Hebdo",color:"#00cd00",label: "04/2012" },
		{ x: 5, y: 6.2, z: 2, c: 0.12, l: "France", name: "Charlie Hebdo",color:"#00cd00",label: "05/2012" },
		{ x: 6, y: 6.3, z: 1, c: 0.07, l: "France", name: "Charlie Hebdo",color:"#00cd00",label: "06/2012" },
		{ x: 7, y: 6.3, z: 1, c: 0.07, l: "France", name: "Charlie Hebdo",color:"#00cd00",label: "07/2012" },
		{ x: 8, y: 7.7, z: 0, c: 0.11, l: "France", name: "Charlie Hebdo",color:"#00cd00",label: "08/2012" },
		{ x: 9, y: 1.3, z: 100, c: 0.98, l: "France", name: "Charlie Hebdo",color:"#00cd00",label: "09/2012" },
		{ x: 10, y: 1.9, z: 2, c: 0.91, l: "France", name: "Charlie Hebdo",color:"#00cd00",label: "10/2012" },
		{ x: 11, y: 2.4, z: 2, c: 0.85, l: "France", name: "Charlie Hebdo",color:"#00cd00",label: "11/2012" },
		{ x: 12, y: 3.5, z: 2, c: 0.79, l: "France", name: "Charlie Hebdo",color:"#00cd00",label: "12/2012" }
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
			zValueFormatString: "#0",
			toolTipContent: "<b>{name}</b><br/>Location: {l} <br/>Confidence Level: {c}<br/> Average Sentiment value: {y}<br/> Population: {z}",
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

		if($('#keyword').val().toLowerCase().trim() === 'university of edinburgh')
		{
			initConfidenceColor(scenario_simple_search);
			initConfidenceColor(scenario_advanced_search_location);
			initConfidenceColor(scenario_advanced_search_sources);
			initConfidenceColor(scenario_advanced_search_combination);
			initConfidenceColor(scenario_advanced_search_date);

			displayGraphSection(options);
			options.data[0].dataPoints = scenario_simple_search;
			$("#chartContainer").CanvasJSChart(options);	
			resetInputs();		
		}
		else
		{
			showNotification();
		}
		
	});

	$("#advanced-search").click(function () {
		
		initConfidenceColor(scenario_simple_search);
		initConfidenceColor(scenario_advanced_search_location);
		initConfidenceColor(scenario_advanced_search_sources);
		initConfidenceColor(scenario_advanced_search_combination);
		initConfidenceColor(scenario_advanced_search_date);	
		
		if( !$('#twitter').is(":checked") &&  !$('#imdb').is(":checked") && !$('#trends').is(":checked"))
		{
			alert("Please select data source!");
			return;
		}

		if(
			($('#advanced-keyword').val().toLowerCase().trim() === 'brexit')
			&& ($('#location').val().toLowerCase().trim() === 'united kingdom')
			&& $('#twitter').is(":checked"))
		{
			
			displayGraphSection(options);
			options.data[0].dataPoints = scenario_advanced_search_location;
			$("#chartContainer").CanvasJSChart(options);	
			resetInputs();
		}
		else if(
				$('#advanced-keyword').val().toLowerCase().trim() === 'bohemian rhapsody'
				&& 
				$('#imdb').is(":checked"))
		{
			displayGraphSection(options);
			options.data[0].dataPoints =scenario_advanced_search_sources;
			$("#chartContainer").CanvasJSChart(options);	
			resetInputs();

		}
		else if(			
				$('#advanced-keyword').val().toLowerCase().trim() === 'charlie hebdo'
				&& 
				$('#location').val().toLowerCase().trim() === 'france'
				&&
				$("#datetimepicker1").find("input").val() === '01/01/2012'
				&&
				$("#datetimepicker2").find("input").val() === '31/12/2012'
				&& 
				$('#twitter').is(":checked")
				)
		{
			displayGraphSection(options);
			options.data[0].dataPoints =scenario_advanced_search_combination;
			$("#chartContainer").CanvasJSChart(options);	
			resetInputs();

		}
		else if(
			$('#advanced-keyword').val().toLowerCase().trim() === 'obama'
			&& 
			$("#datetimepicker1").find("input").val() === '01/01/2007'
			&&
			$("#datetimepicker2").find("input").val() === '31/12/2008'			
			&& 
			$('#twitter').is(":checked")
			)
			
		{
			displayGraphSection(options);
			options.data[0].dataPoints =scenario_advanced_search_date;
			$("#chartContainer").CanvasJSChart(options);	
			resetInputs();
		}
		else
		{
			showNotification();
		}

		
	});

}

function resetInputs()
{
	$('#advanced-keyword').val('');
	$("#datetimepicker1").find("input").val('');
	$("#datetimepicker2").find("input").val('');
	$('#location').val('');
	$('#keyword').val('');
	
}

function initConfidenceColor(array)
{
	var colors = ['#D8F1FF','#C5EAFF','#B1E2FF','#9EDBFF','#8AD4FF','#76CDFF','#63C5FF','#4FBEFF','#3CB7FF','#01A1FF']
	var length = array.length;
	var colorIndex=0;
	for(var i=0; i < length; i++)
	{
		if(array[i].c != 1)
		{
			colorIndex =parseInt((array[i].c*10), 10);
		}
		else
		{
			colorIndex = 9;
		}
		array[i].color = colors[colorIndex];
	}
}

function displayGraphSection(options)
{
	if($('#graphRow').hasClass("row hidden"))
	{
		$('#graphRow').removeClass("row hidden").addClass("row");	
		$("#chartContainer").CanvasJSChart(options);
	}
	
	$('#explanation_text').removeClass("hidden").addClass("explanation row row-m-t");

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
