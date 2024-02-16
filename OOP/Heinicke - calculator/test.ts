<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <style>
        /* Add your CSS styles here */
    </style>
</head>
<body>
    <div class="calculator">
        <div class="display">
            <div data-previous-output></div>
            <div data-current-output></div>
        </div>
        <div class="buttons">
            <button data-clear>AC</button>
            <button data-delete>DEL</button>
            <button data-operator="/">/</button>
            <button data-operator="*">*</button>
            <button data-number>7</button>
            <button data-number>8</button>
            <button data-number>9</button>
            <button data-operator="+">+</button>
            <button data-number>4</button>
            <button data-number>5</button>
            <button data-number>6</button>
            <button data-operator="-">-</button>
            <button data-number>.</button>
            <button data-number>0</button>
            <button data-equals>=</button>
        </div>
    </div>
    <script>
        const calculator = {
            display: {
                previousOutput: document.querySelector('[data-previous-output]'),
                currentOutput: document.querySelector('[data-current-output]'),
            },
            buttons: {
                clear: document.querySelector('[data-clear]'),
                delete: document.querySelector('[data-delete]'),
                operators: document.querySelectorAll('[data-operator]'),
                numbers: document.querySelectorAll('[data-number]'),
                equals: document.querySelector('[data-equals]'),
            },
            operand1: '',
            operand2: '',
            operator: undefined,
            operatorClicked: false,
        };

        calculator.buttons.clear.addEventListener('click', () => {
            calculator.operand1 = '';
            calculator.operand2 = '';
            calculator.operator = undefined;
            calculator.operatorClicked = false;
            updateDisplay();
        });

        calculator.buttons.delete.addEventListener('click', () => {
            calculator.operand2 = calculator.operand2.toString().slice(0, -1);
            updateDisplay();
        });

        calculator.buttons.operators.forEach(operatorButton => {
            operatorButton.addEventListener('click', () => {
                calculator.operator = operatorButton.textContent;
                calculator.operatorClicked = true;
                updateDisplay();
            });
        });

        calculator.buttons.numbers.forEach(numberButton => {
            numberButton.addEventListener('click', () => {
                if (calculator.operatorClicked) {
                    calculator.operand2 += numberButton.textContent;
                } else {
                    calculator.operand1 += numberButton.textContent;
                }
                updateDisplay();
            });
        });

        calculator.buttons.equals.addEventListener('click', () => {
            const result = calc(calculator.operand1, calculator.operand2, calculator.operator);
            calculator.display.previousOutput.textContent = `${calculator.operand1} ${calculator.operator} ${calculator.operand2} =`;
            calculator.display.currentOutput.textContent = result;
            calculator.operand1 = '';
            calculator.operand2 = '';
            calculator.operator = undefined;
            calculator.operatorClicked = false;
        });

        function updateDisplay() {
            if (calculator.operatorClicked) {
                calculator.display.currentOutput.textContent = `${calculator.operand1} ${calculator.operator} ${calculator.operand2}`;
            } else {
                calculator.display.currentOutput.textContent = `${calculator.operand1} ${calcul