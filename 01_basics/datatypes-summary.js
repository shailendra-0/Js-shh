// Primitive

//7 ytpes: Stirng.Number,Boolean,nuull,undefined ,symbol,BigInt

const score=100
const scoreValue= 100.3

const isLoggedIn= false
const outsideTemp=null
let userEmail;


const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);


// Refrence(non Primitive)

//Array,Objects, Functions

const heros=["shailu", "bhavuk","ayush"]


//object is a key value pair 

let Obj={

    name:"shailu",
    age: 22 
}


const myfun = function(){
    console.log("hello");
}



//to find data type

console.log(typeof myfun);


//stack,heap

// primitive use stack

// heap used by non primitive

