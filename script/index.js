function game() {
  let totalNumGames = 1;
  let count = 0;
  let gameStarted = false;
  let input = "";
  const startBtn = document.querySelector('.start[data-option="start"]');
  const totalGames = document.querySelector('span[data-count="total"]');
  const minusGames = document.querySelector('span[data-count="minus"]');
  const plusGames = document.querySelector('span[data-count="plus"]');
  const selections = document.querySelectorAll("li[data-select]");
  const prompt = document.querySelector('[data-screen="prompt"]');

  const selectNumGames = () => {
    minusGames.addEventListener("click", () => {
      if (totalNumGames > 1) {
        totalNumGames -= 1;
        totalGames.innerHTML = `${totalNumGames}`;
        return totalNumGames;
      }
    });
    plusGames.addEventListener("click", () => {
      if (totalNumGames < 99) {
        totalNumGames += 1;
        totalGames.innerHTML = `${totalNumGames}`;
        return totalNumGames;
      }
    });
    return totalNumGames;
  };

  const askOption = () => {
    prompt.innerHTML = "Choose your weapon";
  };

  const userOption = () => {
    selections.forEach((selection) => {
      selection.addEventListener("click", () => {
        input = selection.getAttribute("data-select");
        return input;
      });
    });
  };

  const play = () => {
    if (gameStarted) {
      if (count < totalNumGames) {
        askOption();
        userOption();
        return count++;
      }
    }
  };

  const startGame = () => {
    startBtn.addEventListener("click", () => {
      gameStarted = true;
      play();
      console.log(input);
    });
  };

  selectNumGames();
  startGame();
}

game();
