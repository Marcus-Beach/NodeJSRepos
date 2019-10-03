function FtoC(){
    let DegF = document.getElementById("txtDegF");
    let DegC = document.getElementById("divDegC");
    DegC.innerHTML = (DegF.value-32)*5/9;
}