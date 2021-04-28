var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
    }
    Ev.prototype.yemekTe = function () {
        console.log("Yemek yediniz :p");
    };
    return Ev;
}());
var ev = new Ev(3, 9, 2);
console.log("Oda sayısı= " + ev.odaSayisi + ", Pencere sayısı= " + ev.pencereSayisi + ", Kat sayısı= " + ev.kat);
