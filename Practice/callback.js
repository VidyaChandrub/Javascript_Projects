//passing a function as argument to another function is a callback function

function printFn(fn, callback){
    console.log(fn)
    callback('chandru')
}

printFn('vidya',printSn);

function printSn(Sn){
    console.log(Sn)
}

