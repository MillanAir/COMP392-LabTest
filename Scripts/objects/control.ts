/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        
        rotationFirst: number;
        rotationSecond: number;
        rotationThird: number;
        rotationFourth: number;
        rotationFifth: number;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor( rotationFirst: number, rotationSecond: number, rotationThird: number, rotationFourth: number, rotationFifth: number) {
                this.rotationFirst = rotationFirst;
                this.rotationSecond = rotationSecond;
                this.rotationThird = rotationThird;
                this.rotationFourth = rotationFourth;
                this.rotationFifth = rotationFifth;
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++       
      
    }
}
