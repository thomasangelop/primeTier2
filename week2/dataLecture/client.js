console.log('File Sourced');

let fancyFruit = ['kiwi', 'starfruit', 'milkfruit', 'pomegranate']

$(document).ready(onReady);

function onReady() {
  console.log('ready!!!');

  // for-of as comparison
  for (let fruit of fancyFruit) {
    console.log('A fancy fruit', fruit);
  }

  // Function that does a loop for us
  // built-in method on Array
  // for each item in fancyFruit, call the logFruit function
  fancyFruit.forEach(logFruit); 
  
  showFruit();

  $('#output').on('click', 'button', function(){
    console.log('in delete');
    // Get the id of the item to remove from the hidden jquery data
    let index = $(this).parent().data('fruitId');
    console.log('FruitId', index);

    // Use the index to remove it from the array (source of truth)
    fancyFruit.splice(index, 1);

    // This works, kinda, but then the indexes get outta sync
    // So it doesn't really work.  Delete from your source of truth (the array)
    // Then redisplay all the items from the array
    //$(this).parent().remove();

    // Show fruit again from array
    showFruit();
  })
  

}

function showFruit() {
  $('#output').empty();

  // Put the fruit on the DOM
  fancyFruit.forEach(function (fruit, index) {
    console.log('in for each');
    
    // jQuery data
    let fruitParagraph = $(`<p>${fruit}  <button>Delete</button></p>`);

    // Set the fruit name & id in the hidden jquery data
    fruitParagraph.data('fruit', fruit);
    fruitParagraph.data('fruitId', index);
    // Let's see what that mysterious data looks like
    console.log('fruitPara Element', fruitParagraph.data() );

    $('#output').append(fruitParagraph);
  });
}

// Imagine that forEach is writen like this: 
// This doesn't work... built onto array class... imagine
// function forEach(functionName) {
//   for( let i=0; i<array.length; i++) {
//     let item = array[i];
//     fuctionName(item, i);
//   }
// }

// This function takes 2 parameters, 
// first is the item from the array
// second is optional and is the index or position of the item in the array
function logFruit(fruit, index) {
  console.log(`Fancy Fruit ${index}`, fruit);
}