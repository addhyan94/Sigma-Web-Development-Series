// Question => For loop se 1 se 20 tak ke sirf even numbers print karo.

console.log("Code 1st Line.. ");
for (let i = 0; i <= 20; i++) {
    if (i%2==0) {
        console.log(i);
    }
}

// Second Methord ....
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}