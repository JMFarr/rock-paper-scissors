function getComputerChoice () {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function formatUserInput(input){
    // Format user input so only the first letter is upper case, the rest lower case
    if(typeof input != "string") {
        return;
    }
    return `${input.substr(0, 1).toUpperCase()}${input.slice(1).toLowerCase()}`;
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

function game() {
    let wins = 0;
    let losses = 0;
    for(let i = 0; i < 5; i++) {
        let result;
        let userInput = formatUserInput(prompt('Choose Rock, Paper, or Scissors.'));
        
        while(!validateChoice(userInput)){
            if (userInput == null ){
                console.log("Game aborted.")
                return;
            }
            console.log(userInput);
            userInput = formatUserInput(prompt('Ivalid input. Please choose Rock, Paper, or Scissors.'));
        }

    }
}

function validateChoice(choice){
    const validChoices = ['Rock', 'Paper', 'Scissors'];
    return validChoices.includes(choice);
}