document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('displayInput');
    let firstNumber = '';
    let secondNumber = '';
    let currentOperation = null;

    document.getElementById('toggleSign').addEventListener('click', toggleSign);

    function redirectToUrl(url) {
        window.location.href = url;
    }

    function appendNumber(number) {
        display.value += number;
    }

    function setOperation(operation) {
        firstNumber = display.value;
        currentOperation = operation;
        display.value = '';
    }

    function handleScientificOperation(operator) {
        switch (operator) {
            case 'x^2':
                display.value = Math.pow(parseFloat(display.value), 2).toFixed(2);
                break;
            case 'x^3':
                display.value = Math.pow(parseFloat(display.value), 3).toFixed(2);
                break;
            case 'x^y':
                firstNumber = display.value;
                currentOperation = 'x^y';
                display.value = '';
                break;
            case 'e^x':
                display.value = Math.exp(parseFloat(display.value)).toFixed(2);
                break;
            case '10^x':
                display.value = Math.pow(10, parseFloat(display.value)).toFixed(2);
                break;
            case '1/x':
                display.value = (1 / parseFloat(display.value)).toFixed(2);
                break;
            case 'sqrx':
                display.value = Math.sqrt(parseFloat(display.value)).toFixed(2);
                break;
            case 'cubicx':
                display.value = Math.cbrt(parseFloat(display.value)).toFixed(2);
                break;
            case 'ysquarex':
                firstNumber = display.value;
                currentOperation = 'ysquarex';
                display.value = '';
                break;
            case 'In':
                display.value = Math.log(parseFloat(display.value)).toFixed(2);
                break;
            case 'log10':
                display.value = Math.log10(parseFloat(display.value)).toFixed(2);
                break;
            case 'sin':
                display.value = Math.sin(parseFloat(display.value)).toFixed(2);
                break;
            case 'cos':
                display.value = Math.cos(parseFloat(display.value)).toFixed(2);
                break;
            case 'tan':
                display.value = Math.tan(parseFloat(display.value)).toFixed(2);
                break;
            case 'sinh':
                display.value = Math.sinh(parseFloat(display.value)).toFixed(2);
                break;
            case 'cosh':
                display.value = Math.cosh(parseFloat(display.value)).toFixed(2);
                break;
            case 'tanh':
                display.value = Math.tanh(parseFloat(display.value)).toFixed(2);
                break;
            case 'pi':
                display.value = Math.PI.toFixed(8);
                break;
            case 'e':
                display.value = Math.E.toFixed(8);
                break;
            case 'Rand':
                display.value = Math.random().toFixed(15);
                break;
        }
    }

    function calculate() {
        secondNumber = display.value;
        let result;
        if (currentOperation === 'x^y') {
            result = Math.pow(parseFloat(firstNumber), parseFloat(secondNumber));
        } else if (currentOperation === 'ysquarex') {
            result = Math.pow(parseFloat(secondNumber), 1 / parseFloat(firstNumber));
        } else {
            switch (currentOperation) {
                case '+':
                    result = parseFloat(firstNumber) + parseFloat(secondNumber);
                    break;
                case '-':
                    result = parseFloat(firstNumber) - parseFloat(secondNumber);
                    break;
                case '*':
                    result = parseFloat(firstNumber) * parseFloat(secondNumber);
                    break;
                case '/':
                    if (parseFloat(secondNumber) !== 0) {
                        result = parseFloat(firstNumber) / parseFloat(secondNumber);
                    } else {
                        redirectToUrl("https://www.youtube.com/playlist?list=PLTPg64KdGgYhYpS5nXdFgdqEZDOS5lARB");
                    }
                    break;
                case '%':
                    result = (parseFloat(firstNumber) * parseFloat(secondNumber)) / 100;
                    break;
            }
        }
        display.value = result.toFixed(2);
        currentOperation = null;
    }

    function toggleSign() {
        if (display.value) {
            display.value = parseFloat(display.value) * -1;
        }
    }

    function clear() {
        display.value = '';
    }

    document.querySelectorAll('.numbutton, .operatorPaisagem').forEach(button => {
        button.addEventListener('click', function () {
            if (this.classList.contains('operatorPaisagem')) {
                handleScientificOperation(this.value);
            } else {
                appendNumber(this.value);
            }
        });
    });

    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', function () {
            setOperation(this.value);
        });
    });

    document.getElementById('equal').addEventListener('click', calculate);
    document.getElementById('clear').addEventListener('click', clear);
});
