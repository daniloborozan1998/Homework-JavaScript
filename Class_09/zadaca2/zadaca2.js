function check() {
    let kopce = document.getElementById("submit");
    let prvDiv = document.getElementById("prvDiv");
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
        //pozitiven ili negativen
        if (lista > 0) {
            prvDiv.innerHTML += `<p>Brojot ${lista} e pozitiven</p>`;
        } else if (lista < 0) {
            prvDiv.innerHTML += `<p>Brojot ${lista} e negativen</p>`;
        } else if (lista == 0) {
            prvDiv.innerHTML += `<p>Brojot ${lista} e nula</p>`;
        }
        //// paren ili neparen
        if (lista / 2 == 0) {
            prvDiv.innerHTML += `<p>Brojot e paren</p>`;
        } else {
            prvDiv.innerHTML += `<p>Brojot e neparen</p>`;
        }


    });

}
check();