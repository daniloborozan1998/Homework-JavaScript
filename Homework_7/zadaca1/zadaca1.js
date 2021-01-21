let animal = new Object();

animal.name = prompt("Enter the name of the animal");
animal.kind = prompt("Enter what kind of animal it is");
animal.speak = function() {
    return (this.kind + " " + this.name);
}
let animalSpeak = animal.speak();
console.log(`${animalSpeak} says: Hello bro`);