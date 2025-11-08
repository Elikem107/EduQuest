// Sample Science questions
const scienceQuestions = [
  { question: "What planet is known as the Red Planet?", answer: "mars" },
  { question: "What gas do plants take in for photosynthesis?", answer: "carbon dioxide" },
  { question: "What is H2O commonly known as?", answer: "water" },
  { question: "Which organ pumps blood through the body?", answer: "heart" },
  { question: "What force pulls objects toward the Earth?", answer: "gravity" },
  { question: "What gas do humans breathe in to survive?", answer: "oxygen" },
  { question: "What part of the plant absorbs water from the soil?", answer: "roots" },
  { question: "What is the center of an atom called?", answer: "nucleus" },
  { question: "Which planet is closest to the Sun?", answer: "mercury" },
  { question: "What do bees produce from nectar?", answer: "honey" },
  { question: "What organ helps you breathe?", answer: "lungs" },
  { question: "Which animal is known as the king of the jungle?", answer: "lion" },
  { question: "What do you call water in solid form?", answer: "ice" },
  { question: "Which organ digests food?", answer: "stomach" },
  { question: "What is the process by which plants make their own food?", answer: "photosynthesis" },
  { question: "What gas do humans exhale?", answer: "carbon dioxide" },
  { question: "What is the boiling point of water in Celsius?", answer: "100" },
  { question: "Which planet is known for its rings?", answer: "saturn" },
  { question: "Which organ in the body stores urine?", answer: "bladder" },
  { question: "What part of the body controls thinking?", answer: "brain" },
  { question: "Which planet is known as the Blue Planet?", answer: "earth" },
  { question: "What is the main source of energy for the Earth?", answer: "sun" },
  { question: "What type of energy comes from moving water?", answer: "hydroelectric" },
  { question: "Which animal lays eggs?", answer: "chicken" },
  { question: "What do you call molten rock after it cools?", answer: "igneous rock" },
  { question: "What part of the plant carries food from leaves to stem?", answer: "phloem" },
  { question: "Which planet is the largest in the solar system?", answer: "jupiter" },
  { question: "What is the chemical symbol for gold?", answer: "au" },
  { question: "Which organ filters blood in the human body?", answer: "kidney" },
  { question: "What gas do humans need to survive?", answer: "oxygen" },
  { question: "Which planet is known for its red color?", answer: "mars" },
  { question: "Which part of the body helps you see?", answer: "eyes" },
  { question: "What is the center of the Earth called?", answer: "core" },
  { question: "Which planet is called the Morning Star?", answer: "venus" },
  { question: "Which organ produces insulin?", answer: "pancreas" },
  { question: "What do you call a baby frog?", answer: "tadpole" },
  { question: "Which natural resource is used to make paper?", answer: "wood" },
  { question: "Which organ helps you hear?", answer: "ear" },
  { question: "What type of rock is formed from lava?", answer: "igneous" },
  { question: "Which planet has a day longer than its year?", answer: "venus" },
  { question: "Which force keeps planets in orbit?", answer: "gravity" },
  { question: "What gas is necessary for combustion?", answer: "oxygen" },
  { question: "Which organ breaks down food into nutrients?", answer: "stomach" },
  { question: "Which animal is known for spinning webs?", answer: "spider" },
  { question: "What is the chemical symbol for water?", answer: "h2o" },
  { question: "Which planet is the farthest from the Sun?", answer: "neptune" },
  { question: "What is the process of liquid changing to gas called?", answer: "evaporation" },
  { question: "Which organ helps circulate blood?", answer: "heart" },
  { question: "What is the layer of gases surrounding the Earth called?", answer: "atmosphere" },
  { question: "Which animal is known for its black and white stripes?", answer: "zebra" }
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
let turn = 1; // 1 = player1, 2 = player2

// DOM elements
const questionText = document.getElementById('question-text');
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
  shuffleArray(scienceQuestions); // Randomize question order
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
  const q = scienceQuestions[currentIndex];
  questionText.textContent = q.question;
  answerInput.value = '';
  feedback.textContent = '';
  answerInput.focus();
}

// Check answer
function checkAnswer() {
  const q = scienceQuestions[currentIndex];
  const userAnswer = answerInput.value.trim().toLowerCase();
  const points = 10;

  if (mode === 'dual') {
    let currentPlayerName = turn === 1 ? player1 : player2;

    if (turn === 1) {
      if (userAnswer === q.answer.toLowerCase()) score1 += points;
    } else {
      if (userAnswer === q.answer.toLowerCase()) score2 += points;
    }

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
  if (currentIndex < scienceQuestions.length) {
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
