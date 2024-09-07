let myName="hitesh        "


console.log(myName.truelength);

let myHeros=["thor","spiderman"]


let heroPower={
    thor:"hammer",
    spiderman:"sling",


    getSpiderpower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        

    }
    
}
heroPower.getSpiderpower()

Object.prototype.hitesh=function(){
    console.log(`hitesh is present everywhere`);
    
}
Array.prototype.heyHitesh= function(){
    console.log(`hitesh says hello`);
    
}

// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh()



//inheritance

const User={
    name:"chai",
    mail:"mail@.com"
}
const Teacher={
    makeVedio:true

}


const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User

//uppper one is old one


Object.setPrototypeOf(TeachingSupport,Teacher)
// teachig support gets all teachers properties



let anotherUserName="Chaiaurcode             "
String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
    
    
    
}
anotherUserName.truelength()
"shailu".truelength()
