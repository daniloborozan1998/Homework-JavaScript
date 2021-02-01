let submit = document.getElementById('submit');
let input = document.getElementById('num');
let result = document.getElementById('result');

function par(arr) {
    var counter = arr.length,
        temp = [];
    for (var i = 0; i < counter; i++) {
        if (isNaN(arr[i])) {
            alert('Please enter the number');
        } else {
            temp.push(arr[i]);
            if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0) {
                temp.push('-');
            }
        }

    }
    return temp.join('');


}

function print(input, output) {
    var arr = input.value.split('');
    output.innerHTML = `Result: ${par(arr)}`;
}


submit.addEventListener('click', function() {
    print(input, result);
});
input.addEventListener('focus', function() {
    this.value = "";
});