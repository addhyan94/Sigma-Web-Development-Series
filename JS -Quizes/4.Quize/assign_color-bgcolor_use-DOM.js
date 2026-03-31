console.log("Hello User!")

//let ass = document.getElementsByClassName("box");
let ass = document.querySelector(".boxes").children

function rendomebg_color(){
let valueFirst = Math.ceil(0 + Math.random()*225)
let valuesecond = Math.ceil(0 + Math.random()*225)
let valuethird = Math.ceil(0 + Math.random()*225)
return`rgb(${valueFirst}, ${valuesecond}, ${valuethird})`
}
Array.from(ass).forEach(e=>{
    e.style.backgroundColor = rendomebg_color();
    e.style.color = rendomebg_color();
})
console.log("Color Chnage Ho gaye hai Comfirm hai ...")
console.log(ass)

/* console.log("Hello User!");

let ra_color = Math.random();
let ra_bgcolor = Math.random();

let b1 = document.querySelector(".box1");
let b2 = document.querySelector(".box2");
let b3 = document.querySelector(".box3");

if (ra_color < 0.33) {
    document.b1.style.color = "green"
    document.b1.style.backgroundColor = "yellow"
    document.b2.style.color = "yellowgreen"
    document.b2.style.backgroundColor = "blueviolet"
    document.b3.style.color = "blue"
    document.b3.style.backgroundColor = "tomato"
}
else if (ra_color < 0.66 && ra_color >= 0.33) {
    document.b1.style.color = "red"
    document.b1.style.backgroundColor = "green"
    document.b2.style.color = "aqua"
    document.b2.style.backgroundColor = "tomato"
    document.b3.style.color = "blueviolet"
    document.b3.style.backgroundColor = "white"
}
else {
    document.b1.style.color = "Black"
    document.b1.style.backgroundColor = "lightBlue"
    document.b2.style.color = "burlywood"
    document.b2.style.backgroundColor = "aqua"
    document.b3.style.color = "red"
    document.b3.style.backgroundColor = "yellowgreen"
}


console.log(`The Name is : ${b1} ${b2} ${b3}`)//isse Consol me jake dekhne parega .....
alert(`The Generate Business Name Is : ${b1} ${b2} ${b3}`) // isse Screen per he POPup hoke aa jayega ....

*/