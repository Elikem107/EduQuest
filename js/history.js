// Sample History questions (Ghana & West Africa)
const historyQuestions = [
  { question: "Who was the first President of Ghana?", answer: "kwame nkrumah" },
  { question: "In which year did Ghana gain independence?", answer: "1957" },
  { question: "What was the ancient empire located in present-day Mali known for gold trade?", answer: "mali empire" },
  { question: "Which river is the longest in West Africa?", answer: "niger" },
  { question: "Who was the leader of the Ashanti Kingdom during the 19th century?", answer: "prempeh i" },
  { question: "What was the main purpose of the trans-Saharan trade?", answer: "gold and salt" },
  { question: "Which European country first colonized Ghana?", answer: "britain" },
  { question: "What was the capital of the Ashanti Kingdom?", answer: "kumasi" },
  { question: "Who led Ghana to independence from British rule?", answer: "kwame nkrumah" },
  { question: "Which West African empire was known for its advanced universities and libraries?", answer: "songhai empire" },
  { question: "What is the name of the Ghanaian national museum located in Accra?", answer: "ghana national museum" },
  { question: "Which tribe is famous for building mud houses in northern Ghana?", answer: "dagomba" },
  { question: "What year did the Berlin Conference, dividing Africa among European powers, take place?", answer: "1884" },
  { question: "Which Ghanaian region is famous for its kente cloth?", answer: "ashanti" },
  { question: "Which island off Ghana's coast was a major site for the transatlantic slave trade?", answer: "elmina castle" },
  { question: "Who was the last king of the Ashanti Kingdom before British colonization?", answer: "prempeh i" },
  { question: "Which empire controlled the city of Timbuktu?", answer: "mali empire" },
  { question: "Which European country built forts along the Gold Coast?", answer: "portugal" },
  { question: "What was the main crop of early Ghanaian farmers?", answer: "yams" },
  { question: "Which warlord resisted European colonization in West Africa in the 19th century?", answer: "samori toure" },
  { question: "What is the name of the national independence day in Ghana?", answer: "march 6" },
  { question: "Which kingdom was famous for its wealth in gold and ivory?", answer: "ashanti kingdom" },
  { question: "Which city is the capital of Ghana?", answer: "accra" },
  { question: "What was the role of the European traders in West Africa?", answer: "trade" },
  { question: "Who wrote the famous book 'The Story of Africa'?", answer: "musaemura zimunya" },
  { question: "Which West African country was formerly called the Gold Coast?", answer: "ghana" },
  { question: "Which Ashanti festival celebrates the harvest and unity of the people?", answer: "adoe festival" },
  { question: "Which European country captured the castle of Elmina in 1637?", answer: "netherlands" },
  { question: "Who was the first female ruler in the Ashanti Kingdom?", answer: "queen mother" },
  { question: "Which river formed part of the boundary of the ancient Ghana Empire?", answer: "niger" },
  { question: "Which West African empire is known for its strong cavalry and navy?", answer: "songhai empire" },
  { question: "Which Ghanaian fort is UNESCO World Heritage site?", answer: "elmina castle" },
  { question: "Which European powers were involved in the slave trade along the Gold Coast?", answer: "portugal britain netherlands" },
  { question: "Which Ghanaian kingdom resisted British colonization for many years?", answer: "ashanti kingdom" },
  { question: "Who was the first female president of an African country?", answer: "ellen johnson sirleaf" },
  { question: "Which West African empire had Timbuktu as a center of learning?", answer: "mali empire" },
  { question: "What was the main resource traded by the Ashanti Kingdom?", answer: "gold" },
  { question: "Which famous castle was a hub of the transatlantic slave trade?", answer: "cape coast castle" },
  { question: "Which Ghanaian tribe is famous for its matrilineal system?", answer: "ashanti" },
  { question: "Which European country captured Cape Coast Castle in 1664?", answer: "britain" },
  { question: "Which ancient kingdom was located in modern-day Niger?", answer: "songhai empire" },
  { question: "Which Ghanaian festival honors ancestors and the community?", answer: "homowo" },
  { question: "Which European country first explored the West African coast?", answer: "portugal" },
  { question: "Who was the first Prime Minister of Ghana?", answer: "kwame nkrumah" },
  { question: "Which West African empire was defeated by Moroccan forces in 1591?", answer: "songhai empire" },
  { question: "Which Ghanaian city is known as the historical center of the Ashanti Kingdom?", answer: "kumasi" },
  { question: "Which European country built forts along the Gold Coast before Britain?", answer: "portugal" },
  { question: "Which Ghanaian tribe is known for weaving kente cloth?", answer: "ashanti" },
  { question: "Which empire controlled much of the western Sahel region in the 14th century?", answer: "mali empire" },
  { question: "Who was the famous West African ruler of the Mali Empire?", answer: "mansa musa" },
  { question: "Which Ghanaian fort is located in Elmina?", answer: "elmina castle" },
  { question: "Which African river was essential for trade in ancient empires?", answer: "niger" },
  { question: "Which Ghanaian festival celebrates the planting season?", answer: "hogbetsotso" }
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
  shuffleArray(historyQuestions); // Randomize question order
  if (mode === 'dual') {
    player1 = prompt("Enter Player 1 name:", "Player 1") || "Player 1";
    player2 = prompt("Enter Player 2 name:", "Player 2") || "Player 2";
    alert(`${player1} vs ${player2}!\nLet's start Dual Mode!`);
  }
  updateScoreDisplay();
  loadQuestion();
}

// Load question
function loadQuestion() {
  const q = historyQuestions[currentIndex];
  questionText.textContent = q.question;
  answerInput.value = '';
  feedback.textContent = '';
  answerInput.focus();
}

// Check answer
function checkAnswer() {
  const q = historyQuestions[currentIndex];
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

  currentIndex++;
  if (currentIndex < historyQuestions.length) {
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
