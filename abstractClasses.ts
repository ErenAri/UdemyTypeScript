abstract class KrediBase {
    constructor() {
        
    }
    save():void{
        console.log("kaydedildi")
    }

    abstract hesapla():void;  
}

class TuketiciKredi extends KrediBase {
    constructor() {
        super();
    }
    hesapla():void{
        console.log("Tüketici kredisine göre hesap yapıldı")
    }
}  

class MortgageKredi extends KrediBase {
    constructor() {
        super();
    }
    hesapla():void{
        console.log("Konut kredisine göre hesap yapıldı")
    }
}  

let tuketiciKredi = new TuketiciKredi();
tuketiciKredi.hesapla();
tuketiciKredi.save();

let mortagageKredi = new MortgageKredi();
mortagageKredi.hesapla();
mortagageKredi.save();