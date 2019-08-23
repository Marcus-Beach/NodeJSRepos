let numArray = [1, 8, 6, 2, 5, 4, 8, 3, 7]; //set values here
let index1 = 0;
let index2 = 0;
//W * H = A
for(let i = 0; i < numArray.length; i++){
    for(let j = i; j < numArray.length; j++){
        let = biggestA = (numArray[index1] > numArray[index2] ? numArray[index2] : numArray[index1])*(index2-index1);
        let = curA = (numArray[i] > numArray[j] ? numArray[j] : numArray[i])*(j-i);
        if(curA > biggestA){
            index1 = i;
            index2 = j;
        }
    }
}
console.log("Largest box is (" + index1 + "," + numArray[index1] + "), (" + index2 + "," + numArray[index2] + ").");
//area of largest box
//(numArray[index1] > numArray[index2] ? numArray[index2] : numArray[index1])*(index2-index1)
//area of current box
//(numArray[i] > numArray[j] ? numArray[j] : numArray[i])*(j-i)