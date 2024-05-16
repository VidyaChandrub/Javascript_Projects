// find methods returns the first element of array that satisfies the given condition

let arr  = [10,20,-6,40,-32];

let firstWithdrawl = arr.find(function(a){
    return a < 0;
})

console.log(firstWithdrawl)

// findindex = it returns the index of an array element that satisfies the condition
let firstWithdrawlIndex = arr.findIndex(function(a){
    return a < 0;
})

console.log(firstWithdrawlIndex);

//some - returns true or false - returns true if atleast  1 element of array satisfied the condition

let resultSome = arr.some((a)=>{
    return a<0
})

console.log(resultSome);

//every - returns true or false - returns true if all the element of array satisfied the condition

let resultEvery = arr.every((a)=>{
    return a<0
})

console.log(resultEvery);