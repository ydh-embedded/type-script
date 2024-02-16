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