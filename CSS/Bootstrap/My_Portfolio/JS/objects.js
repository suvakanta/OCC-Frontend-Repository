//Objects

const person = {
    firstName:'Jane',
    lastname:'Doe',
    age: 30,
    hobbies:['reading','coding','hiking'],

    greet:function(){
        console.log('Hello, my name is',this.firstName,'Nice to meet you.');
    }

};

//Accessing Object Properties

console.log(person.lastname);
console.log(person.age);
person.lastname ='Smith';
console.log(person.lastname);

//Accessing Object Methods

person.greet();

//Adding new properties to the object
person.nationality ='American';
console.log(person.nationality);

//Adding new methods to the object
person.introduce = function(){
    //Template Literals
    console.log(`I am ${this.firstName} ${this.lastname}. I am ${this.age}.`);
};
person.introduce();

//Nesting Objects
const address ={
    street:'123 Main St',
    city:'New York',
    country:'USA'
};
person.location = address;
console.log(person.location.street);

//Object Destructuring
const {firstName,lastname,age} =person;
console.log(firstName, lastname, age);

console.log(person.hobbies[1]);
console.log(person.hobbies);
