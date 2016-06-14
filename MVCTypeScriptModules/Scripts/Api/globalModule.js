/// <reference path="../typings/toastr/toastr.d.ts" />
var point = (function () {
    function point(x, y) {
        this.x = x;
        this.y = y;
    }
    point.prototype.getDist = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    return point;
}());
var p = new point(3, 4);
var dist = p.getDist();
toastr.info("distance = " + dist);
toastr.error("distance = " + dist);
toastr.success("distance = " + dist);
toastr.warning("distance = " + dist);
//# sourceMappingURL=globalModule.js.map