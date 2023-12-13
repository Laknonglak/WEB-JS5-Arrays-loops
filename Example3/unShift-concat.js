//----------------------------------------unshift-----------------------------------------//

const jsd = ["James","Kan","Mean","Lak","Folk","Wee"];

jsd.unshift("Generation"); //add Generation to the beginning of the array
console.log(jsd); //output["Generation","James","Kan","Mean","Lak","Folk","Wee"]

jsd.unshift("GenKX", 99);//add GenKX and 99 to the beginning of the array
console.log(jsd); //output["GenKX",99,"Generation","James","Kan","Mean","Lak","Folk","Wee"]


//-------------------------------------Real World----------------------------//
// Existing chat messages
// const existingMessages = [
//     'Hey there!',
//     'How are you?',
//     'What have you been up to?'
//   ];
  
//   console.log('Existing chat messages:');
//   console.log(existingMessages);
  
//   const incomingMessages = ('New message 1');
  
//   // Adding incoming messages to the beginning of existing messages
//   existingMessages.unshift(incomingMessages);
  
//   // Display updated chat messages with incoming ones at the top
//   console.log('\nUpdated chat messages after adding incoming messages:');
//   console.log(existingMessages);
  



//-----------------------------------------concat-----------------------------------------//
// const array1 = [1,2,3];
// const array2 = [4,5,6];

// const combineArray = array1.concat(array2);
// console.log(combineArray) //output [1,2,3,4,5,6]

// //----------------------------------Real World-----------------------------//
// // User's browsing history
const userHistory = ['Smartphone', 'Laptop'];
const trendingItems = ['Headphones', 'Smartwatch'];
const newArrivals = ['Tablet', 'Gaming Console'];

// Merging the arrays to generate recommended products
const recommendedProducts = userHistory.concat(trendingItems, newArrivals);

// Displaying recommended products to the user
console.log('Recommended Products:');
console.log(recommendedProducts);



