$(document).ready(function() {

    $("#kopce").click(function() {

        let input = $("#firstName").val();
        let firstName = input;
        let inputL = $("#lastName").val();
        let lastName = inputL;
        let inputA = $("#age").val();
        let age = inputA;
        if (firstName == "" || !isNaN(firstName) || lastName == "" || !isNaN(lastName)) {
            $("#kopce").last().after(`<h1>Hi, please enter the characters.</h1>`);
        } else {
            $("#kopce").last().after(`<h1>Hi, I'm ${firstName} ${lastName} and I'm ${age} years old</h1>`);
        }



    });




});