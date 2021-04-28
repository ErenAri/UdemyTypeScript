interface Product{
    id:number;
    name:string;
    unitPrice:number;
}

class Product2{
    id:number;
    name:string;
    unitPrice:number;
}

function save(product:Product){
    console.log(product.name+" kaydedildi")
}

save({id:1,name:"laptop",unitPrice:10});

let mouse = new Product2();
mouse.name = "Razer";

