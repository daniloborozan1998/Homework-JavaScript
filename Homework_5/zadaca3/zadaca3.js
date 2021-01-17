let kilogram = 0;

function converterKg() {
    let kg = parseFloat(prompt("Vnesete kilogrami"));

    if (isNaN(kg)) {

        alert("Vnesete kilogrami");
        converterKg();
    } else {

        kilogram = kg / 0.5;
        let firstParagraph = document.createElement("p");
        firstParagraph.innerText += "Konvertirani kilogrami: " + kilogram;
        firstParagraph.setAttribute("class", "p");
        let firstDiv = document.getElementById("content");
        firstDiv.appendChild(firstParagraph);
    }
}

function print(firstname) {

    let header = document.createElement("h1");
    header.innerText = `Zdravo ${firstname} tvojata presmetka e podolu !`;
    header.setAttribute("class", "h1");
    let firstDiv = document.getElementById("content");
    firstDiv.appendChild(header);
}

let firstName = prompt("Vnesete go vaseto celosno ime");



print(firstName);
converterKg();