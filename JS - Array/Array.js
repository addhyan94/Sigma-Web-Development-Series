console.log("Aapna padh rahe hai aaj Arry Bala topic... ")
let array = [1,2,3,4,5,6];
// index-->  0,1,2,3,4,5

console.log(array);
console.log(array.length+" <- Array ki length ... ");

//array mutable hota hai to array ko kahi bhi change kr sakte hai jese ki uper index dikhayi gayi hai uke accodinng change hota hai 

array[1]=255;
// array ke 1 index per 255 change ho jayega 
console.log(array);

// Array ka type pata karne ke liye 

console.log(typeof array +" <-- Array ka Type hai ye ...");

// Array ko string me bhi convert kar sakte hai using tostring function ...

console.log(array.toString() +" <-- Array ko String me change kiya .. ")

// Array ke aander kuch bhi join karane ke liye 

console.log(array.join(" & ") +" <-- Array ke aander & ko Join kar diya .. ")

// kisi bhi last ke element ko delete karne ke liiye only use web ...

/*
console.log(`Array is : ${array}`)
console.log(array.pop() =" <-- Array me se last ka element delete ho gaya ")
*/


// Simmaler pop jesa he ek Push hota hai jo push me likhe gaye element ko last me push kr deta hai matlb dal deta hai ..only use web ...
/*
let a=[1,2,3,4]
console.log(`Array is : ${a}`)
console.log(a.push("Hello") =" <-- Array ke last me element add kr dta hai ")
*/

// kisi bhi suru ke element ko delete karne ke liiye.. only use web ...

/*
console.log(`Array is : ${array}`)
console.log(array.shift() =" <-- Array me se suru ka element delete ho gaya ")
*/

// Simmaler to PUSH ... jab push use karte hai to element last me add hota hai or jab unshift use karte hai to element suru me add hota hai ... only use web ...


/*
let a=[1,2,3,4]
console.log(`Array is : ${a}`)
console.log(a.unshift("Hello") =" <-- Array ke Suru me element add kr dta hai ")
*/

// Kisi bhi element ko delete karne ke liye hota hai but element ki jage besi ki he besi raheti hai 

console.log(delete array[2]);
console.log(array);

// Kisi 2 array ko joodne ke kaam karta hai per koi changement ni aayega jo phale se array bana hoga bo besa he rahega ...
let x,y,z;
x=[1,4,5,2,3,];
y=[4,5,6,];
z=[7,8,9];

x.concat(y,z);
console.log(x +" <-- x Ki value ")

// Sort methord kisi bhi array ko short kr deta hai 

console.log(x.sort() +" <-- Sort hoen ke bd value");

let num=[1,2,3,4,5];
console.log(num.splice(1,3)+" <-- 1 se 3 tk array delete ho gaye .. ") 

console.log(`${num} <- Bacha hua Array ..`)

// Array ko ulta kar deta hai ....
let ar=[1,2,3,4,5,6,7,8,9,10]

console.log(ar.reverse)
console.log(ar)

