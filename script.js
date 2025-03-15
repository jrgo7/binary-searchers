let solved = [false, false]; // true if corresponding question was solved

function resetAnimation(element) {
    element.style.animation = 'none';
    element.offsetHeight;
    element.style.animation = '';
}

function checkQ1() {
    let number = 21;
    let inputElement = document.getElementById('q1-input');
    let userAnswer = inputElement.value;
    let outputElement = document.querySelector('#q1-result');
    outputElement.classList.remove('wrong');
    outputElement.classList.remove('correct');

    if (number < userAnswer) {
        outputElement.textContent = "The number is less than your answer!";
        outputElement.classList.add('wrong');
    } else if (number > userAnswer) {
        outputElement.textContent = "The number is greater than your answer!";
        outputElement.classList.add('wrong');
    } else {
        outputElement.textContent = "Correct!";
        outputElement.classList.add('correct');
        inputElement.toggleAttribute('disabled');
        document.querySelector('#q1-check').toggleAttribute('disabled');
        solved[0] = true;
    }

    resetAnimation(outputElement);
    checkSolvedAll();
}

function checkQ2() {
    let key = 'Jericho'; // 46
    let inputElement = document.getElementById('q2-input');
    let userAnswer = inputElement.value;
    let outputElement = document.querySelector('#q2-result');
    outputElement.classList.remove('wrong');
    outputElement.classList.remove('correct');
    let nameFound = names[userAnswer];

    outputElement.textContent = `The name there is ${nameFound}. `;

    if (nameFound.localeCompare(key) === 0) {
        outputElement.classList.add('correct');
        outputElement.textContent += "That's where he is!"
        inputElement.toggleAttribute('disabled');
        document.querySelector('#q2-check').toggleAttribute('disabled');
        solved[1] = true;
    } else {
        outputElement.classList.add('wrong');
        outputElement.textContent += "That's not Jericho...";
    }

    resetAnimation(outputElement);
    checkSolvedAll();
}

function checkSolvedAll() {
    let solvedAll = true;
    solved.forEach(entry => {
        if (!entry) {
            solvedAll = false;
        }
    })

    console.log(solved);

    if (solvedAll) {
        let solvedEverything = document.querySelector('#solved-everything');
        solvedEverything.innerText = "Congratulations! You solved them all! Head on to the front to claim your spot!";
        resetAnimation(solvedEverything);
    }
}