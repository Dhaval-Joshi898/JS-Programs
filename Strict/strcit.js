'use strict'
var a=6;
console.log(a)

console.log('After redeclaring variable with var')
var a=10;
console.log(a)



console.log('Variable with let declaration')


let b=9;
console.log('variable with let declaration',b)

// varaible with declared with let cannot be redeclared
if(true){
    c=5;
    console.log('inisde if block',c)
}
console.log(b)
