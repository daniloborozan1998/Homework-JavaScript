let niza = [2, 5, ['a', 'b', 'c'], "sedc"];

let nizaVtora = [2, NaN, 7, ['a', 'b', 'c'], null, "sedc", 0]

function bouncer(arr) {
    let falsy;
    let trueArr = [];

    for (i = 0; i < arr.length; i++) {

        falsy = Boolean(arr[i]);

        if (falsy === true) {

            trueArr.push(arr[i]);

        }

    }

    return trueArr;
}

let niza1 = bouncer(niza);
console.log(niza1);
let niza2 = bouncer(nizaVtora);
console.log(niza2);