// getNumber
function getNumber(num) {
    var output = document.getElementById("output-value");
    output.innerText += num;
    
}

// get result
function getResult(num) {
    var output = document.getElementById("output-value");
    output.innerText += num;
    var result = document.getElementById("result-value");
    result.innerText = eval(output.innerText);
}

// clear
function clearRessult() {
    document.getElementById("output-value").innerText = ""
    document.getElementById("result-value").innerText = "0"
}

// delete character
function deleteChar() {
    var number = document.getElementById("output-value");
    var remove = number.innerText;
    remove = remove.slice(0,-1);
    number.innerText = remove;
}
