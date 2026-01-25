// Ek new array banane ke liye iska use hota hai serc ek line se new array create ho jata hai 

let ar=[2,22,3,12,25]
/*
let newar=[]
// Normal tarika jo normally use hota hai 
for (let i = 0; i < ar.length; i++) {
    const value = ar[i];
    newar.push(value**2) //purane array ko sqare ke roop me pana chahate hai isliye **2 kiya 
}

console.log(`Old array :${ar}`)
console.log(`New array Power bala : ${newar}`)
*/

// Simple Tarika Jo map ka use karke ho rha hai ..

let newar =ar.map(value=>{
   return value**2 //purane array ko sqare ke roop me pana chahate hai isliye **2 kiya 
})

console.log(`Old array :${ar}`)
console.log(`New array Power bala : ${newar}`)
