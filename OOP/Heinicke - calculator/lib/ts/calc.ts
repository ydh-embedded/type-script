//#region        Division
function Quotientenwert(Dividend:number, Divisor:number):number{
            return Dividend / Divisor;
}

                console.log(Quotientenwert(10, 2));                             // Output: 5
                console.log(Quotientenwert(10, 5));                             // Output: 2

//#endregion
//#region        Multiplikation
function Produktwert(Multiplikator:number, Multiplikand:number):number{
            return Multiplikator * Multiplikand;
}

                console.log(Produktwert(10, 2));                                // Output: 20
                console.log(Produktwert(10, 3));                                // Output: 30
//#endregion
//#region        Addition
function Summenwert(Summant:number, Summand:number):number{
    return Summant + Summand;
}

                console.log(Summenwert(10, 2));                                 // Output: 12
                console.log(Summenwert(10, 3));                                 // Output: 13
                
//#endregion
//#region        Substraktion
function Differenzwert(Minuend:number, Subtrahend:number):number{
            return Minuend - Subtrahend;
}

                console.log(Differenzwert(10, 2));                              // Output: 8
                console.log(Differenzwert(10, 3));                              // Output: 7
//#endregion