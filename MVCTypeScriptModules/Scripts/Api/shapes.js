/// <reference path="utils.ts" />
var App;
(function (App) {
    var myShapes;
    (function (myShapes) {
        var Point = (function () {
            function Point(x, y) {
                this.x = x;
                this.y = y;
            }
            Point.prototype.getDist = function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            };
            ;
            return Point;
        }());
        myShapes.Point = Point;
        var Rectangle = (function () {
            function Rectangle(heigth, width) {
                this.heigth = heigth;
                this.width = width;
            }
            Rectangle.prototype.getPerimeter = function () {
                return this.heigth * 2 + this.width * 2;
            };
            ;
            Rectangle.prototype.getArea = function () {
                return this.heigth * this.width;
            };
            ;
            return Rectangle;
        }());
        myShapes.Rectangle = Rectangle;
    })(myShapes = App.myShapes || (App.myShapes = {}));
})(App || (App = {}));
var myShapes = App.myShapes;
var mylog = new myApp.myUtils.Logger(myApp.LoggerMode.Toastr);
var myP = new myShapes.Point(3, 4);
var myDist = myP.getDist();
mylog.write("distance = " + myDist);
var myRect = new myShapes.Rectangle(10, 4);
var myPerimeter = myRect.getPerimeter();
mylog.write("perimeter = " + myPerimeter);
//# sourceMappingURL=shapes.js.map