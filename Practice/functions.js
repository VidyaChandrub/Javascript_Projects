// function greet(){
//     console.log("Hello");
// }

// greet();

//function as Expression also anonymus function

// var add = function(a,b){
//     return a+b;
// }

// var result = add(4,5);
// console.log(result);

//hoisting

// console.log(a);

//  var a = "hello"

//  b = 1
//  console.log(b);
//  var b;

function checkAge(data) {
    if (data === { age: 18 }) {
    console.log("You are an adult!");
    } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
    } else {
    console.log(`Hmm.. You don't have an age I guess`);
    }
   }
   
   checkAge({ age: 18 });