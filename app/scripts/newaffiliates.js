  var newaffiliatedata;
  var justVals;

  $(function(window) {
  
    $("form").on("submit", function(e) {
      e.preventDefault();
      // console.log('heard a click');
      newaffiliatedata = $(this).serializeArray();
        console.log(newaffiliatedata);

      var justVals = _.pluck(newaffiliatedata, "value");
        console.log(justVals);

      var newAffiliateReady = $("#newAffiliatesTmpl").html();

      var affiliateTmplString = _.template(newAffiliateReady,justVals);
        console.log(affiliateTmplString);
    $(".newoutfitters").append(affiliateTmplString);      
    });
});


// var tourtemp = $("#tourshere").html();
// var ourtours = _.template(tourtemp, sctours);
// $(".placestotour").append(ourtours);






