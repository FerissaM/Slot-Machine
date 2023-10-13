// *
// - Ask the player to enter the amount of coins he/she wants to insert into the machine.
// - Generate the three digits and show them to the user (hint: you will need to generate each digit separately.)
// - Any 3 matching digits = Win ten 10 times the amount of the original bet
// - Any 2 matching digits = Win 2 times the amount of the original bet
// - Anything else = Lose your bet
// - Show the player how much they won or lost and how much coins they have remaining
// - Allow the player to play again, but only if they have coins left
// - When the player ran out of coins, a "thank you" message will pop up and end the game.




function getRandomNumber() {
    return Math.floor(Math.random() * 2) + 1;
}

function getElement (id) {
    return document.getElementById(id);
}

function spin () {
    const wheel1 = getElement ('wheel1');
    const wheel2 = getElement ('wheel2');
    const wheel3 = getElement ('wheel3');

    const number1 = getRandomNumber ();
    const number2 = getRandomNumber ();
    const number3 = getRandomNumber ();

    item1.innerHTML = `${number1}`;
    item2.innerHTML = `${number1}`;
    item3.innerHTML = `${number1}`;

    if (number1 === number2 && number1 === number3) {
        showMessage();
    } else {
        hideMessage();
    }

    function showMessage(){
        const message = document.getElementById('message');
        message.style.display = 'block';
    }

    function hideMessage(){
        const message = document.getElementById('message');
        message.style.display = 'none';
    }
}