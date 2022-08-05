let apples: number = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();


// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truth: boolean[] = [true, true, false];


//Classes
class Car {


}

let car: Car = new Car();

//Obeject literal
let point: { x: number; y: number } = {
  'x': 10,
  'y': 20
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};


// When to youse annotations
// 1) Function that returns the 'any' type
const jsonTest = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(jsonTest);
console.log(coordinates);

//to prevent any type
const jsonTestRight = '{"x": 10, "y": 20}';
const coordinatesRight: { x: number; y: number } = JSON.parse(jsonTestRight);
console.log(coordinatesRight);

// 2) When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// let words = ['red', 'green', 'blue'];
// let foundWord = fales;

// for (let i = 0; i < words.length; i++) {
//   if (words[i] === 'green') {
//     foundWord = true;
//   }
// }

// let words = ['red', 'green', 'blue'];
// let foundWord: boolean;

// for (let i = 0; i < words.length; i++) {
//   if (words[i] === 'green') {
//     foundWord = true;
//   }
// }

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = true;
  }
}

// correct way to prevent any
// let numbers = [-10, -1, 12];
// let numberAboveZero: boolean | number = false;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     numberAboveZero = true;
//   }
// }
