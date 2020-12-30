console.log("Kolku maski i zenski ima vo timot:")

function team() {
    var man = prompt("Vnesete kolku maski se vo tim: ");
    var women = prompt("Vnesete kolku zenski se vo tim: ");

    if (women < 10 && man < 10) {
        console.log("0" + women + " devojcinja " + "0" + man + " momcinja");
    } else if (women < 10) {
        console.log("0" + women + " devojcinja " + man + " momcinja");
    } else if (man < 10) {
        console.log(women + " devojcinja " + "0" + man + " momcinja");
    } else {
        console.log(women + " devojcinja " + man + " momcinja");
    }
}
team();