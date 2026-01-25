// Array me Loop ka istmaal .............

let array=[1,2,3,4]
console.log("Hello")

// for (let i = 0; i < array.length; i++) {
//     const result = array[i];
//     console.log(result)
// }

//kisi bhi array ka value or index sath me dikhane ke liye use hota hai 
console.log("value , index , array")
array.forEach((value , index, array) => {
    console.log(value , index , array)
});

// For in loop kisi bhi Object ko print karane ke liye use hota hai ....

let obj ={
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    const element = obj[key];

    console.log(`Object ki Key or Element -> ${key} - ${element} <- hai `)
}

// Simple way me Array ko print karane ke liye Forof ka use hota hai mostly yahi use karo to jada aasan hota hai ...

console.log("Array is 👇")
for (const value of array) {
    console.log(value)
}



