let firstNumber;
let secondNumber;
let operator;
let flag;

do {
    flag = true;
    do {
        firstNumber = +prompt("Enter first number:");
        if (!isNaN(firstNumber)) {
            flag = false;
        }
    } while (flag);
    flag = true;
    do {
        secondNumber = +prompt("Enter second number:");
        if (!isNaN(secondNumber)) {
            flag = false;
        }
    } while (flag);
    flag = true;
    do {
        operator = prompt("What operation do you want: add, sub, mult, div?");
        if (operator == "add" || operator == "sub" || operator == "mult" || operator == "div") {
            flag = false;
        }
    } while (flag);
    flag = true;
    switch (operator) {
        case "add":
            document.write(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber} <br>`);
            break;
        case "sub":
            document.write(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber} <br>`);
            break;
        case "mult":
            document.write(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber} <br>`);
            break;
        case "div":
            if (secondNumber == 0) {
                document.write("You cannot divide by zero! <br>");
            }
            else {
                document.write(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber} <br>`);
            }
            break;
    }
    let doAgain = prompt("Do you wanna do it again? (yes/no)")
    if (doAgain == "yes") {
        flag = true;
    } else {
        flag = false;
    }
} while (flag);