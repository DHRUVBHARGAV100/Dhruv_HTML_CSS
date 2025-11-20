// Create a discount system for an e-commerce store
// Declare a variable for the price of an item Use conditional operators to apply a discount if the price exceeds a certain amount Print the final price after discount.
let itemPrice = 150;
let discountThreshold = 100;
let discountRate = 0.1; 

let finalPrice = itemPrice > discountThreshold ? itemPrice * (1 - discountRate) : itemPrice;
console.log(`The final price after discount is: $${finalPrice}`);
