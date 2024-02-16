//const calculator = new Calculator();

const buttons           = document.querySelectorAll <HTMLButtonElement> ('button')                  ;
const output            = document.querySelector    <HTMLDivElement>    ('[data-current-output]')   ;
const previousOutput    = document.querySelector    <HTMLDivElement>    ('[data-previous-output]')  ;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;

        if (buttonId === 'clear') {
            calculator.clear();
            output.textContent = '';
            previousOutput.textContent = '';
        } else if (buttonId === 'delete') {
            calculator.delete();
            output.textContent = calculator.getCurrentOutput();
        } else if (buttonId === 'equal') {
            calculator.calculate();
            output.textContent = calculator.getCurrentOutput();
            previousOutput.textContent = '';
        } else {
            calculator.append(buttonId);
            output.textContent = calculator.getCurrentOutput();
        }
    });
});