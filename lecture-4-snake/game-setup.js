// Wipe away the mock
const divs = document.querySelectorAll("body > div");

divs.forEach((div) => {
  document.body.removeChild(div);
});

// Finished wiping away the mock, now add the real cells

const DIMENSION = 20;

for (let i = 1; i <= DIMENSION; i++) {
  const rowDiv = document.createElement("div");

  for (let j = 1; j <= DIMENSION; j++) {
    const cellDiv = document.createElement("div");

    cellDiv.id = `${i}-${j}`;

    rowDiv.appendChild(cellDiv);
  }

  document.body.appendChild(rowDiv);
}
