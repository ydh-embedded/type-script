# Calculator

wir erstellen einen Calculator mit typescript


## Anforderungen

    -   Grundrechenarten - Opperationen

    -   Clear : ganze - Eingabe löschen
    -   <=   : letzte - Eingabe löschen
  
    -   /    : Opperator - Division
    -   *    : Opperator - Multiplikation
    -   +    : Opperator - Addition
    -   -    : Opperator - Subtraktion
    -   -    : Opperator - Ergebnis (result)
    -   -    : Opperator - Ergebnis (result)

## Division

    -   Das Ergebnis einer Division zweier natürlicher oder ganzer Zahlen ist jedoch nur dann wieder eine natürliche oder ganze Zahl, wenn der Dividend ein Vielfaches des Divisors ist.

    -   Dividend / Divisor = Quotientenwert

## Multiplikation

    -   Die Multiplikation ist der Vorgang der multiplikation zweier Zahlen
  
    -   Multiplikator x Multiplikand = Produktwert

## Addition

    -   Die Addition ist der Vorgang des Zusammenzählens zweier Zahlen

    -   Summand + Summand = Summenwert

## Subtraktion

    -   Die Subtraktion ist der Vorgang des Abziehens einer Zahl von einer anderen Zahl.

    -   Minuend − Subtrahend = Differenzwert

## querySelector

 export class QsOpperator {

    // Query selectors für die Opperatoren
    
    const clearButton           = querySelector<HTMLButtonElement>('[data-clear]');
    const deleteButton          = querySelector<HTMLButtonElement>('[data-delete]');
    const divisionButton        = querySelector<HTMLButtonElement>('[data-operator="division"]');
    const multiplicationButton  = querySelector<HTMLButtonElement>('[data-operator="multiplication"]');
    const additionButton        = querySelector<HTMLButtonElement>('[data-operator="addition"]');
    const substractionButton    = querySelector<HTMLButtonElement>('[data-operator="substraction"]');
    const equalsButton          = querySelector<HTMLButtonElement>('[data-equals]');
    
}