console.log(letterToCallLetter("A"));
console.log(letterToCallLetter("B"));
console.log(letterToCallLetter("C"));
console.log(letterToCallLetter("D"));
console.log(letterToCallLetter("E"));
console.log(letterToCallLetter("F"));
console.log(letterToCallLetter("G"));
console.log(letterToCallLetter("H"));
console.log(letterToCallLetter("I"));
console.log(letterToCallLetter("J"));
console.log(letterToCallLetter("K"));
console.log(letterToCallLetter("L"));
console.log(letterToCallLetter("M"));
console.log(letterToCallLetter("N"));
console.log(letterToCallLetter("O"));
console.log(letterToCallLetter("P"));
console.log(letterToCallLetter("Q"));
console.log(letterToCallLetter("R"));
console.log(letterToCallLetter("S"));
console.log(letterToCallLetter("T"));
console.log(letterToCallLetter("U"));
console.log(letterToCallLetter("V"));
console.log(letterToCallLetter("W"));
console.log(letterToCallLetter("X"));
console.log(letterToCallLetter("Y"));
console.log(letterToCallLetter("Z"));


function letterToCallLetter(letter) {
    let callLetters = ["Alpha","Bravo","Charlie","Delta","Echo","Foxtrot","Golf",
                       "Hotel","India","Juliett","Kilo","Lima","Mike","November",
                       "Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform",
                       "Victor","Whiskey","X-ray","Yankee","Zulu",];
    return callLetters[(letter.toLowerCase().charCodeAt() - 97)];
}