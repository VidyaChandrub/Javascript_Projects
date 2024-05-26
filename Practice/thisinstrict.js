'use strict'

//console.log(this); //empty object

// function displayThis(){
//     console.log(this);
// }

// displayThis();  //undefined

// let obj = {
//     name:"vidyac",
//     age:22,
//     myfunction: function(){
//         console.log(this.name);
//     }
// }

// obj.myfunction(); // object itself

let myObj1 = {
    myfun : function(){
        function wish(){
            console.log(this)
        }
        wish()
    }
}

myObj1.myfun() //undefined