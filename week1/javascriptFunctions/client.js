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
