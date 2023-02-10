var inputAWG = document.getElementById("inputAWG");
var outputMM2 = document.getElementById("outputMM2");

var inputMM2 = document.getElementById("inputMM2");
var outputAWG = document.getElementById("outputAWG");

inputAWG.addEventListener("input", convertAWGtoMM2);
inputMM2.addEventListener("input", convertMM2toAWG);

function convertAWGtoMM2(e) {
    if (isNaN(inputAWG.valueAsNumber)) {
        outputMM2.innerHTML = "";
    } else {
        outputMM2.innerHTML = Math.round(Math.pow(0.127 * Math.pow(92, (36 - +inputAWG.valueAsNumber) / 39.0) / 2.0, 2) * Math.PI * 1000) / 1000.0;
    }
}

function convertMM2toAWG(e) {
    var awg = Math.round((36 - (Math.log(Math.sqrt(e.target.value / Math.PI) * 2 / 0.127) / Math.log(92) * 39)) * 1000) / 1000.0;
    if (awg < 0.5) { //if we should do "aught" instead of the standard AWG sizes
        outputAWG.innerHTML = parseFloat(awg * -1 + 1).toFixed(3) + "/0";
    } else if (awg == "Infinity") {
        outputAWG.innerHTML = "";
    } else {
        outputAWG.innerHTML = awg;
    }
}