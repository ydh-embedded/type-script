interface UserInterface {           // Wir legen daten fest die eine classe beinhaltet
    name:     string ;
    age:      number ;
    courses: string[];
}

type USER3 = {                      // Wir legen mit type nur eine Variable fest
    name:     string ;
    age:      number ;
    courses: string[];
}

let USER0:UserInterface = {
    name:   'Jan'   ,
    age:     27    ,
    courses: ['C','C++', 'Python','Typescript'],
};

let USER1:UserInterface = {
    name:   'Petra'   ,
    age:     21    ,
    courses: ['C','C++', 'Python','Typescript'],
};

let USER2:UserInterface = {
    name:   'Sabine'   ,
    age:     22    ,
    courses: ['C#','C++', 'Java','Typescript'],
};


//  function printUSER(USER:{name:string;age:number;courses:string[]}){
function printUSER(USER:UserInterface){                                         // Wir verwenden statt den langen eintrag das UserInterface
    console.log(USER.name);
    console.log(USER.age);
    console.log(USER.courses);
    return USER;
}


console.log('Hier steht Type-Script');

printUSER(USER0);
printUSER(USER1);
printUSER(USER2);





