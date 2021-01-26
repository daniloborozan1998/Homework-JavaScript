$(document).ready(function() {

    $("#firstName").blur(function() {
        if ($("#firstName").val() == "") {
            alert("Vnesete ime")
        } else {
            alert("Vnesovte ime")
        }
    });

    $("#kopce").click(function() {
        if ($("#firstName").val() == "") {
            alert("Vnesi ime");
        } else {
            let ime = $("#firstName");
            $("select").append("<option></option>");
            $("option").text(`${ime.val()}`);
        }
    });
});