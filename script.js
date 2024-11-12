const display = document.getElementById('display');
let currentExpression = '';

function appendToDisplay(value) {
    currentExpression += value;
    display.textContent = currentExpression;
    animateButton(event.target);
}

function clearDisplay() {
    currentExpression = '';
    display.textContent = '';
    animateButton(event.target);
}

function calculate() {
    try {
        const result = eval(currentExpression);
        display.textContent = result;
        currentExpression = result.toString();
        animateResult();
    } catch (error) {
        display.textContent = 'Error';
        currentExpression = '';
    }
    animateButton(event.target);
}

function animateButton(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 100);
}

function animateResult() {
    display.style.transform = 'scale(1.05)';
    setTimeout(() => {
        display.style.transform = 'scale(1)';
    }, 200);
}
