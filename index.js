function rps() {
  let input = prompt("Rock/Paper/Scissors?").toLowerCase();
  let randomize = Math.floor(Math.random() * 10);

  if (randomize <= 3) randomize = "rock";
  else if (randomize > 3 && randomize <= 6) randomize = "paper";
  else randomize = "scissors";

  if (input == randomize) console.log("draw");
  else if (input == "rock" && randomize == "paper") console.log("lost");
  else if (input == "rock" && randomize == "scissors") console.log("won");
  else if (input == "paper" && randomize == "scissors") console.log("lost");
  else if (input == "paper" && randomize == "rock") console.log("won");
  else if (input == "scissors" && randomize == "rock") console.log("lost");
  else if (input == "scissors" && randomize == "paper") console.log("won");
  console.log(input);
  console.log(randomize);
}

rps();
