function main(jobTitle, yearsOfExperience) {
    let accessLevel;
    //write your code here
      
      if(jobTitle==='Manager'){
          accessLevel= "Full Access";
      }
      else if(jobTitle==='Supervisor' && yearsOfExperience>=5){
           accessLevel= "Full Access";
      }
      else if (jobTitle==='Supervisor' && yearsOfExperience<=5){
          accessLevel= "Partial Access." 
      }
      else if (jobTitle==='Associate' && yearsOfExperience>=3){
          accessLevel= "Partial Access";
      }
      else if (jobTitle==='Associate' && yearsOfExperience<=3){
          accessLevel= "Limited Access."
      }
          
      else if (jobTitle=== jobTitle && yearsOfExperience>=2){
          accessLevel= "Limited Access.";
      }
      else if  (jobTitle=== jobTitle && yearsOfExperience<=2){
          accessLevel= "Trainee Access."
      }
          
          
  
  
    return accessLevel;
  }
  
      
  let jobtitle="Manager";
  let yearsOfE=2;
  assign=main(jobtitle,yearsOfE)
  console.log(assign)