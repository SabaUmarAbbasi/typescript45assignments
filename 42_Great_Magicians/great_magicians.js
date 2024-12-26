"use strict";
let magician = ["Albus Dumbeldore", "Harry Potter", "Ron Weasley", "Hermione Granger",];
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magician[i] = "The Great " + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(Element => {
        console.log(Element);
    });
}
make_great(magician);
show_magicians(magician);
