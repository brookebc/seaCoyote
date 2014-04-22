
function Review(name, comment) {
			this.name = name;
			this.comment = comment;
			
}

Review.prototype.generateReview = function(data){
	var markup = "";
	var i;

	for(i=0; i < this.data.length; i++) {
		markup += "<h3>" + this.data[i].name + "</h3>" +"<li>" + this.data[i].comment + "</li>" 
	}

	return markup;
};

var bob = new Review("Bob", "this is a great kayak!");
var jim = new Review("Jim", "don\'t buy this one!");


function Comment(){};

function CustReview = new Review(name, comment);


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

