const p = new Promise(promiseFn);
function promiseFn(resolve){
    let c = 0;
    for (let i = 0; i < 1000000; i++){
        c++;
    }
    resolve("hi there ashwik");
}
p.then(callback);
function callback(str){
    console.log(str);
}