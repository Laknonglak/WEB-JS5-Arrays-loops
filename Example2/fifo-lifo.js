//---------------------------------push------------------------------------//
// const jsd = ["James","Kan","Mean","Lak","Folk","Wee"];
// jsd.push("jsd*");
// console.log(jsd);


//---------------------------------shift---------------------------------//
// const jsd = ["James","Kan","Mean","Lak","Folk","Wee","jsd*"];
// jsd.shift();
// console.log(jsd);

//---------------------------------pop--------------------------------//
// const jsd = ["James","Kan","Mean","Lak","Folk","Wee","jsd*"];
// jsd.pop();
// console.log(jsd);

//------------------------------FIFO--------------------------------//
// FIFO Queue for Online Ticket Booking using Constructor Function
// function TicketQueue() {
//     this.queue = [];
//     this.isProcessing = false;
//     // Enqueue (Add customers to the end of the queue)
//     this.bookTicket = function(customer) {
//         this.queue.push(customer);
        
//         console.log(`Customer ${customer} joined the queue.`);
//         if (!this.isProcessing){
//             this.processQueue(); // Process the queue after a customer joins
//         }
//     }; 

//     // Dequeue (Process customers in the order they joined)
//     this.processQueue = function() {
       
//         if (this.queue.length > 0) {
//             this.isProcessing = true;
//             const nextCustomer = this.queue.shift();
//             console.log(`Processing ticket for ${nextCustomer}`);
//             // Logic to assign a ticket to the customer
//             // Assume assigning a ticket involves some process
//             setTimeout(() =>{
//                 console.log(`Ticket assigned to ${nextCustomer}`);
//                 this.isProcessing = false;
//                 this.processQueue(); // Process the next customer in the queue
//             }, 2000); // Simulating ticket assignment time (2 seconds)
//         } else {
//             console.log('No customers in the queue.');
//         }
//     };
// }

// Usage example:
// const ticketQueue = new TicketQueue();

// ticketQueue.bookTicket('Jack');
// ticketQueue.bookTicket('Jill');
// ticketQueue.bookTicket('Peter');


//------------------------------------LIFO----------------------------//

// Simulating a browser history stack using an array (LIFO)
const browserHistory = [];

// Function to simulate navigating to a new page
function navigateTo(url) {
    console.log(`Navigating to ${url}`);
    browserHistory.push(url); // Adding the new page to the top of the stack
}

// Function to simulate pressing the back button
function goBack() {
    if (browserHistory.length > 0) {
        const previousPage = browserHistory.pop(); // Removing the top page from the stack
        console.log(`Going back to ${previousPage}`);
    } else {
        console.log('No more pages in history.');
    }
}

// Simulate navigating through pages
navigateTo('https://thailand.generation.org/'); // Homepage
navigateTo('https://thailand.generation.org/#picker'); // Program Page
navigateTo('https://thailand.generation.org/programs/jsd/'); // learn more JSD Page

goBack(); // Pressing the back button (LIFO operation)
goBack(); // Pressing the back button again
goBack(); // Pressing the back button once more

