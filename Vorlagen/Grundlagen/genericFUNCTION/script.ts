




type ATypes = number[] | string[] | boolean[];


function getFirstElementArrayTypes(arr:ATypes){
    return arr[0];
}

function getFirstElement<Type>(arr:Type[]){                                     // Wir erwartten ein Array im Parameter aber was in dem array drin steht ist noch offen
    return arr[0];                                                              // Bei Any würde es nicht functionieren da any auch kein Array sein kann
}

console.log('Hier steht Type-Script');

const array01 = [1,2,3];
console.log(getFirstElement(array01));

const array02 = [ true, false, true ];
console.log(getFirstElement(array02));

const array03 = [ 'Detlef' , 'Maria'];
console.log(getFirstElement(array03));






function mapping <InputType , OutputType>(
    _array: InputType[],
    _function: (arg: InputType) => OutputType ,         // input liefert Output
): OutputType[]{
    return _array.map(_function);                       // Output liefert ein Array
}

const array3 = [1,2,3];
const fn = (n: number) => n.toString();                 // input als number  output als string

const array4 = mapping (array3 , fn) ;                  // 


