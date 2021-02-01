var username;
var correctPin = (/^[0-9]{4}$/);
var pinTry = 3;
var currentBalance = 15000;


function atmUsername() {
    username = prompt("Enter your name");
    if (username !== "" && username !== null) {
        atmPassword();
    } else {
        atmUsername();
    }
}

function atmPassword() {
    var pinEntry = parseInt(prompt("Dear " + username + ", enter your 4 digit PIN"));
    checkPassword(pinEntry);
}

function checkPassword(userInput) {
    if (correctPin.test(userInput)) {
        selectFunction();
    } else {
        while (!(correctPin.test(userInput))) {
            if (pinTry === 1) {
                alert("Incorrect PIN.");
                alert("Maximum tries exceeded! Your account has been locked. Contact your bank for support.");
                exit();
                break;
            } else {
                pinTry -= 1;
                alert("Incorrect PIN. Please try again.");
                alert("You have " + pinTry + " chance/s to try");
                atmPassword();
            }
        }
    }
}


function selectFunction() {
    var atmFunctions = parseInt(prompt("Hello " + username + ", what can we do for you today? \n 1. Balance \n 2. Withdrawal \n 3. Deposit \n 4. Exit"));
    if (atmFunctions !== "" && atmFunctions !== null && !isNaN(atmFunctions)) {
        switch (atmFunctions) {
            case 1:
                balance();
                break;
            case 2:
                withdrawal();
                break;
            case 3:
                deposit();
                break;
            case 4:
                exit();
                break;
            default:
                alert("Please make a valid selection");
                selectFunction();
        }
    } else {
        alert("Please make a valid selection");
        selectFunction();
    }
}

function balance() {
    alert("Your current balance is $" + currentBalance);
    toContinue();
}

function deposit() {
    var depositAmount = parseInt(prompt("How much do you want to deposit?"));
    if (depositAmount !== "" && depositAmount !== null && !isNaN(depositAmount)) {
        currentBalance += depositAmount;
        alert("You have successfully deposited $" + depositAmount + "\n" + "You now have $" + currentBalance);
        toContinue();
    } else {
        alert("Error: please enter a number!");
        deposit();
    }
}

function withdrawal() {
    var withdrawalAmount = parseInt(prompt("How much do you want to withdraw? \n" + "The minimum amount you can withdraw is $10"));
    if (withdrawalAmount !== "" && withdrawalAmount !== null && !isNaN(withdrawalAmount)) {
        if (withdrawalAmount >= 10) {
            if (withdrawalAmount <= currentBalance) {
                currentBalance -= withdrawalAmount;
                alert("Transaction successful!");
                alert("Your remaining balance is $" + currentBalance);
                toContinue();
            } else {
                alert("You do not have sufficient funds!");
                withdrawal();
            }
        } else {
            alert("You must withdraw at least $10");
            withdrawal();
        }
    } else {
        alert("Error: please enter a number!");
        withdrawal();
    }
}

function toContinue() {
    var yesOrNo = parseInt(prompt("Do you want to perform another transaction? \n 1. Yes \n 2. No"));
    if (yesOrNo !== "" && yesOrNo !== null) {
        if (yesOrNo === 2) {
            exit();
        } else {
            selectFunction();
        }
    } else {
        alert("Please make a valid selection");
        toContinue();
    }
}

function exit() {
    alert("Thanks for visiting");

}

atmUsername();