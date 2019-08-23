let string1 = "string 1";
let string2 = "string 2";
let string3 = "string 3";
let number1 = 1;
let number2 = 2;
let number3 = 3;

console.log("String 1: " + string1 + 
            "\nString 2: " + string2 +
            "\nString 3: " + string3);

console.log("Number 1: " + number1 +
            "\nNumber 2: "+ number2 +
            "\nNumber 2: "+ number2);

console.log("Number 1 + Number 2: " + (number1 + number2));
console.log("Number 2 + Number 3: " + (number3 + number2));
console.log("Number 1 + Number 3: " + (number1 + number3));

//interprets everything as a string
console.log(string1+string2+string3+number1+number2+number3);
//interprets first three as addition operators and last three as strings
console.log(number1+number2+number3+string1+string2+string3);
//number3 = ((number3 + 7) * 13)/6;
number3 += 7;
number3 *= 13;
number3 /= 6;

console.log("((Number3 + 7) * 13)/6: " + number3);