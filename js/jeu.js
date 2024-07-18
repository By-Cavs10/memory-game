const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let flipCount = 0;
let startTime;
let timerInterval;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!startTime) {
    startTimer();
  }

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
if (isMatch) {
    disableCards();
  } else {
    unflipCards();
  }

  
  incrementFlips();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  // Vérifier si toutes les cartes ont été découvertes
  if (document.querySelectorAll('.memory-card.flip').length === cards.length) {
    clearInterval(timerInterval);
    const elapsedTime = new Date() - startTime;
   
    
  // Mettre à jour le contenu du message
  document.getElementById('flip-count').textContent = flipCount;
  document.getElementById('elapsed-time').textContent = formatTime(elapsedTime);

  // Afficher le message
  document.getElementById('success-message').classList.remove('hidden');
  }

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

function incrementFlips() {
  flipCount++;
  document.querySelector('.flips').textContent = flipCount;
}

function startTimer() {
  startTime = new Date();
  timerInterval = setInterval(() => {
    const currentTime = new Date();
    const elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    document.querySelector('.timer').textContent = formattedTime;
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Réinitialiser le jeu lorsque la touche Espace est enfoncée
document.addEventListener('keydown', event => {
  if (event.key === ' ') {
    resetGame();
  }
});

function resetGame() {
  // Réinitialiser les cartes
  cards.forEach(card => {
    card.classList.remove('flip');
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
    card.addEventListener('click', flipCard);
  });

 
  clearInterval(timerInterval);
  startTime = null;
  document.querySelector('.timer').textContent = '00:00';

  
  flipCount = 0;
  document.querySelector('.flips').textContent = flipCount;

  
  resetBoard();
}