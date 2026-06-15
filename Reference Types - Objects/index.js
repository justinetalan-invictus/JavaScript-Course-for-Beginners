// Reference Types - Objects
let person={
    name: 'Justine',
    age: 21
}; // Object Literal
console.log(person); 

// Dot Notation - 1st way to change value
person.name='Invictus' //concise, shorter, best for default choice
console.log(person);

// Bracket Notation - 2nd way to change value
person['name']='Hannah'; //good for selection
//let selection = 'name';
//person[selection]='Hannah';
console.log(person);