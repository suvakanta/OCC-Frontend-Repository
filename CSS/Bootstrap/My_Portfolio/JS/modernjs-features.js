//ES6 (ECMAScript 2015)

//Modern JS features
 function greet(){
    console.log("Hello.");
 }

 //Arrow Functions

 const greet1 =() => {
    console.log("Hello")
 }

 const square =(a)=> a*a;
console.log(square(3));

const sq =(a) =>{
    console.log(a*a)
}
console.log(sq(5))

//Enhanced Object Literals
const person = {
	name: "TJ",
	age: 21,
    greeting(){
        //code block
    }
}
 //Now it looks like bow, arrow and a target.

//( ) => { }

//Spread and Rest Operators
//Rest 

function myFunction(firstArg, ...restOfArgs){
    console.log(firstArg);
    console.log(restOfArgs);
}
myFunction('one','two','three','four')

//Spread
//it's called spread because we are "spreading out" the contents of our array
function sum(x,y,z){
    return x+y+z;
}
const numbers =[1,2,3];
console.log(sum(...numbers))

//Common Built-in Methods
//Arrays
//Filter
let nums =[1,2,3,4,5,6,7,8,9,10];
const even =nums.filter((number)=> number%2 == 0)
console.log(even)
const odd =nums.filter((number)=> number%2 == 1)
console.log(odd)

//Strings
//Split

const message ="Hello, World"
const words = message.split(", ");
console.log(words)

//includes
const sentence = "The quick brown fox jumps over the lazy dog";
const contaisWord = sentence.includes("fox")
console.log(contaisWord)

//Length
const sampleString ="Welcome to Modern JS Features!"
console.log(sampleString.length)

//Objects
//keys
const keys = Object.keys(person);
console.log(keys);
//values
const values = Object.values(person)
console.log(values);

console.log(person)

//Math
//max and min
console.log(Math.max(3,4,7))
console.log(Math.min(2,1,55))

//Rounding
console.log(Math.round(44.32))
console.log(Math.round(34.76))
//floor
console.log(Math.floor(3.7))
//ceil
console.log(Math.ceil(3.1))

// random 
console.log(Math.random())
console.log(Math.random()*100)

//Nested math methods
console.log(Math.round(Math.random()*100))
console.log(Math.floor(Math.random()*100))
console.log(Math.ceil(Math.random()*100))

//Other Methods
//to fixed
const pi = 3.141592;
console.log(pi.toFixed(2))
console.log(pi.toFixed(3))
console.log(pi.toFixed(12))

//date
const currentDate = new Date();
console.log(currentDate)
const christmas = new Date(2024,11,25)
console.log(christmas)

//toString
const numString = 38;
const parsedString = numString.toString();
console.log(parsedString+1)