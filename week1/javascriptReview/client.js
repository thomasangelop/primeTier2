console.log( 'js' );

console.log( 'bling: $()');

let cohortName = 'Sirius';
const MAX_STUDENTS = 24;

cohortName = 'Vega';

// unless you give it a value then you get undefined.
let studentCount;

// Streing concatenation to joing strings
console.log( 'hello ' + cohortName + '!');

//template literal - shortcut for above
console.log( `hello ${cohortName}!`);

// camel case: cohortName - use this
// screaming snake case for const

if (studentCount < 24){
  //add the MAX_STUDENTS
}// end studentCount
else{
  //give an error
}// end studentCount

//use const instead:
if (studentCount < MAX_STUDENTS){
  //add the MAX_STUDENTS
}// end studentCount
else{
  //give an error
}// end studentCount

console.log('Student count:', studentCount);

// Types can be weird sometimes
let result = 1 + 1;
console.log( 'Result of 1 + 1 = ', result );

// be carful of types in JavaScript
result = '1' + '1';
console.log('Result of \'1\' + 1 = ', result );

// But sometimes it can't
result = 'hello' * 3;
console.log('Result \'hello\' * 3 =', result );

//Functions

function addItUp(num1, num2){
  return num1 + num2;
}

function subIt(num1, num2) {
  return num1 - num2;
}

console.log(addItUp(3, 'hello'));
console.log(subIt(5, 8));

// Array - they are an ordered colleciton of things

let myNumbers = [3, 7, 9, 15];
console.log(`The array is ${myNumbers}.`);

// Two ways to log, the comma plunks in the object so you can dig into the details
console.log(`The myNumbers array is `, myNumbers);
console.log(`There are ${myNumbers.length} items in the array.`);

// Array position start at 0
let firstItem = myNumbers[0];

// The last item is at length -1 because of the 0 start
let lastItem = myNumbers[ myNumbers.length -1];
console.log(`The last item in this array is `, lastItem);

// Turn a string into a number
let numberOne = Number(one); // one way for a number / integar
numberOne = parseInt(one); // another way for a number/integer
numberOne = parseFloat(one); // works with decimal points
