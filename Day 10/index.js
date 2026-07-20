function checkNumber() {
    let inputVal = document.getElementById("numInput").value;
    let number = parseInt(inputVal);
    let resultText = "";

    if (isNaN(number)) {
        resultText = "Please enter a valid number!";
    } else if (number % 3 === 0 && number % 5 === 0) {
        resultText = "Humpty Dumpty";
    } else if (number % 3 === 0) {
        resultText = "Humpty";
    } else if (number % 5 === 0) {
        resultText = "Dumpty";
    } else {
        resultText = "Not a multiple of 3 or 5";
    }
    document.getElementById("result").innerText = resultText;
    console.log(resultText);
}