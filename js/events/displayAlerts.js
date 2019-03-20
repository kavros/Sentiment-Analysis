
/**
* Generates a notification to inform the user that the query does not supported from the prototype.
* This function will not used on the final product.
*/
function showNotification()
{
	$(".span4").removeClass("hidden");
	$(".alert").removeClass("in").show();
	$(".alert").delay(5000).addClass("in").fadeOut(5000);
}