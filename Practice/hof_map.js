// sqr each number of array

// let arr = [1,2,3,4,5]

// let sqrArr = [];

// for(let i=0; i<arr.length; i++){
//     sqrArr.push(arr[i]*arr[i]);
// }

// console.log(sqrArr);

//higher order function - which takes the function as argument or return as output

let arr = [1, 2, 3, 4, 5];

let sqrArr = arr.map((a)=>{
    return a*a;
})

console.log(sqrArr);

//IT DOES NOT RETURN ANYTHING 
let sqrArr1 = arr.forEach((a)=>{
     console.log(a*a);
})
