//Probav so ovaavalidacija koja sum e koristel no mi pecati tri pati namesto edans

$(document).ready(function() {

    jQuery.validator.addMethod("lettersonly", function(value, element) {
        if (this.optional(element) || /^[a-zA-Z]+$/i.test(value)) {
            $("#kopce").click(function() {
                let input = $("#firstName").val();
                let firstName = input;
                let inputL = $("#lastName").val();
                let lastName = inputL;
                let inputA = $("#age").val();
                let age = inputA;
                $("#kopce").last().after(`<h1>Hi, I'm ${firstName} ${lastName} and I'm ${age} years old</h1>`);
            });
        } else {
            return false;
        }
    });


    $('#myForm').validate({
        rules: {
            firstName: {
                lettersonly: true,
                required: true,
                maxlength: 30,
                minlength: 2
            },
            lastName: {
                lettersonly: true,
                required: true,
                maxlength: 30,
                minlength: 2
            },
            age: {
                required: true
            }

        },
        messages: {
            firstName: {
                lettersonly: "please enter characters only",
                required: "please enter your name",
                maxlength: "max length is 30 characters",
                minlength: "min length is 2 characters"
            },
            lastName: {
                lettersonly: "please enter characters only",
                required: "please enter your surname",
                maxlength: "max length is 30 characters",
                minlength: "min length is 2 characters"
            },
            age: {
                required: "please enter your age"
            }
        }
    });




});