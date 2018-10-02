console.log('js');

// Let's make a funciton to double a number 

let number = 42;

function doubleIt(){
    number = number * 2;
}

console.log(`The number is ${number}`);
console.log('Double the number');
doubleIt();
console.log(`The number is ${number}`);

// Function above isn't self contained - works, but could be better

// Can use the function before it's declared in the file 
// console.log('Use betterDoubleIt on 2', anotherDoubleIt(2));

// Use an input parameter to avoid using outside variables without being obvious 

function betterDoubleIt(num){ 
  return num * 2; // return back the result don't set outside variables 
}

let result = betterDoubleIt(number);
console.log('After the function Number is now ', result);

// why is this better: 
// - self contained, doesn't change anything outside
// - easier to read and understand
// - use it elsewhere, just move function definition 

// another way to define a function 
// This is called a function expression 
let anotherDoubleIt = function(number){
  return number * 2;
}


// This isn't going to work, dind't source in jQuery
$('#myButton').on('click', function(){
  // do something 
})

function handleClick(){
  // do something 
}

// Use a named function for an event 
// Don't put the ()'s here or it will call the function 
$('#myButton').on('click', handleClick)
