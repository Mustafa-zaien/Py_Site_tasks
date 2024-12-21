// Define the correct answers
const correctAnswers = {
    q1: 'a',
    q2: 'c',
    q3: 'a',
    q4: 'c',
    q5: 'a',
    q6: 'a',
    q7: 'b',
    q8: 'a',
    q9: 'c',
    q10: 'c',
    q11:'a',
    q12:'b',
    q13:'b',
    q14:'b',
    q15:'a',
    q16:'a',
    q17:'c',
    q18:'c',
    q19:'b',
    q20:'c',
};
// Get the user name from localStorage
const userName = localStorage.getItem('userName');

// Select the element with class "welcome"
const welcomeElement = document.querySelector('.welcome');

// Check if the userName and the welcome element exist
if (userName && welcomeElement) {
    welcomeElement.innerHTML = `Welcome, ${userName}!`; // Update the content
} else if (!userName) {
    console.error('No user name found in localStorage.');
} else {
    console.error('No element with class "welcome" found.');
}

// Attach event listener to the form
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default submission

    // Get user's answers and initialize score
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    // Iterate through each question
    for (let question in correctAnswers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        const answerOptions = document.querySelectorAll(`input[name="${question}"]`);

        // Remove previous styling
        answerOptions.forEach(option => {
            const parentLabel = option.parentElement;
            parentLabel.classList.remove('correct-answer', 'incorrect-answer');
        });

        // Check user's answer
        if (userAnswer) {
            const parentLabel = userAnswer.parentElement;
            if (userAnswer.value === correctAnswers[question]) {
                score++;
                parentLabel.classList.add('correct-answer'); // Mark correct answer
            } else {
                parentLabel.classList.add('incorrect-answer'); // Mark wrong answer
            }
        }
    }

    // Find or create the result container
    let resultContainer = document.querySelector('#result-container');
    if (!resultContainer) {
        resultContainer = document.createElement('div');
        resultContainer.id = 'result-container';
        resultContainer.style.marginTop = '2rem';
        resultContainer.style.padding = '1rem';
        resultContainer.style.backgroundColor = '#f0f8ff';
        resultContainer.style.border = '1px solid #4682b4';
        resultContainer.style.borderRadius = '5px';
        resultContainer.style.textAlign = 'center';
        resultContainer.style.fontSize = '1.2rem';
        resultContainer.style.color = '#333';
        document.querySelector('form').appendChild(resultContainer);
    }

    // Update the result content
    resultContainer.textContent = `You scored ${score} out of ${totalQuestions}!`;
    resultContainer.style.display = 'block'; // Show result
});

// Add toggle functionality
document.querySelector('#toggle-btn').addEventListener('click', function () {
    const resultContainer = document.querySelector('#result-container');
    const form = document.querySelector('form');

    if (resultContainer && resultContainer.style.display !== 'none') {
        // Hide result and reset form
        resultContainer.style.display = 'none';
        form.reset();

        // Remove all styles from the labels
        const labels = document.querySelectorAll('label');
        labels.forEach(label => {
            label.classList.remove('correct-answer', 'incorrect-answer');
        });
    } else if (resultContainer) {
        // Show result
        resultContainer.style.display = 'block';
    }
});
