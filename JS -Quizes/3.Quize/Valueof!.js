let a =6;

function factorial(number){
    let array = Array.from(Array(number+1).keys())
    console.log(array.slice(1,));
  // let rt = array.slice(1,).reduce((a, b)=>a*b);//Ye shortcut hai .. OR dono ka kaam ek he hai 
   let rt = array.slice(1,).reduce((a, b)=>{
        return a*b;
    })
    return rt;
}
console.log(factorial(a));


// Using For loop .................................
function factfor(number){
    let fact=1;
    for (let i = 1; i <= number; i++) {
        fact = fact *i;
    }
    return fact;
}
console.log(factfor(8))