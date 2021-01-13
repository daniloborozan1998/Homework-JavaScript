// neznam kako da go napravam neparnite broevi da bidat vo eden red a ne eden pod dug
function parNepar() {

    for (var i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(i + "\n")
        }
    }
    for (var j = 1; j <= 20; j++) {
        if (j % 2 != 0) {
            console.log(`${j}`);
        }
    }
}

parNepar();