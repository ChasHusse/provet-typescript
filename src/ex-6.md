### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel.

Man använder både type och interface för att fefinera ett object:

type User = {
name: string,
age: number,
active: boolean
}

interface {
name: string,
age: number,
active: boolean
}

Som du ser på exemplet över är enda skillnaden här att type = {} medans interface {}, krävs ingen "=" för interface.
När man använder type och interface som funktioner är det också en liten skillnad:

type foundUserType = (value1: string, value2: string) => string
interface foundUserInterface {(value1: string, value2: string): string}

Både type och interface accepterar generiska typer:
interface Test<T, K> {name: T, age: K}
type Test<T, K> = {name: T, age: K}

En stor skillnad på type och interface som jag har märkt är att type accepterar union:
type Transport = 'Bus' | 'Car' | 'Bike' | 'Walk';

Interface kan mergas och extendas, försöker du göra samma sak med types blir det en duplicate varning.

interface User {name: string}
interface User {age: number}

const harry: User = {
name: 'Hussein',
age: 28
}
