console.log('client js sourced');

//make sure DOM is ready and loaded
$(document).ready(readyNow);

function readyNow(){
    console.log('cool w/ jQuery');

    // Add a new heading that ins't in the HTML already
    $('#content').append(`<h2>I'm a new Heading</h2>`);

    //select list items with class and make blue
    $('#blueStuff').addClass('blue');
    
    // remove all the tiems that have a class of red
    $('.red').removeClass('red');

    // select all the list everywhere and remove them
    $('li').remove();


}