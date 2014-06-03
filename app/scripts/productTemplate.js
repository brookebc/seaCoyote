var home;
$(document).ready(function(){
	home = new Page("homePage");
	homePage.init();


});

function Page(name) {
	this.name = name;
}
Page.prototype = {
	constructor: Page,
	addTmpl: function($target, template, data) {
		var tmpl = _.template(template, data);
			$target.append(tmpl);
	}
};

var homePage = {
	init: function(){
		this.initStyling();
		// this.initEvents();
		// this.initValidation();
		console.log("init begins");
	},
	initStyling: function() {
		home.addTmpl($(".products"), $("#productInfo").html(), productArray);
		console.log("init styling begins")
	}

}