function reverseString(str){
    
        const splitStr=str.split('');
        splitStr.reverse()
        const revString=splitStr.join('')
        return revString;
        
    }
    console.log(reverseString("Hello"));
    //Output : "olleH"