




abstract class APPOINTMENTAbstract{

    protected startTime     : Date      ;
    protected endTime       : Date      ;
    protected description   : string    ;

    constructor
    (
     startTimeInput     : Date      ,
     endTimeInput       : Date      ,
     descriptionInput   : string    ,
    )
    {
     this.startTime          = startTimeInput ;
     this.endTime            = endTimeInput    ;
     this.description        = descriptionInput ;
    }
    abstract printAppointment():void;
}





class APPOINTMENTerweitert extends APPOINTMENTAbstract {
    
    constructor
    (
     startTimeInput     :    Date   ,
     endTimeInput       :    Date   ,
     descriptionInput   :   string  ,
    )
    {
     super(startTimeInput , endTimeInput , descriptionInput);
    }

    printAppointment():void{
        console.log(this.startTime , this.endTime , this.description);
        return;
    }


}









class Point2D {
    protected _xPos: number;
    protected _yPos: number;

    // statische Eigenschaften sind nur über die Klasse zugänglich, nicht über deren Instanzen
    public static NUM_DIMENSIONS = 2;

    constructor(xPosInput: number, yPosInput: number) {
        this._xPos = xPosInput;
        this._yPos = yPosInput;
    }

    public get xPos(): number {
        return this._xPos;
    }

    public set xPos(xPosNew: number) {
        this._xPos = xPosNew;
    }

    public get yPos(): number {
        return this._yPos;
    }

    public set yPos(yPosNew: number) {
        this._yPos = yPosNew;
    }
}


class Point3D extends Point2D {
    protected _zPos: number;

    public static override NUM_DIMENSIONS = 3;

    constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
        super(xPosInput, yPosInput);
        this._zPos = zPosInput;

        this._xPos = 3;
        this._zPos = 8;
    }

    public get zPos(): number {
        return this._zPos;
    }

    /* public set zPos(zPosNew: number) {
        this._zPos = zPosNew;
    } */
}

const p1 = new Point2D(0, 0);

p1.xPos = 8; // Aufruf der set-Methode
console.log(p1);
console.log(Point2D.NUM_DIMENSIONS);

const p2 = new Point3D(1, 1, 0);

console.log(p2);

const x = p2.xPos; // Aufruf der get-Methode
console.log(Point3D.NUM_DIMENSIONS);
console.log(x);
