
const arg_01 = 'Kurt';
const arg_11 = 'Krämer' ;

let result_1  =   add(arg_01,arg_11) ;



type Add_able = number|string ;




//  function add(argument1:string|number,argument2:string|number){
    function add(argument1:Add_able,argument2:Add_able){

    if( typeof (argument1) == 'number' && typeof (argument2) == 'number'){
        return argument1 + argument2 ;
    }
    if( typeof (argument1) == 'string' && typeof (argument2) == 'string'){
        return argument1 + argument2 ;
    }
    return;
    }






    function printer(arg:Add_able){
        console.log(arg);
    }


    printer('Meine Ausgabe');

    printer(28 + 14);
