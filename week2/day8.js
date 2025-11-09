// function waitFor3S(resolve){
//     console.log("reached here");
//     setTimeout(resolve, 3000);
// }
// function main(){
//     console.log("main is called");
// }

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