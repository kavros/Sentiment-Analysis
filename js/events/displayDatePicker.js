
/** 
* Displays a popup with date picker for start date and end date
* when the user clicks on the calendar icon or inside the input fields.
**/
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
  $('#startDateInput').datetimepicker(
  	{
  		format: 'DD/MM/YYYY'
  	});
});
$(function() {
  $('#endDateInput').datetimepicker(
  	{
  		format: 'DD/MM/YYYY'
  	});
});
