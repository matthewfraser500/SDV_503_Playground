
/*
// //TODO Javascript Variables
// console.log('Hello SDV503')
// console.log('Matthew Fraser')

// //Declaring variables first name and assign a value string
// let firstName = 'Matthew'
// let lastName = 'Fraser'
// let fullName = firstName + ' ' + lastName //ES5 
//     fullName = `My full name is ${firstName} ${lastName}` //ES6


// //Console.log firstName + lastName prints MatthewFraser into the terminal 
// console.log(fullName)


// ##Week4 - class one

//  let c;

// if(c < 0) {
//     console.log('Ali')
// }
// else {
//     console.log('Error')
// }

// console.log(c)

// x = "1234567"
// let y = Number(x)
// console.log(x)
// console.log(Number(x))
// console.log(typeof y)

// const a = 1 + 1
// console.log(a)
// let Matt
// console.log(Matt)

// //Storing information using object
// const information = {
//     student: "Ali",
//     country: 'Iraq',
//     city: 'Nelson',
//     postcode: 7010
// }
// console.log(Object)


// const personalInformation = {
//     Name: 'Matthew',
//     Age: '24',
//     City: 'Nelson',
//     Occupation: 'Student'
// }

// console.log(personalInformation)


// let c = 12

// //OR logic gate
// if (c === 11 || typeof c === 'number') {
//     console.log('True')
// } else {
//     console.log('error')
// }

// //NOT logic gat

// let b = 15

// if (b != 12) {
//     console.log('its true')
// } else {
//     console.log('ERROR')
// }
// */

// /*
// let a = 5
// let b = a
// console.log(a)
// console.log(b)
// console.log(a === b)
// console.log(a)
// console.log(b)
// console.log(a === b)
// */ 

// //## Week4 Class 2

// let country = "New Zealand";
// let city = "Nelson";
// let postcode = 7010;

// let isIsland = false
// let language

// //typeof allows us to determine a datatype

// console.log(typeof isIsland)
// console.log(typeof languague)

// console.log(city + ' ' + country + ' ' + postcode);

// language = "English"

// language = {
//     name: "Matthew",
//     city: "Nelson",
//     country: "New Zealand",
//     postcode: 7010
// }

// postcode++


// console.log(typeof(language))

// //How to access and object

// console.log(language.city)
// console.log(language.country)
// console.log(language.name)


// //Below shows you can change an object even if const has been used
// const brands = {
//     converse: "All-Star",
//     Doc: "Martin",
// }
// console.log(brands)
// console.log(converse = "Star")

// console.log(city + " " + country + " " + postcode)

// //This is how you create a string template !!important to remember back ticks
// console.log(`${city} ${country} ${postcode}`)

// //if else statements, if & else are keywords // === is refered to "hard equals" //

// // you can add as many if statements you like using else if // 
// if(postcode === 7011) {
//     console.log('Nelson')
// } else if(postcode === 7020) {
//     console.log('Richmond')
// } else {
//     console.log('Write city name')
// }

// let a = 'A+'
// let b = 'B+'

// let studentOne = 75

// if (studentOne >= 70 && studentOne <= 80 ) {
//     console.log(b)
// } else if (studentOne < 70) {
//     console.log('c')
// }

// console.log(24 >= 24)
// console.log(25 < 26)

// //This returns false because the comparision is false between datatypes//
// console.log('24' === 24)
// console.log(24 !== 24)
// console.log('24' == 24)

// console.log(0 == false)
// console.log(1 == true)
// console.log(2 == true)

// const x = {
//     city: 'Nelson'
// }

// const y = x

// console.log(y.city)

// //Week-5

// //For Loop Practice
// // This for loop is incrementing until it reaches 5
// for(i=0; i < 5; i++) {
//     console.log('This is a loop')
// }

// let arr = [1,2,3,4,5,6,7]

// for(i=0; i <= arr.length; i++) {
//     console.log('This is a loop')
// }

// //For Loop syntax

// //for (initialize; condition; increment);
// //for (initialize; condition; increment) single statement;
// //for (initialize; condition; increment) { multiple; statements; }

// // 0-index based counter
// // don't forget a break statement/condition
// for (let i = 0;; i++) {
//     console.log("loop, i = " + i);
//     if (i > 1)
//         break;
// }

// // Mulitple Statements
// /*let counter = 0;
// function inc() { counter++; }for (let i = 0; i < 10; i++, inc());
// console.log(counter);
// */
// //Increment Numbers

// let counter = 0;
// for (let i = 0; i < 10; i++)
//     counter++;counter

// for (var i =0; i < 10; i++) {
//     let x = i;
//     console.log(x)
// }

// // Nested for Loops

// for (let y = 0; y < 2; y++)
//     for (let x = 0; x < 2; x++)
//         console.log(x, y);

// // Skipping Steps //
// // The if statement here is skipping number 5 //
// for ( let i = 0; i < 10; i++) { if (i == 5) continue; console.log(i );}

// // Breaking Early

// for ( let i = 0;; i++) { console.log('loop'); break;};

// // for of Loops And Strings

// /*The for...of statement creates a loop iterating over iterable objects, 
// /including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. 
// It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.
// */


// let string = 'Matthew';
// for (let value of string)
//     console.log( value );

// let array = [0, 1, 2];

// for(let value of array)
//     console.log(value);


// //for of does !!NOT WORK with OBJECTS!!
// /*
// let object = {a: 1, b: 2, c: 3 };
// for {let value of object}
// console.log(value)
// */

// //for in loops// ES6

// let object = { a: 1, b: 2, c: 3, method: () => { } };for (let value in object)
//     console.log(value, object[value]);

// //While loop

// let c = 0;
// while (c++ < 5)
// console.log(c);

// let p = 0;
// while (p++ < 1000) {
//     if (p > 1)
//     continue;
//     console.log(p);
// }

// //Week 5 Class-2

// //Switch statements

// const person = 'Joe'
// switch (person) {
//     case 'Jane':
//         console.log('Hi Jane');
//         break;
//     case 'John':
//         console.log('Hi John')
//         break;
//     case 'Joe':
//         console.log('Hi Joe')
//         break;
//     case 'Mary':
//         console.log('Mary')
//         break;
//     default:
//         console.log('Hi')
//         break;
// }

// // Within the switch statement it only works because the true statement will excute the code..

// let grade = 90
// switch (true) {
//     case (grade >= 100):
//         console.log('A');
//         break
//     case (grade >= 80):
//         console.log('B')
//         break
//     case (grade >= 50):
//         console.log('C')
//         break
//     case (grade <= 20):
//         console.log('Fail')
//         break
//     default:
//     console.log('Enter Grade')
// }

// /*
// const foo = 1;
// switch (foo) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log('I like this number');
//         break;
//     case -1:
//     case -2:
//         console.log('I love this number');
//         break;
//     default:
//         console.log('I don\'t like this number');
// }

// const foo = 1;
// let output = "";
// switch (foo) {
//     case 0:
//         output += 'So ';
//     case 1:
//         output += 'How ';
//         output += 'Old ';
//     case 2:
//         output += 'Are ';
//     case 3:
//         output += 'You ';
//     case 4:
//         output += '?';
//         console.log(output);
//         break;
//     case 5:
//         output += '!';
//         console.log(output);
//         break;
//     default:
//         console.log('Please pick a number from 0 to 5!');
// }

// */

// // Terany Operators

//  let persons = {
//      name: 'tony',
//      age: 20,
//      driver: null
//  };

//  if (persons.age >= 16) {
//      persons.driver = 'Yes';
//  } else {
//      persons.driver = 'No';
//  }

// // The condition (persons.driver and persons.age) is what we are testing here //

// persons.driver = persons.age >= 16 ? 'Yes' : 'No'
// console.log(persons)



// // Using the boolean data type true it will initiate the the price is 8: True, else false.

// let isStudent = true;

// let price = isStudent ? 8 : 12
// console.log(price);

// let student = false;
// let isSenior = true;
// let cost = student ? 8 : isSenior ? 6 : 10
// console.log(cost); 

//Prototypal Inheritance Visualized//

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.length)

// //ES6

// function Dog(name, breed, color) {
//     this.name = name
//     this.breed = breed
//     this.color = color
//     this.bark = function() {

//     }
// }

// const dog1 = new Dog(
//     "Daisy",
//     "Labrador",
//     "black"
// )

// const dog2 = new Dog(
//     "Jack",
//     "Jack Russell",
//     "white"
// )

// Dog.prototype
// dog1.toString()

// const student = {
//     name: "Bob",
//     year: "one",
//     class: "SDV503"
// }

// console.log(student.name)
// student.name = "Matthew"
// console.log(student)

// const info = {
//     firstName: 'John',
//     lastName: 'Smith',
//     dateOfBirth: '1st DEC 2000',
//     friends: ['Bob', 'Tom']
// }

// console.log(info.friends[0])

// const example = {
//     nestedObj: {
//         name: 'Alex'
//     }
// }
// console.log(example)

// const anotherObj = new Object()

// console.log(anotherObj)

// const propsName = 'firstName'

// const objOne = {
//     [propsName.toUpperCase()]: 'Alex'
// }

// console.log(objOne)

// const objTwo = {
//     firstName: 'Alex',
//     lastName: 'Ali',
//     printFullName() {
//         //Remember Back Ticks ``//
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(objTwo.printFullName())

// console.log(objTwo.firstName)
// console.log(objTwo['firstName'])

// console.log(objTwo.hasOwnProperty('lastName'))
// console.log(objTwo.hasOwnProperty('address'))

// //Changing the 'Name' property witin an object//

// objTwo.firstName = 'Matt'
// console.log(objTwo.firstName)

// //Deleting a value within an object//

// const newProps = delete objTwo.firstName
// console.log(newProps)

// //or

// console.log(delete objTwo.firstName)
// console.log(objTwo.hasOwnProperty('firstName'))

// //Also

// const newProps = delete objTwo.firstName
// console.log(newProps)

// Week-6 class 2

// JavaScript call stack

// console.log("Hello!!")

// function greet() {
//     return "Hello from function"
// }

// const print = "My name"

// console.log(greet())

// let anotherVar = 5

// function firstFunction() {
//      throw new Error('Stack Trace Error');
// }
// function secondFunction(){
// firstFunction();
// }
// function thirdFunction(){
// secondFunction();
// }
// thirdFunction();

// const a = 60
// const b = 40

// function func(number) {
// return a + b
// }

// console.log(func())

// const greetStudent = () => { console.log('Hello Matt') }

// console.log(greetStudent())

//Non primitave data sit's within the heap
//(objects, arrays)

//Primiate data sits within the call stack
//(Boolean, numbers, strings, functions)

// const numbers = 0
// numbers = 1 + 2 + 3 + 4 + 5

//try to use const in this case
const numbers = []
numbers.push(1)
numbers.push(2)
numbers.push(3)
numbers.push(4)
numbers.push(5)

console.log(numbers)

// const importantID = 489
// importantID = 100

//When “importantID” is declared, 
//a memory address is allocated, and the value of 489 is stored. 
//Remember to think of the variable “importantID” as equalling the memory address.

const arr = [];

arr.push(1)
arr.push(2)

console.log(arr)
arr.push(4)

console.log(arr)
arr.pop()
console.log(arr)

//push(Value) adds to an array
//pop() removes the last item of the array

//Functions


function bottleCapper(String) {
    return bottle + cap;
}

bottleCapper('green bottle', 'white cap');
console.log(bottleCapper())

const a = 60
const b = 40

function func(number) {
return a + b
}

console.log(func());

function bottleCapper(bottle, cap) {
    return bottle + cap;
}
bottleCapper("green bottle", "white cap");
bottleCapper("5", 5);
bottleCapper(null, undefined);
bottleCapper(Symbol());
bottleCapper([]);
bottleCapper(bottleCapper("green bottle", "white cap"));

// DOESN'T WORK

const a = 10
const b = 20
const c = 30
const d = 40

function add(a, b, c, d) {
    return a + b + c + d
}

console.log(add());