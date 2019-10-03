var flight = 418.12;
var hotel = 113.85;
var car = 99.99;
const TAX_RATE = 0.0805;
var subtotal, tax, total;

//flight+hotel
subtotal = flight+hotel;
DisplayTaxAndTotal("Flight + hotel", subtotal);

//flight+car
subtotal = flight+car;
DisplayTaxAndTotal("Flight + car", subtotal);

//flight+hotel+car
subtotal = flight+hotel+car;
DisplayTaxAndTotal("Flight + hotel + car", subtotal);

function DisplayTaxAndTotal(strItems, subtotal){
    tax = subtotal * TAX_RATE;
    total = subtotal + tax;
    console.log(strItems + " = $" + subtotal.toFixed(2));
    console.log("Tax = $" + tax.toFixed(2));
    console.log("Total = $" + total.toFixed(2));
    console.log("-------------------------");
}