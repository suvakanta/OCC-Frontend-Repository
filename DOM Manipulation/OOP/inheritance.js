//Inheritance
console.log("Hello OOP!");

class Animal{
    constructor(name){
        this.name = name;

    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal{
    bark(){
        console.log('Woof woof!');
    }
}

const myDog = new Dog('Buddy');
myDog.bark();
myDog.eat();

class Cat extends Animal{
    meow(){
        console.log('Meaw Meaw!');
    }
}
const myCat = new Cat('Whisky');
myCat.meow();
myCat.eat();