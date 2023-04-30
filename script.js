function getComputerChoice () {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)]
}

function formatUserInput(input){
    //format user input so only the first letter is upper case, the rest lower case
    return `${input.substr(0, 1).toUpperCase()}${input.slice(1).toLowerCase()}`
}