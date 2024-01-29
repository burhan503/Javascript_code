const ticket = new Promise(function(resolve, reject){
    const inBoarding = true ;
    if(inBoarding){
        resolve('Your ticket is confirmed Please check your Status')
    }else{
        reject("Sorry its cancel")
    }
})
ticket 
    .then((data)=>{
        console.log("Status OK Check PNR",data);
    })
    .catch((data)=>{
        console.log("its failed",data)
    })
    .finally(()=>{
        console.log("Error not found")
    })