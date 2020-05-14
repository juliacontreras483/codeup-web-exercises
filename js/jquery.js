"use strict";


$(document).ready(function() {

    if(element.which===65){
        $('#a').fadeOut(100).fadeIn(100);
    }

    if(element.which===66){
        $('#b').fadeOut(100).fadeIn(100);
    }

    if(element.which===39){
        $('#right').fadeOut(100).fadeIn(100);
    }
    if(element.which===37){
        $('#left').fadeOut(100).fadeIn(100);
    }
    if(element.which===40){
        $('#down').fadeOut(100).fadeIn(100);
    }
    if(element.which===38){
        $('#up').fadeOut(100).fadeIn(100);
    }
});

var konami = ['38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13'] ;
var code = [];

$(document).keyup(function(element){
    code.push(element.KeyCode);
    if (code.toString().indexOf(konami) >= 0) {
        $('body').css ('background-color', 'purple');
        alert("YOU HAVE ADDED 30 Lives!");
    }
});

console.log(code);