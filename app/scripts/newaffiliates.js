var newaffiliatedata;
var justVals;

$(function(window) {
  
  var newaffiliatedata;
  var justVals;

  $("form").on("submit", function(event) {
    event.preventDefault();
      // console.log('heard a click');
    newaffiliatedata = $(this).serializeArray();
      console.log(newaffiliatedata);

    //   var justVals = _.pluck(newaffiliatedata, "value");
    //     console.log(justVals);

    var newAffiliateReady = $("#newAffiliatesTmpl").html();

    var affiliateTmplString = _.template(newAffiliateReady,newaffiliatedata);
      console.log(affiliateTmplString);
    $(".newoutfitters").append(affiliateTmplString);      
    });
});




