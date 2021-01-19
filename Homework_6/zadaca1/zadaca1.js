let firstName = document.getElementsByTagName("input")[0];
let lastName = document.getElementsByTagName("input")[1];
let kopce = document.getElementsByTagName("input")[2];

let posledenDiv = document.getElementById("content");

function greeting() {
    posledenDiv.innerText = `Zdravo ${firstName.value} ${lastName.value}`;
}

kopce.addEventListener("click", function(event) {
    greeting(event.target.value);
});

posledenDiv.addEventListener("mouseover", function() {
    posledenDiv.innerHTML = "";
});