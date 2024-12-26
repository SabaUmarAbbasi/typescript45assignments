"use strict";
let magician = ["Albus Dumbeldore", "Harry Potter", "RonWeasley", "Hermaione Granger"];
function copyArry(arr) {
    return [...arr];
}
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magicianArry[i] = "The Great" + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(Element => {
        console.log(Element);
    });
}
const copyMagicianArry = copyArry(magician);
make_great(copyMagicianArry);
console.log('\n\nThis is my orignal array:');
show_magicians(magician);
console.log('\n\nThis is my modified copy od the array:');
show_magicians(copyMagicianArry);
