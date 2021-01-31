$(document).ready(function() {
    let kopce = $("#kopce1");
    let tabela = $("#tabela1");

    function print(broj) {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/todos/${broj}`,
            success: function(rez) {

                if (rez.completed === true) {
                    tabela.append(`<tr><th>ID</th><th>Title</th><th>Complet</th></tr><tr><th>${rez.id}</th><th>${rez.title}</th><th>Completed</th></tr>`);
                    tabela.css("border", "1px solid black");
                    $("th").css("border", "1px solid black");
                    tabela.css("color", "green");
                    tabela.css("padding", "5px");
                    $("th").css("padding", "5px");
                } else {
                    tabela.append(`<tr><th>ID</th><th>Title</th><th>Complet</th></tr><tr><th>${rez.id}</th><th>${rez.title}</th><th>Not Completed</th></tr>`);
                    tabela.css("border", "1px solid black");
                    $("th").css("border", "1px solid black");
                    tabela.css("color", "red");
                    tabela.css("padding", "5px");
                    $("th").css("padding", "5px");
                }
            },
            error: function(err) {
                document.write(err);
            }

        })
    };
    kopce.click(function() {
        let broj = (prompt("Please enter a number"));
        print(broj);
    })

});