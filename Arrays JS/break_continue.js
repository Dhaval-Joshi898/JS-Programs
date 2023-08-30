const num=[2,4,5,6,12,56,90,53,83,87,88]
let arr=[]
for(let n of num){
    if(n%2==0) {
        console.log(n)
        arr.push(n)
        if (arr.length===5){
            break;
        }
    }
    // console.log(arr)   it will print till [ 2, 4, 6, 12 ] this because it will not execute the the ocnsole after the break beacuse it has exited the loop because of break
}
console.log(arr)   //op [ 2, 4, 6, 12, 56 ]
//to print all values  other wise written inside the loop when break encountered it will not print the 5 fifth value because of break it will exit the loop

/***********CONTINUE *************************/
// This will print even numbers
const num1=[2,4,5,6,12,56,90,53,83,87,88]

for (let i of num1){
    if(i%2!==0){
        continue;   //if not divded by 0 continue  
    }
    console.log(i)  //this will print the same no need to put it in else block
    // else{
    //     console.log(i)    //dic=vide by 0 print here
    // }
}

