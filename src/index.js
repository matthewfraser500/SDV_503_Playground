
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


// function bottleCapper(String) {
//     return bottle + cap;
// }

// bottleCapper('green bottle', 'white cap');
// console.log(bottleCapper())

// const a = 60
// const b = 40

// function func(number) {
// return a + b
// }

// console.log(func());

// function bottleCapper(bottle, cap) {
//     return bottle + cap;
// }
// bottleCapper("green bottle", "white cap");
// bottleCapper("5", 5);
// bottleCapper(null, undefined);
// bottleCapper(Symbol());
// bottleCapper([]);
// bottleCapper(bottleCapper("green bottle", "white cap"));

// // DOESN'T WORK

// const a = 10
// const b = 20
// const c = 30
// const d = 40

// function add(a, b, c, d) {
//     return a + b + c + d
// }

// console.log(add());

//Week7 Functions

// Two arguments, return these arguments within an array

// function args(a, b) {
//     let arr = [a, b]
//     return arr
// }

// console.log(args(1,2))

// const args = (a, b) => [a, b]

// //const args = (...a) => a

// console.log(args(a, b))
// console.log(typeof args)

// args = {
//     firstName: "Matt",
//     lastName: "Fraser",
//     age: 24
// }

// console.log(args)

// // forloop ES6
// function oddOrEven(arr) {
//     let count = 0
//     arr.forEach(x => count +=x)
//     return count%2 === 0 ? "even" : "odd"
// }

// console.log(oddOrEven(arr))

// // forloop ES5
// function oddOrEven(arr) {
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         count+= arr [i]
//     }
//     if (count % 2 === 0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// }
// console.log(oddOrEven(arr))

//Shorter version of ES6
// const oddEven = (arr) => arr.reduce((a, b) => a + b, 0)% 2 === 0? "even" : "odd";

// console.log(oddEven(arr))

// let arr1 = ["3", "5.8"]
// let newArr = []

// function numberDatatype (arr1) {
//     return arr1.split(newArr)
// }

// console.log(numberDatatype(arr1))

// function arrToString(arr) {

// let str = ''
// for (let i = 0; i < arr.length; i++) {
//     str += arr [i]
// }
// return str
// }

// const arrToString = (arr) => arr.join('');

// function objToArr(obj) {
//     let arr = [];
//     for (let i in obj) {
//         arr.push([i, obj[i]]);
//     }
//     return arr
// }

// const objToArray = obj => Object.enteries(obj)

// function reverses(str) {
//     let arr = str.split('')
//     let revArr = arr.reverse()
//     let joinArr = revArr.join('')

//     return joinArr
// }

// function revString(str) {
//     if (str === '') {
//         return ''
//     }
//     else {
//         return revString(str.subString(1)) + str.charAt(0)
//     }
// }

//const revStr = (str) => str.length < 2 ? str : reverse(str.slice(1, str.length)) + str[0]

// ["215", true, false, 2, 2.1, [], null] => [String]


//This function prints the datatypes within the array
// function arrayDataType(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(typeof arr[i])
//     }
//     return newArr
// }

// console.log(arrayDataType(["215", true, false, 2, 2.1, [], null]))

// function arrayDataTypes(arr) {
//     return arr.map(x => typeof x)
// }

// const arrayDataType = arr => arr.map(x => typeof x)

// console.log(arrayDataType(["215", true, false, 2, 2.1, [], null]))

// function moveArrByOne(arr) {
//     let lastIndexValue = arr.pop()
//     arr.unshift(lastIndexValue)
//     return arr
// }

// console.log(moveArrByOne([20, 15, 68, 86, 1]))

// let moveArrByOne = arr => [arr.pop(), ...arr]

// console.log(moveArrByOne([20, 15, 68, 86, 1]))

// function nestedArrays() {
//     let newArr = [[], []]
//     for (let i = 0; i < arr.length; i++) {
//         if(parseInt(arr[i]) & 2 === 0) {
//             newArr[0].push(parseInt(arr[i]))
//         } else {
//             newArr[1].push(parseInt(arr[i]))
//         }
// } return newArr

// }

// console.log(nestedArrays(newArr))

//This refactors the nested array
//you can also use string instead of number but add a plus sign

// function nestedArrays(arr) {
//     let even = arr.map(Number).filter(x => x % 2 === 0);
//     let odd = arr.map(Number).filter(x => x % 2 !== 0);
//     return [even, odd]
// }

// console.log(nestedArrays(["9", "4", "5", "8"]))

/* function spaceString(str) {
    let arr = Array.from(str).join("")
    return arr
}

console.log(spaceString("Ali")) */

//These exercises will help with assessment 2

//Create a function that can concatanante any input of arrays where it is variable
//concat([1, 2, 3], [4, 5],)

//args repeats any number of arguments
//you can use forloops with arrays
//use concat result.concat here to concatinate

/* function firstFunc(...args) {
let result = [];
for (let i = 0; [i] < arguments.length; i++) {
 result = result.concat(arguments[i])   
}
 return result
}

console.log(firstFunc(result))

function esSixFunc(...args) {
    reutrn [].concat(...args)
}
*/

//Create a function that takes two numbers as arguments (num, length)
//(7, 5) => [7, 14, 21, 28, 35]


//i++ incrementes i
/*
function firstFunction(num, length) {
    let result = [];
    for(let i = 1; i <= length; i++) {
        result.push(num*1)
    }
return result
}

//ES6
function esSixFunc (num, length) {
    return [...Array(length).keys()].map((e, i) => (e+1)*num)
}

function ascDesFunc(array, string) {
    switch(string) {
        case "Asc":
            return arr.sort((a, b) => a - b)
            break
        case 'Des':
            return arr.sort((a, b) => b - a)
            break
        return arr
    }
}

const checkTrueOrFalse = (...args) => args.every(Boolean)

//Wrte a function that takes three arguments (x, y, z)
// (3, 2, 3) => [[3, 3], [3, 3], [3, 3]]
// 3 arrays, containg two numbers, values of 3

//The fill() method changes all elements in an array to a static value, 
//from a start index (default 0) to an end index (default array.length). It returns the modified array.

function subArrays(x, y, z) {
    return Array(x).fill(Array(y).fill(z))
}

//Create a function that takes an array of names and 
//returns an array where only the first letter of each name is capitalized

function capital(arr) {
 for (let i = 0; i < arr.length; i++) {
     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].toLowerCase().substring(1)
 }  
 return arr
}

//[AAAABBBBBBCCDDDAABB]

function removeFunc(x) {
    return Array.from(x).filter((e, i, a) => x !== a[i-1])
}

let esFiveFunc = function (x) {
    let newArr = []
    for(let i = 0; i < x.length; i++) {
        if (x[i] !== x[i+1]) {
            newArr.push(x[i])
        }
    }
    return newArr
}
*/

/*
function func(arr1, arr2) {
    for(let i = 0; i <= arr2.length; i++) {
        if (arr1[0] !== arr2[i]) {
            console.log("yeet1")
            return false
            
        }
        else if (arr1[1] !== arr2[i]) {
            console.log("yeet2")
            return false
            
        }
    }
    return true;
}

let arr1 = [1, 3]
let arr2 = [1, 3, 3, 5]

console.log(func(arr1, arr2))
*/

/*
function calc(num1, operator, num2) {
//The object here sets up the mathmatical operators 
    operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b 
    }
    return operations[operator][num1, num2]
} console.log(calc(num1, num2))
*/
function sum(input){
           
    if (toString.call(input) !== "[object Array]")
       return false;
         
               var total =  0;
               for(var i=0;i<input.length;i++)
                 {                  
                   if(isNaN(input[i])){
                   continue;
                    }
                     total += Number(input[i]);
                  }
                return total;
               }
   console.log(sum([1,2,3]));
   console.log(sum([100,-200,3]));
   console.log(sum([1,2,'a',3]));