let myList = document.getElementById("list");
let numbers = [1, 3, 5, 7, 24, 16];

function printNumber(lista, element) {
    element.innerHTML = "";
    element.innerHTML += "Your number is: "
    element.innerHTML += "<ul>";
    for (let list of lista) {
        element.innerHTML += `<li>${list}</li>`;
    }
    element.innerHTML += "</ul>";
}

printNumber(numbers, myList);

function sum(numbers) {
    let suma = 0;
    for (let i = 0; i < numbers.length; i++) {
        suma += Number(numbers[i]);
    }
    return suma;
}
document.write(`The sum of numbers is: ${sum(numbers)}`);