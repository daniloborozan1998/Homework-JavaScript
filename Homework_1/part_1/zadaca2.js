alert("Dobredojdovte na vovedniot JavaScript");

//Part 1 - Zadaca2

alert("Otvorete console da ja vidite vkupnata cena na site 30 telefoni")

var cenaTel = 119.95;
var vkupnaCena = null;
var vkupnaCenaKorisnik = null;

vkupnaCenaKorisnik = cenaTel / 100 * 5;
vkupnaCenaKorisnik += cenaTel;
vkupnaCena = vkupnaCenaKorisnik * 30;

console.log(vkupnaCena);
console.log(typeof(vkupnaCena));

//Bonus

alert("Presmetaj ja cenata na telefonite so danok")

var telefonCena = parseInt(prompt("Vnesi ja cenata na telefonot"));
var danok = parseInt(prompt("Vnesete kolku procenti e danokot"));
var brojNaTelefoni = parseInt(prompt("Vnesete za kolku vkupno telefno ke smetate "));
var vkupnataCena = null;
var cenaKorisnik1 = null;

cenaKorisnik1 = telefonCena / 100 * danok;
cenaKorisnik1 += telefonCena;
vkupnataCena = cenaKorisnik1 * brojNaTelefoni;

console.log(vkupnataCena);
console.log(typeof(vkupnataCena));