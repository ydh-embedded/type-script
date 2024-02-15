

import { Point2D as P2D, Point3D as P3D } from "./lib.js";

    const P01 = new P2D(0,0);

        console.log(P01);
    
    const P02 = new P3D(0,0,0);
        console.log(P02);
    
        













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






