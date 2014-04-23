
//when someone clicks the buy now button we pretend that they 
//completed their payment and then the new customer review alert box shows


// function = opennewreview function(e){
// 	e.preventDefault();

// 	var $contentDiv = $("." + $(this).attr("rel"));

// 	console.log($contentDiv);

// 	if($contentDiv.hasClass("show")) {
//         return;
//       } else {

// 	$contentDiv.siblings().removeClass("show");
// 	$contentDiv.addClass("show");
// 	$gallerynav.addClass("hide");
//       }
// });

$(".complete-purchase").click(function(e){
		e.preventDefault;
	$(".customer-review").removeClass("hide");
});


// _.each([1, 2, 3], alert);
// => alerts each number in turn...
// _.each({one: 1, two: 2, three: 3}, alert);
// => alerts each number value in turn...

