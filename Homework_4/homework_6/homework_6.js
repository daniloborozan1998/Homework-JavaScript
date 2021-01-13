let array1 = ["Danilo", "Dragana", "Anamarija", "Sime", "Rozeta"];
console.log(`Iminja: ${array1}`);
let array2 = ["Borozan", "Poposka", "Risteska", "Nokoski", "Markovska"];
console.log(`Prezinja: ${array2}`);

let celosnoIme = [];

celosnoIme.unshift(`1.` + array1[0] + " " + array2[0]);
celosnoIme.push(` 2.` + array1[1] + " " + array2[1]);
celosnoIme.push(` 3.` + array1[2] + " " + array2[2]);
celosnoIme.push(` 4.` + array1[3] + " " + array2[3]);
celosnoIme.push(` 4.` + array1[4] + " " + array2[4]);
console.log(`Celosni iminja: ${celosnoIme}`);

// so funkcija ====== neznam dali mozi vaka 
console.log("=====So Funkcija=====")

function studentList() {
    let i = 0;
    let listNum = 1;
    console.log("Lista od studenti:");
    while (i < array1.length || i < array2[i]) {
        if (array1[i] !== null || array2[i] !== null) {
            console.log(`${listNum}. ${array1[i]} ${array2[i]}`);
            listNum++;
        }
        i++;
    }
}
studentList();