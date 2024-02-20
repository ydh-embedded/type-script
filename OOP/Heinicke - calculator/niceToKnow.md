## clean Coding

- CamelCase-Schreibweis für Methodennamen und Variablen
- arithmetische Opperationen mit gleicher logik vereinfachen
- Eine Eingaben-Prüfung wobei nur Zahlen erlaubt sind
- Für die Eingabe kein Array nutzen sondern String
- Template-Literale für die String-Verkettung
- BUG: **Cannot redeclare block-scoped variable 'buttons'.**
    -   im selben Block wurden buttons deklariert (mit let bzw. mit const)
- BUG: **'CalcuLATOR.getPreviousOutput()' is possibly 'null'**
    -   textContent kann einen String enthalten aber auch Null sein 
    -   da diese Eigenschaft nicht Null sein darf, stellen wir sicher,
        dass ein String zurück gegeben wird
    -   wenn **'CalcuLATOR.getPreviousOutput()'** Null ist,
        dann weisen wir ein leere Zeichenkette zu 
