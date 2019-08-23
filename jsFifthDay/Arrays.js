let randomStuffArray = [];

randomStuffArray.push("First Thing","Second Thing","Third Thing","Fourth Thing","Fifth Thing");
randomStuffArray.unshift("prequel one","prequel two","Prequel Three","Prequel Four","Prequel Five");
randomStuffArray.push("Sequel One","Sequel Two","Sequel Three","Sequel Four","Sequel Five");

let firstThing = randomStuffArray.shift(); //this one didn't happen
let secondThing = randomStuffArray.shift(); //this one is wrong too
randomStuffArray.unshift(secondThing.toUpperCase()); // put the remake back

// Original Order
randomStuffArray.forEach(function (thing) {
    console.log(thing);
});

randomStuffArray.sort();
console.log("\n");
// Revised Order
randomStuffArray.forEach(function (thing) {
    console.log(thing);
});