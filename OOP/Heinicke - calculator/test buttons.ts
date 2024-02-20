const buttons = document.querySelectorAll('button');
const output = document.querySelector('.current-output') as HTMLElement;
const previousOutput = document.querySelector('.previous-output') as HTMLElement;

function updateDisplay() {
  if (calculator.getPreviousOutput()) {
    previousOutput.textContent = calculator.getPreviousOutput() as string;
  } else {
    previousOutput.textContent = '';
  }

  output.textContent = calculator.getCurrentOutput() as string;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonId = button.id;
    const buttonText = button.textContent;

    if (buttonId === 'clear') {
      calculator.clear();
      output.textContent = '';
    } else if (buttonId === 'delete') {
      calculator.delete();
      output.textContent = calculator.getCurrentOutput() as string;
    } else if (buttonId.startsWith('oPERATOR')) {
      calculator.operation = buttonId.slice(8) as string;
      calculator.addNumber(buttonText);
      calculator.calculate();
      output.textContent = calculator.getCurrentOutput() as string;
    } else if (buttonId === 'equal') {
      calculator.calculate();
    }

    updateDisplay();
  });
});