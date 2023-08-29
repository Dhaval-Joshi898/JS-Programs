//Create the isValidIdentifier function 

function isValidIdentifier(input){
    if(input.startsWith('_')  ||  input.startsWith('$') ||
       /^[a-z]/.test(input) ){
        console.log(`${input}  is a valid Identifier.`)
    }
    else{
        console.log(`${input}  is a not a valid Identifier.`)
}
    
    
    
}
isValidIdentifier("myVariable"); // Logs: myVariable is a valid identifier.
isValidIdentifier("123abc"); // Logs: 123abc is not a valid identifier.
isValidIdentifier("_pr&ivate"); // Logs: _pr&ivate is not a valid identifier.

/*
Certainly! (/^[a-z]/.test(input)) is a JavaScript expression that uses a regular expression to test whether the input string starts with a lowercase letter (a to z).

Here's a breakdown of the expression:

/^[a-z]/: This is a regular expression pattern enclosed within forward slashes. It matches any character from a to z at the start of the string. The ^ symbol at the beginning of the pattern indicates that the match should occur at the start of the string.

.test(input): This is a method call on the regular expression pattern. The .test() method is used to test if the pattern matches the provided input string. It returns true if there is a match at the beginning of the input string; otherwise, it returns false.
*/