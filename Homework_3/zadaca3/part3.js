function calculateDogAge() {
    var age = parseFloat(prompt("Vnesete covecki godini"));
    var dogYears = 7 * age;
    console.log("Your dog's age is " + dogYears + ". " + age + " is the calculated age");


    {
        var dogAge = parseFloat(prompt("Vnesete kuceski godini"));
        let humanAge = dogAge / 7;
        console.log("Kuceto ima covecki godini: " + humanAge + ". " + dogAge + " is the calculated age");

    }
}
calculateDogAge();