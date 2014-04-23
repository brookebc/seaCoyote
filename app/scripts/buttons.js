$(document).ready(function(){


Page.prototype.buyThis =function($el, data){
$(".products").on("click", $el, function(){
	console.log(data);



});

}
var cart = new Page();

cart.buyThis(this), "test");
});


// $(".btn.[i]").click(function(){
// 	event.preventDefault;
// 	// var productnprice = Number($(this).val());
// 	console.log(i);
// 	var i;
// $(".shopping-cart").text("<p>" + productArray[i].name + productArray[i].cost +"</p>");
