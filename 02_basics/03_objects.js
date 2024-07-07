  //singleton
  //object.create


//object literals

const mySym =Symbol("key1")

const JsUser= {
  name:"shailendrA",
  "full name": "ch shailendra",
  [mySym]: "mykey1",
  age:22,
  location: "jagtial",
  email: "shialendra@gmail.com",
  isLoggedIn:false,
  lastLoggedInDays: ["Monday","saturday"]


}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email="shailu@gmail.com"
//Object.freeze(JsUser)
//JsUser.email="ssdfasd@mail.com"
//console.log(JsUser.email);

// console.log(JsUser);

JsUser.greeting=function()
{
  console.log("hello Js User ");
}
JsUser.greetingTwo= function(){
  console.log(`hello JS user ,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());