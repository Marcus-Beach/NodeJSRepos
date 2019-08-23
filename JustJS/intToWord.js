console.log(intToWord(0));
console.log(intToWord(10));
console.log(intToWord(7));
console.log(intToWord(18));
console.log(intToWord(37));
console.log(intToWord(92));
console.log(intToWord(20));

function intToWord(num) { //only handles numbers from 0-99
    let retString;
    let onesArray = ["zero","one","two","three","four","five","six","seven","eight","nine",
                     "ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    let tensArray = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    if(Number.isInteger(num)){
        if(num <= 99 && num >= 0){
            if(num < 20){
                retString = onesArray[num];
            } else {
                let ones = num % 10;
                let tens = ((num - ones)/10) - 2;
                if(ones > 0){
                    retString = tensArray[tens].concat("-".concat(onesArray[ones]));
                } else {
                    retString = tensArray[tens];
                }
            }

        } else { retString = "Invalid input";}
    } else {retString = "Invalid input";}
    return retString;
}