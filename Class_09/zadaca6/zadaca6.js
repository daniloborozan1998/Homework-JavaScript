function area() {
    let num1 = document.getElementById("a").value;
    let num2 = document.getElementById("b").value;
    let parag = document.getElementById("par");
    if (isNaN(num1) || isNaN(num2)) {
        parag.innerHTML += `Enter the number`;
    } else {
        let rez = num1 * num2;
        parag.innerHTML += `The area is ${rez}.`;
    }


}

let kopce = document.getElementById("submit");
kopce.addEventListener("click", function(e) {
    area(e.target.value);
})

let mouseOver = document.getElementById("par");

function perimetar() {
    let num1 = parseFloat(document.getElementById("a").value);
    let num2 = parseFloat(document.getElementById("b").value);
    let par = document.getElementById("par");
    let rez1 = num1 + num2;
    par.innerHTML += `\nPerimetarpt e: ${rez1}.`;
}
mouseOver.addEventListener("mouseover", function(e) {
    e.target.style.color = "green";
    e.target.style.fontSize = "25px";
    perimetar(e.target.value);



})