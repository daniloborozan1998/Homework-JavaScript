alert("Vnesete godina za da doznaete koj kineski horoskopski znak ste.");
var year = parseInt(prompt("Vnesete ja vasata godina: "));

var znak = (year - 4) % 12;

switch (znak) {
    case 0:
        console.log("Vasiot znak e: Rat");
        break;
    case 1:
        console.log("Vasiot znak e: Ox");
        break;
    case 2:
        console.log("Vasiot znak e: Tiger");
        break;
    case 3:
        console.log("Vasiot znak e: Rabbit");
        break;
    case 4:
        console.log("Vasiot znak e: Dragon");
        break;
    case 5:
        console.log("Vasiot znak e: Snake");
        break;
    case 6:
        console.log("Vasiot znak e: Horse");
        break;
    case 7:
        console.log("Vasiot znak e: Goat");
        break;
    case 8:
        console.log("Vasiot znak e: Monkey");
        break;
    case 9:
        console.log("Vasiot znak e: Rooster");
        break;
    case 10:
        console.log("Vasiot znak e: Dog");
        break;
    case 11:
        console.log("Vasiot znak e: Pig");
        break;
}