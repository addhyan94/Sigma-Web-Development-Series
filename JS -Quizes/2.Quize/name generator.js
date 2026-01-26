/* Create a business name generator by combining 
list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

let ra_num=Math.random();
let Name_1 , Name_2 , Name_3;

// Yaha aapan Adjectives: Ko generator kar rahe hai..................................

if (ra_num<0.33) {
    Name_1="Crazy";
} 
else if (ra_num<0.66 && ra_num>=0.33) {
    Name_1="Amazing";
}
else {
    Name_1="Fire";
}

// Yaha aapan Shop Name: Ko generator kar rahe hai..............................

if (ra_num<=0.66) {
    Name_2="Engine";
} 
else if (ra_num>0.66 && ra_num<=0.33) {
    Name_2="Engine";
}
else {
    Name_2="Garments";
}

// Yaha aapan Another Word: Ko generator kar rahe hai..................................

if (ra_num<=0.25) {
    Name_3="Bros";
} 
else if (ra_num<=0.66 && ra_num>=0.23) {
    Name_3="Limited";
}
else {
    Name_3="Hub";
}

// Yaha aapan generator hue Word ko Print kar rahe hai..................................

console.log(`The Name is : ${Name_1} ${Name_2} ${Name_3}`)//isse Consol me jake dekhne parega .....
alert(`The Generate Business Name Is : ${Name_1} ${Name_2} ${Name_3}`) // isse Screen per he POPup hoke aa jayega ....