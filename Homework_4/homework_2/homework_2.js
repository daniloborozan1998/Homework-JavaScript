// Suma na site broevi vo nizata
function arraySum(a) {
    var total = 0;
    for (var i in a) {
        total += Number(a[i]);
    }
    return total;
}

var array = [2, 3, 4, 5, 6];
var sum = arraySum(array);
console.log(`Sumata na ovaa niza e: ${sum}`);