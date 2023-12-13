// for (let i = 0; i <= 5; i++){
//     if (i % 2 !== 0 ) console.log('I am odd ' + i);
//  }

//while loop
// i = 0; //not the same as i above for for because it in scope
// while (i < 5) {
//     console.log('I am number ' + i);
// i++;
// }

// //while loop
// i = 0; //not the same as i above for for because it in scope
// while (i <= 5) {
//     if (i % 2 !== 0 ) console.log('I am odd ' + i);
// i++;
// }

//do while - excute at least once
// let i = 0;
// do{
//     if (i % 2 !== 0 ) console.log('I am odd ' + i);
//  i++;
// } while (i<=5);

//show the different by changing i

//infinite loops
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++ //if you forget to increat this it will go in the loop forever because it will not hit the condition
// }

// for (i = 0; i < 10; i++);//if you forget i++ then it will loop forever



//OR
let userInput = '';
let attempts = 3;

while (userInput !== 'quit' && userInput !== 'exit' && attempts > 0) {
    userInput = prompt(`Enter something (type "quit" or "exit" to exit), ${attempts} attempts left:`);
    console.log(`You entered: ${userInput}`);
    attempts--;
}
