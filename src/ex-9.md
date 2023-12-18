### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

Beskriv vad generics är i TypeScript och varför de är användbara.
Hur skiljer sig generics från att använda "any" i TypeScript?

Med hjälp av generics kan man använda olika typer utan att förlora det som Typescript till för, att det fortfarande är strukutrerad på rätt
sätt och behåller informationen om typen. Tack vare generics behåller man en typ säker kod som går att återanvända.
Du använder en generic <T> som ersätter och blir data typen som du använder, istället för att hårdkoda varje type och slippa upprepa samma kod med små ändringar använder man generics.

Dessa tre koder kan man ersätta med en genric:
function identity(arg: number): number {
return arg;
}

function identity(arg: string): string {
return arg;
}

function identity(arg: any): any {
return arg;
}

Ersätter alla dessa tre över:
function identity<Type>(arg: Type): Type {
return arg;
}

Du kan använda flera generics och inte bara en, tillexempel:

function userInformation<T, K>(name: T, age: K): T{
return 'My name is ${name} and I am ${age} old.'
}

Med generics kan du göra en säker kod med hjälp av narrowing även, ifall du försöker tillexempel göra T.length så får du en varning och då kan du göra en säkerhetskoll först och kolla om den är en string, om en inte gör nått annat. Mindre bug free kod.

Skulle säga att generics tillexmepl skiljer sig med any främst med outputen, med any kan vad som helst retuneras men med hjälp av generic kan du ha kontroll över det. Med any har du ingen kontroll på varken in eller out put.
