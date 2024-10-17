let activeMole = null;
let lastHole = null;

function hideMole() {
  if (activeMole) {
    activeMole.querySelector('.mole').style.bottom = '-60px';
    activeMole = null;
  }
}

function showMole(hole) {
  if (hole) {
    hole.querySelector('.mole').style.bottom = '0';
    activeMole = hole;
  }
}

function startGame() {
  const gameContainer = document.getElementById('game');
  const holesCount = 16;

  for (let i = 1; i <= holesCount; i++) {
    const hole = document.createElement('div');
    hole.className = `hole hole${i}`;

    const mole = document.createElement('div');
    mole.className = 'mole';

    hole.appendChild(mole);
    gameContainer.appendChild(hole);
  }

  const holes = document.querySelectorAll('.hole');

  setInterval(() => {
    if (activeMole) {
      hideMole();
    }

    let randomHole;
    do {
      randomHole = holes[Math.floor(Math.random() * holes.length)];
    } while (randomHole === lastHole);

    showMole(randomHole);
    lastHole = randomHole;
  }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  startGame();
});
