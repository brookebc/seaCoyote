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
		markup += "<li>" + data[i].comment + "</li>";
	}
	console.log(markup);
	return markup;
};

var reviews = new Section();

var bob = new Review("Bob", "The staff is very knowledgable and friendly! I would definitely buy from them again! - Bob");
var jim = new Review("Jim", "I bought the spiderman model and it is very fast but unstable! Watch out! -Jim ");


var reviewArray= [bob,jim];

reviews.generateReview(reviewArray);

$(".past-reviews").append(reviews.generateReview(reviewArray));







  

