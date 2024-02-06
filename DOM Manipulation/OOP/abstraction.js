console.log("Hello OOP!");
//Abstraction
class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    start() {
      return `${this.make} ${this.model} is starting the engine.`;
    }
  
    stop() {
      return `${this.make} ${this.model} is stopping the engine.`;
    }
  }
  
  const myCar = new Vehicle("Toyota", "Camry");
  console.log(myCar.start());       // Output: Toyota Camry is starting the engine.
  console.log(myCar.stop());        // Output: Toyota Camry is stopping the engine.

  //Like the built-in methods we've been using, we don't need to know the intricacies of those methods. We just have to know how tto use them.
  //What is the real time application of abstraction in programming?