
$(".buyNow").click(function(){
	event.preventDefault;
	// var productnprice = Number($(this).val());
	console.log(i);
$(".shopping-cart").append("<p>" + productArray[Product].name + productArray[Product].cost +"</p>");
}


$(".complete-purchase").click(function(){
	event.preventDefault;
	// var productnprice = Number($(this).val());
	console.log(i);
$(".customer-review").addClass("show");
}

function newreview(data) {
	var markup = '';
	var i;
	this.data = data;
	markup += "<li> + reviewdata + authorname + </li>";
}
	return markup;
}

var newreviewmarkup = newreview(data)
$(".new-review").append(newreviewmarkup);



