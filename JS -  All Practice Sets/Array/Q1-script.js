// Question => [10, 25, 8, 42, 15] se sirf 20 se bade numbers filter karo aur print karo.
console.log("Code 1st Line... ");
let num = [10, 25, 8, 42, 15];
const check = value=>{
    if (value>20) {
        return true;
    } else {
        return false;
    }
}
console.log(num.filter(check));

// Second methord...............
const nums = [10, 25, 8, 42, 15];
const big = nums.filter(n => n > 20);
console.log(big);