// TASK 1 - Create an Inventory Array of Product Objects
const inventory = [ 
    { name: "espresso", price: 3, quantity: 10 },
    { name: "latte", price: 2, quantity:7 },
    { name: "iced coffee", price: 2, quantity: 15},
    { name: "frappuccino", price: 4, quantity:12},
];
//"Initialize inventory with product objects"

// Task 2 - Create an Orders Array of Order Objects
const orders = [];
//Example Order
order.push({
    customerName: "Benny Bob",
    items: [
         {name: 'espresso', quantity: 3},
           {name: "latte", quantity: 7},
    ],
    status: "pending",
    customerName: "Sally Smith",
    items: [
        {name: "iced coffee", quantity: 15},
        { name: "frappuccino", quantity: 12},
    ],
    status:"completed"

});
console.log(orders);
 //"Initialize orders array"

 // Task 3 -  Create a Function to Place an Order
 function placeOrder (customerName, items) {
    //Checking item availability
    for( let quantity in items) {
        inventory.find(item => item.name ===item);
        if(!items) {
            console.log( "Error: Item not found");
            break;
        }
        if(item.quantity > inventory.quantity) {
            console.log("Error:insufficient stock");
            break;
        } 
    }
 }
 for (let quantity in items) {
    inventory.find(item => item.name ===item);
    item.quantity -=inventory.quantity;  
 } 
 //Pending example
 orders.push({
    customerName: customerName,
    items: [{name:name, quantity: quantity}],
    status: "pending"
 });
 console.log(placeOrder("Benny Bob", {name:espresso, quantity: 3}, {name:"latte", quantity: 7}))
//Create placeOrder function

//Task 4 - Create Function to Calculate Total of an Order
function calculateOrderTotal = (order, price) {

    for (let price of order.items) {
      // Inventory product check for price
      const object = inventory.find(item => item.name === item.name);
      
      if (object) {
        total += object.price *item.quantity;
      }
    }
    return total;
  };
  // Example 
  const exampleOrder = {
    customerName: "Benny Bob",
    items: [
      { name: "espresso", quantity: 3 },
      { name: "latte", quantity: 7 }
    ],
    status: "Pending"
    
  };
  
  const total = calculateOrderTotal(order);
  console.log(`Total price for the order: $${total}`);
  //Create calculateOrderTotal function

  // Task 5 - Create a Function to Mark an Order as Completed
  function completeOrder = (customerName) => {
    // Looking for order name
    const order = orders.find(order => order.customerName === customerName);
    
    if (!order) {
      console.log(`Error: ${"Benny Bob"} not found.`);
      return;
    }
    // Change the status to "Completed"
    order.status = "Completed";
    console.log(`${"Sally Smith"} completed.`);
  };
  // Create completeOrder function

  // Task 6 - Create a Function to Check Pending Orders
  function checkPendingOrders = () {
    pendingOrders = orders.filter(order => order.status === "Pending");
    if (order.status = 'PENDING') {
        return;
        
      }}
      console.log ('Order Pending: ${checkpendingOrders}')
      //Create checkPendingOrders function

  
  












