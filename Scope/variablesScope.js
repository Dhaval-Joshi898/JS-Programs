var aGlobal=12;
let bGlobal=13;
const cGlobal=14;
console.log(aGlobal)
console.log(bGlobal)
console.log(cGlobal)


function local(){
    var locala='local A';
    let localb='local B';
    const localc='local C';
    console.log(locala)
    console.log(localb)
    console.log(`Calling global scope variable inside function i.e (local scope) global variable is ${cGlobal}`)
}
local()

// THe local variable declared inside the function cannot be accesed outside the function
// e.g. console.log(localb)

//BLock Scope  {}anything inside this is a block scope for is block if else function or anyhting else containing {}

{
    var blockFirst=5;
    let blockSecond=10;
    const blockThird=15;
    console.log(blockFirst)
    console.log(blockSecond)
    console.log(blockThird)
}

//Print the variable declared in block scope{}
console.log('Print the variable declared in block scope{}')

console.log(blockFirst)  //printing varaible declared with 'var'


console.log(blockSecond)   //printing varaible declared with 'let'
console.log(blockThird) //printing varaible declared with 'const'


// let and const are block scope
//The variable declared with var and let will not work outside the block scope they are defined to the particular blockscope
//if used out the block scope they will give error variable not defined 



//*************************************Note **********************************************************/
// 1. var,let and const are functional scope  (loiskey we say local scope ) but it is functional scope

// 2. let and const are block scope also
