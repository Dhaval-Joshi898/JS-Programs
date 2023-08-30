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