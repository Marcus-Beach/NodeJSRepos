let name = 'Marcus';
let address = '7411 Lands End Dr. Arlington, TX. 76016';
let age = 36;
let birthday = '04\\02\\1983';
let today = new Date();
let bMonth = 4;
let bDay = 2;
let bYear = 1983;
let month = today.getUTCMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();

console.log("Name: " + name +
            "\nAddress: " + address +
            "\nAge: " + age +
            "\nBirthday: " + birthday);

console.log("Today is: " + month + "\\" + day + "\\" + year);

let days = ((year * 365)+(month*365/12)+day-(bYear*365)-(bMonth*365/12)-bDay);

console.log("Age in days: " + days); // this will be a bit off as it uses a close approx and doesn't account for leap years
console.log("Age in seconds: " + (days*24*60*60));

console.log("Seconds in a year: " + (365*24*60*60));
days = 365;
console.log("Days: " + days);
days *= 24;
console.log("Hours: " + days);
days *= 60;
console.log("Minutes: " + days);
days *= 60;
console.log("Seconds: " + days);

