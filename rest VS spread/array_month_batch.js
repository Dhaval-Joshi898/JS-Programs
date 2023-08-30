const april=['Alex','Raj'];
const may=['jai','Rahul'];
const june=['tom','Jerry'];
const july=[];

function addStudent(batch,students){
    batch.push(students)
    return batch
}

console.log(addStudent(april,'DJ'))   //question given to solve

// for( i of april){
//     july.push(i)
// }
// console.log(july)


function info(batch,students){
    for (i of students){
        batch.push(i)
    }
    return batch

}
console.log(info(april,students))
