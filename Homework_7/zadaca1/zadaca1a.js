let animal = new Object();

animal.name = prompt("Enter the name of the animal");
animal.kind = prompt("Enter what kind of animal it is");
animal.spoken = prompt("Enter what the animal is saying")
animal.speak = function() {
    return console.log(`${this.kind} ${this.name} says: ${this.spoken}`);
}
animal.speak();