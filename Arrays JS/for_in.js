let students = ['Raj', 'Rahul', "Bobby", "Tina", "Alex"]

for(let i in students){
    console.log(`Roll No ${+i +1} is: ${students[i]}`)   
    //converted {i} string to number using unary operator + before i  can use Number(i) to convert
    // console.log(typeof i,i)   
    /******i type is string [ ARRAYS can take students['i'] sting vlaue index and coerce it to number type*********/
}
// console.log('2'- 1) coerce string'2' to number2

