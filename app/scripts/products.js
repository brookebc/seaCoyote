function Page(){}

function Product(pic, name, color, cost){
	this.pic = pic;
	this.name = name;
	this.color = color;
	this.cost = cost;
}

var puddleJumper = new Product("<img src='../img/kayak0.png'>", "Puddle-Jumper", "Red", "$600");
var riverMonster = new Product("<img src='../img/kayak1.png'>", "River Monster", "Yellow", "$400");
var greenGoblin = new Product("<img src='../img/kayak2.png'>", "Green Goblin", "Green", "$700");

var productArray = [puddleJumper, riverMonster, greenGoblin];

Page.prototype.productTemplate = function(data){
	var i;
	var markup = "";
	for(i=0; i<data.length; i=i+1){
		markup += "<div class = 'productBox'>" + data[i].pic + "<ul><li><h4>" + data[i].name + "</h4></li><li>" + data[i].color + "</li><li>Price: " + data[i].cost + "</li></ul></div>"
		console.log(i);
	}
	return markup;
};

Page.prototype.sendToDom = function($el, data){
	$el.append(this.productTemplate(data));
};