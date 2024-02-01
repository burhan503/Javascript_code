//Here we are using Async Methods using setTimeOut 

// Basic example of setTimeout
function greet(){
    console.log('Hello Developers')
}
setTimeout(greet, 3000);
console.log('display first time console');

// second example of setTimeout 

function great(){
    let name = "Burhan Khan"
    let age = 27;
    console.log(`What is Your Name ${name} & Age is ${age}`);
    console.log(`Example second here 2`);
}
let interval_id = setTimeout(great,2000);
console.log('Your Interval ID Here',interval_id);

