//this is where I will create a form that affiliates
//can use to sign up for the program
//which will allow them to immediately add their
//program to the about.html page

//need to use underscore to format the form
//and to create a template to add the info to the page

 // function affiliateValues() {
 //    var fields = $( ":input" ).serializeArray();
 //    $( "#results" ).empty();
 //    jQuery.each( fields, function( i, field ) {
 //      $( "#results" ).append( field.value + " " );
 //    });
 //  }
 
 //  $( ".affiliatesubmit" ).click(affiliateValues);
 //  // $( ".becomeaffiliate" ).change(affiliateValues);

 //  affiliateValues();

  function showValues() {
    var fields = $( ":input" ).serializeArray();
    $( "#results" ).empty();
    jQuery.each( fields, function( i, field ) {
      $( "#results" ).append( field.value + " " );
    });
  }
 
  $( ":checkbox, :radio" ).click( showValues );
  $( "select" ).change( showValues );
  showValues();