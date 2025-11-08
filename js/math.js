// Shuffle an array in place using Fisher-Yates
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
// Sample Math questions
const mathQuestions = [
  { question: "12 × 3 = ?", answer: "36" },
  { question: "100 ÷ 10 = ?", answer: "10" },
  { question: "15 + 27 = ?", answer: "42" },
  { question: "50 - 19 = ?", answer: "31" },
  { question: "7 × 8 = ?", answer: "56" },
  { question: "144 ÷ 12 = ?", answer: "12" },
  { question: "65 + 28 = ?", answer: "93" },
  { question: "90 - 45 = ?", answer: "45" },
  { question: "9 × 6 = ?", answer: "54" },
  { question: "81 ÷ 9 = ?", answer: "9" },
  { question: "32 + 47 = ?", answer: "79" },
  { question: "70 - 33 = ?", answer: "37" },
  { question: "8 × 7 = ?", answer: "56" },
  { question: "64 ÷ 8 = ?", answer: "8" },
  { question: "23 + 58 = ?", answer: "81" },
  { question: "100 - 76 = ?", answer: "24" },
  { question: "6 × 9 = ?", answer: "54" },
  { question: "56 ÷ 7 = ?", answer: "8" },
  { question: "45 + 39 = ?", answer: "84" },
  { question: "88 - 47 = ?", answer: "41" },
  { question: "11 × 5 = ?", answer: "55" },
  { question: "72 ÷ 8 = ?", answer: "9" },
  { question: "37 + 46 = ?", answer: "83" },
  { question: "90 - 52 = ?", answer: "38" },
  { question: "12 × 4 = ?", answer: "48" },
  { question: "81 ÷ 9 = ?", answer: "9" },
  { question: "25 + 68 = ?", answer: "93" },
  { question: "100 - 39 = ?", answer: "61" },
  { question: "7 × 9 = ?", answer: "63" },
  { question: "56 ÷ 7 = ?", answer: "8" },
  { question: "48 + 35 = ?", answer: "83" },
  { question: "72 - 28 = ?", answer: "44" },
  { question: "8 × 6 = ?", answer: "48" },
  { question: "90 ÷ 10 = ?", answer: "9" },
  { question: "29 + 57 = ?", answer: "86" },
  { question: "64 - 39 = ?", answer: "25" },
  { question: "5 × 12 = ?", answer: "60" },
  { question: "81 ÷ 9 = ?", answer: "9" },
  { question: "43 + 38 = ?", answer: "81" },
  { question: "95 - 47 = ?", answer: "48" },
  { question: "9 × 8 = ?", answer: "72" },
  { question: "72 ÷ 8 = ?", answer: "9" },
  { question: "56 + 27 = ?", answer: "83" },
  { question: "100 - 64 = ?", answer: "36" },
  { question: "11 × 7 = ?", answer: "77" },
  { question: "49 ÷ 7 = ?", answer: "7" },
  { question: "23 + 56 = ?", answer: "79" },
  { question: "80 - 39 = ?", answer: "41" },
  { question: "6 × 8 = ?", answer: "48" },
  { question: "72 ÷ 9 = ?", answer: "8" },
  { question: "35 + 46 = ?", answer: "81" },
  { question: "90 - 28 = ?", answer: "62" },
  { question: "7 × 12 = ?", answer: "84" },
  { question: "64 ÷ 8 = ?", answer: "8" },
  { question: "48 + 29 = ?", answer: "77" },
  { question: "100 - 55 = ?", answer: "45" },
  { question: "9 × 7 = ?", answer: "63" },
  { question: "81 ÷ 9 = ?", answer: "9" },
  { question: "25 + 46 = ?", answer: "71" },
  { question: "75 - 32 = ?", answer: "43" },
  { question: "8 × 9 = ?", answer: "72" },
  { question: "72 ÷ 8 = ?", answer: "9" },
  { question: "37 + 48 = ?", answer: "85" },
  { question: "90 - 44 = ?", answer: "46" },
  { question: "12 × 6 = ?", answer: "72" },
  { question: "84 ÷ 7 = ?", answer: "12" },
  { question: "45 + 36 = ?", answer: "81" },
  { question: "100 - 68 = ?", answer: "32" },
  { question: "5 × 9 = ?", answer: "45" },
  { question: "81 ÷ 9 = ?", answer: "9" },
  { question: "32 + 47 = ?", answer: "79" },
  { question: "70 - 33 = ?", answer: "37" },
  { question: "6 × 7 = ?", answer: "42" },
  { question: "56 ÷ 8 = ?", answer: "7" },
  { question: "28 + 49 = ?", answer: "77" },
  { question: "90 - 27 = ?", answer: "63" },
  { question: "8 × 8 = ?", answer: "64" },
  { question: "64 ÷ 8 = ?", answer: "8" },
  { question: "15 + 68 = ?", answer: "83" },
  { question: "100 - 41 = ?", answer: "59" },
  { question: "7 × 6 = ?", answer: "42" },
  { question: "72 ÷ 9 = ?", answer: "8" },
  { question: "36 + 45 = ?", answer: "81" },
  { question: "88 - 47 = ?", answer: "41" },
  { question: "9 × 9 = ?", answer: "81" },
  { question: "81 ÷ 9 = ?", answer: "9" },
  { question: "23 + 58 = ?", answer: "81" },
  { question: "100 - 72 = ?", answer: "28" },
  { question: "12 × 5 = ?", answer: "60" },
  { question: "60 ÷ 6 = ?", answer: "10" },
  { question: "45 + 39 = ?", answer: "84" },
  { question: "90 - 51 = ?", answer: "39" },
  { question: "8 × 7 = ?", answer: "56" },
  { question: "56 ÷ 8 = ?", answer: "7" },
  { question: "29 + 46 = ?", answer: "75" },
  { question: "100 - 63 = ?", answer: "37" },
  { question: "6 × 9 = ?", answer: "54" },
  { question: "54 ÷ 6 = ?", answer: "9" },
  { question: "37 + 48 = ?", answer: "85" },
  { question: "80 - 29 = ?", answer: "51" },
  { question: "7 × 8 = ?", answer: "56" },
  { question: "72 ÷ 8 = ?", answer: "9" },
  { question: "48 + 36 = ?", answer: "84" },
  { question: "100 - 57 = ?", answer: "43" },
  { question: "9 × 6 = ?", answer: "54" },
  { question: "81 ÷ 9 = ?", answer: "9" },
  { question: "25 + 46 = ?", answer: "71" },
  { question: "75 - 34 = ?", answer: "41" },
  { question: "8 × 9 = ?", answer: "72" },
  { question: "72 ÷ 8 = ?", answer: "9" },
  { question: "33 + 49 = ?", answer: "82" },
  { question: "90 - 38 = ?", answer: "52" }
];


let currentIndex = 0;
let mode = localStorage.getItem('eduquestMode') || 'solo';

// Solo score
let score = 0;

// Dual mode variables
let player1 = 'Player 1';
let player2 = 'Player 2';
let score1 = 0;
let score2 = 0;
let turn = 1; // 1 = Player 1, 2 = Player 2

// DOM elements
const questionText = document.getElementById('question-text');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score-display');

// Start game
function startGame() {
  shuffleArray(mathQuestions); // shuffle questions randomly
  if (mode === 'dual') {
    player1 = prompt("Enter Player 1 name:", "Player 1") || "Player 1";
    player2 = prompt("Enter Player 2 name:", "Player 2") || "Player 2";
    alert(`${player1} vs ${player2}!\nLet's start Dual Mode!`);
  } else {
    updateScoreDisplay();
  }
  loadQuestion();
}

// Load question
function loadQuestion() {
  const q = mathQuestions[currentIndex];
  questionText.textContent = q.question;
  answerInput.value = '';
  feedback.textContent = '';
  answerInput.focus();
}

// Check answer
function checkAnswer() {
  const q = mathQuestions[currentIndex];
  const userAnswer = answerInput.value.trim();
  const points = 10;

  if (mode === 'dual') {
    let currentPlayerName = turn === 1 ? player1 : player2;

    // Update score
    if (turn === 1) {
      if (userAnswer === q.answer) score1 += points;
    } else {
      if (userAnswer === q.answer) score2 += points;
    }

    // Feedback
    if (userAnswer === q.answer) {
      feedback.textContent = `✅ Correct! ${currentPlayerName} scored ${points} points`;
    } else {
      feedback.textContent = `❌ Wrong! Correct answer: ${q.answer}`;
    }

    updateScoreDisplay();

    // Switch turn
    turn = turn === 1 ? 2 : 1;

  } else {
    // Solo mode
    if (userAnswer === q.answer) {
      score += points;
      feedback.textContent = `✅ Correct! You scored ${points} points`;
    } else {
      feedback.textContent = `❌ Wrong! Correct answer: ${q.answer}`;
    }
    updateScoreDisplay();
  }

  // Next question
  currentIndex++;
  if (currentIndex < mathQuestions.length) {
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
