
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alienColors: string = "Green";


// •  making sure each message is printed for the appropriate color alien.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// versions 1 of the program
if(alienColors === "Green"){
    console.log("Version 1: The player earned 5 points.")
}
else if(alienColors === "Yellow"){
 console.log(" The player earned 10 points.")
}
else if(alienColors === "Red"){
     console.log("The player earned 15 points.")
}
else{
    console.log("Please select right colors")
}


// versions 2 of the program
alienColors = "Yellow";

if(alienColors === "Green"){
  console.log("The player earned 5 points.")
}
else if(alienColors === "Yellow"){
 console.log("Version 2: The player earned 10 points.")
}
else if(alienColors === "Red"){
     console.log("The player earned 15 points.")
}
else{
    console.log("Please select right colors")
}


//versions 3 of the program
alienColors = "Red";

if(alienColors === "Green"){
    console.log("The player earned 5 points.")
}
else if(alienColors === "Yellow"){
     console.log(" The player earned 10 points.")
}
else if(alienColors === "Red"){
     console.log("Version 3: The player earned 15 points.")
}
else{
    console.log("Please select right colors")
}













