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

    // Check for a tie
    if(playerSelection === computerSelection) {
        return `It's a tie! Both choices were ${playerSelection}.`;
    }

    // Check for a win
    if(
        playerSelection === 'Rock' && computerSelection === 'Scissors'
        || playerSelection === 'Paper' && computerSelection === 'Rock'
        || playerSelection === 'Scissors' && computerSelection === 'Paper'
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }

    // Default to a loss
    return `You lose. ${playerSelection} loses to ${computerSelection}.`;
}