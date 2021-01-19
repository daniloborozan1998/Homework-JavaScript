function createTable() {
    redici = prompt("Vnesete broj na redovi za tabelata", 1);
    koloni = prompt("Vnesete broj na koloni za tabelata", 1);

    for (var i = 0; i < parseInt(redici, 10); i++) {
        var red = document.getElementById('myTable').insertRow(i);
        for (var j = 0; j < parseInt(koloni, 10); j++) {
            var kelija = red.insertCell(j);
            kelija.innerHTML = "Row-" + i + " Column-" + j;
        }
    }
}


let kopce = document.getElementById("bt");

kopce.addEventListener("click", function(event) {
    createTable(event.target.value);
});