//Create the isValidIdentifier function 

/*************** CORRECT CODE *************************/

function isValidIdentifier(input) {
    if ((input.startsWith('_') || input.startsWith('$') || /^[a-zA-Z]/.test(input)) && !/[^\w$]/.test(input)) {
        console.log(`${input} is a valid identifier.`);
    } else {
        console.log(`${input} is not a valid identifier.`);
    }
}

isValidIdentifier("myVariable");   // Logs: myVariable is a valid identifier.
isValidIdentifier("123abc");      // Logs: 123abc is not a valid identifier.
isValidIdentifier("_pr&ivate");   // Logs: _pr&ivate is not a valid identifier.


/*
/^[a-zA-Z]/.test(input): This regular expression tests whether the input string starts with a letter (either uppercase or lowercase), just like in the previous explanation.

!/[^\w_$]/.test(input): This regular expression tests whether the input string contains only specific characters. It checks that there are no characters that are not in the set [a-zA-Z0-9_], as represented by \w, and also not the underscore _ and the dollar sign $.

In summary, the corrected code is checking whether the input string:

Starts with a letter (uppercase or lowercase), and
Contains only letters (uppercase or lowercase), digits (0-9), underscores, and the dollar sign ($). */








// ---------------------------------------------------------------------------------------------------------------------------------------

// function isValidIdentifier(input){
//     if(input.startsWith('_')  ||  input.startsWith('$') ||
//        /^[a-z]/.test(input) ){
//         console.log(`${input}  is a valid Identifier.`)
//     }
//     else{
//         console.log(`${input}  is a not a valid Identifier.`)
// }
    
    
    
// }
// isValidIdentifier("myVariable"); // Logs: myVariable is a valid identifier.
// isValidIdentifier("123abc"); // Logs: 123abc is not a valid identifier.
// isValidIdentifier("_pr&ivate"); // Logs: _pr&ivate is not a valid identifier.

/*
Certainly! (/^[a-z]/.test(input)) is a JavaScript expression that uses a regular expression to test whether the input string starts with a lowercase letter (a to z).

Here's a breakdown of the expression:

/^[a-z]/: This is a regular expression pattern enclosed within forward slashes. It matches any character from a to z at the start of the string. The ^ symbol at the beginning of the pattern indicates that the match should occur at the start of the string.

.test(input): This is a method call on the regular expression pattern. The .test() method is used to test if the pattern matches the provided input string. It returns true if there is a match at the beginning of the input string; otherwise, it returns false.
*/

// THE ABOVE CODE IS NOT CORRECT OFR CERTAIN VARIABLE

