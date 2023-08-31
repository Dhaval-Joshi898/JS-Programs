var userName='Tom';
var age=8;
console.log(`username is: ${userName}`);
console.log(`age is: ${age}`);

function greetUser(name){
    var greet='I hope you are doing fine';
    console.log(`Hello, ${greet}`)
    var currentYear=2023;
    const Year=currentYear-age;
    return `Your Birth Year is ${Year}` ;
}

var birthYear=greetUser(userName)
console.log(birthYear)
