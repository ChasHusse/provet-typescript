// UPPGIFT: Skapa en egen sammansatt typ som beskriver stockMeasurements. Byt ut any mot passande typer / 2 poäng
// Kompilera TS-koden och se att den fortfarande fungerar som den ska.

type Stock = {
  day: string,
  price: number

}

const getRisingStockDays = (stockMeasurements: Stock[]): Stock[] =>
  stockMeasurements.filter((data: Stock) => data.price > 100);

const stockMeasurements: Stock[] = [
  {
    day: "Monday",
    price: 105,
  },
  {
    day: "Tuesday",
    price: 98,
  },
  {
    day: "Wednesday",
    price: 110,
  },
];

const profitableDays: Stock[] = getRisingStockDays(stockMeasurements);
console.log(profitableDays);
