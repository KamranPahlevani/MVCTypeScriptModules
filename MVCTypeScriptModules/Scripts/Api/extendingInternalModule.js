/// <reference path="../typings/toastr/toastr.d.ts" />
var LoggerMode = {
    Console: 1,
    Alert: 2,
    Toastr: 3
};
var App;
(function (App) {
    var Tools;
    (function (Tools) {
        var Utils;
        (function (Utils) {
            var Logger = (function () {
                function Logger(mode) {
                    if (mode === void 0) { mode = LoggerMode.Console; }
                    this.mode = mode;
                    switch (this.mode) {
                        case LoggerMode.Console:
                            this.writer = function (msg) { return console.log(msg); };
                            break;
                        case LoggerMode.Alert:
                            this.writer = function (msg) { return alert(msg); };
                            break;
                        case LoggerMode.Toastr:
                            this.writer = function (msg) { return toastr.info(msg); };
                            break;
                    }
                }
                Logger.prototype.write = function (msg) {
                    this.writer(msg);
                };
                return Logger;
            }());
            Utils.Logger = Logger;
        })(Utils = Tools.Utils || (Tools.Utils = {}));
    })(Tools = App.Tools || (App.Tools = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Tools;
    (function (Tools) {
        var Shapes;
        (function (Shapes) {
            var sPoint = (function () {
                function sPoint(x, y) {
                    this.x = x;
                    this.y = y;
                }
                sPoint.prototype.getDist = function () {
                    return Math.sqrt(this.x * this.x + this.y * this.y);
                };
                return sPoint;
            }());
            Shapes.sPoint = sPoint;
        })(Shapes = Tools.Shapes || (Tools.Shapes = {}));
    })(Tools = App.Tools || (App.Tools = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Tools;
    (function (Tools) {
        var Shapes;
        (function (Shapes) {
            var Point = (function () {
                function Point(heigth, width) {
                    this.heigth = heigth;
                    this.width = width;
                }
                Point.prototype.getPerimeter = function () {
                    return Math.sqrt(this.heigth * 2 + this.width * 2);
                };
                ;
                Point.prototype.getArea = function () {
                    return this.heigth * this.width;
                };
                return Point;
            }());
            Shapes.Point = Point;
        })(Shapes = Tools.Shapes || (Tools.Shapes = {}));
    })(Tools = App.Tools || (App.Tools = {}));
})(App || (App = {}));
var Tools = App.Tools;
var Utils = App.Tools.Utils;
var log = new Tools.Utils.Logger(LoggerMode.Toastr);
var p = new Tools.Shapes.sPoint(3, 4);
var dist = p.getDist();
log.write("distance = " + dist);
//# sourceMappingURL=extendingInternalModule.js.map