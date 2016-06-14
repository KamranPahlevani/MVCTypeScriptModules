/// <reference path="../typings/toastr/toastr.d.ts" />

interface ILogger {
   write: (msg: string) => void;
}

interface IPoint {
    x: number;
    y: number;
    getDist(): number;
}

interface IRectangle {
    heigth: number;
    width: number;
    getPerimeter(): number;
    getArea(): number;
}

var LoggerMode = {
    Console: 1,
    Alert: 2,
    Toastr: 3
}

module App.Tools.Utils {
    export class Logger implements ILogger {
        private writer: any;
        constructor(public mode: number = LoggerMode.Console) {
            switch (this.mode) {
                case LoggerMode.Console:
                    this.writer = (msg: string) => console.log(msg);
                    break;
                case LoggerMode.Alert:
                    this.writer = (msg: string) => alert(msg);
                    break;
                case LoggerMode.Toastr:
                    this.writer = (msg: string) => toastr.info(msg);
                    break;
            }
        }
        write(msg) {
            this.writer(msg);
        }
    }
}

module App.Tools.Shapes {
    export class sPoint implements IPoint {
        constructor(public x: number, public y: number) {
        }
        getDist() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
}

module App.Tools.Shapes {
    export class Point implements IRectangle {
        constructor(public heigth: number, public width: number) {
        }
        getPerimeter() {
            return Math.sqrt(this.heigth * 2 + this.width * 2);
        };
        getArea() {
            return this.heigth * this.width
        }
    }
}

import Tools = App.Tools;
import Utils = App.Tools.Utils;
var log = new Tools.Utils.Logger(LoggerMode.Toastr);
var p: IPoint = new Tools.Shapes.sPoint(3, 4);
var dist = p.getDist();
log.write("distance = " + dist);
