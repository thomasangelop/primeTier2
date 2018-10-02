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


function betterDoubleIt(num){
  console.log('Number passed in is', number);
  number = 0;
  console.log('In the function number is', number);
  
}

betterDoubleIt(number)
console.log('After the function Number is now ', number);


// why is this better: 