

import * as lib from "./lib.js";

    const P01 = new lib.Point2D(0,0);

        console.log(P01);
    
    const P02 = new lib.Point3D(0,0,0);
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






