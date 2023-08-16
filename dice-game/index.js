function rollDice() {
  const player1 = Math.ceil(Math.random() * 6);
  const player2 = Math.ceil(Math.random() * 6);

  var result;

  if (player1 > player2) {
    result = "Player 1 Wins";
  } else if (player1 === player2) {
    result = "Game is Drawn";
  } else {
    result = "Player 2 Wins";
  }

  document.querySelector(".player1").src = `${player1}.png`;
  document.querySelector(".player2").src = `${player2}.png`;
  document.querySelector("h1").textContent = result;
}

document.querySelector("button").onclick = rollDice;
