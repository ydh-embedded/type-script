enum permissionLevel {
    STUDENT     = 'Student'     ,
    INSTRUCTOR  = 'Instructor'  ,
    ADMIN       = 'Administrator',
}
interface UserExtend extends UserInterface {

    permissionLevel?:    string ;                                               // Wenn hier das ? verwendet wird gilt es als optionale Eigenschaft
}

interface UserInterface {                                                       // Wir legen daten fest die eine classe beinhaltet
    name:     string ;
    age:      number ;
    courses: string[];
}

interface UserExtend extends UserInterface {

    permissionLevel?:    string ;                                               // Wenn hier das ? verwendet wird gilt es als optionale Eigenschaft
}



let USER0:UserExtend = {
    name:   'Jan'   ,
    age:     27    ,
    courses: ['C','C++', 'Python','Typescript'],
    permissionLevel: permissionLevel.ADMIN ,
};

let USER1:UserExtend = {
    name:   'Petra'   ,
    age:     21    ,
    courses: ['C','C++', 'Python','Typescript'],
    permissionLevel: permissionLevel.STUDENT ,
};

let USER2:UserExtend = {
    name:   'Sabine'   ,
    age:     22    ,
    courses: ['C#','C++', 'Java','Typescript'],
    permissionLevel: permissionLevel.INSTRUCTOR ,
};


//  function printUSER(USER:{name:string;age:number;courses:string[]}){
//  function printUSER(USER:UserInterface){                                         // Wir verwenden statt den langen eintrag das UserInterface

function printUSER(USER:UserExtend){                                         // Wir verwenden UserExtend wenn wir die erweiterten Functionen nutzen wollen

    console.log(USER.name);
    console.log(USER.age);
    console.log(USER.courses);
    console.log(USER.permissionLevel);

    return USER;
}


console.log('Hier steht Type-Script');

printUSER(USER0);
printUSER(USER1);
printUSER(USER2);
