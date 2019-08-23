// let  num = 99;
// let  str = 'something';

// let test = num;
// switch ( test ) {
//    case    10          :  console.log("found 10");        break;
//    case    100         :  console.log("found 100");       break;
//    case    'something' :  console.log("found something"); break;
//    case    '99'        :  console.log("found 99");        break;
//    default             :  console.log("not found");       break;
// }

// function tallestChildHeight(firstHeight, secondHeight, thirdHeight){
//     return (firstHeight > secondHeight ? 
//         (firstHeight > thirdHeight ? firstHeight : thirdHeight) : 
//         (secondHeight > thirdHeight ? secondHeight : thirdHeight));
// }


// function dateLoop(jump){
//     let retVal = 0;
//     let dateVal = new Date();
//     for(let i = dateVal.getHours(); i < dateVal.getSeconds(); i += jump){
//         console.log(i);
//         retVal++;
//     }
//     return retVal;
// }
// console.log(dateLoop(6));

let stringOne = "One";
let stringTwo = "Two";
let stringThree = "Three";
let stringFour = "Four";
let stringFive = "Five";
let stringSix = "Six";

let upOne = stringOne.toUpperCase();
console.log("Old: \"" + stringOne + "\" UpperCase: \"" + upOne + "\"");

let lowTwo = stringTwo.toLowerCase();
console.log("Old: \"" + stringTwo + "\" LowerCase: \"" + lowTwo + "\"");

let subThree = stringThree.substr(2,3);
console.log("Old: \"" + stringThree + "\" SubStr: \"" + subThree + "\"");

let indexFour = stringFour.indexOf("u");
console.log("Old: \"" + stringFour + "\" Index of u: \"" + indexFour + "\"");

let charFive = stringFive.charAt(3);
console.log("Old: \"" + stringFive + "\" Char at index 3: \"" + charFive + "\"");

let concatSix = stringSix.concat(stringSix);
console.log("Old: \"" + stringSix + "\" Concat: \"" + concatSix);
