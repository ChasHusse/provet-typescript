// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng


// 1. Ge ett exempel på en funktion med en generiskt typ.

function myName<T>(name: T): void {
    console.log(name)
}
myName("Hussein")


// 2. Ge ett exempel på en funktion med två generiska typer.

function numberString <T, K>(val1: T, val2: K): [T, K] {
    return [val1, val2]
}
console.log(numberString(4, "String"))


// 3. Ge ett exempel på ett interface med en generisk typ.
interface DataInterface<T> {
    data: T
}

class NewData implements DataInterface<string> {
    constructor(public data: string) {}
} 

const nameData = new NewData("Hej")
console.log(nameData.data)
