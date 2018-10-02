console.log('Function to sum 2 things');

function sum(value1, value2 = 0) {
    let number1 = parseFloat(value1);
    let number2 = parseFloat(value2);
    return number1 + number2;
}
//say what you're testing and expectations to see if they match in the console
console.log(`Try sum(2, 3) expect it to give us 5:`, sum(2,3));
console.log(`Try sum(2, -3) expect it to give us -1:`, sum(2,-3));

//broke the thought in readme so what can we do to fix it? 
console.log(`Try sum('2', '3') expect it to give us 5:`, sum('2','3'));
//    let number1 = parseInt(value1);
//    let number2 = parseInt(value2);
//    return number1 + number2;

// fixed with parseFloat
console.log(`Try sum(2.5, -1) expect it to give us 1.5:`, sum(2.5,-1));

console.log(`Try sum('foo', 'bar') expect it to give us NaN:`, sum('foo','bar'));

// changed value2 to value2 = 0)
console.log(`Try sum(3) expect it to give us 3:`, sum(3));

