// // for loop
// const jsd = ["James","Kan","Mean","Lak", "Folk", "Wee"];

// for (let i = 0; i < jsd.length; i++) {
//     const currentItem = jsd[i];
   
//     console.log('i = ' + i + ' jsd ' + currentItem);
// }


//while loop
// const jsd = ["James","Kan","Mean","Lak", "Folk", "Wee"];
// let i = 0;

// while (i < jsd.length) {
//     const currentItem = jsd[i];
//     console.log('i = ' + i + ' jsd ' + currentItem);
//     i++;
// }

//array in array
const theaterSeats = [
    ['A1', 'A2', 'A3', 'A4'],
    ['B1', 'B2', 'B3', 'B4'],
    ['C1', 'C2', 'C3', 'C4']
];

for (let i = 0; i < theaterSeats.length; i++) {
    const rowIdentifier = i + 1;
    
    for (let j = 0; j < theaterSeats[i].length; j++) {
        const seatIdentifier = theaterSeats[i][j];
        console.log(`Row ${rowIdentifier}, Seat ${j + 1}: ${seatIdentifier} (i = ${i}, j = ${j})`);
    }
}

