class Calculator {

    public currentOutput:  string;
    public previousOutput: string;
/*  private inputs:string[] = [];    */
    public operation:      string;

    constructor() {
      this.currentOutput = '';
      this.previousOutput = '0';
      this.operation = '';
    }

    public getOperation():string {
        return this.operation;
    }
  
    public delete():void {

        this.currentOutput = this.currentOutput.slice(0, -1);
  
      }
    
      public append(value: string):void {
        if (this.isValidInput(value)) {
          this.currentOutput += value;
        }
      }
    

  

    public performOperation                                                                                    // NOTE: case-Schleife für die Rechen-Operationen
    (oPERATOR:string, firstNUMBER:number, secondNUMBER:number):number
     {
      switch (oPERATOR) {
        case 'addition':
          return firstNUMBER + secondNUMBER;                                                                    // Summand + Summand = Summenwert
        case 'subtraction':
          return firstNUMBER - secondNUMBER;                                                                    // Minuend − Subtrahend = Differenzwert
        case 'multiplication':
          return firstNUMBER * secondNUMBER;                                                                    // Multiplikator x Multiplikand = Produktwert
        case 'division':
          return firstNUMBER / secondNUMBER;                                                                    // Dividend / Divisor = Quotientenwert
        default:
          throw new Error(`Keine gültige Eingabe: ${oPERATOR}`);
      }
     }

    public clear() {

      this.currentOutput = '';
      this.previousOutput = '0';

    }

    public calculate() {
      const firstNUMBER = parseFloat(this.previousOutput);
      const secondNUMBER = parseFloat(this.currentOutput);
  
      if (isNaN(firstNUMBER) || isNaN(secondNUMBER)) {
        return;
      }
  
      this.currentOutput = this.performOperation(this.operation, firstNUMBER, secondNUMBER).toString();
      this.previousOutput = '';
    }
  
    public addNumber(number: string) {
      if (this.operation === '') {
        if (this.currentOutput === '0' || this.currentOutput === 'current-output') {
          this.currentOutput = number;
        } else {
          this.currentOutput += number;
        }
      } else {
        this.previousOutput += this.currentOutput + this.operation;
        this.currentOutput = number;
        this.operation = '';
      }
    }
  
    public getCurrentOutput():string {
      return this.currentOutput;
      console.log("🚀 ~ Calculator ~ getCurrentOutput ~ this.currentOutput:", this.currentOutput)
    }
  
    public getPreviousOutput():string {
      return this.previousOutput;
      console.log("🚀 ~ Calculator ~ getPreviousOutput ~ this.previousOutput:", this.previousOutput)
    }

    private isValidInput(input:string):boolean {
        const regex = /^[1-9][0-9]*$/;                                                                          // NOTE: ReGeX Validierung für ganze Zahlen
        return regex.test(input);
        console.log("🚀 ~ Calculator ~ isValidInput ~ regex.test(input):", regex.test(input))
    }
  }
  
  const calculator      = new Calculator();
  
  const buttons         = document.querySelectorAll('button');
  const output          = document.querySelector('[data-current-output]') as HTMLElement;
  const previousOutput  = document.querySelector('[data-previous-output]') as HTMLElement;

function updateDisplay() {                                                                                      //NOTE: function updateDisplay
  output.textContent = calculator.getCurrentOutput() as string;
  previousOutput.textContent = calculator.getPreviousOutput() as string;
}

buttons.forEach((button) => {                                                                                   // NOTE: On-Click
  button.addEventListener('click', () => {

    const buttonId = button.id;
    const buttonText = button.textContent;

    if (buttonId === 'clear') {
      calculator.clear();
      output.textContent = '';

    } else if (buttonId === 'delete') {
      calculator.delete();
      output.textContent = calculator.getCurrentOutput();

    } else if (buttonId.startsWith('operator')) {
      calculator.operation = buttonId.slice(8);
      calculator.addNumber(buttonText as string);
      calculator.calculate();
      updateDisplay();

    } else if (buttonId === 'equal') {
      calculator.calculate();
      updateDisplay();

    } else {
      calculator.append(buttonText as string);
      output.textContent = calculator.getCurrentOutput()?.toString() || '';
    }
      console.log("🚀 ~ Opperator wurde gedrückt:", calculator.calculate())
    
  });
});

// Initial display update
updateDisplay();