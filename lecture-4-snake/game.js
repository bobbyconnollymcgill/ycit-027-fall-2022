// nomenclature 2-7

// How do we represent our game?

// 0 --> it's an empty cell
// > 0 --> it's part of the snake

// set ateCookie = false

// 0 6 5 4 3 2 1 0 0 0 0 0 0 0 0    <----
const middleCell = Math.floor(DIMENSION / 2);

const headPosition = `${middleCell}-${middleCell}`;
const bodyPosition = `${middleCell}-${middleCell - 1}`;
const tailPosition = `${middleCell}-${middleCell - 2}`;

const gameState = {
  isGameOver: false,

  snakePosition: headPosition,
  snakeDirection: "right",
  snakeSize: 3,

  grid: new Map(),
};

const grid = gameState.grid;

for (let i = 1; i <= DIMENSION; i++) {
  for (let j = 1; j <= DIMENSION; j++) {
    grid.set(`${i}-${j}`, 0);
  }
}

grid.set(headPosition, 3);
grid.set(bodyPosition, 2);
grid.set(tailPosition, 1);

let previousTimeStamp;

let onlyMoveSnakeOnce = true;

const step = (timestamp) => {
  if (previousTimeStamp === undefined) {
    previousTimeStamp = timestamp;
  }

  const elapsed = timestamp - previousTimeStamp;

  if (elapsed > 222) {
    previousTimeStamp = timestamp;

    moveSnake();
    // onlyMoveSnakeOnce && moveSnake();
    // onlyMoveSnakeOnce = false;

    for (let i = 1; i <= DIMENSION; i++) {
      for (let j = 1; j <= DIMENSION; j++) {
        const id = `${i}-${j}`;
        const value = grid.get(id);
        const div = document.getElementById(id);

        if (value > 0) {
          // console.log("taco");
          div.classList.add("snake");
        } else {
          div.classList.remove("snake");
        }
      }
    }
  }

  window.requestAnimationFrame(step);
};

step();

function moveSnake() {
  const { snakePosition, snakeDirection, grid } = gameState;

  // This code is subtracting all cells by 1 unless it's a 0 already
  for (let i = 1; i <= DIMENSION; i++) {
    for (let j = 1; j <= DIMENSION; j++) {
      const id = `${i}-${j}`;
      let value = grid.get(id);

      if (typeof value === "number" && value > 0) {
        console.log("taco");
        value--;
        grid.set(id, value);
      }
    }
  }

  // const arrayOfCoords = snakePosition.split("-")
  // const row = arrayOfCoords[0]
  // const col = arrayOfCoords[1]

  // Much more "clean" to use array destructuring
  let [row, col] = snakePosition.split("-");
  row = Number(row);
  col = Number(col);

  console.log([row, col], DIMENSION);
  if (col + 1 > DIMENSION) {
    col = 1;
  } else {
    col++;
  }

  const newSnakePosition = `${row}-${col}`;

  console.log("newSnakePosition", newSnakePosition);

  gameState.snakePosition = newSnakePosition;

  gameState.grid.set(newSnakePosition, 3);
}
