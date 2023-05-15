const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    let random = Math.floor(Math.random() * choices.length);
    return(random, choices[random]);
}


function singleRound(playerChoice, computerChoice){
    returnVal = "";
    if (playerChoice.toLowerCase() == computerChoice.toLowerCase()){
        returnVal = ("It's a tie");
    } else if (playerChoice == "rock" && computerChoice == "Scissors"){
        returnVal = ("You Win! Rock beats Scissors");
    } else if (playerChoice == "rock" && computerChoice == "Paper"){
        returnVal = ("You Lose! Paper beats Rock");
    } else if (playerChoice == "scissors" && computerChoice == "Rock"){
        returnVal = ("You Lose! Rock beats Scissors");
    } else if (playerChoice == "scissors" && computerChoice == "Paper"){
        returnVal = ("You Win! Scissors beats Paper");
    } else if (playerChoice == "paper" && computerChoice == "Rock"){
        returnVal = ("You Win! Paper beats Rocks");
    } else if (playerChoice == "paper" && computerChoice == "Scissors"){
        returnVal = ("You Lose! Scissors beats Paper");
    }
    return returnVal;
}


function game(){
    playerScore = 0;
    computerScore = 0;
    ties = 0;

    for(let i=0; i < 5; i++){
        playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
        computerChoice = getComputerChoice();
        log = singleRound(playerChoice, computerChoice);

        if(log.toLowerCase().includes("win")){
            ++playerScore;
            console.log(log + " wins: %d  losses: %d  tie: %d", playerScore, computerScore, ties);
        } else if(log.toLowerCase().includes("lose")) {
            ++computerScore;
            console.log(log + " wins: %d  losses: %d  tie: %d", playerScore, computerScore, ties);
        } else{
            ++ties;
            console.log(log + " wins: %d  losses: %d  tie: %d", playerScore, computerScore, ties);
        }
        
    }
}

game();

