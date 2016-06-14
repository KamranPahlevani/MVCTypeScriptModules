/// <reference path="../typings/toastr/toastr.d.ts" />
var myApp;
(function (myApp) {
    myApp.LoggerMode = {
        Console: 1,
        Alert: 2,
        Toastr: 3
    };
    var myUtils;
    (function (myUtils) {
        var Logger = (function () {
            function Logger(mode) {
                if (mode === void 0) { mode = myApp.LoggerMode.Console; }
                this.mode = mode;
                switch (this.mode) {
                    case myApp.LoggerMode.Console:
                        this.writer = function (msg) { return console.log(msg); };
                        break;
                    case myApp.LoggerMode.Alert:
                        this.writer = function (msg) { return alert(msg); };
                        break;
                    case myApp.LoggerMode.Toastr:
                        this.writer = function (msg) { return toastr.info(msg); };
                        break;
                }
            }
            Logger.prototype.write = function (msg) {
                this.writer(msg);
            };
            return Logger;
        }());
        myUtils.Logger = Logger;
    })(myUtils = myApp.myUtils || (myApp.myUtils = {}));
})(myApp || (myApp = {}));
//# sourceMappingURL=utils.js.map