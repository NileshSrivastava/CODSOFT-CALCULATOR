let currentInput = '';
  
function appendNumber(num) {
  currentInput += num;
  updateDisplay();
}

function appendOperator(op) {
  currentInput += op;
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}

function clearInput() {
  currentInput = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('result').value = currentInput;
}