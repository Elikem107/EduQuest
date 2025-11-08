// Sample English questions
const englishQuestions = [
  { type: 'spelling', text: 'Spell the word for this animal:', image: 'assets/images/elephant.png', answer: 'elephant' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/pen.png', answer: 'pen' },
  { type: 'spelling', text: 'Spell the word for this fruit:', image: 'assets/images/apple.png', answer: 'apple' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/book.png', answer: 'book' },
  { type: 'spelling', text: 'Spell the word for a flying mammal:', image: 'assets/images/bat.png', answer: 'bat' },
  { type: 'spelling', text: 'Spell the word for water in solid form:', image: 'assets/images/ice.png', answer: 'ice' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/crayon.png', answer: 'crayon' },
  { type: 'spelling', text: 'Spell the word for a place where you learn:', image: 'assets/images/school.png', answer: 'school' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/brush.png', answer: 'brush' },
  { type: 'spelling', text: 'Spell the word for the opposite of "night":', image: '', answer: 'day' },
  { type: 'spelling', text: 'Spell the word for the season after winter:', image: '', answer: 'spring' },
  { type: 'spelling', text: 'Spell the word for a large body of water:', image: '', answer: 'ocean' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/basketball.png', answer: 'basketball' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/zoo.png', answer: 'zoo' },
  { type: 'spelling', text: 'Spell the word for a color of the sky on a clear day:', image: '', answer: 'blue' },
  { type: 'spelling', text: 'Spell the word for the star at the center of our solar system:', image: '', answer: 'sun' },
  { type: 'spelling', text: 'Spell the word for a round fruit that is yellow and sour:', image: '', answer: 'lemon' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/clock.png', answer: 'clock' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/umbrella.png', answer: 'umbrella' },
  { type: 'spelling', text: 'Spell the word for the opposite of "up":', image: '', answer: 'down' },
  { type: 'spelling', text: 'Spell the word for frozen precipitation:', image: '', answer: 'snow' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/ball.png', answer: 'ball' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/shoe.png', answer: 'shoe' },
  { type: 'spelling', text: 'Spell the word for a big cat found in the jungle:', image: '', answer: 'tiger' },
  { type: 'spelling', text: 'Spell the word for a farm animal that gives milk:', image: '', answer: 'cow' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/table.png', answer: 'table' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/chair.png', answer: 'chair' },
  { type: 'spelling', text: 'Spell the word for a domesticated pet that barks:', image: '', answer: 'dog' },
  { type: 'spelling', text: 'Spell the word for a domesticated pet that purrs:', image: '', answer: 'cat' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/bicycle.png', answer: 'bicycle' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/car.png', answer: 'car' },
  { type: 'spelling', text: 'Spell the word for a cold place covered in ice:', image: '', answer: 'polar' },
  { type: 'spelling', text: 'Spell the word for the opposite of "fast":', image: '', answer: 'slow' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/hat.png', answer: 'hat' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/bag.png', answer: 'bag' },
  { type: 'spelling', text: 'Spell the word for a round red fruit often used in pies:', image: '', answer: 'cherry' },
  { type: 'spelling', text: 'Spell the word for a device that tells time:', image: '', answer: 'clock' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/scissors.png', answer: 'scissors' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/ruler.png', answer: 'ruler' },
  { type: 'spelling', text: 'Spell the word for a bird that cannot fly and lives in cold regions:', image: '', answer: 'penguin' },
  { type: 'spelling', text: 'Spell the word for the season before summer:', image: '', answer: 'spring' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/sofa.png', answer: 'sofa' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/lamp.png', answer: 'lamp' },
  { type: 'spelling', text: 'Spell the word for a tool used to write on paper:', image: '', answer: 'pen' },
  { type: 'spelling', text: 'Spell the word for a hot drink made from beans:', image: '', answer: 'coffee' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/cup.png', answer: 'cup' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/television.png', answer: 'television' },
  { type: 'spelling', text: 'Spell the word for the star we see during the day:', image: '', answer: 'sun' },
  { type: 'spelling', text: 'Spell the word for a large mammal with a trunk:', image: '', answer: 'elephant' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/door.png', answer: 'door' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/window.png', answer: 'window' },
  { type: 'spelling', text: 'Spell the word for the opposite of "hot":', image: '', answer: 'cold' },
  { type: 'spelling', text: 'Spell the word for a vehicle that flies:', image: '', answer: 'airplane' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/telephone.png', answer: 'telephone' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/watch.png', answer: 'watch' },
  { type: 'spelling', text: 'Spell the word for a liquid that falls from clouds:', image: '', answer: 'rain' },
  { type: 'spelling', text: 'Spell the word for a large body of salt water:', image: '', answer: 'sea' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/sofa.png', answer: 'sofa' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/keyboard.png', answer: 'keyboard' },
  { type: 'spelling', text: 'Spell the word for a tree that produces acorns:', image: '', answer: 'oak' },
  { type: 'spelling', text: 'Spell the word for the opposite of "light":', image: '', answer: 'dark' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/broom.png', answer: 'broom' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/fan.png', answer: 'fan' },
  { type: 'spelling', text: 'Spell the word for a vehicle with two wheels:', image: '', answer: 'bicycle' },
  { type: 'spelling', text: 'Spell the word for a small flying insect that buzzes:', image: '', answer: 'bee' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/mug.png', answer: 'mug' },
  { type: 'name', text: 'Name the object in the picture:', image: 'assets/images/tv.png', answer: 'television' },
  { type: 'spelling', text: 'Spell the word for the opposite of "old":', image: '', answer: 'new' },
  { type: 'spelling', text: 'Spell the word for a place where books are kept:', image: '', answer: 'library' }
];



let currentIndex = 0;
let mode = localStorage.getItem('eduquestMode') || 'solo';
let score = 0; // solo
let player1 = 'Player 1';
let player2 = 'Player 2';
let score1 = 0;
let score2 = 0;
let turn = 1; // 1 = player1, 2 = player2

// DOM Elements
const questionText = document.getElementById('question-text');
const questionImage = document.getElementById('question-image');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score-display');

// Shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Start game
function startGame() {
  shuffleArray(englishQuestions); // Randomize question order
  if (mode === 'dual') {
    player1 = prompt("Enter Player 1 name:", "Player 1") || "Player 1";
    player2 = prompt("Enter Player 2 name:", "Player 2") || "Player 2";
    alert(`${player1} vs ${player2}!\nLet's start Dual Mode!`);
  }
  updateScoreDisplay(); // initial display
  loadQuestion();
}

// Load question
function loadQuestion() {
  const q = englishQuestions[currentIndex];
  questionText.textContent = q.text;

  if (q.image) {
    questionImage.src = q.image;
    questionImage.style.display = 'block';
  } else {
    questionImage.style.display = 'none';
  }

  answerInput.value = '';
  feedback.textContent = '';
  answerInput.focus();
}

// Check answer
function checkAnswer() {
  const q = englishQuestions[currentIndex];
  const userAnswer = answerInput.value.trim().toLowerCase();
  const points = 10;

  if (mode === 'dual') {
    let currentPlayerName = turn === 1 ? player1 : player2;

    if (turn === 1) {
      if (userAnswer === q.answer.toLowerCase()) score1 += points;
    } else {
      if (userAnswer === q.answer.toLowerCase()) score2 += points;
    }

    // Feedback
    if (userAnswer === q.answer.toLowerCase()) {
      feedback.textContent = `✅ Correct! ${currentPlayerName} scored ${points} points`;
    } else {
      feedback.textContent = `❌ Wrong! Correct answer: ${q.answer}`;
    }

    updateScoreDisplay();
    turn = turn === 1 ? 2 : 1;

  } else {
    if (userAnswer === q.answer.toLowerCase()) {
      score += points;
      feedback.textContent = `✅ Correct! You scored ${points} points`;
    } else {
      feedback.textContent = `❌ Wrong! Correct answer: ${q.answer}`;
    }
    updateScoreDisplay();
  }

  // Next question
  currentIndex++;
  if (currentIndex < englishQuestions.length) {
    setTimeout(loadQuestion, 1500);
  } else {
    setTimeout(() => {
      if (mode === 'dual') {
        let winner = score1 > score2 ? player1 : score2 > score1 ? player2 : 'Tie';
        alert(`Game Over!\n${player1}: ${score1}\n${player2}: ${score2}\nWinner: ${winner}`);
      } else {
        alert(`Game Over! Your total score: ${score}`);
      }
    }, 500);
  }
}

// Update score display
function updateScoreDisplay() {
  if (mode === 'dual') {
    scoreDisplay.innerHTML = `
      <span class="player1 ${turn === 1 ? 'turn-highlight' : ''}">${player1}: ${score1}</span> |
      <span class="player2 ${turn === 2 ? 'turn-highlight' : ''}">${player2}: ${score2}</span>
    `;
  } else {
    scoreDisplay.textContent = `Score: ${score}`;
  }
}

// Event listeners
submitBtn.addEventListener('click', checkAnswer);
answerInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') checkAnswer(); });

// Initialize
document.addEventListener('DOMContentLoaded', startGame);
