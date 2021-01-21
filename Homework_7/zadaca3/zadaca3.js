var students = [];

function Student(fName, lName, age) {
    this.name = fName;
    this.last = lName;
    this.age = age;
    this.printStudent = function() {
        return this.name + ' ' + this.last + ' ' + this.age;
    }
}

function print() {
    output = "";
    for (var i = 0; i < students.length; i++) {
        output += students[i].printStudent() + "\n";
    }
    document.getElementById("output").innerHTML = `<ul><li>${output}</li></ul>`;
}

function hire() {
    var student = new Student(
        document.getElementById("name").value,
        document.getElementById("last").value,
        document.getElementById("age").value
    );
    students.push(student);
    print();
}