"use strict";
$(document).ready(function() {
//     alert( 'THE DOM HAS FINISHED LOADING!');



    // $('p,h1,li').css('background-color', 'blue');
    // $('p').css('color', 'white');
    // $('#food-list').css('font-size', '20px');
    // $('#color-list').css('font-size', '20px');
    // //
    // // $( "*" ).css( "border", "3px solid black" ).length;
    // // // $( "body" ).prepend( "<h3>" + elementCount + " elements found</h3>" );
    // $('*').css('border', '1px solid purple');
    //
    // var contents = $('#welcome-text').html();
    // alert(contents);





    // Use the file jquery_exercises.html for these exercises. Commit your changes to GitHub.
    //
    //     Remove your custom jQuery code from previous exercises.
    //
    //     Add jQuery code that will change the background color of an h1 element when clicked.

    $('#welcome-text').click(function() {
        $(this).css({
            'background-color': 'blue',
            'color': 'white',
        });
    });



    //
    //     Make all paragraphs have a font size of 18px when they are double clicked.


    $( "p" ).dblclick(function() {
        $(this).css('font-size', '18px');
    });

    //     Set all li text color to red when the mouse is hovering; reset to black when it is not.


        $('li').hover(function() {
            $(this).css('color','red');
        }, function() {
            $(this).css('color','black');
        });











});