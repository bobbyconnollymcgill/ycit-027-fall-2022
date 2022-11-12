// state
// state updates

// let's create an API
// an API is a set of endpoints
// the endpoints can query the state
// the endpoints can also mutate the state

// imagine there are 2 players: alice and bob

const gameState = {
  currentPlayer: "alice",

  goNextTurn: () => {
    if (gameState.currentPlayer === "alice") {
      gameState.currentPlayer = "bob";
    } else {
      gameState.currentPlayer = "alice";
    }
  },
};

console.log("gamestate", gameState);
gameState.goNextTurn();
console.log("gamestate", gameState);
