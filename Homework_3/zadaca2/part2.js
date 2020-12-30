//Nubmer
console.log("Number functions:");

function divides() {
    var a = parseFloat(prompt("Vnesi go prviot broj"));
    var b = parseFloat(prompt("Vnesi go vtoriot broj"));
    let rezultat = a / b;
    return rezultat;
}

console.log("Rezultat: " + divides());



function area() {
    var width = parseFloat(prompt("Vnesi ja Sirinata"));
    var height = parseFloat(prompt("Vnesi ja dolzinata"));
    if (width > 0 && height > 0) {
        return width * height;
    }
    return 0;
}
console.log("Area is: " + area());




// String
console.log("String functions:");

function ime() {
    var fName = prompt("Vnesete go vaseto ime: ");
    var lName = prompt("Vnesete go vaseto prezime: ");
    var fullName = `Srekni praznici vi posakuva ${fName} ${lName}`;
    return fullName;
}
console.log(ime());

//Boolean
console.log("Boolean functions:");

function sporedba() {
    var age = parseInt(prompt("Vnesete gi vasite godinite za da vidite dali ste polnoletni "));

    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
console.log(sporedba());

//Object
console.log("Object function");

function covek() {
    var firstName = "Danilo";
    var lastName = "Borozan";
    var age = 22;
    var eyeColor = "brown";
    var person = `${firstName} ${lastName} ima ${age} godini i ${eyeColor} oci`;
    return person;
}
console.log(covek());

//undefined
function test(t) {
    if (t === undefined) {
        return 'Undefined value!';
    }
    return t;
}

let x;

console.log(test(x));