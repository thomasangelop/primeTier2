console.log('client.js is sourced');

const catArray = [
    //{name: 'abby', color: 'brown'}
];

$(document).ready(readyNow);
function readyNow(){
    console.log('jQuery is sourced');
    
    $('#add-cat').on('click', addCat);
    
    showAllCats();
}

function addCat(event) {
    //Default behavior for a form is to refresh the page. 
    //We don't want it to refresh the page so preventDefault()
    event.preventDefault();
    console.log('preventDefault');
    //Get the input fields when we've clicked add cat
    let newCatName = $('#in-name').val();
    let newCatColor = $('#in-color').val();
    console.log('Cat:', newCatName, newCatColor);
    
    catArray.push({
        name: newCatName,
        color: newCatColor
    })
    console.log( catArray );

    showAllCats();
    $('#input').val();
}

function showAllCats(){
    // for each cat in the array
    $('#cats').empty();
    for (let cat of catArray){
        let color = cat.color;
        //$('#cats').append(`<p style="color: ${color}">${cat.name} is ${cat.color}.</p>`)
        $('#cats').append(`<p>${cat.name} is ${cat.color}.</p>`).css('color', color);
    
    }
}