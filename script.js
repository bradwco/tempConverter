document.addEventListener("DOMContentLoaded", function () {
function getFTemp(){
    return parseInt(document.getElementById("Ftemp").value);
}
function setCTemp(fInput){
    document.getElementById("Ctemp").value = (fInput-32)/1.8;
}

function getCTemp(){
    return parseInt(document.getElementById("Ctemp").value);
}
function setFTemp(cInput){
    document.getElementById("Ftemp").value = (cInput*1.8)+32;
}

function invokingCelsiusDisplay(){
    var fInput = getFTemp();
    setCTemp(fInput);
}
function invokingFahrenheitDisplay(){
    var cInput = getCTemp();
    setFTemp(cInput);
}

var cChange = document.getElementById("Ftemp");
var fChange = document.getElementById("Ctemp");

fChange.addEventListener("input", invokingFahrenheitDisplay);
cChange.addEventListener("input", invokingCelsiusDisplay);

});

