/// <reference path="../typings/toastr/toastr.d.ts" />
var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(heigth, width) {
            this.heigth = heigth;
            this.width = width;
        }
        Rectangle.prototype.getArea = function () { return this.heigth * this.width; };
        ;
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var myProgram;
(function (myProgram) {
    function run() {
        var rect = new Shapes.Rectangle(10, 4);
        var area = rect.getArea();
        toastr.info("area = " + area);
    }
    run();
})(myProgram || (myProgram = {}));
//# sourceMappingURL=internalModule.js.map