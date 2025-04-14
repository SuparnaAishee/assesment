//  1. Class: Dog
class Dog {
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }

  bark() {
    console.log(`Woof! My name is ${this.name}!`);
  }
}


const myDog = new Dog("Buddy", "Labrador", 5);
myDog.bark(); 
