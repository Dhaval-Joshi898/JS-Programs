//Deafult parameter in function

function  sum(num1=0,num2=0){
    
    // a="Addition of two number is:"+(num1+num2);
    console.log(`Addition of two number is: ${num1+num2}`);   //using backtick you can also concatenate string and insert variable
   

}
sum(2,3);
sum(); //here i have not given any argument to the function then it will consider the default argument