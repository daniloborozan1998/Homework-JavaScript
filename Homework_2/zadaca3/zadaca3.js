alert("Vnesi ja tvojata godina i presmetaj koj Kineski horoskopski znak si ");
var year = parseInt(prompt("Vnesete ja vasata godina: "));

var znak = (year - 4) % 12;

console.log(znak);

if (znak === 0) {
    alert("Vasiot znak e: Rat");
} else if (znak === 1) {
    alert("Vasiot znak e: Ox");
} else if (znak === 2) {
    alert("Vasiot znak e: Tiger");
} else if (znak === 3) {
    alert("Vasiot znak e: Rabbit");
} else if (znak === 4) {
    alert("Vasiot znak e: Dragon");
} else if (znak === 5) {
    alert("Vasiot znak e: Snake");
} else if (znak === 6) {
    alert("Vasiot znak e: Horse");
} else if (znak === 7) {
    alert("Vasiot znak e: Goat");
} else if (znak === 8) {
    alert("Vasiot znak e: Monkey");
} else if (znak === 9) {
    alert("Vasiot znak e: Rooster");
} else if (znak === 10) {
    alert("Vasiot znak e: Dog");
} else if (znak === 11) {
    alert("Vasiot znak e: Pig");
}