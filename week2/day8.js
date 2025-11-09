function waitFor3S(resolve){
    console.log("reached here");
    setTimeout(resolve, 3000);
}
function main(){
    console.log("main is called");
}

// waitFor3S(main);

// Now lets try setTimeoutPromisfied

function waitFor3S(resolve){
    setTimeout(resolve, 3000);
}
function setTimeoutPromisfied(){
    return new Promise(waitFor3S);
}
function main(){
    console.log("main is called");
}

setTimeoutPromisfied().then(main);

function random(resolve){ //resolve is also a function
    // resolve(); // this make sure its immedietely resolved as soon as called
    setTimeout(resolve,3000);
}
let p = new Promise(random); // supposed to return something eventually

// using the eventual value returned by the promise
function callback(){
    console.log("Promise succeeded");
}
p.then(callback);


//create a promisified version of fs.readFile, fs.writeFile, cleanFile

//promisified version of readFile

const fs = require("fs");

function readFile(fileName){
    return new Promise(readTheFile);
}

function readTheFile(SendFileHere){
    fs.readFile("a.txt","utf-8",function(err,data){
        SendFileHere(data);
    })
}

const q = readFile();

q.then(callback);

function callback(contents){
    console.log(contents);
}