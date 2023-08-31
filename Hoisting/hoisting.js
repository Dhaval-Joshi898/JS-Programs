console.log(i)
var i=5;
//let i=5;   ReferenceError: Cannot access 'i' before initialization

greet()   //function hoisting invoking function before declaring

function greet(name){
    console.log(`Hello ${name},How are you?`)
}

