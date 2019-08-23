let declaration = "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.";
let decArray = declaration.split(" ");
console.log(decArray.length);

let sevenArray = [];
for(let i = 0; i < decArray.length; i++){
    if(decArray[i].length <= 7){
        sevenArray.push(decArray[i]);
    }
}

let newdec = sevenArray.reduce(function (acc, word){
    return acc = acc + " " + word;
});
console.log(newdec);

// does not handle words that start with "T", just words that start with "t"
for(let i = 0; i < sevenArray.length; i++){
    if(sevenArray[i][0] === "t"){
        sevenArray[i] = sevenArray[i].toUpperCase();
    }
}
// make the array a string and print it
newdec = sevenArray.reduce(function (acc, word){
    return acc = acc + " " + word;
});
console.log(newdec);