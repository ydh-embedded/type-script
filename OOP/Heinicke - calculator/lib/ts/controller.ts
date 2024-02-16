// Import necessary DOM elements and event listeners
import { document } from 'dom';

// Get the necessary DOM elements
const calculator = document.querySelector('.calculator') as HTMLElement;
//const display = calculator.querySelector('.display') as HTMLElement;
const buttons = Array.from(calculator.querySelectorAll('button')) as HTMLButtonElement[];

// Variables to store the current operation and operand
let currentOperation: string | null = null;
let currentOperand: string = '';

// Function to handle button clicks
function handleButtonClick(event: Event) {
    const button = event.target as HTMLButtonElement;
    const operation = ['button.dataset.operation'];
    const number = ['button.dataset.number'];
    const deleteButton = ['button.dataset.delete'];
    const clearButton = ['button.dataset.clear'];
    const equalsButton = ['button.dataset.equals'];

    if (operation) {
        handleOperation(operation);
    } else if (number) {
        handleNumber(number);
    } else if (deleteButton) {
        handleDelete();
    } else if (clearButton) {
        handleClear();
    } else if (equalsButton) {
        handleEquals();
    }
}

// Function to handle operations
function handleOperation(operation: string) {
    if (currentOperand === '') return;
    if (currentOperation && currentOperand) {
        handleEquals();
    }
    currentOperation = operation;
}

// Function to handle numbers
function handleNumber(number: string) {
    currentOperand = currentOperand === '0' ? number : currentOperand + number;
    updateDisplay();
}

// Function to handle delete
function handleDelete() {
    currentOperand = currentOperand.toString().slice(0, -1) || '0';
    updateDisplay();
}

// Function to handle clear
function handleClear() {
    currentOperand = '0';
    currentOperation = null;
    updateDisplay();
}

// Function to handle equals
function handleEquals() {
    if (currentOperation === '+') {
        currentOperand = (parseFloat(currentOperand) + parseFloat(currentOperand)).toString();
    } else if (currentOperation === '-') {
        currentOperand = (parseFloat(currentOperand) - parseFloat(currentOperand)).toString();
    } else if (currentOperation === '*') {
        currentOperand = (parseFloat(currentOperand) * parseFloat(currentOperand)).toString();
    } else if (currentOperation === '/') {
        currentOperand = (parseFloat(currentOperand) / parseFloat(currentOperand)).toString();
    }
    currentOperation = null;
    updateDisplay();
}

// Function to update the display
function updateDisplay() {
    const previousOutput = calculator.querySelector('[data-previous-output]') as HTMLElement;
    const currentOutput = calculator.querySelector('[data-current-output]') as HTMLElement;
    previousOutput.textContent = currentOperation || '';
    currentOutput.textContent = currentOperand;
}

// Add event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});