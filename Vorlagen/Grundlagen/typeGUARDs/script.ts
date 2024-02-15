
function printAll(arg: string | string[]){
    console.log(arg);
}

function printAllforS(arg: string | string[]){           // Wir verwenden eine for of Schleife
    if(typeof arg === 'object'){                        //Type Narrowing
        for (const s in arg){
            console.log(arg[s]);
            console.log(arg[a]);
        }
        return;
    }
    if (typeof arg === 'string'){
        console.log(arg);
        return;
    }
}
function printAllforA(arg: string | string[]){           // Wir verwenden eine for of Schleife
    if(typeof arg === 'object'){                        //Type Narrowing
        for (const a in arg){
            console.log(arg[a]);
        }
        return;
    }
    if (typeof arg === 'string'){
        console.log(arg);
        return;
    }
}


console.log('Ab Hier steht Type-Script');

const n0: number = 0 ;

    if(!n0){
        console.log(false);
    } else {
        console.log(true);
    }
const stringLeer = '' ;

    if(!stringLeer){
        console.log(false);
    } else {
        console.log(true);
    }





const s = 'Rüdiger' ;
//printAll(s);
printAllforS(s);

const a = ['Michael' , 'Sandra'] ;
//printAll(a);
printAllforA(a);
