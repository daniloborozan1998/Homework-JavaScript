// Nemav vreme da gi dostavam kopcinjata

$(document).ready(function() {
    let btnPeople = $("#btnPeople");
    let btnShips = $("#btnShips");
    let result = $("#result");

    function printPeople() {
        $.ajax({
            url: `https://swapi.dev/api/people/?page=1`,
            success: function(rez) {

                result.append(`<tr><th><h5>Name:</h5></th><th><h5>Hight:</h5></th><th><h5>Mass:</h5></th><th><h5>Gender:</h5></th><th><h5>Birth year:</h5></th> <th><h5>Films:</h5></th></tr><tr><th>${rez.results[0].name}</th><th>${rez.results[0].height}</th><th>${rez.results[0].mass}</th><th>${rez.results[0].gender}</th><th>${rez.results[0].birth_year}</th><th>${rez.results[0].films.length}</th></tr>`)
                result.append(`<tr><th>${rez.results[1].name}</th><th>${rez.results[1].height}</th><th>${rez.results[1].mass}</th><th>${rez.results[1].gender}</th><th>${rez.results[1].birth_year}</th><th>${rez.results[1].films.length}</th></tr>`);
                result.append(`<tr><th>${rez.results[2].name}</th><th>${rez.results[2].height}</th><th>${rez.results[2].mass}</th><th>${rez.results[2].gender}</th><th>${rez.results[2].birth_year}</th><th>${rez.results[2].films.length}</th></tr>`)
                result.append(`<tr><th>${rez.results[3].name}</th><th>${rez.results[3].height}</th><th>${rez.results[3].mass}</th><th>${rez.results[3].gender}</th><th>${rez.results[3].birth_year}</th><th>${rez.results[3].films.length}</th></tr>`)
                result.append(`<tr><th>${rez.results[4].name}</th><th>${rez.results[4].height}</th><th>${rez.results[4].mass}</th><th>${rez.results[4].gender}</th><th>${rez.results[4].birth_year}</th><th>${rez.results[4].films.length}</th></tr>`)
                result.append(`<tr><th>${rez.results[5].name}</th><th>${rez.results[5].height}</th><th>${rez.results[5].mass}</th><th>${rez.results[5].gender}</th><th>${rez.results[5].birth_year}</th><th>${rez.results[5].films.length}</th></tr>`)
                result.append(`<tr><th>${rez.results[6].name}</th><th>${rez.results[6].height}</th><th>${rez.results[6].mass}</th><th>${rez.results[6].gender}</th><th>${rez.results[6].birth_year}</th><th>${rez.results[6].films.length}</th></tr>`)
                result.append(`<tr><th>${rez.results[7].name}</th><th>${rez.results[7].height}</th><th>${rez.results[7].mass}</th><th>${rez.results[7].gender}</th><th>${rez.results[7].birth_year}</th><th>${rez.results[7].films.length}</th></tr>`)
                result.append(`<tr><th>${rez.results[8].name}</th><th>${rez.results[8].height}</th><th>${rez.results[8].mass}</th><th>${rez.results[8].gender}</th><th>${rez.results[8].birth_year}</th><th>${rez.results[8].films.length}</th></tr>`)
                result.append(`<tr><th>${rez.results[9].name}</th><th>${rez.results[9].height}</th><th>${rez.results[9].mass}</th><th>${rez.results[9].gender}</th><th>${rez.results[9].birth_year}</th><th>${rez.results[9].films.length}</th></tr>`)

                $("h5").css("padding-right", "85px");
                $("th").css("padding-right", "45px");
                $("h5").css("color", "yellow");
                $("#btnNext").css("display", "inline")
                $("#btnNext").click(function(rez) {
                    $("#result").empty()
                    $("#btnPrev").css("display", "inline")


                })
            },
            error: function(err) {
                document.write(err);
            }
        })
    };

    btnPeople.click(function() {
        $("#result").empty()
        printPeople();
    })


    function printShips() {
        $.ajax({
            url: `https://swapi.dev/api/starships/?page=1`,
            success: function(rez) {

                result.append(`<tr><th><h5>Name:</h5></th><th><h5>Model:</h5></th><th><h5>Manufacturer:</h5></th><th><h5>Cost:</h5></th><th><h5>People Capacity:</h5></th> <th><h5>Class:</h5></th></tr><tr><th>${rez.results[0].name}</th><th>${rez.results[0].model}</th><th>${rez.results[0].manufacturer}</th><th>${rez.results[0].cost_in_credits}</th><th>${rez.results[0].passengers}</th><th>${rez.results[0].starship_class}</th></tr>`)
                result.append(`<tr><th>${rez.results[1].name}</th><th>${rez.results[1].model}</th><th>${rez.results[1].manufacturer}</th><th>${rez.results[1].cost_in_credits}</th><th>${rez.results[1].passengers}</th><th>${rez.results[1].starship_class}</th></tr>`)
                result.append(`<tr><th>${rez.results[2].name}</th><th>${rez.results[2].model}</th><th>${rez.results[2].manufacturer}</th><th>${rez.results[2].cost_in_credits}</th><th>${rez.results[2].passengers}</th><th>${rez.results[2].starship_class}</th></tr>`)
                result.append(`<tr><th>${rez.results[3].name}</th><th>${rez.results[3].model}</th><th>${rez.results[3].manufacturer}</th><th>${rez.results[3].cost_in_credits}</th><th>${rez.results[3].passengers}</th><th>${rez.results[3].starship_class}</th></tr>`)
                result.append(`<tr><th>${rez.results[4].name}</th><th>${rez.results[4].model}</th><th>${rez.results[4].manufacturer}</th><th>${rez.results[4].cost_in_credits}</th><th>${rez.results[4].passengers}</th><th>${rez.results[4].starship_class}</th></tr>`)
                result.append(`<tr><th>${rez.results[5].name}</th><th>${rez.results[5].model}</th><th>${rez.results[5].manufacturer}</th><th>${rez.results[5].cost_in_credits}</th><th>${rez.results[5].passengers}</th><th>${rez.results[5].starship_class}</th></tr>`)
                result.append(`<tr><th>${rez.results[6].name}</th><th>${rez.results[6].model}</th><th>${rez.results[6].manufacturer}</th><th>${rez.results[6].cost_in_credits}</th><th>${rez.results[6].passengers}</th><th>${rez.results[6].starship_class}</th></tr>`)
                result.append(`<tr><th>${rez.results[7].name}</th><th>${rez.results[7].model}</th><th>${rez.results[7].manufacturer}</th><th>${rez.results[7].cost_in_credits}</th><th>${rez.results[7].passengers}</th><th>${rez.results[7].starship_class}</th></tr>`)
                result.append(`<tr><th>${rez.results[8].name}</th><th>${rez.results[8].model}</th><th>${rez.results[8].manufacturer}</th><th>${rez.results[8].cost_in_credits}</th><th>${rez.results[8].passengers}</th><th>${rez.results[8].starship_class}</th></tr>`)
                result.append(`<tr><th>${rez.results[9].name}</th><th>${rez.results[9].model}</th><th>${rez.results[9].manufacturer}</th><th>${rez.results[9].cost_in_credits}</th><th>${rez.results[9].passengers}</th><th>${rez.results[9].starship_class}</th></tr>`)
                $("h5").css("padding-right", "80px");
                $("th").css("padding-right", "45px");
                $("h5").css("color", "yellow");
                $("#btnNext").css("display", "inline")
                $("#btnNext").click(function() {
                    $("#result").empty()
                    $("#btnPrev").css("display", "inline")
                })
            },
            error: function(err) {
                document.write(err);
            }
        })
    };

    btnShips.click(function() {
        $("#result").empty()
        printShips();
    })













});