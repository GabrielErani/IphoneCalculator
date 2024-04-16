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
        let result;
        switch (operator) {
            case 'x^2':
                result = Math.pow(parseFloat(display.value), 2);
                break;
            case 'x^3':
                result = Math.pow(parseFloat(display.value), 3);
                break;
            case 'x^y':
                firstNumber = display.value;
                currentOperation = 'x^y';
                display.value = '';
                return; 
            case 'e^x':
                result = Math.exp(parseFloat(display.value));
                break;
            case '10^x':
                result = Math.pow(10, parseFloat(display.value));
                break;
            case '1/x':
                result = 1 / parseFloat(display.value);
                break;
            case 'sqrx':
                result = Math.sqrt(parseFloat(display.value));
                break;
            case 'cubicx':
                result = Math.cbrt(parseFloat(display.value));
                break;
            case 'ysquarex':
                firstNumber = display.value;
                currentOperation = 'ysquarex';
                display.value = '';
                return;
            case 'In':
                result = Math.log(parseFloat(display.value));
                break;
            case 'log10':
                result = Math.log10(parseFloat(display.value));
                break;
            case 'sin':
                result = Math.sin(parseFloat(display.value));
                break;
            case 'cos':
                result = Math.cos(parseFloat(display.value));
                break;
            case 'tan':
                result = Math.tan(parseFloat(display.value));
                break;
            case 'sinh':
                result = Math.sinh(parseFloat(display.value));
                break;
            case 'cosh':
                result = Math.cosh(parseFloat(display.value));
                break;
            case 'tanh':
                result = Math.tanh(parseFloat(display.value));
                break;
            case 'pi':
                result = Math.PI;
                break;
            case 'e':
                result = Math.E;
                break;
            case 'Rand':
                result = Math.random();
                break;
        }
        display.value = isNaN(result) ? '0' : result.toFixed(2);
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
                    result = parseFloat(secondNumber) !== 0 ? parseFloat(firstNumber) / parseFloat(secondNumber) : NaN;
                    break;
                case '%':
                    result = (parseFloat(firstNumber) * parseFloat(secondNumber)) / 100;
                    break;
            }
        }
        display.value = isNaN(result) ? '0' : result.toFixed(2);
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
