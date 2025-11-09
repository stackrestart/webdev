function setTimeoutPromisfied(duration){
    return new Promise(function (resolve){
        setTimeout(resolve, duration);
    });
}

setTimeoutPromisfied(1000).then(function(){
    console.log("hi");
    return setTimeoutPromisfied(3000)
}).then(function(){
    console.log("hello");
    return setTimeoutPromisfied(5000);
}).then(function(){
    console.log("hi there");
});

console.log("outside call back hell");


function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve() {
	await setTimeoutPromisified(1000);
	console.log("hi");
	await setTimeoutPromisified(3000);
	console.log("hello");
	await setTimeoutPromisified(5000);
	console.log("hi there");
}

solve();


const fs = require("fs");

function readFilePromisified(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        reject("Error while reading file");
      } else {
        resolve(data);
      }
    });
  });
}

function onDone(data) {
  console.log(data);
}

function onError(err) {
  console.log("Error: " + err);
}

readFilePromisified("a.txt").then(onDone).catch(onError);
