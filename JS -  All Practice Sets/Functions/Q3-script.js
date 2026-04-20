// Question => Function banao jo check kare even hai ya odd. "Even" ya "Odd" return kare. 7 aur 4 dono test karo.

console.log('Code 1st Line');

const checknum = (num)=>{
    if(num%2 ==0){
        console.log(num+" is the Even Number!");
    }
    else{
        console.log(num+" is the Odd Numebr!");
    } 
}

checknum(7);
checknum(4);
checknum(10);
checknum(9);

// Second Methord............................................
function evenOdd(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOdd(7));
console.log(evenOdd(4));