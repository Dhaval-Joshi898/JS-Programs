function main(email) {
    let result;

    const emailLen = email.length;
    const dotIndex = email.lastIndexOf('.');
    const atIndex = email.lastIndexOf('@');
    const lastIndex = emailLen - 1;

    if (
        emailLen >= 11 &&
        lastIndex - dotIndex >= 2 &&
        lastIndex - dotIndex <= 3 &&
        dotIndex - atIndex >= 3 &&
        atIndex >= 3
    ) {
        result = "email  is valid";
    } 
    else {
        result = 'Invalid Email';
    }

    return result;
}

// Test the function with an example email
const testEmail = "xyz@gmail.com";
const testResult = main(testEmail);
console.log(testResult);
