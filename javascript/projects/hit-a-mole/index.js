let score = 0;

  const holes = document.getElementsByClassName('hole');
  const gameArea = document.getElementById('hit-a-mole');
  const scoreDisplay = document.getElementById('score');

  gameArea.addEventListener('click', function (clickEvent) {
    if (clickEvent.target.matches('.mole')) {
      score++;
      clickEvent.target.classList.remove('mole');
      updateScoreDisplay();
    }
  });

  function appearMole() {
    // Remove 'mole' class from all holes
    for (let hole of holes) {
      hole.classList.remove('mole');
    }

    // Randomly select a hole index
    const randomHoleIndex = Math.floor(Math.random() * holes.length);

    // Add 'mole' class to the selected hole
    holes[randomHoleIndex].classList.add('mole');
  }

  function updateScoreDisplay() {
    scoreDisplay.textContent = 'Score: ' + score;
  }

  setInterval(appearMole, 1000); // Moles appear every 1 second