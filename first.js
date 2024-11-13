let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const div = document.createElement("div");
document.body.appendChild(div);
const ul = document.createElement("ul");
div.appendChild(ul);
const li = document.createElement("li");
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

// function getHumanChoice() {
//    return prompt("Welcome to the Rock Paper Scissors Game. Please Enter your choice : ");
// }
function playRound(humanChoice,ComputerChoice) {

  humanChoice = humanChoice.toLowerCase();
  ComputerChoice = ComputerChoice.toLowerCase();
  if(humanChoice === "rock" ) {

      if(ComputerChoice === "paper") {
        computerScore++;
        li.textContent = `You lost! Paper beats Rock! Computer Score : ${computerScore} HumaNScore : ${humanScore} `;
        ul.appendChild(li);
      }

      else if(ComputerChoice ===  "scissors") {
        humanScore++;
        li.textContent = `You won! ${humanChoice} beats ${ComputerChoice}! Computer Score : ${computerScore} HumaNScore : ${humanScore}`;
        ul.appendChild(li);
      }
      
  }

  else if(humanChoice === "paper") {

   
    
    if(ComputerChoice ===  "scissors") {
      computerScore++;
      li.textContent = `You lost! ${ComputerChoice} beats ${humanChoice}! Computer Score : ${computerScore} HumaNScore : ${humanScore}`;
      ul.appendChild(li);
    }
    else {
      humanScore++;
      li.textContent = `You won! ${humanChoice} beats ${ComputerChoice}! Computer Score : ${computerScore} HumaNScore : ${humanScore}`;
      ul.appendChild(li);
    }
  }

  else {
    if(ComputerChoice === "paper") {
      humanScore++;
      li.textContent = `You won! ${humanChoice} beats ${ComputerChoice}! Computer Score : ${computerScore} HumaNScore : ${humanScore}`;
      ul.appendChild(li);
    }
    else {
      computerScore++;
      li.textContent = `You lost! ${ComputerChoice} beats ${humanChoice}! Computer Score : ${computerScore} HumaNScore : ${humanScore}`;
      ul.appendChild(li);
    }
  }
  if(computerScore === 5) {
    li.textContent = `Sorry! You lost against Computer by ${computerScore-humanScore}`;
    ul.appendChild(li);
  }
  if(humanScore === 5) {
    li.textContent = `Congrats! You won against Computer by ${humanScore-computerScore}`;
    ul.appendChild(li);
  }
  div.appendChild(ul);
}

function playGame() {

  // for(let i = 0;i < 5;i++) {
  //   const humanSelection = getHumanChoice();
  //   const computerSelection = getComputerChoice();
  //   playRound(humanSelection, computerSelection);
  // }
  rock.addEventListener("click",() => playRound("rock",getComputerChoice()));
  paper.addEventListener("click",() => playRound("paper",getComputerChoice()));
  scissors.addEventListener("click",() => playRound("scissors",getComputerChoice()));

}
playGame();

