$(document).ready(function(){
	$(".buy0").click(function(event){
		event.preventDefault();
		console.log("adding0");
		$(".purchased").append("<li>Puddle Jumper</li><li>price: $600</li>");
		$(".hidethis").hide();
	});

	$(".buy1").click(function(event){
		event.preventDefault();
		console.log("adding1");
		$(".purchased").append("<li>River Monser</li><li>price: $400</li>");
		$(".hidethis").hide();
	});
	$(".buy2").click(function(event){
		event.preventDefault();
		console.log("adding2");
		$(".purchased").append("<li>Green Goblin</li><li>price: $700</li>");
		$(".hidethis").hide();
	});
	$(".buy3").click(function(event){
		event.preventDefault();
		console.log("adding3");
		$(".purchased").append("<li>Spider-Man</li><li>price: $900</li>");
		$(".hidethis").hide();
	});
	

});
