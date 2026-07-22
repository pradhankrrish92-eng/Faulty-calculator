// Addition
function add(a, b) {
    if (a > b) {
        return a - b; // Faulty
    } else {
        return a + b;
    }
}

// Subtraction
function subtract(a, b) {
    if (b > a) {
        return a + b; // Faulty
    } else {
        return a - b;
    }
}

// Multiplication
function multiply(a, b) {
    if (a > b) {
        return a / b; // Faulty
    } else {
        return a * b;
    }
}

// Division
function divide(a, b) {
    if (b > a) {
        return a * b; // Faulty
    } else {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    }
}

// Main function
function calculate() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerHTML = "Please enter both numbers.";
        return;
    }

    let answer;

    switch (operation) {
        case "add":
            answer = add(a, b);
            break;

        case "subtract":
            answer = subtract(a, b);
            break;

        case "multiply":
            answer = multiply(a, b);
            break;

        case "divide":
            answer = divide(a, b);
            break;

        default:
            answer = "Invalid Operation";
    }

    document.getElementById("result").innerHTML = "Result: " + answer;
}