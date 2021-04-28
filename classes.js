var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }
    Ev.prototype.yemekTe = function () {
        console.log(this.kat + " katlı evde Yemek yediniz :p");
    };
    return Ev;
}());
var ev = new Ev(3, 9, 2);
console.log("Oda sayısı= " + ev.odaSayisi + ", Pencere sayısı= " + ev.pencereSayisi + ", Kat sayısı= " + ev.kat);
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.save = function () {
        console.log("Kişi kaydedildi");
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sell = function () {
        console.log("Satış yapıldı");
    };
    return Customer;
}(Person));
var Employer = /** @class */ (function (_super) {
    __extends(Employer, _super);
    function Employer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employer.prototype.salary = function () {
        console.log("Maaş ödendi");
    };
    return Employer;
}(Person));
var customer = new Customer();
customer.save();
customer.sell();
var employer = new Employer();
employer.save();
employer.salary();
