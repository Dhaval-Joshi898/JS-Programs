i=8
if (i===8){
    var ifVar='value of variable declared with "var"'
    let ifLet='value of variable declared with "let"'
    let ifConst='value of variable declared with "CONST" '
    console.log(ifVar)
    console.log(ifLet)
    console.log(ifConst);
}
//Now printing the variable outside the if block
console.log('Now printing the variable outside the if block')
console.log(ifVar)


// console.log(ifLet)   //The variable declared with var and let will not work outside the block scope they are defined to the particular blockscope
// console.log(ifConst);                        //if used out the block scope they will give error variable not defined 
