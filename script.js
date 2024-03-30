let results = document.querySelector(".output");
let currentExpression = '';

function calculate(number) {
  currentExpression += number;
  results.textContent = currentExpression;
}

function clearOutput() {
  currentExpression = '';
  results.textContent = '';
}

function del() {
  currentExpression = currentExpression.slice(0, -1);
  results.textContent = currentExpression;
}

function equals() {
  try {
    const result = eval(currentExpression);
    results.textContent = result;
    currentExpression = result;
  } catch (error) {
    results.textContent = 'Error';
    currentExpression = '';
  }
}
