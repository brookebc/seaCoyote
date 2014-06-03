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
      // var affiliateTmplString = _.template($("#newAffiliatesTmpl").html(),justVals)
      // console.log(affiliateTmplString);
      
    $(".newoutfitters").append(justVals);      
    });
});


