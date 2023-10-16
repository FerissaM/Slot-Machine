// *

let bet, wallet, msg
const spinBtn = document.querySelector("#spin-btn")
const betMsg = document.querySelector("#bet")
const betInput = document.querySelector("input")
const walletMsg = document.querySelector("#wallet")
const placeBetBtn = document.querySelector("#place-bet")
const message = document.getElementById('message');
const resetBtn = document.querySelector("#reset")
console.log(betInput)
spinBtn.addEventListener("click", spin)
placeBetBtn.addEventListener("click", placeBet)
resetBtn.addEventListener("click", init)

function placeBet() {
    if (betInput.value <= 0||wallet <= 0) return
    console.log(typeof betInput.value)
    bet = parseInt(betInput.value) // parseInt turns string to number
    wallet = wallet-bet
    msg = "Spin The Wheel!"
    render()
}

function render(){
    betMsg.textContent = `$${bet}`
    betInput.value = 0
    walletMsg.textContent = `$${wallet}`
    message.textContent = msg
}


function init(){
    bet = 0
    wallet = 100
    msg = "Place Your Bet!"
    render()
}

function getRandomNumber() {
    return Math.floor(Math.random() * 2) + 1;
}

function getElement (id) {
    return document.getElementById(id);
}

function spin () {
    if (bet <= 0) return 
    const wheel1 = getElement ('wheel1');
    const wheel2 = getElement ('wheel2');
    const wheel3 = getElement ('wheel3');

    const number1 = getRandomNumber ();
    const number2 = getRandomNumber ();
    const number3 = getRandomNumber ();

    wheel1.innerHTML = `${number1}`;
    wheel2.innerHTML = `${number2}`;
    wheel3.innerHTML = `${number3}`;

    if (number1 === number2 && number1 === number3 && number2 === number3) {
        msg = "You win"
        const amountWon = bet * 2
        wallet = wallet + amountWon
        bet = 0
        render()
    } else {
        console.log(wallet)
        msg = "Mismatch!"
        bet = 0
        if (wallet <= 0){
            msg = "You Lose!"
        }
        render()
    }
}

init()