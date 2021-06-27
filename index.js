function rps(input, machine) {
  if (machine <= 3) machine = "rock";
  else if (machine > 3 && machine <= 6) machine = "paper";
  else machine = "scissors";

  if (input == machine) console.log("draw");
  else if (input == "rock" && machine == "paper") console.log("lost");
  else if (input == "rock" && machine == "scissors") console.log("won");
  else if (input == "paper" && machine == "scissors") console.log("lost");
  else if (input == "paper" && machine == "rock") console.log("won");
  else if (input == "scissors" && machine == "rock") console.log("lost");
  else if (input == "scissors" && machine == "paper") console.log("won");
  console.log(input);
  console.log(machine);
}

// function game() {
//   let games = prompt("how many games?");
//   games = parseInt(games);
//   console.log(games);
//   let count = 0;
//   while (count < games) {
//     const input = prompt("Rock/Paper/Scissors?").toLowerCase();
//     const randomize = Math.floor(Math.random() * 10);
//     rps(input, randomize);
//     count++;
//   }
// }
// game();
