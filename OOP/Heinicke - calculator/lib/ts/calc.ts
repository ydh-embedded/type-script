
import * as OPP from "./Opperators.js";
    


function Quotientenwert(Dividend:number, Divisor:number):number{
            return Dividend / Divisor;
}

console.log(Quotientenwert(10, 2)); // Output: 5
console.log(Quotientenwert(10, 5)); // Output: 2



function Produktwert(Multiplikator:number, Multiplikand:number):number{
            return Multiplikator * Multiplikand;
}

console.log(Produktwert(10, 2)); // Output: 20
console.log(Produktwert(10, 3)); // Output: 30


function Summenwert(Summant:number, Summand:number):number{
            return Summant + Summand;
}

console.log(Summenwert(10, 2)); // Output: 12
console.log(Summenwert(10, 3)); // Output: 13


function Differenzwert(Minuend:number, Subtrahend:number):number{
            return Minuend - Subtrahend;
}

console.log(Differenzwert(10, 2)); // Output: 12
console.log(Differenzwert(10, 3)); // Output: 13
