function MilesToKm(miles){
    let km = miles * 1.6;
    if(((km * 100) % 1) > 0){
        km = km.toFixed(2);
    }
    return km;
}

let miles = 10;
let km = MilesToKm(miles);
console.log(miles + " miles is " + km + " kilometers.")

miles = 42;
km = MilesToKm(miles);
console.log(miles + " miles is " + km + " kilometers.")

miles = 78;
km = MilesToKm(miles);
console.log(miles + " miles is " + km + " kilometers.")