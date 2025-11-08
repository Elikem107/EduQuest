// ICT Algorithm Game: sequence of instructions
let mode = localStorage.getItem('eduquestMode') || 'solo';
let player1 = 'Player 1';
let player2 = 'Player 2';
let score1 = 0;
let score2 = 0;
let score = 0;
let turn = 1;

const sequenceContainer = document.getElementById('sequence');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score-display');

// Sample algorithm tasks (steps in correct order)
const tasks = [
  {
    description: "Make a cup of tea",
    steps: [
      "Boil water",
      "Put tea in cup",
      "Pour water into cup",
      "Stir tea",
      "Add sugar or milk if desired"
    ]
  },
  {
    description: "Brush your teeth",
    steps: [
      "Apply toothpaste to brush",
      "Wet the brush",
      "Brush all teeth surfaces",
      "Rinse mouth",
      "Rinse brush"
    ]
  },
  {
    description: "Log into a computer",
    steps: [
      "Turn on the computer",
      "Enter username",
      "Enter password",
      "Press login",
      "Wait for desktop to load"
    ]
  },
  {
    description: "Save a document on a computer",
    steps: [
      "Open the document",
      "Click on File",
      "Select Save As",
      "Choose folder location",
      "Enter file name and click Save"
    ]
  },
  {
    description: "Send an email",
    steps: [
      "Open email application",
      "Click Compose",
      "Enter recipient email address",
      "Write subject and message",
      "Click Send"
    ]
  },
  {
    description: "Plant a seed",
    steps: [
      "Choose a pot or garden spot",
      "Fill with soil",
      "Make a small hole",
      "Place seed in hole",
      "Cover with soil and water"
    ]
  },
  {
    description: "Wash your hands",
    steps: [
      "Turn on water",
      "Wet hands",
      "Apply soap and lather",
      "Rinse hands",
      "Dry hands with towel"
    ]
  },
  {
    description: "Open a web browser",
    steps: [
      "Turn on computer",
      "Click on the browser icon",
      "Wait for browser to load",
      "Enter website URL",
      "Press Enter"
    ]
  },
  {
    description: "Create a new folder",
    steps: [
      "Open file explorer",
      "Navigate to desired location",
      "Right-click in empty space",
      "Select New > Folder",
      "Enter folder name"
    ]
  },
  {
    description: "Turn on a computer",
    steps: [
      "Press power button",
      "Wait for startup",
      "Enter password if needed",
      "Wait for desktop to load"
    ]
  },
  {
    description: "Print a document",
    steps: [
      "Open the document",
      "Click on File",
      "Select Print",
      "Choose printer",
      "Click Print"
    ]
  },
  {
    description: "Turn off a computer",
    steps: [
      "Save all work",
      "Close all applications",
      "Click Start",
      "Select Shut Down",
      "Wait for computer to turn off"
    ]
  },
  {
    description: "Open a file",
    steps: [
      "Open file explorer",
      "Navigate to folder",
      "Click on file",
      "Wait for application to load"
    ]
  },
  {
    description: "Attach a file to an email",
    steps: [
      "Open email",
      "Click Compose",
      "Click Attach",
      "Select file",
      "Click Open"
    ]
  },
  {
    description: "Change computer wallpaper",
    steps: [
      "Right-click on desktop",
      "Select Personalize",
      "Click Background",
      "Choose an image",
      "Click Apply"
    ]
  },
  {
    description: "Copy and paste text",
    steps: [
      "Select the text",
      "Right-click and select Copy",
      "Move cursor to new location",
      "Right-click and select Paste"
    ]
  },
  {
    description: "Turn on a light",
    steps: [
      "Locate switch",
      "Flip switch up",
      "Check light is on"
    ]
  },
  {
    description: "Make a sandwich",
    steps: [
      "Get bread slices",
      "Add filling",
      "Cover with another bread slice",
      "Cut sandwich if desired",
      "Serve"
    ]
  },
  {
    description: "Charge a phone",
    steps: [
      "Get charger",
      "Plug charger into phone",
      "Plug charger into socket",
      "Check charging icon"
    ]
  },
  {
    description: "Log into a tablet",
    steps: [
      "Turn on tablet",
      "Swipe to unlock",
      "Enter PIN or password",
      "Access home screen"
    ]
  },
  {
    description: "Download an app",
    steps: [
      "Open app store",
      "Search for app",
      "Click Install",
      "Wait for download",
      "Open app"
    ]
  },
  {
    description: "Change volume on a device",
    steps: [
      "Locate volume button",
      "Press up or down",
      "Check sound level"
    ]
  },
  {
    description: "Open a document in Word",
    steps: [
      "Open Word",
      "Click File",
      "Select Open",
      "Navigate to document",
      "Click Open"
    ]
  },
  {
    description: "Close a window",
    steps: [
      "Locate close button",
      "Click close button",
      "Check window is closed"
    ]
  },
  {
    description: "Restart a computer",
    steps: [
      "Save all work",
      "Click Start",
      "Select Restart",
      "Wait for computer to restart"
    ]
  },
  {
    description: "Log out of a computer",
    steps: [
      "Click Start",
      "Select Log Out",
      "Wait for login screen"
    ]
  },
  {
    description: "Update a software",
    steps: [
      "Open software",
      "Go to settings",
      "Click Update",
      "Wait for download",
      "Restart software if needed"
    ]
  },
  {
    description: "Connect to Wi-Fi",
    steps: [
      "Open network settings",
      "Select Wi-Fi network",
      "Enter password",
      "Click Connect",
      "Check connection"
    ]
  },
  {
    description: "Send a message",
    steps: [
      "Open messaging app",
      "Select contact",
      "Type message",
      "Click Send"
    ]
  },
  {
    description: "Search for something online",
    steps: [
      "Open browser",
      "Go to search engine",
      "Type query",
      "Press Enter",
      "Review results"
    ]
  },
  {
    description: "Take a screenshot",
    steps: [
      "Press screenshot keys",
      "Check preview",
      "Save screenshot if needed"
    ]
  },
  {
    description: "Turn on a projector",
    steps: [
      "Plug in projector",
      "Press power button",
      "Adjust focus",
      "Check display"
    ]
  },
  {
    description: "Close an app on tablet",
    steps: [
      "Swipe up from bottom",
      "Select app",
      "Swipe app off screen"
    ]
  },
  {
    description: "Set an alarm",
    steps: [
      "Open clock app",
      "Select Alarm",
      "Set time",
      "Save alarm"
    ]
  },
  {
    description: "Change screen brightness",
    steps: [
      "Open settings",
      "Select Display",
      "Adjust brightness slider"
    ]
  },
  {
    description: "Install a printer",
    steps: [
      "Plug in printer",
      "Turn on printer",
      "Open computer settings",
      "Add printer"
    ]
  },
  {
    description: "Delete a file",
    steps: [
      "Open file explorer",
      "Navigate to file",
      "Right-click and select Delete",
      "Confirm deletion"
    ]
  },
  {
    description: "Open calculator",
    steps: [
      "Locate calculator app",
      "Click to open",
      "Wait for calculator to appear"
    ]
  },
  {
    description: "Empty recycle bin",
    steps: [
      "Locate recycle bin",
      "Right-click",
      "Select Empty Recycle Bin",
      "Confirm action"
    ]
  },
  {
    description: "Turn on a fan",
    steps: [
      "Locate switch",
      "Flip switch on",
      "Check airflow"
    ]
  },
  {
    description: "Restart a tablet",
    steps: [
      "Hold power button",
      "Select Restart",
      "Wait for device to restart"
    ]
  },
  {
    description: "Close browser tabs",
    steps: [
      "Click on tab X",
      "Press close button",
      "Repeat for other tabs"
    ]
  },
  {
    description: "Log out of email",
    steps: [
      "Click profile icon",
      "Select Log Out",
      "Confirm"
    ]
  },
  {
    description: "Take a photo",
    steps: [
      "Open camera app",
      "Frame subject",
      "Press shutter button",
      "Save photo"
    ]
  },
  {
    description: "Charge a laptop",
    steps: [
      "Plug in charger",
      "Connect to laptop",
      "Check charging icon"
    ]
  },
  {
    description: "Rename a file",
    steps: [
      "Right-click file",
      "Select Rename",
      "Type new name",
      "Press Enter"
    ]
  },
  {
    description: "Share a file via email",
    steps: [
      "Open email",
      "Click Compose",
      "Attach file",
      "Enter recipient",
      "Click Send"
    ]
  },
  {
    description: "Connect a USB drive",
    steps: [
      "Insert USB into port",
      "Wait for detection",
      "Open folder to access files"
    ]
  },
  {
    description: "Scan a document",
    steps: [
      "Place document on scanner",
      "Open scanning app",
      "Select scan settings",
      "Click Scan",
      "Save scanned file"
    ]
  },
  {
    description: "Log into a social media account",
    steps: [
      "Open app or website",
      "Enter username",
      "Enter password",
      "Click Login"
    ]
  },
  {
    description: "Mute a device",
    steps: [
      "Locate volume button",
      "Press mute button",
      "Check sound icon"
    ]
  },
  {
    description: "Restart a printer",
    steps: [
      "Turn off printer",
      "Wait 5 seconds",
      "Turn on printer",
      "Check readiness"
    ]
  }
];


let currentTaskIndex = 0;
let currentSteps = [];

// Shuffle function
function shuffleArray(array) {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Generate shuffled steps
function generateSteps() {
  const task = tasks[currentTaskIndex];
  currentSteps = [...task.steps];
  shuffleArray(currentSteps);
}

// Render steps as draggable list
function renderSteps() {
  sequenceContainer.innerHTML = '';
  currentSteps.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    li.draggable = true;
    li.classList.add('sequence-item');
    sequenceContainer.appendChild(li);
  });
  enableDragAndDrop();
}

// Drag & drop logic
function enableDragAndDrop() {
  let dragSrcEl = null;
  const items = document.querySelectorAll('.sequence-item');

  items.forEach(item => {
    item.addEventListener('dragstart', e => {
      dragSrcEl = item;
      e.dataTransfer.effectAllowed = 'move';
    });

    item.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    });

    item.addEventListener('drop', e => {
      e.stopPropagation();
      if (dragSrcEl !== item) {
        const temp = dragSrcEl.textContent;
        dragSrcEl.textContent = item.textContent;
        item.textContent = temp;
      }
    });
  });
}

// Check if steps are in correct order
function checkOrder() {
  const userOrder = Array.from(document.querySelectorAll('.sequence-item')).map(li => li.textContent);
  const correctOrder = tasks[currentTaskIndex].steps;
  const points = 10;
  let currentPlayerName = turn === 1 ? player1 : player2;

  if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
    feedback.textContent = `✅ Correct order! ${mode === 'dual' ? currentPlayerName : ''} scored ${points} points`;
    if (mode === 'dual') {
      if (turn === 1) score1 += points;
      else score2 += points;
      turn = turn === 1 ? 2 : 1;
    } else score += points;
  } else {
    feedback.textContent = `❌ Wrong order! Correct steps will be next turn.`;
    if (mode === 'dual') turn = turn === 1 ? 2 : 1;
  }

  updateScoreDisplay();
  nextTask();
}

function nextTask() {
  const correctOrder = tasks[currentTaskIndex].steps;

  // Show correct order for this task
  alert(`Correct order for "${tasks[currentTaskIndex].description}":\n${correctOrder.join('\n')}`);

  currentTaskIndex++;

  // Check if all tasks are completed
  if (currentTaskIndex >= tasks.length) {
    // End of game
    if (mode === 'dual') {
      alert(`Game Over!\n${player1}: ${score1}\n${player2}: ${score2}`);
    } else {
      alert(`Game Over! Your total score: ${score}`);
    }
    // Disable submit button to prevent further play
    submitBtn.disabled = true;
    feedback.textContent = "🎉 Game completed!";
    return;
  }

  // Otherwise, generate next task
  generateSteps();
  renderSteps();
}


// Update score display
function updateScoreDisplay() {
  if (mode === 'dual') {
    scoreDisplay.innerHTML = `
      <span class="player1 ${turn===1?'turn-highlight':''}">${player1}: ${score1}</span> |
      <span class="player2 ${turn===2?'turn-highlight':''}">${player2}: ${score2}</span>
    `;
  } else {
    scoreDisplay.textContent = `Score: ${score}`;
  }
}

// Start game
function startGame() {
  if (mode === 'dual') {
    player1 = prompt("Enter Player 1 name:", "Player 1") || "Player 1";
    player2 = prompt("Enter Player 2 name:", "Player 2") || "Player 2";
    alert(`${player1} vs ${player2}!\nLet's start Dual Mode!`);
  }
  updateScoreDisplay();
  generateSteps();
  renderSteps();
}

// Event listener
submitBtn.addEventListener('click', checkOrder);

document.addEventListener('DOMContentLoaded', startGame);
