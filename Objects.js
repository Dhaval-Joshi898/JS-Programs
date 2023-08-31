const student = {
  name: 'Alexa',
  age: 10,
  hobby: 'Dancing',
  100: 'hundred',
  show: function() {    //anonymous function i.e function without the name while calling or invoking function we will use key name i.e 'show' 
    console.log('This is the Student details section.');
  }
}

console.log(student);

//Different ways to write but will give same output 
console.log(student.name);   
console.log(student['name']);   //in writing this format key is written innstring i.e inside ''
console.log(student[100]);
student.show();
