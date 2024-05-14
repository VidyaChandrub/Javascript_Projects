//passing a function as argument to another function is a callback function

function printFn(fn, callback){
    console.log(fn)
    callback('chandru')
}

printFn('vidya',printSn);

function printSn(Sn){
    console.log(Sn)
}

//

let isEven=(n)=>{
    return n%2==0;
}

let printEven = (evenfn, num) =>{
    const evnNum = evenfn(num);
    console.log(`the ${num} is even number ${evnNum}`)
}

printEven(isEven, 3);
