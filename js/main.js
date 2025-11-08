// Get mode buttons
const soloBtn = document.getElementById('solo-btn');
const dualBtn = document.getElementById('dual-btn');

// Function to set mode
function setMode(mode) {
  // Store mode in localStorage
  localStorage.setItem('eduquestMode', mode);

  // Update button styles
  if (mode === 'solo') {
    soloBtn.classList.add('active');
    dualBtn.classList.remove('active');
  } else {
    dualBtn.classList.add('active');
    soloBtn.classList.remove('active');
  }
}

// Event listeners
soloBtn.addEventListener('click', () => setMode('solo'));
dualBtn.addEventListener('click', () => setMode('dual'));

// On page load, check if a mode was previously selected
document.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('eduquestMode') || 'solo';
  setMode(savedMode);
});
