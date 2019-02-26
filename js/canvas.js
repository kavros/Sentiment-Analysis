
window.onload = function() {

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
			toolTipContent: "<b>{name}</b><br/>Month: August <br/> Average Sentiment value: {y}<br/> Population: {z}",
			dataPoints: [
				{ x: 1, y: 9.1, z: 7, name: "Bulgaria",color:"#00cd00",label: "01/2018" },
				{ x: 2, y: 9.1, z: 7, name: "Bulgaria",color:"#00cd00",label: "02/2018" },
				{ x: 3, y: -9.2, z: 1, name: "Romania",color:"#92A1CF",label: "03/2018" },
				{ x: 4, y: 9.1, z: 7, name: "Bulgaria",color:"#00cd00",label: "04/2018" },
				{ x: 5, y: 15.5, z: 78, name: "Turkey",color:"#008100 ",label: "05/2018" },
				{ x: 7, y: 11.2, z: 5, name: "Norway",color:"#00cd00",label: "06/2018" },
				{ x: 6, y: 11.2, z: 5, name: "Norway",color:"#00cd00",label: "07/2018" },
				{ x: 8, y: 4.7, z: 46, name: "Obama",color:"#2A52BE",label: "08/2018"},
				{ x: 9, y: 10.8, z: 11, name: "Belgium",color:"#00cd00",label: "09/2018" },
				{ x: 10, y: 8.8, z: 21, name: "Belgium",color:"#00cd00" ,label: "10/2018"},
				{ x: 11, y: 8.6, z: 10, name: "Greece",color:"#00cd00",label: "11/2018" },			
				{ x: 12, y: 9, z: 4, name: "Croatia",color:"#00cd00",label: "12/2018" }
				
			]
		}]
	};
$("#chartContainer").CanvasJSChart(options);
}
