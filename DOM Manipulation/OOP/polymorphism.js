console.log("Hello OOP!");
//Polymorphism

class Animal{
    makeSound(){
        return 'The animal makes a noise'
    }
}

class Dog extends Animal{
    makeSound(){
        return super.makeSound()+', the dog barks';
    }
}

class Cat extends Animal{
    makeSound(){
        return super.makeSound()+'. the cat meoows'
    }
}


const dog = new Dog();
const cat = new Cat();
const animal = new Animal();

console.log(dog.makeSound());
console.log(cat.makeSound());
console.log(animal.makeSound());