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


//  2. Class: Car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`The ${this.brand} ${this.model} is starting.`);
  }

  getAge(currentYear) {
    return currentYear - this.year;
  }
}

const myCar = new Car('Toyota', 'Corolla', 2018);
myCar.start();
console.log(myCar.getAge(2025)); 

//  3. Class: Box
class Box {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    return this.length * this.width * this.height;
  }
}
