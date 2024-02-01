
function greet(){
    console.log("Hello, welcome to functions");
}
greet();

//Function Declarations

function declaration(){
    console.log("Hello! I am a function declaration");
}
declaration();

//function expressions
const expression = function(){
    console.log("Hello! I am a function expression");
}
expression();
// programming terms
// Declaration - creating function or variable
// Invocation - calling or executing a function or method
//Function expressions are assigned to a variable that's why we can't call it before initialization, 
//like for variables.
//Function declarations can be called before the initialization of the function itself.

//Parameter = The placeholder we set in functions
//Argument = The value we supply to the function parameter
//In the greetings function, "name" would be the parameter. "Ron" and "Regel" would be the argument.

//Funciton parameters
function  greetings(name){
    console.log(`Hello ${name}!`);

}
greetings('suvakanta');
greetings('Regel');
greetings('Ron');

//with return value

 function sum(a,b){
    return a+b
    
 }
 console.log(sum(3,4))

 let result =sum(7,8)
 console.log(result)


 //global scope and local scope
 let globalVar ="I am a global variable"

 function localScope(){
    let localVar = " I am a local variable"
    console.log(localVar)
    console.log(globalVar)
 }
 //console.log(localVar)
    console.log(globalVar)

    function newSum(a,b){
        let c =a+b;
        return c;
    }
 console.log(newSum(2,3))

 //Higher-order function

 function calculate(operation,num1,num2){
    return operation(num1,num2)
 }

 function addition(a,b){
    return a+b;
 }
 function subtraction(a,b){
    return a-b;
 }
 function multiplication(a,b){
    return a*b;
 }
 function division(a,b){
    return a/b;
 }

 let Sum = calculate(addition,3,4);
 let Diff = calculate(subtraction,5,2);
 let Mul = calculate(multiplication,4,5);
 let Div = calculate(division,10,2);
 
 console.log(`the answer to additin is ${Sum}`);
 console.log(`the answer to subtraction is ${Diff}`)
 console.log(`the  answer to multiplication is ${Mul}`)
 console.log(`the answer to division is ${Div}`)
 //Higher-order functions are used for more advanced function writing.
 //Better maintainability due to better readability. We want to make our code as readable as possible.