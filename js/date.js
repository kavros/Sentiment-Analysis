$(function() {
  $('#datetimepicker1').datetimepicker(
  	{
  		format: 'DD/MM/YYYY'	
  	});
});
$(function() {
  $('#datetimepicker2').datetimepicker(
  	{
  		format: 'DD/MM/YYYY'
  	});
});
$(function() {

	$('#resize').click(function(){
      $('#axis1').removeClass("axis1 col-md-1 col-xs-1");	
      $('#axis2').removeClass("axis2 col-md-1 col-xs-1");
	  console.log("Hello world!"); 
	   $('#mainGraph').removeClass("col-md-10 col-xs-10").addClass("col-md-12 col-xs-12");
	});
});
