class Ev{
    odaSayisi:number;
    pencereSayisi:number;
    kat:number;

    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }

    yemekTe(){
        console.log(this.kat+" katlı evde Yemek yediniz :p")
    }
}

let ev = new Ev(3,9,2);
console.log("Oda sayısı= "+ev.odaSayisi+", Pencere sayısı= "+ev.pencereSayisi+", Kat sayısı= "+ev.kat)

class Person{

    
    get name() : string {
        return "Merhaba "+this.name;
    }
    
    set name(ad : string) {
        this.name= ad;
    }
    
    save(){
        console.log("Kişi kaydedildi");
    }
}

class Customer extends Person{
    sell(){
        console.log("Satış yapıldı");
    }
}

class Employer extends Person{
    salary(){
        console.log("Maaş ödendi");
    }
}

let customer= new Customer()
customer.save();
customer.sell();

let employer = new Employer();
employer.save();
employer.salary();