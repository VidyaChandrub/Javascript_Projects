// without reduce imperative way 

//sum of each element of a array

let arr = [1,2,3,3,5];

// let sum = 0;

// for(let i=0; i<arr.length; i++){
//     sum=sum+arr[i];
// }

// console.log(sum)

//reduce - it always returns a single value , it takes 4 arguments, generally we use 2 which are accumalator and value;

let sum = arr.reduce((accumalator,value)=>{
    return accumalator+value;
},0)

console.log(sum)
