"use strict";
$(document).ready(function() {
//     alert( 'THE DOM HAS FINISHED LOADING!');



    $('p,h1,li').css('background-color', 'blue');
    $('p').css('color', 'white');
    $('#food-list').css('font-size', '20px');
    $('#color-list').css('font-size', '20px');
    //
    // $( "*" ).css( "border", "3px solid black" ).length;
    // // $( "body" ).prepend( "<h3>" + elementCount + " elements found</h3>" );
    $('*').css('border', '1px solid purple');

    var contents = $('#welcome-text').html();
    alert(contents);










});