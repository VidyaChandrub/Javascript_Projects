//unpacking values of array, object into distinct variables

let arr = ['hi','hello','i','gm'];

let [a,b,c,d]= arr;
console.log(a);
console.log(b);

let obj = {
    name:'vidya',
    age:22,
    gender:'female',
    address:{
        city:'bangalore',
        pincode:37
    }
}

// let {e,f,g} = obj;  //output undefined , in order to print the values of obj we need to pass the same name as key in obj
// console.log(e);

// let {name,age,gender}=obj;
// console.log(name);
// console.log(age); // output 22

//if we want to specify specfic name we can do by this way

// let{name:n, age:h, gender:g}=obj;
// console.log(n);
// console.log(h);
// console.log(g);

//how to desturcture nested element

let {name,age,gender,address:{city,pincode}}=obj;
console.log(address);
// console.log(city);
// console.log(pincode);
