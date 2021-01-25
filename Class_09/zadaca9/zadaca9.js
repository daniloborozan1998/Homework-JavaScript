function Pets(name, type, age, isHealthy, owner) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.isHealthy = isHealthy;
    this.owner = owner;
    this.isAdopted = function() {
        return owner;
    }
}
let pet1 = new Pets("Lessi", "", 2, true, Person.firstName, false);
let pet2 = new Pets("Jacson", "", 3, false, Person.firstName, false);
let pet3 = new Pets("Piki", "", 2, false, Person.firstName, true);

function Person(firstName, lastName, age) {
    this.firstName1 = firstName;
    this.lastName1 = lastName;
    this.age1 = age;
}

let covek1 = new Person("Danilo", "Borozan", 22);
let covek2 = new Person("Jack", "Jackson", 20);
let covek3 = new Person("Sergio", "Ramos", 36);


let kopce = $("#submit");
kopce.click(function() {

});