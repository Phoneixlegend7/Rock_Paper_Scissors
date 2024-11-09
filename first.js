let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {

    let x = Math.random();

    if(x <= 0.33) {
      return "Rock";
    }
    else if(x <= 0.66) {
      return "Paper";
    }
    else {
      return "Scissors";
    }
}

function getHumanChoice() {
   return prompt("Welcome to the Rock Paper Scissors Game. Please Enter your choice : ");
}
function playRound(humanChoice,ComputerChoice) {

  humanChoice = humanChoice.toLowerCase();
  ComputerChoice = ComputerChoice.toLowerCase();
  if(humanChoice === "rock" ) {

      if(ComputerChoice === "paper") {
        computerScore++;
        console.log("You Lose ! Paper beats Rock");
      }

      else if(ComputerChoice ===  "scissors") {
         humanScore++;
         console.log("You Win! Rock beats Scissors");
      }
      else {
          console.log("Draw !");
      }
  }

  else if(humanChoice === "paper") {

    if(ComputerChoice === "paper") {
      console.log("Draw !");
    }
    
    else if(ComputerChoice ===  "scissors") {
      computerScore++;
      console.log("You Lose ! Scissor beats Paper");
    }
    else {
      humanScore++;
      console.log("You Win! Paper beats Rock");
    }
  }

  else {
    if(ComputerChoice === "paper") {
      humanScore++;
      console.log("You Win! Scissor beats Paper");
    }
    
    else if(ComputerChoice ===  "scissors") {
      console.log("Draw !");
    }
    else {
      computerScore++;
      console.log("You Lose ! Rock beats Scissor");
    }
  }
}

function playGame() {
 humanScore = 0;
computerScore = 0;
  for(let i = 0;i < 5;i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if(humanScore > computerScore) {
      console.log(`Congrats you won against Computer by ${humanScore - computerScore}.`);
  }
  else if(computerScore > humanScore) {
    console.log(`You lost against Computer by ${computerScore - humanScore}.`);
  }
  else {
    console.log("The Game was  Draw!");
  }
}


playGame();

