## Setp 1

        >> npm install --save-dev typescript

## Step 2

    -   um im Browser dev Tools bess nutzen zu könnnen
    -   installieren wir lite-server
    
        >> npm lite-server

## Step 3

    -   franneck94 vsCode Add-On installieren
        -   Typescript Extension Pack
        -   CodingTools

## Step 4

    -   wir markieren eine beliebige Function
    -   und mit rechtsklick machen wir einen Codesnap
        -   Codesnap macht ein gut lesbares Bild von einer Function / Code

## Step 5

    -   wir initialisieren den intro Ordner
    -   und ändern den scrpt eintrag
.

    <code>
        "scripts": {
        "compile": "tsc -p ./" ,
        "watch": "tsc -watch -p ./" ,
        "start": "lite-server"
        }

## Step 6

    -   Im Ordner Intro führen wir den Code aus:
.

        >> tsc -init

## Step 7

    -   in tsconfig Zeilen ändern
    -   "target": "es2021",
    -   "lib": ["es5" , "dom"],

##Step 8 