// console.log(2+10);

var prompt = require('prompt-sync')();

// const age=[22,10,54,32,11];

// const newAge=age.filter((age)=>{
//     return age>20;
// });

// console.log(newAge);

const age=prompt("enter your age");
if(age>18)
    console.log('you can have sex');
else 
console.log('be a virgin'); 