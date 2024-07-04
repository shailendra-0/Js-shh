//date

let myDate= new Date()

// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


//console.log(myDate.toJSON());

//let myCreateDate= new Date(2023,0,23,5,3 )

let myCreateDate = new Date("2024-3-15")
//console.log(myCreateDate.toLocaleString());


//time stamps

let myTimeStamp= Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getDay());

//`${newDate.getDay()} is and the `

newDate.toLocaleString('default',{
  weekday:"long"
})