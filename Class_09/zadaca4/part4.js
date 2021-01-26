lista = ["Danilo", "Borozan", "javascript", "javascriptJquery", "ajax", "html", "css"]

function print() {
    for (let i of lista) {
        if (i.toString().length > 10) {
            return i;
        }
    }
}

print(lista);
console.log(print(lista));