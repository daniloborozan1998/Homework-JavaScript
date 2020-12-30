var balance = 100.0; //set initial balance.

function get_balance() {
    alert('Tvojot balans e: ' + balance);
    atm();
}


function make_withdrawal() {
    var podignuvanje = parseFloat(prompt('Kolku sakate da podignite?'));
    if (isNaN(podignuvanje) || podignuvanje === '') {
        alert('Error: please enter a number!');
        make_withdrawal();
    } else {
        balance -= podignuvanje;
        get_balance();
    }
}

function error() {
    alert('Error: accepted numbers are 1 through 4.');
    atm();
}

function exit() {
    var confirm_leave = confirm('Odbravte da izlezite.');
    if (confirm_leave) {
        window.close();
    } else {
        atm();
    }
}

function atm() {

    var choice = parseInt(prompt('Select a choice 1.) Balance  2.) Withdrawal 3.) Exit'));

    if (choice === 1) {
        get_balance();
    } else if (choice === 2) {
        make_withdrawal();
    } else if (choice === 3) {
        exit();
    } else {
        error();
    }
}

atm();