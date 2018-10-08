console.log('js sourced');

$(document).ready(handleReady);

//This doesn't work
// $(document).on('ready', handleReady);

function handleReady() {
    console.log('jquery sourced');
    
}