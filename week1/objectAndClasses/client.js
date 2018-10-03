console.log('js');

// Object for a cat - this is an object literal
let cat = {
    name: 'kyo',
    age: 12,
    weight: 11
}

//adds new property 
console.log('Cat', cat);

console.log('Add -bday');
//add new object to cat 
//cat.bDay = new Date();

//bracket notation: 
cat['bDay'] = new Date();

console.log('Cat is now', cat);

// object constructor 
function Cat(name, age, weight) {
    this.name = name;
    this.age = age; 
    this.weight = weight;
}

let abby = new Cat('Abby', 13, 15);
console.log('Abby', abby);

let fred = new Cat('Fred', 11, 14);
console.log('Fred', fred);

// ES6 Classes

class Dog {
    constructor(name, age, weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
}

// Make some instances of Dog objects
let skadi = new Dog('Skadi', 11, 103);
console.log('Skadi', skadi);

let scotti = new Dog('Scotti', 12, 143);
console.log('Scotti', scotti);



