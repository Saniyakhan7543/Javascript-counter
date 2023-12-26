
// Initial counter value
let counterValue = 0;

function updateCounterDisplay() {
  // Update the displayed counter value
  document.getElementById("counter").innerText = counterValue;
}

function increase() {
  // Increase the counter value
  counterValue++;
  // Update the display
  updateCounterDisplay();
}

function decrease() {
  // Decrease the counter value
  counterValue--;
  // Update the display
  updateCounterDisplay();
}