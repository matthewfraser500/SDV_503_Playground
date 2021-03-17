
/*
//TODO Javascript Variables
console.log('Hello SDV503')
console.log('Matthew Fraser')

//Declaring variables first name and assign a value string
let firstName = 'Matthew'
let lastName = 'Fraser'
let fullName = firstName + ' ' + lastName //ES5 
    fullName = `My full name is ${firstName} ${lastName}` //ES6


//Console.log firstName + lastName prints MatthewFraser into the terminal 
console.log(fullName)


##Week4 - class one

 let c;

if(c < 0) {
    console.log('Ali')
}
else {
    console.log('Error')
}

console.log(c)

x = "1234567"
let y = Number(x)
console.log(x)
console.log(Number(x))
console.log(typeof y)

const a = 1 + 1
console.log(a)
let Matt
console.log(Matt)

//Storing information using object
const information = {
    student: "Ali",
    country: 'Iraq',
    city: 'Nelson',
    postcode: 7010
}
console.log(Object)


const personalInformation = {
    Name: 'Matthew',
    Age: '24',
    City: 'Nelson',
    Occupation: 'Student'
}

console.log(personalInformation)


let c = 12

//OR logic gate
if (c === 11 || typeof c === 'number') {
    console.log('True')
} else {
    console.log('error')
}

//NOT logic gat

let b = 15

if (b != 12) {
    console.log('its true')
} else {
    console.log('ERROR')
}
*/

/*
let a = 5
let b = a
console.log(a)
console.log(b)
console.log(a === b)
console.log(a)
console.log(b)
console.log(a === b)
*/ 

//## Week4 Class 2

let country = "New Zealand";
let city = "Nelson";
let postcode = 7010;

let isIsland = false
let language

//typeof allows us to determine a datatype

console.log(typeof isIsland)
console.log(typeof languague)

console.log(city + ' ' + country + ' ' + postcode);

language = "English"

language = {
    name: "Matthew",
    city: "Nelson",
    country: "New Zealand",
    postcode: 7010
}

postcode++


console.log(typeof(language))

//How to access and object

console.log(language.city)
console.log(language.country)
console.log(language.name)


//Below shows you can change an object even if const has been used
const brands = {
    converse: "All-Star",
    Doc: "Martin",
}
console.log(brands)
console.log(converse = "Star")

console.log(city + " " + country + " " + postcode)

//This is how you create a string template !!important to remember back ticks
console.log(`${city} ${country} ${postcode}`)

//if else statements, if & else are keywords // === is refered to "hard equals" //

// you can add as many if statements you like using else if // 
if(postcode === 7011) {
    console.log('Nelson')
} else if(postcode === 7020) {
    console.log('Richmond')
} else {
    console.log('Write city name')
}

let a = 'A+'
let b = 'B+'

let studentOne = 75

if (studentOne >= 70 && studentOne <= 80 ) {
    console.log(b)
} else if (studentOne < 70) {
    console.log('c')
}

console.log(24 >= 24)
console.log(25 < 26)

//This returns false because the comparision is false between datatypes//
console.log('24' === 24)
console.log(24 !== 24)
console.log('24' == 24)

console.log(0 == false)
console.log(1 == true)
console.log(2 == true)

const x = {
    city: 'Nelson'
}

const y = x

console.log(y.city)
