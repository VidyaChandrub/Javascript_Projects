//console.log(this)  // empty object

// function displayThis(){
//     console.log(this) 
// }
// displayThis();  //global object


// let myObj = {
//     name: "vidya",
//     age: 22,
//      myFunction : function(){
//         console.log(this.age);
//      }
// }

// myObj.myFunction(); // refers to myobj itself

// let myObj1 = {
//     myfun : function(){
//         function name(){
//             console.log(this)
//         }
//         name()
//     }
// }

// myObj1.myfun()  // global object

let myfn = () =>{
    console.log(this);
}

myfn();