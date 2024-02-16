class Calculator {


    private currentOutput:string;
    private previousOutput:string;

    constructor() {
        this.currentOutput = '';
        this.previousOutput = '';
    }

    public clear():void {
        this.currentOutput = '';
        this.previousOutput = '';
    }

    public delete():void {
        this.currentOutput = this.currentOutput.slice(0, -1);
    }

    public append(value: string):void {
        this.currentOutput += value;
    }

    public calculate():void {
        this.previousOutput = this.currentOutput;
        this.currentOutput = eval(this.currentOutput).toString();
    }

    public getCurrentOutput():string {
        return this.currentOutput;
    }

    public getPreviousOutput():string {
        return this.previousOutput;
    }

}

const CalcuLATOR = new Calculator();

const buttons = document.querySelectorAll <HTMLButtonElement> ('button');
const output = document.querySelector    <HTMLDivElement>    ('[data-current-output]');
const previousOutput = document.querySelector    <HTMLDivElement>    ('[data-previous-output]');

if (!output || !previousOutput) {
    console.error('Ausgabe nicht definiert');
} else {
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

            console.log(`Eingabe: ${buttonId}`);
        });
    });
}



