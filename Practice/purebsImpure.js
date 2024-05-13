let a = 2;
//impure function because it depends on external factor a;
function add(x){ 
    console.log(x+a);
    a++
}

add(2) 

//pure function because it doesnot depends on  any external factor and it gives the same output as input

function sqr(a){
    console.log(a)
}

sqr(2);
