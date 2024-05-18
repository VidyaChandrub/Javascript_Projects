// chaining is basically taking output from one method and passing it as input another method

let arr = [
    {name:"A",age:14,gender:"M"},
    {name:"B",age:24,gender:"F"},
    {name:"C",age:24,gender:"F"},
    {name:"D",age:34,gender:"M"},
    {name:"E",age:22,gender:"M"},
    {name:"F",age:32,gender:"F"},
    {name:"G",age:18,gender:"M"},
    {name:"H",age:22,gender:"M"},
];

//AGES OF ALL THE MENS

let agesOfMale = arr.filter((obj)=>{
    return obj.gender == "M";
}).map((male)=>{
    return male.age;
})

console.log(agesOfMale)


//from the tanscation array filter out positive elements and calculate sum;

const trans = [1000,2000,3000,4000,-898,3800,-4500];

let postiveSum = trans.filter((t)=>{
    return t>0;
}).reduce((acc,value)=>{
    return acc+value;
},0);

console.log(postiveSum);