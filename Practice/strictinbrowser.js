'use strict'
// console.log(this);  //window obj

// function displayThis(){
//     console.log(this) 
// }
// displayThis(); // undefined

// let myObj = {
//         name: "vidya",
//         age: 22,
//          myFunction : function(){
//             console.log(this);
//          }
//     }
    
//     myObj.myFunction();  //object itself


let myObj1 = {
    myfun : function(){
        function name(){
            console.log(this)
        }
        name()
    }
}

myObj1.myfun()  // window object
