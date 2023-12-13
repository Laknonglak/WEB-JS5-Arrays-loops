// for (let i = 0; i < 5; ++i) {
//     console.log(i);
    
//     for (let j = 0; j < 3; j++) {
//     console.log("Hello"+j);
//     }
// }


//-----------------------Example----------------------//
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

