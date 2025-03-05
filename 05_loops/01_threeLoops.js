/*
for (let i = 0; i < 10; i++) {
    console.log(i+1);
    const num = i
    var num2 = i
    console.log(`num: ${i}`);
}

// console.log(num); // num is not accessible here as it is out of the scope 
console.log(`num2: ${num2}`); // since num2 is var so it is accessible here

// ****************** break and continue in for loops ***************************************

for (let i  = 0; i  < 5; i ++) {
    console.log(`i: ${i}`);
    if(i == 3){
        console.log("breaking the iteration");
        break;
    }   
}

for (let j = 0; j < 6; j++) {
    if(j == 4)
        continue
    console.log(`j: ${j}`);
}
*/
let score = 1
while(score <= 10){
    console.log(score);
    score += 2
}

let runs = 12
do{
    console.log(runs); // do while loop executes at least once
    runs++
}while(runs < 11)