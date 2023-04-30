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

function game() {
    let wins = 0;
    let losses = 0;

    // Game loop, loops for 5 rounds
    for(let i = 0; i < 5; i++) {
        let result;
        let userInput = formatUserInput(prompt('Choose Rock, Paper, or Scissors.'));
        
        // If player makes invalid choice, retry until they do.
        while(!validateChoice(userInput)){
            // Abort game if player exits out of prompt
            if (userInput == null ){
                console.log("Game aborted.")
                return;
            }
            userInput = formatUserInput(prompt('Ivalid input. Please choose Rock, Paper, or Scissors.'));
        }

        result = playRound(userInput, getComputerChoice());

        // Log the round number and the result
        console.log(`Round ${i + 1}: ${result}`);

        // Update the score
        if(result.includes('win')) {
            wins++;
        } else if(result.includes('lose')) {
            losses++;
        }
    }

    // Check game score and log the result
    if(wins === losses) {
        console.log("The game is a draw.");
    } else if(wins > losses) {
        console.log("Congratulations, you win!");
    } else {
        console.log("Too bad, you lost.");
    }
}

function validateChoice(choice){
    const validChoices = ['Rock', 'Paper', 'Scissors'];
    return validChoices.includes(choice);
}