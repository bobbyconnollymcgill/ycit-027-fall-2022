function createGameState() {
  const NAME_OF_GAME = "tic-tac-toe";
  const NULL_VALUE = " ";
  const X_VALUE = "X";
  const O_VALUE = "O";

  let currentPlayer = X_VALUE;
  let isGameEnded = false;
  let currentWinner = null; // can be null, "X", "O", or "tie"

  let grid = new Map();
  for (let i = 1; i <= 9; i++) {
    grid.set(i, NULL_VALUE);
  }

  const _goNextTurn = () => {
    if (currentPlayer === X_VALUE) {
      currentPlayer = O_VALUE;
    } else {
      currentPlayer = X_VALUE;
    }
  };

  const getCurrentPlayer = () => currentPlayer;

  const getGrid = () => grid;

  const _checkForGameOver = () => {
    // console.log(getGrid().values(), [...getGrid().values()]);

    const isGridFilled = [...getGrid().values()].every(
      (elem) => elem !== NULL_VALUE
    );

    if (isGridFilled) {
      isGameEnded = true;
    }
  };

  const onPlayerClicks = (cellIndex) => {
    // Like a bouncer. This method cannot be enterred if you provided bad inputs
    if (!cellIndex || typeof cellIndex !== "number" || cellIndex < 1 || cellIndex > 9) {
        return // Exit the function because of bad data
    } // prettier-ignore

    const currentValue = grid.get(cellIndex);

    if (currentValue !== NULL_VALUE) {
      return; // Exit the function since this cell was already valued
    }

    grid.set(cellIndex, getCurrentPlayer());
    _goNextTurn();

    _checkForGameOver();
  };

  return {
    NAME_OF_GAME,
    getCurrentPlayer,
    getIsGameEnded: () => isGameEnded,
    getCurrentWinner: () => currentWinner,
    getGrid,
    onPlayerClicks,
  };
}

// const gameState = createGameState();
window.gameState = createGameState(); // This is the same as the line above ?

// console.log(gameState.NAME_OF_GAME);
// console.log("taco", gameState.getCurrentPlayer());
// gameState.goNextTurn();
// console.log("taco", gameState.getCurrentPlayer());
