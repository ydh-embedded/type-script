
const arg_1 = 38 ;
const arg_2 = 18 ;

let result_  =   addNUMBER(arg_1,arg_2) ;

function addNUMBER(argument1:number,argument2:number){
    return argument1 + argument2 ;
}


const arg_01 = 'Kurt';
const arg_11 = 'Krämer' ;

let result_1  =   add(arg_01,arg_11) ;

function add(argument1:string|number,argument2:string|number){

    if( typeof (argument1) == 'number' && typeof (argument2) == 'number'){
        return argument1 + argument2 ;
    }
    if( typeof (argument1) == 'string' && typeof (argument2) == 'string'){
        return argument1 + argument2 ;
    }
    return;
}

