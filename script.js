let wins = 0;
let losses = 0;
let ties = 0;

const score = document.querySelector('#score');
const roundResult = document.querySelector('#round-result');
const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => playRound(btn.id, getComputerChoice()));
});

function getComputerChoice () {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function formatUserInput(input){
    if(typeof input != "string") {
        return;
    }
    // Format user input so only the first letter is upper case, the rest lower case
    return `${input.slice(0, 1).toUpperCase()}${input.slice(1).toLowerCase()}`;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = formatUserInput(playerSelection);

    if(playerSelection === computerSelection) {
        roundResult.textContent = `It's a tie! Both choices were ${playerSelection}.`;
        ties++;
    }else if(
        playerSelection === 'Rock' && computerSelection === 'Scissors' ||
        playerSelection === 'Paper' && computerSelection === 'Rock' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper'
    ) {
        roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        wins++;
    }else {
        roundResult.textContent = `You lose. ${playerSelection} loses to ${computerSelection}.`;
        losses++;
    }

    score.textContent = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;

    if(wins === 5 || losses === 5) {
        alert(`${(wins > losses) ? 'Player' : 'Computer'} wins the game!`);
        wins = losses = ties = 0;
    }
}
