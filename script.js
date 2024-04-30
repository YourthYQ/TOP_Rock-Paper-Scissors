// implementations below
const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

const playRound = (humanChoice, computerChoice) => {

    if (humanChoice === computerChoice) {
        return -1;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 0;
    } else {
        return 1;
    }

}

// game starts here
let count = 0;
// prompt User to Input total rounds he wants to play
const countOfRound = () => {
    count = prompt("How many rounds do you want to play?");
    const rulesDisplay = document.getElementById('rules');
    rulesDisplay.textContent = `U have ${count} chances, win by getting more points!`;
}

// initial values after game starts
let humanScore = 0;
let computerScore = 0;
let index = 0;

const playGame = (weapon) => {

    // Check if the game should continue
    if (index == count) {
        alert("Game over! Please reload the page to play again.");
        return; // Stop the function if maximum rounds reached
    }

    // adjust the round number in the page for each round
    const roundsDisplay = document.getElementById('rounds');
    roundsDisplay.textContent = `Round ${++index}`;

    const humanChoice = weapon;
    const computerChoice = getComputerChoice();

    // adjust the info about human and computer choice for each round
    const rulesDisplay = document.getElementById('rules');
    
    const resultStatus = playRound(humanChoice, computerChoice);
    if (resultStatus === 0) {
        humanScore++;
        rulesDisplay.textContent = `U chose ${humanChoice}, Computer chose ${computerChoice}, U wins!`;
    } else if (resultStatus === 1) {
        computerScore++;
        rulesDisplay.textContent = `U chose ${humanChoice}, Computer chose ${computerChoice}, U loses!`;
    } else {
        rulesDisplay.textContent = `U chose ${humanChoice}, Computer chose ${computerChoice}, Ties!`;
    }

    // after all round ends, then show the result to the page
    if (index == count) {
        let result = "";

        if (humanScore == computerScore) {
            result = "It's a tie!";
        } else {
            result = humanScore > computerScore ? "U won the game!": "U lost the game!";
        }

        roundsDisplay.textContent = `${result}`;
        rulesDisplay.textContent = `U got ${humanScore} points, Computer got ${computerScore}`;
    }

}