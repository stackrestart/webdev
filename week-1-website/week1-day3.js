var a = 1;
a = "ashwik";
a = true;

console.log(a)

let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let numbers = [1, 2, 3];     // Array

let sum = 10 + 5;          // Arithmetic operator
let isEqual = (10 === 10); // Comparison operator
let isTrue = (true && false); // Logical operator

function greet(name) {
    return "Hello, " + name;
}

// Function call
let message = greet("Ashwik"); 

for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs 0 to 4
}

// While loop
let j = 0;
while (j < 5) {
    console.log(j); // Outputs 0 to 4
    j++;
}

const users = [{
		name: "Harkirat",
		age: 21
	}, {
		name: "raman",
		age: 22
	}
];

const user1 = users[0] 
const user1Age = users[0].age

const user12 = {
	name: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}

const city = user12.address.city;