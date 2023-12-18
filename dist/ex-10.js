// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng
// 1. Ge ett exempel på en funktion med en generiskt typ.
function myName(name) {
    console.log(name);
}
myName("Hussein");
// 2. Ge ett exempel på en funktion med två generiska typer.
function numberString(val1, val2) {
    return [val1, val2];
}
console.log(numberString(4, "String"));
var NewData = /** @class */ (function () {
    function NewData(data) {
        this.data = data;
    }
    return NewData;
}());
var nameData = new NewData("Hej");
console.log(nameData.data);
