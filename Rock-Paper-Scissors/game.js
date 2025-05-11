var humanwin = 0;
var computerwin = 0;

function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return "rock";
  if (randomNumber === 1) return "paper";
  return "scissors";
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanwin++;
    return `You win this round! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerwin++;
    return `Computer wins this round! ${computerChoice} beats ${humanChoice}.`;
  }
}

function game() {
  for (var round = 1; round <= 5; round++) {
    var humanChoice = prompt(`Round ${round}: Enter rock, paper, or scissors:`).toLowerCase();
    var computerChoice = getComputerChoice();
    var result = playRound(humanChoice, computerChoice);
    console.log(`Round ${round}:`);
    console.log("Your choice:", humanChoice);
    console.log("Computer's choice:", computerChoice);
    console.log(result);
    console.log("Score - You:", humanwin, "Computer:", computerwin);
    console.log("------------------------------------");
  }

  // Final Result
  if (humanwin > computerwin) {
    console.log("------You won the game!-------");
  } else if (computerwin > humanwin) {
    console.log("------Computer won the game!-----");
  } else {
    console.log("------It's a tie game!----");
  }
}

game();
