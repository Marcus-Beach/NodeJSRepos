let mainString = "We hold these truths to be self-evident, taht all men are created equal, taht they are endowed by their Creator with certain unalienable Rights, taht among these are Life, Liberty and the pursuit of Happiness. Taht to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed."
let govIndex = mainString.indexOf("Governments");
console.log("Index of Governments: " + govIndex);
let allSub = mainString.substring(mainString.indexOf("all"), mainString.indexOf(",", mainString.indexOf("all")));
console.log(allSub);
while(mainString.includes("taht"))
{
    mainString = mainString.replace("taht","that");
}
while(mainString.includes("Taht"))
{
    mainString = mainString.replace("Taht","That");
}
console.log(mainString);
console.log("String length is " + mainString.length);