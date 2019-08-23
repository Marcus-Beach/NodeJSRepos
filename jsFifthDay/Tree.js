let x = 6;
let space = " ";
let star = "*";
for(let i = 0; i < x; i++){
    console.log(space.repeat((x-1)-i) + star.repeat((i*2)+1));
}