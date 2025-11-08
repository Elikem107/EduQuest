// Sample RME questions (Christianity, Islam, Indigenous)
const rmeQuestions = [
  { question: "Who is considered the father of Christianity?", answer: "jesus" },
  { question: "What is the holy book of Christians?", answer: "bible" },
  { question: "Which prayer is said five times a day in Islam?", answer: "salat" },
  { question: "Who is the last prophet in Islam?", answer: "muhammad" },
  { question: "Which festival celebrates the resurrection of Jesus?", answer: "easter" },
  { question: "What is the holy book of Muslims?", answer: "quran" },
  { question: "Which Christian holiday celebrates the birth of Jesus?", answer: "christmas" },
  { question: "What do Muslims fast during the month of Ramadan?", answer: "food and drink" },
  { question: "Who betrayed Jesus leading to his crucifixion?", answer: "judas" },
  { question: "What is the Islamic pilgrimage to Mecca called?", answer: "hajj" },
  { question: "Which prayer is central to Christianity?", answer: "lord's prayer" },
  { question: "What is the sacred text of indigenous Ghanaian beliefs?", answer: "oral traditions" },
  { question: "Who is considered the prophet of God in Islam?", answer: "muhammad" },
  { question: "Which Christian sacrament involves bread and wine?", answer: "communion" },
  { question: "What is the first month of the Islamic calendar?", answer: "muharram" },
  { question: "Which festival celebrates the end of Ramadan?", answer: "eid al-fitr" },
  { question: "Who baptized Jesus?", answer: "john the baptist" },
  { question: "What do Christians call the day Jesus rose from the dead?", answer: "easter sunday" },
  { question: "Which pillar of Islam involves giving to charity?", answer: "zakat" },
  { question: "Who built the Kaaba in Mecca according to Islamic belief?", answer: "ibrahim" },
  { question: "Which indigenous Ghanaian festival celebrates ancestors?", answer: "homowo" },
  { question: "Which Christian leader led the Israelites out of Egypt?", answer: "moses" },
  { question: "What is the Islamic declaration of faith called?", answer: "shahada" },
  { question: "Who is the mother of Jesus?", answer: "mary" },
  { question: "What is the holy place for Muslims?", answer: "mosque" },
  { question: "Which Christian prophet was swallowed by a big fish?", answer: "jonah" },
  { question: "Which Islamic month is sacred for fasting?", answer: "ramadan" },
  { question: "Who betrayed Jesus for thirty pieces of silver?", answer: "judas" },
  { question: "What do Christians celebrate on Pentecost?", answer: "holy spirit" },
  { question: "Which pillar of Islam involves pilgrimage?", answer: "hajj" },
  { question: "What is the indigenous Ghanaian practice of offering to spirits called?", answer: "libation" },
  { question: "Who is considered the first man according to Christianity?", answer: "adam" },
  { question: "Who is considered the first woman according to Christianity?", answer: "eve" },
  { question: "Which Islamic festival follows the Hajj pilgrimage?", answer: "eid al-adha" },
  { question: "What is the Christian ceremony of welcoming a child into the faith?", answer: "baptism" },
  { question: "Which prophet in Islam split the moon?", answer: "muhammad" },
  { question: "Which Christian festival lasts 40 days before Easter?", answer: "lent" },
  { question: "Which pillar of Islam involves fasting?", answer: "sawm" },
  { question: "What is the indigenous Ghanaian practice of storytelling called?", answer: "oral tradition" },
  { question: "Who led the Israelites into the Promised Land?", answer: "joshua" },
  { question: "Which Islamic month marks the birth of the Prophet Muhammad?", answer: "rabi al-awwal" },
  { question: "Who wrote many of the letters in the New Testament?", answer: "paul" },
  { question: "What do Christians call the first five books of the Bible?", answer: "pentateuch" },
  { question: "Which Islamic holiday commemorates the willingness of Ibrahim to sacrifice his son?", answer: "eid al-adha" },
  { question: "What is the indigenous Ghanaian celebration of harvest called?", answer: "hogbetsotso" },
  { question: "Who was the first Christian martyr?", answer: "stephen" },
  { question: "What do Muslims call the night journey of Prophet Muhammad?", answer: "isra and miraj" },
  { question: "Which Christian sacrament is for forgiveness of sins?", answer: "confession" },
  { question: "Who led the Israelites out of Egypt according to the Bible?", answer: "moses" },
  { question: "Which pillar of Islam involves giving to the poor?", answer: "zakat" },
  { question: "What do Christians call the teachings of Jesus?", answer: "sermon on the mount" },
  { question: "Which indigenous Ghanaian festival celebrates the planting season?", answer: "adae" }
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
  shuffleArray(rmeQuestions); // Randomize question order
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
  const q = rmeQuestions[currentIndex];
  questionText.textContent = q.question;
  answerInput.value = '';
  feedback.textContent = '';
  answerInput.focus();
}

// Check answer
function checkAnswer() {
  const q = rmeQuestions[currentIndex];
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
  if (currentIndex < rmeQuestions.length) {
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
