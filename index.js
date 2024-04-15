document.addEventListener('DOMContentLoaded', function () {

    const display = document.getElementById('displayInput');
    let firstNumber = '';
    let secondNumber = '';
    let currentOperation = null;
    document.getElementById('toggleSign').addEventListener('click', toggleSign);

    function appendNumber(number) {
        display.value += number;
    }
    function setOperation(operation) {
        firstNumber = display.value;
        currentOperation = operation;
        display.value = '';
    }
    function calculate() {
        secondNumber = display.value;
        let result;
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
                if (parseFloat(firstNumber) && parseFloat(secondNumber) != 0) {
                    result = parseFloat(firstNumber) / parseFloat(secondNumber);
                }
                else {
                    result = 'endoidou?';
                }
                break;
            case '%':
                result = (parseFloat(firstNumber) * parseFloat(secondNumber)) / 100;
                break;
        }
        display.value = result;
        currentOperation = null;
    }
    function toggleSign() {
        if (display.value) { // Certifica-se de que existe um valor para alterar
            display.value = parseFloat(display.value) * -1;
        }
    }
    
    function clear() {
        display.value = '';
    }
    document.querySelectorAll('.numbutton').forEach(button => {
        button.addEventListener('click', function () {
            appendNumber(this.value);
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