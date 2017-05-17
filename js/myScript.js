$(document).ready(function() {
	var today_date = new Date();
	var mytoday = today_date.getDate();
	var LastDate = mytoday + 3;
	// we can get this using API
	var leftDays = LastDate - mytoday;
	$("#days").html("Only " + leftDays + " days left");

	/* Total Donors */
	var totalDonors = 42;
	// this static number 42 can be changed through code to get actual value from server. we can call some function to do so.
	$('#totlaDonors').html(totalDonors);

});

// ANIMATE PROGRESS BAR FILL
$(".meter > span").each(function() {
	$(this).data("origWidth", $(this).width()).width(0).animate({
		width : $(this).data("origWidth")
	}, 1200);
});
