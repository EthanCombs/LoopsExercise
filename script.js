// 1.
for (i = 1; i <= 7; i++){
    console.log(i);
}
console.log(`=========================`)

// 2.
for (i = 5; i <= 25; i += 4){
    console.log(i);
}
console.log(`=========================`)

// 3a.
const wizards = ["Harry Potter", "Hermione Granger", "Ron Weasley"]

// 3b.
for (i = 0; i < 3; i++){
    console.log(wizards[i]);
}
console.log(`=========================`)

// 4a.
let harryPotterMovies = 0;

// 4b.
while (harryPotterMovies < 8){
    harryPotterMovies++;
}
// 4c.
console.log(harryPotterMovies);
console.log(`=========================`)

// BONUS
// 5a.
const hogwartsHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
// 5b. Using nested For Of Loops, have each house name displayed in the console/terminal one letter at a time (You will need a console log for this).
for (i of hogwartsHouses){
    for (char of hogwartsHouses[i]){
        console.log(char);
    }
}
console.log(`=========================`)
// 6a. Create a const variable named quote and set the value of the variable to the following array items "Yer", "A", "Wizard", "Harry".
// 6b. Using a loop (You can decide which one you want to use) and the QUOTE array have the message "Yer A Wizard Harry" display on ONE line in the console/terminal (NOTE: Must have spaces between the words when it is displayed. Also, You will need a console log for this)(HINT: You will need to create another variable)

console.log(`=========================`)
// 7. Create a For Loop that displays numbers 1 to 25 (AKA Counts from 1 to 25) in the terminal/console when the file is run. However, for numbers that are multiples of 3 (3, 6, 9, etc.) have the string value of "Expecto" display instead of the number. Also, for numbers that are multiples of 5 (5, 10, 15, etc.) have the string value of "Patronum" display instead of the number. Finally, for numbers that are multiples of 3 & 5 have the string value of "Expecto Patronum" display instead of the number.
