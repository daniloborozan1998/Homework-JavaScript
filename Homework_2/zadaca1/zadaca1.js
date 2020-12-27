alert("Vnesete pet razlicni broevi na vlez za da sporedite koj od niv e najgolem.");
var number1 = parseFloat(prompt("Vnesete go prviot broj"));
var number2 = parseFloat(prompt("Vnesete go vtoriot broj"));
var number3 = parseFloat(prompt("Vnesete go cetvrtiot broj"));
var number4 = parseFloat(prompt("Vnesete go cetvrtiot broj"));
var number5 = parseFloat(prompt("Vnesete go petiot broj"));

if (number1 > number2 && number1 > number3 && number1 > number4 && number1 > number5) {
    alert("Najgolem broj e: " + number1);
} else if (number2 > number1 && number2 > number4 && number2 > number3 && number2 > number5) {
    alert("Najgolem broj e: " + number2);
} else if (number3 > number1 && number3 > number4 && number3 > number2 && number3 > number5) {
    alert("Najgolem broj e: " + number3);
} else if (number4 > number1 && number4 > number2 && number4 > number3 && number4 > number5) {
    alert("Najgolem broj e: " + number4);
} else {
    alert("Najgolem broj e: " + number5);
}