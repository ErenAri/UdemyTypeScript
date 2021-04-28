function topla(x,y){
    return x+y
}

function topla2(x:number,y:number):number{
    return x+y;
}

let topla3 = function(x:number,y:number):number{
    return x+y;
}

console.log(topla(2,3))
console.log(topla('ankara',3))
console.log(topla2(2,5));
console.log(topla3(35,6))

function topla4(x:number,y:number=4):number{
    return x+y;
}

console.log(topla4(2))

function topla5(x:number,y?:number):number{
    if(y){
        return x+y;
    }
    return x;
}

console.log(topla5(2,24))

function davetEt(ilkDavetli:string,...digerleri:string[]){
    return ilkDavetli+ " " + digerleri.join(" ");
}

console.log(davetEt("Eren","Elon","Steve"))