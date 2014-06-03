$(document).ready(function(){

});

$('.complete-purchase').click(function(event){
	event.preventDefault();
	$(".customer-review").removeClass("hide");
});

$('.submitReview').click(function(event){
	event.preventDefault();
	// console.log('heard you try to submit that review');
	
	var newcomment = $('.commentpart').val();
	// console.log(newcomment);
	var newname = $('.namepart').val();
	// console.log(newname);

	var readyreview = '<li>' + newcomment + ' - ' + newname + '</li>';
	// console.log(readyreview);

	$('.past-reviews').append(readyreview);

});
