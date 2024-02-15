



const A01:number[] = [0,0,0];
console.log(A01);

const A02 = [10,10,10];
console.log(A02);

console.log('Ab hier TypeScript');

const S01 = argumentSUMarray( A01);
    console.log(S01);

const S02 = argumentSUMwerte(...A02);
    console.log(S02);







function argumentSUMarray(array:number[]){
    let result: number = 0 ;

    array.forEach((element) => (result += element));

    return result;
}




function argumentSUMwerte(...numbers:number[]){
    let result: number = 0 ;

    numbers.forEach((element) => (result += element));

    return result;
}