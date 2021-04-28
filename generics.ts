function value(x: number): number {
    return x;
}

function value2(x: string): string {
    return x;
}

let number = value(10);
let number2 = value2("a");

console.log(number);
console.log(number2);

function value3<T>(x: T): T {
    return x;
}

let number3 = value3<number>(2);
let string3 = value3<string>("Berlin");

class GenericClass<T{
    degisken: T;
    fonksiyon(parametre: T): T {
        return parametre;
    }
}

let sinif = new GenericClass<number>();

sinif.fonksiyon(3);