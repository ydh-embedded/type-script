

// Wenn ich eine Getter Methode habe ohne setter Methode ist die Eigenschaft readonly
// bei der Setter Methode ohne typ definition wird von der getter methode übernommen
// getter und setter benötigen die gleiche Sichtbarkeit und den gleich RückgabeWert

class Point2D {                 // Eigenschaften ohne weitere Angaben sind immer puplic
    protected _xPOS: number;
    protected _yPOS: number;

    public static NUM_DIMENSIONS = 2  ;      //statscie eigenschaften sind nur über die classen zugänglich

    constructor(xPOSInput:number , yPOSInput:number){
        this._xPOS = xPOSInput ;
        this._yPOS = yPOSInput ;
    }


    // Die Methoden fangen mit get an
    public get xPOS():number{
        return this._xPOS ;
    }
    // Die Methoden fangen mit get an
    public get yPOS():number{
        return this._yPOS ;
    }


    public set xPOS(xPOSnew:number){
        this._xPOS = xPOSnew ;
    }
    public set yPOS(yPOSnew:number){
        this._yPOS = yPOSnew ;
    }
}


const p1 = new Point2D( 0 , 0 );
const p2 = new Point2D( 1 , 1 );

class Point3D extends Point2D {
    protected _zPOS: number ;

constructor(xPOSInput:number , yPOSInput:number , zPOSInput:number){
        super(xPOSInput , yPOSInput) ;
        this._zPOS = zPOSInput       ;
 }
 // Die Methoden fangen mit get an
 public get zPOS():number{
        return this._zPOS ;
 }
 
 
 public set zPOS(zPOSnew:number){
    this._zPOS = zPOSnew ;
 }
}
    console.log('Ab Hier steht TypeScript');

const p3 = new Point3D (  2 , 2 , 2 );
    console.log(p3);

p3.zPOS = 8 ;
const z = p3.zPOS ;
    console.log(z);

