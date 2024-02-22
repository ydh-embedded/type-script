class Calculator {
  public currentOutput: string;
  public previousOutput: string;
  public oPERATOR: string;

  constructor() {
    this.currentOutput = '0';
    this.previousOutput = '';
    this.oPERATOR = '';
  }

  public getOperation(): string {
    return this.oPERATOR;
  }

  public delete(): void {
    this.currentOutput = this.currentOutput.slice(0, -1);
  }

  public append(value: string): void {
    if (this.isValidInput(value)) {
      this.currentOutput += value;
    }
  }

  public performOperation(oPERATOR: string, firstNUMBER: number, secondNUMBER: number) {
    switch (oPERATOR) {
      case '+':
        this.currentOutput = (firstNUMBER + secondNUMBER).toString();
        break
      case '-':
        this.currentOutput = (firstNUMBER - secondNUMBER).toString();
        break
      case '*':
        this.currentOutput = (firstNUMBER * secondNUMBER).toString();
        break
      case '/':
        this.currentOutput = (firstNUMBER / secondNUMBER).toString();
        break
      default:
        return;
      console.log();
    }
  }

  public clear() {
    this.currentOutput = '';
    this.previousOutput = '';
  }

  public calculate() {
    let firstNUMBER = parseFloat(this.previousOutput);
    let secondNUMBER = parseFloat(this.currentOutput);

    if (isNaN(firstNUMBER) || isNaN(secondNUMBER)) {
      return;
    }

    this.performOperation(this.oPERATOR, firstNUMBER, secondNUMBER);
    this.previousOutput = `${firstNUMBER} ${this.oPERATOR} ${secondNUMBER} =`;
  }

  public addNumber(number: string) {
    if (this.oPERATOR === '') {
      if (this.currentOutput === '0') {
        this.currentOutput = number;
      } else {
        this.currentOutput += number;
      }
    } else {
      this.previousOutput = this.currentOutput;
      this.currentOutput = number;
      //this.oPERATOR = '';
    }
  }

  public getCurrentOutput(): string {
    return this.currentOutput;
  }

  public getPreviousOutput(): string {
    return this.previousOutput;
  }

  private isValidInput(input: string): boolean {
    const regex = /^[1-9][0-9]*$/;
    return regex.test(input);
  }
}

const calculator  = new Calculator();

const buttons      = document.querySelectorAll('button');
const output        = document.querySelector('[data-current-output]') as HTMLElement;
const previousOutput = document.querySelector('[data-previous-output]') as HTMLElement;
const oPERATOR = document.querySelectorAll('[data-operation]');

function updateDisplay() {
  output.textContent = calculator.getCurrentOutput() as string;
  previousOutput.textContent = calculator.getPreviousOutput() as string;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonId = button.id;
    const buttonText = button.textContent;

    if (buttonId === 'clear') {
      calculator.clear();
      output.textContent = '';

    } else if (buttonId === 'delete') {
      calculator.delete();
      output.textContent = calculator.getCurrentOutput();

    } else if (button.dataset['operation']) {
      calculator.oPERATOR = button.textContent;
      calculator.calculate();
      calculator.addNumber(buttonText as string);
      updateDisplay();
      console.log("Operator:", calculator.oPERATOR);

    } else if (buttonId === 'equal') {
      calculator.calculate();
      updateDisplay();

    } else {
      calculator.append(buttonText as string);
      output.textContent = calculator.getCurrentOutput()?.toString() || '';
    }


    console.log("Eingabe:", calculator);
  });
});

// Initial display update
updateDisplay();