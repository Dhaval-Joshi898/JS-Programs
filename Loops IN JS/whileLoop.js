/*While loop example*/
let num=12345;
while(num!==0){
    n=num%10;     //to get the last digit this will give remainder
     
    num=parseInt(num/10);   //tp get the new quotient so this will remove last digit.
    console.log(n)

}
//This program will print Output as:
/*
5
4
3
2
1*/