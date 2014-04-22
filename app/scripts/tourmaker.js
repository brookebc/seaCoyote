$(document).ready(function() {

var tourtemp = $("#tourshere").html();
var ourtours = _.template(tourtemp, sctours);
$(".placestotour").append(ourtours);

});