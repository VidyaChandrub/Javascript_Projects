//check sqauare of number is even or not

//imperative way of writing code 

let a = 5;

let sqrNum = a*a;

let isEven;

if(sqrNum % 2 == 0){
    isEven=true;
}else{
    isEven=false;
}

console.log(isEven)

//Declaritive way of writing code

let squareofNum = (x) => (x*x % 2 === 0 ? true : false)

console.log(squareofNum(6));