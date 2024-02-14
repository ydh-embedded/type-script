


let USER0 = {
    name:   'Jan'   ,
    age:     27    ,
    courses: ['C','C++', 'Python','Typescript'],
};

let USER1 = {
    name:   'Petra'   ,
    age:     21    ,
    courses: ['C','C++', 'Python','Typescript'],
};

let USER2 = {
    name:   'Sabine'   ,
    age:     22    ,
    courses: ['C#','C++', 'Java','Typescript'],
};


function  printUSER(USER:{name:string;age:number;courses:string[]}){
    console.log(USER.name);
    console.log(USER.age);
    console.log(USER.courses);
    return USER;
}


console.log('Hier steht Type-Script');

printUSER(USER0);
printUSER(USER1);
printUSER(USER2);





