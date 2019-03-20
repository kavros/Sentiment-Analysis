/**
* If the user enters a supported search query we use this function to clear the input fields.
*/
function resetInputs()
{
	$('#advanced-keyword').val('');
	$("#datetimepicker1").find("input").val('');
	$("#datetimepicker2").find("input").val('');
	$('#location').val('');
	$('#keyword').val('');
	
}