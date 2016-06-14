/// <reference path="../typings/toastr/toastr.d.ts" />


namespace Shapes {
    export interface IRectangle {
        heigth: number;
        width: number;
        getArea(): number;
    }

    export class Rectangle implements IRectangle {
        constructor(public heigth: number, public width: number) {
        }
        getArea() { return this.heigth * this.width };
    }
}

namespace myProgram {
    function run() {
        var rect: Shapes.IRectangle = new Shapes.Rectangle(10, 4);
        var area = rect.getArea();
        toastr.info("area = " + area);
    }

    run();
}