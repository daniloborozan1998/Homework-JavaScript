let numbers = [1, 22, 3, 14, 5, 46, 7, 28, 19, 10];

function findLagrestvalues(input) {
    let counter = 0;
    let max = -Infinity;
    while (counter < input.length) {
        if (input[counter] > max) {
            max = Number(input[counter]);
        }

        counter++;
    }
    return max;
}

function findMinvalues(input1) {
    let counter1 = 0;
    let min = Infinity;
    while (counter1 < input1.length) {
        if (input1[counter1] < min) {
            min = Number(input1[counter1]);
        }

        counter1++;
    }
    return min;
}



var largestValue = findLagrestvalues(numbers);
var minValue = findMinvalues(numbers);
var sum = largestValue + minValue;

console.log(`Max: ${largestValue}, Min: ${minValue}, Sum: ${sum}`)