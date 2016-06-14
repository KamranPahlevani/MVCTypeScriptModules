/// <reference path="dataservice.ts" />
/// <reference path="../typings/toastr/toastr.d.ts" />
var dataService = new DataService();
var Alerter = (function () {
    function Alerter() {
        this.name = 'Kamran Pahlevani';
    }
    Alerter.prototype.showMessage = function () {
        var msg = dataService.getMessage();
        toastr.info(msg + ', ' + this.name);
    };
    return Alerter;
}());
//# sourceMappingURL=moduledependencies.js.map