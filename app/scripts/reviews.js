function Section(){}


function Review(name, comment) {
			this.name = name;
			this.comment = comment;
			
}


Section.prototype.generateReview = function(data){
	var i;
	var markup = "";
	this.data = data;

	for(i=0; i < data.length; i++) {
		markup += "<h3>" + data[i].name + "</h3><li>" + data[i].comment + "</li>";
	}
	console.log(markup);
	return markup;
};

var reviews = new Section();

var bob = new Review("Bob", "The staff is very knowledgable and friendly! I would definitely buy from them again!");
var jim = new Review("Jim", "I bought the spiderman model and it is very fast but unstable! Watch out!");


var reviewArray= [bob,jim];

reviews.generateReview(reviewArray);

$(".past-reviews").append(reviews.generateReview(reviewArray));



// var comment = 






// function Comment(){};

// function CustReview = new Review(name, comment);


/*just for functionality...----------------------
      var value = $('#name').val();
   $('ul').append('<li>' + value + '</li>'); });
*/
//html code for button
/*
   <input id='name' type='text'>
   <button id='addOne'>
      Add One
   </button>
   --------------------------------------------- */

