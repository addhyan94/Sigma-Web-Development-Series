console.log("Hey I'm Addhyan ...  \n We learn Conditionals Properties In JS ... "); 

// let number = 92;
let number = 82;

if (number>90) {
    console.log("Your Number is Match")
}
else{
    console.log("Your Number is Not Match")
    console.log("Try Again.... ")
    
}

// .................................................

let snum = 5;

number += snum;
console.log(number)
console.log(number + snum +" + Kiya gaya ")
console.log(number - snum +" - Kiya gaya")
console.log(number * snum +" * Kiya gaya")
console.log(number / snum +" / Kiya gaya")
console.log(number % snum +" % Kiya gaya")
console.log(number ** snum +" power lagayi gayi ")

// ...............................................................

// let age = 19;
let age = 5;
// let age = 15;

if (age>18) {
    console.log("You are adult");
}
else if (age <5 ) {
    console.log("you are a child ");
    
} else {
    console.log("You are not adult");
    
}

// termary operator ...........................

// let a =5;
let a =2;
let b =3;
let c = a>b ? (a+b) : (b-a) ;
console.log(c);

// ..........................................
/*
let c = a>b ? (a+b) : (b-a) ; 
            translates to : 

    if (a>b){
        let c = a+b;
    }
    else {
        let c = b-a;    
    }
       console.log(c); 
*/

