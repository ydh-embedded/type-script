



function foo(arg:any){
    console.log(arg);
}



let a : number | undefined = undefined ;

console.log(a);


if (!a){                        //undefined wird intern auch als false definiert / verstanden
    console.log('!a');
} else {
    console.log('a');
}


