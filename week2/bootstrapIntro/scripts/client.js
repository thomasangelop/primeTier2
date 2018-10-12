console.log('js');

$( document ).ready(readyNow);
let kitties = [];

class Cat{
    constructor( name, breed, age){
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
}

kitties.push( new Cat('Commander', 'Calico', '2' ));
kitties.push( new Cat('cutie', 'cat', '4' ));
kitties.push( new Cat('pie', 'kat', '5' ));
kitties.push( new Cat('blue', 'ckat', '6' ));
kitties.push( new Cat('green', 'kcat', '8' ));
kitties.push( new Cat('black', 'kitty', '2' ));
kitties.push( new Cat('berry', 'catty', '2134' ));
kitties.push( new Cat('wise', 'cats', '23' ));

function readyNow(){
    console.log('JQ');
    
    //select element by ID
    let el = $('#test');
    //test loop
    for(cat of kitties){
    //append to this element
    let outputString = `
    <div class="col-2" >
        <h3>${cat.name}</h3>
        <p>${cat.breed}</p>
        <p>${cat.age}</p>
    </div>`;
    el.append(outputString );
    }
}
