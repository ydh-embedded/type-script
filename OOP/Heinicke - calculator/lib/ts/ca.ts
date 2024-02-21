class Calculator {

    public currentOutput:  string;
    public previousOutput: string;
/*  private inputs:string[] = [];    */
    public operation:      string;

    constructor() {
      this.currentOutput = 'current-output';
      this.previousOutput = 'previous-output';
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
    

  

    private performOperation                                                                                    // NOTE: case-Schleife für die Rechen-Operationen
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
      this.previousOutput = '';

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
  
    public addNumber(number:string) {                                                                  //NOTE: current Number + Operator
      if (this.operation === '') {
        this.currentOutput += number;
      } else {
        this.previousOutput += this.currentOutput + this.operation;
        this.currentOutput = number;
        this.operation = '';
      }
    }
  
    public getCurrentOutput():string {
      return this.currentOutput;
    }
  
    public getPreviousOutput():string {
      return this.previousOutput;
    }

    private isValidInput(input:string):boolean {
        const regex = /^[1-9][0-9]*$/;                                                                          // NOTE: ReGeX Validierung für ganze Zahlen
        return regex.test(input);
    }
  }
  
  const calculator      = new Calculator();
  
  const buttons         = document.querySelectorAll('button');
  const output          = document.querySelector('[data-current-output]') as HTMLElement;
  const previousOutput  = document.querySelector('[data-previous-output]') as HTMLElement;
  
  function updateDisplay() {                                                                                    //NOTE: function updateDisplay
    const currentOutput = document.querySelector('.current-output') as HTMLElement;
    const previousOutput = document.querySelector('.previous-output') as HTMLElement;
  
    if (calculator.getPreviousOutput()) {
      previousOutput.textContent = calculator.getPreviousOutput() as string;
    } else {
      previousOutput.textContent = '';
    }
  
    currentOutput.textContent = calculator.getCurrentOutput() as string;
  }
  
  buttons.forEach(button => {                                                                               // NOTE: On-Click

    button.addEventListener('click', () => {
      const buttonId = button.id;
      const buttonText = button.textContent;
  
      if (buttonId === 'clear') {                                                                           // NOTE: Clear Button
        calculator.clear();
        output.textContent = '';

      } else if (buttonId === 'delete') {                                                                   // NOTE: Delete Button
        calculator.delete();
        output.textContent = calculator.getCurrentOutput();

      } else if (buttonId.startsWith('oPERATOR')) {
        calculator.operation = buttonId.slice(8); 
        calculator.addNumber(buttonText as string);
        calculator.calculate();
        output.textContent = calculator.getCurrentOutput();

      } else if (buttonId === 'equal') {
        calculator.calculate();
      } else {
        calculator.append(buttonText as string);
        output.textContent = calculator.getCurrentOutput()?.toString() || '';
      }
    })
})
