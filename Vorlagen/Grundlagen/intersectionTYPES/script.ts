type Permission = {
    permissionLevel?: string ;
};

type User = {                                                                  // Wir legen mit type nur eine Variable fest
    name:     string ;
    age:      number ;
    courses: string[];

};

type UserExtend = Permission & User ;

const USER0: UserExtend = {
    name:   'Jan'   ,
    age:     27    ,
    courses: ['C','C++', 'Python','Typescript'],
    permissionLevel: 'Administrator' ,
};
//  function printUSER(USER:{name:string;age:number;courses:string[]}){
//  function printUSER(USER:UserInterface){                                         // Wir verwenden statt den langen eintrag das UserInterface

function printUSER(USER:UserExtend){                                         // Wir verwenden UserExtend wenn wir die erweiterten Functionen nutzen wollen

    console.log(USER.name);
    console.log(USER.age);
    console.log(USER.courses);
    console.log(USER.permissionLevel);

    return USER;
};

console.log('Hier steht Type-Script');

printUSER(USER0);





