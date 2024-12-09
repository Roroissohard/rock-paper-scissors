const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const resultDisplau = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))