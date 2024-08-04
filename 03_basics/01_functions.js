

function sayMyName(){
 
  console.log("s");
  console.log("h");
  console.log("a");
  console.log("i");
  console.log("l");
  console.log("u"); 
}


//sayMyName()

function calculateCartPrice(val1,val2,...num1){
  return num1
}
//console.log(calculateCartPrice(200,200,500,45,634));


const user={
  username:"hitesh",
  price:100
}


function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

  
}

//handleObject(user)
handleObject({
  username:"sam",
  price:399
})

const myNewArray=[200,0,100,345]

function returnSecondValue(getArray)
{
  return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,0,100,345]));
