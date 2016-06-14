/// <reference path="dataservice.ts" />
/// <reference path="../typings/toastr/toastr.d.ts" />

interface IAlerter {
    name: string;
    showMessage(): void;
}

var dataService = new DataService();

class Alerter implements IAlerter { 
    name = 'Kamran Pahlevani';
    showMessage() {
        var msg = dataService.getMessage();
        toastr.info(msg + ', ' + this.name);
    }
}