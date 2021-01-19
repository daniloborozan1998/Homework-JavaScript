let tabela = document.getElementById("sampleTable");
let kopce = document.getElementsByTagName("input")[0];


kopce.addEventListener("click", function() {
    tabela.innerHTML += ` <tr><td>New row nad cell</td> <td>New row nad cell</td> <tr>`
})