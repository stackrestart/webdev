function logName(){
    console.log("Ashwik");
}
setTimeout(logName,1000); // example 

//callback based approach ex:setTimeout()
// promise based approach // a little cleaner approach

// defining a promise is hard, using a promise is easy


// returns an object of the promise class
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms)); // returns the object of the promise class
}

function afterDone() {
	console.log("5 seconds have passed");
}

//promise based approach
setTimeoutPromisified(5000).then(afterDone) // syntactically cleaner 


// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// break it 

function waitFor3s(resolve){
    setTimeout(resolve,3000);
}
function main(){
    console.log("Main is called");
}

waitFor3s(main);

function waitFor7sec(resolve){
    setTimeout(resolve,7000);
}

function setTimeoutPromisified1(){
    return new Promise(waitFor7sec);
}

function main1(){
    console.log("main is called again");
}

setTimeoutPromisified1().then(main1);