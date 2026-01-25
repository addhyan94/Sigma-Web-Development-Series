//  String .............................

let a = " Triwari";
console.log(a);

// String ki Length Dekhne ke liye use hota hai 
console.log(a.length); 

let mname= "Addhyan";
let mfriend= " MY Laptop";

console.log("My name is " + mname +" And My friend name is " + mfriend )

// Template Literals ....

console.log(`My name is ${mname} And My Friend name is ${mfriend} \n Using Template Literals mathord.. `)

// Lisi bhi string ko Uper Case karne ke liye 

console.log(a.toUpperCase())
console.log(a.toLowerCase())

// kisi bhi string ke character ke jo number hai jis numbe rse jis number tk chaiye to iska use kar sate hai 
console.log(a.slice(2,8))

// Kisi bhi string ko replace karne ke liye use hota hai 

console.log(a.replace(" Triwari", "Bhai Mere"))

// Kisi bhi 2 String ko ek sath jodne ke liye use hota hai 

console.log(mname.concat(a ," Ji"))

// Whitespace Remove kar deta hai 
let s=" Aman "
console.log(s.trim())
