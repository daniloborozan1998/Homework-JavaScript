let kopce = document.getElementById("submit");
let prvDiv = document.getElementById("vlezovi");
let lista = [];

function printInputs() {

    let vlez = document.getElementsByTagName("input");
    for (i = 0; i < vlez.length; i++) {
        lista.push(vlez[i].value);
    }
    return lista;
}

kopce.addEventListener("click", function(event) {
    printInputs(event.target.value);
    prvDiv.innerHTML += `<p>${lista}</p>`;
});