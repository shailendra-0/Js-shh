// immediately involed function expressions


(function chai(){
  //named iife
  console.log('db connected');
})();

((name)=>{
  console.log(`db connected to ${name}`);
  
})('shailu')