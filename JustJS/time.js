console.log("Time: " + getHours() + ":" + getMinutes() + ":" + getSeconds());
console.log(charPosOfName("Edge Tech"));
console.log(timedUpperLower("Edgetech Academy"));

function getSeconds()
{
    let date = new Date();
    let seconds = date.getSeconds();
    return seconds;
}

function getMinutes()
{
    let date = new Date();
    let minutes = date.getMinutes();
    return minutes;
}

function getHours()
{
    let date = new Date();
    let hours = date.getHours();
    return hours;
}

function charPosOfName(name)
{
    let retString = "";
    for(let i = 0; i < name.length; i++)
    {
        if(name.charAt(i) == " "){
            retString = retString.concat("-1 ");
        } else if (name.charAt(i).toLowerCase().charCodeAt() >= 97 && name.charAt(i).toLowerCase().charCodeAt() <= 172){
            retString = retString.concat((name.charAt(i).toLowerCase().charCodeAt() - 96).toString().concat(" "));
        }
    }
    retString = retString.trim();
    console.log(retString);
    return retString;
}

function timedUpperLower(convString)
{
    let retString;
    if(getSeconds() < 30) {
        retString = convString.toUpperCase();
    } else {
        retString = convString.toLowerCase();
    }
    return retString;
}
