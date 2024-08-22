function clearScreen() {
    document.getElementById("screen").value = "";
}

function appendNumber(number) {
    document.getElementById("screen").value += number;
}

function appendOperator(operator) {
    let screen = document.getElementById("screen");
    if (screen.value !== "") {
        screen.value += " " + operator + " ";
    }
}

function square() {
    let screen = document.getElementById("screen");
    if(screen.value !== "") {
        let currentValue = parseFloat (screen.value);
        screen.value = currentValue * currentValue;
    }
}

function calculateResult() {
    let screen = document.getElementById("screen").value;
    screen = screen.replace("÷", "/").replace("×", "*");

    try {
        let result = eval(screen);
        document.getElementById("screen").value = result;
    } catch (error) {
        document.getElementById("screen").value = "Error";
    }
}