console.log(i)
var i=5;
//let i=5;   ReferenceError: Cannot access 'i' before initialization

greet()   //function hoisting invoking function before declaring
//O/P: Hello undefined,How are you?


greet('Tom')
// O/P : Hello Tom,How are you?
function greet(name){
    console.log(`Hello ${name},How are you?`)
}

