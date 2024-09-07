const PromiseOne= new Promise(function(resolve,reject){
    //do an async task
    //db calls,cryptography, network call. 
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    },1000)
})


PromiseOne.then(function(){
    console.log("promise consumed");
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async 2");
        resolve()

    },1000)
}).then(function(){
    console.log("async is resolved");
    
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"chai",email:"dsf@mail.com"})//can pass arr or anything
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"shailu", password:"123"})
        }
        else{
            reject('ERROR: something went wrong ')
        }

    },1000)
})
promiseFour.then((user)=>{
    console.log(user)
    return user.username;

}).then((username)=>{
console.log(username);

}).catch(function(error){
    console.log(error);
    
}).finally(()=>console.log("promise is either resolved or rejected")
)

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"JS", password:"123"})
        }
        else{
            reject('ERROR: JS went wrong ')
        }

    },1000)

});

 //directly dosent handle errors
 //directly dosent handle errors
//  const response=await promiseFive
//  console.log(response);
async function consumePromiseFive() {
    try{
        const response=await promiseFive
        console.log(response);
        
    }
    catch(error){
        console.log(error);
        
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response=await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data=await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log('E: ',error);
        
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})