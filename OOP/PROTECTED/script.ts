class Point2D {                 // Eigenschaften ohne weitere Angaben sind immer puplic
    xPOS: number;
    yPOS: number;

    constructor(xPOSInput:number , yPOSInput:number){
        this.xPOS = xPOSInput ;
        this.yPOS = yPOSInput ;
    }
}


const p1 = new Point2D( 0 , 0 );
const p2 = new Point2D( 1 , 1 );

class Point3D extends Point2D {
    protected zPOS: number ;                                                    // Wir PROTECTED die zPOS

    constructor(xPOSInput:number , yPOSInput:number , zPOSInput:number){
        super(xPOSInput , yPOSInput) ;
        this.zPOS = zPOSInput        ;
    }
}

const p3 = new Point3D (  2 , 2 , 2 );
p3.zPOS = 5 ;                                                                   // Wir können im nachhinein den WERT nicht auf 5 ändern,
console.log(p3);                                                                //  da sich die zPOS im PROTECTED liegt
