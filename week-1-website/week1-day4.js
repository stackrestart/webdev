function sum(a,b){
    return a+b;
}
let ans = sum(2,3);
// console.log(ans)

function sum1(n){
    let addition = 0;
    for(let i = 1; i <= n; i++){
        addition = addition + i;
    }
    return addition;
}
let ans1 = sum1(10);
// console.log(ans1);


const fs  = require("fs");
const contents = fs.readFileSync("a.txt","utf-8") // Read file Synchronously
// console.log(contents); // Dont use this , for input-output bound tasks , use asynchrously

var user = {
    name : "ashwik",
    age: 21,
    city: "hyderabad",
    calculateAge: function(){
        return 21;
    }
}
// console.log(user.calculateAge());

function divide(a,b){
    return a/b;
}
function multiply(a,b){
    return a * b;
}

function doOperation(a,b,op){
    return op(a,b);
}

// console.log(doOperation(2,3,multiply)); // this is functional operation where we pass another function as an argument to this function



function afterFileRead(err,contents){
    // console.log(contents);
}
fs.readFile("a.txt","utf-8",afterFileRead); //here afterFileRead function is called a callback function
fs.readFile("b.txt","utf-8",afterFileRead);
// console.log("Done");

function timeout(){
    console.log("click the button");
}

console.log("Hi")
setTimeout(timeout,1000); //IO intensive // even though this code is 1 sec, and the expensive operation from for loop is 5 sec approx, this timeout is executed first because thread is not free
console.log("Welcome")
// 3-4 sec
let c = 0;
for(let i = 0; i < 10000000000; i++){
    c= c+1
}
console.log("Expensive operation done"); //CPU intentive

//output
// Hi
// Welcome
// Expensive operation done
// click the button

// when doing cpu intensive task, that is executed first, then only input output tasks start