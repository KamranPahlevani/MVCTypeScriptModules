/// <reference path="utils.ts" />

module App.myShapes {
    export interface IPoint {
        getDist(): number;
    }

    export interface IRectangle {
        heigth: number;
        width: number;
        getPerimeter(): number;
        getArea(): number;
    }

    export class Point implements IPoint {
        constructor(public x: number, public y: number) {
        }
        getDist() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
    } 

    export class Rectangle implements IRectangle {
        constructor(public heigth: number, public width: number) {
        }
        getPerimeter() {
            return this.heigth * 2 + this.width * 2;
        };
        getArea() {
            return this.heigth * this.width;
        };
    }
}

import myShapes = App.myShapes;

var mylog: myApp.myUtils.ILogger = new myApp.myUtils.Logger(myApp.LoggerMode.Toastr); 

var myP: myShapes.IPoint = new myShapes.Point(3, 4);
var myDist = myP.getDist();
mylog.write("distance = " + myDist);

var myRect: myShapes.IRectangle = new myShapes.Rectangle(10, 4); 
var myPerimeter = myRect.getPerimeter();
mylog.write("perimeter = " + myPerimeter);
