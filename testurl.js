function URLconstructor(queryParameters, domain, path) {
    let url = 'https://' + domain + path;
    let isFirstQueryParam = true;
 
    
    
    // let url='';
    // url+='https://';
    url+=domain;
    url+=path;
   
    for(let i in queryParameters){
        url+=`?`;
        url+=i;
        url+='=';
        url+=queryParameters[i];
        
    }
    console.log('i--------------',url)
    
    
    
    
    // Checking for input with empty queryParameters

    for (let key in queryParameters) {
        if (isFirstQueryParam) {
            url += `?${key}=${queryParameters[key]}`;
            isFirstQueryParam = false;
        } else {
            url += `&${key}=${queryParameters[key]}`;
        }

    }
    console.log('key-------------',url)
    return url;
}

const queryParameters = { name: 'John', age: '28' };
const domain = "google.com";
const path = '/search';
console.log(URLconstructor(queryParameters, domain, path));
