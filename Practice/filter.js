// returns a new array with elements which satisfied the given condition
let arr = [1,2,4,5,8,7,9];

let fliteredArray = arr.filter((a)=>{
    return a%2 == 0
})

console.log(fliteredArray);