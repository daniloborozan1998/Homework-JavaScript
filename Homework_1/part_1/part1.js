alert("Dobredojdovte na vovedniot JavaScript");

//Part 1 - zadaca1

//String

var poraka = "Rezultatite od vaseto smetanje se podolu";
console.log(poraka);
console.log(typeof(poraka));


//Number
alert("Pomnozete dva broja")
var broj1 = prompt("Vnesi go prviot broj");
var broj2 = prompt("Vnesi go vtoriot broj");

alert("Otvorete console da vidite rezultat od mnozenjeto");
broj1 *= broj2;
console.log(broj1);
console.log(typeof(broj1));

alert("Podelete dva broja")
var broj3 = prompt("Vnesi go prviot broj");
var broj4 = prompt("Vnesi go vtoriot broj");
alert("Otvorete console da vidite rezultat  od delenjeto");
broj3 /= broj4;
console.log(broj3);
console.log(typeof(broj3));

alert("Ostatokot od dva broja")
var broj5 = prompt("Vnesi go prviot broj");
var broj6 = prompt("Vnesi go vtoriot broj");

var modul = broj5 % broj6;
alert(modul);

//Boolean

alert("Proverete dali vasot brojot e pogolem ");
var number1 = prompt("Vnesete go vasiot broj");
var number2 = prompt("Vnesete go brojot koj ke go sporeduvate");
alert("Videte vo console dali vasiot broj e pogolem")
var pogolem = number1 > number2;
console.log(pogolem);
console.log(typeof(pogolem));

alert("Proverete dali vasot brojot e pogolem ili ednakov");
var number3 = prompt("Vnesete go vasiot broj");
var number4 = prompt("Vnesetego brojot koj ke go sporeduvate");
alert("Videte vo console dali vasiot broj e pogolem ili ednakov")
var pogolem1 = number3 >= number4;
console.log(pogolem1);
console.log(typeof(pogolem1));

alert("Proverete dali vasot brojot e razlicen od drugiot");
var number5 = prompt("Vnesete go vasiot broj");
var number6 = prompt("Vnesetego brojot koj ke go sporeduvate");
alert("Videte vo console dali vasiot broj e razlicen od drugiot");
var razlicen = number5 != number6;
console.log(razlicen);
console.log(typeof(razlicen));


//String

var poraka1 = "Imajte ubav den ^_^";
console.log(poraka1);
console.log(typeof(poraka1));