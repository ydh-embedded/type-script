class Calculator {


    private currentOutput:string;
    private previousOutput:string;
    private inputs:         string[] = [];


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

    public append(value: string): void {
        this.inputs.push(value);
        this.currentOutput = this.inputs.join('');
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


    public division():void {

        const Dividend = parseFloat(this.inputs[0]);
        const Divisor = parseFloat(this.inputs[1]);

        const Quotientenwert = Dividend / Divisor;

        this.previousOutput = this.currentOutput;
        this.currentOutput = Quotientenwert.toString();
        this.inputs = [];
    }

    public multiplication():void {

        const Multiplikand = parseFloat(this.inputs[0]);
        const Multiplikator = parseFloat(this.inputs[1]);

        const Produktwert = Multiplikand * Multiplikator;

        this.previousOutput = this.currentOutput;
        this.currentOutput = Produktwert.toString();
        this.inputs = [];
    }

    public addition():void {

        const summand1 = parseFloat(this.inputs[0]);
        const summand2 = parseFloat(this.inputs[1]);

        const Summenwert = summand1 + summand2;

        this.previousOutput = this.currentOutput;
        this.currentOutput = Summenwert.toString();
        this.inputs = [];
    }

    public substraction():void {

        const Minuend   = parseFloat(this.inputs[0]);
        const Subtrahend = parseFloat(this.inputs[1]);

        const Differenzwert = Minuend - Subtrahend;

        this.previousOutput = this.currentOutput;
        this.currentOutput = Differenzwert.toString();
        this.inputs = [];
    }


}

const CalcuLATOR     = new Calculator();

const buttons        = document.querySelectorAll <HTMLButtonElement> ('button');
const output         = document.querySelector    <HTMLDivElement>    ('[data-current-output]');
const previousOutput = document.querySelector    <HTMLDivElement>    ('[data-previous-output]');

const previous       = '';
const current        = '';

if (!output || !previousOutput) {
    console.error('Ausgabe nicht definiert');
    console.time('fetsching data');

    
} else {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonID   = button.id;
            const buttonNAME = button.name;

            if (buttonID === 'clear') {
                CalcuLATOR.clear();
                output.textContent = '';
                // previousOutput.textContent = '';
            } else if (buttonID === 'delete') {
                CalcuLATOR.delete();
                output.textContent = CalcuLATOR.getCurrentOutput();
            } else if (buttonID === 'equal') {
                CalcuLATOR.calculate();
                output.textContent = CalcuLATOR.getCurrentOutput();
                // previousOutput.textContent = '';
            } else if (buttonID === 'division') {
                CalcuLATOR.division();
                output.textContent = CalcuLATOR.getCurrentOutput();
                // previousOutput.textContent = '';
            } else if (buttonID === 'multiplication') {
                CalcuLATOR.multiplication();
                output.textContent = CalcuLATOR.getCurrentOutput();
                // previousOutput.textContent = '';
            } else if (buttonID === 'addition') {
                CalcuLATOR.addition();
                output.textContent = CalcuLATOR.getCurrentOutput();
                // previousOutput.textContent = '';
            } else if (buttonID === 'substraction') {
                CalcuLATOR.substraction();
                output.textContent = CalcuLATOR.getCurrentOutput();
                // previousOutput.textContent = '';
            } else {
                if (buttonNAME){
                    CalcuLATOR.append(buttonNAME);
                    output.textContent = CalcuLATOR.getCurrentOutput();
                }
            }

            console.log(`Eingabe: ${buttonNAME}`);
            console.timeEnd('fetsching data');
        });
    });
}



