### DIN UPPGIFT: Besvara fråga 1 och 2 i denna md-fil. Fråga 3 behöver du inte besvara, utan den utför du.

1. Vad är Typescript och och hur skiljer det sig från Javascript? / 2 poäng
2. Vad är fördelen att använda sig av Typescript? Finns det nackdelar? / 2 poäng
3. Initiera ett vanilla TS-projekt så att du kan kompilera
   Typescript i alla ts-filer i en och samma mapp (src). De kompilerade filerna ska hamna i en dist-mapp. / 2 poäng

   Typescript är byggt på Javascript. Typescript gör att koden blir mer robust för att man använder statisk typning vilket hjälper till att
   identifera fel och gör det lättare för kodaren att hitta fel på en gång tack vare det. Man kompilerar typescript till vanlig JS-kod, så det kan användas på samma sätt som vanilla Javascript, både i webbläsare och node js miljör. Man upptäcker errors i kompilering istället för vid körning.

   En stor fördel är att koden blir lättare att underhålla samt göra den mer robust. När man jobbar med större project med mycket kod
   hjälper den statiska typningen som Typescript erbjuder att koden blir lättare att hantera och förstå, det blir en mer strukterad kod med lite mer regler som gör att det blir mindre errors. Det blir en direkt felsökning där fel upptäcks på en gång. Koden blir mer förutsägbar och självbeskrivande i många fall. Om en ny programmerare ska jobba på koden så är det mycket lättare då kodaren följer många av typningen man använt och gör att det inte blir lika stor förvirnig.

   En nackdel kan vara att det är lite mer och lära sig om man redan kan vanilla Javascript och ofta kan det bli mer kod att skriva. Samt att med kompilering blir det ett extra steg och att inte alla tredjepartsbiblotek som funkar för vanilla Javascript inte funkar fullt ut direkt för Typescript utan att man kanske måste göra fler steg för att få det att funka.
