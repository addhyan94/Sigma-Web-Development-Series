/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> *
% ---> **

It performs wrong operation 10% of the times

*/

let ra_num = Math.random();
console.log(ra_num)
let a=prompt("Enter First Number : ")
let b=prompt("Enter Operation : ")
let c=prompt("Enter Second Number : ")

let object={
    "+" :"-",
    "*":"+",
    "-":"/",
    "/":"*",
    "%":"**"
}

if (ra_num>0.1) {
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
    console.log(``)
} else {
    b=object[b];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}