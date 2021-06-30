function game() {
  let totalNumGames = 1;
  let count = 1;
  let gameStarted = false;
  let input = "";
  let userScore = 0;
  let machineScore = 0;
  const startBtn = document.querySelector('.start[data-option="start"]');
  const resetBtn = document.querySelector('.reset[data-option="reset"]');
  const totalGames = document.querySelector('span[data-count="total"]');
  const minusGames = document.querySelector('span[data-count="minus"]');
  const plusGames = document.querySelector('span[data-count="plus"]');
  const selections = document.querySelectorAll("li[data-select]");
  const prompt = document.querySelector('[data-screen="prompt"]');
  const userCount = document.querySelector(".user__count");
  const machineCount = document.querySelector(".machine__count");
  const userChoice = document.querySelector(".user__choice");
  const machineChoice = document.querySelector(".machine__choice");

  const selectNumGames = () => {
    minusGames.addEventListener("click", () => {
      if (totalNumGames > 1) {
        totalNumGames -= 1;
        totalGames.innerHTML = `${totalNumGames}`;
        console.log(totalNumGames);
        return totalNumGames;
      }
    });
    plusGames.addEventListener("click", () => {
      if (totalNumGames < 99) {
        totalNumGames += 1;
        totalGames.innerHTML = `${totalNumGames}`;
        console.log(totalNumGames);
        return totalNumGames;
      }
    });
    return totalNumGames;
  };

  const resetGame = () => {
    // cheating by just refreshing the page
    window.location.reload();
    //tried to reset data it's not working might be a scoping issue or the paradigm => use OOP instead
    // count = userScore = machineScore = 0;
    // totalNumGames = 1;
    // gameStarted = false;
    // input = "";
    // startBtn.innerHTML = `<span>start</span>`;
    // userCount.innerHTML = `${userScore}`;
    // machineCount.innerHTML = `${machineScore}`;
    // userChoice.innerHTML = ' <i class="far fa-question-circle fa-4x"></i>';
    // machineChoice.innerHTML = ' <i class="far fa-question-circle fa-4x"></i>';
    // totalGames.innerHTML = `${totalNumGames}`;
    // prompt.innerHTML = "How many games?";
    // startBtn.classList.add("btn--enabled");
    // startBtn.classList.remove("btn--disabled");
    // resetBtn.classList.add("btn--disabled");
    // resetBtn.classList.remove("btn--enabled");
    // console.log("reset count", count);
    // console.log("reset total games", totalNumGames);
  };

  const gameOver = (player1, player2) => {
    if (player1 == player2) {
      prompt.innerHTML = "It's a draw";
    } else if (player1 > player2) {
      prompt.innerHTML = "You won";
    } else {
      prompt.innerHTML = "You lost";
    }
    // render a reset button
    startBtn.classList.add("btn--disabled");
    startBtn.classList.remove("btn--enabled");
    resetBtn.classList.add("btn--enabled");
    resetBtn.classList.remove("btn--disabled");
    resetBtn.addEventListener("click", () => {
      resetGame();
    });
  };

  const rps = (gameChoice, userInput) => {
    if (gameChoice == userInput) {
      count++;
    } else if (gameChoice == "rock") {
      if (userInput == "paper") {
        userScore += 1;
        userCount.innerHTML = `${userScore}`;
        count++;
        return userScore;
      } else {
        machineScore += 1;
        machineCount.innerHTML = `${machineScore}`;
        count++;
        return machineScore;
      }
    } else if (gameChoice == "paper") {
      if (userInput == "scissors") {
        userScore += 1;
        userCount.innerHTML = `${userScore}`;
        count++;
        return userScore;
      } else {
        machineScore += 1;
        machineCount.innerHTML = `${machineScore}`;
        count++;
        return machineScore;
      }
    } else if (gameChoice == "scissors") {
      if (userInput == "rock") {
        userScore += 1;
        userCount.innerHTML = `${userScore}`;
        count++;
        return userScore;
      } else {
        machineScore += 1;
        machineCount.innerHTML = `${machineScore}`;
        count++;
        return machineScore;
      }
    }
  };

  const gameLogic = (userInput) => {
    const randomValue = Math.floor(Math.random() * 10);
    let gameChoice = "";

    // create random choice
    if (!userInput) return;
    if (randomValue <= 3) {
      gameChoice = "rock";
      machineChoice.innerHTML = `<i class="far fa-hand-rock fa-4x"></i>`;
    } else if (randomValue > 3 && randomValue <= 6) {
      gameChoice = "paper";
      machineChoice.innerHTML = `<i class="far fa-hand-paper fa-4x"></i>`;
    } else {
      gameChoice = "scissors";
      machineChoice.innerHTML = `<i class="far fa-hand-scissors fa-4x"></i>`;
    }
    // game logic
    if (gameStarted) {
      if (count == totalNumGames) {
        rps(gameChoice, userInput);
        gameOver(userScore, machineScore);
      } else {
        // play rps
        rps(gameChoice, userInput);
      }
    }
  };

  const askOption = () => {
    prompt.innerHTML = "Choose your weapon";
  };

  const userOption = () => {
    selections.forEach((selection) => {
      selection.addEventListener("click", () => {
        input = selection.getAttribute("data-select");
        userChoice.innerHTML = `<i class="far fa-hand-${input} fa-4x"></i>`;
        gameLogic(input);
      });
    });
  };

  const play = () => {
    askOption();
    userOption();
  };

  const startGame = () => {
    startBtn.addEventListener("click", () => {
      gameStarted = true;
      play();
    });
  };

  selectNumGames();
  startGame();
  gameLogic();
}

game();
