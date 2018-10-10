$( document ).ready(readyNow);

let clicks = 0;

function readyNow(){
    $( '#createButton').on( 'click', create );
    $( document ).on( 'click', '.deleteButton', deleteDiv );
    $( document ).on( 'click', '.swapButton', swapDiv );
}// end readyNow

function create(){
    // increment clicks
    clicks++;
    console.log('in create');
    //target output element by ID
    let el = $( '#main' );
    // append a div with a class of ketchup to this div 
    let outputString = '<div class="ketchup">';
    // display count of clicks 
    outputString += '<p>' + clicks + '</p>';
    // swap button 
    outputString += '<button class="swapButton">swap</button>';
    // delete button 
    outputString += '<button class="deleteButton">delete</button>';

    outputString += '</div>';
    //pleace on DOM
    el.append( outputString );
}//end create 

function deleteDiv(){
    console.log('in deleteDiv', $(this).parent() );
    $(this).parent().remove();
}

function swapDiv(){
    console.log('in swapDiv', $(this).parent() );
    $(this).parent().toggleClass( 'mustard' );
}