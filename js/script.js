$( function() {
   //tooltip
   $( document ).tooltip();
  //  Menu
  // $( "#menu" ).menu();
});
$( function() {
  $( "#menu" ).menu();
} );

$( function() {
  $( "#accordion" ).accordion({
    heightStyle: "content"
  });
  var icons = {
    header: "ui-icon-circle-arrow-e",
    activeHeader: "ui-icon-circle-arrow-s"
    };
    $( "#accordion" ).accordion({
      icons : icons,
      collapsible: true
    });
    $( "#toggle" ).button().on( "click", function() {
      if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
        $( "#accordion" ).accordion( "option", "icons", null );
      } else {
        $( "#accordion" ).accordion( "option", "icons", icons );
      }
    });
} );

$( function() {
 // autocomplite
 var availableTags = [
  "ActionScript",
  "AppleScript",
  "Asp",
  "BASIC",
  "C",
  "C++",
  "Clojure",
  "COBOL",
  "ColdFusion",
  "Erlang",
  "Fortran",
  "Groovy",
  "Haskell",
  "Java",
  "JavaScript",
  "Lisp",
  "Perl",
  "PHP",
  "Python",
  "Ruby",
  "Scala",
  "Scheme"
];
$( "#tags" ).autocomplete({
  source: availableTags
});
} );
$( function() {
  $( "#datepicker" ).datepicker();
} );
$( function() {
  $( "#draggable" ).draggable(
    { axis: "y" }
  );
} );
$( function() {
  //sortable
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
   //tabs
  $( "#tabs" ).tabs();
  $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
  $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
} );


$( function() {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $( "#effectTypes" ).val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $( "#effect" ).toggle( selectedEffect, options, 500 );
  };

  // Set effect from select menu value
  $( "#button" ).on( "click", function() {
    runEffect();
  });
} );
