var flight = 418.12;
var hotel = 113.85;
var car = 99.99;
const TAX_RATE = 0.0805;
var subtotal, tax, total;

//flight+hotel
subtotal = flight+hotel;
tax = subtotal * TAX_RATE;
total = subtotal + tax;
console.log("Flight + hotel = $"+subtotal.toFixed(2));
console.log("tax = $"+tax.toFixed(2));
console.log("total = $"+total.toFixed(2));

//flight+car
subtotal = flight+car;
tax = subtotal * TAX_RATE;
total = subtotal + tax;
console.log("Flight + car = $"+subtotal.toFixed(2));
console.log("tax = $"+tax.toFixed(2));
console.log("total = $"+total.toFixed(2));

//flight+hotel+car
subtotal = flight+hotel+car;
tax = subtotal * TAX_RATE;
total = subtotal + tax;
console.log("Flight + hotel + car = $"+subtotal.toFixed(2));
console.log("tax = $"+tax.toFixed(2));
console.log("total = $"+total.toFixed(2));
