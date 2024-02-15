interface Point2D {
    xPOS: number;
    yPOS: number;
    readonly name?:string;
}

const PUNKT01:Point2D = {
    xPOS: 0             ,
    yPOS: 0             ,
    name: 'centerPoint' ,
}
const PUNKT02:Point2D = {
    xPOS: 10            ,
    yPOS: 10            ,
}

PUNKT01.xPOS = 5 ;
PUNKT01.yPOS = 4 ;

console.log(PUNKT01);
console.log(PUNKT02);
