let score = 0;
let computer = 0;
const choices = document.querySelectorAll(".choice");const msg = document.querySelector(".msg");
const usernmber=document.querySelector(".userscore");
const computernmber=document.querySelector(".computerscore");


const DrawGame = () => {
  console.log("Game was Draw");
  msg.innerText="Game Draw ! play again";msg.style.backgroundColor="rgb(22, 22, 57)";
};
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const showWinner = (userWin,userChioce,computerchoice) => {
    if (userWin) {
      console.log("you win");
      msg.innerText=`Wow ! You Win Your ${userChioce} beats computer ${computerchoice}`;msg.style.backgroundColor="green";
      score++;usernmber.innerText=score;
    } else {
      console.log("you are lose");
      msg.innerText=`you lose! computer ${computerchoice} beats your ${userChioce}`;msg.style.backgroundColor="red";
      computer++;computernmber.innerText=computer;
    }
  };


const playGame = (userChioce) => {
  console.log("user choice = ", userChioce);
  const computerchoice = genCompChoice();
  console.log("computer chocie = ", computerchoice);

  if (userChioce === computerchoice) {
    DrawGame();
  } else {
    let userWin = true;
    if (userChioce === "rock") {
      userWin = computerchoice === "paper" ? false : true;
    } else if (userChioce === "paper") {
      userWin = computerchoice === "scissors" ? false : true;
    } else {
      userWin = computerchoice === "rock" ? false : true;
    }
    showWinner(userWin,userChioce,computerchoice);
  }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const choiceId = choice.getAttribute("id");
      console.log("choice is message", choiceId);
      playGame(choiceId);
    });
  });

