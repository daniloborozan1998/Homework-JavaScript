alert("Dobredojdovte na stranata za postavuvanje na vasi recepti!!!!");


function printImeRecept(imeRecept) {

    let header1 = document.createElement("h1");
    header1.innerText = `Imeto na receptot: ${imeRecept}`;
    header1.setAttribute("class", "h1");
    let firstDiv = document.getElementById("prv");
    firstDiv.appendChild(header1);
}

function printKolicinaSostojki(kolicina) {
    let header2 = document.createElement("h2");
    header2.innerText = `Vkupno sostojki za receptot: ${kolicina}`;
    header2.setAttribute("class", "h2");
    let firstDiv = document.getElementById("prv");
    firstDiv.appendChild(header2);

}
let myList = document.getElementById("list");


function printNumber(lista, element) {
    element.innerHTML = "";
    element.innerHTML += "Potrebnite sostojki za receptot se: "
    element.innerHTML += "<ul>";
    for (let list of lista) {
        element.innerHTML += `<li>${list}</li>`;
    }
    element.innerHTML += "</ul>";
}
let imeRecept = prompt("Vnesete go imeto na receotot");
printImeRecept(imeRecept);

let brojNaSostojki = parseInt(prompt("Vnesete kolku sostojki se potrebni"));
printKolicinaSostojki(brojNaSostojki);

let sostojki = [prompt("Vnesete gi potrebnite sostojki:")];
printNumber(sostojki, myList)