
const calculator        = document.querySelector('.calculator');
const display           = calculator.querySelector('.current-output');
const clear             = calculator.querySelector('[data-clear]');
const deleteButton      = calculator.querySelector('[data-delete]');
const operators         = calculator.querySelectorAll('[data-operator]');
const numbers           = calculator.querySelectorAll('[data-number]');
const equals            = calculator.querySelector('[data-equals]');
const previousOperand   = calculator.querySelector('[data-previous-output]');


let operator;
let operand1 = '';
let operand2 = '';
let operatorClicked = false;




function fClear() {
    operand1 = '';
    operand2 = '';
    operator = undefined    ;
    operatorClicked = false ;

    fUpdateDisplay();
}


function fUpdateDisplay() {
    if (operatorClicked) {
        display.textContent = `${operand1} ${operator} ${operand2}`;
    } else {
        display.textContent = `${operand1} ${operand2}`;
    }
}