  
  var newaffiliatedata;
  var justVals;

  $(function(window) {
  
    $("form").on("submit", function(e) {
      e.preventDefault();
      newaffiliatedata = $(this).serializeArray();
      // console.log(newaffiliatedata);
      var justVals = _.pluck(newaffiliatedata, "value");
      var affiliateTmplString = _.template($("#newAffiliatesTmpl").html(),newaffiliatedata)
      console.log(affiliateTmplString);
      // console.log(justVals);
    $(".newoutfitters").append(justVals);      
    });
});


