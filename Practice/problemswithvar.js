//variables declared with var are not block scoped they are function scoped

var a =31;
if(a===31){
    var b = 21;
    console.log(b);
}

console.log(b) //it will print the value of b we can access outside the block also

function test(){
    var c = 5;
    console.log(c);
}

console.log(c)  //it will throw an error the value of c we cannot be accessed outside the block also

