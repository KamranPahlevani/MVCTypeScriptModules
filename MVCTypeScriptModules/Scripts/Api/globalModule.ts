/// <reference path="../typings/toastr/toastr.d.ts" />

interface IPoint {
    getDist(): number;
}

class point implements IPoint {
    constructor(public x: number, public y: number) {
    }

    getDist() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

var p: IPoint = new point(3, 4);
var dist = p.getDist();
toastr.info("distance = " + dist);
toastr.error("distance = " + dist);
toastr.success("distance = " + dist);
toastr.warning("distance = " + dist);



