function playcraps() {
    /* Marco Cespedes 
    mcespedes81068@uat.edu.com
    10/22/23
    this is a function to play Craps in game.html
    Craps rules: 
    sum or 7 or 11 = a loss
    Even doubles = a win 
    Anything else = a push 
    */

    // Function to determine Die 1
    console.log("playcraps() started");
    var die1 = Math.ceil(Math.random() * 6);
    console.log("die1 result = " + die1);
    document.getElementById("die1res").innerHTML = "Result: " + die1;

    // Function to determine Die 2
    var die2 = Math.ceil(Math.random() * 6);
    console.log("die2 result = " + die2);
    document.getElementById("die2res").innerHTML = "Result: " + die2;

    // Function to determine Sum of Dice
    var sum = die1 + die2;
    console.log("Dice sum = " + sum);
    document.getElementById("Sumres").innerHTML = "Result: " + sum;

    //Check for 7 or 11 meaming loss
    if (sum == 7 || sum == 11) {
        document.getElementById("gameres").innerHTML = "You Lost, pay the barkeep!";
    }
    // Check for even doubles to win
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("gameres").innerHTML = " You won your Ale! Try for another?";
    }
    // Not a loss or win
    else {
        document.getElementById("gameres").innerHTML = "Did you win? No, try again!";
    }

}

function playsound() {
    // write to the log for debugging
    console.log("playsound() started");
    mySound = new sound("beerpour-91033.mp3");
    console.log("playing beerpour-91033 using the sound() function");
    mySound.play();
}

function playsound2() {
    // write to the log for debugging
    console.log("playsound() started");
    mySound = new sound("coin-drop-39914.mp3");
    console.log("playing coin-drop-39914 using the sound() function");
    mySound.play();
}

function sound(srcfile) {
    // creates audio class
    this.sound = document.createElement("audio");
    // sets source for srcfile
    this.sound.src = srcfile;
    //loads everything needed for audio
    this.sound.setAttribute("preload", "audio");
    // allow for sound to play with out buttons
    this.sound.setAttribute("controls", "none");
    // allows for this fucntion to combine all lines for srcfile
    document.body.appendChild(this.sound);
    // will allow sound to be played to connected src
    this.play = function () {
        this.sound.play();
    }
    //wil allow to pause sound to connected src
    this.stop = function () {
        this.sound.pause();
    }
}