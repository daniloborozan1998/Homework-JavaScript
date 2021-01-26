$(document).ready(function() {
    let text = $("#tekst");
    let color = $("#color");

    function validTextColour(boja) {

        if (boja === "") {
            return false;
        }
        if (boja === "inherit") {
            return false;
        }
        if (boja === "transparent") {
            return false;
        }

        var col = $.create("div");
        col.style.color = "rgb(0, 0, 0)";
        col.style.color = boja;
        if (col.style.color !== "rgb(0, 0, 0)") {
            return true;
        }
        col.style.color = "rgb(255, 255, 255)";
        col.style.color = boja;
        return col.style.color !== "rgb(255, 255, 255)";
    }

    $("#kopce").click(function() {
        if (!validTextColour || text.val() === "") {
            $("#kopce").after(`<h3>You enter invalid input</h3>`);
            let h3 = $("h3");

        } else {
            $("#kopce").after(`<h3>${text.val()}</h3>`);
            let h3 = $("h3");
            h3.css("color", `${color.val()}`);
        }


    });




});