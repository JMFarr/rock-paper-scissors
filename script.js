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
        console.log(`It's a tie! Both choices were ${playerSelection}.`);
    }else if(
        playerSelection === 'Rock' && computerSelection === 'Scissors' ||
        playerSelection === 'Paper' && computerSelection === 'Rock' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper'
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    }else {
        console.log(`You lose. ${playerSelection} loses to ${computerSelection}.`);
    }
}
