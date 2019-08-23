let item1Cost = 4.99;
let item2Cost = 2.99;
let item3Cost = 9.99;
let item4Cost = 24.99;

let total = item1Cost + item2Cost + item3Cost + item4Cost;
let tax = total * 0.08;
console.log("Your purchase comes to $" + total.toFixed(2) + " plus tax of $" + tax.toFixed(2) + " for a total of $" + (total + tax).toFixed(2) + ". Thanks for shopping at Edge Tech")
