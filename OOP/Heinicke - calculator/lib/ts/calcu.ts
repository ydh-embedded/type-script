const CalcuLATOR = new Calculator();

const buttons           = document.querySelectorAll <HTMLButtonElement> ('button')                  ;
const output            = document.querySelector    <HTMLDivElement>    ('[data-current-output]')   ;
const previousOutput    = document.querySelector    <HTMLDivElement>    ('[data-previous-output]')  ;



buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;

        if (buttonId === 'clear') {
            
            CalcuLATOR.clear();
            output.textContent = '';
            previousOutput.textContent = '';
        } else if (buttonId === 'delete') {
            
            CalcuLATOR.delete();
            output.textContent = CalcuLATOR.getCurrentOutput();
        } else if (buttonId === 'equal') {
            
            CalcuLATOR.calculate();
            output.textContent = CalcuLATOR.getCurrentOutput();
            previousOutput.textContent = '';
        } else {
            
            CalcuLATOR.append(buttonId);
            output.textContent = CalcuLATOR.getCurrentOutput();
        }
    });
});