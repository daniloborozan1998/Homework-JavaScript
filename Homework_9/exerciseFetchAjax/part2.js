let kopce = document.getElementById("kopce1");
let pecati = document.getElementById("pecati1");


function print(broj) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${broj}`)
        .then(response => {
            response.json()
                .then(data => {
                    if (data.completed === true) {
                        let par = document.createElement("p");
                        par.innerText = `ID: ${data.id} \n\n Title: ${data.title} \n\n Complet: Completed`;
                        pecati.appendChild(par);
                        par.style.border = "1px solid black";
                        par.style.color = "green";
                        par.style.padding = "15px";
                        pecati.style.width = "30%"

                    } else {
                        let par = document.createElement("p");
                        par.innerText = `ID: ${data.id} \n\n Title: ${data.title} \n\n Complet: Not Completed`;
                        pecati.appendChild(par);
                        par.style.border = "1px solid black";
                        par.style.color = "red";
                        par.style.padding = "15px";
                        pecati.style.width = "30%"
                    }
                });
        })
        .catch(err => {
            documet.write(err);
        })


}

kopce.addEventListener("click", function() {
    let broj = parseInt(prompt("Please enter a number"));
    print(broj);
});