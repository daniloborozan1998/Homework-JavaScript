let niza = [1, 2, 3, 4, 55, 5, 512];

function oddEven(array) {
    let even = [];
    let odd = [];
    for (let i of array) {

        if (isNaN(array[i])) {
            console.log("Ima string")
        } else {
            if (array[i] % 2 == 0) {
                even.push(array[i]);
            } else {
                odd.push(array[i]);
            }
        }
    }
    console.log(even);
    console.log(odd);
}
oddEven(niza);