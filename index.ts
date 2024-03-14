//Intaling typescript
//npm init
//npm install --save-dev typescript
//npm install -g typescript


//Typing

let message: string = "Hello, TypeScript!";
let count: number = 42;
let isValid: boolean = true;





//Creating Custom Types and Interfaces

// In TypeScript, an interface is a blueprint for defining the structure of an object. It specifies the properties and methods an object should have without providing the implementation. Interfaces are primarily used for type-checking purposes, ensuring objects adhere to a specific shape. They can be extended or implemented by other interfaces or classes to inherit or enforce structure.


interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "John Doe",
  age: 30
};


// Object-Oriented Programming
class Animal {
  name: string;

  constructor(name: string) {
      this.name = name;
  }

  speak(): void {
      console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
      super(name);
  }

  speak(): void {
      console.log(`${this.name} barks.`);
  }
}

let dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks.

//array

const numbers: number[] = [1, 2, 3];
const array: Array<string> = ['a', 'b', 'c'];








const setPilot = (newPilot: string, spaceship: { name?: string; pilot: string; speed?: number; inMission?: boolean; }) => {
  spaceship.pilot = newPilot;
}

const accelerate = (targetSpeed: number, spaceship: { name?: string; pilot?: string; speed: any; inMission?: boolean; }) => {
  spaceship.speed = targetSpeed;
}

const sendToMission = (spaceship: { name?: string; pilot?: string; speed?: number; inMission: any; }) => {
  spaceship.inMission = true;
}

const spaceship = {
  name: '',
  pilot: '',
  speed: 0,
  inMission: false,
}

const pilot = "Han Solo";

spaceship.name = "Millennium Falcon";

setPilot(pilot, spaceship);
accelerate(50, spaceship);
sendToMission(spaceship);

console.log(spaceship);