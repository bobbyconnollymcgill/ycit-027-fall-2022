"use strict";

// nomenclature 2-7

// How do we represent our game?

// 0 --> it's an empty cell
// > 0 --> it's part of the snake

// set ateCookie = false

// 0 0 0 0 4 3 2 1 0 0 0 0 0 0 0 0 0    <----
// isCookieEaten = false;

const GAME_SPEED = 8;

const middleCell = Math.floor(DIMENSION / 2);

const headPosition = `${middleCell}-${middleCell}`;
const bodyPosition = `${middleCell}-${middleCell - 1}`;
const tailPosition = `${middleCell}-${middleCell - 2}`;

const cookiePosition = `2-3`;

const gameState = {
  isGameOver: false,

  snakePosition: headPosition,
  snakeDirection: "right",
  snakeSize: 3,

  cookiePosition,

  isCookieEaten: false,

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
grid.set(cookiePosition, "*");

let previousTimeStamp;

let onlyMoveSnakeOnce = true;

const step = (timestamp) => {
  if (previousTimeStamp === undefined) {
    previousTimeStamp = timestamp;
  }

  const elapsed = timestamp - previousTimeStamp;

  const SPEED_BASIS = 1222;

  if (elapsed > SPEED_BASIS / GAME_SPEED) {
    previousTimeStamp = timestamp;

    moveSnake();
    // onlyMoveSnakeOnce && moveSnake();
    // onlyMoveSnakeOnce = false;

    // isCookieEaten = false; // This won't work because isCookieEaten is not defined.. you need to reference the gameState object and "dot into" isCookieEaten
    gameState.isCookieEaten = false;

    eatCookie();

    for (let i = 1; i <= DIMENSION; i++) {
      for (let j = 1; j <= DIMENSION; j++) {
        const id = `${i}-${j}`;
        const value = grid.get(id);
        const div = document.getElementById(id);

        if (value === "*") {
          div.classList.add("cookie");
        } else {
          if (value > 0) {
            // console.log("taco");
            div.classList.add("snake");
          } else {
            div.classList.remove("snake");
          }
        }
      }
    }
  }

  window.requestAnimationFrame(step);
};

step();

function moveSnake() {
  const { snakePosition, snakeDirection, grid, isCookieEaten, snakeSize } = gameState; // prettier-ignore

  if (!isCookieEaten) {
    // This code is subtracting all cells by 1 unless it's a 0 already
    for (let i = 1; i <= DIMENSION; i++) {
      for (let j = 1; j <= DIMENSION; j++) {
        const id = `${i}-${j}`;
        let value = grid.get(id);

        if (typeof value === "number" && value > 0) {
          value--;
          grid.set(id, value);
        }
      }
    }
  }

  // const arrayOfCoords = snakePosition.split("-")
  // const row = arrayOfCoords[0]
  // const col = arrayOfCoords[1]

  // Much more "clean" to use array destructuring
  let [row, col] = snakePosition.split("-");
  row = Number(row); // BEWARE!!! We need to convert the string to a number
  col = Number(col); // This is precisely WHY WE USE TYPESCRIPT !!!!!!!!!!!

  //   console.log([row, col], DIMENSION);

  switch (snakeDirection) {
    case "right":
      if (col + 1 > DIMENSION) {
        col = 1;
      } else {
        col++;
      }
      break;

    case "left":
      if (col - 1 < 1) {
        col = DIMENSION;
      } else {
        col--;
      }
      break;

    case "down":
      if (row + 1 > DIMENSION) {
        row = 1;
      } else {
        row++;
      }
      break;

    case "up":
      if (row - 1 < 1) {
        row = DIMENSION;
      } else {
        row--;
      }
      break;
  }

  const newSnakePosition = `${row}-${col}`;

  //   console.log("newSnakePosition", newSnakePosition);

  gameState.snakePosition = newSnakePosition;

  gameState.grid.set(newSnakePosition, snakeSize);
}

// setTimeout(() => {
//   gameState.snakeDirection = "down";
// }, 1500);

document.addEventListener("keydown", (evt) => {
  const { key } = evt;

  const { snakeDirection } = gameState;

  //   console.log(evt);
  if (key === "ArrowLeft" && snakeDirection !== "right") {
    gameState.snakeDirection = "left";
  } else if (key === "ArrowRight" && snakeDirection !== "left") {
    gameState.snakeDirection = "right";
  } else if (key === "ArrowUp" && snakeDirection !== "down") {
    gameState.snakeDirection = "up";
  } else if (key === "ArrowDown" && snakeDirection !== "up") {
    gameState.snakeDirection = "down";
  }
});

function eatCookie() {
  const { snakePosition, cookiePosition } = gameState;

  // Bouncer
  if (snakePosition !== cookiePosition) {
    return;
  }

  //isCookieEaten = true; // This won't work because we need to use the reference to the gamestate object directly
  gameState.isCookieEaten = true;
  gameState.snakeSize++;
  // We have to make a new cookie onto the world
}
