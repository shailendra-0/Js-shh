const name ="shailu"

const repoCount=5

//console.log(name+repoCount+ " hi");


console.log(`hello my name is ${name} and my rep count is ${repoCount}`);

const gameName = new String('shailu')

console.log(gameName);
console.log(gameName.__proto__);


//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('u'));

const newString =gameName.substring(0,4)
console.log(newString);

//we cant satrt from -ve it starts from 0 only

const anotherString= gameName.slice(-8,1)
console.log(anotherString);

const newStringOne=" sdk   "
console.log(newStringOne);
console.log(newStringOne.trim());
//removes spaces frotn and back on line white space and line termintors


const url= "http://shailendra.com//s%20cheruku"
console.log(url.replace('%20','-'));

console.log(url.includes('shaillu'));