let initialString1 = "This is a string."
let initialString2 = "This is only a string.    "
let initialString3 = "This"
let initialString4 = "is"
let initialString5 = "only"
let initialString6 = "a"
let initialString7 = "string"
let initialString8 = "."

let repeatString = initialString1.repeat(5); //1
let concatString = initialString3.concat(initialString4, initialString5, initialString6, initialString7, initialString8); //2
let charAtString = initialString1.charAt(8); //3
let replaceString = initialString2.replace(initialString3, initialString7); //4
let sliceString = initialString1.slice(10,initialString1.length); //5
let substrString = initialString2.substr(13,9); //6
let substringString = initialString1.substring(initialString1.indexOf(initialString6),initialString1.indexOf(initialString8)); //7
let lowerString = initialString1.toLowerCase(); //8
let upperString = initialString1.toUpperCase(); //9
let trimString = initialString2.trim(); //10

let thisone = "stop";