private inputs: string[] = [];

private isValidInput(input:string):boolean {
    const regex = /^[1-9][0-9]*$/; // Allows any positive integer
    return regex.test(input);
}