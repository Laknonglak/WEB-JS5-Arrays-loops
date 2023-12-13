//---slice(): Returns a shallow copy of a portion of an array

    // const originalArray = [1, 2, 3, 4, 5];

    // const newArray = originalArray.slice(1, 3); // Returns elements at index 1, 2, and 3
    // console.log(newArray); // Output: [2, 3]
    // console.log(originalArray);


//---------------------------slice real world-------------------//
// const users = [
//   { id: 1, name: 'James' },
//   { id: 2, name: 'Kan' },
//   { id: 3, name: 'Mean' },
//   { id: 4, name: 'Lak' },
//   { id: 5, name: 'Folk' },
//   { id: 6, name: 'Wee' },
// ];

// const itemsPerPage = 2;
// const currentPage = 1;

// const startIndex = (currentPage - 1) * itemsPerPage;
// const endIndex = startIndex + itemsPerPage;

// const paginatedUsers = users.slice(startIndex, endIndex);

// console.log(paginatedUsers);


// //---splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

// const myArray = [1, 2, 3, 4, 5];

// // // Remove two elements starting from index 1
// // const removedElements = myArray.splice(1,2);
// // console.log(myArray); // Output: [1, 4, 5]
// // console.log(removedElements); // Output: [2, 3]

// // // Replace one element at index 1 with a new value
// myArray.splice(1,2,10);
// console.log(myArray); // Output: [1, 10, 5]

// // Add elements starting from index 2
// myArray.splice(2, 0, 20, 30);
// console.log(myArray); // Output: [1, 10, 20, 30, 5]

// //-----------------------------Real World Splice() & Splice()------------------------//

const cart = ['Apples', 'Oranges', 'Bananas','Graps'];

function removeItem(itemName) {
  let itemIndex = cart.indexOf(itemName);

  if (itemIndex === -1) {
    console.error('Item not found in the cart.');
    return;
  }

  const itemToRemove = cart.splice(itemIndex, 1);

  console.log(cart);
  console.log(`Item ${itemToRemove} removed from the cart.`);
}
removeItem('Bananas');
console.log(cart); 